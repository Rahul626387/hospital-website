// "use client";

// import { motion } from "framer-motion";
// import {
//   HeartPulse,
//   ShieldCheck,
//   Users,
//   Award,
//   ArrowRight,
//   CheckCircle2,
//   Target,
//   Eye,
//   Stethoscope,
// } from "lucide-react";
// import Link from "next/link";

// const stats = [
//   { value: "24/7", label: "Emergency Care" },
//   { value: "50+", label: "Expert Specialists" },
//   { value: "10K+", label: "Patients Served" },
//   { value: "15+", label: "Years of Trust" },
// ];

// const values = [
//   {
//     icon: HeartPulse,
//     title: "Compassionate Care",
//     description:
//       "We believe every patient deserves personal attention, respect, and compassionate healthcare.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Trusted Healthcare",
//     description:
//       "Our commitment is to provide safe, reliable, and quality medical care for every patient.",
//   },
//   {
//     icon: Users,
//     title: "Expert Team",
//     description:
//       "Our experienced doctors and healthcare professionals work together for better outcomes.",
//   },
// ];

// export default function Aboutpage() {
//   return (
//     <main className="overflow-hidden bg-white">
//       {/* ================= HERO ================= */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50">
//         <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl" />
//         <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />

//         <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
//           <div className="mx-auto max-w-3xl text-center">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-4 py-2 text-sm font-semibold text-[#0A7A78] shadow-sm"
//             >
//               <Stethoscope className="h-4 w-4" />
//               About Baderia Metro Prime
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.1 }}
//               className="mt-6 text-4xl font-bold tracking-tight text-[#063B5C] sm:text-5xl lg:text-6xl"
//             >
//               Healthcare Built Around
//               <span className="block text-[#0A7A78]">
//                 People & Compassion.
//               </span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 25 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//               className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg"
//             >
//               At Baderia Metro Prime Hospital, we combine experienced medical
//               professionals, modern healthcare facilities, and compassionate
//               care to support every patient throughout their healthcare journey.
//             </motion.p>
//           </div>
//         </div>
//       </section>

//       {/* ================= INTRO SECTION ================= */}
//       <section className="py-20 lg:py-28">
//         <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
//           {/* Left Visual */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.7 }}
//             className="relative"
//           >
//             <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0A7A78] to-[#063B5C] p-8 sm:min-h-[500px]">
//               <div className="flex h-full min-h-[360px] items-center justify-center sm:min-h-[430px]">
//                 <div className="text-center text-white">
//                   <motion.div
//                     animate={{ y: [0, -12, 0] }}
//                     transition={{
//                       duration: 3,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                     }}
//                     className="mx-auto flex h-28 w-28 items-center justify-center rounded-3xl bg-white/15 backdrop-blur-sm"
//                   >
//                     <HeartPulse className="h-14 w-14" />
//                   </motion.div>

//                   <h2 className="mt-7 text-3xl font-bold">
//                     Care You Can Trust
//                   </h2>

//                   <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-white/70">
//                     Dedicated to delivering quality healthcare with compassion,
//                     technology and expertise.
//                   </p>
//                 </div>
//               </div>

//               {/* Floating Card */}
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.4 }}
//                 className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md"
//               >
//                 <div className="flex items-center gap-4">
//                   <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#0A7A78]">
//                     <Award className="h-6 w-6" />
//                   </div>

//                   <div>
//                     <p className="font-bold text-white">
//                       Committed to Excellence
//                     </p>
//                     <p className="mt-1 text-sm text-white/70">
//                       Quality healthcare for every patient.
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>

//             <div className="absolute -bottom-5 -right-5 h-24 w-24 rounded-3xl bg-teal-100 -z-10" />
//           </motion.div>

//           {/* Right Content */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.7 }}
//           >
//             <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A7A78]">
//               Who We Are
//             </p>

//             <h2 className="mt-4 text-3xl font-bold leading-tight text-[#063B5C] sm:text-4xl">
//               A Better Experience for
//               <span className="block">Better Health.</span>
//             </h2>

//             <p className="mt-6 leading-7 text-slate-600">
//               Baderia Metro Prime Hospital is focused on providing accessible,
//               patient-centered healthcare in a supportive and professional
//               environment.
//             </p>

//             <p className="mt-4 leading-7 text-slate-600">
//               From diagnosis and treatment to recovery and ongoing care, our
//               team works together to ensure that every patient receives the
//               attention and medical support they deserve.
//             </p>

//             <div className="mt-7 space-y-4">
//               {[
//                 "Patient-first approach to healthcare",
//                 "Experienced doctors and medical professionals",
//                 "Modern facilities and advanced medical support",
//                 "Compassionate care at every step",
//               ].map((item, index) => (
//                 <motion.div
//                   key={item}
//                   initial={{ opacity: 0, x: 15 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="flex items-center gap-3"
//                 >
//                   <CheckCircle2 className="h-5 w-5 shrink-0 text-[#0A7A78]" />
//                   <span className="text-sm font-medium text-slate-700">
//                     {item}
//                   </span>
//                 </motion.div>
//               ))}
//             </div>

//             <Link
//               href="/contact"
//               className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-[#0A7A78] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#086663]"
//             >
//               Get In Touch
//               <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//             </Link>
//           </motion.div>
//         </div>
//       </section>

//       {/* ================= STATS ================= */}
//       <section className="bg-[#063B5C] py-12 sm:py-16">
//         <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={stat.label}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="text-center"
//             >
//               <h3 className="text-3xl font-bold text-white sm:text-4xl">
//                 {stat.value}
//               </h3>
//               <p className="mt-2 text-sm text-white/65">{stat.label}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ================= MISSION & VISION ================= */}
//       <section className="bg-slate-50 py-20 lg:py-28">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 25 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mx-auto max-w-2xl text-center"
//           >
//             <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A7A78]">
//               Our Purpose
//             </p>

//             <h2 className="mt-4 text-3xl font-bold text-[#063B5C] sm:text-4xl">
//               Driven by Care. Guided by Excellence.
//             </h2>
//           </motion.div>

//           <div className="mt-12 grid gap-6 lg:grid-cols-2">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100"
//             >
//               <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-[#0A7A78]">
//                 <Target className="h-7 w-7" />
//               </div>

//               <h3 className="mt-6 text-2xl font-bold text-[#063B5C]">
//                 Our Mission
//               </h3>

//               <p className="mt-4 leading-7 text-slate-600">
//                 To provide reliable, compassionate, and high-quality healthcare
//                 while continuously improving the patient experience through
//                 medical excellence and innovation.
//               </p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="rounded-3xl bg-[#0A7A78] p-8 text-white shadow-lg shadow-teal-900/10"
//             >
//               <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
//                 <Eye className="h-7 w-7" />
//               </div>

//               <h3 className="mt-6 text-2xl font-bold">Our Vision</h3>

//               <p className="mt-4 leading-7 text-white/75">
//                 To become a trusted healthcare destination known for clinical
//                 excellence, compassionate care, and a strong commitment to the
//                 health and well-being of our community.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ================= VALUES ================= */}
//       <section className="py-20 lg:py-28">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A7A78]">
//               Why Choose Us
//             </p>

//             <h2 className="mt-4 text-3xl font-bold text-[#063B5C] sm:text-4xl">
//               Healthcare That Puts You First.
//             </h2>
//           </div>

//           <div className="mt-12 grid gap-6 md:grid-cols-3">
//             {values.map((value, index) => {
//               const Icon = value.icon;

//               return (
//                 <motion.div
//                   key={value.title}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, amount: 0.2 }}
//                   transition={{ delay: index * 0.15 }}
//                   whileHover={{ y: -8 }}
//                   className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-xl hover:shadow-slate-200/50"
//                 >
//                   <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-[#0A7A78] transition group-hover:bg-[#0A7A78] group-hover:text-white">
//                     <Icon className="h-7 w-7" />
//                   </div>

//                   <h3 className="mt-6 text-xl font-bold text-[#063B5C]">
//                     {value.title}
//                   </h3>

//                   <p className="mt-3 text-sm leading-6 text-slate-600">
//                     {value.description}
//                   </p>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ================= CTA ================= */}
//       <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
//         <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#063B5C] to-[#0A7A78] px-6 py-14 text-center sm:px-12 lg:py-20">
//           <motion.div
//             initial={{ opacity: 0, y: 25 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl font-bold text-white sm:text-4xl">
//               Your Health Deserves the Best Care.
//             </h2>

//             <p className="mx-auto mt-4 max-w-2xl text-white/70">
//               Connect with our healthcare team and take the next step towards
//               better health.
//             </p>

//             <Link
//               href="/appointment"
//               className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-[#063B5C] transition hover:-translate-y-1 hover:shadow-xl"
//             >
//               Book an Appointment
//               <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//             </Link>
//           </motion.div>
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Check,
  ChevronRight,
  Clock3,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Users,
  Activity,
  Microscope,
  CalendarCheck,
} from "lucide-react";

const features = [
  {
    number: "01",
    icon: HeartPulse,
    title: "Patient First",
    description:
      "Every decision begins with the comfort, safety and well-being of our patients.",
  },
  {
    number: "02",
    icon: Users,
    title: "Expert Care",
    description:
      "Our healthcare professionals work together to provide thoughtful and reliable care.",
  },
  {
    number: "03",
    icon: Activity,
    title: "Modern Approach",
    description:
      "Advanced facilities and modern healthcare practices support better patient experiences.",
  },
];

const journey = [
  {
    icon: CalendarCheck,
    title: "Consultation",
    description: "Understanding your health needs",
  },
  {
    icon: Microscope,
    title: "Diagnosis",
    description: "Careful evaluation and assessment",
  },
  {
    icon: Stethoscope,
    title: "Treatment",
    description: "Personalized medical care",
  },
  {
    icon: HeartPulse,
    title: "Recovery",
    description: "Supporting you at every step",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* ================= HERO ================= */}
      <section className="relative border-b border-slate-100 bg-[#F7FAFA]">
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
          <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-teal-100/60 blur-3xl" />
          <div className="absolute -right-24 -top-20 h-96 w-96 rounded-full bg-cyan-100/50 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-24">
          {/* Hero Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-sm font-medium text-[#0A7A78]"
            >
              <Link
                href="/"
                className="transition hover:text-[#063B5C]"
              >
                Home
              </Link>

              <ChevronRight className="h-4 w-4" />
              <span>About Us</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0A7A78] shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-[#0A7A78]" />
              Baderia Metro Prime Hospital
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-[#063B5C] sm:text-5xl lg:text-6xl"
            >
              Where Better Care
              <span className="block text-[#0A7A78]">
                Begins With You.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg"
            >
              Healthcare is more than treatment. It is trust, understanding,
              expertise and being there when you need us the most.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                href="/appointment"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#0A7A78] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-900/10 transition-all hover:-translate-y-1 hover:bg-[#086663]"
              >
                Book an Appointment
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#063B5C] transition hover:border-[#0A7A78] hover:text-[#0A7A78]"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-900/10">
              <Image
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1000&q=85"
                alt="Healthcare professional"
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#063B5C]/50 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/15 p-5 text-white backdrop-blur-md">
                <p className="text-sm font-medium text-white/75">
                  Our Promise
                </p>
                <p className="mt-1 text-xl font-bold">
                  Care that makes a difference.
                </p>
              </div>
            </div>

            {/* Floating Trust Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl sm:-left-10"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-[#0A7A78]">
                <ShieldCheck className="h-6 w-6" />
              </div>

              <div>
                <p className="text-sm font-bold text-[#063B5C]">
                  Trusted Healthcare
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  Compassion in every care
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[500px]"
          >
            <div className="absolute left-0 top-0 h-[390px] w-[82%] overflow-hidden rounded-[2rem]">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85"
                alt="Doctor consultation"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-0 right-0 h-[290px] w-[60%] overflow-hidden rounded-[1.75rem] border-8 border-white shadow-2xl shadow-slate-900/10">
              <Image
                src="https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=800&q=85"
                alt="Medical team"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-8 left-6 rounded-2xl bg-[#063B5C] px-6 py-5 text-white shadow-xl">
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8 text-[#4DD4C6]" />

                <div>
                  <p className="text-xl font-bold">Committed</p>
                  <p className="text-sm text-white/65">To better healthcare</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#0A7A78]">
              Our Story
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-[#063B5C] sm:text-4xl lg:text-5xl">
              Healthcare With a
              <span className="block">Human Touch.</span>
            </h2>

            <p className="mt-6 leading-7 text-slate-600">
              At Baderia Metro Prime Hospital, we believe quality healthcare
              should feel personal. Every patient comes to us with a unique
              story, and our responsibility is to listen, understand and guide
              them with the right care.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Our team brings together medical expertise, modern healthcare
              practices and a compassionate approach to create a better
              experience from consultation to recovery.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Patient-centered approach",
                "Dedicated healthcare team",
                "Modern medical facilities",
                "Support at every step",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-50 text-[#0A7A78]">
                    <Check className="h-4 w-4" />
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-2 text-sm font-bold text-[#0A7A78]"
            >
              Talk to Our Team
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= CARE STRIP ================= */}
      <section className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto grid max-w-7xl divide-y divide-slate-200 px-4 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { icon: Clock3, title: "24/7 Support", text: "Care when needed" },
            { icon: Users, title: "Expert Team", text: "Dedicated professionals" },
            {
              icon: Activity,
              title: "Modern Care",
              text: "Advanced approach",
            },
            {
              icon: HeartPulse,
              title: "Patient First",
              text: "Your health matters",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-center justify-center gap-3 py-7 sm:py-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#0A7A78] shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-bold text-[#063B5C]">{item.title}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#0A7A78]">
                Why Choose Us
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-[#063B5C] sm:text-4xl lg:text-5xl">
                A Better Standard
                <span className="block">of Care.</span>
              </h2>
            </div>

            <p className="max-w-md leading-7 text-slate-600">
              We focus on creating a healthcare experience where expertise and
              compassion work together.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-xl hover:shadow-slate-200/60"
                >
                  <span className="absolute right-6 top-5 text-6xl font-bold leading-none text-slate-100 transition group-hover:text-teal-50">
                    {feature.number}
                  </span>

                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-[#0A7A78] transition duration-300 group-hover:bg-[#0A7A78] group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="relative mt-8 text-xl font-bold text-[#063B5C]">
                    {feature.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-6 text-slate-600">
                    {feature.description}
                  </p>

                  <div className="relative mt-7 h-px w-full bg-slate-100">
                    <div className="h-full w-0 bg-[#0A7A78] transition-all duration-500 group-hover:w-full" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= PATIENT JOURNEY ================= */}
      <section className="relative overflow-hidden bg-[#063B5C] py-20 sm:py-24 lg:py-28">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#4DD4C6]">
              Your Healthcare Journey
            </p>

            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              With You at Every Step.
            </h2>

            <p className="mt-5 leading-7 text-white/65">
              From your first consultation to ongoing care, we are here to
              support your journey towards better health.
            </p>
          </div>

          <div className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {journey.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#4DD4C6]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <p className="mt-6 text-xs font-bold tracking-[0.18em] text-[#4DD4C6]">
                    0{index + 1}
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/60">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#0A7A78] px-6 py-16 text-center sm:px-12 lg:py-20"
        >
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-white/5 blur-2xl" />
          <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#063B5C]/20 blur-2xl" />

          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
              <HeartPulse className="h-7 w-7" />
            </div>

            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
              Your Health Is Worth It.
            </h2>

            <p className="mt-4 leading-7 text-white/70">
              Take the first step towards better healthcare. Our team is ready
              to support you.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/appointment"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#063B5C] transition hover:-translate-y-1 hover:shadow-xl"
              >
                Book an Appointment
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}