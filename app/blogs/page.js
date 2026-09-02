"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  Clock3,
  CalendarDays,
  ChevronRight,
  Newspaper,
  HeartPulse,
  Tag,
  Mail,
} from "lucide-react";

const blogs = [
  {
    id: 1,
    category: "Health Tips",
    title: "Simple Daily Habits for a Healthier Heart",
    excerpt:
      "Small lifestyle changes can make a meaningful difference to your heart health and overall well-being.",
    date: "June 12, 2026",
    readTime: "5 min read",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 2,
    category: "Wellness",
    title: "Why Regular Health Checkups Are Important",
    excerpt:
      "Routine health checkups can help identify potential concerns early and support better long-term health.",
    date: "June 08, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 3,
    category: "Health Tips",
    title: "Understanding the Importance of Quality Sleep",
    excerpt:
      "Good sleep plays an essential role in physical recovery, mental well-being and everyday performance.",
    date: "June 03, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 4,
    category: "Nutrition",
    title: "Building a Balanced and Healthy Daily Diet",
    excerpt:
      "Learn how balanced food choices can support your energy, immunity and overall health.",
    date: "May 28, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 5,
    category: "Medical Care",
    title: "When Should You Consult a Specialist?",
    excerpt:
      "Knowing when to seek specialist care can help you get the right guidance for your health concerns.",
    date: "May 21, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 6,
    category: "Wellness",
    title: "Simple Ways to Manage Everyday Stress",
    excerpt:
      "Healthy routines and mindful habits can help you better manage stress in your daily life.",
    date: "May 15, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 7,
    category: "Health Tips",
    title: "How Regular Exercise Supports Better Health",
    excerpt:
      "Discover how consistent physical activity can contribute to improved energy and long-term wellness.",
    date: "May 09, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=800&q=85",
  },
];

const categories = [
  "All Articles",
  "Health Tips",
  "Wellness",
  "Nutrition",
  "Medical Care",
];

export default function BlogsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Articles");

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        blog.category.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        activeCategory === "All Articles" ||
        blog.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const featuredBlog = blogs.find((blog) => blog.featured);

  return (
    <main className="min-h-screen overflow-hidden bg-[#F8FAFC]">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#063B5C]">
        <div className="absolute inset-0">
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#0A7A78]/30 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-sm text-white/60"
          >
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>

            <ChevronRight className="h-4 w-4" />
            <span>Blogs</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-3xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#4DD4C6]">
              <Newspaper className="h-4 w-4" />
              Health & Wellness
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Health Insights for a
              <span className="block text-[#4DD4C6]">
                Better Tomorrow.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
              Explore health tips, wellness insights and helpful information
              from the Baderia Metro Prime healthcare team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURED BLOG ================= */}
      {featuredBlog && (
        <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-900/5 lg:grid-cols-2"
          >
            <div className="relative min-h-[300px] lg:min-h-[430px]">
              <Image
                src={featuredBlog.image}
                alt={featuredBlog.title}
                fill
                priority
                className="object-cover"
              />

              <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[#0A7A78] backdrop-blur">
                Featured Article
              </div>
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500">
                <span className="inline-flex items-center gap-1.5 font-bold text-[#0A7A78]">
                  <Tag className="h-4 w-4" />
                  {featuredBlog.category}
                </span>

                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4" />
                  {featuredBlog.date}
                </span>

                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="h-4 w-4" />
                  {featuredBlog.readTime}
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-bold leading-tight text-[#063B5C] sm:text-4xl">
                {featuredBlog.title}
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                {featuredBlog.excerpt}
              </p>

              <Link
                href={`/blogs/${featuredBlog.id}`}
                className="group mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-[#0A7A78] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#086663]"
              >
                Read Article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.article>
        </section>
      )}

      {/* ================= SEARCH & FILTER ================= */}
      <section className="mx-auto max-w-7xl px-4 pb-5 pt-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0A7A78]">
              Latest Articles
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#063B5C] sm:text-4xl">
              Explore Our Blog.
            </h2>
          </div>

          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search health articles..."
              className="h-13 w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm outline-none transition focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-50"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mt-7 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                activeCategory === category
                  ? "bg-[#0A7A78] text-white shadow-md shadow-teal-900/10"
                  : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-teal-50 hover:text-[#0A7A78]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* ================= BLOG GRID ================= */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {filteredBlogs.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-slate-200/70"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-[#0A7A78] backdrop-blur">
                    {blog.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {blog.date}
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 className="h-3.5 w-3.5" />
                      {blog.readTime}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold leading-snug text-[#063B5C] transition group-hover:text-[#0A7A78]">
                    {blog.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                    {blog.excerpt}
                  </p>

                  <Link
                    href={`/blogs/${blog.id}`}
                    className="group/link mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0A7A78]"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-dashed border-slate-200 bg-white py-20 text-center">
            <Search className="mx-auto h-10 w-10 text-slate-300" />

            <h3 className="mt-4 text-xl font-bold text-[#063B5C]">
              No Articles Found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try searching with different keywords or choose another category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All Articles");
              }}
              className="mt-6 rounded-xl bg-[#0A7A78] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#086663]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#063B5C] to-[#0A7A78] px-6 py-12 sm:px-10 lg:px-16 lg:py-14">
          <div className="absolute -left-16 top-0 h-48 w-48 rounded-full bg-white/5 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <Mail className="h-6 w-6" />
              </div>

              <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                Stay Connected With Better Health.
              </h2>

              <p className="mt-3 text-sm leading-6 text-white/65">
                Get helpful health tips and the latest updates from our
                healthcare team.
              </p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="h-13 flex-1 rounded-xl border border-white/10 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/40"
              />

              <button
                type="submit"
                className="h-13 rounded-xl bg-white px-5 text-sm font-bold text-[#063B5C] transition hover:-translate-y-1 hover:shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}