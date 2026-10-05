"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
} from "lucide-react";

const DoctorCard = ({ doctor, index = 0 }) => {
  return (
    <motion.article
     variants={{
    hidden: {
      opacity: 0,
      y: 28,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }}
  whileHover={{
    y: -7,
  }}
      className="
        group relative overflow-hidden rounded-[22px]
        bg-[#021F31]
        shadow-[0_10px_30px_rgba(15,23,42,.10)]
        transition-all duration-500
        hover:shadow-[0_22px_45px_rgba(3,47,73,.20)]
      "
    >
      {/* IMAGE */}
      <div className="relative aspect-[0.82/1] overflow-hidden">

        <img
          src={doctor.image}
          alt={doctor.name}
          loading="lazy"
          className="
            h-full w-full object-cover
            transition duration-700 ease-out
            group-hover:scale-105
          "
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#021F31] via-[#021F31]/25 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#021F31]/80 to-transparent" />

        {/* AVAILABILITY */}
        <div
          className={`absolute left-3 top-3 rounded-full border border-white/15 px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[.08em] backdrop-blur-xl ${
            doctor.available
              ? "bg-[#063B5C]/80 text-white"
              : "bg-black/45 text-white/60"
          }`}
        >
          <div className="flex items-center gap-1.5">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                doctor.available
                  ? "bg-[#61E2B8] shadow-[0_0_7px_#61E2B8]"
                  : "bg-white/40"
              }`}
            />

            {doctor.available
              ? "Available"
              : "Unavailable"}
          </div>
        </div>

        {/* VERIFIED */}
        {doctor.verified && (
          <div
            className="
              absolute right-3 top-3
              flex h-7 w-7 items-center justify-center
              rounded-full
              border border-white/30
              bg-white/90
              shadow-lg
              backdrop-blur-md
              transition-all duration-300
              group-hover:scale-110
            "
          >
            <BadgeCheck className="h-3.5 w-3.5 text-[#0A7A78]" />
          </div>
        )}

        {/* PROFILE ARROW */}
        <Link
          href={`/doctors/specialty/${doctor.id}`}
          aria-label={`View ${doctor.name} profile`}
          className="
            absolute bottom-[82px] right-4 z-20
            flex h-9 w-9 items-center justify-center
            rounded-full
            bg-white
            text-[#063B5C]
            opacity-0
            translate-y-3
            shadow-xl
            transition-all duration-500
            group-hover:translate-y-0
            group-hover:opacity-100
            hover:bg-[#72DED4]
            hover:scale-110
          "
        >
          <ArrowUpRight className="h-4 w-4" />
        </Link>

        {/* CONTENT */}
        <div className="absolute bottom-0 left-0 right-0 p-4">

          <p className="mb-1 text-[8px] font-bold uppercase tracking-[.18em] text-[#72DED4]">
            {doctor.specialty}
          </p>

          <Link
            href={`/doctors/specialty/${doctor.id}`}
            className="block"
          >
            <h3
              className="
                text-[19px] font-semibold leading-tight
                tracking-[-0.03em] text-white
                transition-colors duration-300
                hover:text-[#72DED4]
              "
            >
              {doctor.name}
            </h3>
          </Link>

          <p className="mt-1 text-[9px] text-white/70">
            {doctor.focus}
          </p>

          <p className="mt-1 line-clamp-1 text-[9px] leading-4 text-white/55">
            {doctor.qualification}
          </p>

          <div className="mt-1.5 flex items-center gap-1.5 text-[9px] font-medium text-white/60">
            <Award className="h-3 w-3 text-[#72DED4]" />
            {doctor.experience}+ years experience
          </div>

          {/* BOOK BUTTON */}
          <Link
            href="/appointment"
            className="
              mt-3 flex w-full items-center justify-center
              gap-1.5 rounded-full
              bg-white px-4 py-2.5
              text-[9px] font-bold text-[#063B5C]
              shadow-lg
              transition-all duration-300
              hover:bg-[#72DED4]
              hover:shadow-xl
              hover:-translate-y-0.5
            "
          >
            Book Appointment

            <ArrowRight
              className="
                h-3 w-3
                transition-transform duration-300
                group-hover:translate-x-0.5
              "
            />
          </Link>

        </div>
      </div>
    </motion.article>
  );
}

export default DoctorCard