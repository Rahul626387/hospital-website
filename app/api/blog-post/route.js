import { NextResponse } from "next/server";
import db from "../../../lib/db";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  try {
    const [rows] = await db.query(`
      SELECT
        bp.id,
        bp.title,
        bp.slug,
        bp.excerpt,
        bp.content,
        bp.featured_image,
        bp.category_id,
        bp.author_id,
        bp.status,
        bp.is_featured,
        bp.views,
        bp.published_at,
        bp.created_at,
        bp.updated_at,

        bc.name AS category_name

      FROM blog_posts bp

      LEFT JOIN blog_categories bc
        ON bp.category_id = bc.id

      WHERE bp.delete_status = 0

      ORDER BY bp.id DESC
    `);

    return NextResponse.json({
      success: true,
      message: "Blog posts fetched successfully",
      data: rows,
    });

  } catch (error) {
    console.error("GET Blog Posts Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch blog posts",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
// with json 
// export async function POST(request) {
//   try {
//     const body = await request.json();

//     const {
//       title,
//       slug,
//       excerpt = null,
//       content = "",
//       featured_image = null,
//       category_id = null,
//       author_id,
//       status = "draft",
//       is_featured = 0,
//       views = 0,
//       published_at = null,
//       delete_status = 0,
//     } = body;

//     // -------------------------
//     // Validation
//     // -------------------------

//     if (!title || !title.trim()) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Title is required",
//         },
//         { status: 400 }
//       );
//     }

//     if (!slug || !slug.trim()) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Slug is required",
//         },
//         { status: 400 }
//       );
//     }

//     if (!author_id) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Author ID is required",
//         },
//         { status: 400 }
//       );
//     }

//     // -------------------------
//     // Check duplicate slug
//     // -------------------------

//     const [existing] = await db.query(
//       `
//       SELECT id
//       FROM blog_posts
//       WHERE slug = ?
//       AND delete_status = 0
//       LIMIT 1
//       `,
//       [slug.trim()]
//     );

//     if (existing.length > 0) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Slug already exists",
//         },
//         { status: 409 }
//       );
//     }

//     // -------------------------
//     // Insert Blog Post
//     // -------------------------

//     const [result] = await db.query(
//       `
//       INSERT INTO blog_posts
//       (
//         title,
//         slug,
//         excerpt,
//         content,
//         featured_image,
//         category_id,
//         author_id,
//         status,
//         is_featured,
//         views,
//         published_at,
//         delete_status,
//         created_at,
//         updated_at
//       )
//       VALUES
//       (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())
//       `,
//       [
//         title.trim(),
//         slug.trim(),
//         excerpt,
//         content,
//         featured_image,
//         category_id,
//         author_id,
//         status,
//         is_featured,
//         views,
//         published_at,
//         delete_status,
//       ]
//     );

//     // -------------------------
//     // Response
//     // -------------------------

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Blog post saved successfully",
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Blog Post Save Error:", error);

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to save blog post",
//         error: error.message,
//       },
//       { status: 500 }
//     );
//   }
// }

// withn image form data 

export async function POST(request) {
  
  try {
    // IMPORTANT:
    // Frontend FormData bhej raha hai
    const formData = await request.formData();

    const title = formData.get("title");
    const slug = formData.get("slug");
    const excerpt = formData.get("excerpt") || null;
    const content = formData.get("content") || "";
    const category_id = formData.get("category_id") || null;
    const author_id = formData.get("author_id");
    const status = formData.get("status") || "draft";

    const is_featured = 0;
    const views = 0;
    const delete_status = 0;

    // Image
    const image = formData.get("featured_image");

    // --------------------------------
    // Validation
    // --------------------------------

    if (!title || !title.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Title is required",
        },
        { status: 400 }
      );
    }

    if (!slug || !slug.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Slug is required",
        },
        { status: 400 }
      );
    }

    if (!author_id) {
      return NextResponse.json(
        {
          success: false,
          message: "Author ID is required",
        },
        { status: 400 }
      );
    }

    // --------------------------------
    // Check duplicate slug
    // --------------------------------

    const [existing] = await db.query(
      `
      SELECT id
      FROM blog_posts
      WHERE slug = ?
      AND delete_status = 0
      LIMIT 1
      `,
      [slug.trim()]
    );

    if (existing.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Slug already exists",
        },
        { status: 409 }
      );
    }

    // --------------------------------
    // Upload Image
    // --------------------------------

    let featured_image = null;

    if (image instanceof File && image.size > 0) {
      const uploadDir = path.join(
        process.cwd(),
        "public",
        "uploads",
        "blog"
      );

      await fs.mkdir(uploadDir, {
        recursive: true,
      });

      const extension = path.extname(image.name);

      const fileName = `${Date.now()}${extension}`;

      const filePath = path.join(
        uploadDir,
        fileName
      );

      const buffer = Buffer.from(
        await image.arrayBuffer()
      );

      await fs.writeFile(filePath, buffer);

      featured_image = `/uploads/blog/${fileName}`;
    }

    // --------------------------------
    // Published Date
    // --------------------------------

    let published_at = null;

    if (status === "published") {
      published_at = new Date();
    }

    // --------------------------------
    // Insert
    // --------------------------------

    const [result] = await db.query(
      `
      INSERT INTO blog_posts
      (
        title,
        slug,
        excerpt,
        content,
        featured_image,
        category_id,
        author_id,
        status,
        is_featured,
        views,
        published_at,
        delete_status,
        created_at,
        updated_at
      )
      VALUES
      (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())
      `,
      [
        title.trim(),
        slug.trim(),
        excerpt,
        content,
        featured_image,
        category_id,
        author_id,
        status,
        is_featured,
        views,
        published_at,
        delete_status,
      ]
    );

    // --------------------------------
    // Success
    // --------------------------------

    return NextResponse.json(
      {
        success: true,
        message: "Blog post saved successfully",
        data: {
          id: result.insertId,
          title: title.trim(),
          slug: slug.trim(),
          featured_image,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Blog Post Save Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save blog post",
        error: error.message,
      },
      { status: 500 }
    );
  }
}