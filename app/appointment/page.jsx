"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  HeartPulse,
  Mail,
  Phone,
  ShieldCheck,
  Stethoscope,
  User,
} from "lucide-react";
import Link from "next/link";
import {useDepartments} from './../api/hooks/useDepartments'
import {useDoctors} from './../api/hooks/useDoctors'
import ApiService from "../src/services/Apiservices";
import toast from "react-hot-toast";
import PageHero from "../components/Pagehero";



// const timeSlots = [
//   "09:00 AM",
//   "10:00 AM",
//   "11:00 AM",
//   "12:00 PM",
//   "02:00 PM",
//   "03:00 PM",
//   "04:00 PM",
//   "05:00 PM",
// ];

const timeSlots = [
  { value: "09:00:00", label: "09:00 AM" },
  { value: "10:00:00", label: "10:00 AM" },
  { value: "11:00:00", label: "11:00 AM" },
  { value: "12:00:00", label: "12:00 PM" },
  { value: "14:00:00", label: "02:00 PM" },
  { value: "15:00:00", label: "03:00 PM" },
  { value: "16:00:00", label: "04:00 PM" },
  { value: "17:00:00", label: "05:00 PM" },
];
const fieldVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function AppointmentPage() {
  const [submitted, setSubmitted] = useState(false);


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

  const [form, setForm] = useState({
    department: "",
    doctor: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
    age: "",
    gender: "",
    reason: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };



const handleSubmit = async (e) => {
  e.preventDefault();

  const loadingToast = toast.loading(
    "Booking your appointment..."
  );

  try {
    const payload = {
      department_id: form.department,
      doctor_id: form.doctor,

      appointment_date: form.date,
      preferred_time: form.time,

      patient_name: form.name,
      phone_number: form.phone,
      email: form.email,

      age: form.age,
      gender: form.gender,

      reason_for_visit: form.reason,
    };

    console.log("Payload:", payload);

    const res = await ApiService.post(
      "book-appointment",
      payload
    );

    toast.dismiss(loadingToast);

    console.log("Response:", res);

    // API response
  if (res?.success === true) {
    toast.success(
      res?.message || "Appointment booked successfully!"
    );

    console.log("Appointment ID:", res?.data?.id);
    console.log(
      "Appointment No:",
      res?.data?.appointment_no
    );
    console.log(
      "Appointment Status:",
      res?.data?.status
    );

    setSubmitted(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setForm({
      department: "",
      doctor: "",
      date: "",
      time: "",
      name: "",
      phone: "",
      email: "",
      age: "",
      gender: "",
      reason: "",
    });
  } else {
    toast.error(
      res?.message || "Unable to book appointment."
    );
  }
} catch (error) {
  toast.dismiss(loadingToast);

  console.error("Appointment Error:", error);

  toast.error(
    error?.response?.data?.message ||
      error?.message ||
      "Something went wrong."
  );
}
}

  const resetForm = () => {
    setSubmitted(false);

    setForm({
      department: "",
      doctor: "",
      date: "",
      time: "",
      name: "",
      phone: "",
      email: "",
      age: "",
      gender: "",
      reason: "",
    });
  };

  /* =========================================================
     SUCCESS SCREEN
  ========================================================= */

  // if (submitted) {
  //   return (
  //     <main className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50">
  //       <section className="relative flex min-h-screen items-center justify-center px-4 py-20">
  //         {/* Animated background */}
  //         <motion.div
  //           animate={{
  //             x: [0, 40, 0],
  //             y: [0, -30, 0],
  //             scale: [1, 1.1, 1],
  //           }}
  //           transition={{
  //             duration: 7,
  //             repeat: Infinity,
  //             ease: "easeInOut",
  //           }}
  //           className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-teal-200/30 blur-3xl"
  //         />

  //         <motion.div
  //           animate={{
  //             x: [0, -30, 0],
  //             y: [0, 30, 0],
  //           }}
  //           transition={{
  //             duration: 6,
  //             repeat: Infinity,
  //             ease: "easeInOut",
  //           }}
  //           className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl"
  //         />

  //         <motion.div
  //           initial={{ opacity: 0, scale: 0.8, y: 40 }}
  //           animate={{ opacity: 1, scale: 1, y: 0 }}
  //           transition={{
  //             duration: 0.7,
  //             type: "spring",
  //             stiffness: 120,
  //           }}
  //           className="relative z-10 w-full max-w-2xl rounded-[2rem] border border-teal-100 bg-white p-7 text-center shadow-2xl shadow-slate-900/10 sm:p-12"
  //         >
  //           <motion.div
  //             initial={{ scale: 0, rotate: -30 }}
  //             animate={{ scale: 1, rotate: 0 }}
  //             transition={{
  //               delay: 0.25,
  //               duration: 0.7,
  //               type: "spring",
  //             }}
  //             className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-teal-50 text-[#0A7A78]"
  //           >
  //             <CheckCircle2 className="h-14 w-14" />
  //           </motion.div>

  //           <motion.h1
  //             initial={{ opacity: 0, y: 15 }}
  //             animate={{ opacity: 1, y: 0 }}
  //             transition={{ delay: 0.4 }}
  //             className="mt-7 text-3xl font-black text-[#063B5C] sm:text-4xl"
  //           >
  //             Appointment Request Received!
  //           </motion.h1>

  //           <motion.p
  //             initial={{ opacity: 0, y: 15 }}
  //             animate={{ opacity: 1, y: 0 }}
  //             transition={{ delay: 0.5 }}
  //             className="mx-auto mt-4 max-w-xl leading-7 text-slate-500"
  //           >
  //             Thank you,{" "}
  //             <span className="font-bold text-[#0A7A78]">
  //               {form.name || "Patient"}
  //             </span>
  //             . Your appointment request has been submitted successfully.
  //             Our hospital team will contact you shortly for confirmation.
  //           </motion.p>

  //           {/* Appointment summary */}
  //           <motion.div
  //             initial={{ opacity: 0, y: 20 }}
  //             animate={{ opacity: 1, y: 0 }}
  //             transition={{ delay: 0.6 }}
  //             className="mx-auto mt-8 max-w-md rounded-2xl bg-slate-50 p-5 text-left"
  //           >
  //             <div className="flex items-center gap-3">
  //               <CalendarDays className="h-5 w-5 text-[#0A7A78]" />

  //               <div>
  //                 <p className="text-xs text-slate-400">
  //                   Requested Date
  //                 </p>

  //                 <p className="font-bold text-[#063B5C]">
  //                   {form.date || "Not selected"}
  //                 </p>
  //               </div>
  //             </div>

  //             <div className="mt-4 flex items-center gap-3">
  //               <Clock3 className="h-5 w-5 text-[#0A7A78]" />

  //               <div>
  //                 <p className="text-xs text-slate-400">
  //                   Requested Time
  //                 </p>

  //                 <p className="font-bold text-[#063B5C]">
  //                   {form.time || "Not selected"}
  //                 </p>
  //               </div>
  //             </div>

  //             <div className="mt-4 flex items-center gap-3">
  //               <Stethoscope className="h-5 w-5 text-[#0A7A78]" />

  //               <div>
  //                 <p className="text-xs text-slate-400">
  //                   Doctor
  //                 </p>

  //                 <p className="font-bold text-[#063B5C]">
  //                   {form.doctor || "Not selected"}
  //                 </p>
  //               </div>
  //             </div>

  //             <div className="mt-4 flex items-center gap-3">
  //               <HeartPulse className="h-5 w-5 text-[#0A7A78]" />

  //               <div>
  //                 <p className="text-xs text-slate-400">
  //                   Department
  //                 </p>

  //                 <p className="font-bold text-[#063B5C]">
  //                   {form.department || "Not selected"}
  //                 </p>
  //               </div>
  //             </div>
  //           </motion.div>

  //           <motion.div
  //             initial={{ opacity: 0, y: 15 }}
  //             animate={{ opacity: 1, y: 0 }}
  //             transition={{ delay: 0.75 }}
  //             className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
  //           >
  //             <motion.button
  //               onClick={resetForm}
  //               whileHover={{ y: -2, scale: 1.02 }}
  //               whileTap={{ scale: 0.97 }}
  //               className="rounded-xl bg-[#0A7A78] px-7 py-3.5 font-bold text-white shadow-lg shadow-teal-900/20"
  //             >
  //               Book Another Appointment
  //             </motion.button>

  //             <Link
  //               href="/"
  //               className="rounded-xl border border-slate-200 bg-white px-7 py-3.5 font-bold text-[#063B5C] transition hover:border-[#0A7A78] hover:text-[#0A7A78]"
  //             >
  //               Back to Home
  //             </Link>
  //           </motion.div>
  //         </motion.div>
  //       </section>
  //     </main>
  //   );
  // }

  

  return (
    <main className="min-h-screen overflow-hidden bg-[#F8FAFC]">
      {/* =====================================================
          HERO
      ====================================================== */}
    <PageHero
        // backgroundImage="https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg"
        backgroundImage="assets/images/doctorteam.png"
        badge="Book Your Appointment"
        title="Book Your"
        highlight="Appointment."
        description="Schedule your appointment with our experienced doctors and take the first step toward better, personalized healthcare."
        breadcrumb="Book Appointment"
      />
      
      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          {/* =================================================
              APPOINTMENT FORM
          ================================================== */}

          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8 lg:p-10"
          >
            {/* Header */}
            <div className="flex items-start gap-4 border-b border-slate-100 pb-7">
              <motion.div
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-[#0A7A78]"
              >
                <CalendarDays className="h-7 w-7" />
              </motion.div>

              <div>
                <h2 className="text-2xl font-black text-[#063B5C]">
                  Appointment Details
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Select your preferred department, doctor, date and time.
                </p>
              </div>
            </div>

            {/* =================================================
                APPOINTMENT DETAILS
            ================================================== */}

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
              className="mt-8"
            >
              {/* Department + Doctor */}
              <div className="grid gap-5 md:grid-cols-2">
                <motion.div variants={fieldVariants}>
                  <label className="mb-2 block text-sm font-bold text-[#063B5C]">
                    Department
                  </label>

                  <select
                    name="department"
                    value={form.department}
                    onChange={handleChange}
                    required
                    className="h-13 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-700 outline-none transition hover:border-slate-300 focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-500/10"
                  >
                    <option value="">
                      Select Department
                    </option>

                    {departments?.map((department) => (
                      <option
                        key={department.id}
                        value={department.id}
                      >
                        {department.name}
                      </option>
                    ))}
                  </select>
                </motion.div>

                <motion.div variants={fieldVariants}>
                  <label className="mb-2 block text-sm font-bold text-[#063B5C]">
                    Select Doctor
                  </label>

                  <select
                    name="doctor"
                    value={form.doctor}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-700 outline-none transition hover:border-slate-300 focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-500/10"
                  >
                    <option value="">
                      Select Doctor
                    </option>

                    {doctors.map((doctor) => (
                      <option
                        key={doctor.id}
                        value={doctor.id}
                      >
                        {doctor.name} — {doctor.specialty_name}
                      </option>
                    ))}
                  </select>
                </motion.div>
              </div>

              {/* Date + Time */}
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <motion.div variants={fieldVariants}>
                  <label className="mb-2 block text-sm font-bold text-[#063B5C]">
                    Appointment Date
                  </label>

                  <div className="relative">
                    <CalendarDays className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm text-slate-700 outline-none transition hover:border-slate-300 focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-500/10"
                    />
                  </div>
                </motion.div>

                <motion.div variants={fieldVariants}>
                  <label className="mb-2 block text-sm font-bold text-[#063B5C]">
                    Preferred Time
                  </label>

                  <div className="relative">
                    <Clock3 className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                    {/* <select
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm text-slate-700 outline-none transition hover:border-slate-300 focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-500/10"
                    >
                      <option value="">
                        Select Time
                      </option>

                      {timeSlots.map((time) => (
                        <option
                          key={time.time}
                          value={time.value}
                        >
                          {time.label}
                        </option>
                      ))}
                    </select> */}
                    <select
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                     className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm text-slate-700 outline-none transition hover:border-slate-300 focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-500/10"
                  >
                    <option value="">Select Time</option>

                    {timeSlots.map((slot) => (
                      <option key={slot.value} value={slot.value}>
                        {slot.label}
                      </option>
                    ))}
                  </select>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* =================================================
                PATIENT INFORMATION
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-10 border-t border-slate-100 pt-8"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 5,
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-[#0A7A78]"
                >
                  <User className="h-5 w-5" />
                </motion.div>

                <div>
                  <h2 className="font-black text-[#063B5C]">
                    Patient Information
                  </h2>

                  <p className="text-xs text-slate-500">
                    Please provide accurate patient details.
                  </p>
                </div>
              </div>

              {/* Patient fields */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.08,
                    },
                  },
                }}
                className="mt-6"
              >
                {/* Name */}
                <motion.div variants={fieldVariants}>
                  <label className="mb-2 block text-sm font-bold text-[#063B5C]">
                    Full Name
                  </label>

                  <div className="relative">
                    <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter patient full name"
                      className="w-full rounded-xl border border-slate-200 py-3.5 pl-12 pr-4 text-sm outline-none transition hover:border-slate-300 placeholder:text-slate-400 focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-500/10"
                    />
                  </div>
                </motion.div>

                {/* Phone + Email */}
                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <motion.div variants={fieldVariants}>
                    <label className="mb-2 block text-sm font-bold text-[#063B5C]">
                      Phone Number
                    </label>

                    <div className="relative">
                      <Phone className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full rounded-xl border border-slate-200 py-3.5 pl-12 pr-4 text-sm outline-none transition hover:border-slate-300 placeholder:text-slate-400 focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-500/10"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={fieldVariants}>
                    <label className="mb-2 block text-sm font-bold text-[#063B5C]">
                      Email Address
                    </label>

                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-slate-200 py-3.5 pl-12 pr-4 text-sm outline-none transition hover:border-slate-300 placeholder:text-slate-400 focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-500/10"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Age + Gender */}
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <motion.div variants={fieldVariants}>
                    <label className="mb-2 block text-sm font-bold text-[#063B5C]">
                      Age
                    </label>

                    <input
                      type="number"
                      name="age"
                      value={form.age}
                      onChange={handleChange}
                      min="0"
                      max="120"
                      placeholder="Patient age"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition hover:border-slate-300 placeholder:text-slate-400 focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-500/10"
                    />
                  </motion.div>

                  <motion.div variants={fieldVariants}>
                    <label className="mb-2 block text-sm font-bold text-[#063B5C]">
                      Gender
                    </label>

                    <select
                      name="gender"
                      value={form.gender}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-700 outline-none transition hover:border-slate-300 focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-500/10"
                    >
                      <option value="">
                        Select Gender
                      </option>

                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </motion.div>
                </div>

                {/* Reason */}
                <motion.div
                  variants={fieldVariants}
                  className="mt-5"
                >
                  <label className="mb-2 block text-sm font-bold text-[#063B5C]">
                    Reason for Visit
                  </label>

                  <textarea
                    name="reason"
                    value={form.reason}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Briefly describe your reason for consultation..."
                    className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition hover:border-slate-300 placeholder:text-slate-400 focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-500/10"
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* =================================================
                SUBMIT
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              {/* <motion.button
                type="submit"
                whileHover={{
                  y: -3,
                  scale: 1.01,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#0A7A78] px-6 py-4 font-black text-white shadow-lg shadow-teal-900/20"
              >
                <CalendarDays className="h-5 w-5" />

                Confirm Appointment Request

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button> */}
              <motion.button
                  type="submit"
                  whileHover={{
                    y: -3,
                    scale: 1.01,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                  }}
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#0A7A78] px-6 py-4 font-black text-white shadow-lg shadow-teal-900/20"
                >
                  <CalendarDays className="h-5 w-5" />

                  Confirm Appointment Request

                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="h-4 w-4 text-teal-600" />

                Your information is kept secure.
              </div>
            </motion.div>
          </motion.form>

          {/* =================================================
              SIDEBAR
          ================================================== */}

          <aside className="space-y-5">
            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              whileHover={{
                y: -6,
              }}
              className="overflow-hidden rounded-[2rem] bg-[#063B5C] p-7 text-white shadow-xl"
            >
              <motion.div
                animate={{
                  y: [0, -7, 0],
                  rotate: [0, 3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-500/20 text-teal-300"
              >
                <HeartPulse className="h-7 w-7" />
              </motion.div>

              <h3 className="mt-6 text-xl font-black">
                Why Choose Us?
              </h3>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                className="mt-6 space-y-5"
              >
                {[
                  "Experienced specialists",
                  "Modern medical facilities",
                  "Patient-focused care",
                  "Easy appointment booking",
                  "24/7 emergency support",
                ].map((item) => (
                  <motion.div
                    key={item}
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: 15,
                      },
                      show: {
                        opacity: 1,
                        x: 0,
                      },
                    }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-teal-300" />

                    <span className="text-sm text-white/70">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Hospital Hours */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
              whileHover={{
                y: -5,
              }}
              className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-[#0A7A78]"
                >
                  <Clock3 className="h-5 w-5" />
                </motion.div>

                <div>
                  <h3 className="font-black text-[#063B5C]">
                    Hospital Hours
                  </h3>

                  <p className="text-xs text-slate-500">
                    Our general schedule
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between border-b border-slate-100 pb-3">
                  <span className="text-slate-500">
                    Monday - Saturday
                  </span>

                  <span className="font-bold text-[#063B5C]">
                    8 AM - 8 PM
                  </span>
                </div>

                <div className="flex justify-between border-b border-slate-100 pb-3">
                  <span className="text-slate-500">
                    Sunday
                  </span>

                  <span className="font-bold text-[#063B5C]">
                    9 AM - 5 PM
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">
                    Emergency
                  </span>

                  <span className="font-black text-red-600">
                    24/7
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Emergency */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
              }}
              whileHover={{
                y: -5,
                scale: 1.01,
              }}
              className="rounded-[2rem] bg-red-50 p-7"
            >
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600"
              >
                <Phone className="h-6 w-6" />
              </motion.div>

              <h3 className="mt-5 font-black text-[#063B5C]">
                Need Immediate Help?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                For urgent medical situations, please contact our emergency
                team directly.
              </p>

              <motion.a
                href="tel:+919575300110"
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-black text-white transition hover:bg-red-700"
              >
                <Phone className="h-4 w-4" />
                +91 9575300110
              </motion.a>
            </motion.div>
          </aside>
        </div>
      </section>

      {/* =====================================================
          TRUST SECTION
      ====================================================== */}

      <section className="border-t border-slate-100 bg-white py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 px-4 text-center sm:justify-between"
        >
          {/* Secure */}
          <motion.div
            whileHover={{
              y: -5,
              scale: 1.02,
            }}
            className="flex items-center gap-3"
          >
            <ShieldCheck className="h-6 w-6 text-[#0A7A78]" />

            <div>
              <p className="text-sm font-black text-[#063B5C]">
                Secure Information
              </p>

              <p className="text-xs text-slate-400">
                Your data is protected
              </p>
            </div>
          </motion.div>

          {/* Doctors */}
          <motion.div
            whileHover={{
              y: -5,
              scale: 1.02,
            }}
            className="flex items-center gap-3"
          >
            <Stethoscope className="h-6 w-6 text-[#0A7A78]" />

            <div>
              <p className="text-sm font-black text-[#063B5C]">
                Expert Doctors
              </p>

              <p className="text-xs text-slate-400">
                Experienced specialists
              </p>
            </div>
          </motion.div>

          {/* Quick Response */}
          <motion.div
            whileHover={{
              y: -5,
              scale: 1.02,
            }}
            className="flex items-center gap-3"
          >
            <Clock3 className="h-6 w-6 text-[#0A7A78]" />

            <div>
              <p className="text-sm font-black text-[#063B5C]">
                Quick Response
              </p>

              <p className="text-xs text-slate-400">
                Easy appointment process
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-white px-4 pb-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#063B5C] to-[#0A7A78] px-6 py-14 text-center sm:px-10 lg:py-16"
        >
          {/* Animated circles */}
          <motion.div
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-white/5 blur-2xl"
          />

          <motion.div
            animate={{
              x: [0, -25, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-20 top-0 h-52 w-52 rounded-full bg-cyan-300/10 blur-3xl"
          />

          <div className="relative mx-auto max-w-2xl">
            <motion.div
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white"
            >
              <HeartPulse className="h-7 w-7" />
            </motion.div>

            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
              Your Health Deserves the Best Care.
            </h2>

            <p className="mt-4 leading-7 text-white/70">
              Our experienced healthcare team is ready to support you and your
              family.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#063B5C] transition hover:-translate-y-1 hover:shadow-xl"
            >
              Contact Hospital
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
