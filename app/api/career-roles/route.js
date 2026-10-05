import { NextResponse } from "next/server";
import db from "../../../lib/db";

// =====================================================
// GET - Fetch Career Roles
// =====================================================
// export async function GET(request) {
//   try {
//     const { searchParams } = new URL(request.url);

//     const id = searchParams.get("id");
//     const activeOnly = searchParams.get("active");

//     let query = `
//       SELECT
//         cr.*,
//         d.name AS department_name
//       FROM career_roles cr
//       LEFT JOIN departments d
//         ON cr.department_id = d.id
//     `;

//     const params = [];
//     const conditions = [];

//     // Get single role
//     if (id) {
//       conditions.push("cr.id = ?");
//       params.push(id);
//     }

//     // Get active roles only
//     if (activeOnly === "true") {
//       conditions.push("cr.is_active = 1");
//     }

//     if (conditions.length > 0) {
//       query += ` WHERE ${conditions.join(" AND ")}`;
//     }

//     query += ` ORDER BY cr.display_order ASC, cr.id DESC`;

//     const [rows] = await db.query(query, params);

//     // Convert JSON fields back to arrays
//     const formattedRows = rows.map((row) => ({
//       ...row,

//       responsibilities: parseJSON(row.responsibilities),
//       skills: parseJSON(row.skills),

//       is_active: Boolean(row.is_active),
//     }));

//     return NextResponse.json({
//       success: true,
//       data: id ? formattedRows[0] || null : formattedRows,
//     });
//   } catch (error) {
//     console.error("GET Career Roles Error:", error);

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to fetch career roles",
//         error: error.message,
//       },
//       { status: 500 }
//     );
//   }
// }


// export async function GET() {
//   try {
//     const [rows] = await db.query(`
//       SELECT * FROM career_roles
//       ORDER BY display_order ASC, id DESC
//     `);

//     return NextResponse.json({
//       success: true,
//       data: rows,
//     });
//   } catch (error) {
//     console.error("GET Career Roles Error:", error);

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to fetch career roles",
//       },
//       { status: 500 }
//     );
//   }
// }


export async function GET() {
  try {
  const [rows] = await db.query(`
  SELECT 
    cr.*,
    d.id AS department_id,
    d.name AS department_name
  FROM career_roles cr
  LEFT JOIN departments d 
    ON d.id = cr.department_id
  ORDER BY cr.id DESC
`);

    return NextResponse.json({
      success: true,
      data: rows,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch career roles",
      },
      { status: 500 }
    );
  }
}


// =====================================================
// POST - Create Career Role
// =====================================================
export async function POST(request) {
  try {
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

    // -----------------------------------------
    // Validation
    // -----------------------------------------
    if (!title?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Job title is required",
        },
        { status: 400 }
      );
    }

    if (!department_id) {
      return NextResponse.json(
        {
          success: false,
          message: "Department is required",
        },
        { status: 400 }
      );
    }

    if (!location?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Location is required",
        },
        { status: 400 }
      );
    }

    if (!experience?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Experience is required",
        },
        { status: 400 }
      );
    }

    if (!qualification?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Qualification is required",
        },
        { status: 400 }
      );
    }

    if (!vacancy_code?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Vacancy code is required",
        },
        { status: 400 }
      );
    }

    if (!vacancies || Number(vacancies) < 1) {
      return NextResponse.json(
        {
          success: false,
          message: "At least one vacancy is required",
        },
        { status: 400 }
      );
    }

    // -----------------------------------------
    // Insert
    // -----------------------------------------
    const query = `
      INSERT INTO career_roles (
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
        display_order
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      department_id,
      title.trim(),
      location.trim(),
      experience.trim(),
      qualification.trim(),
      employment_type || "Full Time",
      summary?.trim() || null,
      description?.trim() || null,
      JSON.stringify(responsibilities || []),
      JSON.stringify(skills || []),
      vacancy_code.trim().toUpperCase(),
      Number(vacancies),
      application_deadline || null,
      is_active === false ? 0 : 1,
      Number(display_order) || 0,
    ];

    const [result] = await db.query(query, values);

    // -----------------------------------------
    // Get created role
    // -----------------------------------------
    const [rows] = await db.query(
      `
      SELECT
        cr.*,
        d.name AS department_name
      FROM career_roles cr
      LEFT JOIN departments d
        ON cr.department_id = d.id
      WHERE cr.id = ?
      `,
      [result.insertId]
    );

    const role = rows[0];

    return NextResponse.json(
      {
        success: true,
        message: "Career role created successfully",
        // data: {
        //   ...role,
        //   responsibilities: parseJSON(role.responsibilities),
        //   skills: parseJSON(role.skills),
        //   is_active: Boolean(role.is_active),
        // },
         data: {
             id: result.insertId,
            },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST Career Role Error:", error);

    // Duplicate vacancy code
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
        message: "Failed to create career role",
        error: error.message,
      },
      { status: 500 }
    );
  }
}


// =====================================================
// PUT - Update Career Role
// =====================================================
export async function PUT(request) {
  try {
    const body = await request.json();

    const {
      id,
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

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "Career role ID is required",
        },
        { status: 400 }
      );
    }

    if (!title?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Job title is required",
        },
        { status: 400 }
      );
    }

    if (!department_id) {
      return NextResponse.json(
        {
          success: false,
          message: "Department is required",
        },
        { status: 400 }
      );
    }

    if (!location?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Location is required",
        },
        { status: 400 }
      );
    }

    if (!vacancy_code?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Vacancy code is required",
        },
        { status: 400 }
      );
    }

    // -----------------------------------------
    // Update
    // -----------------------------------------
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
      department_id,
      title.trim(),
      location.trim(),
      experience?.trim() || null,
      qualification?.trim() || null,
      employment_type || "Full Time",
      summary?.trim() || null,
      description?.trim() || null,
      JSON.stringify(responsibilities || []),
      JSON.stringify(skills || []),
      vacancy_code.trim().toUpperCase(),
      Number(vacancies) || 1,
      application_deadline || null,
      is_active ? 1 : 0,
      Number(display_order) || 0,
      id,
    ];

    const [result] = await db.query(query, values);

    if (result.affectedRows === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Career role not found",
        },
        { status: 404 }
      );
    }

    // -----------------------------------------
    // Get updated role
    // -----------------------------------------
    const [rows] = await db.query(
      `
      SELECT
        cr.*,
        d.name AS department_name
      FROM career_roles cr
      LEFT JOIN departments d
        ON cr.department_id = d.id
      WHERE cr.id = ?
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
        error: error.message,
      },
      { status: 500 }
    );
  }
}


// =====================================================
// DELETE - Delete Career Role
// =====================================================
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);

    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "Career role ID is required",
        },
        { status: 400 }
      );
    }

    const [result] = await db.query(
      `DELETE FROM career_roles WHERE id = ?`,
      [id]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Career role not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Career role deleted successfully",
    });
  } catch (error) {
    console.error("DELETE Career Role Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete career role",
        error: error.message,
      },
      { status: 500 }
    );
  }
}


// =====================================================
// JSON Helper
// =====================================================
function parseJSON(value) {
  if (!value) return [];

  if (Array.isArray(value)) {
    return value;
  }

  try {
    return JSON.parse(value);
  } catch {
    return [];
  }
}