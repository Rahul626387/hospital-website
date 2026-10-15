
import { NextResponse } from "next/server";
import db from "@/lib/db";
import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { put } from "@vercel/blob";

export const runtime = "nodejs";

// GET: Fetch all events
export async function GET() {
  try {
    const [events] = await db.execute(
      "SELECT * FROM events ORDER BY event_date DESC, id DESC"
    );

    return NextResponse.json({
      success: true,
      count: events.length,
      data: events,
    });
  } catch (error) {
    console.error("GET events error:", error);

    return NextResponse.json(
      { success: false, message: "Failed to fetch events" },
      { status: 500 }
    );
  }
}

// POST: Save event using FormData
// export async function POST(request) {
//   let uploadedFilePath;

//   try {
//     const formData = await request.formData();

//     const userId = Number(formData.get("userId"));
//     const slug = formData.get("slug")?.toString().trim();
//     const title = formData.get("title")?.toString().trim();
//     const category = formData.get("category")?.toString().trim();
//     const date = formData.get("date")?.toString();
//     const endDate = formData.get("endDate")?.toString() || null;
//     const time = formData.get("time")?.toString() || null;
//     const location = formData.get("location")?.toString().trim();
//     const shortDescription =
//       formData.get("shortDescription")?.toString() || null;
//     const description = formData.get("description")?.toString() || null;
//     const status = formData.get("status")?.toString() || "upcoming";
//     const featured = formData.get("featured")?.toString() === "true";
//     const organizer = formData.get("organizer")?.toString() || null;
//     const contact = formData.get("contact")?.toString() || null;
//     const image = formData.get("image");

//     if (
//       !Number.isInteger(userId) ||
//       userId < 1 ||
//       !slug ||
//       !title ||
//       !category ||
//       !date ||
//       !location
//     ) {
//       return NextResponse.json(
//         {
//           success: false,
//           message:
//             "userId, slug, title, category, date and location are required",
//         },
//         { status: 400 }
//       );
//     }

//     if (
//       !["upcoming", "ongoing", "completed", "cancelled"].includes(status)
//     ) {
//       return NextResponse.json(
//         { success: false, message: "Invalid event status" },
//         { status: 400 }
//       );
//     }

//     let highlights = [];

//     try {
//       const rawHighlights = formData.get("highlights");
//       if (rawHighlights) {
//         highlights = JSON.parse(rawHighlights.toString());
//       }
//     } catch {
//       return NextResponse.json(
//         { success: false, message: "highlights must be valid JSON" },
//         { status: 400 }
//       );
//     }

//     if (!Array.isArray(highlights)) {
//       return NextResponse.json(
//         { success: false, message: "highlights must be an array" },
//         { status: 400 }
//       );
//     }

//     // Check foreign key before inserting
//     const [users] = await db.execute(
//       "SELECT id FROM users WHERE id = ? LIMIT 1",
//       [userId]
//     );

//     if (!users.length) {
//       return NextResponse.json(
//         { success: false, message: "Invalid userId: user does not exist" },
//         { status: 400 }
//       );
//     }

//     // Optional image upload
//     let imagePath = null;

//     if (image && typeof image.arrayBuffer === "function" && image.size > 0) {
//       const allowedTypes = {
//         "image/jpeg": ".jpg",
//         "image/png": ".png",
//         "image/webp": ".webp",
//         "image/gif": ".gif",
//       };

//       if (!allowedTypes[image.type]) {
//         return NextResponse.json(
//           { success: false, message: "Only JPG, PNG, WEBP and GIF images are allowed" },
//           { status: 400 }
//         );
//       }

//       const maxSize = 5 * 1024 * 1024;

//       if (image.size > maxSize) {
//         return NextResponse.json(
//           { success: false, message: "Image must be 5 MB or smaller" },
//           { status: 400 }
//         );
//       }

//       const fileName =
//         crypto.randomUUID() + allowedTypes[image.type];

//       const uploadDir = path.join(process.cwd(), "public", "uploads");

//       await fs.mkdir(uploadDir, { recursive: true });

//       uploadedFilePath = path.join(uploadDir, fileName);

//       const buffer = Buffer.from(await image.arrayBuffer());
//       await fs.writeFile(uploadedFilePath, buffer);

//       imagePath = `/uploads/${fileName}`;
//     }

//     const [result] = await db.execute(
//       `INSERT INTO events (
//         userId, slug, title, category, event_date, end_date,
//         event_time, location, short_description, description,
//         image, status, featured, organizer, contact, highlights
//       ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
//       [
//         userId,
//         slug,
//         title,
//         category,
//         date,
//         endDate,
//         time,
//         location,
//         shortDescription,
//         description,
//         imagePath,
//         status,
//         featured,
//         organizer,
//         contact,
//         JSON.stringify(highlights),
//       ]
//     );

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Event created successfully",
//         id: result.insertId,
//         image: imagePath,
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     // Remove the uploaded file if the database insert fails
//     if (uploadedFilePath) {
//       await fs.unlink(uploadedFilePath).catch(() => {});
//     }

//     console.error("POST event error:", error);

//     if (error.code === "ER_DUP_ENTRY") {
//       return NextResponse.json(
//         { success: false, message: "This slug already exists" },
//         { status: 409 }
//       );
//     }

//     return NextResponse.json(
//       { success: false, message: "Failed to create event" },
//       { status: 500 }
//     );
//   }
// }


// export async function POST(request) {
//   let uploadedFilePath = null;

//   try {
//     const formData = await request.formData();

//     // Form fields
//     const userId = Number(formData.get("userId"));
//     const slug = formData.get("slug")?.toString().trim();
//     const title = formData.get("title")?.toString().trim();
//     const category = formData.get("category")?.toString().trim();

//     const eventDate = formData.get("event_date")?.toString();
//     const endDate = formData.get("end_date")?.toString() || null;
//     const eventTime = formData.get("event_time")?.toString() || null;

//     const location = formData.get("location")?.toString().trim();

//     const shortDescription =
//       formData.get("short_description")?.toString().trim() || null;

//     const description =
//       formData.get("description")?.toString().trim() || null;

//     const organizer =
//       formData.get("organizer")?.toString().trim() || null;

//     const contact =
//       formData.get("contact")?.toString().trim() || null;

//     const statusValue = formData.get("status")?.toString() || "1";
//     const featuredValue = formData.get("featured")?.toString() || "0";

//     // Match frontend values: status 1/0, featured 1/0
//     const status = statusValue === "1" ? 1 : 0;
//     const featured = featuredValue === "1" ? 1 : 0;

//     const image = formData.get("image");

//     // Required field validation
//     if (
//       !Number.isInteger(userId) ||
//       userId < 1 ||
//       !slug ||
//       !title ||
//       !category ||
//       !eventDate ||
//       !location
//     ) {
//       return NextResponse.json(
//         {
//           success: false,
//           message:
//             "userId, slug, title, category, event_date and location are required",
//         },
//         { status: 400 }
//       );
//     }

//     // Validate highlights
//     let highlights = [];

//     try {
//       const rawHighlights = formData.get("highlights");

//       if (rawHighlights) {
//         highlights = JSON.parse(rawHighlights.toString());
//       }
//     } catch {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "highlights must be valid JSON",
//         },
//         { status: 400 }
//       );
//     }

//     if (!Array.isArray(highlights)) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "highlights must be an array",
//         },
//         { status: 400 }
//       );
//     }

//     // Validate user foreign key
//     const [users] = await db.query(
//       "SELECT id FROM users WHERE id = ? LIMIT 1",
//       [userId]
//     );

//     if (!users.length) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Invalid userId: user does not exist",
//         },
//         { status: 400 }
//       );
//     }

//     // Optional image upload
//     let imagePath = null;

//     if (image && typeof image.arrayBuffer === "function" && image.size > 0) {
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

//       const maxSize = 5 * 1024 * 1024;

//       if (image.size > maxSize) {
//         return NextResponse.json(
//           {
//             success: false,
//             message: "Image must be 5 MB or smaller",
//           },
//           { status: 400 }
//         );
//       }

//       const fileName = `${crypto.randomUUID()}${allowedTypes[image.type]}`;

//       const uploadDir = path.join(
//         process.cwd(),
//         "public",
//         "uploads",
//         "events"
//       );

//       await fs.mkdir(uploadDir, { recursive: true });

//       uploadedFilePath = path.join(uploadDir, fileName);

//       const buffer = Buffer.from(await image.arrayBuffer());

//       await fs.writeFile(uploadedFilePath, buffer);

//       imagePath = `/uploads/events/${fileName}`;
//     }

//     // Insert event into MySQL
//     const [result] = await db.query(
//       `INSERT INTO events (
//         userId,
//         slug,
//         title,
//         category,
//         event_date,
//         end_date,
//         event_time,
//         location,
//         short_description,
//         description,
//         image,
//         status,
//         featured,
//         organizer,
//         contact,
//         highlights
//       ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
//       [
//         userId,
//         slug,
//         title,
//         category,
//         eventDate,
//         endDate,
//         eventTime,
//         location,
//         shortDescription,
//         description,
//         imagePath,
//         status,
//         featured,
//         organizer,
//         contact,
//         JSON.stringify(highlights),
//       ]
//     );

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Event created successfully",
//         id: result.insertId,
//         image: imagePath,
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     // Remove uploaded file if database insertion fails
//     if (uploadedFilePath) {
//       await fs.unlink(uploadedFilePath).catch(() => {});
//     }

//     console.error("POST event error:", error);

//     if (error.code === "ER_DUP_ENTRY") {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "This slug already exists",
//         },
//         { status: 409 }
//       );
//     }

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to create event",
//         error:
//           process.env.NODE_ENV === "development"
//             ? error.message
//             : undefined,
//       },
//       { status: 500 }
//     );
//   }
// }


export async function POST(request) {
  try {
    const formData = await request.formData();

    // Form fields
    const userId = Number(formData.get("userId"));
    const slug = formData.get("slug")?.toString().trim();
    const title = formData.get("title")?.toString().trim();
    const category = formData.get("category")?.toString().trim();

    const eventDate = formData.get("event_date")?.toString();
    const endDate =
      formData.get("end_date")?.toString() || null;
    const eventTime =
      formData.get("event_time")?.toString() || null;

    const location = formData.get("location")?.toString().trim();

    const shortDescription =
      formData.get("short_description")?.toString().trim() || null;

    const description =
      formData.get("description")?.toString().trim() || null;

    const organizer =
      formData.get("organizer")?.toString().trim() || null;

    const contact =
      formData.get("contact")?.toString().trim() || null;

    const statusValue =
      formData.get("status")?.toString() ?? "1";

    const featuredValue =
      formData.get("featured")?.toString() ?? "0";

    const status = statusValue === "1" ? 1 : 0;
    const featured = featuredValue === "1" ? 1 : 0;

    const image = formData.get("image");

    // Validate required fields
    if (
      !Number.isInteger(userId) ||
      userId < 1 ||
      !slug ||
      !title ||
      !category ||
      !eventDate ||
      !location
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "userId, slug, title, category, event_date and location are required",
        },
        { status: 400 }
      );
    }

    // Validate highlights
    let highlights = [];

    try {
      const rawHighlights = formData.get("highlights");

      if (rawHighlights) {
        highlights = JSON.parse(rawHighlights.toString());
      }
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "highlights must be valid JSON",
        },
        { status: 400 }
      );
    }

    if (!Array.isArray(highlights)) {
      return NextResponse.json(
        {
          success: false,
          message: "highlights must be an array",
        },
        { status: 400 }
      );
    }

    // Validate user foreign key
    const [users] = await db.query(
      "SELECT id FROM users WHERE id = ? LIMIT 1",
      [userId]
    );

    if (!users.length) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid userId: user does not exist",
        },
        { status: 400 }
      );
    }

    // Public Vercel Blob image upload
    let imagePath = null;

    if (
      image &&
      typeof image.arrayBuffer === "function" &&
      image.size > 0
    ) {
      const allowedTypes = {
        "image/jpeg": ".jpg",
        "image/png": ".png",
        "image/webp": ".webp",
        "image/gif": ".gif",
      };

      if (!allowedTypes[image.type]) {
        return NextResponse.json(
          {
            success: false,
            message: "Only JPG, PNG, WEBP and GIF images are allowed",
          },
          { status: 400 }
        );
      }

      const maxSize = 5 * 1024 * 1024;

      if (image.size > maxSize) {
        return NextResponse.json(
          {
            success: false,
            message: "Image must be 5 MB or smaller",
          },
          { status: 400 }
        );
      }

      const fileName = `events/${crypto.randomUUID()}${
        allowedTypes[image.type]
      }`;

      const blob = await put(fileName, image, {
        access: "public",
        token: process.env.BLOB_READ_WRITE_TOKEN,
        contentType: image.type,
        addRandomSuffix: false,
      });

      imagePath = blob.url;
    }

    // Insert event into MySQL
    const [result] = await db.query(
      `INSERT INTO events (
        userId,
        slug,
        title,
        category,
        event_date,
        end_date,
        event_time,
        location,
        short_description,
        description,
        image,
        status,
        featured,
        organizer,
        contact,
        highlights
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        userId,
        slug,
        title,
        category,
        eventDate,
        endDate,
        eventTime,
        location,
        shortDescription,
        description,
        imagePath,
        status,
        featured,
        organizer,
        contact,
        JSON.stringify(highlights),
      ]
    );

    return NextResponse.json(
      {
        success: true,
        message: "Event created successfully",
        id: result.insertId,
        image: imagePath,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST event error:", error);

    if (error.code === "ER_DUP_ENTRY") {
      return NextResponse.json(
        {
          success: false,
          message: "This slug already exists",
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create event",
        error:
          process.env.NODE_ENV === "development"
            ? error.message
            : undefined,
      },
      { status: 500 }
    );
  }
}