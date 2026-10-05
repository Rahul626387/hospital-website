// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useParams } from "next/navigation";
// import {
//   ArrowLeft,
//   ArrowRight,
//   CalendarDays,
//   Clock,
//   Eye,
//   User,
// } from "lucide-react";

// import PageHero from "../../components/Pagehero";
// import ApiService from "../../src/services/Apiservices";
// import useSWR from 'swr'


// const Page = () => {
//   const { id } = useParams();
//   console.log(id)


// const { data, error, isLoading } = useSWR(
//   id ? `blog-post/${id}` : null,
//   ApiService.get
// );



// const blog = data?.data || []

//   const publishedDate = new Date(blog.published_at).toLocaleDateString(
//     "en-IN",
//     {
//       day: "numeric",
//       month: "long",
//       year: "numeric",
//     }
//   );


//   return (
//     <main className="bg-white">

//       {/* ================= HERO ================= */}

//       <PageHero
//         backgroundImage={blog.featured_image}
//         badge={blog.category_name}
//         title={blog.title}
//         highlight=""
//         description={blog.excerpt}
//         breadcrumbs={[
//           {
//             label: "Blogs",
//             href: "/blogs",
//           },
//           {
//             label: blog.title,
//           },
//         ]}
//       />

//       {/* ================= BLOG DETAIL ================= */}

//       <section className="px-6 py-16 sm:px-10 lg:px-16">
//         <div className="mx-auto max-w-7xl">

//           <div className="grid gap-12 lg:grid-cols-[1fr_320px]">

//             {/* ================= ARTICLE ================= */}

//             <article className="min-w-0">

//               {/* Featured Image */}

//               <div className="relative aspect-[16/8] overflow-hidden rounded-[2rem]">
//                 <Image
//                   src={blog.featured_image}
//                   alt={blog.title}
//                   fill
//                   priority
//                   className="object-cover"
//                   sizes="(max-width: 1024px) 100vw, 70vw"
//                 />
//               </div>

//               {/* Meta */}

//               <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-slate-200 pb-6 text-sm text-slate-500">

//                 <div className="flex items-center gap-2">
//                   <CalendarDays
//                     size={17}
//                     className="text-[#087f7b]"
//                   />

//                   <span>{publishedDate}</span>
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <Eye
//                     size={17}
//                     className="text-[#087f7b]"
//                   />

//                   <span>{blog.views} Views</span>
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <User
//                     size={17}
//                     className="text-[#087f7b]"
//                   />

//                   <span>Admin</span>
//                 </div>

//               </div>

//               {/* Title */}

//               <h1 className="mt-8 text-3xl font-bold leading-tight text-[#12343b] sm:text-4xl">
//                 {blog.title}
//               </h1>

//               {/* Content */}

//               <div
//                 className="
//                   prose prose-lg mt-8 max-w-none

//                   prose-headings:font-bold
//                   prose-headings:text-[#12343b]

//                   prose-h2:mb-4
//                   prose-h2:mt-10
//                   prose-h2:text-2xl

//                   prose-p:text-slate-600
//                   prose-p:leading-8

//                   prose-strong:text-[#12343b]

//                   prose-a:text-[#087f7b]

//                   prose-img:rounded-2xl
//                 "
//                 dangerouslySetInnerHTML={{
//                   __html: blog.content,
//                 }}
//               />

//             </article>

//             {/* ================= SIDEBAR ================= */}

//             <aside className="lg:sticky lg:top-24 lg:h-fit">

//               {/* Appointment */}

//               <div className="rounded-[2rem] bg-[#f3fbfa] p-7">

//                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#087f7b]/10 text-[#087f7b]">
//                   <CalendarDays size={22} />
//                 </div>

//                 <h3 className="mt-5 text-2xl font-bold text-[#12343b]">
//                   Need Medical Assistance?
//                 </h3>

//                 <p className="mt-4 text-sm leading-7 text-slate-600">
//                   Our experienced healthcare professionals are here
//                   to provide expert guidance and personalized care.
//                 </p>

//                 <Link
//                   href="/appointment"
//                   className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#087f7b] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#066a67]"
//                 >
//                   Book Appointment
//                   <ArrowRight size={17} />
//                 </Link>

//               </div>

//               {/* Back to blogs */}

//               <Link
//                 href="/blogs"
//                 className="mt-5 flex items-center gap-2 rounded-2xl border border-slate-200 px-5 py-4 text-sm font-semibold text-[#12343b] transition hover:border-[#087f7b] hover:text-[#087f7b]"
//               >
//                 <ArrowLeft size={17} />
//                 Back to All Blogs
//               </Link>

//             </aside>

//           </div>

//         </div>
//       </section>

//     </main>
//   );
// };

// export default Page;


// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useParams } from "next/navigation";
// import {
//   ArrowLeft,
//   ArrowRight,
//   CalendarDays,
//   Eye,
//   User,
//   Clock,
// } from "lucide-react";
// import useSWR from "swr";

// import PageHero from "../../components/Pagehero";
// import ApiService from "../../src/services/Apiservices";

// const Page = () => {
//   const { id } = useParams();

//   const {
//     data,
//     error,
//     isLoading,
//   } = useSWR(id ? `blog-post/${id}` : null, ApiService.get);

//   const blog = data?.data;

//   /* =========================
//      LOADING
//   ========================= */

//   if (isLoading) {
//     return (
//       <main className="min-h-screen bg-white">

//         {/* Hero Skeleton */}
//         <section className="relative overflow-hidden bg-[#f3fbfa]">
//           <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
//             <div className="h-5 w-32 animate-pulse rounded bg-slate-200" />

//             <div className="mt-6 h-12 max-w-3xl animate-pulse rounded bg-slate-200" />

//             <div className="mt-5 h-5 max-w-2xl animate-pulse rounded bg-slate-200" />
//           </div>
//         </section>

//         {/* Content Skeleton */}
//         <section className="px-6 py-16 sm:px-10 lg:px-16">
//           <div className="mx-auto max-w-7xl">

//             <div className="grid gap-12 lg:grid-cols-[1fr_320px]">

//               <article>
//                 <div className="aspect-[16/8] animate-pulse rounded-[2rem] bg-slate-200" />

//                 <div className="mt-7 flex gap-5">
//                   <div className="h-5 w-32 animate-pulse rounded bg-slate-200" />
//                   <div className="h-5 w-24 animate-pulse rounded bg-slate-200" />
//                   <div className="h-5 w-20 animate-pulse rounded bg-slate-200" />
//                 </div>

//                 <div className="mt-8 h-10 w-3/4 animate-pulse rounded bg-slate-200" />

//                 <div className="mt-8 space-y-4">
//                   <div className="h-5 w-full animate-pulse rounded bg-slate-200" />
//                   <div className="h-5 w-11/12 animate-pulse rounded bg-slate-200" />
//                   <div className="h-5 w-10/12 animate-pulse rounded bg-slate-200" />
//                   <div className="h-5 w-full animate-pulse rounded bg-slate-200" />
//                 </div>
//               </article>

//               <aside>
//                 <div className="h-80 animate-pulse rounded-[2rem] bg-slate-200" />
//               </aside>

//             </div>
//           </div>
//         </section>
//       </main>
//     );
//   }

//   /* =========================
//      ERROR
//   ========================= */

//   if (error) {
//     return (
//       <main className="flex min-h-[70vh] items-center justify-center bg-white px-6">
//         <div className="max-w-lg text-center">

//           <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-500">
//             !
//           </div>

//           <h1 className="mt-6 text-3xl font-bold text-[#12343b]">
//             Unable to Load Blog
//           </h1>

//           <p className="mt-3 leading-7 text-slate-500">
//             Something went wrong while loading this blog post.
//             Please try again.
//           </p>

//           <Link
//             href="/blogs"
//             className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#087f7b] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#066a67]"
//           >
//             <ArrowLeft size={17} />
//             Back to Blogs
//           </Link>

//         </div>
//       </main>
//     );
//   }

//   /* =========================
//      NOT FOUND
//   ========================= */

//   if (!blog) {
//     return (
//       <main className="flex min-h-[70vh] items-center justify-center bg-white px-6">
//         <div className="max-w-lg text-center">

//           <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f3fbfa] text-2xl font-bold text-[#087f7b]">
//             404
//           </div>

//           <h1 className="mt-6 text-3xl font-bold text-[#12343b]">
//             Blog Not Found
//           </h1>

//           <p className="mt-3 leading-7 text-slate-500">
//             The blog post you are looking for does not exist
//             or may have been removed.
//           </p>

//           <Link
//             href="/blogs"
//             className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#087f7b] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#066a67]"
//           >
//             <ArrowLeft size={17} />
//             Back to All Blogs
//           </Link>

//         </div>
//       </main>
//     );
//   }

//   /* =========================
//      DATE
//   ========================= */

//   const publishedDate = blog.published_at
//     ? new Date(blog.published_at).toLocaleDateString("en-IN", {
//         day: "numeric",
//         month: "long",
//         year: "numeric",
//       })
//     : "Not published";

//   /* =========================
//      READ TIME
//   ========================= */

//   const words =
//     blog.content
//       ?.replace(/<[^>]*>/g, " ")
//       .trim()
//       .split(/\s+/)
//       .filter(Boolean).length || 0;

//   const readTime = Math.max(1, Math.ceil(words / 200));

//   return (
//     <main className="bg-white">

//       {/* =========================
//           HERO
//       ========================= */}

//       {/* <PageHero
//         backgroundImage={blog.featured_image}
//         badge={blog.category_name || "Healthcare"}
//         title={blog.title}
//         highlight=""
//         description={blog.excerpt || ""}
//         breadcrumbs={[
//           {
//             label: "Blogs",
//             href: "/blogs",
//           },
//           {
//             label: blog.title,
//           },
//         ]}
//       /> */}

//       <section className="relative overflow-hidden bg-[#12343b]">
//   {blog.featured_image && (
//     <div
//       className="absolute inset-0 bg-cover bg-center opacity-50"
//       style={{
//         backgroundImage: `url(${blog.featured_image})`,
//       }}
//     />
//   )}

//   <div className="absolute inset-0 bg-[#12343b]/0" />

//   <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-16 lg:py-16">
    
//     {/* Breadcrumb */}
//     <div className="flex items-center gap-2 text-sm text-white/70">
//       <Link
//         href="/blogs"
//         className="transition hover:text-white"
//       >
//         Blogs
//       </Link>

//       <span>/</span>

//       <span className="text-white/90">
//         Blog Details
//       </span>
//     </div>

//     {/* Category */}
//     <div className="mt-8">
//       <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
//         {blog.category_name || "Healthcare Blog"}
//       </span>
//     </div>

//     {/* Title */}
//     <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
//       {blog.title}
//     </h1>

//     {/* Small excerpt */}
//     {blog.excerpt && (
//       <p className="mt-5 max-w-3xl text-base leading-7 text-white/75 sm:text-lg">
//         {blog.excerpt}
//       </p>
//     )}

//   </div>
// </section>

//       {/* =========================
//           BLOG DETAIL
//       ========================= */}

//       <section className="px-6 py-16 sm:px-10 lg:px-16">
//         <div className="mx-auto max-w-7xl">

//           <div className="grid gap-12 lg:grid-cols-[1fr_320px]">

//             {/* =========================
//                 ARTICLE
//             ========================= */}

//             <article className="min-w-0">

//               {/* Featured Image */}

//               {blog.featured_image && (
//                 <div className="relative aspect-[16/8] overflow-hidden rounded-[2rem] bg-slate-100">

//                   <Image
//                     src={blog.featured_image}
//                     alt={blog.title || "Blog image"}
//                     fill
//                     priority
//                     className="object-cover"
//                     sizes="(max-width: 1024px) 100vw, 70vw"
//                   />

//                 </div>
//               )}

//               {/* =========================
//                   META
//               ========================= */}

//               <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-slate-200 pb-6 text-sm text-slate-500">

//                 {/* Date */}

//                 <div className="flex items-center gap-2">
//                   <CalendarDays
//                     size={17}
//                     className="text-[#087f7b]"
//                   />

//                   <span>{publishedDate}</span>
//                 </div>

//                 {/* Read Time */}

//                 <div className="flex items-center gap-2">
//                   <Clock
//                     size={17}
//                     className="text-[#087f7b]"
//                   />

//                   <span>{readTime} min read</span>
//                 </div>

//                 {/* Views */}

//                 <div className="flex items-center gap-2">
//                   <Eye
//                     size={17}
//                     className="text-[#087f7b]"
//                   />

//                   <span>
//                     {blog.views || 0} Views
//                   </span>
//                 </div>

//                 {/* Author */}

//                 <div className="flex items-center gap-2">
//                   <User
//                     size={17}
//                     className="text-[#087f7b]"
//                   />

//                   <span>Admin</span>
//                 </div>

//               </div>

//               {/* =========================
//                   TITLE
//               ========================= */}

//               <h1 className="mt-8 text-3xl font-bold leading-tight tracking-tight text-[#12343b] sm:text-4xl lg:text-5xl">
//                 {blog.title}
//               </h1>

//               {/* =========================
//                   EXCERPT
//               ========================= */}

//               {blog.excerpt && (
//                 <p className="mt-6 text-lg leading-8 text-slate-500">
//                   {blog.excerpt}
//                 </p>
//               )}

//               {/* =========================
//                   CONTENT
//               ========================= */}

//               <div
//                 className="
//                   prose prose-lg mt-10 max-w-none

//                   prose-headings:font-bold
//                   prose-headings:text-[#12343b]

//                   prose-h2:mb-4
//                   prose-h2:mt-12
//                   prose-h2:text-2xl

//                   prose-h3:mt-10
//                   prose-h3:text-xl

//                   prose-p:leading-8
//                   prose-p:text-slate-600

//                   prose-li:text-slate-600
//                   prose-li:leading-8

//                   prose-strong:text-[#12343b]

//                   prose-a:text-[#087f7b]
//                   prose-a:no-underline
//                   hover:prose-a:underline

//                   prose-img:rounded-2xl
//                   prose-img:shadow-sm

//                   prose-blockquote:border-[#087f7b]
//                   prose-blockquote:text-slate-600
//                 "
//                 dangerouslySetInnerHTML={{
//                   __html: blog.content || "",
//                 }}
//               />

//             </article>

//             {/* =========================
//                 SIDEBAR
//             ========================= */}

//             <aside className="lg:sticky lg:top-24 lg:h-fit">

//               {/* Appointment Card */}

//               <div className="rounded-[2rem] bg-[#f3fbfa] p-7">

//                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#087f7b]/10 text-[#087f7b]">
//                   <CalendarDays size={22} />
//                 </div>

//                 <h3 className="mt-5 text-2xl font-bold leading-tight text-[#12343b]">
//                   Need Medical Assistance?
//                 </h3>

//                 <p className="mt-4 text-sm leading-7 text-slate-600">
//                   Our experienced healthcare professionals are
//                   here to provide expert guidance and personalized
//                   care.
//                 </p>

//                 <Link
//                   href="/appointment"
//                   className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#087f7b] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#066a67]"
//                 >
//                   Book Appointment
//                   <ArrowRight size={17} />
//                 </Link>

//               </div>

//               {/* =========================
//                   BLOG INFORMATION
//               ========================= */}

//               <div className="mt-5 rounded-[2rem] border border-slate-200 bg-white p-7">

//                 <h3 className="text-lg font-bold text-[#12343b]">
//                   Blog Information
//                 </h3>

//                 <div className="mt-5 space-y-4">

//                   {/* Category */}

//                   {blog.category_name && (
//                     <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">

//                       <span className="text-sm text-slate-500">
//                         Category
//                       </span>

//                       <span className="text-right text-sm font-semibold text-[#12343b]">
//                         {blog.category_name}
//                       </span>

//                     </div>
//                   )}

//                   {/* Published */}

//                   <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">

//                     <span className="text-sm text-slate-500">
//                       Published
//                     </span>

//                     <span className="text-right text-sm font-semibold text-[#12343b]">
//                       {publishedDate}
//                     </span>

//                   </div>

//                   {/* Read time */}

//                   <div className="flex items-center justify-between gap-4">

//                     <span className="text-sm text-slate-500">
//                       Read time
//                     </span>

//                     <span className="text-right text-sm font-semibold text-[#12343b]">
//                       {readTime} min
//                     </span>

//                   </div>

//                 </div>

//               </div>

//               {/* =========================
//                   BACK TO BLOGS
//               ========================= */}

//               <Link
//                 href="/blogs"
//                 className="mt-5 flex items-center gap-2 rounded-2xl border border-slate-200 px-5 py-4 text-sm font-semibold text-[#12343b] transition hover:border-[#087f7b] hover:text-[#087f7b]"
//               >
//                 <ArrowLeft size={17} />
//                 Back to All Blogs
//               </Link>

//             </aside>

//           </div>

//         </div>
//       </section>

//     </main>
//   );
// };

// export default Page;


"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Eye,
  User,
  Clock,
} from "lucide-react";
import useSWR from "swr";
import { motion } from "framer-motion";

import ApiService from "../../src/services/Apiservices";

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeUpFast = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const slideRight = {
  hidden: {
    opacity: 0,
    x: 35,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const staggerSidebar = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

/* =========================================================
   PAGE
========================================================= */

const Page = () => {
  const { id } = useParams();

  const {
    data,
    error,
    isLoading,
  } = useSWR(
    id ? `blog-post/${id}` : null,
    ApiService.get
  );

  const blog = data?.data;

  /* =========================================================
     LOADING
  ========================================================= */

  if (isLoading) {
    return (
      <main className="min-h-screen bg-white">
        {/* Hero Skeleton */}
        <section className="relative overflow-hidden bg-[#f3fbfa]">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
            <div className="h-5 w-32 animate-pulse rounded bg-slate-200" />

            <div className="mt-6 h-12 max-w-3xl animate-pulse rounded bg-slate-200" />

            <div className="mt-5 h-5 max-w-2xl animate-pulse rounded bg-slate-200" />
          </div>
        </section>

        {/* Content Skeleton */}
        <section className="px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
              <article>
                <div className="aspect-[16/8] animate-pulse rounded-[2rem] bg-slate-200" />

                <div className="mt-7 flex flex-wrap gap-5">
                  <div className="h-5 w-32 animate-pulse rounded bg-slate-200" />
                  <div className="h-5 w-24 animate-pulse rounded bg-slate-200" />
                  <div className="h-5 w-20 animate-pulse rounded bg-slate-200" />
                </div>

                <div className="mt-8 h-10 w-3/4 animate-pulse rounded bg-slate-200" />

                <div className="mt-8 space-y-4">
                  <div className="h-5 w-full animate-pulse rounded bg-slate-200" />
                  <div className="h-5 w-11/12 animate-pulse rounded bg-slate-200" />
                  <div className="h-5 w-10/12 animate-pulse rounded bg-slate-200" />
                  <div className="h-5 w-full animate-pulse rounded bg-slate-200" />
                </div>
              </article>

              <aside>
                <div className="h-80 animate-pulse rounded-[2rem] bg-slate-200" />
              </aside>
            </div>
          </div>
        </section>
      </main>
    );
  }

  /* =========================================================
     ERROR
  ========================================================= */

  if (error) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-white px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-lg text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-xl font-bold text-red-500"
          >
            !
          </motion.div>

          <h1 className="mt-6 text-3xl font-bold text-[#12343b]">
            Unable to Load Blog
          </h1>

          <p className="mt-3 leading-7 text-slate-500">
            Something went wrong while loading this blog post.
            Please try again.
          </p>

          <Link
            href="/blogs"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#087f7b] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#066a67] hover:shadow-lg"
          >
            <ArrowLeft size={17} />
            Back to Blogs
          </Link>
        </motion.div>
      </main>
    );
  }

  /* =========================================================
     NOT FOUND
  ========================================================= */

  if (!blog) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-white px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-lg text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f3fbfa] text-2xl font-bold text-[#087f7b]"
          >
            404
          </motion.div>

          <h1 className="mt-6 text-3xl font-bold text-[#12343b]">
            Blog Not Found
          </h1>

          <p className="mt-3 leading-7 text-slate-500">
            The blog post you are looking for does not exist
            or may have been removed.
          </p>

          <Link
            href="/blogs"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#087f7b] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#066a67] hover:shadow-lg"
          >
            <ArrowLeft size={17} />
            Back to All Blogs
          </Link>
        </motion.div>
      </main>
    );
  }

  /* =========================================================
     DATE
  ========================================================= */

  const publishedDate = blog.published_at
    ? new Date(blog.published_at).toLocaleDateString(
        "en-IN",
        {
          day: "numeric",
          month: "long",
          year: "numeric",
        }
      )
    : "Not published";

  /* =========================================================
     READ TIME
  ========================================================= */

  const words =
    blog.content
      ?.replace(/<[^>]*>/g, " ")
      .trim()
      .split(/\s+/)
      .filter(Boolean).length || 0;

  const readTime = Math.max(
    1,
    Math.ceil(words / 200)
  );

  /* =========================================================
     RETURN
  ========================================================= */

  return (
    <main className="bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#12343b]">

        {/* Background Image */}
        {blog.featured_image && (
          <motion.div
            initial={{
              scale: 1.08,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 0.5,
            }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${blog.featured_image})`,
            }}
          />
        )}

        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
          }}
          className="absolute inset-0 bg-[#12343b]/55"
        />

        {/* Decorative Glow */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-[#087f7b]/20 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#0a7a78]/10 blur-3xl" />

        {/* Hero Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-16 lg:py-20"
        >

          {/* Breadcrumb */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2 text-sm text-white/70"
          >
            <Link
              href="/blogs"
              className="transition-colors duration-300 hover:text-white"
            >
              Blogs
            </Link>

            <span className="text-white/40">
              /
            </span>

            <span className="text-white/90">
              Blog Details
            </span>
          </motion.div>

          {/* Category */}
          <motion.div
            variants={fadeUp}
            className="mt-8"
          >
            <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
              {blog.category_name ||
                "Healthcare Blog"}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            className="mt-5 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-[3.5rem]"
          >
            {blog.title}
          </motion.h1>

          {/* Excerpt */}
          {blog.excerpt && (
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-3xl text-base leading-7 text-white/75 sm:text-lg"
            >
              {blog.excerpt}
            </motion.p>
          )}

        </motion.div>
      </section>

      {/* =====================================================
          BLOG DETAIL
      ===================================================== */}

      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-7xl">

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.08,
            }}
            className="grid gap-12 lg:grid-cols-[1fr_320px]"
          >

            {/* =================================================
                ARTICLE
            ================================================= */}

            <motion.article
              variants={fadeUp}
              className="min-w-0"
            >

              {/* Featured Image */}
              {blog.featured_image && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative aspect-[16/8] overflow-hidden rounded-[2rem] bg-slate-100 shadow-[0_20px_60px_rgba(8,59,73,0.08)]"
                >

                  <motion.div
                    whileHover={{
                      scale: 1.035,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={blog.featured_image}
                      alt={
                        blog.title ||
                        "Blog image"
                      }
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 70vw"
                    />
                  </motion.div>

                  {/* Image Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#12343b]/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                </motion.div>
              )}

              {/* =================================================
                  META
              ================================================= */}

              <motion.div
                variants={fadeUpFast}
                className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-slate-200 pb-6 text-sm text-slate-500"
              >

                {/* Date */}
                <div className="flex items-center gap-2">
                  <CalendarDays
                    size={17}
                    className="text-[#087f7b]"
                  />

                  <span>
                    {publishedDate}
                  </span>
                </div>

                {/* Read Time */}
                <div className="flex items-center gap-2">
                  <Clock
                    size={17}
                    className="text-[#087f7b]"
                  />

                  <span>
                    {readTime} min read
                  </span>
                </div>

                {/* Views */}
                <div className="flex items-center gap-2">
                  <Eye
                    size={17}
                    className="text-[#087f7b]"
                  />

                  <span>
                    {blog.views || 0} Views
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-2">
                  <User
                    size={17}
                    className="text-[#087f7b]"
                  />

                  <span>
                    Admin
                  </span>
                </div>

              </motion.div>

              {/* =================================================
                  TITLE
              ================================================= */}

              <motion.h1
                variants={fadeUp}
                className="mt-8 text-3xl font-bold leading-tight tracking-tight text-[#12343b] sm:text-4xl lg:text-5xl"
              >
                {blog.title}
              </motion.h1>

              {/* =================================================
                  EXCERPT
              ================================================= */}

              {blog.excerpt && (
                <motion.p
                  variants={fadeUp}
                  className="mt-6 text-lg leading-8 text-slate-500"
                >
                  {blog.excerpt}
                </motion.p>
              )}

              {/* =================================================
                  CONTENT
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.05,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  prose prose-lg mt-10 max-w-none

                  prose-headings:font-bold
                  prose-headings:text-[#12343b]

                  prose-h2:mb-4
                  prose-h2:mt-12
                  prose-h2:text-2xl

                  prose-h3:mt-10
                  prose-h3:text-xl

                  prose-p:leading-8
                  prose-p:text-slate-600

                  prose-li:text-slate-600
                  prose-li:leading-8

                  prose-strong:text-[#12343b]

                  prose-a:text-[#087f7b]
                  prose-a:no-underline
                  hover:prose-a:underline

                  prose-img:rounded-2xl
                  prose-img:shadow-sm

                  prose-blockquote:border-[#087f7b]
                  prose-blockquote:text-slate-600
                "
                dangerouslySetInnerHTML={{
                  __html:
                    blog.content || "",
                }}
              />

            </motion.article>

            {/* =================================================
                SIDEBAR
            ================================================= */}

            <motion.aside
              variants={slideRight}
              className="lg:sticky lg:top-24 lg:h-fit"
            >

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
              >

                {/* =================================================
                    APPOINTMENT CARD
                ================================================= */}

                <motion.div
                  variants={fadeUp}
                  whileHover={{
                    y: -4,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="rounded-[2rem] border border-[#087f7b]/5 bg-[#f3fbfa] p-7 shadow-[0_15px_45px_rgba(8,59,73,0.04)]"
                >

                  {/* Icon */}
                  <motion.div
                    initial={{
                      scale: 0.8,
                      opacity: 0,
                    }}
                    whileInView={{
                      scale: 1,
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2,
                    }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#087f7b]/10 text-[#087f7b]"
                  >
                    <CalendarDays size={22} />
                  </motion.div>

                  <h3 className="mt-5 text-2xl font-bold leading-tight text-[#12343b]">
                    Need Medical Assistance?
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Our experienced healthcare
                    professionals are here to
                    provide expert guidance and
                    personalized care.
                  </p>

                  <Link
                    href="/appointment"
                    className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#087f7b] px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#066a67] hover:shadow-lg"
                  >
                    Book Appointment

                    <motion.span
                      whileHover={{
                        x: 4,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    >
                      <ArrowRight size={17} />
                    </motion.span>
                  </Link>

                </motion.div>

                {/* =================================================
                    BLOG INFORMATION
                ================================================= */}

                <motion.div
                  variants={fadeUp}
                  className="mt-5 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_15px_45px_rgba(8,59,73,0.03)]"
                >

                  <h3 className="text-lg font-bold text-[#12343b]">
                    Blog Information
                  </h3>

                  <div className="mt-5 space-y-4">

                    {/* Category */}
                    {blog.category_name && (
                      <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
                        <span className="text-sm text-slate-500">
                          Category
                        </span>

                        <span className="text-right text-sm font-semibold text-[#12343b]">
                          {blog.category_name}
                        </span>
                      </div>
                    )}

                    {/* Published */}
                    <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
                      <span className="text-sm text-slate-500">
                        Published
                      </span>

                      <span className="text-right text-sm font-semibold text-[#12343b]">
                        {publishedDate}
                      </span>
                    </div>

                    {/* Read Time */}
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm text-slate-500">
                        Read time
                      </span>

                      <span className="text-right text-sm font-semibold text-[#12343b]">
                        {readTime} min
                      </span>
                    </div>

                  </div>

                </motion.div>

                {/* =================================================
                    BACK TO BLOGS
                ================================================= */}

                <motion.div
                  variants={fadeUp}
                  className="mt-5"
                >
                  <Link
                    href="/blogs"
                    className="group flex items-center gap-2 rounded-2xl border border-slate-200 px-5 py-4 text-sm font-semibold text-[#12343b] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#087f7b] hover:text-[#087f7b] hover:shadow-sm"
                  >
                    <motion.span
                      className="flex"
                      whileHover={{
                        x: -4,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    >
                      <ArrowLeft size={17} />
                    </motion.span>

                    Back to All Blogs
                  </Link>
                </motion.div>

              </motion.div>

            </motion.aside>

          </motion.div>

        </div>
      </section>

    </main>
  );
};

export default Page;

