
import { NextResponse } from "next/server";
import db from './../../../lib/db'
import fs from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";
import { uploadPublicImage } from "@/lib/blobUpload";


export const runtime = "nodejs";

// ==========================================
// GET API: Fetch awards
// GET /api/awards
// ==========================================
export async function GET() {
  try {
    const [rows] = await db.query(
      `SELECT *
       FROM awards
       WHERE status = 'active'
       ORDER BY year ASC, id DESC`
    );

    return NextResponse.json({
      success: true,
      message: "Awards fetched successfully",
      data: rows,
    });
  } catch (error) {
    console.error("GET awards error:", error);

    return NextResponse.json(
      { success: false, message: "Failed to fetch awards" },
      { status: 500 }
    );
  }
}

// ==========================================
// POST API: Upload award + save in MySQL
// POST /api/awards
// Content-Type: multipart/form-data
// ==========================================
// export async function POST(request) {
//   let uploadedPath = null;

//   try {
//     const formData = await request.formData();

//     const userId = Number(formData.get("userId"));
//     const year = Number(formData.get("year"));
//     const category = formData.get("category");
//     const title = formData.get("title");
//     const organization = formData.get("organization") || null;
//     const description = formData.get("description") || null;
//     const icon = formData.get("icon") || null;
//     const featured = formData.get("featured") === "true" ? 1 : 0;
//     const image = formData.get("image");

//     if (
//       !Number.isInteger(userId) ||
//       userId <= 0 ||
//       !Number.isInteger(year) ||
//       year < 1901 ||
//       year > 2155 ||
//       typeof category !== "string" ||
//       !category.trim() ||
//       typeof title !== "string" ||
//       !title.trim()
//     ) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Valid userId, year, category and title are required",
//         },
//         { status: 400 }
//       );
//     }

//     let imagePath = null;

//     // Image is optional
//     if (image && typeof image !== "string" && image.size > 0) {
//       const allowedTypes = {
//         "image/jpeg": ".jpg",
//         "image/png": ".png",
//         "image/webp": ".webp",
//         "image/gif": ".gif",
//       };

//       if (!allowedTypes[image.type]) {
//         return NextResponse.json(
//           {
//             success: false,
//             message: "Only JPG, PNG, WEBP and GIF images are allowed",
//           },
//           { status: 400 }
//         );
//       }

//       if (image.size > 5 * 1024 * 1024) {
//         return NextResponse.json(
//           {
//             success: false,
//             message: "Image size must be 5MB or less",
//           },
//           { status: 400 }
//         );
//       }

//       const uploadDir = path.join(
//         process.cwd(),
//         "public",
//         "uploads",
//         "awards"
//       );

//       await fs.mkdir(uploadDir, { recursive: true });

//       const fileName = `${randomUUID()}${allowedTypes[image.type]}`;
//       uploadedPath = path.join(uploadDir, fileName);

//       const bytes = await image.arrayBuffer();

//       await fs.writeFile(uploadedPath, Buffer.from(bytes));

//       imagePath = `/uploads/awards/${fileName}`;
//     }

//     const [result] = await db.query(
//       `INSERT INTO awards
//        (
//          userId,
//          year,
//          category,
//          title,
//          organization,
//          description,
//          image,
//          icon,
//          featured,
//          status
//        )
//        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'active')`,
//       [
//         userId,
//         year,
//         category.trim(),
//         title.trim(),
//         organization,
//         description,
//         imagePath,
//         icon,
//         featured,
//       ]
//     );

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Award created successfully",
//         data: {
//           id: result.insertId,
//           userId,
//           year,
//           category: category.trim(),
//           title: title.trim(),
//           organization,
//           description,
//           image: imagePath,
//           icon,
//           featured: Boolean(featured),
//           status: "active",
//         },
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     // Remove uploaded file if the database insert fails
//     if (uploadedPath) {
//       await fs.unlink(uploadedPath).catch(() => {});
//     }

//     console.error("POST awards error:", error);

//     return NextResponse.json(
//       { success: false, message: "Failed to create award" },
//       { status: 500 }
//     );
//   }
// }




export async function POST(request) {
  try {
    const formData = await request.formData();

    const userId = Number(formData.get("userId"));
    const year = Number(formData.get("year"));
    const category = formData.get("category");
    const title = formData.get("title");
    const organization = formData.get("organization") || null;
    const description = formData.get("description") || null;
    const icon = formData.get("icon") || null;
    const featured = formData.get("featured") === "true" ? 1 : 0;
    const image = formData.get("image");

    // ==========================================
    // VALIDATION
    // ==========================================

    if (
      !Number.isInteger(userId) ||
      userId <= 0 ||
      !Number.isInteger(year) ||
      year < 1901 ||
      year > 2155 ||
      typeof category !== "string" ||
      !category.trim() ||
      typeof title !== "string" ||
      !title.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Valid userId, year, category and title are required",
        },
        { status: 400 }
      );
    }

    // ==========================================
    // UPLOAD IMAGE TO VERCEL BLOB
    // ==========================================

    let imagePath = null;

    if (
      image &&
      typeof image.arrayBuffer === "function" &&
      image.size > 0
    ) {
      imagePath = await uploadPublicImage(image, "awards");
    }

    // ==========================================
    // INSERT AWARD INTO MYSQL
    // ==========================================

    const [result] = await db.query(
      `INSERT INTO awards
       (
         userId,
         year,
         category,
         title,
         organization,
         description,
         image,
         icon,
         featured,
         status
       )
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'active')`,
      [
        userId,
        year,
        category.trim(),
        title.trim(),
        organization,
        description,
        imagePath,
        icon,
        featured,
      ]
    );

    // ==========================================
    // SUCCESS RESPONSE
    // ==========================================

    return NextResponse.json(
      {
        success: true,
        message: "Award created successfully",
        data: {
          id: result.insertId,
          userId,
          year,
          category: category.trim(),
          title: title.trim(),
          organization,
          description,
          image: imagePath,
          icon,
          featured: Boolean(featured),
          status: "active",
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST awards error:", error);

    const validationMessages = [
      "Please select an image",
      "Only JPG, PNG, WEBP and GIF images are allowed",
      "Image must be 5 MB or smaller",
      "Invalid upload folder",
      "BLOB_READ_WRITE_TOKEN is not configured",
    ];

    if (validationMessages.includes(error.message)) {
      const isConfigurationError = error.message.includes(
        "BLOB_READ_WRITE_TOKEN"
      );

      return NextResponse.json(
        {
          success: false,
          message: isConfigurationError
            ? "Image storage is not configured"
            : error.message,
        },
        { status: isConfigurationError ? 500 : 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create award",
        error:
          process.env.NODE_ENV === "development"
            ? error.message
            : undefined,
      },
      { status: 500 }
    );
  }
}
