
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  CalendarDays,
  CheckCircle2,
  Clock3,
  HeartHandshake,
  Microscope,
  ShieldCheck,
} from "lucide-react";
import HeroSlider from './../components/HeroSlider'
import HospitalStats from './../components/HospitalStats'
import DoctorCard from './../components/DoctorCard'
import DepartmentCard from './../components/DepartmentCard'
import PatientTestimonials from './../components/PatientTestimonials'
import features from "./../data/aboutFeatures.json";
import facilities from './../data/facilities'
import {useDepartments} from './../api/hooks/useDepartments'
import {useDoctors} from './../api/hooks/useDoctors'
import { hospitalStats } from "../data/stats";

const iconMap = {
  HeartHandshake,
  Award,
  Microscope,
  Clock3,
};



export default function Homeclient() {

 
  const {
    departments,
    error: departmentError,
    isLoading: departmentsLoading,
  } = useDepartments();

  const {
    doctors,
    error: doctorError,
    isLoading: doctorsLoading,
  } = useDoctors();

  console.log(departments)

  return (
    <main className="overflow-hidden bg-white text-slate-700">
      {/* =========================================================
          HERO
      ========================================================== */}
      <HeroSlider />  
      

      {/* =========================================================
          QUICK ACTIONS
      ========================================================== */}
      {/* <section className="relative z-20 -mt-8 px-4">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl shadow-slate-900/10 sm:grid-cols-3">
          <Link
            href="/appointment"
            className="group flex items-center gap-4 border-b border-slate-100 p-6 transition hover:bg-teal-50 sm:border-b-0 sm:border-r"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-[#0A7A78]">
              <CalendarDays />
            </div>

            <div>
              <p className="font-black text-[#063B5C]">
                Book Appointment
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Schedule your visit
              </p>
            </div>

            <ChevronRight className="ml-auto h-5 w-5 text-slate-400 transition group-hover:translate-x-1" />
          </Link>

          <Link
            href="/doctors"
            className="group flex items-center gap-4 border-b border-slate-100 p-6 transition hover:bg-blue-50 sm:border-b-0 sm:border-r"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Users />
            </div>

            <div>
              <p className="font-black text-[#063B5C]">Find a Doctor</p>
              <p className="mt-1 text-xs text-slate-500">
                Meet our specialists
              </p>
            </div>

            <ChevronRight className="ml-auto h-5 w-5 text-slate-400 transition group-hover:translate-x-1" />
          </Link>

          <Link
            href="/emergency"
            className="group flex items-center gap-4 p-6 transition hover:bg-red-50"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500">
              <Phone />
            </div>

            <div>
              <p className="font-black text-[#063B5C]">
                Emergency Care
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Available 24/7
              </p>
            </div>

            <ChevronRight className="ml-auto h-5 w-5 text-slate-400 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </section> */}

      {/* =========================================================
          STATS
      ========================================================== */}
      {/* <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"> */}
        {/* <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
          {hospitalStats.map(([number, label], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative text-center"
            >
              <h3 className="text-4xl font-black text-[#0A7A78] sm:text-5xl">
                {number}
              </h3>

              <p className="mt-2 text-sm font-medium text-slate-500">
                {label}
              </p>

              {index !== stats.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-slate-200 md:block" />
              )}
            </motion.div>
          ))}
        </div> */}
      {/* </section> */}
      <section className="mt-5">
        <HospitalStats />  
      </section>

      {/* =========================================================
          ABOUT
      ========================================================== */}
      <section className="relative overflow-hidden bg-slate-50 py-24">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-teal-100/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[430px] overflow-hidden rounded-[2.5rem] shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"
                alt="Hospital interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#063B5C]/60 to-transparent" />
            </div>

            <div className="absolute -bottom-7 -right-3 rounded-2xl bg-[#0A7A78] p-5 text-white shadow-xl sm:-right-7">
              <Award className="h-8 w-8" />

              <p className="mt-2 text-sm font-black">
                Excellence in
                <br />
                Healthcare
              </p>
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0A7A78]">
              About Our Hospital
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#063B5C] sm:text-4xl lg:text-5xl">
             Baderia Metro Prime
              <span className="block text-[#0A7A78]">
                Multi Speciality Hospital
              </span>
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Baderia Metro Prime Hospital is committed to delivering high-quality healthcare with
              compassion, clinical excellence and a patient-first approach.
              Our multidisciplinary team brings together experienced healthcare professionals, advanced
              medical technology and modern infrastructure to provide comprehensive care across
              specialties. We focus on delivering safe, personalized and seamless healthcare for patients
              and their families—supporting them through every step of their healthcare journey.
            </p>

           

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                "Experienced medical specialists",
                "Advanced treatment technology",
                "Patient-centered healthcare",
                "Modern hospital infrastructure",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0A7A78]" />

                  <span className="text-sm font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#0A7A78]"
            >
              Learn More About Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          DEPARTMENTS
      ========================================================== */}
      <section className="py-24 bg-blue-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0A7A78]">
                Our Departments
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#063B5C] sm:text-4xl">
                Specialized care for
                <span className="text-[#0A7A78]"> every need.</span>
              </h2>
            </div>

            <Link
              href="/department"
              className="flex items-center gap-2 font-bold text-[#0A7A78]"
            >
              View All Departments
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((department, index) => {
              const Icon = department.icon;

              return (
                <motion.div
                  key={department.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group rounded-[1.5rem] border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${department.color} transition duration-300 group-hover:scale-110`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-xl font-black text-[#063B5C]">
                    {department.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {department.description}
                  </p>

                  <Link
                    href="/departments"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0A7A78]"
                  >
                    Explore Department
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              );
            })}
          </div> */}
           <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {departments?.slice(0, 8).map((department, index) => (
            <DepartmentCard
              key={department.id}
              department={department}
              index={index}
              href={`/department/${department.id}`}
            />
          ))}
        </div>
        </div>
      </section>

      


      {/* =========================================================
          DOCTORS
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#063B5C] py-24 text-white">
        <div className="absolute right-[-100px] top-[-100px] h-80 w-80 rounded-full bg-teal-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-teal-300">
                Our Specialists
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
                Meet our expert doctors.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
                Experienced specialists dedicated to delivering personalized,
                compassionate and evidence-based medical care.
              </p>
            </div>

            <Link
              href="/doctors"
              className="flex items-center gap-2 font-bold text-teal-300"
            >
              View All Doctors
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

         <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {doctors?.slice(1, 5).map((doctor, index) => (
            <DoctorCard
              key={doctor.id || doctor.name || index}
              doctor={doctor}
              index={index}
            />
          ))}
        </div>

        </div>
      </section>

      {/* =========================================================
          WHY CHOOSE US
      ========================================================== */}
      <section className="py-24 bg-amber-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0A7A78]">
              Why Choose Us
            </p>

            <h2 className="mt-4 text-3xl font-black text-[#063B5C] sm:text-4xl">
              Everything you need for
              <span className="text-[#0A7A78]"> better healthcare.</span>
            </h2>
          </div>

          {/* <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: HeartHandshake,
                title: "Patient First",
                text: "Every decision starts with the needs, safety and comfort of our patients.",
              },
              {
                icon: Award,
                title: "Expert Doctors",
                text: "Experienced specialists across multiple medical disciplines.",
              },
              {
                icon: Microscope,
                title: "Advanced Technology",
                text: "Modern diagnostic and treatment technologies for better outcomes.",
              },
              {
                icon: Clock3,
                title: "24/7 Support",
                text: "Round-the-clock emergency and critical care services.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -6 }}
                  className="rounded-[1.5rem] border border-slate-100 bg-slate-50 p-7 text-center transition shadow-sm hover:bg-white hover:shadow-xl"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#0A7A78] shadow-sm">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-5 font-black text-[#063B5C]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div> */}
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((item, index) => {
              const Icon = iconMap[item.icon];

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -5,
                    transition: {
                      duration: 0.3,
                      ease: "easeOut",
                    },
                  }}
                  className={`
                    group relative overflow-visible
                    rounded-2xl border border-slate-100
                    bg-white px-5 pb-5 pt-8
                    shadow-sm
                    transition-all duration-500
                    ${item.hoverBg}
                    hover:border-transparent
                    hover:shadow-xl
                    cursor-pointer
                  `}
                >
                  {/* Floating Icon */}
                  <motion.div
                    className={`
                      absolute -top-6 left-1/2
                      flex h-12 w-12
                      -translate-x-1/2
                      items-center justify-center
                      rounded-xl
                      ${item.bg}
                      ${item.color}
                      shadow-md
                      transition-all duration-500
                      group-hover:scale-110
                      group-hover:rotate-3
                      group-hover:bg-white
                    `}
                  >
                    <Icon
                      className="
                        h-6 w-6
                        transition-all duration-500
                        group-hover:scale-110
                      "
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="transition-colors duration-500">
                    <h3
                      className="
                        text-base font-black
                        text-[#063B5C]
                        transition-colors duration-500
                        group-hover:text-white
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-2 text-xs leading-6
                        text-slate-500
                        transition-colors duration-500
                        group-hover:text-white/90
                      "
                    >
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>



        </div>
      </section>

      {/* =========================================================
          FACILITIES
      ========================================================== */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0A7A78]">
                Hospital Facilities
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#063B5C] sm:text-4xl">
                Modern facilities designed
                <span className="block text-[#0A7A78]">
                  for your comfort.
                </span>
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                From advanced diagnostics to comfortable patient rooms, our
                infrastructure is designed to support high-quality medical
                care and a better recovery experience.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {facilities.map((facility) => {
                  const Icon = facility.icon;

                  return (
                    <div
                      key={facility.title}
                      className="rounded-2xl bg-white p-5 shadow-sm"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-[#0A7A78]">
                        <Icon className="h-5 w-5" />
                      </div>

                      <p className="mt-4 text-sm font-black text-[#063B5C]">
                        {facility.title}
                      </p>

                      <p className="mt-2 text-xs leading-6 text-slate-500">
                        {facility.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[480px] overflow-hidden rounded-[2.5rem] shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1516841273335-e39b37888115"
                  alt="Modern hospital facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#063B5C]/70 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/15 p-5 text-white backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A7A78]">
                      <ShieldCheck className="h-6 w-6" />
                    </div>

                    <div>
                      <p className="font-black">
                        Safe & Comfortable Environment
                      </p>

                      <p className="mt-1 text-sm text-white/70">
                        Designed around patient comfort and recovery
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* patient PatientTestimonials  */}
      <PatientTestimonials />


      {/* =========================================================
          FINAL APPOINTMENT CTA
      ========================================================== */}
      <section className="bg-slate-50 px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-[#0A7A78]">
            <CalendarDays className="h-7 w-7" />
          </div>

          <h2 className="mt-6 text-3xl font-black text-[#063B5C] sm:text-4xl">
            Take the first step toward better health.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Book an appointment with our experienced specialists and get
            personalized medical care for you and your family.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/appointment"
              className="flex items-center gap-2 rounded-xl bg-[#0A7A78] px-7 py-4 font-black text-white shadow-lg shadow-teal-900/20 transition hover:-translate-y-1 hover:bg-[#086663]"
            >
              <CalendarDays className="h-5 w-5" />
              Book Appointment
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 font-black text-[#063B5C] transition hover:border-teal-300 hover:text-[#0A7A78]"
            >
              Contact Hospital
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
