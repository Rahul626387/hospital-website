"use client";

import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const testimonials = [
  {
    name: "Rahul Singh",
    role: "Patient",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    text: "The doctors and nursing staff were extremely caring and professional. They explained every step clearly and made my family feel completely comfortable.",
    gradient: "from-teal-50 via-white to-teal-100",
    accent: "text-teal-600",
    ring: "ring-teal-100",
  },
  {
    name: "Neha Gupta",
    role: "Patient",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    text: "Excellent hospital with modern facilities and very supportive staff. The complete treatment experience was smooth and reassuring.",
    gradient: "from-blue-50 via-white to-blue-100",
    accent: "text-blue-600",
    ring: "ring-blue-100",
  },
  {
    name: "Arjun Patel",
    role: "Patient",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    text: "Very clean environment, helpful staff and excellent medical care. I would definitely recommend this hospital to my family and friends.",
    gradient: "from-green-50 via-white to-green-100",
    accent: "text-green-600",
    ring: "ring-green-100",
  },
  {
    name: "Anjali Verma",
    role: "Patient",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    text: "I am grateful to the entire healthcare team for their kindness and dedication. Every member of the staff made me feel safe and well cared for.",
    gradient: "from-purple-50 via-white to-purple-100",
    accent: "text-purple-600",
    ring: "ring-purple-100",
  },
];

const PatientTestimonials = () => {
  return (
    <section className="py-20 bg-green-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-widest text-[#0A7A78]">
            Patient Stories
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#063B5C] sm:text-4xl">
            What our patients say.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500">
            Real experiences from patients and families who trusted our
            healthcare team.
          </p>
        </div>

        {/* Slider */}
        <div className="relative mt-16">
          <Quote className="absolute -top-10 left-0 h-20 w-20 text-[#0A7A78]/10 z-10" />

          <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={1.2}
            spaceBetween={20}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 1.5,
              slideShadows: false,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 1.8,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 24,
              },
            }}
            className="!pb-14 patient-swiper"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i} className="!h-auto">
                {({ isActive }) => (
                  <div
                    className={`group h-full rounded-3xl border border-white/60 bg-gradient-to-br ${t.gradient} p-7 shadow-[0_20px_60px_-15px_rgba(6,59,92,0.15)] backdrop-blur transition-all duration-500 ${
                      isActive
                        ? "scale-100 opacity-100 blur-0"
                        : "scale-90 opacity-50 blur-[2px]"
                    } hover:-translate-y-2 hover:scale-[1.03] hover:opacity-100 hover:blur-0 hover:shadow-[0_30px_70px_-15px_rgba(6,59,92,0.35)]`}
                  >
                    {/* Stars */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400 transition group-hover:scale-110"
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="mt-5 text-sm leading-7 text-slate-700 italic">
                      “{t.text}”
                    </p>

                    {/* Divider */}
                    <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div
                        className={`relative h-14 w-14 overflow-hidden rounded-full ring-4 ${t.ring} transition group-hover:ring-8`}
                      >
                        <Image
                          src={t.image}
                          alt={t.name}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                      <div>
                        <p className="font-black text-[#063B5C]">{t.name}</p>
                        <p className={`mt-1 text-xs font-semibold ${t.accent}`}>
                          {t.role}
                        </p>
                      </div>
                    </div>

                    {/* Glow on hover */}
                    <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-white/40 to-transparent" />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .patient-swiper .swiper-pagination {
          bottom: 0 !important;
        }

        .patient-swiper .swiper-pagination-bullet {
          background: #cbd5e1;
          opacity: 1;
          width: 10px;
          height: 10px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .patient-swiper .swiper-pagination-bullet-active {
          background: #0a7a78;
          width: 32px;
          border-radius: 9999px;
        }

        .patient-swiper .swiper-slide {
          transition: all 0.5s ease;
          height: auto;
        }
      `}</style>
    </section>
  );
};

export default PatientTestimonials;