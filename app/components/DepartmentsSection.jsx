
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const DepartmentsSection = ({
  departments = [],
  title = "Specialized care for",
  highlight = " every need.",
  viewAllText = "View All Departments",
  viewAllHref = "/departments",
}) => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0A7A78]">
              Our Departments
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#063B5C] sm:text-4xl">
              {title}
              <span className="text-[#0A7A78]">{highlight}</span>
            </h2>
          </div>

          <Link
            href={viewAllHref}
            className="flex items-center gap-2 font-bold text-[#0A7A78] transition hover:gap-3"
          >
            {viewAllText}

            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* DEPARTMENTS */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((department, index) => {
            const Icon = department.icon;

            return (
              <motion.div
                key={department.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                className="
                  group
                  rounded-[1.5rem]
                  border border-slate-100
                  bg-white
                  p-7
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >
                {/* ICON */}
                <div
                  className={`
                    flex h-14 w-14
                    items-center justify-center
                    rounded-2xl
                    ${department.color}
                    transition duration-300
                    group-hover:scale-110
                  `}
                >
                  {Icon && <Icon className="h-7 w-7" />}
                </div>

                {/* TITLE */}
                <h3 className="mt-6 text-xl font-black text-[#063B5C]">
                  {department.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {department.description}
                </p>

                {/* LINK */}
                <Link
                  href={department.href || viewAllHref}
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-bold
                    text-[#0A7A78]
                  "
                >
                  {department.linkText || "Explore Department"}

                  <ArrowRight
                    className="
                      h-4 w-4
                      transition
                      group-hover:translate-x-1
                    "
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;
