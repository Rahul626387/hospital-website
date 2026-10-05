"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  ArrowRight,
  Stethoscope,
  CalendarDays,
  Clock3,
  Award,
  ChevronRight,
  SlidersHorizontal,
  ArrowUpRight,
} from "lucide-react";
import PageHero from "../components/Pagehero";
import useSWR from 'swr'
import ApiService from '../src/services/Apiservices'




export default function DoctorsPage() {
  const [search, setSearch] = useState("");
  const [activeSpecialty, setActiveSpecialty] = useState("All Doctors");


// fatch apis 

  const {data,error,isLoading} = useSWR('specialties',ApiService.get)

  const {data:doctor,doctorerror,doctorisLoading} = useSWR('doctors',ApiService.get)
  
  const specialties = data?.data
  const doctors = doctor?.data
  // console.log(specialties)

  const filteredDoctors = useMemo(() => {
  return (doctors || []).filter((doctor) => {
    const searchText = search.toLowerCase().trim();

    const matchesSearch =
      doctor?.name?.toLowerCase().includes(searchText) ||
      doctor?.specialty_name?.toLowerCase().includes(searchText) ||
      doctor?.department_name?.toLowerCase().includes(searchText);

    const matchesSpecialty =
      activeSpecialty === "All Doctors" ||
      doctor?.specialty_name === activeSpecialty;

    return matchesSearch && matchesSpecialty;
  });
}, [doctors, search, activeSpecialty]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#F8FAFC]">
      {/* HERO */}
      {/* <section className="relative overflow-hidden bg-[#063B5C]">
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
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span>Doctors</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-3xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#4DD4C6]">
              <Stethoscope className="h-4 w-4" />
              Our Medical Team
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Meet Our Expert
              <span className="block text-[#4DD4C6]">Doctors.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
              Experienced specialists dedicated to providing thoughtful,
              reliable and patient-centered healthcare.
            </p>
          </motion.div>
        </div>
      </section> */}
      <PageHero
        // backgroundImage="https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg"
         backgroundImage="assets/images/doctorteam01.png"
        badge="Our Medical Team"
        title="Meet Our Expert"
        highlight="Doctors."
        description="Experienced specialists dedicated to providing thoughtful, reliable and patient-centered healthcare."
        breadcrumb="Doctors"
      />

      {/* SEARCH & FILTER */}
      <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-xl shadow-slate-900/5 sm:p-6"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by doctor name or specialty..."
                className="h-14 w-full rounded-xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm text-slate-700 outline-none transition focus:border-[#0A7A78] focus:bg-white focus:ring-4 focus:ring-teal-50"
              />
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
              <SlidersHorizontal className="h-5 w-5 text-[#0A7A78]" />
              <span>{filteredDoctors.length} Doctors Found</span>
            </div>
          </div>

          {/* <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
            {specialties?.map((specialty) => (
              <button
                key={specialty}
                onClick={() => setActiveSpecialty(specialty)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  activeSpecialty === specialty
                    ? "bg-[#0A7A78] text-white shadow-md shadow-teal-900/10"
                    : "bg-slate-100 text-slate-600 hover:bg-teal-50 hover:text-[#0A7A78]"
                }`}
              >
                {specialty.name}
              </button>
            ))}
          </div> */}
          <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
  {/* All Doctors */}
  <button
    onClick={() => setActiveSpecialty("All Doctors")}
    className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-all ${
      activeSpecialty === "All Doctors"
        ? "bg-[#0A7A78] text-white shadow-md shadow-teal-900/10"
        : "bg-slate-100 text-slate-600 hover:bg-teal-50 hover:text-[#0A7A78]"
    }`}
  >
    All Doctors
  </button>

  {/* API Specialties */}
  {specialties?.map((specialty) => (
    <button
      key={specialty.id}
      onClick={() => setActiveSpecialty(specialty.name)}
      className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-all ${
        activeSpecialty === specialty.name
          ? "bg-[#0A7A78] text-white shadow-md shadow-teal-900/10"
          : "bg-slate-100 text-slate-600 hover:bg-teal-50 hover:text-[#0A7A78]"
      }`}
    >
      {specialty.name}
    </button>
  ))}
</div>
        </motion.div>
      </section>

      {/* DOCTOR GRID */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0A7A78]">
              Find the Right Specialist
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#063B5C] sm:text-4xl">
              Our Specialists
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-500">
            Choose from our team of healthcare professionals and connect with
            the specialist best suited to your needs.
          </p>
        </div>

        {filteredDoctors.length > 0 ? (
//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//             {filteredDoctors.map((doctor, index) => (
//               <motion.article
//                 key={doctor.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.45, delay: index * 0.06 }}
//                 whileHover={{ y: -8 }}
//                 className="group overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-slate-200/70"
//               >
//                 {/* IMAGE */}
//                 <div className="relative aspect-[4/4.2] overflow-hidden bg-slate-100">
//                   <Image
//                     src={doctor.image_url}
//                     alt={doctor.name}
//                     fill
//                     className="object-cover transition duration-500 group-hover:scale-105"
//                   />

//                   <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/50 to-transparent" />

//                   <span
//                     className={`absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold backdrop-blur-md ${
//                       doctor.available
//                         ? "bg-white/90 text-[#0A7A78]"
//                         : "bg-slate-900/70 text-white"
//                     }`}
//                   >
//                     <span
//                       className={`h-1.5 w-1.5 rounded-full ${
//                         doctor.available ? "bg-[#0A7A78]" : "bg-slate-300"
//                       }`}
//                     />
//                     {doctor.available ? "Available" : "Unavailable"}
//                   </span>
//                 </div>

//                 {/* CONTENT */}
                
//                 <div className="p-4 bg-amber-300 m-2 absolute">
//   {/* Specialty */}
//   <p className="text-[11px] font-bold uppercase tracking-wide text-[#0A7A78]">
//     {doctor.specialty_name}
//   </p>

//   {/* Name */}
//   <h3 className="mt-1 text-lg font-bold leading-tight text-[#063B5C]">
//     {doctor.name}
//   </h3>

//   {/* Qualification */}
//   <p className="mt-1 line-clamp-1 text-xs text-slate-500">
//     {doctor.qualification}
//   </p>

//   {/* Experience + Profile */}
//   <div className="mt-3 flex items-center justify-between">
//     <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
//       <Award className="h-3.5 w-3.5 text-[#0A7A78]" />
//       <span>{doctor.experience_years}+ Years</span>
//     </div>

//     <Link
//       href={`/doctors/${doctor.id}`}
//       className="
//         group/link
//         flex items-center gap-1.5
//         rounded-lg
//         bg-[#0A7A78]
//         px-3 py-2
//         text-xs font-bold
//         text-white
//         transition-all
//         hover:bg-[#063B5C]
//       "
//     >
//       View Profile
//       <ArrowRight
//         className="
//           h-3.5 w-3.5
//           transition-transform
//           group-hover/link:translate-x-1
//         "
//       />
//     </Link>
//   </div>
// </div>
//               </motion.article>
//             ))}
//           </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredDoctors.map((doctor, index) => (
            //     <motion.article
            //       key={doctor.id}
            //       initial={{
            //         opacity: 0,
            //         y: 25,
            //       }}
            //       animate={{
            //         opacity: 1,
            //         y: 0,
            //       }}
            //       transition={{
            //         duration: 0.45,
            //         delay: index * 0.06,
            //       }}
            //       whileHover={{
            //         y: -8,
            //       }}
            //       className="
            //         group
            //         relative
            //         overflow-hidden
            //         rounded-[1.5rem]
            //         bg-slate-100
            //         shadow-sm
            //         transition-shadow
            //         duration-500
            //         hover:shadow-2xl
            //       "
            //     >
            //       {/* IMAGE */}
            //       <div className="relative aspect-[4/5] overflow-hidden">

            //         {/* <Image
            //           src={doctor.image_url}
            //           alt={doctor.name}
            //           fill
            //           className="
            //             object-cover
            //             transition-all
            //             duration-700
            //             ease-out

            //             group-hover:scale-105
            //             group-hover:blur-[2px]
            //           "
            //         /> */}
            //         <Image
            //           src={doctor.image_url}
            //           alt={doctor.name}
            //           fill
            //           className="
            //             object-cover
            //             transition-all
            //             duration-1000
            //             ease-out
            //             group-hover:scale-105
            //             group-hover:blur-[2px]
            //           " 
            //         />

            //         {/* DARK + BLUR OVERLAY */}
            //         <div
            //           className="
            //             absolute
            //             inset-0
            //             bg-black/0
            //             backdrop-blur-0

            //             transition-all
            //             duration-500

            //             group-hover:bg-black/20
            //             group-hover:backdrop-blur-[2px]
            //           "
            //         />

            //         {/* Bottom Gradient */}
            //         <div
            //           className="
            //             absolute
            //             inset-x-0
            //             bottom-0
            //             h-40
            //             bg-gradient-to-t
            //             from-black/50
            //             via-black/10
            //             to-transparent
            //           "
            //         />

            //         {/* Availability */}
            //         <span
            //           className={`
            //             absolute
            //             left-4
            //             top-4
            //             z-20
            //             flex
            //             items-center
            //             gap-2
            //             rounded-full
            //             px-3
            //             py-1.5
            //             text-xs
            //             font-bold
            //             backdrop-blur-md
            //             transition-all
            //             duration-300

            //             ${
            //               doctor.available
            //                 ? "bg-white/90 text-[#0A7A78]"
            //                 : "bg-slate-900/70 text-white"
            //             }
            //           `}
            //         >
            //           <span
            //             className={`
            //               h-1.5
            //               w-1.5
            //               rounded-full

            //               ${
            //                 doctor.available
            //                   ? "bg-emerald-500"
            //                   : "bg-slate-300"
            //               }
            //             `}
            //           />

            //           {doctor.available
            //             ? "Available"
            //             : "Unavailable"}
            //         </span>

            //         {/* =========================
            //             HOVER CONTENT
            //         ========================== */}

            //         {/* <div
            //           className="
            //             absolute
            //             inset-x-0
            //             bottom-3
            //             z-30
            //             px-3

            //             translate-y-[115%]

            //             transition-transform
            //             duration-500
            //             ease-[cubic-bezier(0.22,1,0.36,1)]

            //             group-hover:translate-y-0
            //           "
            //         > */}
                    
            //         <div
            //   className="
            //     absolute
            //     inset-x-0
            //     bottom-3
            //     z-30
            //     px-3
            //     translate-y-[115%]
            //     transition-transform
            //     duration-1000
            //     ease-[cubic-bezier(0.16,1,0.3,1)]
            //     group-hover:translate-y-0
            //   "
            // >
            //           <div
            //             className="
            //               rounded-2xl
            //               bg-white/95
            //               p-4
            //               shadow-2xl
            //               backdrop-blur-md
            //             "
            //           >
            //             {/* Specialty */}
            //             <p
            //               className="
            //                 text-[10px]
            //                 font-bold
            //                 uppercase
            //                 tracking-wider
            //                 text-[#0A7A78]
            //               "
            //             >
            //               {doctor.specialty_name}
            //             </p>

            //             {/* Name */}
            //             <h3
            //               className="
            //                 mt-1
            //                 text-lg
            //                 font-bold
            //                 leading-tight
            //                 text-[#063B5C]
            //               "
            //             >
            //               {doctor.name}
            //             </h3>

            //             {/* Qualification */}
            //             <p
            //               className="
            //                 mt-1
            //                 truncate
            //                 text-xs
            //                 text-slate-500
            //               "
            //             >
            //               {doctor.qualification}
            //             </p>

            //             {/* Bottom Row */}
            //             <div
            //               className="
            //                 flex
            //                 items-center
            //                 justify-between
            //               "
            //             >
            //               {/* Experience */}
            //               <div
            //                 className="
            //                   flex
            //                   items-center
            //                   gap-1.5
            //                   text-xs
            //                   font-semibold
            //                   text-slate-500
            //                 "
            //               >
            //                 <Award
            //                   className="
            //                     h-3.5
            //                     w-3.5
            //                     text-[#0A7A78]
            //                   "
            //                 />

            //                 {doctor.experience_years}+ Years
            //               </div>

            //               {/* Button */}
            //               <Link
            //                 href={`/doctors/${doctor.id}`}
            //                 className="
            //                   group/link
            //                   flex
            //                   items-center
            //                   gap-1.5
            //                   rounded-lg
            //                   bg-[#0A7A78]
            //                   px-3
            //                   py-2
            //                   text-xs
            //                   font-bold
            //                   text-white
            //                   transition-all
            //                   duration-300
            //                   hover:bg-[#063B5C]
            //                 "
            //               >
            //                 Profile

            //                 <ArrowRight
            //                   className="
            //                     h-3.5
            //                     w-3.5
            //                     transition-transform
            //                     duration-300
            //                     group-hover/link:translate-x-1
            //                   "
            //                 />
            //               </Link>
            //             </div>
            //           </div>
            //         </div>



            //       </div>
            //     </motion.article>
            <motion.article
             key={doctor.id}
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
                    // src="assets/images/doctor.png"
                    src={doctor.image_url}
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
                  {/* <Link
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
                  </Link> */}

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
                     style={{textTransform:"capitalize"}} >
                        {doctor.name}
                      </h3>
                    </Link>

                    <p className="mt-1 text-[9px] text-white/70">
                      {doctor.focus}
                    </p>

                    <p className="mt-1 line-clamp-1 text-[9px] leading-4 text-white/55">
                      {doctor.qualification}
                    </p>

                    <div className="mt-1.5 flex items-center gap-1.5 text-[12px] font-medium text-white/60">
                      <Award className="h-3 w-3 text-[#72DED4]" />
                      {doctor.experience_years}+ years experience
                    </div>

                    {/* BOOK BUTTON */}
                    <Link
                     href={`/doctors/${doctor.id}`}
                      className="
                        mt-3 flex w-full items-center justify-center
                        gap-1.5 rounded-full
                        bg-white px-4 py-2.5
                        text-[12px] font-bold text-[#063B5C]
                        shadow-lg
                        transition-all duration-300
                        hover:bg-[#72DED4]
                        hover:shadow-xl
                        hover:-translate-y-0.5
                      "
                    >
                      View Profile

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
              ))}
            </div>

        ) : (
          <div className="rounded-3xl border border-dashed border-slate-200 bg-white py-20 text-center">
            <Search className="mx-auto h-10 w-10 text-slate-300" />
            <h3 className="mt-4 text-xl font-bold text-[#063B5C]">
              No Doctors Found
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Try searching with another name or specialty.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setActiveSpecialty("All Doctors");
              }}
              className="mt-5 rounded-xl bg-[#0A7A78] px-5 py-3 text-sm font-bold text-white"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#063B5C] to-[#0A7A78] px-6 py-14 sm:px-10 lg:px-16">
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/5 blur-2xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#4DD4C6]">
                Need Medical Care?
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Find the Right Doctor for You.
              </h2>

              <p className="mt-4 leading-7 text-white/65">
                Book an appointment with one of our specialists and take the
                next step towards better health.
              </p>
            </div>

            <Link
              href="/appointment"
              className="group inline-flex w-fit items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#063B5C] transition hover:-translate-y-1 hover:shadow-xl"
            >
              <CalendarDays className="h-5 w-5" />
              Book Appointment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}