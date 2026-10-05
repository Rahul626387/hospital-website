// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import {
//   CalendarDays,
//   Clock3,
//   ArrowRight,
//   Search,
// } from "lucide-react";

// const BlogGrid = ({
//   blogs = [],
//   onReset,
// }) => {
//   return (
//     <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
//       {blogs.length > 0 ? (
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {blogs.map((blog, index) => (
//             <motion.article
//               key={blog.id}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.45,
//                 delay: index * 0.07,
//               }}
//               whileHover={{ y: -8 }}
//               className="group overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-slate-200/70"
//             >
//               {/* Image */}
//               <div className="relative aspect-[16/10] overflow-hidden">
//                 <Image
//                   src={blog.image}
//                   alt={blog.title}
//                   fill
//                   className="object-cover transition duration-500 group-hover:scale-105"
//                 />

//                 {/* Category */}
//                 <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-[#0A7A78] backdrop-blur">
//                   {blog.category}
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 {/* Meta */}
//                 <div className="flex items-center gap-4 text-xs text-slate-400">
//                   <span className="inline-flex items-center gap-1.5">
//                     <CalendarDays className="h-3.5 w-3.5" />
//                     {blog.date}
//                   </span>

//                   <span className="inline-flex items-center gap-1.5">
//                     <Clock3 className="h-3.5 w-3.5" />
//                     {blog.readTime}
//                   </span>
//                 </div>

//                 {/* Title */}
//                 <h3 className="mt-4 text-xl font-bold leading-snug text-[#063B5C] transition group-hover:text-[#0A7A78]">
//                   {blog.title}
//                 </h3>

//                 {/* Excerpt */}
//                 <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
//                   {blog.excerpt}
//                 </p>

//                 {/* Read More */}
//                 <Link
//                   href={`/blogs/${blog.id}`}
//                   className="group/link mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0A7A78]"
//                 >
//                   Read More

//                   <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
//                 </Link>
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       ) : (
//         /* Empty State */
//         <div className="rounded-[2rem] border border-dashed border-slate-200 bg-white py-20 text-center">
//           <Search className="mx-auto h-10 w-10 text-slate-300" />

//           <h3 className="mt-4 text-xl font-bold text-[#063B5C]">
//             No Articles Found
//           </h3>

//           <p className="mt-2 text-sm text-slate-500">
//             Try searching with different keywords or choose another category.
//           </p>

//           <button
//             onClick={onReset}
//             className="mt-6 rounded-xl bg-[#0A7A78] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#086663]"
//           >
//             Reset Filters
//           </button>
//         </div>
//       )}
//     </section>
//   );
// };

// export default BlogGrid;


"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  ArrowRight,
  Search,
} from "lucide-react";

const BlogGrid = ({ blogs = [], onReset }) => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      {blogs.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => {
            // Reading time calculate
            const text =
              blog.content?.replace(/<[^>]*>/g, "").trim() || "";

            const wordCount = text
              ? text.split(/\s+/).length
              : 0;

            const readTime = Math.max(
              1,
              Math.ceil(wordCount / 200)
            );

            // Date format
            const formattedDate = blog.published_at
              ? new Date(blog.published_at).toLocaleDateString(
                  "en-IN",
                  {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  }
                )
              : "Not Published";

            return (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-slate-200/70"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={blog.featured_image}
                    alt={blog.title || "Blog image"}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Category */}
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-[#0A7A78] backdrop-blur">
                    {blog.category_name}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {formattedDate}
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 className="h-3.5 w-3.5" />
                      {readTime} min read
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-xl font-bold leading-snug text-[#063B5C] transition group-hover:text-[#0A7A78]">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                    {blog.excerpt}
                  </p>

                  {/* Read More */}
                  <Link
                    href={`/blogs/${blog.id}`}
                    className="group/link mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0A7A78]"
                  >
                    Read More

                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      ) : (
        <div className="rounded-[2rem] border border-dashed border-slate-200 bg-white py-20 text-center">
          <Search className="mx-auto h-10 w-10 text-slate-300" />

          <h3 className="mt-4 text-xl font-bold text-[#063B5C]">
            No Articles Found
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Try searching with different keywords or choose another
            category.
          </p>

          <button
            onClick={onReset}
            className="mt-6 rounded-xl bg-[#0A7A78] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#086663]"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
};

export default BlogGrid;