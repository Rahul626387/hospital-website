
import { NextResponse } from "next/server";
import db from "../../../lib/db";


export async function GET() {
  try {
    const [rows] = await db.query("SELECT 1 AS test");
    // console.log("rows ",rows)

    return NextResponse.json({
      status: true,
      message: "MySQL Connected Successfully",
      data: rows,
    });
  } catch (error) {
    console.error("MySQL Error:", error);

    return NextResponse.json(
      {
        status: false,
        message: "Database Connection Failed",
        error: error.message,
      },
      { status: 500 }
    );
  }
}