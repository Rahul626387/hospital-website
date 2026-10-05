import { NextResponse } from "next/server";
import db from "../../../../lib/db";



export async function GET(request, { params }) {
  try {
    const { id } = await params;

    console.log("BLOG ID:", id);

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid blog ID",
        },
        { status: 400 }
      );
    }

    const query = `
      SELECT
        id,
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
      FROM blog_posts
      WHERE id = ?
      LIMIT 1
    `;

    // console.log("QUERY:", query);
    // console.log("PARAM:", id);

    const [rows] = await db.query(query, [id]);

    // console.log("RESULT:", rows);

    if (rows.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog post not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: rows[0],
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Get Blog Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch blog post",
        error: error.message,
      },
      { status: 500 }
    );
  }
}