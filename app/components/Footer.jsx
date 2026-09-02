"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  ArrowUpRight,
  HeartPulse,
  Stethoscope,
  ChevronRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Doctors", href: "/doctors" },
  { name: "Our Services", href: "/services" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact Us", href: "/contact" },
];

const services = [
  "General Medicine",
  "Cardiology",
  "Orthopedics",
  "Gynecology",
  "Pediatrics",
  "Emergency Care",
];

const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    href: "#",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "#",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "#",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#063B5C] text-white">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#0A7A78]/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-400/5 blur-3xl" />
      </div>

      {/* Emergency CTA */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-px border-b border-white/10 py-8 sm:py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0A7A78] text-white shadow-lg shadow-black/10">
                <HeartPulse className="h-7 w-7" />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#4DD4C6]">
                  Emergency Support
                </p>

                <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                  Need immediate medical assistance?
                </h3>

                <p className="mt-1 text-sm text-white/60">
                  Our healthcare team is available to assist you.
                </p>
              </div>
            </div>

            <a
              href="tel:+919999999999"
              className="group inline-flex w-fit items-center gap-3 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-[#063B5C] transition hover:-translate-y-1 hover:shadow-xl"
            >
              <Phone className="h-5 w-5 text-[#0A7A78]" />
              <span>Call Emergency</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        {/* Main Footer */}
        <div className="relative grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.9fr_1.2fr] lg:gap-8 lg:py-20">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A7A78] text-white">
                <Stethoscope className="h-6 w-6" />
              </div>

              <div>
                <p className="text-lg font-bold leading-tight">
                  Baderia Metro Prime
                </p>
                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4DD4C6]">
                  Hospital
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
              Providing compassionate, reliable and patient-centered healthcare
              with experienced professionals and modern medical facilities.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition hover:-translate-y-1 hover:border-[#4DD4C6]/40 hover:bg-[#0A7A78] hover:text-white"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-white">
              Quick Links
            </h4>

            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/60 transition hover:text-[#4DD4C6]"
                  >
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-white">
              Our Services
            </h4>

            <ul className="mt-6 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="group inline-flex items-center gap-1.5 text-sm text-white/60 transition hover:text-[#4DD4C6]"
                  >
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-white">
              Contact Us
            </h4>

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-[#4DD4C6]">
                  <MapPin className="h-5 w-5" />
                </div>

                <p className="text-sm leading-6 text-white/60">
                  Baderia Metro Prime Hospital,
                  <br />
                  Jabalpur, Madhya Pradesh, India
                </p>
              </div>

              <a
                href="tel:+919999999999"
                className="flex items-center gap-3 text-sm text-white/60 transition hover:text-[#4DD4C6]"
              >
                <Phone className="h-5 w-5 shrink-0 text-[#4DD4C6]" />
                +91 99999 99999
              </a>

              <a
                href="mailto:info@baderiametroprime.com"
                className="flex items-center gap-3 text-sm text-white/60 transition hover:text-[#4DD4C6]"
              >
                <Mail className="h-5 w-5 shrink-0 text-[#4DD4C6]" />
                info@baderiametroprime.com
              </a>

              <div className="flex items-center gap-3 text-sm text-white/60">
                <Clock3 className="h-5 w-5 shrink-0 text-[#4DD4C6]" />
                Open 24 Hours, 7 Days
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="relative flex flex-col gap-4 border-t border-white/10 py-6 text-center text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} Baderia Metro Prime Hospital. All
            rights reserved.
          </p>

          <div className="flex justify-center gap-5 sm:justify-end">
            <Link
              href="/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-conditions"
              className="transition hover:text-white"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}