import { NextResponse } from "next/server";
import db from './../../../lib/db'
import fs from "fs/promises";
import path from "path";
import { uploadPublicImage, deleteBlobImage } from "@/lib/blobUpload";

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

// export async function POST(request) {
//   try {
//     const formData = await request.formData();

//     // =========================
//     // Basic Fields
//     // =========================

//     const name = formData.get("name")?.toString().trim();
//     const slug = formData.get("slug")?.toString().trim();

//     const icon =
//       formData.get("icon")?.toString().trim() || null;

//     const short_description =
//       formData.get("short_description")?.toString().trim() || null;

//     const description =
//       formData.get("description")?.toString().trim() || null;

//     const phone =
//       formData.get("phone")?.toString().trim() || null;

//     const location =
//       formData.get("location")?.toString().trim() || null;

//     const timing =
//       formData.get("timing")?.toString().trim() || null;

//     const status =
//       formData.get("status")?.toString().trim() || "active";

//     const user_id = formData.get("user_id")
//       ? Number(formData.get("user_id"))
//       : null;

//     // =========================
//     // Doctor IDs
//     // =========================

//     let doctorIds = [];

//     const doctorIdsRaw = formData.get("doctor_ids");

//     if (doctorIdsRaw) {
//       try {
//         doctorIds = JSON.parse(doctorIdsRaw.toString());

//         if (!Array.isArray(doctorIds)) {
//           doctorIds = [];
//         }

//         doctorIds = doctorIds
//           .map(Number)
//           .filter(
//             (id) => Number.isInteger(id) && id > 0
//           );
//       } catch (error) {
//         console.error(
//           "Doctor IDs JSON parse error:",
//           error
//         );

//         doctorIds = [];
//       }
//     }

//     // =========================
//     // Boolean Fields
//     // =========================

//     const emergency_available =
//       formData.get("emergency_available") === "1" ||
//       formData.get("emergency_available") === "true"
//         ? 1
//         : 0;

//     const appointment_available =
//       formData.get("appointment_available") === "1" ||
//       formData.get("appointment_available") === "true"
//         ? 1
//         : 0;

//     // =========================
//     // Images
//     // =========================

//     const image = formData.get("image");
//     const bannerImage = formData.get("banner_image");

//     let imagePath = null;
//     let bannerImagePath = null;

//     // =========================
//     // Validation
//     // =========================

//     if (!name) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Department name is required",
//         },
//         { status: 400 }
//       );
//     }

//     if (!slug) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Department slug is required",
//         },
//         { status: 400 }
//       );
//     }

//     // =========================
//     // Duplicate Slug
//     // =========================

//     const [existing] = await db.query(
//       `
//       SELECT id
//       FROM departments
//       WHERE slug = ?
//       LIMIT 1
//       `,
//       [slug]
//     );

//     if (existing.length > 0) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Department slug already exists",
//         },
//         { status: 409 }
//       );
//     }

//     // =========================
//     // Upload Directory
//     // =========================

//     const uploadDir = path.join(
//       process.cwd(),
//       "public",
//       "uploads",
//       "departments"
//     );

//     await fs.mkdir(uploadDir, {
//       recursive: true,
//     });

//     // =========================
//     // Save Main Image
//     // =========================

//     if (
//       image &&
//       typeof image === "object" &&
//       image.size > 0
//     ) {
//       const extension =
//         path.extname(image.name) || ".jpg";

//       const fileName = `${Date.now()}-${Math.random()
//         .toString(36)
//         .substring(2, 8)}${extension}`;

//       const filePath = path.join(
//         uploadDir,
//         fileName
//       );

//       const buffer = Buffer.from(
//         await image.arrayBuffer()
//       );

//       await fs.writeFile(filePath, buffer);

//       imagePath = `/uploads/departments/${fileName}`;
//     }

//     // =========================
//     // Save Banner Image
//     // =========================

//     if (
//       bannerImage &&
//       typeof bannerImage === "object" &&
//       bannerImage.size > 0
//     ) {
//       const extension =
//         path.extname(bannerImage.name) || ".jpg";

//       const fileName = `${Date.now()}-banner-${Math.random()
//         .toString(36)
//         .substring(2, 8)}${extension}`;

//       const filePath = path.join(
//         uploadDir,
//         fileName
//       );

//       const buffer = Buffer.from(
//         await bannerImage.arrayBuffer()
//       );

//       await fs.writeFile(filePath, buffer);

//       bannerImagePath =
//         `/uploads/departments/${fileName}`;
//     }

//     // =========================
//     // Insert Department
//     // =========================

//     const [result] = await db.query(
//       `
//       INSERT INTO departments
//       (
//         name,
//         slug,
//         icon,
//         short_description,
//         description,
//         doctor_id,
//         phone,
//         location,
//         timing,
//         emergency_available,
//         appointment_available,
//         status,
//         user_id,
//         image,
//         banner_image
//       )
//       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
//       `,
//       [
//         name,
//         slug,
//         icon,
//         short_description,
//         description,

//         // Multiple doctors
//         JSON.stringify(doctorIds),

//         phone,
//         location,
//         timing,
//         emergency_available,
//         appointment_available,
//         status,
//         user_id,

//         // Images
//         imagePath,
//         bannerImagePath,
//       ]
//     );

//     // =========================
//     // Success
//     // =========================

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Department created successfully",

//         data: {
//           id: result.insertId,
//           name,
//           slug,
//           icon,
//           doctor_id: doctorIds,
//           image: imagePath,
//           banner_image: bannerImagePath,
//           phone,
//           location,
//           timing,
//           emergency_available,
//           appointment_available,
//           status,
//           user_id,
//         },
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error(
//       "Department POST API Error:",
//       error
//     );

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to create department",
//         error: error.message,
//       },
//       { status: 500 }
//     );
//   }
// }




// save api image 





function parseDoctorIds(value) {
  if (!value) return [];

  let doctorIds;

  try {
    doctorIds = JSON.parse(value.toString());
  } catch {
    throw new Error("doctor_ids must be a valid JSON array");
  }

  if (!Array.isArray(doctorIds)) {
    throw new Error("doctor_ids must be an array");
  }

  const ids = doctorIds.map(Number);

  if (!ids.every((id) => Number.isInteger(id) && id > 0)) {
    throw new Error("doctor_ids must contain valid positive IDs");
  }

  return [...new Set(ids)];
}

function parseOptionalUserId(value) {
  if (value === null || value === "") return null;

  const id = Number(value);

  if (!Number.isInteger(id) || id <= 0) {
    throw new Error("Invalid user_id");
  }

  return id;
}

export async function POST(request) {
  let uploadedImageUrl = null;
  let uploadedBannerUrl = null;

  try {
    const formData = await request.formData();

    // Basic fields
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

    const user_id = parseOptionalUserId(formData.get("user_id"));

    // Doctor IDs
    const doctorIds = parseDoctorIds(formData.get("doctor_ids"));

    // Boolean fields
    const emergencyValue = formData.get("emergency_available");
    const appointmentValue = formData.get("appointment_available");

    const emergency_available =
      emergencyValue === "1" || emergencyValue === "true" ? 1 : 0;

    const appointment_available =
      appointmentValue === "1" || appointmentValue === "true" ? 1 : 0;

    // Images
    const image = formData.get("image");
    const bannerImage = formData.get("banner_image");

    const hasImage =
      image &&
      typeof image === "object" &&
      typeof image.arrayBuffer === "function" &&
      image.size > 0;

    const hasBanner =
      bannerImage &&
      typeof bannerImage === "object" &&
      typeof bannerImage.arrayBuffer === "function" &&
      bannerImage.size > 0;

    // Required fields
    if (!name) {
      return NextResponse.json(
        { success: false, message: "Department name is required" },
        { status: 400 }
      );
    }

    if (!slug) {
      return NextResponse.json(
        { success: false, message: "Department slug is required" },
        { status: 400 }
      );
    }

    // Duplicate slug check
    const [existing] = await db.query(
      "SELECT id FROM departments WHERE slug = ? LIMIT 1",
      [slug]
    );

    if (existing.length > 0) {
      return NextResponse.json(
        { success: false, message: "Department slug already exists" },
        { status: 409 }
      );
    }

    // Upload main image to Vercel Blob
    if (hasImage) {
      uploadedImageUrl = await uploadPublicImage(image, "departments");
    }

    // Upload banner image to Vercel Blob
    if (hasBanner) {
      uploadedBannerUrl = await uploadPublicImage(
        bannerImage,
        "departments"
      );
    }

    // Insert department
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
        JSON.stringify(doctorIds),
        phone,
        location,
        timing,
        emergency_available,
        appointment_available,
        status,
        user_id,
        uploadedImageUrl,
        uploadedBannerUrl,
      ]
    );

    return NextResponse.json(
      {
        success: true,
        message: "Department created successfully",
        data: {
          id: result.insertId,
          name,
          slug,
          icon,
          short_description,
          description,
          doctor_id: doctorIds,
          phone,
          location,
          timing,
          emergency_available,
          appointment_available,
          status,
          user_id,
          image: uploadedImageUrl,
          banner_image: uploadedBannerUrl,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Department POST API Error:", error);

    // Clean up uploaded files if a later operation fails.
    for (const url of [uploadedImageUrl, uploadedBannerUrl]) {
      if (url) {
        try {
          await deleteBlobImage(url);
        } catch (cleanupError) {
          console.error("Department Blob cleanup error:", cleanupError);
        }
      }
    }

    const message = error?.message || "";

    const validationErrors = [
      "Please select an image",
      "Only JPG, PNG, WEBP and GIF images are allowed",
      "Image must be 5 MB or smaller",
      "Invalid upload folder",
      "doctor_ids must be a valid JSON array",
      "doctor_ids must be an array",
      "doctor_ids must contain valid positive IDs",
      "Invalid user_id",
    ];

    const isValidationError = validationErrors.includes(message);

    return NextResponse.json(
      {
        success: false,
        message:
          message === "BLOB_READ_WRITE_TOKEN is not configured"
            ? "Vercel Blob token is not configured"
            : isValidationError
              ? message
              : "Failed to create department",
      },
      {
        status:
          isValidationError
            ? 400
            : message === "BLOB_READ_WRITE_TOKEN is not configured"
              ? 500
              : 500,
      }
    );
  }
}
