
import { NextResponse } from "next/server";
import db from "../../../lib/db";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  try {
    // const [applications] = await db.query(`
    //   SELECT * FROM career_applications
    //   ORDER BY id DESC
    // `);

    const [applications] = await db.query(`
          SELECT 
            ca.*,
            cr.title AS job_title,
            cr.department_id,
            d.name AS department_name
          FROM career_applications ca
          LEFT JOIN career_roles cr 
            ON ca.career_role_id = cr.id
          LEFT JOIN departments d 
            ON cr.department_id = d.id
          ORDER BY ca.id DESC
        `);

    return NextResponse.json(
      {
        success: true,
        message: "Career applications fetched successfully",
        data: applications,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Career applications GET error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch career applications",
        error: error.message,
      },
      { status: 500 }
    );
  }
}



export async function POST(request) {
  try {
    // ==========================================
    // GET FORM DATA
    // ==========================================

    const formData = await request.formData();

    const career_role_id = formData.get("career_role_id");
    const full_name = formData.get("full_name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const experience = formData.get("experience");
    const current_position = formData.get("current_position");
    const additional_information = formData.get(
      "additional_information"
    );

    // File
    const resume = formData.get("resume");

    // ==========================================
    // VALIDATION
    // ==========================================

    if (!career_role_id) {
      return Response.json(
        {
          status: 0,
          message: "Career role is required",
        },
        { status: 400 }
      );
    }

    if (!full_name?.trim()) {
      return Response.json(
        {
          status: 0,
          message: "Full name is required",
        },
        { status: 400 }
      );
    }

    if (!phone?.trim()) {
      return Response.json(
        {
          status: 0,
          message: "Phone number is required",
        },
        { status: 400 }
      );
    }

    if (!/^[6-9]\d{9}$/.test(phone.trim())) {
      return Response.json(
        {
          status: 0,
          message: "Please enter a valid 10 digit phone number",
        },
        { status: 400 }
      );
    }

    if (!email?.trim()) {
      return Response.json(
        {
          status: 0,
          message: "Email is required",
        },
        { status: 400 }
      );
    }

    // ==========================================
    // CHECK CAREER ROLE
    // ==========================================

    const [role] = await db.query(
      `
      SELECT
        id,
        department_id,
        title
      FROM career_roles
      WHERE id = ?
      LIMIT 1
      `,
      [career_role_id]
    );

    if (role.length === 0) {
      return Response.json(
        {
          status: 0,
          message: "Invalid career role",
        },
        { status: 400 }
      );
    }

    // ==========================================
    // FILE UPLOAD
    // ==========================================

    let resumeName = null;
    let resumePath = null;

    if (resume && typeof resume === "object" && resume.size > 0) {
      // Allowed file types
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowedTypes.includes(resume.type)) {
        return Response.json(
          {
            status: 0,
            message: "Only PDF, DOC and DOCX files are allowed",
          },
          { status: 400 }
        );
      }

      // Maximum 5 MB
      const maxSize = 5 * 1024 * 1024;

      if (resume.size > maxSize) {
        return Response.json(
          {
            status: 0,
            message: "Resume size must be less than 5 MB",
          },
          { status: 400 }
        );
      }

      // ==========================================
      // CREATE UPLOAD DIRECTORY
      // ==========================================

      const uploadDir = path.join(
        process.cwd(),
        "public",
        "uploads",
        "resumes"
      );

      await fs.mkdir(uploadDir, {
        recursive: true,
      });

      // ==========================================
      // UNIQUE FILE NAME
      // ==========================================

      const originalName = resume.name || "resume";

      const extension = path.extname(originalName);

      const safeName = path
        .basename(originalName, extension)
        .replace(/[^a-zA-Z0-9-_]/g, "_");

      const uniqueName = `${Date.now()}-${safeName}${extension}`;

      const filePath = path.join(
        uploadDir,
        uniqueName
      );

      // ==========================================
      // SAVE FILE
      // ==========================================

      const bytes = await resume.arrayBuffer();

      const buffer = Buffer.from(bytes);

      await fs.writeFile(filePath, buffer);

      // Database values
      resumeName = originalName;

      resumePath = `/uploads/resumes/${uniqueName}`;
    }

    // ==========================================
    // INSERT APPLICATION
    // ==========================================

    const [result] = await db.query(
      `
      INSERT INTO career_applications
      (
        career_role_id,
        full_name,
        phone,
        email,
        experience,
        current_position,
        additional_information,
        resume_name,
        resume_path,
        status
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        career_role_id,
        full_name.trim(),
        phone.trim(),
        email.trim(),
        experience?.trim() || null,
        current_position?.trim() || null,
        additional_information?.trim() || null,
        resumeName,
        resumePath,
        "New",
      ]
    );

    // ==========================================
    // SUCCESS
    // ==========================================

    return Response.json(
      {
        status: 1,
        message: "Application submitted successfully",

        data: {
          id: result.insertId,
          career_role_id: Number(career_role_id),
          full_name: full_name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          resume_name: resumeName,
          resume_path: resumePath,
          status: "New",
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(
      "Career Application Error:",
      error
    );

    return Response.json(
      {
        status: 0,
        message: "Something went wrong",
        error:
          process.env.NODE_ENV === "development"
            ? error.message
            : undefined,
      },
      { status: 500 }
    );
  }
}