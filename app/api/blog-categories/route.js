import { NextResponse } from "next/server";
import db from "../../../lib/db";


// =========================
// GET ALL CATEGORIES
// GET /api/blog-categories
// =========================
export async function GET() {
  try {
   const [rows] = await db.query(`
        SELECT 
            id,
            name,
            slug,
            description,
            status,
            created_at,
            updated_at
        FROM blog_categories
        WHERE status != 3
        ORDER BY id ASC
        `);
        
    return NextResponse.json({
      success: true,
      message: "Blog categories fetched successfully",
      data: rows,
    });
  } catch (error) {
    console.error("GET BLOG CATEGORIES ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch blog categories",
        error: error.message,
      },
      { status: 500 }
    );
  }
}


// =========================
// CREATE CATEGORY
// POST /api/blog-categories
// =========================
// export async function POST(request) {
//   try {
//     const body = await request.json();

//     const {
//       name,
//       slug,
//       description = "",
//       status = 1,
//       user_id,
//     } = body;

//     // Validation
//     if (!name || !slug) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Name and slug are required",
//         },
//         { status: 400 }
//       );
//     }

//     if (!user_id) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "User ID is required",
//         },
//         { status: 400 }
//       );
//     }

//     // Check duplicate slug
//     const [existing] = await db.query(
//       `
//       SELECT id
//       FROM blog_categories
//       WHERE slug = ?
//       LIMIT 1
//       `,
//       [slug.trim()]
//     );

//     if (existing.length > 0) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Category slug already exists",
//         },
//         { status: 409 }
//       );
//     }

//     // Insert category
//     const [result] = await db.query(
//       `
//       INSERT INTO blog_categories
//       (
//         name,
//         slug,
//         description,
//         status,
//         create_by
//       )
//       VALUES (?, ?, ?, ?, ?)
//       `,
//       [
//         name.trim(),
//         slug.trim(),
//         description?.trim() || null,
//         status ? 1 : 0,
//         user_id,
//       ]
//     );

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Blog category created successfully",
//         data: {
//           id: result.insertId,
//           name: name.trim(),
//           slug: slug.trim(),
//           description: description?.trim() || null,
//           status: status ? 1 : 0,
//           create_by: user_id,
//         },
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("POST BLOG CATEGORY ERROR:", error);

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to create blog category",
//         error: error.message,
//       },
//       { status: 500 }
//     );
//   }
// }

// new api 

export async function POST(request) {
  try {
    // Get request body
    const body = await request.json();

    const {
      name,
      slug,
      description = "",
      status = 1,
      user_id,
    } = body;

    // ---------------------------------------
    // Validation
    // ---------------------------------------

    if (!name || !name.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Category name is required",
        },
        { status: 400 }
      );
    }

    if (!slug || !slug.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Category slug is required",
        },
        { status: 400 }
      );
    }

    if (!user_id) {
      return NextResponse.json(
        {
          success: false,
          message: "User ID is required",
        },
        { status: 400 }
      );
    }

    // Clean values
    const categoryName = name.trim();
    const categorySlug = slug.trim().toLowerCase();
    const categoryDescription =
      description?.trim() || null;

    const categoryStatus = Number(status) === 1 ? 1 : 0;

    // ---------------------------------------
    // Check duplicate slug
    // ---------------------------------------

    const [existing] = await db.execute(
      `
      SELECT id
      FROM blog_categories
      WHERE slug = ?
      LIMIT 1
      `,
      [categorySlug]
    );

    if (existing.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Category slug already exists",
        },
        { status: 409 }
      );
    }

    // ---------------------------------------
    // Insert category
    // ---------------------------------------

    const [result] = await db.execute(
      `
      INSERT INTO blog_categories
      (
        name,
        slug,
        description,
        status,
        create_by
      )
      VALUES (?, ?, ?, ?, ?)
      `,
      [
        categoryName,
        categorySlug,
        categoryDescription,
        categoryStatus,
        user_id,
      ]
    );

    // ---------------------------------------
    // Success response
    // ---------------------------------------

    return NextResponse.json(
      {
        success: true,
        message: "Blog category created successfully",
      },
      { status: 201 }
    );

  } catch (error) {
    console.error(
      "POST BLOG CATEGORY ERROR:",
      error
    );

    // ---------------------------------------
    // Duplicate key error
    // ---------------------------------------

    if (error.code === "ER_DUP_ENTRY") {
      return NextResponse.json(
        {
          success: false,
          message: "Category slug already exists",
        },
        { status: 409 }
      );
    }

    // ---------------------------------------
    // Other database errors
    // ---------------------------------------

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create blog category",
        error:
          process.env.NODE_ENV === "development"
            ? error.message
            : undefined,
      },
      { status: 500 }
    );
  }
}
