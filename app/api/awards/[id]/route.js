
// import { NextResponse } from "next/server";
// import db from "@/lib/db";
// import fs from "fs/promises";
// import path from "path";
// import { randomUUID } from "crypto";

// // UPDATE AWARD API
// export async function PUT(request, { params }) {
//   let uploadedPath = null;

//   try {
//     const { id } = await params;
//     const awardId = Number(id);

//     if (!Number.isInteger(awardId) || awardId <= 0) {
//       return NextResponse.json(
//         { success: false, message: "Invalid award ID" },
//         { status: 400 }
//       );
//     }

//     // Check existing award
//     const [existingRows] = await db.query(
//       "SELECT * FROM awards WHERE id = ? LIMIT 1",
//       [awardId]
//     );

//     if (existingRows.length === 0) {
//       return NextResponse.json(
//         { success: false, message: "Award not found" },
//         { status: 404 }
//       );
//     }

//     const existingAward = existingRows[0];
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

//     // Keep the old image unless a new image is uploaded
//     let imagePath = existingAward.image;

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

//     const statusValue = formData.get("status");
//     const status =
//       statusValue === null
//         ? existingAward.status
//         : statusValue;

//     if (!["active", "inactive"].includes(status)) {
//       if (uploadedPath) {
//         await fs.unlink(uploadedPath).catch(() => {});
//       }

//       return NextResponse.json(
//         { success: false, message: "Invalid award status" },
//         { status: 400 }
//       );
//     }

//     const [result] = await db.query(
//       `UPDATE awards
//        SET
//          userId = ?,
//          year = ?,
//          category = ?,
//          title = ?,
//          organization = ?,
//          description = ?,
//          image = ?,
//          icon = ?,
//          featured = ?,
//          status = ?
//        WHERE id = ?`,
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
//         status,
//         awardId,
//       ]
//     );

//     // Delete the newly uploaded image if the database update fails
//     // (handled by catch below)

//     // Remove the previous local image after a successful DB update
//     if (uploadedPath && existingAward.image) {
//       const oldImagePath = existingAward.image;

//       if (oldImagePath.startsWith("/uploads/awards/")) {
//         const oldFilePath = path.join(
//           process.cwd(),
//           "public",
//           oldImagePath.replace(/^\/+/, "")
//         );

//         await fs.unlink(oldFilePath).catch(() => {});
//       }
//     }

//     return NextResponse.json({
//       success: true,
//       message: "Award updated successfully",
//       data: {
//         id: awardId,
//         userId,
//         year,
//         category: category.trim(),
//         title: title.trim(),
//         organization,
//         description,
//         image: imagePath,
//         icon,
//         featured: Boolean(featured),
//         status,
//       },
//     });
//   } catch (error) {
//     if (uploadedPath) {
//       await fs.unlink(uploadedPath).catch(() => {});
//     }

//     console.error("PUT awards error:", error);

//     return NextResponse.json(
//       { success: false, message: "Failed to update award" },
//       { status: 500 }
//     );
//   }
// }



import { NextResponse } from "next/server";
import db from "@/lib/db";
import {
  uploadPublicImage,
  deleteBlobImage,
} from "@/lib/blobUpload";

// UPDATE AWARD API
export async function PUT(request, { params }) {
  let uploadedImageUrl = null;

  try {
    const { id } = await params;
    const awardId = Number(id);

    if (!Number.isInteger(awardId) || awardId <= 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid award ID",
        },
        { status: 400 }
      );
    }

    // Check existing award
    const [existingRows] = await db.query(
      "SELECT * FROM awards WHERE id = ? LIMIT 1",
      [awardId]
    );

    if (existingRows.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Award not found",
        },
        { status: 404 }
      );
    }

    const existingAward = existingRows[0];
    const formData = await request.formData();

    const userId = Number(formData.get("userId"));
    const year = Number(formData.get("year"));
    const category = formData.get("category");
    const title = formData.get("title");

    const organization =
      formData.get("organization") || null;

    const description =
      formData.get("description") || null;

    const icon = formData.get("icon") || null;

    const featured =
      formData.get("featured") === "true" ? 1 : 0;

    const image = formData.get("image");

    // Validate required fields
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
          message:
            "Valid userId, year, category and title are required",
        },
        { status: 400 }
      );
    }

    // Validate status
    const statusValue = formData.get("status");

    const status =
      statusValue === null
        ? existingAward.status
        : statusValue;

    if (!["active", "inactive"].includes(status)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid award status",
        },
        { status: 400 }
      );
    }

    // Keep old image if no new image is selected
    let imagePath = existingAward.image;

    // Upload new image to Vercel Blob
    if (
      image &&
      typeof image !== "string" &&
      typeof image.arrayBuffer === "function" &&
      image.size > 0
    ) {
      uploadedImageUrl = await uploadPublicImage(
        image,
        "awards"
      );

      imagePath = uploadedImageUrl;
    }

    // Update database
    await db.query(
      `UPDATE awards
       SET
         userId = ?,
         year = ?,
         category = ?,
         title = ?,
         organization = ?,
         description = ?,
         image = ?,
         icon = ?,
         featured = ?,
         status = ?
       WHERE id = ?`,
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
        status,
        awardId,
      ]
    );

    // Delete previous Blob image only after DB update succeeds
    if (
      uploadedImageUrl &&
      existingAward.image &&
      existingAward.image !== uploadedImageUrl &&
      existingAward.image.includes(".blob.vercel-storage.com/")
    ) {
      try {
        await deleteBlobImage(existingAward.image);
      } catch (deleteError) {
        // DB update succeeded; do not report failure just because
        // the previous image could not be deleted.
        console.error(
          "Previous award image deletion failed:",
          deleteError
        );
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Award updated successfully",
        data: {
          id: awardId,
          userId,
          year,
          category: category.trim(),
          title: title.trim(),
          organization,
          description,
          image: imagePath,
          icon,
          featured: Boolean(featured),
          status,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("PUT awards error:", error);

    // If DB update fails, remove the newly uploaded image
    if (uploadedImageUrl) {
      try {
        await deleteBlobImage(uploadedImageUrl);
      } catch (deleteError) {
        console.error(
          "New award image cleanup failed:",
          deleteError
        );
      }
    }

    const validationMessages = [
      "Please select an image",
      "Only JPG, PNG, WEBP and GIF images are allowed",
      "Image must be 5 MB or smaller",
      "Invalid upload folder",
      "BLOB_READ_WRITE_TOKEN is not configured",
    ];

    if (validationMessages.includes(error.message)) {
      const configError = error.message.includes(
        "BLOB_READ_WRITE_TOKEN"
      );

      return NextResponse.json(
        {
          success: false,
          message: configError
            ? "Image storage is not configured"
            : error.message,
        },
        { status: configError ? 500 : 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update award",
        error:
          process.env.NODE_ENV === "development"
            ? error.message
            : undefined,
      },
      { status: 500 }
    );
  }
}

