"use client";

import React from "react";
import PageHero from "../../components/Pagehero";
import { useParams } from "next/navigation";
import PediatricsCard from "../../components/PediatricsCard";
import DepartmentCardNew from "../../components/DepartmentCardNew";
import { department } from "../../data/department";
import { motion } from "framer-motion";
import PatientTestimonials from "../../components/PatientTestimonials";




const Departmentdetailspage = () => {
  const params = useParams();

  const departmentId = params?.id;

 

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};


  return (
  //  <main className="min-h-screen overflow-hidden bg-[#F8FAFC]">
  // <main className="animated-gradient min-h-screen overflow-hidden">
//   <main className="animated-gradient min-h-screen overflow-hidden bg-[#F8FAFC]">
//       <PageHero
//         backgroundImage='/assets/images/Ne.png'
//         badge="Department"
//         title={department.name}
//         highlight={department.specialization}
//         description={department.short_description}
//         breadcrumbs={[
//           {
//             label: "Department",
//             href: "/department",
//           },
//           {
//             label: department.name,
//           },
//         ]}
//       />
   


// <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">

//   {/* ========================================= */}
//   {/* DEPARTMENT SECTION */}
//   {/* ========================================= */}

//  <div className="grid grid-cols-12 gap-6">

//   {/* ===================================== */}
//   {/* LEFT - 8 COLUMNS */}
//   {/* ===================================== */}

//  <div className="col-span-12 lg:col-span-6">
 
//   <div className="h-full overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-sm shadow-slate-200/50">

//     {/* ================================= */}
//     {/* DEPARTMENT HEADER */}
//     {/* ================================= */}
//     <div className="border-b border-slate-100 bg-gradient-to-br from-teal-50/70 via-white to-white p-6 sm:p-8">
//       <div className="flex items-start gap-4">

//         {/* Icon */}
//         <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100 text-2xl ring-1 ring-teal-100">
//           ❤️
//         </div>

//         <div className="min-w-0">
//           <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
//             {department.name}
//           </h1>

//           {department.short_description && (
//             <p className="mt-1.5 text-sm font-medium leading-6 text-teal-600">
//               {department.short_description}
//             </p>
//           )}
//         </div>

//       </div>
//     </div>
//   </div>
// </div>

//   {/* ===================================== */}
//   {/* RIGHT - 4 COLUMNS */}
//   {/* ===================================== */}

//   <div className="col-span-12 lg:col-span-6">

//    <div className="relative h-[320px] w-full overflow-hidden rounded-3xl shadow-sm shadow-slate-200/50">

//   {/* Image */}
//   <img
//     src="/assets/images/Ne.png"
//     alt={department.name}
//     className="absolute inset-0 h-full w-full object-cover object-center"
//   />

//   {/* Overlay */}
//   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

//   {/* Content */}
//   <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">

//     <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur-sm ring-1 ring-white/20">
//       Department
//     </span>

//     <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
//       {department.name}
//     </h2>

//   </div>

// </div>

//   </div>

// </div>

// <div className="grid grid-cols-12 gap-6">

//   {/* ========================================= */}
//   {/* LEFT — 9 COLUMNS */}
//   {/* ========================================= */}
//   <div className="col-span-12 lg:col-span-9">

//     {/* ================================= */}
//     {/* ABOUT DEPARTMENT */}
//     {/* ================================= */}
//     <fieldset className="rounded-2xl border border-slate-200 bg-white px-5 pb-5 pt-2 shadow-sm sm:px-6">

//       <legend className="px-3 text-sm font-bold uppercase tracking-[0.15em] text-teal-600">
//         About Department
//       </legend>

//       <p className="mt-2 text-sm leading-7 text-slate-600">
//         {department.description || "No description available."}
//       </p>

//     </fieldset>

//   </div>


//   {/* ========================================= */}
//   {/* RIGHT — 3 COLUMNS */}
//   {/* ========================================= */}
//   <div className="col-span-12 lg:col-span-3">

//     <fieldset className="h-full rounded-2xl border border-slate-200 bg-white px-4 pb-5 pt-2 shadow-sm sm:px-5">

//       <legend className="px-3 text-sm font-bold uppercase tracking-[0.15em] text-slate-500">
//         Department Information
//       </legend>

//       <div className="mt-3 space-y-3">

//         {/* Location */}
//         <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-100 transition hover:bg-slate-100/70">

//           <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
//             Location
//           </p>

//           <p className="mt-2 text-sm font-semibold leading-6 text-slate-900">
//             {department.location || "Not specified"}
//           </p>

//         </div>


//         {/* Timing */}
//         <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-100 transition hover:bg-slate-100/70">

//           <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
//             Timing
//           </p>

//           <p className="mt-2 text-sm font-semibold leading-6 text-slate-900">
//             {department.timing || "Not specified"}
//           </p>

//         </div>


//         {/* Emergency */}
//         <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-100 transition hover:bg-slate-100/70">

//           <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
//             Emergency
//           </p>

//           <div className="mt-2 flex items-center gap-2">

//             <span
//               className={`h-2 w-2 rounded-full ${
//                 department.emergency_available
//                   ? "bg-emerald-500"
//                   : "bg-slate-400"
//               }`}
//             />

//             <span
//               className={`text-sm font-semibold ${
//                 department.emergency_available
//                   ? "text-emerald-600"
//                   : "text-slate-500"
//               }`}
//             >
//               {department.emergency_available
//                 ? "Available"
//                 : "Not Available"}
//             </span>

//           </div>

//         </div>

//       </div>

//     </fieldset>

//   </div>

// </div>

//   {/* ========================================= */}
//   {/* DOCTORS SECTION */}
//   {/* ========================================= */}

//   <div className="mt-8">
//   <fieldset className="rounded-3xl border border-slate-200 bg-white px-4 pb-5 pt-3 shadow-sm sm:px-5">

//     {/* Legend */}
//     <legend className="px-3">
//       <span className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-teal-700">
//         Our Specialists
//       </span>
//     </legend>

//     {/* Header */}
//     <div className="mb-5 flex items-center justify-between gap-3">
//       <div>
//         <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
//           Our Doctors
//         </h2>

//         <p className="mt-1 text-xs text-slate-500 sm:text-sm">
//           Experienced specialists providing expert care.
//         </p>
//       </div>

//       <span className="shrink-0 rounded-full bg-teal-50 px-3 py-1.5 text-xs font-bold text-teal-700 ring-1 ring-teal-100">
//         {department.doctors?.length || 0} Doctors
//       </span>
//     </div>

//     {/* Doctor Cards */}
//     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

//       {department.doctors?.map((doctor) => (
//         <div
//           key={doctor.id}
//           className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg hover:shadow-slate-200/60"
//         >

//           {/* Doctor Image */}
//           <div className="relative overflow-hidden bg-slate-100">

//             <img
//               src={doctor.image}
//               alt={doctor.name}
//               className="h-44 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
//             />

//             {/* Availability */}
//             <span
//               className={`absolute right-2.5 top-2.5 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold shadow-sm backdrop-blur-md ${
//                 doctor.available
//                   ? "bg-emerald-500/90 text-white"
//                   : "bg-slate-700/85 text-white"
//               }`}
//             >
//               <span
//                 className={`h-1.5 w-1.5 rounded-full ${
//                   doctor.available ? "bg-white" : "bg-slate-300"
//                 }`}
//               />

//               {doctor.available ? "Available" : "Unavailable"}
//             </span>

//           </div>

//           {/* Details */}
//           <div className="p-4">

//             {/* Name */}
//             <h3 className="truncate text-sm font-bold text-slate-900">
//               {doctor.name}
//             </h3>

//             {/* Specialization */}
//             <p className="mt-1 truncate text-xs font-semibold text-teal-600">
//               {doctor.specialization}
//             </p>

//             {/* Qualification */}
//             <p className="mt-1.5 line-clamp-1 text-[11px] text-slate-500">
//               {doctor.qualification}
//             </p>

//             {/* Stats */}
//             <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">

//               <div>
//                 <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
//                   Experience
//                 </p>

//                 <p className="mt-0.5 text-xs font-bold text-slate-800">
//                   {doctor.experience}
//                 </p>
//               </div>

//               <div className="text-right">
//                 <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
//                   Rating
//                 </p>

//                 <p className="mt-0.5 text-xs font-bold text-slate-800">
//                   <span className="mr-1 text-amber-500">★</span>
//                   {doctor.rating || "N/A"}
//                 </p>
//               </div>

//             </div>

//             {/* Button */}
//             <button
//               type="button"
//               className="mt-3 w-full rounded-lg bg-teal-50 px-3 py-2 text-xs font-bold text-teal-700 transition hover:bg-teal-600 hover:text-white"
//             >
//               View Profile →
//             </button>

//           </div>
//         </div>
//       ))}

//     </div>

//   </fieldset>
// </div>

// </div>


//     </main>

<main className="animated-gradient min-h-screen overflow-hidden bg-[#F8FAFC]">

  <PageHero
    backgroundImage="/assets/images/Ne.png"
    badge="Department"
    title={department.name}
    highlight={department.specialization}
    description={department.short_description}
    breadcrumbs={[
      {
        label: "Department",
        href: "/department",
      },
      {
        label: department.name,
      },
    ]}
  />

  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.08 }}
    className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8"
  >

    {/* ========================================= */}
    {/* TOP DEPARTMENT SECTION */}
    {/* ========================================= */}

    <motion.div
      variants={fadeUp}
      className="grid grid-cols-12 gap-6"
    >

      {/* LEFT */}
      <motion.div
        variants={fadeUp}
        className="col-span-12 lg:col-span-6"
      >

        <div className="h-full overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-sm shadow-slate-200/50">

          <div className="border-b border-slate-100 bg-gradient-to-br from-teal-50/70 via-white to-white p-6 sm:p-8">

            <div className="flex items-start gap-4">

              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100 text-2xl ring-1 ring-teal-100"
              >
                ❤️
              </motion.div>

              <div className="min-w-0">

                <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  {department.name}
                </h1>

                {department.short_description && (
                  <p className="mt-1.5 text-sm font-medium leading-6 text-teal-600">
                    {department.short_description}
                  </p>
                )}

              </div>

            </div>

          </div>

        </div>

      </motion.div>


      {/* RIGHT IMAGE */}
      <motion.div
        variants={fadeUp}
        className="col-span-12 lg:col-span-6"
      >

        <motion.div
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.4 }}
          className="relative h-[320px] w-full overflow-hidden rounded-3xl shadow-sm shadow-slate-200/50"
        >

          <img
            src="/assets/images/Ne.png"
            alt={department.name}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">

            <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur-sm ring-1 ring-white/20">
              Department
            </span>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {department.name}
            </h2>

          </div>

        </motion.div>

      </motion.div>

    </motion.div>


    {/* ========================================= */}
    {/* ABOUT + INFORMATION */}
    {/* ========================================= */}

    <motion.div
      variants={fadeUp}
      className="grid grid-cols-12 gap-6"
    >

      {/* ABOUT */}
      <div className="col-span-12 lg:col-span-9">

        <fieldset className="rounded-2xl border border-slate-200 bg-white px-5 pb-5 pt-2 shadow-sm sm:px-6">

          <legend className="px-3 text-sm font-bold uppercase tracking-[0.15em] text-teal-600">
            About Department
          </legend>

          <p className="mt-2 text-sm leading-7 text-slate-600">
            {department.description || "No description available."}
          </p>

        </fieldset>

      </div>


      {/* INFORMATION */}
      <div className="col-span-12 lg:col-span-3">

        <fieldset className="h-full rounded-2xl border border-slate-200 bg-white px-4 pb-5 pt-2 shadow-sm sm:px-5">

          <legend className="px-3 text-sm font-bold uppercase tracking-[0.15em] text-slate-500">
            Department Information
          </legend>

          <div className="mt-3 space-y-3">

            {/* Location */}
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-100"
            >
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Location
              </p>

              <p className="mt-2 text-sm font-semibold leading-6 text-slate-900">
                {department.location || "Not specified"}
              </p>
            </motion.div>


            {/* Timing */}
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-100"
            >
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Timing
              </p>

              <p className="mt-2 text-sm font-semibold leading-6 text-slate-900">
                {department.timing || "Not specified"}
              </p>
            </motion.div>


            {/* Emergency */}
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-100"
            >
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Emergency
              </p>

              <div className="mt-2 flex items-center gap-2">

                <span
                  className={`h-2 w-2 rounded-full ${
                    department.emergency_available
                      ? "bg-emerald-500"
                      : "bg-slate-400"
                  }`}
                />

                <span
                  className={`text-sm font-semibold ${
                    department.emergency_available
                      ? "text-emerald-600"
                      : "text-slate-500"
                  }`}
                >
                  {department.emergency_available
                    ? "Available"
                    : "Not Available"}
                </span>

              </div>

            </motion.div>

          </div>

        </fieldset>

      </div>

    </motion.div>


    {/* ========================================= */}
    {/* DOCTORS */}
    {/* ========================================= */}

    <motion.div variants={fadeUp}>

      <fieldset className="rounded-3xl border border-slate-200 bg-white px-4 pb-5 pt-3 shadow-sm sm:px-5">

        <legend className="px-3">
          <span className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-teal-700">
            Our Specialists
          </span>
        </legend>


        <div className="mb-5 flex items-center justify-between gap-3">

          <div>

            <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              Our Doctors
            </h2>

            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              Experienced specialists providing expert care.
            </p>

          </div>

          <span className="shrink-0 rounded-full bg-teal-50 px-3 py-1.5 text-xs font-bold text-teal-700 ring-1 ring-teal-100">
            {department.doctors?.length || 0} Doctors
          </span>

        </div>


        {/* DOCTOR GRID */}

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >

          {department.doctors?.map((doctor) => (

            <motion.div
              key={doctor.id}
              variants={fadeUp}
              whileHover={{
                y: -8,
                scale: 1.015,
              }}
              transition={{
                duration: 0.3,
              }}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >

              {/* IMAGE */}

              <div className="relative overflow-hidden bg-slate-100">

                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-44 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                <span
                  className={`absolute right-2.5 top-2.5 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold shadow-sm backdrop-blur-md ${
                    doctor.available
                      ? "bg-emerald-500/90 text-white"
                      : "bg-slate-700/85 text-white"
                  }`}
                >

                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      doctor.available
                        ? "bg-white"
                        : "bg-slate-300"
                    }`}
                  />

                  {doctor.available
                    ? "Available"
                    : "Unavailable"}

                </span>

              </div>


              {/* DETAILS */}

              <div className="p-4">

                <h3 className="truncate text-sm font-bold text-slate-900">
                  {doctor.name}
                </h3>

                <p className="mt-1 truncate text-xs font-semibold text-teal-600">
                  {doctor.specialization}
                </p>

                <p className="mt-1.5 line-clamp-1 text-[11px] text-slate-500">
                  {doctor.qualification}
                </p>


                <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                      Experience
                    </p>

                    <p className="mt-0.5 text-xs font-bold text-slate-800">
                      {doctor.experience}
                    </p>
                  </div>


                  <div className="text-right">

                    <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                      Rating
                    </p>

                    <p className="mt-0.5 text-xs font-bold text-slate-800">
                      <span className="mr-1 text-amber-500">
                        ★
                      </span>
                      {doctor.rating || "N/A"}
                    </p>

                  </div>

                </div>


                <button
                  type="button"
                  className="mt-3 w-full rounded-lg bg-teal-50 px-3 py-2 text-xs font-bold text-teal-700 transition hover:bg-teal-600 hover:text-white"
                >
                  View Profile →
                </button>

              </div>

            </motion.div>

          ))}

        </motion.div>

      </fieldset>

    </motion.div>

    <PatientTestimonials/>
  </motion.div>

</main>
  );
};

export default Departmentdetailspage;