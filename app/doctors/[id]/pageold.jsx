// "use client";

// import React from "react";
// import { useParams } from "next/navigation";
// import PageHero from "../../components/Pagehero";


// const Doctorpage = () => {
//   const params = useParams();

//   const doctorId = params?.id;

//   return (
//     <div>
//       <PageHero
//         backgroundImage="https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg"
//         badge="Doctor Profile"
//         title="Doctor Details"
//         highlight={`Doctor #${doctorId}`}
//         description="View detailed information about our medical specialist."
//         breadcrumbs={[
//           {
//             label: "Doctors",
//             href: "/doctors",
//           },
//           {
//             label: `Doctor #${doctorId}`,
//           },
//         ]}
//       />

//       <div className="mx-auto max-w-7xl px-4 py-12">
//         <h2 className="text-2xl font-bold">
//           Doctor Details
//         </h2>

//         <p className="mt-2 text-gray-600">
//           Doctor ID: {doctorId}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Doctorpage;


"use client";

import React from "react";
import { useParams } from "next/navigation";
import {
  Award,
  CalendarDays,
  CheckCircle2,
  Clock3,
  GraduationCap,
  MapPin,
  Stethoscope,
} from "lucide-react";

import PageHero from "../../components/Pagehero";

const Doctorpage = () => {
  const params = useParams();

  const doctorId = params?.id;

  // Temporary static doctor data
  // Later API data yahan replace kar sakte ho
  const doctor = {
    id: doctorId,
    name: "Dr. Rahul Sharma",
    qualification: "MBBS, MD, DM",
    specialization: "Senior Cardiologist",
    experience: "15+ Years Experience",
    location: "Apollo JBP Hospital",
    image:
      "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg",
    description:
      "Dr. Rahul Sharma is an experienced cardiologist dedicated to providing comprehensive and patient-centered cardiac care.",
    about:
      "Dr. Rahul Sharma is a highly experienced cardiologist with extensive expertise in diagnosis, prevention and treatment of cardiovascular diseases. He believes in providing personalized treatment plans and ensuring every patient receives compassionate and reliable care.",
    education: [
      "MBBS – Medical College",
      "MD – Internal Medicine",
      "DM – Cardiology",
    ],
    specializations: [
      "Cardiology",
      "Preventive Cardiology",
      "Heart Disease Management",
      "Hypertension Management",
      "Cardiac Care",
    ],
  };

  return (
    <div className="bg-slate-50">

      {/* =========================
          PAGE HERO
      ========================== */}
      <PageHero
        backgroundImage="https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg"
        badge="Doctor Profile"
        title={doctor.name}
        highlight={doctor.specialization}
        description={doctor.description}
        breadcrumbs={[
          {
            label: "Doctors",
            href: "/doctors",
          },
          {
            label: doctor.name,
          },
        ]}
      />

      {/* =========================
          DOCTOR PROFILE
      ========================== */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-[350px_1fr]">

            {/* =========================
                DOCTOR IMAGE CARD
            ========================== */}
            <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">

              <div className="aspect-[4/4] overflow-hidden bg-slate-100">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6">

                <div className="flex items-center gap-2 text-sm font-medium text-[#0A7A78]">
                  <CheckCircle2 className="h-4 w-4" />
                  Available for Consultation
                </div>

                <button
                  className="
                    mt-5
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[#063B5C]
                    px-5
                    py-3
                    font-semibold
                    text-white
                    transition
                    hover:bg-[#052f49]
                  "
                >
                  <CalendarDays className="h-5 w-5" />
                  Book Appointment
                </button>

              </div>
            </div>

            {/* =========================
                DOCTOR INFORMATION
            ========================== */}
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#0A7A78]">
                  Medical Specialist
                </p>

                <h2 className="mt-2 text-3xl font-bold text-[#063B5C] sm:text-4xl">
                  {doctor.name}
                </h2>

                <p className="mt-2 text-lg font-medium text-slate-600">
                  {doctor.specialization}
                </p>
              </div>

              {/* Information Grid */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                {/* Qualification */}
                <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#063B5C]/10 text-[#063B5C]">
                    <GraduationCap className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Qualification
                    </p>

                    <p className="mt-1 font-semibold text-slate-800">
                      {doctor.qualification}
                    </p>
                  </div>
                </div>

                {/* Experience */}
                <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0A7A78]/10 text-[#0A7A78]">
                    <Award className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Experience
                    </p>

                    <p className="mt-1 font-semibold text-slate-800">
                      {doctor.experience}
                    </p>
                  </div>
                </div>

                {/* Hospital */}
                <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#063B5C]/10 text-[#063B5C]">
                    <Stethoscope className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Hospital
                    </p>

                    <p className="mt-1 font-semibold text-slate-800">
                      {doctor.location}
                    </p>
                  </div>
                </div>

                {/* Timing */}
                <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0A7A78]/10 text-[#0A7A78]">
                    <Clock3 className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Consultation
                    </p>

                    <p className="mt-1 font-semibold text-slate-800">
                      Mon - Sat, 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>

              </div>

              {/* Location */}
              <div className="mt-5 flex items-center gap-3 border-t border-slate-200 pt-5 text-slate-600">
                <MapPin className="h-5 w-5 text-[#0A7A78]" />

                <span>
                  {doctor.location}
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================
          ABOUT DOCTOR
      ========================== */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-3">

            {/* ABOUT */}
            <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 lg:col-span-2">

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#063B5C]/10 text-[#063B5C]">
                  <Stethoscope className="h-5 w-5" />
                </div>

                <h2 className="text-2xl font-bold text-[#063B5C]">
                  About Doctor
                </h2>
              </div>

              <p className="mt-5 leading-8 text-slate-600">
                {doctor.about}
              </p>

            </div>

            {/* SPECIALIZATIONS */}
            <div className="rounded-3xl bg-[#063B5C] p-7 text-white">

              <h2 className="text-2xl font-bold">
                Specializations
              </h2>

              <div className="mt-5 space-y-3">
                {doctor.specializations.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#4DD4C6]" />

                    <span className="text-white/80">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================
          EDUCATION
      ========================== */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl">

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A7A78]/10 text-[#0A7A78]">
                <GraduationCap className="h-5 w-5" />
              </div>

              <h2 className="text-2xl font-bold text-[#063B5C]">
                Education & Qualification
              </h2>
            </div>

            <div className="mt-8 space-y-4">

              {doctor.education.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#063B5C] text-sm font-bold text-white">
                    {index + 1}
                  </div>

                  <p className="font-medium text-slate-700">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Doctorpage;

