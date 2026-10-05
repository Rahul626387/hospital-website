import { NextResponse } from "next/server";
import db from './../../../lib/db'

export async function GET() {
  try {
   const [rows] = await db.query(`
      SELECT 
        s.*,
        d.name AS department_name
      FROM specialties s
      LEFT JOIN departments d 
        ON s.department_id = d.id
      ORDER BY s.id DESC
    `);

    return NextResponse.json({
      success: true,
      data: rows,
    });
  } catch (error) {
    console.error("Specialties API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch specialties",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// =========================
// CREATE specialties
// POST /api/specialties
// =========================

// export async function POST(request) {
//   try {
//     const body = await request.json();

//     const {
//       name,
//       department_id,
//       status = "1",
//       user_id,
//     } = body;

//     // Validation
//     if (!name) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Specialty name is required",
//         },
//         { status: 400 }
//       );
//     }

//     if (!department_id) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Department is required",
//         },
//         { status: 400 }
//       );
//     }

//     // Insert
//     const [result] = await db.execute(
//       `
//       INSERT INTO specialties
//       (
//         name,
//         department_id,
//         status,
//         created_by
//       )
//       VALUES (?, ?, ?, ?)
//       `,
//       [
//         name,
//         department_id,
//         status,
//         user_id || null,
//       ]
//     );

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Specialty saved successfully",
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("SPECIALTY POST ERROR:", error);

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to save specialty",
//         error: error.message,
//       },
//       { status: 500 }
//     );
//   }
// }


export async function POST(request) {
  try {
    const body = await request.json();

    const {
      name,
      department_id,
      status = "1",
      user_id,
    } = body;

    if (!name) {
      return NextResponse.json(
        {
          success: false,
          message: "Specialty name is required",
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

    // Check duplicate
    const [existing] = await db.execute(
      `
      SELECT id
      FROM specialties
      WHERE name = ?
      AND department_id = ?
      LIMIT 1
      `,
      [name.trim(), department_id]
    );

    if (existing.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "This specialty already exists in this department",
        },
        { status: 409 }
      );
    }

    // Insert
    const [result] = await db.execute(
      `
      INSERT INTO specialties
      (
        name,
        department_id,
        status,
        created_by
      )
      VALUES (?, ?, ?, ?)
      `,
      [
        name.trim(),
        department_id,
        status,
        user_id || null,
      ]
    );

    return NextResponse.json(
      {
        success: true,
        message: "Specialty saved successfully",
        id: result.insertId,
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("SPECIALTY POST ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save specialty",
      },
      { status: 500 }
    );
  }
}