// =====================================================
import { NextResponse } from "next/server";
import db from "@/lib/db";

// =====================================================
// PUT - Update Career Role by ID
// =====================================================
export async function PUT(request, { params }) {
  try {
    // Dynamic route: /api/career-roles/[id]
    const { id: paramId } = await params;

    const id = Number(paramId);

    if (!Number.isInteger(id) || id <= 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Valid career role ID is required",
        },
        { status: 400 }
      );
    }

    const body = await request.json();

    const {
      department_id,
      title,
      location,
      experience,
      qualification,
      employment_type,
      summary,
      description,
      responsibilities,
      skills,
      vacancy_code,
      vacancies,
      application_deadline,
      is_active,
      display_order,
    } = body;

    // Validate title
    if (!title || typeof title !== "string" || !title.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Job title is required",
        },
        { status: 400 }
      );
    }

    // Validate department
    const departmentId = Number(department_id);

    if (!Number.isInteger(departmentId) || departmentId <= 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Valid department is required",
        },
        { status: 400 }
      );
    }

    // Validate location
    if (
      !location ||
      typeof location !== "string" ||
      !location.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Location is required",
        },
        { status: 400 }
      );
    }

    // Validate vacancy code
    if (
      !vacancy_code ||
      typeof vacancy_code !== "string" ||
      !vacancy_code.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Vacancy code is required",
        },
        { status: 400 }
      );
    }

    // Validate vacancies
    const vacancyCount = Number(vacancies ?? 1);

    if (!Number.isInteger(vacancyCount) || vacancyCount < 1) {
      return NextResponse.json(
        {
          success: false,
          message: "Vacancies must be a whole number greater than zero",
        },
        { status: 400 }
      );
    }

    // Validate display order
    const order = Number(display_order ?? 0);

    if (!Number.isInteger(order) || order < 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Display order must be zero or greater",
        },
        { status: 400 }
      );
    }

    // Validate arrays
    if (
      responsibilities !== undefined &&
      !Array.isArray(responsibilities)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Responsibilities must be an array",
        },
        { status: 400 }
      );
    }

    if (skills !== undefined && !Array.isArray(skills)) {
      return NextResponse.json(
        {
          success: false,
          message: "Skills must be an array",
        },
        { status: 400 }
      );
    }

    // Check whether role exists
    const [existingRows] = await db.query(
      "SELECT id FROM career_roles WHERE id = ? LIMIT 1",
      [id]
    );

    if (existingRows.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Career role not found",
        },
        { status: 404 }
      );
    }

    // Update career role
    const query = `
      UPDATE career_roles
      SET
        department_id = ?,
        title = ?,
        location = ?,
        experience = ?,
        qualification = ?,
        employment_type = ?,
        summary = ?,
        description = ?,
        responsibilities = ?,
        skills = ?,
        vacancy_code = ?,
        vacancies = ?,
        application_deadline = ?,
        is_active = ?,
        display_order = ?,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `;

    const values = [
      departmentId,
      title.trim(),
      location.trim(),
      experience?.trim() || null,
      qualification?.trim() || null,
      employment_type || "Full Time",
      summary?.trim() || null,
      description?.trim() || null,
      JSON.stringify(responsibilities ?? []),
      JSON.stringify(skills ?? []),
      vacancy_code.trim().toUpperCase(),
      vacancyCount,
      application_deadline || null,
      is_active === true ||
      is_active === 1 ||
      is_active === "1"
        ? 1
        : 0,
      order,
      id,
    ];

    await db.query(query, values);

    // Fetch updated career role
    const [rows] = await db.query(
      `
      SELECT
        cr.*,
        d.name AS department_name
      FROM career_roles cr
      LEFT JOIN departments d
        ON cr.department_id = d.id
      WHERE cr.id = ?
      LIMIT 1
      `,
      [id]
    );

    const role = rows[0];

    return NextResponse.json({
      success: true,
      message: "Career role updated successfully",
      data: {
        ...role,
        responsibilities: parseJSON(role.responsibilities),
        skills: parseJSON(role.skills),
        is_active: Boolean(role.is_active),
      },
    });
  } catch (error) {
    console.error("PUT Career Role Error:", error);

    if (error.code === "ER_DUP_ENTRY") {
      return NextResponse.json(
        {
          success: false,
          message: "Vacancy code already exists",
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update career role",
      },
      { status: 500 }
    );
  }
}

// =====================================================
// DELETE - Delete Career Role by ID
// =====================================================
export async function DELETE(request, { params }) {
  try {
    // Dynamic route: /api/career-roles/[id]
    const { id: paramId } = await params;

    const id = Number(paramId);

    if (!Number.isInteger(id) || id <= 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Valid career role ID is required",
        },
        { status: 400 }
      );
    }

    const [existingRows] = await db.query(
      "SELECT id FROM career_roles WHERE id = ? LIMIT 1",
      [id]
    );

    if (existingRows.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Career role not found",
        },
        { status: 404 }
      );
    }

    const [result] = await db.query(
      "DELETE FROM career_roles WHERE id = ?",
      [id]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Career role could not be deleted",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Career role deleted successfully",
      data: { id },
    });
  } catch (error) {
    console.error("DELETE Career Role Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete career role",
      },
      { status: 500 }
    );
  }
}

// =====================================================
// JSON HELPER
// =====================================================
function parseJSON(value) {
  if (!value) return [];

  if (Array.isArray(value)) {
    return value;
  }

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}