import { NextResponse } from "next/server";
import db from "@/lib/db";

// export async function POST(request) {
//   try {
//     const body = await request.json();

//     const {
//       department_id,
//       doctor_id,
//       appointment_date,
//       preferred_time,
//       patient_name,
//       phone_number,
//       email,
//       age,
//       gender,
//       reason_for_visit,
//     } = body;

//     // Required fields
//     if (
//       !appointment_date ||
//       !patient_name ||
//       !phone_number
//     ) {
//       return NextResponse.json(
//         {
//           success: false,
//           message:
//             "Appointment date, patient name and phone number are required.",
//         },
//         { status: 400 }
//       );
//     }

//     // Generate appointment number
//     const appointmentNo = `APT-${Date.now()}`;

//     const [result] = await db.execute(
//       `
//       INSERT INTO appointments
//       (
//         appointment_no,
//         department_id,
//         doctor_id,
//         appointment_date,
//         preferred_time,
//         patient_name,
//         phone_number,
//         email,
//         age,
//         gender,
//         reason_for_visit,
//         status
//       )
//       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
//       `,
//       [
//         appointmentNo,
//         department_id || null,
//         doctor_id || null,
//         appointment_date,
//         preferred_time || null,
//         patient_name,
//         phone_number,
//         email || null,
//         age || null,
//         gender || null,
//         reason_for_visit || null,
//         "Pending",
//       ]
//     );

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Appointment booked successfully.",
//         data: {
//           id: result.insertId,
//           appointment_no: appointmentNo,
//           status: "Pending",
//         },
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("CREATE APPOINTMENT ERROR:", error);

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to create appointment.",
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
      department_id,
      doctor_id,
      appointment_date,
      preferred_time,
      patient_name,
      phone_number,
      email,
      age,
      gender,
      reason_for_visit,
    } = body;

    // =========================
    // VALIDATION
    // =========================

    if (!appointment_date) {
      return NextResponse.json(
        {
          success: false,
          message: "Appointment date is required.",
        },
        { status: 400 }
      );
    }

    if (!patient_name?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Patient name is required.",
        },
        { status: 400 }
      );
    }

    if (!phone_number?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Phone number is required.",
        },
        { status: 400 }
      );
    }

    // =========================
    // APPOINTMENT NUMBER
    // =========================

    const appointmentNo = `APT-${Date.now()}`;

    // =========================
    // INSERT
    // =========================

    const [result] = await db.execute(
      `
        INSERT INTO appointments
        (
          appointment_no,
          department_id,
          doctor_id,
          appointment_date,
          preferred_time,
          patient_name,
          phone_number,
          email,
          age,
          gender,
          reason_for_visit,
          status
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        appointmentNo,

        department_id
          ? Number(department_id)
          : null,

        doctor_id
          ? Number(doctor_id)
          : null,

        appointment_date,

        preferred_time || null,

        patient_name.trim(),

        phone_number.trim(),

        email?.trim() || null,

        age
          ? Number(age)
          : null,

        gender || null,

        reason_for_visit?.trim() || null,

        "Pending",
      ]
    );

    // =========================
    // SUCCESS
    // =========================

    return NextResponse.json(
      {
        success: true,
        message: "Appointment booked successfully.",

        data: {
          id: result.insertId,
          appointment_no: appointmentNo,
          status: "Pending",
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(
      "CREATE APPOINTMENT ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create appointment.",
      },
      { status: 500 }
    );
  }
}