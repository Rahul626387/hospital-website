import { NextResponse } from "next/server";
import db from "../../../../lib/db";


// =========================
// GET SINGLE CATEGORY
// GET /api/blog-categories/1
// =========================
export async function GET(request, { params }) {
  try {
    const { id } = await params;

    const [rows] = await db.query(
      `
      SELECT
        id,
        name,
        slug,
        description,
        status,
        create_by,
        created_at,
        updated_at
      FROM blog_categories
      WHERE id = ?
      LIMIT 1
      `,
      [id]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog category not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Blog category fetched successfully",
      data: rows[0],
    });
  } catch (error) {
    console.error("GET CATEGORY ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch blog category",
        error: error.message,
      },
      { status: 500 }
    );
  }
}


// =========================
// UPDATE CATEGORY
// PUT /api/blog-categories/1
// =========================
export async function PUT(request, { params }) {
  try {
    const { id } = await params;

    const body = await request.json();

    const {
      name,
      slug,
      description = "",
      status = 1,
    } = body;

    // Validation
    if (!name || !slug) {
      return NextResponse.json(
        {
          success: false,
          message: "Name and slug are required",
        },
        { status: 400 }
      );
    }

    // Check category
    const [category] = await db.query(
      `
      SELECT id
      FROM blog_categories
      WHERE id = ?
      LIMIT 1
      `,
      [id]
    );

    if (category.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog category not found",
        },
        { status: 404 }
      );
    }

    // Check duplicate slug
    const [existing] = await db.query(
      `
      SELECT id
      FROM blog_categories
      WHERE slug = ?
      AND id != ?
      LIMIT 1
      `,
      [slug.trim(), id]
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

    // Update
    await db.query(
      `
      UPDATE blog_categories
      SET
        name = ?,
        slug = ?,
        description = ?,
        status = ?,
        updated_at = NOW()
      WHERE id = ?
      `,
      [
        name.trim(),
        slug.trim(),
        description?.trim() || null,
        status ? 1 : 0,
        id,
      ]
    );

    return NextResponse.json({
      success: true,
      message: "Blog category updated successfully",
    });

  } catch (error) {
    console.error("PUT CATEGORY ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update blog category",
        error: error.message,
      },
      { status: 500 }
    );
  }
}


// =========================
// DELETE CATEGORY
// DELETE /api/blog-categories/1
// =========================

// new apis 

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;

    const body = await request.json();
    const { user_id } = body;

    // Validate ID
    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "Category ID is required",
        },
        { status: 400 }
      );
    }

    // Validate User ID
    // if (!user_id) {
    //   return NextResponse.json(
    //     {
    //       success: false,
    //       message: "User ID is required",
    //     },
    //     { status: 400 }
    //   );
    // }

    // Check category
    const [category] = await db.query(
      `
      SELECT id, name, status
      FROM blog_categories
      WHERE id = ?
      LIMIT 1
      `,
      [id]
    );

    if (category.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog category not found",
        },
        { status: 404 }
      );
    }

    // Soft Delete using status = 3
    const [result] = await db.query(
      `
      UPDATE blog_categories
      SET
        status = 3,
        updated_at = NOW()
        WHERE id = ?
        `,
        [id]
        // [user_id, id]
      );
      // deleted_by = ?,

    if (result.affectedRows === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog category could not be deleted",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Blog category deleted successfully",
        // data: {
        //   id: id,
        //   name: category[0].name,
        //   status: 3,
        //   deleted_by: user_id,
        // },
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("DELETE CATEGORY ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete blog category",
        error: error.message,
      },
      { status: 500 }
    );
  }
}



// export async function DELETE(request, { params }) {
//   try {
//     const { id } = await params;

//     const body = await request.json();
//     const { user_id } = body;

//     if (!user_id) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "User ID is required",
//         },
//         { status: 400 }
//       );
//     }

//     // Check category
//     const [category] = await db.query(
//       `
//       SELECT id
//       FROM blog_categories
//       WHERE id = ?
//       AND delete_status = 1
//       LIMIT 1
//       `,
//       [id]
//     );

//     if (category.length === 0) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Blog category not found",
//         },
//         { status: 404 }
//       );
//     }

//     // Soft Delete
//     await db.query(
//       `
//       UPDATE blog_categories
//       SET
//         delete_status = 0,
//         deleted_by = ?
//       WHERE id = ?
//       `,
//       [user_id, id]
//     );

//     return NextResponse.json({
//       success: true,
//       message: "Blog category deleted successfully",
//       deleted_by: user_id,
//     });

//   } catch (error) {
//     console.error("DELETE CATEGORY ERROR:", error);

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to delete blog category",
//         error: error.message,
//       },
//       { status: 500 }
//     );
//   }
// }

// export async function DELETE(request, { params }) {
//   try {
//     const { id } = await params;

//     const body = await request.json();
//     const { user_id } = body;

//     if (!user_id) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "User ID is required",
//         },
//         { status: 400 }
//       );
//     }

//     // Check category
//     const [category] = await db.query(
//       `
//       SELECT id
//       FROM blog_categories
//       WHERE id = ?
//       LIMIT 1
//       `,
//       [id]
//     );

//     if (category.length === 0) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Blog category not found",
//         },
//         { status: 404 }
//       );
//     }

//     // Delete
//     await db.query(
//       `
//       DELETE FROM blog_categories
//       WHERE id = ?
//       `,
//       [id]
//     );

//     return NextResponse.json({
//       success: true,
//       message: "Blog category deleted successfully",
//       deleted_by: user_id,
//     });
//   } catch (error) {
//     console.error("DELETE CATEGORY ERROR:", error);

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to delete blog category",
//         error: error.message,
//       },
//       { status: 500 }
//     );
//   }
// }