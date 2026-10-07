

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Stethoscope,
  HeartPulse,
  Brain,
  Bone,
  Baby,
  Phone,
  Clock3,
  MapPin,
  LogIn,
  icons,
  Activity,
  Eye,
  Heart,
  Syringe,
  Hospital,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import ApiService from "../src/services/Apiservices";
import useSWR from 'swr'
import LanguageSwitcher from '../components/LanguageSwitcher'
import Image from "next/image";

const iconMap = {
  activity: Activity,
  heartpulse: HeartPulse,
  stethoscope: Stethoscope,
  brain: Brain,
  bone: Bone,
  baby: Baby,
  eye: Eye,
  heart: Heart,
  syringe: Syringe,
  hospital: Hospital,
};

const getDepartmentIcon = (iconName) => {
  if (!iconName) return Activity;

  const key = iconName.toLowerCase().replace(/[\s_-]/g, "");

  return iconMap[key] || Activity;
};

/* =========================================================
   SERVICES
========================================================= */

const servicesold = [
  {
    name: "Cardiology",
    description: "Complete heart care",
    icon: HeartPulse,
    href: "/services/cardiology",
  },
  {
    name: "Neurology",
    description: "Advanced brain care",
    icon: Brain,
    href: "/services/neurology",
  },
  {
    name: "Orthopedics",
    description: "Bone & joint care",
    icon: Bone,
    href: "/services/orthopedics",
  },
  {
    name: "Pediatrics",
    description: "Specialized child care",
    icon: Baby,
    href: "/services/pediatrics",
  },
  {
    name: "Pediatrics",
    description: "Specialized child care",
    icon: Baby,
    href: "/services/pediatrics",
  },
  {
    name: "Pediatrics",
    description: "Specialized child care",
    icon: Baby,
    href: "/services/pediatrics",
  },
  {
    name: "Pediatrics",
    description: "Specialized child care",
    icon: Baby,
    href: "/services/pediatrics",
  },
];

/* =========================================================
   NAVIGATION
========================================================= */

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Department",
    href: "/department",
    dropdown: true,
  },
  {
    name: "Doctors",
    href: "/doctors",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
 
  {
    name: "Contact Us",
    href: "/contact",
  },
   {
    name: "Career",
    href: "/career",
  },
  {
    name: "Emergency",
    href: "/emergency",
  },
];

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  /* =======================================================
     SCROLL
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =======================================================
     CLOSE MENU ON ROUTE CHANGE
  ======================================================= */

  useEffect(() => {
    setMobileMenu(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  /* =======================================================
     ACTIVE SERVICE
  ======================================================= */

  const isServiceActive = pathname.startsWith("/services");

  const {data,error,isLoading} = useSWR('departments',ApiService.get)
  const departments = data?.data || []

  return (
    <header className="fixed left-0 top-0 z-50 w-full">

      {/* ===================================================
          TOP INFO BAR
      =================================================== */}

      {/* <div className="hidden border-b border-white/10 bg-[#063B5C] text-white lg:block"> */}
      <div className="hidden border-b border-white/10 bg-gradient-to-r from-[#063B5C] to-[#0A7A78] text-white lg:block">
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* LEFT INFO */}
          <div className="flex h-full items-center">

            {/* Emergency */}
            <Link
              href="tel:+91 9575300110"
              className="group flex h-full items-center gap-1.5 border-r border-white/15 pr-4 text-[12px] font-medium transition hover:text-[#4DD4C6]"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500/15 text-red-300 transition group-hover:bg-red-500 group-hover:text-white">
                <Phone className="h-3 w-3" />
              </span>

              <span>
                Emergency:
                <strong className="ml-1 font-semibold text-white">
                  +91 9575300110
                </strong>
              </span>
            </Link>

            {/* Open 24x7 */}
            <div className="flex h-full items-center gap-1.5 border-r border-white/15 px-4 text-[12px] font-medium text-white/85">
              <Clock3 className="h-3.5 w-3.5 text-[#4DD4C6]" />

              <span>Open 24 × 7</span>
            </div>

            {/* Location */}
            <div className="flex h-full items-center gap-1.5 pl-4 text-[12px] font-medium text-white/85">
              <MapPin className="h-3.5 w-3.5 text-[#4DD4C6]" />

              <span>
                Baderia Metroprime Multi Speciality Hospital Jabalpur
              </span>
            </div>
          </div>

          {/* SOCIAL */}
          {/* <div className="flex items-center gap-0.5">

            <Link
              href="#"
              aria-label="Facebook"
              className="flex h-6 w-6 items-center justify-center rounded-full text-white/75 transition hover:bg-white/10 hover:text-[#4DD4C6]"
            >
              <FaFacebookF className="h-3 w-3" />
            </Link>

            <Link
              href="#"
              aria-label="Instagram"
              className="flex h-6 w-6 items-center justify-center rounded-full text-white/75 transition hover:bg-white/10 hover:text-[#4DD4C6]"
            >
              <FaInstagram className="h-3.5 w-3.5" />
            </Link>

            <Link
              href="#"
              aria-label="YouTube"
              className="flex h-6 w-6 items-center justify-center rounded-full text-white/75 transition hover:bg-white/10 hover:text-[#4DD4C6]"
            >
              <FaYoutube className="h-3.5 w-3.5" />
            </Link>

          </div> */}
        </div>
      </div>

      {/* ===================================================
          MAIN NAVBAR
      =================================================== */}

      <motion.nav
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className={`transition-all duration-300 ${
          isScrolled
            ? "border-b border-slate-200/70 bg-white/95 shadow-lg shadow-slate-900/5 backdrop-blur-xl"
            : "border-b border-slate-100 bg-white"
        }`}
      >

        <div className="mx-auto flex h-[62px]  items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* <div className="mx-auto flex h-[62px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"> */}

          {/* =================================================
              LOGO
          ================================================= */}

         

          {/* <Link
            href="/"
            className="group flex items-center"
            onClick={() => setMobileMenu(false)}
          >
            <div className="relative h-14 w-56 transition duration-300 group-hover:scale-[1.02]">
              <Image
                src="/assets/images/HospitalLogo.png"
                alt="Baderia MetroPrime Hospital"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link> */}
        <Link
            href="/"
            className="group flex items-center"
            onClick={() => setMobileMenu(false)}
          >
          <div className="relative h-12 w-54 shrink-0">
            <Image
              // src="/assets/images/Logo.png"
              src="/assets/images/HospitalLogo.png"
              alt="Baderia MetroPrime Hospital"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
          </Link>

          {/* =================================================
              DESKTOP MENU
          ================================================= */}

          <div className="hidden items-center gap-0.5 lg:flex">

            {navItems.map((item) => {

              const isActive = item.dropdown
                ? isServiceActive
                : pathname === item.href;

              /* =============================================
                 SERVICES
              ============================================= */

              if (item.dropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >

                    {/* Services Link */}
                    <Link
                      href={item.href}
                      className={`group relative flex items-center gap-0.5 px-3 py-2 text-[14px] font-semibold transition-colors ${
                        isActive
                          ? "text-[#0A7A78]"
                          : "text-slate-600 hover:text-[#0A7A78]"
                      }`}
                    >

                      {item.name}

                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${
                          servicesOpen
                            ? "rotate-180"
                            : ""
                        }`}
                      />

                      {/* Active Line */}
                      <span
                        className={`absolute bottom-0.5 left-3 right-3 h-[2px] origin-left rounded-full bg-[#0A7A78] transition-transform duration-300 ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />

                    </Link>

                    {/* =======================================
                        SERVICES DROPDOWN
                    ======================================= */}

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 10,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: 6,
                          }}
                          transition={{
                            duration: 0.2,
                          }}
                          className="absolute left-0 top-full mt-1 w-[320px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/10"
                        >

                          {/* Dropdown Header */}
                          <div className="border-b border-slate-100 px-3 py-2.5">

                            <p className="text-[13px] font-bold text-[#063B5C]">
                              Our Departments
                            </p>

                            <p className="mt-1 text-[12px] text-slate-500">
                              Specialized healthcare services
                            </p>

                          </div>

                          {/* Services */}
                          
                           <div className="py-1.5">
                            {departments.slice(0, 4).map((department) => {
                              const Icon = getDepartmentIcon(department.icon);

                              return (
                                <Link
                                  key={department.id || department.name}
                                  href={`/department/${department.id}`}
                                  className="group/item flex items-center gap-3 rounded-xl p-2.5 transition hover:bg-teal-50"
                                >
                                  {/* Icon */}
                                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-[#0A7A78] transition group-hover/item:bg-[#0A7A78] group-hover/item:text-white">
                                    <Icon className="h-4 w-4" />
                                  </div>

                                  {/* Text */}
                                  <div>
                                    <p className="text-[14px] font-semibold text-slate-800">
                                      {department.name}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>

                          {/* View All */}
                          <Link
                            href="/department"
                            className="group flex items-center justify-between rounded-lg bg-[#063B5C] px-3.5 py-2.5 text-[12px] font-semibold text-white transition hover:bg-[#0A7A78]"
                          >

                            <span>
                              View All Department
                            </span>

                            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />

                          </Link>

                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                );
              }

              /* =============================================
                 NORMAL MENU ITEM
              ============================================= */

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative px-3 py-2 text-[14px] font-semibold transition-colors ${
                    isActive
                      ? "text-[#0A7A78]"
                      : "text-slate-600 hover:text-[#0A7A78]"
                  }`}
                >

                  {item.name}

                  {/* Active Line */}
                  <span
                    className={`absolute bottom-0.5 left-3 right-3 h-[2px] origin-left rounded-full bg-[#0A7A78] transition-transform duration-300 ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />

                </Link>
              );
            })}

          </div>

          {/* =================================================
              DESKTOP ACTION BUTTONS
          ================================================= */}

          <div className="hidden items-center gap-2 lg:flex">

            {/* Book Appointment */}
            <Link
              href="/appointment"
              className="group flex items-center gap-1.5 rounded-lg bg-[#0A7A78] px-4 py-2.5 text-[14px] font-semibold text-white shadow-md shadow-teal-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#086663] hover:shadow-lg"
            >

              <span>
                Book Appointment
              </span>

              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              />

            </Link>

            {/* Login */}
            {/* <Link
              href="/login"
              className="group flex items-center gap-1.5 rounded-lg border border-[#0A7A78]/20 bg-white px-3.5 py-2.5 text-[12px] font-semibold text-[#063B5C] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0A7A78] hover:bg-teal-50 hover:text-[#0A7A78]"
            >

              <LogIn
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
              />

              <span>
                Admin Login
              </span>

            </Link> */}
            <LanguageSwitcher/>

          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#063B5C] transition hover:border-teal-200 hover:bg-teal-50 hover:text-[#0A7A78] lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileMenu}
          >

            <AnimatePresence
              mode="wait"
              initial={false}
            >

              {mobileMenu ? (
                <motion.div
                  key="close"
                  initial={{
                    rotate: -90,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotate: 90,
                    opacity: 0,
                  }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{
                    rotate: 90,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotate: -90,
                    opacity: 0,
                  }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}

            </AnimatePresence>

          </button>

        </div>

        {/* =================================================
            MOBILE MENU
        ================================================= */}

        <AnimatePresence>

          {mobileMenu && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
            >

              <div className="space-y-1 px-4 py-3">

                {navItems.map((item) => {

                  const isActive = item.dropdown
                    ? isServiceActive
                    : pathname === item.href;

                  /* =========================================
                     MOBILE SERVICES
                  ========================================= */

                  if (item.dropdown) {
                    return (
                      <div key={item.name}>

                        <button
                          type="button"
                          onClick={() =>
                            setMobileServicesOpen(
                              !mobileServicesOpen
                            )
                          }
                          className={`flex w-full items-center justify-between rounded-lg px-3.5 py-2.5 text-left text-[13px] font-semibold transition ${
                            isActive
                              ? "bg-teal-50 text-[#0A7A78]"
                              : "text-slate-700 hover:bg-slate-50"
                          }`}
                        >

                          <span>
                            {item.name}
                          </span>

                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-300 ${
                              mobileServicesOpen
                                ? "rotate-180"
                                : ""
                            }`}
                          />

                        </button>

                        {/* Services */}
                        <AnimatePresence>

                          {mobileServicesOpen && (
                            <motion.div
                              initial={{
                                height: 0,
                                opacity: 0,
                              }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                              }}
                              transition={{
                                duration: 0.25,
                              }}
                              className="overflow-hidden"
                            >

                              <div className="ml-3 mt-1 space-y-1 border-l-2 border-teal-100 py-1.5 pl-3">

                                 {departments.slice(0, 4).map((department) => (
                                  <Link
                                   key={department.id || department.name}
                                    href={`/department/${department.id}`}
                                    className="block rounded-lg px-3 py-2 text-[12px] font-medium text-slate-600 transition hover:bg-teal-50 hover:text-[#0A7A78]"
                                    onClick={() =>
                                      setMobileMenu(false)
                                    }
                                  >
                                    {department.name}
                                  </Link>
                                ))}

                                <Link
                                  href="/department"
                                  className="block rounded-lg px-3 py-2 text-[12px] font-bold text-[#0A7A78]"
                                  onClick={() =>
                                    setMobileMenu(false)
                                  }
                                >
                                  View All Services →
                                </Link>

                              </div>

                            </motion.div>
                          )}

                        </AnimatePresence>

                      </div>
                    );
                  }

                  /* =========================================
                     NORMAL MOBILE ITEM
                  ========================================= */

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() =>
                        setMobileMenu(false)
                      }
                      className={`block rounded-lg px-3.5 py-2.5 text-[13px] font-semibold transition ${
                        isActive
                          ? "bg-teal-50 text-[#0A7A78]"
                          : "text-slate-700 hover:bg-slate-50 hover:text-[#0A7A78]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}

                {/* =========================================
                    MOBILE APPOINTMENT
                ========================================= */}

                <Link
                  href="/appointment"
                  onClick={() =>
                    setMobileMenu(false)
                  }
                  className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-[#0A7A78] px-4 py-3 text-[13px] font-semibold text-white transition hover:bg-[#086663]"
                >

                  <span>
                    Book Appointment
                  </span>

                  <ArrowRight className="h-4 w-4" />

                </Link>

                {/* =========================================
                    MOBILE LOGIN
                ========================================= */}

                {/* <Link
                  href="/login"
                  onClick={() =>
                    setMobileMenu(false)
                  }
                  className="flex items-center justify-center gap-2 rounded-lg border border-[#0A7A78]/20 bg-white px-4 py-3 text-[13px] font-semibold text-[#063B5C] transition hover:border-[#0A7A78] hover:bg-teal-50 hover:text-[#0A7A78]"
                >

                  <LogIn className="h-4 w-4" />

                  <span>
                    Admin Login
                  </span>

                </Link> */}

              </div>

            </motion.div>
          )}

        </AnimatePresence>

      </motion.nav>
    </header>
  );
}