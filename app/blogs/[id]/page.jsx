"use client";

import React, { useMemo, useState } from "react";
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
  Star,
  MessageCircle,
  Send,
  CheckCircle2,
} from "lucide-react";
import useSWR from "swr";
import { motion, AnimatePresence } from "framer-motion";

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

const reviewItem = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   STAR RATING COMPONENT
========================================================= */

function StarRating({
  value = 0,
  onChange,
  interactive = false,
  size = 20,
}) {
  const [hoverValue, setHoverValue] = useState(0);

  const displayValue =
    hoverValue || value;

  return (
    <div
      className="flex items-center gap-1"
      onMouseLeave={() => {
        if (interactive) {
          setHoverValue(0);
        }
      }}
    >
      {[1, 2, 3, 4, 5].map((star) => {
        const active =
          star <= displayValue;

        if (!interactive) {
          return (
            <Star
              key={star}
              size={size}
              strokeWidth={1.8}
              className={
                active
                  ? "fill-amber-400 text-amber-400"
                  : "text-slate-300"
              }
            />
          );
        }

        return (
          <motion.button
            key={star}
            type="button"
            whileHover={{
              scale: 1.18,
            }}
            whileTap={{
              scale: 0.9,
            }}
            onMouseEnter={() =>
              setHoverValue(star)
            }
            onClick={() =>
              onChange?.(star)
            }
            className="rounded-md p-0.5 outline-none"
            aria-label={`Rate ${star} star`}
          >
            <Star
              size={size}
              strokeWidth={1.8}
              className={
                active
                  ? "fill-amber-400 text-amber-400"
                  : "text-slate-300 transition-colors duration-200"
              }
            />
          </motion.button>
        );
      })}
    </div>
  );
}

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
     REVIEW STATE
  ========================================================= */

  const [rating, setRating] = useState(0);

  const [reviewForm, setReviewForm] =
    useState({
      name: "",
      email: "",
      comment: "",
    });

  const [reviews, setReviews] =
    useState([
      {
        id: 1,
        name: "Rahul Sharma",
        rating: 5,
        comment:
          "Very informative and useful article. The information is explained in a simple and easy-to-understand way.",
        date: "September 20, 2026",
      },

      {
        id: 2,
        name: "Priya Singh",
        rating: 4,
        comment:
          "Really helpful information. I found the article easy to understand and informative.",
        date: "September 18, 2026",
      },

      {
        id: 3,
        name: "Amit Verma",
        rating: 5,
        comment:
          "Excellent article. The healthcare information is presented very clearly.",
        date: "September 15, 2026",
      },
    ]);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [submitted, setSubmitted] =
    useState(false);

  /* =========================================================
     REVIEW STATS
  ========================================================= */

  const averageRating = useMemo(() => {
    if (!reviews.length) return 0;

    const total = reviews.reduce(
      (sum, review) =>
        sum + review.rating,
      0
    );

    return total / reviews.length;
  }, [reviews]);

  const averageRatingFormatted =
    averageRating.toFixed(1);

  /* =========================================================
     REVIEW SUBMIT
  ========================================================= */

  const handleReviewSubmit = async (
    event
  ) => {
    event.preventDefault();

    if (!rating) {
      return;
    }

    if (
      !reviewForm.name.trim() ||
      !reviewForm.email.trim() ||
      !reviewForm.comment.trim()
    ) {
      return;
    }

    setIsSubmitting(true);

    /*
      Later you can replace this section
      with your MySQL API call.

      Example:

      await ApiService.post(
        "blog-reviews",
        {
          blog_id: id,
          name: reviewForm.name,
          email: reviewForm.email,
          rating,
          comment: reviewForm.comment,
        }
      );
    */

    await new Promise((resolve) =>
      setTimeout(resolve, 800)
    );

    const newReview = {
      id: Date.now(),
      name: reviewForm.name,
      rating,
      comment: reviewForm.comment,
      date: new Date().toLocaleDateString(
        "en-IN",
        {
          day: "numeric",
          month: "long",
          year: "numeric",
        }
      ),
    };

    setReviews((previous) => [
      newReview,
      ...previous,
    ]);

    setReviewForm({
      name: "",
      email: "",
      comment: "",
    });

    setRating(0);

    setIsSubmitting(false);

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3500);
  };

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
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-lg text-center"
        >

          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-xl font-bold text-red-500"
          >
            !
          </motion.div>

          <h1 className="mt-6 text-3xl font-bold text-[#12343b]">
            Unable to Load Blog
          </h1>

          <p className="mt-3 leading-7 text-slate-500">
            Something went wrong while loading
            this blog post. Please try again.
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
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-lg text-center"
        >

          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
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
            The blog post you are looking for does
            not exist or may have been removed.
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
    ? new Date(
        blog.published_at
      ).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
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

        {/* Background */}
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
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="absolute inset-0 bg-[#12343b]/80"
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
                      src={
                        blog.featured_image
                      }
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

                <div className="flex items-center gap-2">
                  <CalendarDays
                    size={17}
                    className="text-[#087f7b]"
                  />

                  <span>
                    {publishedDate}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock
                    size={17}
                    className="text-[#087f7b]"
                  />

                  <span>
                    {readTime} min read
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Eye
                    size={17}
                    className="text-[#087f7b]"
                  />

                  <span>
                    {blog.views || 0} Views
                  </span>
                </div>

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

              {/* =================================================
                  RATING & REVIEWS
              ================================================= */}

              <motion.section
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.08,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-16 border-t border-slate-200 pt-14"
              >

                {/* Section Header */}
                <div className="max-w-2xl">

                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-[#087f7b]">
                    <MessageCircle size={17} />

                    Reader Reviews
                  </div>

                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#12343b] sm:text-4xl">
                    What Our Readers Say
                  </h2>

                  <p className="mt-4 leading-7 text-slate-500">
                    Share your experience and let
                    other readers know what you think
                    about this article.
                  </p>

                </div>

                {/* Rating Summary */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.97,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1,
                  }}
                  className="mt-8 rounded-[2rem] bg-[#f3fbfa] p-6 sm:p-8"
                >

                  <div className="flex flex-col gap-7 sm:flex-row sm:items-center">

                    {/* Average */}
                    <div className="min-w-[150px]">

                      <div className="flex items-center gap-3">
                        <span className="text-5xl font-bold tracking-tight text-[#12343b]">
                          {averageRatingFormatted}
                        </span>

                        <div>
                          <div className="text-sm font-semibold text-[#12343b]">
                            out of 5
                          </div>

                          <div className="mt-1 text-xs text-slate-500">
                            {reviews.length}{" "}
                            reviews
                          </div>
                        </div>
                      </div>

                      <div className="mt-3">
                        <StarRating
                          value={Math.round(
                            averageRating
                          )}
                          size={19}
                        />
                      </div>

                    </div>

                    {/* Divider */}
                    <div className="hidden h-16 w-px bg-[#087f7b]/15 sm:block" />

                    {/* Description */}
                    <div>
                      <h3 className="text-lg font-bold text-[#12343b]">
                        Rate this article
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        Your feedback helps us improve
                        our content.
                      </p>

                      <div className="mt-3">
                        <StarRating
                          value={rating}
                          onChange={setRating}
                          interactive
                          size={26}
                        />
                      </div>

                    </div>

                  </div>

                </motion.div>

                {/* =================================================
                    REVIEW FORM
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
                    amount: 0.08,
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                  className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_15px_50px_rgba(8,59,73,0.04)] sm:p-8"
                >

                  <div className="flex items-center justify-between gap-4">

                    <div>
                      <h3 className="text-xl font-bold text-[#12343b]">
                        Leave a Review
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        Tell us what you think about
                        this article.
                      </p>
                    </div>

                    <div className="hidden h-11 w-11 items-center justify-center rounded-xl bg-[#087f7b]/10 text-[#087f7b] sm:flex">
                      <MessageCircle
                        size={21}
                      />
                    </div>

                  </div>

                  <form
                    onSubmit={
                      handleReviewSubmit
                    }
                    className="mt-7"
                  >

                    {/* Rating */}
                    <div>
                      <label className="text-sm font-semibold text-[#12343b]">
                        Your Rating
                      </label>

                      <div className="mt-3">
                        <StarRating
                          value={rating}
                          onChange={setRating}
                          interactive
                          size={29}
                        />
                      </div>

                      {!rating && (
                        <p className="mt-2 text-xs text-slate-400">
                          Please select a rating.
                        </p>
                      )}
                    </div>

                    {/* Inputs */}
                    <div className="mt-7 grid gap-5 sm:grid-cols-2">

                      <div>
                        <label
                          htmlFor="review-name"
                          className="text-sm font-semibold text-[#12343b]"
                        >
                          Your Name
                        </label>

                        <input
                          id="review-name"
                          type="text"
                          value={
                            reviewForm.name
                          }
                          onChange={(event) =>
                            setReviewForm(
                              (previous) => ({
                                ...previous,
                                name: event
                                  .target
                                  .value,
                              })
                            )
                          }
                          placeholder="Enter your name"
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#12343b] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#087f7b] focus:bg-white focus:ring-4 focus:ring-[#087f7b]/10"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="review-email"
                          className="text-sm font-semibold text-[#12343b]"
                        >
                          Your Email
                        </label>

                        <input
                          id="review-email"
                          type="email"
                          value={
                            reviewForm.email
                          }
                          onChange={(event) =>
                            setReviewForm(
                              (previous) => ({
                                ...previous,
                                email: event
                                  .target
                                  .value,
                              })
                            )
                          }
                          placeholder="Enter your email"
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#12343b] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#087f7b] focus:bg-white focus:ring-4 focus:ring-[#087f7b]/10"
                          required
                        />
                      </div>

                    </div>

                    {/* Comment */}
                    <div className="mt-5">

                      <label
                        htmlFor="review-comment"
                        className="text-sm font-semibold text-[#12343b]"
                      >
                        Your Comment
                      </label>

                      <textarea
                        id="review-comment"
                        rows={5}
                        value={
                          reviewForm.comment
                        }
                        onChange={(event) =>
                          setReviewForm(
                            (previous) => ({
                              ...previous,
                              comment:
                                event.target
                                  .value,
                            })
                          )
                        }
                        placeholder="Write your review..."
                        className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm leading-7 text-[#12343b] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#087f7b] focus:bg-white focus:ring-4 focus:ring-[#087f7b]/10"
                        required
                      />

                    </div>

                    {/* Submit */}
                    <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                      <p className="text-xs leading-5 text-slate-400">
                        Your email address will not
                        be displayed publicly.
                      </p>

                      <motion.button
                        type="submit"
                        disabled={
                          isSubmitting
                        }
                        whileHover={
                          !isSubmitting
                            ? {
                                y: -2,
                              }
                            : {}
                        }
                        whileTap={
                          !isSubmitting
                            ? {
                                scale: 0.98,
                              }
                            : {}
                        }
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#087f7b] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:bg-[#066a67] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                      >

                        {isSubmitting ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send size={17} />

                            Submit Review
                          </>
                        )}

                      </motion.button>

                    </div>

                  </form>

                </motion.div>

                {/* Success Message */}
                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 15,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        y: -10,
                        height: 0,
                      }}
                      className="mt-5 overflow-hidden"
                    >
                      <div className="flex items-start gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-emerald-700">

                        <CheckCircle2
                          size={20}
                          className="mt-0.5 shrink-0"
                        />

                        <div>
                          <p className="text-sm font-bold">
                            Review submitted
                          </p>

                          <p className="mt-1 text-xs leading-5 text-emerald-600">
                            Thank you for sharing your
                            feedback.
                          </p>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* =================================================
                    EXISTING REVIEWS
                ================================================= */}

                <div className="mt-12">

                  <div className="flex items-center justify-between gap-4">

                    <div>
                      <h3 className="text-2xl font-bold text-[#12343b]">
                        Reader Reviews
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        {reviews.length}{" "}
                        people shared their experience.
                      </p>
                    </div>

                  </div>

                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.05,
                    }}
                    className="mt-6 space-y-4"
                  >

                    {reviews.map(
                      (review) => (
                        <motion.div
                          key={review.id}
                          variants={
                            reviewItem
                          }
                          className="rounded-[1.5rem] border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#087f7b]/20 hover:shadow-[0_12px_35px_rgba(8,59,73,0.05)] sm:p-6"
                        >

                          <div className="flex items-start justify-between gap-4">

                            <div className="flex items-center gap-3">

                              {/* Avatar */}
                              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#087f7b]/10 text-sm font-bold text-[#087f7b]">
                                {review.name
                                  .charAt(
                                    0
                                  )
                                  .toUpperCase()}
                              </div>

                              <div>
                                <h4 className="text-sm font-bold text-[#12343b]">
                                  {review.name}
                                </h4>

                                <p className="mt-0.5 text-xs text-slate-400">
                                  {review.date}
                                </p>
                              </div>

                            </div>

                            <StarRating
                              value={
                                review.rating
                              }
                              size={16}
                            />

                          </div>

                          <p className="mt-4 text-sm leading-7 text-slate-600">
                            {review.comment}
                          </p>

                        </motion.div>
                      )
                    )}

                  </motion.div>

                </div>

              </motion.section>

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

                {/* Appointment Card */}
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
                    professionals are here to provide
                    expert guidance and personalized
                    care.
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

                {/* Blog Information */}
                <motion.div
                  variants={fadeUp}
                  className="mt-5 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_15px_45px_rgba(8,59,73,0.03)]"
                >

                  <h3 className="text-lg font-bold text-[#12343b]">
                    Blog Information
                  </h3>

                  <div className="mt-5 space-y-4">

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

                    <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">

                      <span className="text-sm text-slate-500">
                        Published
                      </span>

                      <span className="text-right text-sm font-semibold text-[#12343b]">
                        {publishedDate}
                      </span>

                    </div>

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

                {/* Rating Sidebar */}
                <motion.div
                  variants={fadeUp}
                  className="mt-5 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_15px_45px_rgba(8,59,73,0.03)]"
                >

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
                      <Star
                        size={21}
                        className="fill-amber-400"
                      />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Article Rating
                      </p>

                      <p className="mt-0.5 text-xl font-bold text-[#12343b]">
                        {averageRatingFormatted}
                        <span className="ml-1 text-sm font-medium text-slate-400">
                          / 5
                        </span>
                      </p>
                    </div>

                  </div>

                  <div className="mt-4">
                    <StarRating
                      value={Math.round(
                        averageRating
                      )}
                      size={17}
                    />
                  </div>

                  <p className="mt-3 text-xs leading-5 text-slate-500">
                    Based on {reviews.length}{" "}
                    reader reviews
                  </p>

                </motion.div>

                {/* Back */}
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