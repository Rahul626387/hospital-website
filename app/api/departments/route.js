import { NextResponse } from "next/server";
import db from './../../../lib/db'
import fs from "fs/promises";
import path from "path";

export async function GET() {
  try {
    const [rows] = await db.query("SELECT * FROM departments");
    

    return NextResponse.json({
      success: true,
      data: rows,
    });
  } catch (error) {
    console.error("Department API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch departments",
        error: error.message,
      },
      { status: 500 }
    );
  }
}


// save post api departments 

export async function POST(request) {
  try {
    const formData = await request.formData();

    // =========================
    // Basic Fields
    // =========================

    const name = formData.get("name")?.toString().trim();
    const slug = formData.get("slug")?.toString().trim();

    const icon =
      formData.get("icon")?.toString().trim() || null;

    const short_description =
      formData.get("short_description")?.toString().trim() || null;

    const description =
      formData.get("description")?.toString().trim() || null;

    const phone =
      formData.get("phone")?.toString().trim() || null;

    const location =
      formData.get("location")?.toString().trim() || null;

    const timing =
      formData.get("timing")?.toString().trim() || null;

    const status =
      formData.get("status")?.toString().trim() || "active";

    const user_id = formData.get("user_id")
      ? Number(formData.get("user_id"))
      : null;

    // =========================
    // Doctor IDs
    // =========================

    let doctorIds = [];

    const doctorIdsRaw = formData.get("doctor_ids");

    if (doctorIdsRaw) {
      try {
        doctorIds = JSON.parse(doctorIdsRaw.toString());

        if (!Array.isArray(doctorIds)) {
          doctorIds = [];
        }

        doctorIds = doctorIds
          .map(Number)
          .filter(
            (id) => Number.isInteger(id) && id > 0
          );
      } catch (error) {
        console.error(
          "Doctor IDs JSON parse error:",
          error
        );

        doctorIds = [];
      }
    }

    // =========================
    // Boolean Fields
    // =========================

    const emergency_available =
      formData.get("emergency_available") === "1" ||
      formData.get("emergency_available") === "true"
        ? 1
        : 0;

    const appointment_available =
      formData.get("appointment_available") === "1" ||
      formData.get("appointment_available") === "true"
        ? 1
        : 0;

    // =========================
    // Images
    // =========================

    const image = formData.get("image");
    const bannerImage = formData.get("banner_image");

    let imagePath = null;
    let bannerImagePath = null;

    // =========================
    // Validation
    // =========================

    if (!name) {
      return NextResponse.json(
        {
          success: false,
          message: "Department name is required",
        },
        { status: 400 }
      );
    }

    if (!slug) {
      return NextResponse.json(
        {
          success: false,
          message: "Department slug is required",
        },
        { status: 400 }
      );
    }

    // =========================
    // Duplicate Slug
    // =========================

    const [existing] = await db.query(
      `
      SELECT id
      FROM departments
      WHERE slug = ?
      LIMIT 1
      `,
      [slug]
    );

    if (existing.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Department slug already exists",
        },
        { status: 409 }
      );
    }

    // =========================
    // Upload Directory
    // =========================

    const uploadDir = path.join(
      process.cwd(),
      "public",
      "uploads",
      "departments"
    );

    await fs.mkdir(uploadDir, {
      recursive: true,
    });

    // =========================
    // Save Main Image
    // =========================

    if (
      image &&
      typeof image === "object" &&
      image.size > 0
    ) {
      const extension =
        path.extname(image.name) || ".jpg";

      const fileName = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2, 8)}${extension}`;

      const filePath = path.join(
        uploadDir,
        fileName
      );

      const buffer = Buffer.from(
        await image.arrayBuffer()
      );

      await fs.writeFile(filePath, buffer);

      imagePath = `/uploads/departments/${fileName}`;
    }

    // =========================
    // Save Banner Image
    // =========================

    if (
      bannerImage &&
      typeof bannerImage === "object" &&
      bannerImage.size > 0
    ) {
      const extension =
        path.extname(bannerImage.name) || ".jpg";

      const fileName = `${Date.now()}-banner-${Math.random()
        .toString(36)
        .substring(2, 8)}${extension}`;

      const filePath = path.join(
        uploadDir,
        fileName
      );

      const buffer = Buffer.from(
        await bannerImage.arrayBuffer()
      );

      await fs.writeFile(filePath, buffer);

      bannerImagePath =
        `/uploads/departments/${fileName}`;
    }

    // =========================
    // Insert Department
    // =========================

    const [result] = await db.query(
      `
      INSERT INTO departments
      (
        name,
        slug,
        icon,
        short_description,
        description,
        doctor_id,
        phone,
        location,
        timing,
        emergency_available,
        appointment_available,
        status,
        user_id,
        image,
        banner_image
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        name,
        slug,
        icon,
        short_description,
        description,

        // Multiple doctors
        JSON.stringify(doctorIds),

        phone,
        location,
        timing,
        emergency_available,
        appointment_available,
        status,
        user_id,

        // Images
        imagePath,
        bannerImagePath,
      ]
    );

    // =========================
    // Success
    // =========================

    return NextResponse.json(
      {
        success: true,
        message: "Department created successfully",

        data: {
          id: result.insertId,
          name,
          slug,
          icon,
          doctor_id: doctorIds,
          image: imagePath,
          banner_image: bannerImagePath,
          phone,
          location,
          timing,
          emergency_available,
          appointment_available,
          status,
          user_id,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(
      "Department POST API Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create department",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
