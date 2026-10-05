
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   ArrowRight,
//   Award,
//   CheckCircle2,
//   Clock3,
//   HeartPulse,
//   Phone,
//   ShieldCheck,
//   Stethoscope,
//   Users,
// } from "lucide-react";
// import PageHero from "../../components/Pagehero";





// const getDepartment = (slug) => {
//   return departments[slug] || departments.cardiology;
// };

// const DepartmentDetailsPage = async ({ params }) => {
//   const { slug } = await params;

//   const department = getDepartment(slug);

//   return (
//     <main className="bg-white">
//       {/* =========================================================
//           HERO
//       ========================================================== */}
//       <PageHero
//         backgroundImage='assets/images/Ne.png'
//         badge="Department"
//         badgeIcon={"HeartPulse"}
//         title={''}
//         highlight={''}
//         description={''}
//         breadcrumbs={[
//           {
//             label: "Departments",
//             href: "/departments",
//           },
//           {
//             label: department.name,
//           },
//         ]}
//       />

//       {/* =========================================================
//           INTRODUCTION
//       ========================================================== */}
//       <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
//         <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
//           {/* IMAGE */}
//           <div className="relative">
//             <div className="relative overflow-hidden rounded-[2rem]">
//               <Image
//                 src={department.heroImage}
//                 alt={department.name}
//                 width={900}
//                 height={700}
//                 className="h-[420px] w-full object-cover sm:h-[500px]"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#063B5C]/50 via-transparent to-transparent" />
//             </div>

//             {/* Floating experience card */}
//             <div
//               className="
//                 absolute
//                 -bottom-6
//                 right-5
//                 flex
//                 items-center
//                 gap-4
//                 rounded-2xl
//                 border
//                 border-white/70
//                 bg-white/95
//                 px-5
//                 py-4
//                 shadow-[0_20px_60px_rgba(6,59,92,0.16)]
//                 backdrop-blur
//                 sm:right-8
//               "
//             >
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A7A78]/10">
//                 <Award className="h-5 w-5 text-[#0A7A78]" />
//               </div>

//               <div>
//                 <p className="text-xl font-bold text-[#063B5C]">
//                   Trusted Care
//                 </p>
//                 <p className="text-sm text-slate-500">
//                   Experienced Specialists
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* CONTENT */}
//           <div>
//             <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#0A7A78]">
//               About the Department
//             </span>

//             <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[#063B5C] sm:text-4xl lg:text-5xl">
//               {department.aboutTitle}
//             </h2>

//             <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
//               {department.about}
//             </p>

//             {/* Highlights */}
//             <div className="mt-8 grid gap-4 sm:grid-cols-2">
//               {department.highlights.map((item) => (
//                 <div
//                   key={item}
//                   className="flex items-start gap-3"
//                 >
//                   <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0A7A78]/10">
//                     <CheckCircle2 className="h-4 w-4 text-[#0A7A78]" />
//                   </div>

//                   <span className="text-sm font-medium leading-6 text-slate-700">
//                     {item}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             {/* CTA */}
//             <div className="mt-9 flex flex-wrap gap-4">
//               <Link
//                 href="/appointments"
//                 className="
//                   inline-flex
//                   items-center
//                   gap-2
//                   rounded-xl
//                   bg-[#0A7A78]
//                   px-6
//                   py-3.5
//                   text-sm
//                   font-bold
//                   text-white
//                   shadow-[0_12px_30px_rgba(10,122,120,0.20)]
//                   transition
//                   hover:-translate-y-0.5
//                   hover:bg-[#086967]
//                 "
//               >
//                 Book an Appointment
//                 <ArrowRight className="h-4 w-4" />
//               </Link>

//               <Link
//                 href="/doctors"
//                 className="
//                   inline-flex
//                   items-center
//                   gap-2
//                   rounded-xl
//                   border
//                   border-slate-200
//                   bg-white
//                   px-6
//                   py-3.5
//                   text-sm
//                   font-bold
//                   text-[#063B5C]
//                   transition
//                   hover:border-[#0A7A78]
//                   hover:text-[#0A7A78]
//                 "
//               >
//                 Meet Our Doctors
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           STATS
//       ========================================================== */}
//       <section className="border-y border-slate-100 bg-[#f7fbfb] px-4 py-14 sm:px-6 lg:px-8">
//         <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 md:grid-cols-4">
//           {department.stats.map((stat) => {
//             const Icon = stat.icon;

//             return (
//               <div
//                 key={stat.label}
//                 className="
//                   flex
//                   flex-col
//                   items-center
//                   justify-center
//                   text-center
//                   md:border-r
//                   md:border-slate-200
//                   md:last:border-r-0
//                 "
//               >
//                 <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A7A78]/10">
//                   <Icon className="h-5 w-5 text-[#0A7A78]" />
//                 </div>

//                 <p className="mt-3 text-2xl font-bold text-[#063B5C]">
//                   {stat.value}
//                 </p>

//                 <p className="mt-1 text-sm text-slate-500">
//                   {stat.label}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* =========================================================
//           SERVICES
//       ========================================================== */}
//       <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
//         <div className="mx-auto max-w-7xl">
//           <div className="mx-auto max-w-2xl text-center">
//             <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#0A7A78]">
//               What We Offer
//             </span>

//             <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#063B5C] sm:text-4xl">
//               Comprehensive Department Services
//             </h2>

//             <p className="mt-4 text-base leading-7 text-slate-600">
//               Our team provides specialized services designed around accurate
//               diagnosis, personalized treatment, and compassionate patient care.
//             </p>
//           </div>

//           <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             {department.services.map((service) => {
//               const Icon = service.icon;

//               return (
//                 <div
//                   key={service.title}
//                   className="
//                     group
//                     rounded-[1.5rem]
//                     border
//                     border-slate-100
//                     bg-white
//                     p-6
//                     shadow-[0_15px_50px_rgba(6,59,92,0.06)]
//                     transition
//                     duration-300
//                     hover:-translate-y-1
//                     hover:border-[#0A7A78]/20
//                     hover:shadow-[0_25px_60px_rgba(6,59,92,0.10)]
//                   "
//                 >
//                   <div
//                     className="
//                       flex
//                       h-12
//                       w-12
//                       items-center
//                       justify-center
//                       rounded-xl
//                       bg-[#0A7A78]/10
//                       transition
//                       group-hover:bg-[#0A7A78]
//                     "
//                   >
//                     <Icon
//                       className="
//                         h-5
//                         w-5
//                         text-[#0A7A78]
//                         transition
//                         group-hover:text-white
//                       "
//                     />
//                   </div>

//                   <h3 className="mt-5 text-lg font-bold text-[#063B5C]">
//                     {service.title}
//                   </h3>

//                   <p className="mt-3 text-sm leading-6 text-slate-600">
//                     {service.description}
//                   </p>

//                   <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-[#0A7A78]">
//                     Learn More
//                     <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           TREATMENTS
//       ========================================================== */}
//       <section className="bg-[#f5fbfa] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
//         <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-center">
//           <div>
//             <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#0A7A78]">
//               Conditions & Treatments
//             </span>

//             <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#063B5C] sm:text-4xl">
//               Care Designed Around Your Needs
//             </h2>

//             <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
//               We provide evaluation and treatment support across a wide range
//               of conditions, with care plans tailored to each patient.
//             </p>

//             <div className="mt-8 grid gap-3 sm:grid-cols-2">
//               {department.treatments.map((treatment) => (
//                 <div
//                   key={treatment}
//                   className="
//                     flex
//                     items-center
//                     gap-3
//                     rounded-xl
//                     border
//                     border-white
//                     bg-white
//                     px-4
//                     py-3.5
//                     shadow-sm
//                   "
//                 >
//                   <CheckCircle2 className="h-5 w-5 shrink-0 text-[#0A7A78]" />

//                   <span className="text-sm font-semibold text-slate-700">
//                     {treatment}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* SIDE CARD */}
//           <div
//             className="
//               relative
//               overflow-hidden
//               rounded-[2rem]
//               bg-[#063B5C]
//               p-8
//               shadow-[0_25px_70px_rgba(6,59,92,0.16)]
//               sm:p-10
//             "
//           >
//             <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#0A7A78]/20 blur-3xl" />

//             <div className="relative">
//               <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4DD4C6]/10">
//                 <HeartPulse className="h-7 w-7 text-[#4DD4C6]" />
//               </div>

//               <h3 className="mt-7 text-2xl font-bold text-white">
//                 Personalized Care Matters
//               </h3>

//               <p className="mt-4 text-sm leading-7 text-white/65">
//                 Every patient is different. Our specialists work closely with
//                 patients and families to understand individual needs and
//                 develop appropriate care plans.
//               </p>

//               <Link
//                 href="/appointments"
//                 className="
//                   mt-7
//                   inline-flex
//                   items-center
//                   gap-2
//                   rounded-xl
//                   bg-[#4DD4C6]
//                   px-5
//                   py-3
//                   text-sm
//                   font-bold
//                   text-[#063B5C]
//                   transition
//                   hover:bg-white
//                 "
//               >
//                 Schedule Consultation
//                 <ArrowRight className="h-4 w-4" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           DOCTOR CTA
//       ========================================================== */}
//       <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
//         <div
//           className="
//             mx-auto
//             max-w-7xl
//             overflow-hidden
//             rounded-[2rem]
//             bg-[#063B5C]
//           "
//         >
//           <div className="relative px-6 py-12 sm:px-10 lg:px-16 lg:py-14">
//             <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#0A7A78]/20 blur-3xl" />

//             <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
//               <div className="max-w-2xl">
//                 <div className="flex items-center gap-2 text-[#4DD4C6]">
//                   <Stethoscope className="h-5 w-5" />

//                   <span className="text-sm font-bold uppercase tracking-[0.15em]">
//                     Expert Medical Team
//                   </span>
//                 </div>

//                 <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
//                   Connect With Our Specialists
//                 </h2>

//                 <p className="mt-4 text-base leading-7 text-white/65">
//                   Speak with our experienced medical team and find the right
//                   care for your healthcare needs.
//                 </p>
//               </div>

//               <div className="flex flex-wrap gap-3">
//                 <Link
//                   href="/doctors"
//                   className="
//                     inline-flex
//                     items-center
//                     gap-2
//                     rounded-xl
//                     bg-white
//                     px-6
//                     py-3.5
//                     text-sm
//                     font-bold
//                     text-[#063B5C]
//                     transition
//                     hover:bg-[#4DD4C6]
//                   "
//                 >
//                   View Doctors
//                   <ArrowRight className="h-4 w-4" />
//                 </Link>

//                 <a
//                   href="tel:+911234567890"
//                   className="
//                     inline-flex
//                     items-center
//                     gap-2
//                     rounded-xl
//                     border
//                     border-white/15
//                     bg-white/5
//                     px-6
//                     py-3.5
//                     text-sm
//                     font-bold
//                     text-white
//                     backdrop-blur
//                     transition
//                     hover:bg-white/10
//                   "
//                 >
//                   <Phone className="h-4 w-4" />
//                   Call Us
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default DepartmentDetailsPage;


// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   ArrowRight,
//   Award,
//   CheckCircle2,
//   Clock3,
//   HeartPulse,
//   Phone,
//   ShieldCheck,
//   Stethoscope,
//   Users,
//   CalendarDays,
//   Star,
// } from "lucide-react";
// import PageHero from "../../components/Pagehero";
// import { useParams } from "next/navigation";
// import ApiService from "../../src/services/Apiservices";
// import useSWR from 'swr'

// // ============================================================
// // ICON MAP
// // ============================================================

// const iconMap = {
//   HeartPulse,
//   Stethoscope,
//   ShieldCheck,
//   Clock3,
//   Award,
//   Users,
// };

// // ============================================================
// // DEPARTMENT DATA
// // Replace this with API data later
// // ============================================================

// export const department01 = {
//   id: 12,
//   user_id: 1,

//   name: "Cardiology",
//   slug: "cardiology",

//   icon: "HeartPulse",

//   short_description:
//     "Advanced heart care with experienced cardiologists, cutting-edge diagnostic technology, and personalized treatment plans for every patient.",

//   description:
//     "Our Cardiology Department is dedicated to providing comprehensive, world-class care for every aspect of heart health. From routine check-ups to complex interventional procedures, our team combines advanced technology with a compassionate, patient-first approach.\n\nWe diagnose and treat a wide range of cardiovascular conditions, including coronary artery disease, heart failure, arrhythmias, valvular heart disease, congenital heart defects, hypertension, and high cholesterol.",

//   image:
//     "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg",

//   banner_image:
//     "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg",

//   phone: "+91 98765 43210",

//   location: "Baderia Metro Prime Hospital",

//   timing: "09:00 AM - 06:00 PM",

//   emergency_available: 1,

//   appointment_available: 1,

//   status: "active",

//   created_at: "2026-09-17T10:37:15.000Z",

//   updated_at: "2026-09-17T10:37:15.000Z",

//   delete_status: 0,

//   doctors: [
//     {
//       id: 1,
//       name: "Dr. Rajesh Sharma",
//       specialization: "Senior Cardiologist",
//       qualification: "MBBS, MD, DM Cardiology",
//       experience: "15 Years",
//       image: "https://randomuser.me/api/portraits/men/32.jpg",
//       rating: 4.9,
//       reviews: 128,
//       phone: "+91 98765 43211",
//       available: true,
//     },
//     {
//       id: 2,
//       name: "Dr. Priya Verma",
//       specialization: "Interventional Cardiologist",
//       qualification: "MBBS, MD, DM",
//       experience: "12 Years",
//       image: "https://randomuser.me/api/portraits/women/44.jpg",
//       rating: 4.8,
//       reviews: 96,
//       phone: "+91 98765 43212",
//       available: true,
//     },
//     {
//       id: 3,
//       name: "Dr. Amit Patel",
//       specialization: "Cardiac Surgeon",
//       qualification: "MBBS, MS, MCh",
//       experience: "10 Years",
//       image: "https://randomuser.me/api/portraits/men/46.jpg",
//       rating: 4.7,
//       reviews: 84,
//       phone: "+91 98765 43213",
//       available: false,
//     },
//   ],
// };

// // ============================================================
// // SERVICES
// // ============================================================

// const services = [
//   {
//     title: "Cardiac Consultation",
//     description:
//       "Expert evaluation and personalized treatment planning for cardiovascular conditions.",
//     icon: Stethoscope,
//   },
//   {
//     title: "Cardiac Diagnostics",
//     description:
//       "Advanced diagnostic services to help accurately evaluate heart health.",
//     icon: HeartPulse,
//   },
//   {
//     title: "Preventive Cardiology",
//     description:
//       "Risk assessment and preventive strategies for long-term heart health.",
//     icon: ShieldCheck,
//   },
//   {
//     title: "Emergency Cardiac Care",
//     description:
//       "Timely medical support for urgent cardiac conditions and emergencies.",
//     icon: Clock3,
//   },
// ];

// // ============================================================
// // TREATMENTS
// // ============================================================

// const treatments = [
//   "Hypertension management",
//   "Coronary artery disease management",
//   "Heart failure management",
//   "Arrhythmia evaluation",
//   "Preventive cardiac care",
//   "Cardiac rehabilitation",
// ];

// // ============================================================
// // HIGHLIGHTS
// // ============================================================

// const highlights = [
//   "Experienced cardiac specialists",
//   "Advanced diagnostic facilities",
//   "Personalized treatment plans",
//   "24/7 emergency support",
// ];

// // ============================================================
// // MAIN PAGE
// // ============================================================

// const DepartmentDetailsPage = ({ params }) => {
//   const { id } =  useParams();


//   const {
//     data,
//     error,
//     isLoading,
//   } = useSWR(
//     id ? `departments/${id}` : null,
//     ApiService.get
//   );

//   const department = data?.data;
//   console.log(department)



  

//   return (
//     <>
//      <main className="bg-white">

//       {/* =====================================================
//           HERO
//       ====================================================== */}

//       <PageHero
//         backgroundImage={data.banner_image || data.image}
//         badge="Department"
//         badgeIcon={"DepartmentIcon"}
//         title={"data.name"}
//         highlight="Specialized Care"
//         description={data.short_description}
//         // breadcrumbs={[
//         //   {
//         //     label: "Departments",
//         //     href: "/departments",
//         //   },
//         //   {
//         //     label: data.name,
//         //   },
//         // ]}
//       />

//       {/* =====================================================
//           INTRODUCTION
//       ====================================================== */}

//       <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

//         <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">

//           {/* IMAGE */}

//           <div className="relative">

//             <div className="relative overflow-hidden rounded-[2rem]">

//               <Image
//                 src={data.image || data.banner_image}
//                 alt={data.name}
//                 width={900}
//                 height={700}
//                 className="h-[420px] w-full object-cover sm:h-[500px]"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#063B5C]/50 via-transparent to-transparent" />

//             </div>

//             {/* Floating Card */}

//             <div className="absolute -bottom-6 right-5 flex items-center gap-4 rounded-2xl border border-white/70 bg-white/95 px-5 py-4 shadow-[0_20px_60px_rgba(6,59,92,0.16)] backdrop-blur sm:right-8">

//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A7A78]/10">

//                 <Award className="h-5 w-5 text-[#0A7A78]" />

//               </div>

//               <div>

//                 <p className="text-xl font-bold text-[#063B5C]">
//                   Trusted Care
//                 </p>

//                 <p className="text-sm text-slate-500">
//                   Experienced Specialists
//                 </p>

//               </div>

//             </div>

//           </div>

//           {/* CONTENT */}

//           <div>

//             <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#0A7A78]">
//               About the Department
//             </span>

//             <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[#063B5C] sm:text-4xl lg:text-5xl">
//               Advanced {data.name} Care Under One Roof
//             </h2>

//             <div className="mt-6 max-w-2xl space-y-5 text-base leading-8 text-slate-600 sm:text-lg">

//               {data.description
//                 ?.split("\n\n")
//                 .map((paragraph, index) => (
//                   <p key={index}>
//                     {paragraph}
//                   </p>
//                 ))}

//             </div>

//             {/* Highlights */}

//             <div className="mt-8 grid gap-4 sm:grid-cols-2">

//               {highlights.map((item) => (
//                 <div
//                   key={item}
//                   className="flex items-start gap-3"
//                 >

//                   <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0A7A78]/10">

//                     <CheckCircle2 className="h-4 w-4 text-[#0A7A78]" />

//                   </div>

//                   <span className="text-sm font-medium leading-6 text-slate-700">
//                     {item}
//                   </span>

//                 </div>
//               ))}

//             </div>

//             {/* CTA */}

//             <div className="mt-9 flex flex-wrap gap-4">

//               {data.appointment_available ? (
//                 <Link
//                   href="/appointments"
//                   className="inline-flex items-center gap-2 rounded-xl bg-[#0A7A78] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(10,122,120,0.20)] transition hover:-translate-y-0.5 hover:bg-[#086967]"
//                 >
//                   Book an Appointment
//                   <ArrowRight className="h-4 w-4" />
//                 </Link>
//               ) : null}

//               <Link
//                 href="/doctors"
//                 className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-[#063B5C] transition hover:border-[#0A7A78] hover:text-[#0A7A78]"
//               >
//                 Meet Our Doctors
//               </Link>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           DEPARTMENT INFO
//       ====================================================== */}

//       <section className="border-y border-slate-100 bg-[#f7fbfb] px-4 py-8 sm:px-6 lg:px-8">

//         <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">

//           {/* Location */}

//           <div className="rounded-2xl bg-white p-5 shadow-sm">

//             <div className="flex items-center gap-3">

//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A7A78]/10">

//                 <ShieldCheck className="h-5 w-5 text-[#0A7A78]" />

//               </div>

//               <div>

//                 <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
//                   Location
//                 </p>

//                 <p className="mt-1 text-sm font-bold text-[#063B5C]">
//                   {data.location}
//                 </p>

//               </div>

//             </div>

//           </div>

//           {/* Timing */}

//           <div className="rounded-2xl bg-white p-5 shadow-sm">

//             <div className="flex items-center gap-3">

//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A7A78]/10">

//                 <Clock3 className="h-5 w-5 text-[#0A7A78]" />

//               </div>

//               <div>

//                 <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
//                   Department Timing
//                 </p>

//                 <p className="mt-1 text-sm font-bold text-[#063B5C]">
//                   {data.timing}
//                 </p>

//               </div>

//             </div>

//           </div>

//           {/* Emergency */}

//           <div className="rounded-2xl bg-white p-5 shadow-sm">

//             <div className="flex items-center gap-3">

//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50">

//                 <HeartPulse className="h-5 w-5 text-red-500" />

//               </div>

//               <div>

//                 <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
//                   Emergency
//                 </p>

//                 <p className="mt-1 text-sm font-bold text-[#063B5C]">
//                   {data.emergency_available
//                     ? "Available 24/7"
//                     : "Not Available"}
//                 </p>

//               </div>

//             </div>

//           </div>

//           {/* Phone */}

//           <div className="rounded-2xl bg-white p-5 shadow-sm">

//             <div className="flex items-center gap-3">

//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A7A78]/10">

//                 <Phone className="h-5 w-5 text-[#0A7A78]" />

//               </div>

//               <div>

//                 <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
//                   Contact
//                 </p>

//                 <a
//                   href={`tel:${data.phone}`}
//                   className="mt-1 block text-sm font-bold text-[#063B5C] hover:text-[#0A7A78]"
//                 >
//                   {data.phone}
//                 </a>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           STATS
//       ====================================================== */}

//       <section className="border-b border-slate-100 bg-white px-4 py-14 sm:px-6 lg:px-8">

//         <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 md:grid-cols-4">

//           {stats.map((stat) => {

//             const Icon = stat.icon;

//             return (
//               <div
//                 key={stat.label}
//                 className="flex flex-col items-center justify-center text-center md:border-r md:border-slate-200 md:last:border-r-0"
//               >

//                 <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A7A78]/10">

//                   <Icon className="h-5 w-5 text-[#0A7A78]" />

//                 </div>

//                 <p className="mt-3 text-2xl font-bold text-[#063B5C]">
//                   {stat.value}
//                 </p>

//                 <p className="mt-1 text-sm text-slate-500">
//                   {stat.label}
//                 </p>

//               </div>
//             );

//           })}

//         </div>

//       </section>

//       {/* =====================================================
//           SERVICES
//       ====================================================== */}

//       <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

//         <div className="mx-auto max-w-7xl">

//           <div className="mx-auto max-w-2xl text-center">

//             <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#0A7A78]">
//               What We Offer
//             </span>

//             <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#063B5C] sm:text-4xl">
//               Comprehensive {data.name} Services
//             </h2>

//             <p className="mt-4 text-base leading-7 text-slate-600">
//               Our team provides specialized services designed around
//               accurate diagnosis, personalized treatment, and
//               compassionate patient care.
//             </p>

//           </div>

//           <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

//             {services.map((service) => {

//               const Icon = service.icon;

//               return (
//                 <div
//                   key={service.title}
//                   className="group rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-[0_15px_50px_rgba(6,59,92,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#0A7A78]/20 hover:shadow-[0_25px_60px_rgba(6,59,92,0.10)]"
//                 >

//                   <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A7A78]/10 transition group-hover:bg-[#0A7A78]">

//                     <Icon className="h-5 w-5 text-[#0A7A78] transition group-hover:text-white" />

//                   </div>

//                   <h3 className="mt-5 text-lg font-bold text-[#063B5C]">
//                     {service.title}
//                   </h3>

//                   <p className="mt-3 text-sm leading-6 text-slate-600">
//                     {service.description}
//                   </p>

//                   <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-[#0A7A78]">

//                     Learn More

//                     <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />

//                   </div>

//                 </div>
//               );

//             })}

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           TREATMENTS
//       ====================================================== */}

//       <section className="bg-[#f5fbfa] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">

//         <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-center">

//           <div>

//             <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#0A7A78]">
//               Conditions & Treatments
//             </span>

//             <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#063B5C] sm:text-4xl">
//               Care Designed Around Your Needs
//             </h2>

//             <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
//               We provide evaluation and treatment support across a wide
//               range of conditions, with care plans tailored to each
//               patient.
//             </p>

//             <div className="mt-8 grid gap-3 sm:grid-cols-2">

//               {treatments.map((treatment) => (
//                 <div
//                   key={treatment}
//                   className="flex items-center gap-3 rounded-xl border border-white bg-white px-4 py-3.5 shadow-sm"
//                 >

//                   <CheckCircle2 className="h-5 w-5 shrink-0 text-[#0A7A78]" />

//                   <span className="text-sm font-semibold text-slate-700">
//                     {treatment}
//                   </span>

//                 </div>
//               ))}

//             </div>

//           </div>

//           {/* SIDE CARD */}

//           <div className="relative overflow-hidden rounded-[2rem] bg-[#063B5C] p-8 shadow-[0_25px_70px_rgba(6,59,92,0.16)] sm:p-10">

//             <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#0A7A78]/20 blur-3xl" />

//             <div className="relative">

//               <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4DD4C6]/10">

//                 <HeartPulse className="h-7 w-7 text-[#4DD4C6]" />

//               </div>

//               <h3 className="mt-7 text-2xl font-bold text-white">
//                 Personalized Care Matters
//               </h3>

//               <p className="mt-4 text-sm leading-7 text-white/65">
//                 Every patient is different. Our specialists work closely
//                 with patients and families to understand individual needs
//                 and develop appropriate care plans.
//               </p>

//               {data.appointment_available ? (
//                 <Link
//                   href="/appointments"
//                   className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#4DD4C6] px-5 py-3 text-sm font-bold text-[#063B5C] transition hover:bg-white"
//                 >
//                   Schedule Consultation
//                   <ArrowRight className="h-4 w-4" />
//                 </Link>
//               ) : null}

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           DOCTORS
//       ====================================================== */}

//       <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

//         <div className="mx-auto max-w-7xl">

//           <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

//             <div>

//               <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#0A7A78]">
//                 Our Medical Team
//               </span>

//               <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#063B5C] sm:text-4xl">
//                 Meet Our {data.name} Specialists
//               </h2>

//               <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
//                 Experienced specialists dedicated to providing
//                 comprehensive and personalized patient care.
//               </p>

//             </div>

//             <Link
//               href="/doctors"
//               className="inline-flex w-fit items-center gap-2 text-sm font-bold text-[#0A7A78]"
//             >
//               View All Doctors
//               <ArrowRight className="h-4 w-4" />
//             </Link>

//           </div>

//           {/* DOCTORS */}

//           <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

//             {data?.doctors?.map((doctor) => (
//               <div
//                 key={doctor.id}
//                 className="group overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white shadow-[0_15px_50px_rgba(6,59,92,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(6,59,92,0.12)]"
//               >

//                 {/* Doctor Image */}

//                 <div className="relative h-[320px] overflow-hidden bg-[#f5fbfa]">

//                   {/* <Image
//                     src={doctor.image}
//                     alt={doctor.name}
//                     fill
//                     className="object-cover object-top transition duration-500 group-hover:scale-105"
//                   /> */}

//                   {/* Availability */}

//                   <div className="absolute left-4 top-4">

//                     <span
//                       className={`rounded-full px-3 py-1.5 text-xs font-bold ${
//                         doctor.available
//                           ? "bg-emerald-500 text-white"
//                           : "bg-slate-700 text-white"
//                       }`}
//                     >
//                       {doctor.available
//                         ? "Available"
//                         : "Unavailable"}
//                     </span>

//                   </div>

//                 </div>

//                 {/* Doctor Info */}

//                 <div className="p-6">

//                   <h3 className="text-xl font-bold text-[#063B5C]">
//                     {doctor.name}
//                   </h3>

//                   <p className="mt-1 text-sm font-semibold text-[#0A7A78]">
//                     {doctor.specialization}
//                   </p>

//                   <p className="mt-4 text-sm text-slate-500">
//                     {doctor.qualification}
//                   </p>

//                   <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">

//                     <div>

//                       <p className="text-xs text-slate-400">
//                         Experience
//                       </p>

//                       <p className="mt-1 text-sm font-bold text-[#063B5C]">
//                         {doctor.experience}
//                       </p>

//                     </div>

//                     <div className="flex items-center gap-1">

//                       <Star className="h-4 w-4 fill-current text-amber-400" />

//                       <span className="text-sm font-bold text-[#063B5C]">
//                         {doctor.rating}
//                       </span>

//                       <span className="text-xs text-slate-400">
//                         ({doctor.reviews})
//                       </span>

//                     </div>

//                   </div>

//                   <div className="mt-5 flex gap-3">

//                     <Link
//                       href={`/doctors/${doctor.id}`}
//                       className="flex-1 rounded-xl bg-[#0A7A78] px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-[#086967]"
//                     >
//                       View Profile
//                     </Link>

//                     <a
//                       href={`tel:${doctor.phone}`}
//                       className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-[#063B5C] transition hover:border-[#0A7A78] hover:text-[#0A7A78]"
//                     >
//                       <Phone className="h-4 w-4" />
//                     </a>

//                   </div>

//                 </div>

//               </div>
//             ))}

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           FINAL CTA
//       ====================================================== */}

//       <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">

//         <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#063B5C]">

//           <div className="relative px-6 py-12 sm:px-10 lg:px-16 lg:py-14">

//             <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#0A7A78]/20 blur-3xl" />

//             <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

//               <div className="max-w-2xl">

//                 <div className="flex items-center gap-2 text-[#4DD4C6]">

//                   <Stethoscope className="h-5 w-5" />

//                   <span className="text-sm font-bold uppercase tracking-[0.15em]">
//                     Expert Medical Team
//                   </span>

//                 </div>

//                 <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
//                   Connect With Our Specialists
//                 </h2>

//                 <p className="mt-4 text-base leading-7 text-white/65">
//                   Speak with our experienced medical team and find the
//                   right care for your healthcare needs.
//                 </p>

//               </div>

//               <div className="flex flex-wrap gap-3">

//                 <Link
//                   href="/doctors"
//                   className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#063B5C] transition hover:bg-[#4DD4C6]"
//                 >
//                   View Doctors
//                   <ArrowRight className="h-4 w-4" />
//                 </Link>

//                 <a
//                   href={`tel:${data.phone}`}
//                   className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"
//                 >
//                   <Phone className="h-4 w-4" />
//                   Call Us
//                 </a>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>

//     </main>
//     </>
//   );
// };

// export default DepartmentDetailsPage;



// new code 

// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   ArrowRight,
//   Award,
//   CheckCircle2,
//   Clock3,
//   HeartPulse,
//   Phone,
//   ShieldCheck,
//   Stethoscope,
//   CalendarDays,
// } from "lucide-react";
// import PageHero from "../../components/Pagehero";
// import { useParams } from "next/navigation";
// import ApiService from "../../src/services/Apiservices";
// import useSWR from "swr";

// // ============================================================
// // SERVICES
// // ============================================================

// const services = [
//   {
//     title: "Cardiac Consultation",
//     description:
//       "Expert evaluation and personalized treatment planning for cardiovascular conditions.",
//     icon: Stethoscope,
//   },
//   {
//     title: "Cardiac Diagnostics",
//     description:
//       "Advanced diagnostic services to accurately evaluate heart health.",
//     icon: HeartPulse,
//   },
//   {
//     title: "Preventive Cardiology",
//     description:
//       "Risk assessment and preventive strategies for long-term heart health.",
//     icon: ShieldCheck,
//   },
//   {
//     title: "Emergency Cardiac Care",
//     description:
//       "Timely medical support for urgent cardiac conditions and emergencies.",
//     icon: Clock3,
//   },
// ];

// // ============================================================
// // TREATMENTS
// // ============================================================

// const treatments = [
//   "Hypertension management",
//   "Coronary artery disease management",
//   "Heart disease diagnosis",
//   "Heart failure management",
//   "Preventive cardiac care",
//   "Cardiovascular risk assessment",
// ];

// // ============================================================
// // HIGHLIGHTS
// // ============================================================

// const highlights = [
//   "Experienced cardiac specialists",
//   "Advanced diagnostic facilities",
//   "Personalized treatment plans",
//   "24/7 emergency support",
// ];

// // ============================================================
// // MAIN PAGE
// // ============================================================

// const DepartmentDetailsPage = () => {
//   const { id } = useParams();

//   const { data, error, isLoading } = useSWR(
//     id ? `departments/${id}` : null,
//     ApiService.get
//   );

//   // ============================================================
//   // API DATA
//   // ============================================================

//   const department = data?.data;

//   console.log("Department API Response:", data);
//   console.log("Department:", department);

//   // ============================================================
//   // LOADING
//   // ============================================================

//   if (isLoading) {
//     return (
//       <main className="min-h-screen bg-white">
//         <div className="flex min-h-[70vh] items-center justify-center">
//           <div className="text-center">
//             <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-[#0A7A78]/20 border-t-[#0A7A78]" />

//             <p className="mt-4 text-sm font-medium text-slate-500">
//               Loading department...
//             </p>
//           </div>
//         </div>
//       </main>
//     );
//   }

//   // ============================================================
//   // ERROR
//   // ============================================================

//   if (error) {
//     return (
//       <main className="min-h-screen bg-white">
//         <div className="flex min-h-[70vh] items-center justify-center px-6">
//           <div className="max-w-md text-center">
//             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50">
//               <HeartPulse className="h-7 w-7 text-red-500" />
//             </div>

//             <h1 className="mt-5 text-2xl font-bold text-[#063B5C]">
//               Unable to Load Department
//             </h1>

//             <p className="mt-3 text-sm leading-6 text-slate-500">
//               We could not load the department information. Please try again
//               later.
//             </p>

//             <Link
//               href="/departments"
//               className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#0A7A78] px-5 py-3 text-sm font-bold text-white"
//             >
//               View Departments
//               <ArrowRight className="h-4 w-4" />
//             </Link>
//           </div>
//         </div>
//       </main>
//     );
//   }

//   // ============================================================
//   // NOT FOUND
//   // ============================================================

//   if (!department) {
//     return (
//       <main className="min-h-screen bg-white">
//         <div className="flex min-h-[70vh] items-center justify-center px-6">
//           <div className="text-center">
//             <h1 className="text-3xl font-bold text-[#063B5C]">
//               Department Not Found
//             </h1>

//             <p className="mt-3 text-slate-500">
//               The requested department could not be found.
//             </p>

//             <Link
//               href="/departments"
//               className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#0A7A78] px-5 py-3 text-sm font-bold text-white"
//             >
//               Back to Departments
//               <ArrowRight className="h-4 w-4" />
//             </Link>
//           </div>
//         </div>
//       </main>
//     );
//   }

//   // ============================================================
//   // STATS - BASED ON ACTUAL API DATA
//   // ============================================================

//   const stats = [
//     {
//       label: "Emergency Care",
//       value: department.emergency_available ? "24/7" : "Available",
//       icon: HeartPulse,
//     },
//     {
//       label: "Appointments",
//       value: department.appointment_available ? "Available" : "Closed",
//       icon: CalendarDays,
//     },
//     {
//       label: "Department Timing",
//       value: department.timing || "N/A",
//       icon: Clock3,
//     },
//     {
//       label: "Department Status",
//       value:
//         department.status === "active"
//           ? "Active"
//           : department.status || "N/A",
//       icon: ShieldCheck,
//     },
//   ];

//   return (
//     <main className="bg-white">
//       {/* =====================================================
//           HERO
//       ====================================================== */}

//       <PageHero
//         backgroundImage={
//           department.banner_image || department.image
//         }
//         badge="Department"
//         badgeIcon={HeartPulse}
//         title={department.name}
//         highlight="Specialized Care"
//         description={department.short_description}
//       />

//       {/* =====================================================
//           INTRODUCTION
//       ====================================================== */}

//       <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
//         <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">

//           {/* IMAGE */}

//           <div className="relative">
//             <div className="relative overflow-hidden rounded-[2rem]">
//               <Image
//                 src={
//                   department.image ||
//                   department.banner_image
//                 }
//                 alt={department.name}
//                 width={900}
//                 height={700}
//                 className="h-[420px] w-full object-cover sm:h-[500px]"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#063B5C]/50 via-transparent to-transparent" />
//             </div>

//             {/* Floating Card */}

//             <div className="absolute -bottom-6 right-5 flex items-center gap-4 rounded-2xl border border-white/70 bg-white/95 px-5 py-4 shadow-[0_20px_60px_rgba(6,59,92,0.16)] backdrop-blur sm:right-8">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A7A78]/10">
//                 <Award className="h-5 w-5 text-[#0A7A78]" />
//               </div>

//               <div>
//                 <p className="text-xl font-bold text-[#063B5C]">
//                   Trusted Care
//                 </p>

//                 <p className="text-sm text-slate-500">
//                   Patient-Centered Healthcare
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* CONTENT */}

//           <div>
//             <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#0A7A78]">
//               About the Department
//             </span>

//             <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[#063B5C] sm:text-4xl lg:text-5xl">
//               Advanced {department.name} Care Under One Roof
//             </h2>

//             <div className="mt-6 max-w-2xl space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
//               {department.description
//                 ?.split("\n\n")
//                 .map((paragraph, index) => (
//                   <p key={index}>{paragraph}</p>
//                 ))}
//             </div>

//             {/* Highlights */}

//             <div className="mt-8 grid gap-4 sm:grid-cols-2">
//               {highlights.map((item) => (
//                 <div
//                   key={item}
//                   className="flex items-start gap-3"
//                 >
//                   <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0A7A78]/10">
//                     <CheckCircle2 className="h-4 w-4 text-[#0A7A78]" />
//                   </div>

//                   <span className="text-sm font-medium leading-6 text-slate-700">
//                     {item}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             {/* CTA */}

//             <div className="mt-9 flex flex-wrap gap-4">
//               {department.appointment_available ? (
//                 <Link
//                   href="/appointments"
//                   className="inline-flex items-center gap-2 rounded-xl bg-[#0A7A78] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(10,122,120,0.20)] transition hover:-translate-y-0.5 hover:bg-[#086967]"
//                 >
//                   Book an Appointment

//                   <ArrowRight className="h-4 w-4" />
//                 </Link>
//               ) : null}

//               <Link
//                 href="/doctors"
//                 className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-[#063B5C] transition hover:border-[#0A7A78] hover:text-[#0A7A78]"
//               >
//                 Meet Our Doctors
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           DEPARTMENT INFO
//       ====================================================== */}

//       <section className="border-y border-slate-100 bg-[#f7fbfb] px-4 py-8 sm:px-6 lg:px-8">
//         <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">

//           {/* Location */}

//           <div className="rounded-2xl bg-white p-5 shadow-sm">
//             <div className="flex items-center gap-3">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A7A78]/10">
//                 <ShieldCheck className="h-5 w-5 text-[#0A7A78]" />
//               </div>

//               <div>
//                 <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
//                   Location
//                 </p>

//                 <p className="mt-1 text-sm font-bold text-[#063B5C]">
//                   {department.location || "Main Hospital"}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Timing */}

//           <div className="rounded-2xl bg-white p-5 shadow-sm">
//             <div className="flex items-center gap-3">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A7A78]/10">
//                 <Clock3 className="h-5 w-5 text-[#0A7A78]" />
//               </div>

//               <div>
//                 <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
//                   Department Timing
//                 </p>

//                 <p className="mt-1 text-sm font-bold text-[#063B5C]">
//                   {department.timing || "N/A"}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Emergency */}

//           <div className="rounded-2xl bg-white p-5 shadow-sm">
//             <div className="flex items-center gap-3">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50">
//                 <HeartPulse className="h-5 w-5 text-red-500" />
//               </div>

//               <div>
//                 <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
//                   Emergency
//                 </p>

//                 <p className="mt-1 text-sm font-bold text-[#063B5C]">
//                   {department.emergency_available
//                     ? "Available 24/7"
//                     : "Not Available"}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Phone */}

//           <div className="rounded-2xl bg-white p-5 shadow-sm">
//             <div className="flex items-center gap-3">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A7A78]/10">
//                 <Phone className="h-5 w-5 text-[#0A7A78]" />
//               </div>

//               <div>
//                 <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
//                   Contact
//                 </p>

//                 <a
//                   href={`tel:${department.phone}`}
//                   className="mt-1 block text-sm font-bold text-[#063B5C] hover:text-[#0A7A78]"
//                 >
//                   {department.phone}
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           STATS
//       ====================================================== */}

//       <section className="border-b border-slate-100 bg-white px-4 py-14 sm:px-6 lg:px-8">
//         <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 md:grid-cols-4">
//           {stats.map((stat) => {
//             const Icon = stat.icon;

//             return (
//               <div
//                 key={stat.label}
//                 className="flex flex-col items-center justify-center text-center md:border-r md:border-slate-200 md:last:border-r-0"
//               >
//                 <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A7A78]/10">
//                   <Icon className="h-5 w-5 text-[#0A7A78]" />
//                 </div>

//                 <p className="mt-3 text-2xl font-bold text-[#063B5C]">
//                   {stat.value}
//                 </p>

//                 <p className="mt-1 text-sm text-slate-500">
//                   {stat.label}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* =====================================================
//           SERVICES
//       ====================================================== */}

//       <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
//         <div className="mx-auto max-w-7xl">

//           <div className="mx-auto max-w-2xl text-center">
//             <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#0A7A78]">
//               What We Offer
//             </span>

//             <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#063B5C] sm:text-4xl">
//               Comprehensive {department.name} Services
//             </h2>

//             <p className="mt-4 text-base leading-7 text-slate-600">
//               Our team provides specialized services designed around
//               accurate diagnosis, personalized treatment, and
//               compassionate patient care.
//             </p>
//           </div>

//           <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             {services.map((service) => {
//               const Icon = service.icon;

//               return (
//                 <div
//                   key={service.title}
//                   className="group rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-[0_15px_50px_rgba(6,59,92,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#0A7A78]/20 hover:shadow-[0_25px_60px_rgba(6,59,92,0.10)]"
//                 >
//                   <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A7A78]/10 transition group-hover:bg-[#0A7A78]">
//                     <Icon className="h-5 w-5 text-[#0A7A78] transition group-hover:text-white" />
//                   </div>

//                   <h3 className="mt-5 text-lg font-bold text-[#063B5C]">
//                     {service.title}
//                   </h3>

//                   <p className="mt-3 text-sm leading-6 text-slate-600">
//                     {service.description}
//                   </p>

//                   <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-[#0A7A78]">
//                     Learn More
//                     <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           TREATMENTS
//       ====================================================== */}

//       <section className="bg-[#f5fbfa] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
//         <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-center">

//           <div>
//             <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#0A7A78]">
//               Conditions & Treatments
//             </span>

//             <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#063B5C] sm:text-4xl">
//               Care Designed Around Your Needs
//             </h2>

//             <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
//               We provide evaluation and treatment support across a wide
//               range of cardiovascular conditions, with care plans
//               tailored to each patient.
//             </p>

//             <div className="mt-8 grid gap-3 sm:grid-cols-2">
//               {treatments.map((treatment) => (
//                 <div
//                   key={treatment}
//                   className="flex items-center gap-3 rounded-xl border border-white bg-white px-4 py-3.5 shadow-sm"
//                 >
//                   <CheckCircle2 className="h-5 w-5 shrink-0 text-[#0A7A78]" />

//                   <span className="text-sm font-semibold text-slate-700">
//                     {treatment}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* SIDE CARD */}

//           <div className="relative overflow-hidden rounded-[2rem] bg-[#063B5C] p-8 shadow-[0_25px_70px_rgba(6,59,92,0.16)] sm:p-10">
//             <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#0A7A78]/20 blur-3xl" />

//             <div className="relative">
//               <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4DD4C6]/10">
//                 <HeartPulse className="h-7 w-7 text-[#4DD4C6]" />
//               </div>

//               <h3 className="mt-7 text-2xl font-bold text-white">
//                 Personalized Care Matters
//               </h3>

//               <p className="mt-4 text-sm leading-7 text-white/65">
//                 Every patient is different. Our specialists work closely
//                 with patients and families to understand individual needs
//                 and develop appropriate care plans.
//               </p>

//               {department.appointment_available ? (
//                 <Link
//                   href="/appointments"
//                   className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#4DD4C6] px-5 py-3 text-sm font-bold text-[#063B5C] transition hover:bg-white"
//                 >
//                   Schedule Consultation

//                   <ArrowRight className="h-4 w-4" />
//                 </Link>
//               ) : null}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           DOCTOR CTA
//       ====================================================== */}
//       {/* =====================================================
//     DOCTOR
// ====================================================== */}



//       <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
//         <div className="mx-auto max-w-7xl">

//           <div className="relative overflow-hidden rounded-[2rem] bg-[#063B5C]">
//             <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#0A7A78]/20 blur-3xl" />

//             <div className="relative px-6 py-12 sm:px-10 lg:px-16 lg:py-14">
//               <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

//                 <div className="max-w-2xl">
//                   <div className="flex items-center gap-2 text-[#4DD4C6]">
//                     <Stethoscope className="h-5 w-5" />

//                     <span className="text-sm font-bold uppercase tracking-[0.15em]">
//                       Expert Medical Team
//                     </span>
//                   </div>

//                   <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
//                     Connect With Our Specialists
//                   </h2>

//                   <p className="mt-4 text-base leading-7 text-white/65">
//                     Speak with our experienced medical team and find the
//                     right care for your healthcare needs.
//                   </p>
//                 </div>

//                 {/* <div className="flex flex-wrap gap-3">
//                   <Link
//                     href={`/doctors/${department.doctor_id}`}
//                     className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#063B5C] transition hover:bg-[#4DD4C6]"
//                   >
//                     View Doctor

//                     <ArrowRight className="h-4 w-4" />
//                   </Link>

//                   {department.appointment_available ? (
//                     <Link
//                       href="/appointments"
//                       className="inline-flex items-center gap-2 rounded-xl bg-[#4DD4C6] px-6 py-3.5 text-sm font-bold text-[#063B5C] transition hover:bg-white"
//                     >
//                       <CalendarDays className="h-4 w-4" />

//                       Book Appointment
//                     </Link>
//                   ) : null}

//                   <a
//                     href={`tel:${department.phone}`}
//                     className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"
//                   >
//                     <Phone className="h-4 w-4" />

//                     Call Us
//                   </a>
//                 </div> */}

//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default DepartmentDetailsPage;


"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock3,
  HeartPulse,
  Phone,
  ShieldCheck,
  Stethoscope,
  CalendarDays,
  MapPin,
  GraduationCap,
  Users,
} from "lucide-react";
import PageHero from "../../components/Pagehero";
import { useParams } from "next/navigation";
import ApiService from "../../src/services/Apiservices";
import useSWR from "swr";

// ============================================================
// SERVICES
// ============================================================

const services = [
  {
    title: "Specialist Consultation",
    description:
      "Expert evaluation and personalized treatment planning from experienced specialists.",
    icon: Stethoscope,
  },
  {
    title: "Advanced Diagnostics",
    description:
      "Modern diagnostic facilities for accurate evaluation and timely treatment.",
    icon: HeartPulse,
  },
  {
    title: "Preventive Care",
    description:
      "Risk assessment and preventive strategies for long-term health and wellbeing.",
    icon: ShieldCheck,
  },
  {
    title: "Emergency Care",
    description:
      "Timely medical support for urgent conditions and emergency situations.",
    icon: Clock3,
  },
];

// ============================================================
// TREATMENTS
// ============================================================

const treatments = [
  "Comprehensive condition evaluation",
  "Specialist consultation",
  "Advanced diagnostic support",
  "Personalized treatment planning",
  "Preventive healthcare",
  "Long-term disease management",
];

// ============================================================
// HIGHLIGHTS
// ============================================================

const highlights = [
  "Experienced medical specialists",
  "Advanced diagnostic facilities",
  "Personalized treatment plans",
  "Patient-centered healthcare",
];

// ============================================================
// MAIN PAGE
// ============================================================

const DepartmentDetailsPage = () => {
  const params = useParams();

  const id = Array.isArray(params?.id)
    ? params.id[0]
    : params?.id;

  // ============================================================
  // API
  // ============================================================

  const { data, error, isLoading } = useSWR(
    id ? `departments/${id}` : null,
    ApiService.get
  );

  // ============================================================
  // API DATA
  // ============================================================

  const department = data?.data;

  // ============================================================
  // DEBUG
  // ============================================================

  console.log("Department API Response:", data);
  console.log("Department:", department);
  console.log("Department Doctors:", department?.doctors);

  // ============================================================
  // LOADING
  // ============================================================

  if (isLoading) {
    return (
      <main className="min-h-screen bg-white">
        <div className="flex min-h-[70vh] items-center justify-center px-6">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#0A7A78]/20 border-t-[#0A7A78]" />

            <p className="mt-5 text-sm font-semibold text-slate-500">
              Loading department...
            </p>
          </div>
        </div>
      </main>
    );
  }

  // ============================================================
  // ERROR
  // ============================================================

  if (error) {
    return (
      <main className="min-h-screen bg-white">
        <div className="flex min-h-[70vh] items-center justify-center px-6">
          <div className="max-w-md text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50">
              <HeartPulse className="h-7 w-7 text-red-500" />
            </div>

            <h1 className="mt-5 text-2xl font-bold text-[#063B5C]">
              Unable to Load Department
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              We could not load the department information.
              Please try again later.
            </p>

            <Link
              href="/departments"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#0A7A78] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#086967]"
            >
              View Departments
              <ArrowRight className="h-4 w-4" />
            </Link>

          </div>
        </div>
      </main>
    );
  }

  // ============================================================
  // NOT FOUND
  // ============================================================

  if (!department) {
    return (
      <main className="min-h-screen bg-white">
        <div className="flex min-h-[70vh] items-center justify-center px-6">
          <div className="text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
              <HeartPulse className="h-7 w-7 text-slate-500" />
            </div>

            <h1 className="mt-5 text-3xl font-bold text-[#063B5C]">
              Department Not Found
            </h1>

            <p className="mt-3 text-slate-500">
              The requested department could not be found.
            </p>

            <Link
              href="/departments"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#0A7A78] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#086967]"
            >
              Back to Departments
              <ArrowRight className="h-4 w-4" />
            </Link>

          </div>
        </div>
      </main>
    );
  }

  // ============================================================
  // SAFE VALUES
  // ============================================================

  const doctors = Array.isArray(department.doctors)
    ? department.doctors
    : [];

  const emergencyAvailable =
    Number(department.emergency_available) === 1 ||
    department.emergency_available === true;

  const appointmentAvailable =
    Number(department.appointment_available) === 1 ||
    department.appointment_available === true;

  // ============================================================
  // STATS
  // ============================================================

  const stats = [
    {
      label: "Emergency Care",
      value: emergencyAvailable ? "24/7" : "Available",
      icon: HeartPulse,
    },
    {
      label: "Appointments",
      value: appointmentAvailable ? "Available" : "Closed",
      icon: CalendarDays,
    },
    {
      label: "Department Timing",
      value: department.timing || "N/A",
      icon: Clock3,
    },
    {
      label: "Specialists",
      value: doctors.length,
      icon: Users,
    },
  ];

  // ============================================================
  // DESCRIPTION
  // ============================================================

  const descriptionParagraphs = department.description
    ? department.description
        .split(/\n\s*\n/)
        .filter(Boolean)
    : [];

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <main className="bg-white">

      {/* =====================================================
          HERO
      ====================================================== */}

      <PageHero
        backgroundImage={
          department.banner_image || department.image
        }
        badge="Department"
        badgeIcon={HeartPulse}
        title={department.name}
        highlight="Specialized Care"
        description={department.short_description}
      />

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">

          {/* IMAGE */}

          <div className="relative">

            <div className="relative overflow-hidden rounded-[2rem]">

              {department.image ? (
                <Image
                  src={department.image}
                  alt={department.name}
                  width={900}
                  height={700}
                  priority
                  className="h-[420px] w-full object-cover sm:h-[500px]"
                />
              ) : (
                <div className="flex h-[420px] items-center justify-center bg-[#f5fbfa] sm:h-[500px]">
                  <HeartPulse className="h-20 w-20 text-[#0A7A78]/30" />
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-[#063B5C]/50 via-transparent to-transparent" />
            </div>

            {/* FLOATING CARD */}

            <div className="absolute -bottom-6 right-5 flex items-center gap-4 rounded-2xl border border-white/70 bg-white/95 px-5 py-4 shadow-[0_20px_60px_rgba(6,59,92,0.16)] backdrop-blur sm:right-8">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A7A78]/10">
                <Award className="h-5 w-5 text-[#0A7A78]" />
              </div>

              <div>
                <p className="text-xl font-bold text-[#063B5C]">
                  Trusted Care
                </p>

                <p className="text-sm text-slate-500">
                  Patient-Centered Healthcare
                </p>
              </div>

            </div>
          </div>

          {/* CONTENT */}

          <div>

            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#0A7A78]">
              About the Department
            </span>

            <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[#063B5C] sm:text-4xl lg:text-5xl">
              Advanced {department.name} Care Under One Roof
            </h2>

            <div className="mt-6 max-w-2xl space-y-5 text-base leading-8 text-slate-600 sm:text-lg">

              {descriptionParagraphs.length > 0 ? (
                descriptionParagraphs.map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))
              ) : (
                <p>
                  Our {department.name} department provides
                  comprehensive medical care with experienced
                  specialists and modern healthcare facilities.
                </p>
              )}

            </div>

            {/* HIGHLIGHTS */}

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >

                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0A7A78]/10">
                    <CheckCircle2 className="h-4 w-4 text-[#0A7A78]" />
                  </div>

                  <span className="text-sm font-medium leading-6 text-slate-700">
                    {item}
                  </span>

                </div>
              ))}

            </div>

            {/* CTA */}

            <div className="mt-9 flex flex-wrap gap-4">

              {appointmentAvailable && (
                <Link
                  href="/appointments"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0A7A78] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(10,122,120,0.20)] transition hover:-translate-y-0.5 hover:bg-[#086967]"
                >
                  Book an Appointment
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}

              <Link
                href="/doctors"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-[#063B5C] transition hover:border-[#0A7A78] hover:text-[#0A7A78]"
              >
                Meet Our Doctors
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          DEPARTMENT INFORMATION
      ====================================================== */}

      <section className="border-y border-slate-100 bg-[#f7fbfb] px-4 py-8 sm:px-6 lg:px-8">

        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {/* LOCATION */}

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A7A78]/10">
                <MapPin className="h-5 w-5 text-[#0A7A78]" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Location
                </p>

                <p className="mt-1 text-sm font-bold text-[#063B5C]">
                  {department.location || "Main Hospital"}
                </p>
              </div>

            </div>
          </div>

          {/* TIMING */}

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A7A78]/10">
                <Clock3 className="h-5 w-5 text-[#0A7A78]" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Department Timing
                </p>

                <p className="mt-1 text-sm font-bold text-[#063B5C]">
                  {department.timing || "N/A"}
                </p>
              </div>

            </div>
          </div>

          {/* EMERGENCY */}

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50">
                <HeartPulse className="h-5 w-5 text-red-500" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Emergency
                </p>

                <p className="mt-1 text-sm font-bold text-[#063B5C]">
                  {emergencyAvailable
                    ? "Available 24/7"
                    : "Not Available"}
                </p>
              </div>

            </div>
          </div>

          {/* PHONE */}

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A7A78]/10">
                <Phone className="h-5 w-5 text-[#0A7A78]" />
              </div>

              <div>

                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Contact
                </p>

                {department.phone ? (
                  <a
                    href={`tel:${department.phone}`}
                    className="mt-1 block text-sm font-bold text-[#063B5C] hover:text-[#0A7A78]"
                  >
                    {department.phone}
                  </a>
                ) : (
                  <p className="mt-1 text-sm font-bold text-[#063B5C]">
                    Not Available
                  </p>
                )}

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}

      <section className="border-b border-slate-100 bg-white px-4 py-14 sm:px-6 lg:px-8">

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 md:grid-cols-4">

          {stats.map((stat) => {

            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center text-center md:border-r md:border-slate-200 md:last:border-r-0"
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A7A78]/10">
                  <Icon className="h-5 w-5 text-[#0A7A78]" />
                </div>

                <p className="mt-3 text-2xl font-bold text-[#063B5C]">
                  {stat.value}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {stat.label}
                </p>

              </div>
            );
          })}

        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#0A7A78]">
              What We Offer
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#063B5C] sm:text-4xl">
              Comprehensive {department.name} Services
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Our team provides specialized services designed around
              accurate diagnosis, personalized treatment, and
              compassionate patient care.
            </p>

          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {services.map((service) => {

              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-[0_15px_50px_rgba(6,59,92,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#0A7A78]/20 hover:shadow-[0_25px_60px_rgba(6,59,92,0.10)]"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A7A78]/10 transition group-hover:bg-[#0A7A78]">

                    <Icon className="h-5 w-5 text-[#0A7A78] transition group-hover:text-white" />

                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#063B5C]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-[#0A7A78]">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          TREATMENTS
      ====================================================== */}

      <section className="bg-[#f5fbfa] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-center">

          <div>

            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#0A7A78]">
              Conditions & Treatments
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#063B5C] sm:text-4xl">
              Care Designed Around Your Needs
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              We provide evaluation and treatment support across a
              wide range of conditions, with care plans tailored
              to each patient.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              {treatments.map((treatment) => (
                <div
                  key={treatment}
                  className="flex items-center gap-3 rounded-xl border border-white bg-white px-4 py-3.5 shadow-sm"
                >

                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#0A7A78]" />

                  <span className="text-sm font-semibold text-slate-700">
                    {treatment}
                  </span>

                </div>
              ))}

            </div>

          </div>

          {/* SIDE CARD */}

          <div className="relative overflow-hidden rounded-[2rem] bg-[#063B5C] p-8 shadow-[0_25px_70px_rgba(6,59,92,0.16)] sm:p-10">

            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#0A7A78]/20 blur-3xl" />

            <div className="relative">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4DD4C6]/10">
                <HeartPulse className="h-7 w-7 text-[#4DD4C6]" />
              </div>

              <h3 className="mt-7 text-2xl font-bold text-white">
                Personalized Care Matters
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/65">
                Every patient is different. Our specialists work
                closely with patients and families to understand
                individual needs and develop appropriate care plans.
              </p>

              {appointmentAvailable && (
                <Link
                  href="/appointments"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#4DD4C6] px-5 py-3 text-sm font-bold text-[#063B5C] transition hover:bg-white"
                >
                  Schedule Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          DEPARTMENT DOCTORS
      ====================================================== */}

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

        <div className="mx-auto max-w-7xl">

          {/* HEADER */}

          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

            <div className="max-w-2xl">

              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#0A7A78]">
                Our Medical Team
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#063B5C] sm:text-4xl">
                Meet Our {department.name} Specialists
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Meet our experienced specialists dedicated to
                providing personalized care and advanced treatment
                for our patients.
              </p>

            </div>

            <Link
              href="/doctors"
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-[#063B5C] transition hover:border-[#0A7A78] hover:text-[#0A7A78]"
            >
              View All Doctors
              <ArrowRight className="h-4 w-4" />
            </Link>

          </div>

          {/* DOCTORS */}

          {doctors.length > 0 ? (

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {doctors.map((doctor) => {

                /*
                 * API image can be:
                 * /uploads/doctors/abc.jpg
                 *
                 * If your backend is separate domain, change this
                 * to your API base URL.
                 */

                const doctorImage = doctor.image_url;

                return (
                  <div
                    key={doctor.id}
                    className="group overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white shadow-[0_15px_50px_rgba(6,59,92,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(6,59,92,0.12)]"
                  >

                    {/* IMAGE */}

                    <div className="relative h-[320px] overflow-hidden bg-[#f5fbfa]">

                      {doctorImage ? (

                        <Image
                          src={doctorImage}
                          alt={doctor.name || "Doctor"}
                          fill
                          className="object-cover object-top transition duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />

                      ) : (

                        <div className="flex h-full items-center justify-center">

                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#0A7A78]/10">
                            <Stethoscope className="h-9 w-9 text-[#0A7A78]" />
                          </div>

                        </div>

                      )}

                      {/* IMAGE OVERLAY */}

                      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#063B5C]/70 to-transparent" />

                      {/* EXPERIENCE */}

                      <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl bg-white/95 px-3 py-2 shadow-lg backdrop-blur">

                        <Award className="h-4 w-4 text-[#0A7A78]" />

                        <span className="text-xs font-bold text-[#063B5C]">
                          {doctor.experience_years || 0}+ Years Experience
                        </span>

                      </div>

                    </div>

                    {/* CONTENT */}

                    <div className="p-6">

                      <div className="flex items-start justify-between gap-4">

                        <div>

                          <h3 className="text-xl font-bold text-[#063B5C]">
                            {doctor.name}
                          </h3>

                          <p className="mt-2 text-sm font-semibold text-[#0A7A78]">
                            {department.name} Specialist
                          </p>

                        </div>

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0A7A78]/10">
                          <Stethoscope className="h-5 w-5 text-[#0A7A78]" />
                        </div>

                      </div>

                      {/* QUALIFICATION */}

                      {doctor.qualification && (
                        <div className="mt-5 rounded-xl bg-slate-50 px-4 py-3">

                          <div className="flex items-center gap-2">

                            <GraduationCap className="h-4 w-4 text-[#0A7A78]" />

                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                              Qualification
                            </p>

                          </div>

                          <p className="mt-1 text-sm font-semibold text-slate-700">
                            {doctor.qualification}
                          </p>

                        </div>
                      )}

                      {/* ACTIONS */}

                      <div className="mt-5 flex gap-3">

                        <Link
                          href={`/doctors/${doctor.id}`}
                          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#0A7A78] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#086967]"
                        >
                          View Profile
                          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                        </Link>

                        {appointmentAvailable && (
                          <Link
                            href={`/appointments?doctor_id=${doctor.id}&department_id=${department.id}`}
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-[#063B5C] transition hover:border-[#0A7A78] hover:bg-[#0A7A78]/5 hover:text-[#0A7A78]"
                            title="Book Appointment"
                          >
                            <CalendarDays className="h-5 w-5" />
                          </Link>
                        )}

                      </div>

                    </div>
                  </div>
                );
              })}

            </div>

          ) : (

            /* EMPTY STATE */

            <div className="mt-12 rounded-[1.5rem] border border-dashed border-slate-200 bg-slate-50 px-6 py-14 text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0A7A78]/10">
                <Stethoscope className="h-6 w-6 text-[#0A7A78]" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#063B5C]">
                No Doctors Available
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                There are currently no doctors assigned to this
                department.
              </p>

            </div>
          )}

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-[2rem] bg-[#063B5C]">

            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#0A7A78]/20 blur-3xl" />

            <div className="relative px-6 py-12 sm:px-10 lg:px-16 lg:py-14">

              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                <div className="max-w-2xl">

                  <div className="flex items-center gap-2 text-[#4DD4C6]">

                    <Stethoscope className="h-5 w-5" />

                    <span className="text-sm font-bold uppercase tracking-[0.15em]">
                      Expert Medical Team
                    </span>

                  </div>

                  <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Connect With Our Specialists
                  </h2>

                  <p className="mt-4 text-base leading-7 text-white/65">
                    Speak with our experienced medical team and find
                    the right care for your healthcare needs.
                  </p>

                </div>

                <div className="flex flex-wrap gap-3">

                  {appointmentAvailable && (
                    <Link
                      href="/appointments"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#4DD4C6] px-6 py-3.5 text-sm font-bold text-[#063B5C] transition hover:bg-white"
                    >
                      <CalendarDays className="h-4 w-4" />
                      Book Appointment
                    </Link>
                  )}

                  {department.phone && (
                    <a
                      href={`tel:${department.phone}`}
                      className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"
                    >
                      <Phone className="h-4 w-4" />
                      Call Us
                    </a>
                  )}

                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
};

export default DepartmentDetailsPage;
