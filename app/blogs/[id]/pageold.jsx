import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Eye,
  User,
  Share2,
  Clock3,
  ChevronRight,
} from "lucide-react";

import blogs from "../../data/blogs.json";

const BlogDetailsPage = async ({ params }) => {
  const { id } = await params;

  // Find blog by ID
  const blog = blogs.find((item) => item.id === Number(id));

  // Blog not found
  if (!blog) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <div className="w-full max-w-md rounded-3xl bg-white p-10 text-center shadow-xl">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-2xl">
            📄
          </div>

          <h1 className="text-2xl font-bold text-slate-900">
            Blog Not Found
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            The blog you are looking for does not exist or may have been
            removed.
          </p>

          <Link
            href="/blogs"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <ArrowLeft size={17} />
            Back to Blogs
          </Link>
        </div>
      </main>
    );
  }

  // Only published blogs
  if (blog.status !== "published") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <div className="w-full max-w-md rounded-3xl bg-white p-10 text-center shadow-xl">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 text-2xl">
            🔒
          </div>

          <h1 className="text-2xl font-bold text-slate-900">
            Blog Not Available
          </h1>

          <p className="mt-3 text-sm text-slate-500">
            This blog is currently not available for public viewing.
          </p>

          <Link
            href="/blogs"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <ArrowLeft size={17} />
            Back to Blogs
          </Link>
        </div>
      </main>
    );
  }

  // Related blogs
  const relatedBlogs = blogs
    .filter(
      (item) =>
        item.status === "published" &&
        item.id !== blog.id &&
        item.category_id === blog.category_id
    )
    .slice(0, 3);

  // Format date
  const publishedDate = blog.published_at
    ? new Date(blog.published_at).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <main className="min-h-screen bg-slate-50">

      {/* =====================================================
          TOP HEADER / BREADCRUMB
      ===================================================== */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link
              href="/"
              className="transition hover:text-blue-600"
            >
              Home
            </Link>

            <ChevronRight size={15} />

            <Link
              href="/blogs"
              className="transition hover:text-blue-600"
            >
              Blogs
            </Link>

            <ChevronRight size={15} />

            <span className="max-w-[200px] truncate text-slate-700">
              {blog.title}
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          BLOG HEADER
      ===================================================== */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-12 sm:px-6 lg:px-8 lg:pb-16 lg:pt-16">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            {/* LEFT */}
            <div>

              {/* Category */}
              <div className="mb-5">
                <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                  {blog.category_name}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl xl:text-6xl">
                {blog.title}
              </h1>

              {/* Excerpt */}
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                {blog.excerpt}
              </p>

              {/* Meta */}
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4 text-sm text-slate-500">

                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <User size={17} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      Author
                    </p>

                    <p className="font-semibold text-slate-700">
                      Admin
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <CalendarDays
                    size={17}
                    className="text-blue-600"
                  />

                  <div>
                    <p className="text-xs text-slate-400">
                      Published
                    </p>

                    <p className="font-semibold text-slate-700">
                      {publishedDate}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Eye
                    size={17}
                    className="text-blue-600"
                  />

                  <div>
                    <p className="text-xs text-slate-400">
                      Views
                    </p>

                    <p className="font-semibold text-slate-700">
                      {blog.views}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT - IMAGE */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-blue-100/50 blur-2xl" />

              <div className="relative overflow-hidden rounded-3xl bg-slate-100 shadow-2xl">
                <img
                  src={blog.featured_image}
                  alt={blog.title}
                  className="h-[300px] w-full object-cover sm:h-[400px] lg:h-[460px]"
                />

                {/* Image Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <div className="flex items-center gap-2 text-sm font-medium text-white">
                    <Clock3 size={16} />
                    Health & Knowledge
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CONTENT AREA
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">

          {/* =================================================
              MAIN CONTENT
          ================================================= */}
          <article className="min-w-0">

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">

              {/* Share Header */}
              <div className="mb-8 flex items-center justify-between border-b border-slate-100 pb-6">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Blog Article
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Read the complete article below
                  </p>
                </div>

                <button
                  type="button"
                  className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                >
                  <Share2 size={16} />
                  Share
                </button>
              </div>

              {/* Excerpt */}
              <div className="mb-8 rounded-2xl border-l-4 border-blue-600 bg-blue-50 px-5 py-4">
                <p className="text-base font-medium leading-7 text-slate-700">
                  {blog.excerpt}
                </p>
              </div>

              {/* HTML CONTENT */}
              <div
                className="
                  blog-content

                  text-[16px]
                  leading-8
                  text-slate-600

                  [&_h1]:mb-5
                  [&_h1]:mt-8
                  [&_h1]:text-3xl
                  [&_h1]:font-extrabold
                  [&_h1]:leading-tight
                  [&_h1]:text-slate-950

                  [&_h2]:mb-4
                  [&_h2]:mt-10
                  [&_h2]:text-2xl
                  [&_h2]:font-bold
                  [&_h2]:leading-tight
                  [&_h2]:text-slate-900

                  [&_h3]:mb-3
                  [&_h3]:mt-8
                  [&_h3]:text-xl
                  [&_h3]:font-bold
                  [&_h3]:text-slate-900

                  [&_p]:mb-6
                  [&_p]:leading-8

                  [&_strong]:font-bold
                  [&_strong]:text-slate-900

                  [&_b]:font-bold
                  [&_b]:text-slate-900

                  [&_a]:font-semibold
                  [&_a]:text-blue-600
                  [&_a]:underline

                  [&_ul]:mb-6
                  [&_ul]:list-disc
                  [&_ul]:space-y-2
                  [&_ul]:pl-6

                  [&_ol]:mb-6
                  [&_ol]:list-decimal
                  [&_ol]:space-y-2
                  [&_ol]:pl-6

                  [&_li]:leading-7

                  [&_blockquote]:my-8
                  [&_blockquote]:rounded-2xl
                  [&_blockquote]:border-l-4
                  [&_blockquote]:border-blue-600
                  [&_blockquote]:bg-blue-50
                  [&_blockquote]:px-6
                  [&_blockquote]:py-5
                  [&_blockquote]:italic

                  [&_img]:my-8
                  [&_img]:max-h-[600px]
                  [&_img]:w-full
                  [&_img]:rounded-2xl
                  [&_img]:object-cover

                  [&_table]:my-8
                  [&_table]:w-full
                  [&_table]:border-collapse

                  [&_th]:border
                  [&_th]:border-slate-200
                  [&_th]:bg-slate-50
                  [&_th]:px-4
                  [&_th]:py-3
                  [&_th]:text-left
                  [&_th]:font-semibold

                  [&_td]:border
                  [&_td]:border-slate-200
                  [&_td]:px-4
                  [&_td]:py-3
                "
                dangerouslySetInnerHTML={{
                  __html: blog.content || "",
                }}
              />

            </div>

            {/* =================================================
                BOTTOM NAVIGATION
            ================================================= */}
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <Link
                href="/blogs"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                <ArrowLeft size={17} />
                Back to Blogs
              </Link>

              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Eye size={16} />
                {blog.views} views
              </div>

            </div>

          </article>

          {/* =================================================
              SIDEBAR
          ================================================= */}
          <aside className="lg:sticky lg:top-6 lg:self-start">

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Explore More
                </p>

                <h2 className="mt-1 text-xl font-bold text-slate-900">
                  Related Blogs
                </h2>
              </div>

              {relatedBlogs.length > 0 ? (
                <div className="space-y-5">

                  {relatedBlogs.map((item) => (
                    <Link
                      key={item.id}
                      href={`/blog/${item.id}`}
                      className="group block"
                    >
                      <div className="flex gap-4">

                        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
                          <img
                            src={item.featured_image}
                            alt={item.title}
                            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                          />
                        </div>

                        <div className="min-w-0">
                          <span className="text-xs font-medium text-blue-600">
                            {item.category_name}
                          </span>

                          <h3 className="mt-1 line-clamp-2 text-sm font-bold leading-5 text-slate-800 transition group-hover:text-blue-600">
                            {item.title}
                          </h3>

                          <p className="mt-2 text-xs text-slate-400">
                            {item.views} views
                          </p>
                        </div>

                      </div>
                    </Link>
                  ))}

                </div>
              ) : (
                <p className="text-sm text-slate-500">
                  No related blogs available.
                </p>
              )}

              {/* View All */}
              <Link
                href="/blogs"
                className="mt-7 flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                View All Blogs
                <ChevronRight size={16} />
              </Link>

            </div>

            {/* Category Card */}
            <div className="mt-5 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white shadow-lg">

              <p className="text-sm font-medium text-blue-100">
                Category
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                {blog.category_name}
              </h3>

              <p className="mt-3 text-sm leading-6 text-blue-100">
                Explore more articles and useful information from this
                category.
              </p>

              <Link
                href={`/blogs?category=${blog.category_id}`}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Explore Category
                <ChevronRight size={16} />
              </Link>

            </div>

          </aside>

        </div>
      </section>

    </main>
  );
};

export default BlogDetailsPage;


// import React from "react";
// import Link from "next/link";
// import {
//   ArrowLeft,
//   ArrowRight,
//   Calendar,
//   CalendarDays,
//   Eye,
//   Share2,
// } from "lucide-react";

// import blogs from "../../data/blogs.json";
// import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

// const BlogDetailsPage = async ({ params }) => {
//   const { id } = await params;

//   const blog = blogs.find((item) => item.id === Number(id));

//   // --------------------------------------------------
//   // Blog Not Found
//   // --------------------------------------------------
//   if (!blog) {
//     return (
//       <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
//         <div className="w-full max-w-md rounded-3xl bg-white p-10 text-center shadow-lg">
//           <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-2xl">
//             📰
//           </div>

//           <h1 className="text-2xl font-bold text-slate-900">
//             Blog Not Found
//           </h1>

//           <p className="mt-3 text-sm leading-6 text-slate-500">
//             Sorry, the blog you are looking for could not be found.
//           </p>

//           <Link
//             href="/blogs"
//             className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
//           >
//             <ArrowLeft size={17} />
//             Back to Blogs
//           </Link>
//         </div>
//       </main>
//     );
//   }

//   // --------------------------------------------------
//   // Published Check
//   // --------------------------------------------------
//   if (blog.status !== "published") {
//     return (
//       <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
//         <div className="w-full max-w-md rounded-3xl bg-white p-10 text-center shadow-lg">
//           <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-amber-50 text-2xl">
//             🔒
//           </div>

//           <h1 className="text-2xl font-bold text-slate-900">
//             Blog Not Available
//           </h1>

//           <p className="mt-3 text-sm text-slate-500">
//             This article is currently not available.
//           </p>

//           <Link
//             href="/blogs"
//             className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
//           >
//             <ArrowLeft size={17} />
//             Back to Blogs
//           </Link>
//         </div>
//       </main>
//     );
//   }

//   // --------------------------------------------------
//   // Date
//   // --------------------------------------------------
//   const publishedDate = blog.published_at
//     ? new Date(blog.published_at).toLocaleDateString("en-IN", {
//         day: "2-digit",
//         month: "long",
//         year: "numeric",
//       })
//     : "";

//   // --------------------------------------------------
//   // Related Blogs
//   // --------------------------------------------------
//   const relatedBlogs = blogs
//     .filter(
//       (item) =>
//         item.id !== blog.id &&
//         item.status === "published" &&
//         item.category_id === blog.category_id
//     )
//     .slice(0, 3);

//   // --------------------------------------------------
//   // Latest Blogs
//   // --------------------------------------------------
//   const latestBlogs = blogs
//     .filter(
//       (item) =>
//         item.id !== blog.id && item.status === "published"
//     )
//     .slice(0, 4);

//   return (
//     <main className="min-h-screen bg-[#f8fafc]">

//       {/* =====================================================
//           BREADCRUMB
//       ===================================================== */}
//       <section className="border-b border-slate-200 bg-white">
//         <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
//           <div className="flex items-center gap-2 text-sm">

//             <Link
//               href="/"
//               className="text-slate-400 transition hover:text-blue-600"
//             >
//               Home
//             </Link>

//             <span className="text-slate-300">/</span>

//             <Link
//               href="/blogs"
//               className="text-slate-400 transition hover:text-blue-600"
//             >
//               Blogs
//             </Link>

//             <span className="text-slate-300">/</span>

//             <span className="max-w-[250px] truncate font-medium text-slate-700">
//               {blog.title}
//             </span>

//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           BLOG HERO
//       ===================================================== */}
//       <section className="bg-white">
//         <div className="mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-14">

//           <div className="mx-auto max-w-4xl text-center">

//             {/* Category */}
//             <div className="mb-5">
//               <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 ring-1 ring-blue-100">
//                 {blog.category_name}
//               </span>
//             </div>

//             {/* Title */}
//             <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
//               {blog.title}
//             </h1>

//             {/* Excerpt */}
//             <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
//               {blog.excerpt}
//             </p>

//             {/* Meta */}
//             <div className="mt-7 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">

//               <div className="flex items-center gap-2">
//                 <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600">
//                   <CalendarDays size={16} />
//                 </div>

//                 <span>{publishedDate}</span>
//               </div>

//               <span className="hidden text-slate-300 sm:block">
//                 •
//               </span>

//               <div className="flex items-center gap-2">
//                 <Eye size={17} className="text-blue-600" />
//                 <span>{blog.views} Views</span>
//               </div>

//             </div>

//           </div>

//           {/* =================================================
//               FEATURED IMAGE
//           ================================================= */}
//           <div className="mx-auto mt-10 max-w-6xl">
//             <div className="group relative overflow-hidden rounded-3xl bg-slate-100 shadow-2xl">

//               <img
//                 src={blog.featured_image}
//                 alt={blog.title}
//                 className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-[1.02] sm:h-[400px] lg:h-[540px]"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />

//               {/* Featured Badge */}
//               {blog.is_featured === 1 && (
//                 <div className="absolute left-5 top-5">
//                   <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-blue-700 shadow-lg backdrop-blur">
//                     FEATURED ARTICLE
//                   </span>
//                 </div>
//               )}

//             </div>
//           </div>

//         </div>
//       </section>

//       {/* =====================================================
//           MAIN CONTENT
//       ===================================================== */}
//       <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">

//         <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">

//           {/* =================================================
//               ARTICLE
//           ================================================= */}
//           <article className="min-w-0">

//             <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">

//               {/* Share */}
//               <div className="mb-8 flex items-center justify-between border-b border-slate-100 pb-6">

//                 <div>
//                   <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
//                     Health & Knowledge
//                   </p>

//                   <p className="mt-1 text-sm text-slate-400">
//                     Read the complete article
//                   </p>
//                 </div>

//                 <div className="flex items-center gap-2">

//                   <button
//                     type="button"
//                     aria-label="Share on Facebook"
//                     className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
//                   >
//                     <FaFacebook size={16} />
//                   </button>

//                   <button
//                     type="button"
//                     aria-label="Share on Twitter"
//                     className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
//                   >
//                     <FaTwitter size={16} />
//                   </button>

//                   <button
//                     type="button"
//                     aria-label="Share on LinkedIn"
//                     className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
//                   >
//                     <FaLinkedin size={16} />
//                   </button>

//                   <button
//                     type="button"
//                     aria-label="Share"
//                     className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
//                   >
//                     <Share2 size={16} />
//                   </button>

//                 </div>

//               </div>

//               {/* Excerpt Box */}
//               <div className="mb-9 rounded-2xl border-l-4 border-blue-600 bg-blue-50 px-6 py-5">
//                 <p className="text-base font-medium leading-7 text-slate-700">
//                   {blog.excerpt}
//                 </p>
//               </div>

//               {/* =================================================
//                   HTML CONTENT
//               ================================================= */}
//               <div
//                 className="
//                   blog-content

//                   text-[16px]
//                   leading-8
//                   text-slate-600

//                   [&_div]:max-w-full

//                   [&_h1]:mb-5
//                   [&_h1]:mt-8
//                   [&_h1]:text-3xl
//                   [&_h1]:font-extrabold
//                   [&_h1]:leading-tight
//                   [&_h1]:text-slate-950

//                   [&_h2]:mb-4
//                   [&_h2]:mt-10
//                   [&_h2]:text-2xl
//                   [&_h2]:font-bold
//                   [&_h2]:leading-tight
//                   [&_h2]:text-slate-900

//                   [&_h3]:mb-3
//                   [&_h3]:mt-8
//                   [&_h3]:text-xl
//                   [&_h3]:font-bold
//                   [&_h3]:text-slate-900

//                   [&_p]:mb-6
//                   [&_p]:leading-8

//                   [&_strong]:font-bold
//                   [&_strong]:text-slate-900

//                   [&_b]:font-bold
//                   [&_b]:text-slate-900

//                   [&_ul]:mb-6
//                   [&_ul]:list-disc
//                   [&_ul]:space-y-2
//                   [&_ul]:pl-6

//                   [&_ol]:mb-6
//                   [&_ol]:list-decimal
//                   [&_ol]:space-y-2
//                   [&_ol]:pl-6

//                   [&_li]:leading-7

//                   [&_a]:font-semibold
//                   [&_a]:text-blue-600
//                   [&_a]:underline

//                   [&_blockquote]:my-8
//                   [&_blockquote]:rounded-2xl
//                   [&_blockquote]:border-l-4
//                   [&_blockquote]:border-blue-600
//                   [&_blockquote]:bg-blue-50
//                   [&_blockquote]:px-6
//                   [&_blockquote]:py-5
//                   [&_blockquote]:italic

//                   [&_img]:my-8
//                   [&_img]:max-h-[600px]
//                   [&_img]:w-full
//                   [&_img]:rounded-2xl
//                   [&_img]:object-cover

//                   [&_table]:my-8
//                   [&_table]:w-full
//                   [&_table]:border-collapse

//                   [&_th]:border
//                   [&_th]:border-slate-200
//                   [&_th]:bg-slate-50
//                   [&_th]:px-4
//                   [&_th]:py-3
//                   [&_th]:text-left
//                   [&_th]:font-semibold
//                   [&_th]:text-slate-900

//                   [&_td]:border
//                   [&_td]:border-slate-200
//                   [&_td]:px-4
//                   [&_td]:py-3
//                 "
//                 dangerouslySetInnerHTML={{
//                   __html: blog.content || "",
//                 }}
//               />

//             </div>

//             {/* =================================================
//                 ARTICLE FOOTER
//             ================================================= */}
//             <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

//               <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

//                 <div>
//                   <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
//                     Category
//                   </p>

//                   <p className="mt-1 text-lg font-bold text-slate-900">
//                     {blog.category_name}
//                   </p>
//                 </div>

//                 <Link
//                   href="/blogs"
//                   className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
//                 >
//                   <ArrowLeft size={17} />
//                   All Blogs
//                 </Link>

//               </div>

//             </div>

//           </article>

//           {/* =================================================
//               SIDEBAR
//           ================================================= */}
//           <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">

//             {/* Related Blogs */}
//             <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

//               <div className="mb-6">
//                 <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
//                   You May Also Like
//                 </p>

//                 <h2 className="mt-1 text-xl font-bold text-slate-900">
//                   Related Blogs
//                 </h2>
//               </div>

//               {relatedBlogs.length > 0 ? (
//                 <div className="space-y-5">

//                   {relatedBlogs.map((item) => (
//                     <Link
//                       key={item.id}
//                       href={`/blog/${item.id}`}
//                       className="group block"
//                     >
//                       <div className="flex gap-4">

//                         <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-slate-100">
//                           <img
//                             src={item.featured_image}
//                             alt={item.title}
//                             className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
//                           />
//                         </div>

//                         <div className="min-w-0 flex-1">

//                           <span className="text-[11px] font-bold uppercase tracking-wide text-blue-600">
//                             {item.category_name}
//                           </span>

//                           <h3 className="mt-1 line-clamp-2 text-sm font-bold leading-5 text-slate-800 transition group-hover:text-blue-600">
//                             {item.title}
//                           </h3>

//                           <p className="mt-2 flex items-center gap-1 text-xs text-slate-400">
//                             <Eye size={12} />
//                             {item.views} views
//                           </p>

//                         </div>

//                       </div>
//                     </Link>
//                   ))}

//                 </div>
//               ) : (
//                 <p className="text-sm text-slate-500">
//                   No related blogs available.
//                 </p>
//               )}

//             </div>

//             {/* Latest Blogs */}
//             <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

//               <div className="mb-6">
//                 <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
//                   Latest
//                 </p>

//                 <h2 className="mt-1 text-xl font-bold text-slate-900">
//                   Latest Blogs
//                 </h2>
//               </div>

//               <div className="space-y-5">

//                 {latestBlogs.map((item, index) => (
//                   <Link
//                     key={item.id}
//                     href={`/blog/${item.id}`}
//                     className="group flex gap-3"
//                   >

//                     <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">
//                       {index + 1}
//                     </span>

//                     <div>
//                       <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-slate-800 transition group-hover:text-blue-600">
//                         {item.title}
//                       </h3>

//                       <p className="mt-1 text-xs text-slate-400">
//                         {item.category_name}
//                       </p>
//                     </div>

//                   </Link>
//                 ))}

//               </div>

//             </div>

//           </aside>

//         </div>
//       </section>

//       {/* =====================================================
//           RELATED ARTICLES BOTTOM
//       ===================================================== */}
//       {relatedBlogs.length > 0 && (
//         <section className="border-t border-slate-200 bg-white py-14">

//           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//             <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

//               <div>
//                 <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
//                   Continue Reading
//                 </p>

//                 <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
//                   Related Articles
//                 </h2>
//               </div>

//               <Link
//                 href="/blogs"
//                 className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
//               >
//                 View All
//                 <ArrowRight size={16} />
//               </Link>

//             </div>

//             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

//               {relatedBlogs.map((item) => (
//                 <Link
//                   key={item.id}
//                   href={`/blog/${item.id}`}
//                   className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
//                 >

//                   {/* Image */}
//                   <div className="relative h-52 overflow-hidden bg-slate-100">

//                     <img
//                       src={item.featured_image}
//                       alt={item.title}
//                       className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//                     />

//                     <div className="absolute left-4 top-4">
//                       <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-blue-700 shadow">
//                         {item.category_name}
//                       </span>
//                     </div>

//                   </div>

//                   {/* Card Content */}
//                   <div className="p-6">

//                     <h3 className="line-clamp-2 text-xl font-bold leading-7 text-slate-900 transition group-hover:text-blue-600">
//                       {item.title}
//                     </h3>

//                     <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
//                       {item.excerpt}
//                     </p>

//                     <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

//                       <span className="flex items-center gap-1.5 text-xs text-slate-400">
//                         <Eye size={14} />
//                         {item.views}
//                       </span>

//                       <span className="flex items-center gap-1 text-sm font-semibold text-blue-600">
//                         Read More
//                         <ArrowRight
//                           size={15}
//                           className="transition-transform group-hover:translate-x-1"
//                         />
//                       </span>

//                     </div>

//                   </div>

//                 </Link>
//               ))}

//             </div>

//           </div>

//         </section>
//       )}

//     </main>
//   );
// };

// export default BlogDetailsPage;