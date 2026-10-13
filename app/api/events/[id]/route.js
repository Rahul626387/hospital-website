
import { NextResponse } from "next/server";
import db from "@/lib/db";
import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

export async function PUT(request, { params }) {
  let uploadedFilePath = null;

  try {
    const { id } = await params;
    const eventId = Number(id);

    if (!Number.isInteger(eventId) || eventId < 1) {
      return NextResponse.json(
        { success: false, message: "Invalid event ID" },
        { status: 400 }
      );
    }

    // Find existing event
    const [existingEvents] = await db.query(
      "SELECT * FROM events WHERE id = ? LIMIT 1",
      [eventId]
    );

    if (!existingEvents.length) {
      return NextResponse.json(
        { success: false, message: "Event not found" },
        { status: 404 }
      );
    }

    const existingEvent = existingEvents[0];
    const formData = await request.formData();

    // Form fields
    const userId = Number(formData.get("userId"));
    const slug = formData.get("slug")?.toString().trim();
    const title = formData.get("title")?.toString().trim();
    const category = formData.get("category")?.toString().trim();

    const eventDate = formData.get("event_date")?.toString();
    const endDate = formData.get("end_date")?.toString() || null;
    const eventTime = formData.get("event_time")?.toString() || null;

    const location = formData.get("location")?.toString().trim();

    const shortDescription =
      formData.get("short_description")?.toString().trim() || null;

    const description =
      formData.get("description")?.toString().trim() || null;

    const organizer =
      formData.get("organizer")?.toString().trim() || null;

    const contact =
      formData.get("contact")?.toString().trim() || null;

    const statusValue = formData.get("status")?.toString() ?? String(existingEvent.status);
    const featuredValue = formData.get("featured")?.toString() ?? String(existingEvent.featured);

    if (!["0", "1"].includes(statusValue) ||
        !["0", "1"].includes(featuredValue)) {
      return NextResponse.json(
        {
          success: false,
          message: "status and featured must be 0 or 1",
        },
        { status: 400 }
      );
    }

    const status = Number(statusValue);
    const featured = Number(featuredValue);
    const image = formData.get("image");

    // Required field validation
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

    const rawHighlights = formData.get("highlights");

    if (rawHighlights === null) {
      try {
        highlights = existingEvent.highlights
          ? typeof existingEvent.highlights === "string"
            ? JSON.parse(existingEvent.highlights)
            : existingEvent.highlights
          : [];
      } catch {
        highlights = [];
      }
    } else {
      try {
        highlights = JSON.parse(rawHighlights.toString());
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
    }

    // Validate user
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

    // Keep old image if no new image is provided
    let imagePath = existingEvent.image;

    if (image && typeof image.arrayBuffer === "function" && image.size > 0) {
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

      if (image.size > 5 * 1024 * 1024) {
        return NextResponse.json(
          {
            success: false,
            message: "Image must be 5 MB or smaller",
          },
          { status: 400 }
        );
      }

      const fileName = `${crypto.randomUUID()}${allowedTypes[image.type]}`;

      const uploadDir = path.join(
        process.cwd(),
        "public",
        "uploads",
        "events"
      );

      await fs.mkdir(uploadDir, { recursive: true });

      uploadedFilePath = path.join(uploadDir, fileName);

      const buffer = Buffer.from(await image.arrayBuffer());

      await fs.writeFile(uploadedFilePath, buffer);

      imagePath = `/uploads/events/${fileName}`;
    }

    // Update event
    await db.query(
      `UPDATE events SET
        userId = ?,
        slug = ?,
        title = ?,
        category = ?,
        event_date = ?,
        end_date = ?,
        event_time = ?,
        location = ?,
        short_description = ?,
        description = ?,
        image = ?,
        status = ?,
        featured = ?,
        organizer = ?,
        contact = ?,
        highlights = ?
      WHERE id = ?`,
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
        eventId,
      ]
    );

    // Remove old local image only after successful database update
    if (uploadedFilePath && existingEvent.image?.startsWith("/uploads/events/")) {
      const oldImagePath = path.join(
        process.cwd(),
        "public",
        existingEvent.image.replace(/^\/+/, "")
      );

      await fs.unlink(oldImagePath).catch(() => {});
    }

    return NextResponse.json(
      {
        success: true,
        message: "Event updated successfully",
        data: {
          id: eventId,
          userId,
          slug,
          title,
          category,
          event_date: eventDate,
          end_date: endDate,
          event_time: eventTime,
          location,
          short_description: shortDescription,
          description,
          image: imagePath,
          status,
          featured,
          organizer,
          contact,
          highlights,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    // Remove newly uploaded image if update fails
    if (uploadedFilePath) {
      await fs.unlink(uploadedFilePath).catch(() => {});
    }

    console.error("PUT event error:", error);

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
        message: "Failed to update event",
        error:
          process.env.NODE_ENV === "development"
            ? error.message
            : undefined,
      },
      { status: 500 }
    );
  }
}
