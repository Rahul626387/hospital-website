import { NextResponse } from "next/server";
import db from './../../../../lib/db'
import path from "path";
import crypto from "crypto";
import fs from "fs/promises";

import {
  uploadPublicImage,
  deleteBlobImage,
} from "@/lib/blobUpload";

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



// edit api doctors 




// const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

// const ALLOWED_IMAGE_TYPES = [
//   "image/jpeg",
//   "image/png",
//   "image/webp",
// ];

// function parseJSON(value, fallback = []) {
//   if (value === null || value === undefined || value === "") {
//     return fallback;
//   }

//   try {
//     return typeof value === "string" ? JSON.parse(value) : value;
//   } catch {
//     return fallback;
//   }
// }

// function sanitizeFileName(filename) {
//   return path
//     .basename(filename)
//     .replace(/[^a-zA-Z0-9._-]/g, "_");
// }

// // Sirf apne doctors upload folder ke local images delete karega.
// function getLocalDoctorImagePath(imageUrl) {
//   if (
//     !imageUrl ||
//     typeof imageUrl !== "string" ||
//     !imageUrl.startsWith("/uploads/doctors/")
//   ) {
//     return null;
//   }

//   const filename = path.basename(imageUrl);

//   if (!filename || filename !== imageUrl.split("/").pop()) {
//     return null;
//   }

//   const uploadDir = path.resolve(
//     process.cwd(),
//     "public",
//     "uploads",
//     "doctors"
//   );

//   const filePath = path.resolve(uploadDir, filename);

//   if (path.dirname(filePath) !== uploadDir) {
//     return null;
//   }

//   return filePath;
// }

// async function deleteLocalImage(imageUrl) {
//   const filePath = getLocalDoctorImagePath(imageUrl);

//   if (!filePath) return;

//   try {
//     await fs.unlink(filePath);
//   } catch (error) {
//     if (error.code !== "ENOENT") {
//       console.error("OLD DOCTOR IMAGE DELETE ERROR:", error);
//     }
//   }
// }

// export async function PUT(request, { params }) {
//   let uploadedFilePath = null;

//   try {
//     const { id } = await params;
//     const doctorId = Number(id);

//     if (!Number.isInteger(doctorId) || doctorId <= 0) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Invalid doctor ID",
//         },
//         { status: 400 }
//       );
//     }

//     const formData = await request.formData();

//     // Check existing doctor
//     const [existingRows] = await db.query(
//       "SELECT * FROM doctors WHERE id = ? LIMIT 1",
//       [doctorId]
//     );

//     if (!existingRows.length) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Doctor not found",
//         },
//         { status: 404 }
//       );
//     }

//     const existingDoctor = existingRows[0];
//     const oldImageUrl = existingDoctor.image_url;

//     const updates = {};

//     // Only update fields that were sent in the request.
//     const stringFields = [
//       "contact_no",
//       "email",
//       "qualification",
//       "web_experience",
//       "web_bio",
//       "web_heading",
//     ];

//     for (const field of stringFields) {
//       if (formData.has(field)) {
//         const value = formData.get(field);

//         updates[field] =
//           value === null || value === ""
//             ? null
//             : String(value).trim();
//       }
//     }

//     if (formData.has("name")) {
//       const name = String(formData.get("name") || "").trim();

//       if (!name) {
//         return NextResponse.json(
//           {
//             success: false,
//             message: "Doctor name is required",
//           },
//           { status: 400 }
//         );
//       }

//       updates.name = name;
//     }

//     if (formData.has("department_id")) {
//       const departmentId = Number(formData.get("department_id"));

//       if (!Number.isInteger(departmentId) || departmentId <= 0) {
//         return NextResponse.json(
//           {
//             success: false,
//             message: "Valid department is required",
//           },
//           { status: 400 }
//         );
//       }

//       updates.department_id = departmentId;
//     }

//     if (formData.has("created_by")) {
//       const value = formData.get("created_by");

//       updates.created_by =
//         value === null || value === "" ? null : Number(value);
//     }

//     if (formData.has("specialty_id")) {
//       const value = formData.get("specialty_id");

//       updates.specialty_id =
//         value === null || value === "" ? null : Number(value);
//     }

//     if (formData.has("experience_years")) {
//       const value = formData.get("experience_years");
//       const experience = value === "" ? 0 : Number(value);

//       if (!Number.isFinite(experience) || experience < 0) {
//         return NextResponse.json(
//           {
//             success: false,
//             message: "Invalid experience_years value",
//           },
//           { status: 400 }
//         );
//       }

//       updates.experience_years = experience;
//     }

//     for (const field of ["available", "status"]) {
//       if (formData.has(field)) {
//         const value = formData.get(field);

//         if (value === "" || value === null) {
//           updates[field] = field === "available" ? 1 : 1;
//         } else {
//           const numberValue = Number(value);

//           if (![0, 1].includes(numberValue)) {
//             return NextResponse.json(
//               {
//                 success: false,
//                 message: `${field} must be 0 or 1`,
//               },
//               { status: 400 }
//             );
//           }

//           updates[field] = numberValue;
//         }
//       }
//     }

//     // Parse and validate JSON array fields.
//     const jsonFields = [
//       "web_specilization",
//       "web_certificat",
//       "web_awards",
//     ];

//     for (const field of jsonFields) {
//       if (formData.has(field)) {
//         const parsed = parseJSON(formData.get(field), []);

//         if (!Array.isArray(parsed)) {
//           return NextResponse.json(
//             {
//               success: false,
//               message: `${field} must be an array`,
//             },
//             { status: 400 }
//           );
//         }

//         updates[field] = JSON.stringify(parsed);
//       }
//     }

//     // Image processing
//     const image = formData.get("image");
//     const removeImage = formData.get("remove_image") === "true";

//     const hasNewImage =
//       image &&
//       typeof image === "object" &&
//       typeof image.arrayBuffer === "function" &&
//       image.size > 0;

//     // New image takes priority over remove_image.
//     if (hasNewImage) {
//       if (!ALLOWED_IMAGE_TYPES.includes(image.type)) {
//         return NextResponse.json(
//           {
//             success: false,
//             message:
//               "Invalid image type. Only JPG, PNG and WEBP are allowed.",
//           },
//           { status: 400 }
//         );
//       }

//       if (image.size > MAX_IMAGE_SIZE) {
//         return NextResponse.json(
//           {
//             success: false,
//             message: "Image size must be less than 5MB.",
//           },
//           { status: 400 }
//         );
//       }

//       const uploadDir = path.join(
//         process.cwd(),
//         "public",
//         "uploads",
//         "doctors"
//       );

//       await fs.mkdir(uploadDir, { recursive: true });

//       const safeName = sanitizeFileName(image.name || "doctor-image");
//       const extension = path.extname(safeName).toLowerCase() || ".jpg";
//       const baseName = path.basename(safeName, path.extname(safeName));

//       const uniqueName = `${baseName}-${Date.now()}-${crypto
//         .randomBytes(5)
//         .toString("hex")}${extension}`;

//       uploadedFilePath = path.join(uploadDir, uniqueName);

//       const bytes = await image.arrayBuffer();
//       await fs.writeFile(uploadedFilePath, Buffer.from(bytes));

//       updates.image_url = `/uploads/doctors/${uniqueName}`;
//     } else if (removeImage) {
//       updates.image_url = null;
//     }

//     if (Object.keys(updates).length === 0) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "No fields provided to update",
//         },
//         { status: 400 }
//       );
//     }

//     // Dynamic UPDATE query
//     const fields = Object.keys(updates);

//     const setClause = fields.map((field) => `\`${field}\` = ?`).join(", ");
//     const values = fields.map((field) => updates[field]);

//     values.push(doctorId);

//     const sql = `
//       UPDATE doctors
//       SET ${setClause}
//       WHERE id = ?
//     `;

//     await db.query(sql, values);

//     const finalImageUrl = Object.prototype.hasOwnProperty.call(
//       updates,
//       "image_url"
//     )
//       ? updates.image_url
//       : oldImageUrl;

//     // Delete the old local image only after the DB update succeeds.
//     if (
//       (hasNewImage || removeImage) &&
//       oldImageUrl &&
//       oldImageUrl !== finalImageUrl
//     ) {
//       await deleteLocalImage(oldImageUrl);
//     }

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Doctor updated successfully",
//         data: {
//           id: doctorId,
//           ...updates,
//           image_url: finalImageUrl,
//         },
//       },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("UPDATE DOCTOR ERROR:", error);

//     // Remove the newly uploaded image if the database update failed.
//     if (uploadedFilePath) {
//       try {
//         await fs.unlink(uploadedFilePath);
//       } catch (deleteError) {
//         console.error("NEW IMAGE CLEANUP ERROR:", deleteError);
//       }
//     }

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to update doctor",
//         error: error.message,
//       },
//       { status: 500 }
//     );
//   }
// }




// put apis image server 

const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
];

function parseJSON(value, fallback = []) {
  if (value === null || value === undefined || value === "") {
    return fallback;
  }

  try {
    return typeof value === "string" ? JSON.parse(value) : value;
  } catch {
    return fallback;
  }
}

function isValidOptionalId(value) {
  return (
    value === null ||
    (Number.isInteger(value) && value > 0)
  );
}

export async function PUT(request, { params }) {
  let uploadedImageUrl = null;

  try {
    const { id } = await params;
    const doctorId = Number(id);

    if (!Number.isInteger(doctorId) || doctorId <= 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid doctor ID",
        },
        { status: 400 }
      );
    }

    const formData = await request.formData();

    // Check existing doctor
    const [existingRows] = await db.query(
      "SELECT * FROM doctors WHERE id = ? LIMIT 1",
      [doctorId]
    );

    if (!existingRows.length) {
      return NextResponse.json(
        {
          success: false,
          message: "Doctor not found",
        },
        { status: 404 }
      );
    }

    const existingDoctor = existingRows[0];
    const oldImageUrl = existingDoctor.image_url;
    const updates = {};

    // Update only fields supplied by the frontend.
    const stringFields = [
      "contact_no",
      "email",
      "qualification",
      "web_experience",
      "web_bio",
      "web_heading",
    ];

    for (const field of stringFields) {
      if (formData.has(field)) {
        const value = formData.get(field);

        updates[field] =
          value === null || value === ""
            ? null
            : String(value).trim();
      }
    }

    // Name
    if (formData.has("name")) {
      const name = String(formData.get("name") || "").trim();

      if (!name) {
        return NextResponse.json(
          {
            success: false,
            message: "Doctor name is required",
          },
          { status: 400 }
        );
      }

      updates.name = name;
    }

    // Department
    if (formData.has("department_id")) {
      const departmentId = Number(formData.get("department_id"));

      if (!Number.isInteger(departmentId) || departmentId <= 0) {
        return NextResponse.json(
          {
            success: false,
            message: "Valid department is required",
          },
          { status: 400 }
        );
      }

      const [departmentRows] = await db.query(
        "SELECT id FROM departments WHERE id = ? LIMIT 1",
        [departmentId]
      );

      if (!departmentRows.length) {
        return NextResponse.json(
          {
            success: false,
            message: "Department not found",
          },
          { status: 400 }
        );
      }

      updates.department_id = departmentId;
    }

    // Created by
    if (formData.has("created_by")) {
      const value = formData.get("created_by");

      if (value === "" || value === null) {
        updates.created_by = null;
      } else {
        const createdBy = Number(value);

        if (!Number.isInteger(createdBy) || createdBy <= 0) {
          return NextResponse.json(
            {
              success: false,
              message: "Invalid created_by value",
            },
            { status: 400 }
          );
        }

        updates.created_by = createdBy;
      }
    }

    // Specialty
    if (formData.has("specialty_id")) {
      const value = formData.get("specialty_id");

      if (value === "" || value === null) {
        updates.specialty_id = null;
      } else {
        const specialtyId = Number(value);

        if (!Number.isInteger(specialtyId) || specialtyId <= 0) {
          return NextResponse.json(
            {
              success: false,
              message: "Invalid specialty_id value",
            },
            { status: 400 }
          );
        }

        updates.specialty_id = specialtyId;
      }
    }

    // Experience
    if (formData.has("experience_years")) {
      const value = formData.get("experience_years");
      const experience = value === "" ? 0 : Number(value);

      if (!Number.isFinite(experience) || experience < 0) {
        return NextResponse.json(
          {
            success: false,
            message: "Invalid experience_years value",
          },
          { status: 400 }
        );
      }

      updates.experience_years = experience;
    }

    // Availability and status
    for (const field of ["available", "status"]) {
      if (formData.has(field)) {
        const value = formData.get(field);

        if (value === "" || value === null) {
          updates[field] = 1;
        } else {
          const numberValue = Number(value);

          if (![0, 1].includes(numberValue)) {
            return NextResponse.json(
              {
                success: false,
                message: `${field} must be 0 or 1`,
              },
              { status: 400 }
            );
          }

          updates[field] = numberValue;
        }
      }
    }

    // JSON array fields
    const jsonFields = [
      "web_specilization",
      "web_certificat",
      "web_awards",
    ];

    for (const field of jsonFields) {
      if (formData.has(field)) {
        const rawValue = formData.get(field);
        const parsed = parseJSON(rawValue, null);

        if (!Array.isArray(parsed)) {
          return NextResponse.json(
            {
              success: false,
              message: `${field} must be a valid JSON array`,
            },
            { status: 400 }
          );
        }

        updates[field] = JSON.stringify(parsed);
      }
    }

    // Image handling
    const image = formData.get("image");
    const removeImage = formData.get("remove_image") === "true";

    const hasNewImage =
      image &&
      typeof image === "object" &&
      typeof image.arrayBuffer === "function" &&
      image.size > 0;

    // New image takes priority over remove_image.
    if (hasNewImage) {
      if (!ALLOWED_IMAGE_TYPES.includes(image.type)) {
        return NextResponse.json(
          {
            success: false,
            message:
              "Invalid image type. Only JPG, PNG and WEBP are allowed.",
          },
          { status: 400 }
        );
      }

      if (image.size > MAX_IMAGE_SIZE) {
        return NextResponse.json(
          {
            success: false,
            message: "Image size must be 5 MB or smaller.",
          },
          { status: 400 }
        );
      }

      // Upload new image to Vercel Blob.
      uploadedImageUrl = await uploadPublicImage(image,"doctors");

      updates.image_url = uploadedImageUrl;
    } else if (removeImage) {
      updates.image_url = null;
    }

    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "No fields provided to update",
        },
        { status: 400 }
      );
    }

    // Dynamic UPDATE query
    const fields = Object.keys(updates);

    const setClause = fields
      .map((field) => `\`${field}\` = ?`)
      .join(", ");

    const values = fields.map((field) => updates[field]);
    values.push(doctorId);

    const sql = `
      UPDATE doctors
      SET ${setClause}
      WHERE id = ?
    `;

    await db.query(sql, values);

    const finalImageUrl = Object.prototype.hasOwnProperty.call(
      updates,
      "image_url"
    )
      ? updates.image_url
      : oldImageUrl;

    // Delete old Blob image only after the database update succeeds.
    if (
      (hasNewImage || removeImage) &&
      oldImageUrl &&
      oldImageUrl !== finalImageUrl &&
      /^https?:\/\//i.test(oldImageUrl)
    ) {
      try {
        await deleteBlobImage(oldImageUrl);
      } catch (deleteError) {
        // Do not report the database update as failed if old-image
        // cleanup fails. The old file can be removed separately.
        console.error(
          "OLD DOCTOR BLOB DELETE ERROR:",
          deleteError
        );
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Doctor updated successfully",
        data: {
          id: doctorId,
          ...updates,
          image_url: finalImageUrl,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("UPDATE DOCTOR ERROR:", error);

    // If database update fails after upload, clean up the new Blob.
    if (uploadedImageUrl) {
      try {
        await deleteBlobImage(uploadedImageUrl);
      } catch (deleteError) {
        console.error(
          "NEW DOCTOR BLOB CLEANUP ERROR:",
          deleteError
        );
      }
    }

    const message = error?.message || "Failed to update doctor";

    const validationErrors = [
      "Please select an image",
      "Only JPG, PNG, WEBP and GIF images are allowed",
      "Image must be 5 MB or smaller",
      "Invalid upload folder",
    ];

    const isValidationError = validationErrors.includes(message);

    return NextResponse.json(
      {
        success: false,
        message: isValidationError
          ? message
          : message === "BLOB_READ_WRITE_TOKEN is not configured"
            ? "Vercel Blob token is not configured"
            : "Failed to update doctor",
      },
      {
        status: isValidationError ? 400 : 500,
      }
    );
  }
}
