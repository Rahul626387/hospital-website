import { NextResponse } from "next/server";
import db from "./../../../lib/db";
import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

export async function GET() {
  try {
    const [rows] = await db.query(`
            SELECT 
                d.*,
                dept.name AS department_name,
                s.name AS specialty_name
            FROM doctors d 
            LEFT JOIN departments dept  ON d.department_id = dept.id
            LEFT JOIN specialties s  ON d.specialty_id = s.id ORDER BY d.id DESC
            `);

    return NextResponse.json({
      success: true,
      data: rows,
    });
  } catch (error) {
    console.error("Doctors API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch doctors",
        error: error.message,
      },
      { status: 500 },
    );
  }
}

// post apis

// =====================================================
// CONFIG
// =====================================================

const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5 MB

const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

// =====================================================
// HELPERS
// =====================================================

function parseJSON(value, defaultValue = []) {
  if (!value) return defaultValue;

  try {
    return JSON.parse(value);
  } catch (error) {
    return defaultValue;
  }
}

function sanitizeFileName(fileName) {
  return fileName
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9._-]/g, "")
    .toLowerCase();
}

// =====================================================
// POST - CREATE DOCTOR
// =====================================================

export async function POST(request) {
  let uploadedFilePath = null;

  try {
    // ===================================================
    // READ FORM DATA
    // ===================================================

    const formData = await request.formData();

    // ===================================================
    // NORMAL FIELDS
    // ===================================================

    const created_by = formData.get("created_by");
    const department_id = formData.get("department_id");
    const specialty_id = formData.get("specialty_id");

    const name = formData.get("name");
    const contact_no = formData.get("contact_no");
    const email = formData.get("email");
    const qualification = formData.get("qualification");

    const experience_years = formData.get("experience_years");

    const web_experience = formData.get("web_experience");

    const web_bio = formData.get("web_bio");
    const web_heading = formData.get("web_heading");

    const available = formData.get("available");
    const status = formData.get("status");

    // ===================================================
    // JSON FIELDS
    // ===================================================

    const web_specilization_raw = formData.get("web_specilization");

    const web_certificat_raw = formData.get("web_certificat");

    const web_awards_raw = formData.get("web_awards");

    // ===================================================
    // IMAGE
    // ===================================================

    const image = formData.get("image");

    // ===================================================
    // REQUIRED VALIDATION
    // ===================================================

    if (!name || !name.toString().trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Doctor name is required",
        },
        { status: 400 },
      );
    }

    if (!department_id) {
      return NextResponse.json(
        {
          success: false,
          message: "Department is required",
        },
        { status: 400 },
      );
    }

    // ===================================================
    // PARSE JSON
    // ===================================================

    const web_specilization = parseJSON(web_specilization_raw, []);

    const web_certificat = parseJSON(web_certificat_raw, []);

    const web_awards = parseJSON(web_awards_raw, []);

    // ===================================================
    // VALIDATE JSON TYPES
    // ===================================================

    if (!Array.isArray(web_specilization)) {
      return NextResponse.json(
        {
          success: false,
          message: "web_specilization must be an array",
        },
        { status: 400 },
      );
    }

    if (!Array.isArray(web_certificat)) {
      return NextResponse.json(
        {
          success: false,
          message: "web_certificat must be an array",
        },
        { status: 400 },
      );
    }

    if (!Array.isArray(web_awards)) {
      return NextResponse.json(
        {
          success: false,
          message: "web_awards must be an array",
        },
        { status: 400 },
      );
    }

    // ===================================================
    // IMAGE UPLOAD
    // ===================================================

    let image_url = null;

    if (
      image &&
      typeof image === "object" &&
      typeof image.arrayBuffer === "function"
    ) {
      // -------------------------------------------------
      // Validate image type
      // -------------------------------------------------

      if (!ALLOWED_IMAGE_TYPES.includes(image.type)) {
        return NextResponse.json(
          {
            success: false,
            message:
              "Invalid image type. Only JPG, JPEG, PNG and WEBP are allowed.",
          },
          { status: 400 },
        );
      }

      // -------------------------------------------------
      // Validate image size
      // -------------------------------------------------

      if (image.size > MAX_IMAGE_SIZE) {
        return NextResponse.json(
          {
            success: false,
            message: "Image size must be less than 5MB.",
          },
          { status: 400 },
        );
      }

      // -------------------------------------------------
      // Upload directory
      // -------------------------------------------------

      const uploadDir = path.join(
        process.cwd(),
        "public",
        "uploads",
        "doctors",
      );

      await fs.mkdir(uploadDir, {
        recursive: true,
      });

      // -------------------------------------------------
      // File extension
      // -------------------------------------------------

      const originalName = image.name || "doctor-image";

      const safeName = sanitizeFileName(originalName);

      const extension = path.extname(safeName) || ".jpg";

      const baseName = path.basename(safeName, extension);

      // -------------------------------------------------
      // Unique filename
      // -------------------------------------------------

      const uniqueName = `${baseName}-${Date.now()}-${crypto
        .randomBytes(5)
        .toString("hex")}${extension}`;

      const filePath = path.join(uploadDir, uniqueName);

      // -------------------------------------------------
      // Save file
      // -------------------------------------------------

      const bytes = await image.arrayBuffer();

      const buffer = Buffer.from(bytes);

      await fs.writeFile(filePath, buffer);

      uploadedFilePath = filePath;

      // -------------------------------------------------
      // URL saved in DB
      // -------------------------------------------------

      image_url = `/uploads/doctors/${uniqueName}`;
    }

    // ===================================================
    // DEFAULT VALUES
    // ===================================================

    const finalExperienceYears = experience_years
      ? Number(experience_years)
      : 0;

    const finalAvailable =
      available !== null && available !== "" ? Number(available) : 1;

    const finalStatus = status !== null && status !== "" ? Number(status) : 1;

    // ===================================================
    // MYSQL INSERT
    // ===================================================

    const sql = `
      INSERT INTO doctors (
        created_by,
        department_id,
        specialty_id,
        name,
        contact_no,
        email,
        qualification,
        experience_years,
        web_experience,
        image_url,
        web_bio,
        web_heading,
        web_specilization,
        web_certificat,
        web_awards,
        available,
        status
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      created_by ? Number(created_by) : null,

      Number(department_id),

      specialty_id ? Number(specialty_id) : null,

      name.toString().trim(),

      contact_no ? contact_no.toString().trim() : null,

      email ? email.toString().trim() : null,

      qualification ? qualification.toString().trim() : null,

      finalExperienceYears,

      web_experience ? web_experience.toString().trim() : null,

      image_url,

      web_bio ? web_bio.toString().trim() : null,

      web_heading ? web_heading.toString().trim() : null,

      JSON.stringify(web_specilization),

      JSON.stringify(web_certificat),

      JSON.stringify(web_awards),

      finalAvailable,

      finalStatus,
    ];

    const [result] = await db.query(sql, values);

    // ===================================================
    // SUCCESS RESPONSE
    // ===================================================

    return NextResponse.json(
      {
        success: true,
        message: "Doctor created successfully",

        data: {
          id: result.insertId,
          name: name,
          image_url: image_url,
          department_id: Number(department_id),
          specialty_id: specialty_id ? Number(specialty_id) : null,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("CREATE DOCTOR ERROR:", error);

    // ===================================================
    // DELETE IMAGE IF DB INSERT FAILED
    // ===================================================

    if (uploadedFilePath) {
      try {
        await fs.unlink(uploadedFilePath);
      } catch (deleteError) {
        console.error("IMAGE DELETE ERROR:", deleteError);
      }
    }

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create doctor",
        error: error.message,
      },
      { status: 500 },
    );
  }
}
