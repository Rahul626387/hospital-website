import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function QualitySection() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">

        {/* ========================================= */}
        {/* LEFT CONTENT */}
        {/* ========================================= */}

        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#07877f]">
            Quality & Trust
          </p>

          <h2 className="mt-3 max-w-lg text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#0c3441] sm:text-4xl">
            Standards that strengthen confidence.
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-7 text-[#617981]">
            Quality is not a single department. It is the way clinical,
            diagnostic and patient-support processes come together every day.
          </p>
        </Reveal>

        {/* ========================================= */}
        {/* CERTIFICATE CARDS */}
        {/* ========================================= */}

        <div className="grid gap-5 sm:grid-cols-2">

          {/* ======================================= */}
          {/* NABH */}
          {/* ======================================= */}

          <Reveal>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="group overflow-hidden rounded-[1.5rem] border border-[#dcebea] bg-white shadow-[0_8px_30px_rgba(8,59,73,0.06)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(8,59,73,0.12)]"
            >
              <Link
                href="/images/about/NABH.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >

                {/* IMAGE */}
                <div className="relative h-60 overflow-hidden bg-[#f7fcfb] p-3">

                  <img
                    src="/images/about/NABH.jpg"
                    alt="NABH Certificate"
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.025]"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-[#063B5C]/0 transition duration-300 group-hover:bg-[#063B5C]/10">
                    <span className="translate-y-2 rounded-full bg-white px-4 py-2 text-[11px] font-semibold text-[#0c3441] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      View Certificate ↗
                    </span>
                  </div>

                </div>

                {/* CONTENT */}
                <div className="border-t border-[#e5eeee] px-5 py-4">

                  <div className="flex items-center justify-between">

                    <div>
                      <h3 className="text-lg font-semibold text-[#0c3441]">
                        NABH
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-[#6b8188]">
                        Hospital accreditation and quality standards
                      </p>
                    </div>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#07877f]/10">
                      <CheckCircle2
                        size={17}
                        strokeWidth={2}
                        className="text-[#07877f]"
                      />
                    </span>

                  </div>

                </div>

              </Link>
            </motion.div>
          </Reveal>


          {/* ======================================= */}
          {/* NABL */}
          {/* ======================================= */}

          <Reveal delay={0.12}>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="group overflow-hidden rounded-[1.5rem] border border-[#dcebea] bg-white shadow-[0_8px_30px_rgba(8,59,73,0.06)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(8,59,73,0.12)]"
            >
              <Link
                href="/images/about/NABL.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >

                {/* IMAGE */}
                <div className="relative h-60 overflow-hidden bg-[#f7fcfb] p-3">

                  <img
                    src="/images/about/NABL.jpg"
                    alt="NABL Certificate"
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.025]"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-[#063B5C]/0 transition duration-300 group-hover:bg-[#063B5C]/10">
                    <span className="translate-y-2 rounded-full bg-white px-4 py-2 text-[11px] font-semibold text-[#0c3441] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      View Certificate ↗
                    </span>
                  </div>

                </div>

                {/* CONTENT */}
                <div className="border-t border-[#e5eeee] px-5 py-4">

                  <div className="flex items-center justify-between">

                    <div>
                      <h3 className="text-lg font-semibold text-[#0c3441]">
                        NABL
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-[#6b8188]">
                        Laboratory quality and competence
                      </p>
                    </div>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#07877f]/10">
                      <CheckCircle2
                        size={17}
                        strokeWidth={2}
                        className="text-[#07877f]"
                      />
                    </span>

                  </div>

                </div>

              </Link>
            </motion.div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}