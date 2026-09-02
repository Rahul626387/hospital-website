"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
  Stethoscope,
  HeartPulse,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    department: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      phone: "",
      email: "",
      department: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      text: "+91 99999 99999",
      subText: "Our team is here to help you",
      href: "tel:+919999999999",
    },
    {
      icon: Mail,
      title: "Email Us",
      text: "info@baderiametroprime.com",
      subText: "We will get back to you soon",
      href: "mailto:info@baderiametroprime.com",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      text: "Baderia Metro Prime Hospital",
      subText: "Jabalpur, Madhya Pradesh, India",
      href: "#location",
    },
  ];

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

            <span>Contact Us</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-3xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#4DD4C6]">
              <Stethoscope className="h-4 w-4" />
              Get In Touch
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              We Are Here
              <span className="block text-[#4DD4C6]">To Help You.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
              Have a question, need assistance, or want to know more about our
              healthcare services? Our team is always ready to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTACT CARDS ================= */}
      <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-900/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-[#0A7A78] transition group-hover:bg-[#0A7A78] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#063B5C]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm font-semibold text-[#0A7A78]">
                  {item.text}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {item.subText}
                </p>
              </motion.a>
            );
          })}
        </div>
      </section>

      {/* ================= FORM SECTION ================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] bg-[#063B5C] p-7 text-white sm:p-10"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#4DD4C6]">
              Contact Information
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
              Let&apos;s Talk About
              <span className="block">Your Healthcare Needs.</span>
            </h2>

            <p className="mt-5 leading-7 text-white/65">
              Whether you need medical information, appointment assistance or
              have any general enquiry, our team is ready to guide you.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#4DD4C6]">
                  <Clock3 className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-bold">Working Hours</p>
                  <p className="mt-1 text-sm text-white/60">
                    Open 24 Hours, 7 Days a Week
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#4DD4C6]">
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-bold">Emergency Support</p>
                  <p className="mt-1 text-sm text-white/60">
                    Call us anytime for immediate assistance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#4DD4C6]">
                  <HeartPulse className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-bold">Patient Care</p>
                  <p className="mt-1 text-sm text-white/60">
                    Compassionate healthcare at every step.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-white/10 pt-7">
              <p className="text-sm text-white/60">
                Looking for a specialist?
              </p>

              <Link
                href="/doctors"
                className="group mt-3 inline-flex items-center gap-2 font-bold text-[#4DD4C6]"
              >
                Find a Doctor
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-xl shadow-slate-900/5 sm:p-10"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0A7A78]">
                Send a Message
              </p>

              <h2 className="mt-3 text-2xl font-bold text-[#063B5C] sm:text-3xl">
                How Can We Help?
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Fill out the form and our team will contact you soon.
              </p>
            </div>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 flex items-center gap-3 rounded-xl border border-green-100 bg-green-50 p-4 text-sm font-medium text-green-700"
              >
                <CheckCircle2 className="h-5 w-5" />
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    required
                    className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-50"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Select Department
                  </label>

                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-50"
                  >
                    <option value="">Select Department</option>
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Appointment">Appointment</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Orthopedics">Orthopedics</option>
                    <option value="Gynecology">Gynecology</option>
                    <option value="Emergency">Emergency</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Your Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows={5}
                  required
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-50"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0A7A78] px-6 text-sm font-bold text-white transition hover:bg-[#086663]"
              >
                Send Message
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ================= LOCATION ================= */}
      <section id="location" className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="p-8 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0A7A78]">
                Our Location
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#063B5C]">
                Visit Our Hospital.
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Visit Baderia Metro Prime Hospital for quality healthcare and
                compassionate medical support.
              </p>

              <div className="mt-7 flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#0A7A78]" />

                <p className="text-sm leading-6 text-slate-600">
                  Baderia Metro Prime Hospital
                  <br />
                  Jabalpur, Madhya Pradesh, India
                </p>
              </div>

              <a
                href="#"
                className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-[#063B5C] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-1"
              >
                Get Directions
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Map Placeholder */}
            <div className="relative flex min-h-[350px] items-center justify-center bg-gradient-to-br from-teal-50 via-slate-50 to-cyan-50">
              <div className="absolute h-56 w-56 rounded-full border border-dashed border-[#0A7A78]/20" />
              <div className="absolute h-40 w-40 rounded-full border border-dashed border-[#0A7A78]/30" />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0A7A78] text-white shadow-xl shadow-teal-900/20"
              >
                <MapPin className="h-8 w-8" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#063B5C] to-[#0A7A78] px-6 py-14 text-center sm:px-10 lg:py-20">
          <div className="absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-white/5 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
              <CalendarDays className="h-7 w-7" />
            </div>

            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
              Ready to Take the Next Step?
            </h2>

            <p className="mt-4 leading-7 text-white/70">
              Book an appointment with our healthcare specialists and get the
              care you deserve.
            </p>

            <Link
              href="/appointment"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#063B5C] transition hover:-translate-y-1 hover:shadow-xl"
            >
              Book Appointment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}