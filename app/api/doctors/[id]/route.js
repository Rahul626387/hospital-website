import { NextResponse } from "next/server";
import db from './../../../../lib/db'


export async function GET(request, { params }) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "Doctor ID is required",
        },
        { status: 400 }
      );
    }

    const [rows] = await db.query(
      "SELECT * FROM doctors WHERE id = ?",
      [id]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Doctor not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Doctor fetched successfully",
      data: rows[0],
    });
  } catch (error) {
    console.error("Get Doctor Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch doctor",
        error: error.message,
      },
      { status: 500 }
    );
  }
}