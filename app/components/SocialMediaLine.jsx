
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: FaFacebookF,
    color: "#1877F2",
  },
  {
    name: "Instagram",
    href: "#",
    icon: FaInstagram,
    color: "#E4405F",
  },
  {
    name: "YouTube",
    href: "#",
    icon: FaYoutube,
    color: "#FF0000",
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: FaLinkedinIn,
    color: "#0A66C2",
  },
  {
    name: "X",
    href: "#",
    icon: FaXTwitter,
    color: "#000000",
  },
];

export default function SocialMediaLine() {
  return (
    <div className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 md:block">
      <div className="flex flex-col items-center">

        {/* TOP LINE */}
        {/* <div className="h-16 w-px bg-[#0d3c59]/25" /> */}

        <div className="my-3 flex flex-col items-center gap-3">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;

            return (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  scale: 1.18,
                  x: -5,
                }}
                className="
                  group
                  relative
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  shadow-[0_5px_20px_rgba(13,60,89,0.15)]
                  ring-1
                  ring-black/5
                  transition-all
                  duration-300
                "
              >
                <Icon
                  size={18}
                  style={{
                    color: social.color,
                  }}
                />

                {/* TOOLTIP */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    right-14
                    whitespace-nowrap
                    rounded-md
                    bg-[#0d3c59]
                    px-3
                    py-1.5
                    text-xs
                    font-medium
                    text-white
                    opacity-0
                    translate-x-2
                    transition-all
                    duration-300
                    group-hover:translate-x-0
                    group-hover:opacity-100
                  "
                >
                  {social.name}

                  <span
                    className="
                      absolute
                      right-[-4px]
                      top-1/2
                      h-2
                      w-2
                      -translate-y-1/2
                      rotate-45
                      bg-[#0d3c59]
                    "
                  />
                </span>
              </motion.a>
            );
          })}
        </div>

        {/* BOTTOM LINE */}
        {/* <div className="h-16 w-px bg-[#0d3c59]/25" /> */}

      </div>
    </div>
  );
}