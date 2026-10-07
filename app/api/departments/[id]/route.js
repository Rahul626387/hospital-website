import { NextResponse } from "next/server";
import db from "../../../../lib/db";



// export async function GET(request, { params }) {
// //   console.log("========== DEPARTMENT API HIT ==========");

//   try {
//     const { id } = await params;

//     // console.log("Department ID:", id);

//     // const [rows] = await db.query(
//     //   "SELECT * FROM department_new WHERE id = ? LIMIT 1",
//     //   [id]
//     // );

//     const [rows] = await db.query(
//   `
//   SELECT 
//     d.*,
//     doc.*
//   FROM department_new d
//   LEFT JOIN doctors doc 
//     ON d.doctor_id = doc.id
//   WHERE d.id = ?
//   LIMIT 1
//   `,
//   [id]
// );

//     // console.log("Rows:", rows);

//     if (rows.length === 0) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Department not found",
//         },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json({
//       success: true,
//       data: rows[0],
//     });
//   } catch (error) {
//     console.error("Department API Error:", error);

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Internal server error",
//         error: error.message,
//       },
//       { status: 500 }
//     );
//   }
// }

export async function GET(request, { params }) {
  try {
    const { id } = await params;

    // =========================
    // GET DEPARTMENT
    // =========================
    const [departmentRows] = await db.query(
      `
      SELECT *
      FROM departments
      WHERE id = ?
      LIMIT 1
      `,
      [id]
    );

    if (departmentRows.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Department not found",
        },
        { status: 404 }
      );
    }

    const department = departmentRows[0];

    // =========================
    // DOCTOR IDS
    // =========================
    let doctorIds = [];

    try {
      if (department.doctor_id) {
        // JSON format:
        // "[1,2,4]"

        doctorIds = JSON.parse(department.doctor_id);
      }
    } catch (error) {
      console.error("Doctor ID JSON Parse Error:", error);

      doctorIds = [];
    }

    // Make sure array
    if (!Array.isArray(doctorIds)) {
      doctorIds = [];
    }

    // =========================
    // GET DOCTORS
    // =========================
    let doctors = [];

    if (doctorIds.length > 0) {
      const placeholders = doctorIds.map(() => "?").join(",");

      const [doctorRows] = await db.query(
        `
        SELECT
          id,
          name,
          specialty_id,
          qualification,
          experience_years,
          image_url
        FROM doctors
        WHERE id IN (${placeholders})
        ORDER BY FIELD(id, ${placeholders})
        `,
        [...doctorIds, ...doctorIds]
      );

      doctors = doctorRows;
    }

    // =========================
    // FINAL RESPONSE
    // =========================
    return NextResponse.json({
      success: true,
      data: {
        ...department,
        doctors,
      },
    });
  } catch (error) {
    console.error("Department API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}