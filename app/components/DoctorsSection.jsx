
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  CalendarDays,
} from "lucide-react";

const DoctorsSection = ({
  doctors = [],
  title = "Meet our expert doctors.",
  subtitle = "Experienced specialists dedicated to delivering personalized, compassionate and evidence-based medical care.",
  viewAllText = "View All Doctors",
  viewAllHref = "/doctors",
  showAppointment = false,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#063B5C] py-24 text-white">

      {/* Background Glow */}
      <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-80 w-80 rounded-full bg-teal-400/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-[-150px] left-[-100px] h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>

            {/* Label */}
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-teal-300" />

              <p className="text-xs font-black uppercase tracking-[0.2em] text-teal-300">
                Our Specialists
              </p>
            </div>

            {/* Title */}
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              {title}
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
              {subtitle}
            </p>
          </div>

          {/* View All */}
          <Link
            href={viewAllHref}
            className="
              group
              inline-flex
              items-center
              gap-2
              font-bold
              text-teal-300
              transition-all
              duration-300
              hover:gap-3
            "
          >
            {viewAllText}

            <ArrowRight
              className="
                h-4 w-4
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </motion.div>

        {/* ================= DOCTORS GRID ================= */}
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id || doctor.name || index}
              initial={{
                opacity: 0,
                y: 30,
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
                delay: index * 0.1,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[1.75rem]
                  bg-white
                  text-[#063B5C]
                  shadow-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >

                {/* ================= IMAGE ================= */}
                <div className="relative h-80 overflow-hidden">

                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-110
                    "
                    sizes="
                      (max-width: 640px) 100vw,
                      (max-width: 1024px) 50vw,
                      25vw
                    "
                  />

                  {/* Image Gradient */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#063B5C]/50
                      via-transparent
                      to-transparent
                      opacity-60
                    "
                  />

                  {/* Verified Badge */}
                  <div
                    className="
                      absolute
                      inset-x-4
                      bottom-4
                      rounded-xl
                      border
                      border-white/20
                      bg-black/30
                      p-3
                      text-white
                      backdrop-blur-md
                      transition-all
                      duration-300
                      group-hover:bg-[#063B5C]/60
                    "
                  >
                    <div className="flex items-center gap-2">

                      <ShieldCheck className="h-4 w-4 text-teal-300" />

                      <span className="text-xs font-semibold">
                        Verified Specialist
                      </span>

                    </div>
                  </div>
                </div>

                {/* ================= CONTENT ================= */}
                <div className="p-6">

                  {/* Doctor Name */}
                  <h3 className="text-xl font-black">
                    {doctor.name}
                  </h3>

                  {/* Specialty */}
                  <p className="mt-1 font-semibold text-[#0A7A78]">
                    {doctor.specialty}
                  </p>

                  {/* Experience */}
                  {doctor.experience && (
                    <p className="mt-2 text-xs text-slate-500">
                      {doctor.experience}
                    </p>
                  )}

                  {/* Appointment */}
                  {showAppointment && (
                    <Link
                      href={
                        doctor.appointmentHref ||
                        `/appointment?doctor=${encodeURIComponent(
                          doctor.name
                        )}`
                      }
                      className="
                        mt-5
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-teal-50
                        px-4
                        py-3
                        text-sm
                        font-bold
                        text-[#0A7A78]
                        transition-all
                        duration-300
                        hover:bg-[#0A7A78]
                        hover:text-white
                      "
                    >
                      <CalendarDays className="h-4 w-4" />

                      Book Appointment
                    </Link>
                  )}

                </div>

                {/* Bottom Accent */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-1
                    w-0
                    bg-gradient-to-r
                    from-[#0A7A78]
                    to-cyan-400
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

              </div>
            </motion.div>
          ))}

        </div>

        {/* ================= EMPTY STATE ================= */}
        {doctors.length === 0 && (
          <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-10 text-center">
            <p className="text-sm text-white/60">
              No doctors available at the moment.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default DoctorsSection;

