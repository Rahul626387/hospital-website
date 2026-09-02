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
} from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Anjali Sharma",
    specialty: "Cardiology",
    qualification: "MBBS, MD, DM Cardiology",
    experience: "12+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=85",
    available: true,
  },
  {
    id: 2,
    name: "Dr. Rahul Verma",
    specialty: "Orthopedics",
    qualification: "MBBS, MS Orthopedics",
    experience: "15+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=85",
    available: true,
  },
  {
    id: 3,
    name: "Dr. Priya Singh",
    specialty: "Neurology",
    qualification: "MBBS, MD, DM Neurology",
    experience: "10+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=85",
    available: false,
  },
  {
    id: 4,
    name: "Dr. Amit Patel",
    specialty: "General Medicine",
    qualification: "MBBS, MD Medicine",
    experience: "14+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=85",
    available: true,
  },
  {
    id: 5,
    name: "Dr. Neha Gupta",
    specialty: "Gynecology",
    qualification: "MBBS, MS Obstetrics & Gynecology",
    experience: "11+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1605684954998-685c79d6a018?auto=format&fit=crop&w=800&q=85",
    available: true,
  },
  {
    id: 6,
    name: "Dr. Arjun Mehta",
    specialty: "Pediatrics",
    qualification: "MBBS, MD Pediatrics",
    experience: "9+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=85",
    available: true,
  },
  {
    id: 7,
    name: "Dr. Kavita Joshi",
    specialty: "Dermatology",
    qualification: "MBBS, MD Dermatology",
    experience: "8+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=85",
    available: false,
  },
  {
    id: 8,
    name: "Dr. Vikram Singh",
    specialty: "ENT",
    qualification: "MBBS, MS ENT",
    experience: "13+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=85",
    available: true,
  },
];

const specialties = [
  "All Doctors",
  "Cardiology",
  "Orthopedics",
  "Neurology",
  "General Medicine",
  "Gynecology",
  "Pediatrics",
  "Dermatology",
  "ENT",
];

export default function DoctorsPage() {
  const [search, setSearch] = useState("");
  const [activeSpecialty, setActiveSpecialty] = useState("All Doctors");

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const matchesSearch =
        doctor.name.toLowerCase().includes(search.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(search.toLowerCase());

      const matchesSpecialty =
        activeSpecialty === "All Doctors" ||
        doctor.specialty === activeSpecialty;

      return matchesSearch && matchesSpecialty;
    });
  }, [search, activeSpecialty]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#F8FAFC]">
      {/* HERO */}
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
      </section>

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

          <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
            {specialties.map((specialty) => (
              <button
                key={specialty}
                onClick={() => setActiveSpecialty(specialty)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  activeSpecialty === specialty
                    ? "bg-[#0A7A78] text-white shadow-md shadow-teal-900/10"
                    : "bg-slate-100 text-slate-600 hover:bg-teal-50 hover:text-[#0A7A78]"
                }`}
              >
                {specialty}
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredDoctors.map((doctor, index) => (
              <motion.article
                key={doctor.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-slate-200/70"
              >
                {/* IMAGE */}
                <div className="relative aspect-[4/4.2] overflow-hidden bg-slate-100">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/50 to-transparent" />

                  <span
                    className={`absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold backdrop-blur-md ${
                      doctor.available
                        ? "bg-white/90 text-[#0A7A78]"
                        : "bg-slate-900/70 text-white"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        doctor.available ? "bg-[#0A7A78]" : "bg-slate-300"
                      }`}
                    />
                    {doctor.available ? "Available" : "Unavailable"}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <p className="text-sm font-bold text-[#0A7A78]">
                    {doctor.specialty}
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-[#063B5C]">
                    {doctor.name}
                  </h3>

                  <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-slate-500">
                    {doctor.qualification}
                  </p>

                  <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-4 text-sm text-slate-500">
                    <Award className="h-4 w-4 text-[#0A7A78]" />
                    {doctor.experience}
                  </div>

                  <Link
                    href={`/doctors/${doctor.id}`}
                    className="group/link mt-5 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm font-bold text-[#063B5C] transition hover:bg-[#0A7A78] hover:text-white"
                  >
                    View Profile
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
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