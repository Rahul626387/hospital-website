import { NextResponse } from "next/server";
import db from "../../../../lib/db";
import fs from "fs/promises";
import path from "path";

import {
  uploadPublicImage,
  deleteBlobImage,
} from "@/lib/blobUpload";


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



// UPDATE BLOG POST API
// export async function PUT(request, { params }) {
//   let uploadedPath = null;

//   try {
//     const { id } = await params;
//     const blogId = Number(id);

//     // --------------------------------
//     // Validate ID
//     // --------------------------------
//     if (!Number.isInteger(blogId) || blogId <= 0) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Invalid blog post ID",
//         },
//         { status: 400 }
//       );
//     }

//     // --------------------------------
//     // Get FormData
//     // --------------------------------
//     const formData = await request.formData();

//     const title = formData.get("title");
//     const slug = formData.get("slug");
//     const excerpt = formData.get("excerpt") || null;
//     const content = formData.get("content") || "";
//     const category_id = formData.get("category_id") || null;
//     const author_id = formData.get("author_id");
//     const status = formData.get("status") || "draft";

//     const image = formData.get("featured_image");

//     // --------------------------------
//     // Validation
//     // --------------------------------
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

//     // --------------------------------
//     // Check existing blog post
//     // --------------------------------
//     const [blogRows] = await db.query(
//       `
//       SELECT id, featured_image, published_at
//       FROM blog_posts
//       WHERE id = ?
//         AND delete_status = 0
//       LIMIT 1
//       `,
//       [blogId]
//     );

//     if (blogRows.length === 0) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Blog post not found",
//         },
//         { status: 404 }
//       );
//     }

//     const existingBlog = blogRows[0];

//     // --------------------------------
//     // Check duplicate slug
//     // Exclude current blog post
//     // --------------------------------
//     const [existingSlug] = await db.query(
//       `
//       SELECT id
//       FROM blog_posts
//       WHERE slug = ?
//         AND id != ?
//         AND delete_status = 0
//       LIMIT 1
//       `,
//       [slug.trim(), blogId]
//     );

//     if (existingSlug.length > 0) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Slug already exists",
//         },
//         { status: 409 }
//       );
//     }

//     // --------------------------------
//     // Preserve existing image by default
//     // --------------------------------
//     let featured_image = existingBlog.featured_image;

//     // --------------------------------
//     // Upload new image if provided
//     // --------------------------------
//     if (image instanceof File && image.size > 0) {
//       const allowedTypes = [
//         "image/jpeg",
//         "image/png",
//         "image/webp",
//         "image/gif",
//       ];

//       if (!allowedTypes.includes(image.type)) {
//         return NextResponse.json(
//           {
//             success: false,
//             message: "Only JPG, PNG, WEBP and GIF images are allowed",
//           },
//           { status: 400 }
//         );
//       }

//       const uploadDir = path.join(
//         process.cwd(),
//         "public",
//         "uploads",
//         "blog"
//       );

//       await fs.mkdir(uploadDir, {
//         recursive: true,
//       });

//       const extension = path.extname(image.name).toLowerCase();

//       const fileName = `${Date.now()}-${blogId}${extension}`;

//       const filePath = path.join(uploadDir, fileName);

//       const buffer = Buffer.from(
//         await image.arrayBuffer()
//       );

//       await fs.writeFile(filePath, buffer);

//       uploadedPath = filePath;

//       featured_image = `/uploads/blog/${fileName}`;
//     }

//     // --------------------------------
//     // Published date
//     // --------------------------------
//     let published_at = existingBlog.published_at;

//     if (status === "published" && !published_at) {
//       published_at = new Date();
//     }

//     // If changed from published to draft, clear published date.
//     if (status !== "published") {
//       published_at = null;
//     }

//     // --------------------------------
//     // Update blog post
//     // --------------------------------
//     const [result] = await db.query(
//       `
//       UPDATE blog_posts
//       SET
//         title = ?,
//         slug = ?,
//         excerpt = ?,
//         content = ?,
//         featured_image = ?,
//         category_id = ?,
//         author_id = ?,
//         status = ?,
//         published_at = ?,
//         updated_at = NOW()
//       WHERE id = ?
//         AND delete_status = 0
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
//         published_at,
//         blogId,
//       ]
//     );

//     if (result.affectedRows === 0) {
//       // Remove newly uploaded image if the update did not happen.
//       if (uploadedPath) {
//         await fs.unlink(uploadedPath).catch(() => {});
//       }

//       return NextResponse.json(
//         {
//           success: false,
//           message: "Blog post was not updated",
//         },
//         { status: 404 }
//       );
//     }

//     // --------------------------------
//     // Success
//     // --------------------------------
//     return NextResponse.json(
//       {
//         success: true,
//         message: "Blog post updated successfully",
//         data: {
//           id: blogId,
//           title: title.trim(),
//           slug: slug.trim(),
//           excerpt,
//           content,
//           featured_image,
//           category_id,
//           author_id,
//           status,
//           published_at,
//         },
//       },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Blog Post Update Error:", error);

//     // Clean up a newly uploaded image if an error occurs.
//     if (uploadedPath) {
//       await fs.unlink(uploadedPath).catch(() => {});
//     }

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to update blog post",
//         error: error.message,
//       },
//       { status: 500 }
//     );
//   }
// }





// UPDATE BLOG POST API
export async function PUT(request, { params }) {
  let uploadedImageUrl = null;

  try {
    const { id } = await params;
    const blogId = Number(id);

    // Validate ID
    if (!Number.isInteger(blogId) || blogId <= 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid blog post ID",
        },
        { status: 400 }
      );
    }

    // Get existing blog post
    const [blogRows] = await db.query(
      `
      SELECT id, featured_image, published_at
      FROM blog_posts
      WHERE id = ?
        AND delete_status = 0
      LIMIT 1
      `,
      [blogId]
    );

    if (blogRows.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog post not found",
        },
        { status: 404 }
      );
    }

    const existingBlog = blogRows[0];

    // Get FormData
    const formData = await request.formData();

    const title = formData.get("title");
    const slug = formData.get("slug");
    const excerpt = formData.get("excerpt") || null;
    const content = formData.get("content") || "";

    const categoryValue = formData.get("category_id");
    const authorValue = formData.get("author_id");

    const category_id =
      categoryValue && String(categoryValue).trim()
        ? Number(categoryValue)
        : null;

    const author_id = Number(authorValue);

    const status = formData.get("status") || "draft";
    const image = formData.get("featured_image");

    // Validate fields
    if (
      typeof title !== "string" ||
      !title.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Title is required",
        },
        { status: 400 }
      );
    }

    if (
      typeof slug !== "string" ||
      !slug.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Slug is required",
        },
        { status: 400 }
      );
    }

    if (
      !Number.isInteger(author_id) ||
      author_id <= 0
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Valid Author ID is required",
        },
        { status: 400 }
      );
    }

    if (
      category_id !== null &&
      (!Number.isInteger(category_id) ||
        category_id <= 0)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid category ID",
        },
        { status: 400 }
      );
    }

    if (
      !["draft", "published", "archived"].includes(status)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid blog post status",
        },
        { status: 400 }
      );
    }

    // Check duplicate slug, excluding current post
    const [existingSlug] = await db.query(
      `
      SELECT id
      FROM blog_posts
      WHERE slug = ?
        AND id != ?
        AND delete_status = 0
      LIMIT 1
      `,
      [slug.trim(), blogId]
    );

    if (existingSlug.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Slug already exists",
        },
        { status: 409 }
      );
    }

    // Preserve existing image by default
    let featured_image = existingBlog.featured_image;

    // Upload new image to Vercel Blob if provided
    if (
      image &&
      typeof image !== "string" &&
      typeof image.arrayBuffer === "function" &&
      image.size > 0
    ) {
      uploadedImageUrl = await uploadPublicImage(
        image,
        "blog"
      );

      featured_image = uploadedImageUrl;
    }

    // Published date handling
    let published_at = existingBlog.published_at;

    if (status === "published" && !published_at) {
      published_at = new Date();
    }

    if (status !== "published") {
      published_at = null;
    }

    // Update blog post
    const [result] = await db.query(
      `
      UPDATE blog_posts
      SET
        title = ?,
        slug = ?,
        excerpt = ?,
        content = ?,
        featured_image = ?,
        category_id = ?,
        author_id = ?,
        status = ?,
        published_at = ?,
        updated_at = NOW()
      WHERE id = ?
        AND delete_status = 0
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
        published_at,
        blogId,
      ]
    );

    if (result.affectedRows === 0) {
      // If a new image was uploaded, clean it up
      if (uploadedImageUrl) {
        try {
          await deleteBlobImage(uploadedImageUrl);
          uploadedImageUrl = null;
        } catch (cleanupError) {
          console.error(
            "New blog image cleanup failed:",
            cleanupError
          );
        }
      }

      return NextResponse.json(
        {
          success: false,
          message: "Blog post was not updated",
        },
        { status: 404 }
      );
    }

    // Delete old Blob image only after successful DB update
    if (
      uploadedImageUrl &&
      existingBlog.featured_image &&
      existingBlog.featured_image !== uploadedImageUrl &&
      existingBlog.featured_image.includes(
        ".blob.vercel-storage.com/"
      )
    ) {
      try {
        await deleteBlobImage(
          existingBlog.featured_image
        );
      } catch (deleteError) {
        console.error(
          "Previous blog image deletion failed:",
          deleteError
        );
      }
    }

    // Success
    return NextResponse.json(
      {
        success: true,
        message: "Blog post updated successfully",
        data: {
          id: blogId,
          title: title.trim(),
          slug: slug.trim(),
          excerpt,
          content,
          featured_image,
          category_id,
          author_id,
          status,
          published_at,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Blog Post Update Error:", error);

    // Clean up newly uploaded Blob if update fails
    if (uploadedImageUrl) {
      try {
        await deleteBlobImage(uploadedImageUrl);
      } catch (cleanupError) {
        console.error(
          "New blog image cleanup failed:",
          cleanupError
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
        message: "Failed to update blog post",
        error:
          process.env.NODE_ENV === "development"
            ? error.message
            : undefined,
      },
      { status: 500 }
    );
  }
}
