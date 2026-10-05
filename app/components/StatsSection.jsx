"use client";

import { motion } from "framer-motion";


export default function StatsSection() {
  return (
    // <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
    //   <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
    //     {stats.map(([number, label], index) => (
    //       <motion.div
    //         key={label}
    //         initial={{ opacity: 0, y: 20 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         viewport={{ once: true }}
    //         transition={{ delay: index * 0.1 }}
    //         className="relative text-center"
    //       >
    //         <h3 className="text-4xl font-black text-[#0A7A78] sm:text-5xl">
    //           {number}
    //         </h3>

    //         <p className="mt-2 text-sm font-medium text-slate-500">
    //           {label}
    //         </p>

    //         {index !== stats.length - 1 && (
    //           <div className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-slate-200 md:block" />
    //         )}
    //       </motion.div>
    //     ))}
    //   </div>
    // </section>
    <section className="relative z-10 -mt-6 px-4 sm:px-6">
  <div className="mx-auto grid max-w-5xl grid-cols-2 overflow-hidden rounded-2xl border border-white/80 bg-white/95 shadow-[0_15px_50px_rgba(8,59,73,0.10)] backdrop-blur md:grid-cols-4">

    {stats.map((item, index) => {
      const Icon = item.icon;

      return (
        <Reveal
          key={item.label}
          delay={index * 0.08}
          y={15}
          className="relative px-4 py-4 sm:px-5 sm:py-5"
        >
          {/* Divider */}
          {index < stats.length - 1 && (
            <div className="absolute right-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-[#d9e9e7] md:block" />
          )}

          <div className="flex items-center gap-2.5">

            {/* Different Icon Color */}
            <div
              className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl ${item.iconBg} ${item.iconColor}`}
            >
              <Icon
                size={16}
                strokeWidth={1.8}
              />
            </div>

            {/* Label */}
            <p className="text-[10px] font-semibold uppercase tracking-[0.11em] text-[#66808a]">
              {item.label}
            </p>
          </div>

          {/* Value */}
          <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#0c3441] sm:text-3xl">
            <Counter
              value={item.value}
              suffix={item.suffix}
            />
          </p>
        </Reveal>
      );
    })}

  </div>
</section>
  );
}