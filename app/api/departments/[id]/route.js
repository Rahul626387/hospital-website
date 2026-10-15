import { NextResponse } from "next/server";
import db from "../../../../lib/db";

import fs from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";


import {
  uploadPublicImage,
  deleteBlobImage,
} from "@/lib/blobUpload";


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







// =====================================
// PUT API - UPDATE DEPARTMENT
// =====================================
// export async function PUT(request, { params }) {
//   let newImagePath = null;
//   let newBannerImagePath = null;

//   try {
//     const { id } = await params;
//     const departmentId = Number(id);

//     if (
//       !Number.isInteger(departmentId) ||
//       departmentId <= 0
//     ) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Invalid department ID",
//         },
//         { status: 400 }
//       );
//     }

//     const formData = await request.formData();

//     // =====================================
//     // BASIC FIELDS
//     // =====================================

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

//     const userIdRaw = formData.get("user_id");

//     const user_id =
//       userIdRaw !== null && userIdRaw.toString().trim() !== ""
//         ? Number(userIdRaw)
//         : null;

//     // =====================================
//     // VALIDATION
//     // =====================================

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

//     if (
//       user_id !== null &&
//       (!Number.isInteger(user_id) || user_id <= 0)
//     ) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Invalid user ID",
//         },
//         { status: 400 }
//       );
//     }

//     // =====================================
//     // CHECK EXISTING DEPARTMENT
//     // =====================================

//     const [departments] = await db.query(
//       `SELECT id, image, banner_image
//        FROM departments
//        WHERE id = ?
//        LIMIT 1`,
//       [departmentId]
//     );

//     if (departments.length === 0) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Department not found",
//         },
//         { status: 404 }
//       );
//     }

//     const existingDepartment = departments[0];

//     // =====================================
//     // CHECK DUPLICATE SLUG
//     // =====================================

//     const [existingSlug] = await db.query(
//       `SELECT id
//        FROM departments
//        WHERE slug = ? AND id != ?
//        LIMIT 1`,
//       [slug, departmentId]
//     );

//     if (existingSlug.length > 0) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Department slug already exists",
//         },
//         { status: 409 }
//       );
//     }

//     // =====================================
//     // DOCTOR IDS
//     // Example: [1, 2, 3]
//     // =====================================

//     let doctorIds = [];

//     const doctorIdsRaw = formData.get("doctor_ids");

//     if (doctorIdsRaw !== null) {
//       try {
//         const parsedDoctorIds = JSON.parse(
//           doctorIdsRaw.toString()
//         );

//         if (!Array.isArray(parsedDoctorIds)) {
//           return NextResponse.json(
//             {
//               success: false,
//               message: "doctor_ids must be an array",
//             },
//             { status: 400 }
//           );
//         }

//         const normalizedIds = parsedDoctorIds.map(Number);

//         if (
//           normalizedIds.some(
//             (doctorId) =>
//               !Number.isInteger(doctorId) || doctorId <= 0
//           )
//         ) {
//           return NextResponse.json(
//             {
//               success: false,
//               message: "Invalid doctor IDs",
//             },
//             { status: 400 }
//           );
//         }

//         doctorIds = [...new Set(normalizedIds)];
//       } catch {
//         return NextResponse.json(
//           {
//             success: false,
//             message: "Invalid doctor_ids JSON",
//           },
//           { status: 400 }
//         );
//       }
//     } else {
//       // If doctor_ids is omitted, retain existing doctor IDs.
//       try {
//         const currentDoctorIds = existingDepartment.doctor_id;

//         doctorIds = Array.isArray(currentDoctorIds)
//           ? currentDoctorIds
//           : currentDoctorIds
//             ? JSON.parse(currentDoctorIds)
//             : [];
//       } catch {
//         doctorIds = [];
//       }
//     }

//     // =====================================
//     // BOOLEAN FIELDS
//     // =====================================

//     const parseBoolean = (value, fallback = 0) => {
//       if (value === null) return fallback;

//       const normalized = value.toString().toLowerCase();

//       return ["1", "true", "yes", "on"].includes(normalized)
//         ? 1
//         : 0;
//     };

//     const emergency_available = parseBoolean(
//       formData.get("emergency_available")
//     );

//     const appointment_available = parseBoolean(
//       formData.get("appointment_available")
//     );

//     // =====================================
//     // IMAGE UPLOAD
//     // =====================================

//     const uploadDir = path.join(
//       process.cwd(),
//       "public",
//       "uploads",
//       "departments"
//     );

//     await fs.mkdir(uploadDir, { recursive: true });

//     const saveImage = async (file, prefix = "") => {
//       if (
//         !file ||
//         typeof file === "string" ||
//         typeof file.arrayBuffer !== "function" ||
//         file.size <= 0
//       ) {
//         return null;
//       }

//       // Maximum file size: 5 MB
//       if (file.size > 5 * 1024 * 1024) {
//         throw new Error("Image size must not exceed 5 MB");
//       }

//       // Validate image type
//       const allowedTypes = [
//         "image/jpeg",
//         "image/png",
//         "image/webp",
//         "image/gif",
//       ];

//       if (!allowedTypes.includes(file.type)) {
//         throw new Error(
//           "Only JPG, PNG, WEBP and GIF images are allowed"
//         );
//       }

//       // Derive extension from validated MIME type.
//       const extensions = {
//         "image/jpeg": ".jpg",
//         "image/png": ".png",
//         "image/webp": ".webp",
//         "image/gif": ".gif",
//       };

//       const fileName =
//         `${Date.now()}-${prefix}${crypto.randomUUID()}${extensions[file.type]}`;

//       const filePath = path.join(uploadDir, fileName);

//       const buffer = Buffer.from(await file.arrayBuffer());

//       await fs.writeFile(filePath, buffer, { flag: "wx" });

//       return `/uploads/departments/${fileName}`;
//     };

//     const image = formData.get("image");
//     const bannerImage = formData.get("banner_image");

//     let imagePath = existingDepartment.image;
//     let bannerImagePath = existingDepartment.banner_image;

//     // Upload main image only if a new file was selected.
//     if (
//       image &&
//       typeof image !== "string" &&
//       image.size > 0
//     ) {
//       newImagePath = await saveImage(image);
//       imagePath = newImagePath;
//     }

//     // Upload banner only if a new file was selected.
//     if (
//       bannerImage &&
//       typeof bannerImage !== "string" &&
//       bannerImage.size > 0
//     ) {
//       newBannerImagePath = await saveImage(
//         bannerImage,
//         "banner-"
//       );

//       bannerImagePath = newBannerImagePath;
//     }

//     // =====================================
//     // UPDATE DEPARTMENT
//     // =====================================

//     const [result] = await db.query(
//       `UPDATE departments
//        SET
//          name = ?,
//          slug = ?,
//          icon = ?,
//          short_description = ?,
//          description = ?,
//          doctor_id = ?,
//          phone = ?,
//          location = ?,
//          timing = ?,
//          emergency_available = ?,
//          appointment_available = ?,
//          status = ?,
//          user_id = ?,
//          image = ?,
//          banner_image = ?
//        WHERE id = ?`,
//       [
//         name,
//         slug,
//         icon,
//         short_description,
//         description,
//         JSON.stringify(doctorIds),
//         phone,
//         location,
//         timing,
//         emergency_available,
//         appointment_available,
//         status,
//         user_id,
//         imagePath,
//         bannerImagePath,
//         departmentId,
//       ]
//     );

//     // =====================================
//     // DELETE OLD IMAGES AFTER SUCCESSFUL UPDATE
//     // =====================================

//     const deleteOldImage = async (oldPath, newPath) => {
//       if (!oldPath || oldPath === newPath) return;

//       // Delete only files inside the departments upload directory.
//       const oldFileName = path.basename(oldPath);

//       if (oldPath !== `/uploads/departments/${oldFileName}`) {
//         return;
//       }

//       try {
//         await fs.unlink(path.join(uploadDir, oldFileName));
//       } catch (error) {
//         if (error.code !== "ENOENT") {
//           console.error("Old image cleanup failed:", error);
//         }
//       }
//     };

//     if (newImagePath) {
//       await deleteOldImage(
//         existingDepartment.image,
//         imagePath
//       );
//     }

//     if (newBannerImagePath) {
//       await deleteOldImage(
//         existingDepartment.banner_image,
//         bannerImagePath
//       );
//     }

//     // =====================================
//     // SUCCESS RESPONSE
//     // =====================================

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Department updated successfully",
//         data: {
//           id: departmentId,
//           name,
//           slug,
//           icon,
//           short_description,
//           description,
//           doctor_id: doctorIds,
//           phone,
//           location,
//           timing,
//           emergency_available,
//           appointment_available,
//           status,
//           user_id,
//           image: imagePath,
//           banner_image: bannerImagePath,
//         },
//       },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Department PUT API Error:", error);

//     // Remove newly uploaded files if the update failed.
//     for (const uploadedPath of [
//       newImagePath,
//       newBannerImagePath,
//     ]) {
//       if (uploadedPath) {
//         try {
//           await fs.unlink(
//             path.join(
//               process.cwd(),
//               "public",
//               uploadedPath.replace(/^\/+/, "")
//             )
//           );
//         } catch (cleanupError) {
//           console.error(
//             "Uploaded file cleanup failed:",
//             cleanupError
//           );
//         }
//       }
//     }

//     const isValidationError =
//       error.message === "Image size must not exceed 5 MB" ||
//       error.message.startsWith("Only JPG") ;

//     return NextResponse.json(
//       {
//         success: false,
//         message: isValidationError
//           ? error.message
//           : "Failed to update department",
//         error: error.message,
//       },
//       { status: isValidationError ? 400 : 500 }
//     );
//   }
// }



// =============================================
// PUT API - UPDATE DEPARTMENT
// =============================================
// export async function PUT(request, { params }) {
//   let newImagePath = null;
//   let newBannerImagePath = null;

//   try {
//     const { id } = await params;
//     const departmentId = Number(id);

//     // =============================================
//     // VALIDATE ID
//     // =============================================
//     if (!Number.isInteger(departmentId) || departmentId <= 0) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Invalid department ID",
//         },
//         { status: 400 }
//       );
//     }

//     const formData = await request.formData();

//     // =============================================
//     // BASIC FIELDS
//     // =============================================
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

//     const userIdRaw = formData.get("user_id");

//     const user_id =
//       userIdRaw !== null && userIdRaw.toString().trim() !== ""
//         ? Number(userIdRaw)
//         : null;

//     // =============================================
//     // REQUIRED FIELD VALIDATION
//     // =============================================
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

//     if (
//       user_id !== null &&
//       (!Number.isInteger(user_id) || user_id <= 0)
//     ) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Invalid user ID",
//         },
//         { status: 400 }
//       );
//     }

//     // =============================================
//     // FETCH EXISTING DEPARTMENT
//     // IMPORTANT: doctor_id MUST BE SELECTED
//     // =============================================
//     const [departments] = await db.query(
//       `SELECT id, doctor_id, image, banner_image
//        FROM departments
//        WHERE id = ?
//        LIMIT 1`,
//       [departmentId]
//     );

//     if (departments.length === 0) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Department not found",
//         },
//         { status: 404 }
//       );
//     }

//     const existingDepartment = departments[0];

//     // =============================================
//     // DUPLICATE SLUG CHECK
//     // =============================================
//     const [existingSlug] = await db.query(
//       `SELECT id
//        FROM departments
//        WHERE slug = ? AND id != ?
//        LIMIT 1`,
//       [slug, departmentId]
//     );

//     if (existingSlug.length > 0) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Department slug already exists",
//         },
//         { status: 409 }
//       );
//     }

//     // =============================================
//     // DOCTOR IDS
//     // Accepts JSON: "[1,2,3]"
//     // Database column: doctor_id
//     // =============================================
//     let doctorIds = [];

//     const doctorIdsRaw = formData.get("doctor_ids");

//     if (doctorIdsRaw !== null) {
//       try {
//         const parsedDoctorIds = JSON.parse(
//           doctorIdsRaw.toString()
//         );

//         if (!Array.isArray(parsedDoctorIds)) {
//           return NextResponse.json(
//             {
//               success: false,
//               message: "doctor_ids must be an array",
//             },
//             { status: 400 }
//           );
//         }

//         const normalizedIds = parsedDoctorIds.map(Number);

//         if (
//           normalizedIds.some(
//             (doctorId) =>
//               !Number.isInteger(doctorId) || doctorId <= 0
//           )
//         ) {
//           return NextResponse.json(
//             {
//               success: false,
//               message: "Invalid doctor IDs",
//             },
//             { status: 400 }
//           );
//         }

//         doctorIds = [...new Set(normalizedIds)];
//       } catch {
//         return NextResponse.json(
//           {
//             success: false,
//             message: "Invalid doctor_ids JSON",
//           },
//           { status: 400 }
//         );
//       }
//     } else {
//       // If the frontend omits doctor_ids,
//       // keep the existing doctors unchanged.
//       try {
//         const currentDoctorIds = existingDepartment.doctor_id;

//         if (Array.isArray(currentDoctorIds)) {
//           doctorIds = currentDoctorIds.map(Number);
//         } else if (typeof currentDoctorIds === "string") {
//           const parsed = JSON.parse(currentDoctorIds);
//           doctorIds = Array.isArray(parsed)
//             ? parsed.map(Number)
//             : [];
//         } else {
//           doctorIds = [];
//         }
//       } catch {
//         doctorIds = [];
//       }
//     }

//     console.log("Department ID:", departmentId);
//     console.log("Doctor IDs:", doctorIds);

//     // =============================================
//     // BOOLEAN FIELDS
//     // =============================================
//     const parseBoolean = (value, fallback = 0) => {
//       if (value === null) return fallback;

//       return ["1", "true", "yes", "on"].includes(
//         value.toString().trim().toLowerCase()
//       )
//         ? 1
//         : 0;
//     };

//     const emergency_available = parseBoolean(
//       formData.get("emergency_available")
//     );

//     const appointment_available = parseBoolean(
//       formData.get("appointment_available")
//     );

//     // =============================================
//     // IMAGE UPLOAD DIRECTORY
//     // =============================================
//     const uploadDir = path.join(
//       process.cwd(),
//       "public",
//       "uploads",
//       "departments"
//     );

//     await fs.mkdir(uploadDir, { recursive: true });

//     // =============================================
//     // IMAGE SAVE FUNCTION
//     // =============================================
//     const saveImage = async (file, prefix = "") => {
//       if (
//         !file ||
//         typeof file === "string" ||
//         typeof file.arrayBuffer !== "function" ||
//         file.size <= 0
//       ) {
//         return null;
//       }

//       if (file.size > 5 * 1024 * 1024) {
//         throw new Error("Image size must not exceed 5 MB");
//       }

//       const extensions = {
//         "image/jpeg": ".jpg",
//         "image/png": ".png",
//         "image/webp": ".webp",
//         "image/gif": ".gif",
//       };

//       if (!extensions[file.type]) {
//         throw new Error(
//           "Only JPG, PNG, WEBP and GIF images are allowed"
//         );
//       }

//       const fileName =
//         `${Date.now()}-${prefix}${randomUUID()}${extensions[file.type]}`;

//       const filePath = path.join(uploadDir, fileName);

//       const buffer = Buffer.from(await file.arrayBuffer());

//       await fs.writeFile(filePath, buffer, { flag: "wx" });

//       return `/uploads/departments/${fileName}`;
//     };

//     // =============================================
//     // PRESERVE OLD IMAGES
//     // =============================================
//     const image = formData.get("image");
//     const bannerImage = formData.get("banner_image");

//     let imagePath = existingDepartment.image;
//     let bannerImagePath = existingDepartment.banner_image;

//     // Upload main image only if a new file is provided.
//     if (
//       image &&
//       typeof image !== "string" &&
//       image.size > 0
//     ) {
//       newImagePath = await saveImage(image);
//       imagePath = newImagePath;
//     }

//     // Upload banner only if a new file is provided.
//     if (
//       bannerImage &&
//       typeof bannerImage !== "string" &&
//       bannerImage.size > 0
//     ) {
//       newBannerImagePath = await saveImage(
//         bannerImage,
//         "banner-"
//       );

//       bannerImagePath = newBannerImagePath;
//     }

//     // =============================================
//     // UPDATE DEPARTMENT
//     // =============================================
//     const [result] = await db.query(
//       `UPDATE departments
//        SET
//          name = ?,
//          slug = ?,
//          icon = ?,
//          short_description = ?,
//          description = ?,
//          doctor_id = ?,
//          phone = ?,
//          location = ?,
//          timing = ?,
//          emergency_available = ?,
//          appointment_available = ?,
//          status = ?,
//          user_id = ?,
//          image = ?,
//          banner_image = ?
//        WHERE id = ?`,
//       [
//         name,
//         slug,
//         icon,
//         short_description,
//         description,
//         JSON.stringify(doctorIds),
//         phone,
//         location,
//         timing,
//         emergency_available,
//         appointment_available,
//         status,
//         user_id,
//         imagePath,
//         bannerImagePath,
//         departmentId,
//       ]
//     );

//     // =============================================
//     // DELETE OLD IMAGES AFTER SUCCESSFUL UPDATE
//     // =============================================
//     const deleteOldImage = async (oldPath, newPath) => {
//       if (!oldPath || oldPath === newPath) return;

//       const oldFileName = path.basename(oldPath);

//       // Restrict deletion to department uploads.
//       if (oldPath !== `/uploads/departments/${oldFileName}`) {
//         return;
//       }

//       try {
//         await fs.unlink(path.join(uploadDir, oldFileName));
//       } catch (error) {
//         if (error.code !== "ENOENT") {
//           console.error("Old image cleanup failed:", error);
//         }
//       }
//     };

//     if (newImagePath) {
//       await deleteOldImage(
//         existingDepartment.image,
//         imagePath
//       );
//     }

//     if (newBannerImagePath) {
//       await deleteOldImage(
//         existingDepartment.banner_image,
//         bannerImagePath
//       );
//     }

//     // =============================================
//     // SUCCESS RESPONSE
//     // =============================================
//     return NextResponse.json(
//       {
//         success: true,
//         message: "Department updated successfully",
//         data: {
//           id: departmentId,
//           name,
//           slug,
//           icon,
//           short_description,
//           description,
//           doctor_id: doctorIds,
//           phone,
//           location,
//           timing,
//           emergency_available,
//           appointment_available,
//           status,
//           user_id,
//           image: imagePath,
//           banner_image: bannerImagePath,
//           affectedRows: result.affectedRows,
//         },
//       },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Department PUT API Error:", error);

//     // Clean up newly uploaded files if the update fails.
//     for (const uploadedPath of [
//       newImagePath,
//       newBannerImagePath,
//     ]) {
//       if (uploadedPath) {
//         try {
//           await fs.unlink(
//             path.join(
//               process.cwd(),
//               "public",
//               uploadedPath.replace(/^\/+/, "")
//             )
//           );
//         } catch (cleanupError) {
//           if (cleanupError.code !== "ENOENT") {
//             console.error(
//               "Uploaded file cleanup failed:",
//               cleanupError
//             );
//           }
//         }
//       }
//     }

//     const isValidationError =
//       error.message === "Image size must not exceed 5 MB" ||
//       error.message.startsWith("Only JPG");

//     return NextResponse.json(
//       {
//         success: false,
//         message: isValidationError
//           ? error.message
//           : "Failed to update department",
//         error: error.message,
//       },
//       { status: isValidationError ? 400 : 500 }
//     );
//   }
// }


// new apis server 






const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
];

function parseBoolean(value, fallback = 0) {
  if (value === null) return fallback;

  return ["1", "true", "yes", "on"].includes(
    value.toString().trim().toLowerCase()
  )
    ? 1
    : 0;
}

function parseDoctorIds(rawValue, existingValue) {
  // If doctor_ids is omitted, preserve existing IDs.
  if (rawValue === null) {
    try {
      if (Array.isArray(existingValue)) {
        return existingValue.map(Number);
      }

      if (typeof existingValue === "string") {
        const parsed = JSON.parse(existingValue);
        return Array.isArray(parsed) ? parsed.map(Number) : [];
      }

      return [];
    } catch {
      return [];
    }
  }

  let parsed;

  try {
    parsed = JSON.parse(rawValue.toString());
  } catch {
    throw new Error("Invalid doctor_ids JSON");
  }

  if (!Array.isArray(parsed)) {
    throw new Error("doctor_ids must be an array");
  }

  const ids = parsed.map(Number);

  if (!ids.every((doctorId) =>
    Number.isInteger(doctorId) && doctorId > 0
  )) {
    throw new Error("Invalid doctor IDs");
  }

  return [...new Set(ids)];
}

function parseOptionalUserId(value) {
  if (value === null || value.toString().trim() === "") {
    return null;
  }

  const userId = Number(value);

  if (!Number.isInteger(userId) || userId <= 0) {
    throw new Error("Invalid user ID");
  }

  return userId;
}

function validateImage(file) {
  if (
    !file ||
    typeof file === "string" ||
    typeof file.arrayBuffer !== "function" ||
    file.size <= 0
  ) {
    return false;
  }

  if (file.size > MAX_IMAGE_SIZE) {
    throw new Error("Image size must not exceed 5 MB");
  }

  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
    throw new Error(
      "Only JPG, PNG, WEBP and GIF images are allowed"
    );
  }

  return true;
}

export async function PUT(request, { params }) {
  let newImageUrl = null;
  let newBannerImageUrl = null;

  try {
    const { id } = await params;
    const departmentId = Number(id);

    // Validate ID
    if (!Number.isInteger(departmentId) || departmentId <= 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid department ID",
        },
        { status: 400 }
      );
    }

    const formData = await request.formData();

    // Fetch existing department
    const [departments] = await db.query(
      `SELECT id, doctor_id, image, banner_image
       FROM departments
       WHERE id = ?
       LIMIT 1`,
      [departmentId]
    );

    if (departments.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Department not found",
        },
        { status: 404 }
      );
    }

    const existingDepartment = departments[0];

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

    let user_id;

    try {
      user_id = parseOptionalUserId(formData.get("user_id"));
    } catch (error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 }
      );
    }

    if (!name) {
      return NextResponse.json(
        {
          success: false,
          message: "Department name is required",
        },
        { status: 400 }
      );
    }

    if (!slug) {
      return NextResponse.json(
        {
          success: false,
          message: "Department slug is required",
        },
        { status: 400 }
      );
    }

    // Duplicate slug check
    const [existingSlug] = await db.query(
      `SELECT id
       FROM departments
       WHERE slug = ? AND id != ?
       LIMIT 1`,
      [slug, departmentId]
    );

    if (existingSlug.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Department slug already exists",
        },
        { status: 409 }
      );
    }

    // Doctor IDs
    let doctorIds;

    try {
      doctorIds = parseDoctorIds(
        formData.get("doctor_ids"),
        existingDepartment.doctor_id
      );
    } catch (error) {
      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 400 }
      );
    }

    // Boolean fields: preserve existing values when omitted.
    const emergency_available = formData.has("emergency_available")
      ? parseBoolean(formData.get("emergency_available"))
      : undefined;

    const appointment_available = formData.has("appointment_available")
      ? parseBoolean(formData.get("appointment_available"))
      : undefined;

    // Preserve existing images unless new files are provided.
    const image = formData.get("image");
    const bannerImage = formData.get("banner_image");

    let imageUrl = existingDepartment.image;
    let bannerImageUrl = existingDepartment.banner_image;

    // Upload main image
    if (validateImage(image)) {
      newImageUrl = await uploadPublicImage(image, "departments");
      imageUrl = newImageUrl;
    }

    // Upload banner image
    if (validateImage(bannerImage)) {
      newBannerImageUrl = await uploadPublicImage(
        bannerImage,
        "departments"
      );
      bannerImageUrl = newBannerImageUrl;
    }

    // Update department
    const updateFields = [
      "name = ?",
      "slug = ?",
      "icon = ?",
      "short_description = ?",
      "description = ?",
      "doctor_id = ?",
      "phone = ?",
      "location = ?",
      "timing = ?",
      "status = ?",
      "user_id = ?",
      "image = ?",
      "banner_image = ?",
    ];

    const updateValues = [
      name,
      slug,
      icon,
      short_description,
      description,
      JSON.stringify(doctorIds),
      phone,
      location,
      timing,
      status,
      user_id,
      imageUrl,
      bannerImageUrl,
    ];

    if (emergency_available !== undefined) {
      updateFields.push("emergency_available = ?");
      updateValues.push(emergency_available);
    }

    if (appointment_available !== undefined) {
      updateFields.push("appointment_available = ?");
      updateValues.push(appointment_available);
    }

    updateValues.push(departmentId);

    await db.query(
      `UPDATE departments
       SET ${updateFields.join(", ")}
       WHERE id = ?`,
      updateValues
    );

    // Delete replaced old Blob images only after DB update succeeds.
    const oldImageUrl = existingDepartment.image;
    const oldBannerUrl = existingDepartment.banner_image;

    const oldUrlsToDelete = [];

    if (newImageUrl && oldImageUrl && oldImageUrl !== imageUrl) {
      oldUrlsToDelete.push(oldImageUrl);
    }

    if (
      newBannerImageUrl &&
      oldBannerUrl &&
      oldBannerUrl !== bannerImageUrl
    ) {
      oldUrlsToDelete.push(oldBannerUrl);
    }

    for (const oldUrl of oldUrlsToDelete) {
      // Do not pass legacy local paths to Blob deletion.
      if (/^https?:\/\//i.test(oldUrl)) {
        try {
          await deleteBlobImage(oldUrl);
        } catch (deleteError) {
          console.error(
            "Old department Blob cleanup failed:",
            deleteError
          );
        }
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Department updated successfully",
        data: {
          id: departmentId,
          name,
          slug,
          icon,
          short_description,
          description,
          doctor_id: doctorIds,
          phone,
          location,
          timing,
          emergency_available:
            emergency_available ??
            existingDepartment.emergency_available,
          appointment_available:
            appointment_available ??
            existingDepartment.appointment_available,
          status,
          user_id,
          image: imageUrl,
          banner_image: bannerImageUrl,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Department PUT API Error:", error);

    // Clean up new uploads if a later operation fails.
    for (const url of [newImageUrl, newBannerImageUrl]) {
      if (url) {
        try {
          await deleteBlobImage(url);
        } catch (cleanupError) {
          console.error(
            "New department Blob cleanup failed:",
            cleanupError
          );
        }
      }
    }

    const message = error?.message || "";

    const validationErrors = [
      "Image size must not exceed 5 MB",
      "Only JPG, PNG, WEBP and GIF images are allowed",
      "Please select an image",
      "Invalid upload folder",
      "BLOB_READ_WRITE_TOKEN is not configured",
    ];

    const isValidationError = validationErrors.includes(message);
    const missingToken =
      message === "BLOB_READ_WRITE_TOKEN is not configured";

    return NextResponse.json(
      {
        success: false,
        message: missingToken
          ? "Vercel Blob token is not configured"
          : isValidationError
            ? message
            : "Failed to update department",
      },
      {
        status: isValidationError && !missingToken ? 400 : 500,
      }
    );
  }
}

