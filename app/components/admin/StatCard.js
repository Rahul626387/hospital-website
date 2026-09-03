
// "use client";

// import React from "react";

// const StatCard = ({
//   title,
//   value,
//   icon: Icon,
//   type = "total",
// }) => {
//   const theme = {
//     total: {
//       icon: "text-[#087f8c]",
//       bg: "bg-[#087f8c]/10",
//       watermark: "text-[#087f8c]/[0.06]",
//     },

//     active: {
//       icon: "text-emerald-600",
//       bg: "bg-emerald-50",
//       watermark: "text-emerald-600/[0.06]",
//     },

//     inactive: {
//       icon: "text-red-500",
//       bg: "bg-red-50",
//       watermark: "text-red-500/[0.06]",
//     },

//     posts: {
//       icon: "text-[#075985]",
//       bg: "bg-[#075985]/10",
//       watermark: "text-[#075985]/[0.06]",
//     },
//   };

//   const colors = theme[type] || theme.total;

//   return (
//     <div
//       className="
//         group relative overflow-hidden
//         rounded-xl border border-gray-100
//         bg-white px-3 py-3
//         shadow-sm
//         transition-all duration-300
//         hover:-translate-y-1 hover:shadow-md
//       "
//     >
//       {/* Watermark Icon */}
//       {Icon && (
//         <Icon
//           className={`
//             absolute -bottom-3 -right-3
//             h-16 w-16
//             ${colors.watermark}
//             transition-all duration-500
//             group-hover:scale-110
//             group-hover:rotate-6
//           `}
//           strokeWidth={1.3}
//         />
//       )}

//       {/* Content */}
//       <div className="relative z-10">

//         {/* Top */}
//         <div className="flex items-center justify-between">

//           {/* Icon */}
//           {Icon && (
//             <div
//               className={`
//                 flex h-8 w-8
//                 items-center justify-center
//                 rounded-lg
//                 ${colors.bg}
//                 ${colors.icon}
//                 transition-transform duration-300
//                 group-hover:scale-105
//               `}
//             >
//               <Icon size={16} strokeWidth={2} />
//             </div>
//           )}

//           {/* Type */}
//           <span className="text-[9px] font-semibold uppercase tracking-wide text-gray-400">
//             {type}
//           </span>
//         </div>

//         {/* Value */}
//         <div className="mt-2.5">
//           <h3 className="text-xl font-bold leading-none text-gray-800">
//             {value}
//           </h3>

//           <p className="mt-1 text-[11px] font-medium text-gray-500">
//             {title}
//           </p>
//         </div>
//       </div>

//       {/* Gradient Line */}
//       <div className="absolute bottom-0 left-0 h-[2px] w-full overflow-hidden">
//         <div
//           className="
//             h-full w-full
//             origin-left scale-x-50
//             bg-gradient-to-r
//             from-[#087f8c]
//             via-[#075985]
//             to-transparent
//             transition-transform duration-500
//             group-hover:scale-x-100
//           "
//         />
//       </div>
//     </div>
//   );
// };

// export default StatCard;


"use client";

import React from "react";

const StatCard = ({
  title,
  value,
  icon: Icon,
  type = "total",
}) => {
  const theme = {
    total: {
      card: "from-[#087f8c]/[0.08] via-white to-white",
      icon: "bg-[#087f8c]/10 text-[#087f8c]",
      watermark: "text-[#087f8c]/[0.07]",
      line: "from-[#087f8c] to-[#075985]",
      badge: "bg-[#087f8c]/10 text-[#087f8c]",
      border: "hover:border-[#087f8c]/30",
    },

    active: {
      card: "from-emerald-50/80 via-white to-white",
      icon: "bg-emerald-100 text-emerald-600",
      watermark: "text-emerald-500/[0.07]",
      line: "from-emerald-400 to-teal-500",
      badge: "bg-emerald-50 text-emerald-600",
      border: "hover:border-emerald-200",
    },

    inactive: {
      card: "from-rose-50/80 via-white to-white",
      icon: "bg-rose-100 text-rose-500",
      watermark: "text-rose-500/[0.07]",
      line: "from-rose-400 to-orange-400",
      badge: "bg-rose-50 text-rose-500",
      border: "hover:border-rose-200",
    },

    posts: {
      card: "from-sky-50/80 via-white to-white",
      icon: "bg-sky-100 text-[#075985]",
      watermark: "text-[#075985]/[0.07]",
      line: "from-[#075985] to-cyan-400",
      badge: "bg-sky-50 text-[#075985]",
      border: "hover:border-sky-200",
    },
  };

  const colors = theme[type] || theme.total;

  return (
    <div
      className={`
        group relative overflow-hidden
        rounded-2xl border border-gray-100
        bg-gradient-to-br ${colors.card}
        px-4 py-3.5
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-lg
        ${colors.border}
      `}
    >
      {/* Decorative Circle */}
      <div
        className={`
          absolute -right-8 -top-8
          h-20 w-20 rounded-full
          ${colors.icon}
          opacity-30 blur-xl
          transition-all duration-500
          group-hover:scale-125
        `}
      />

      {/* Watermark Icon */}
      {Icon && (
        <Icon
          className={`
            absolute -bottom-4 -right-3
            h-[72px] w-[72px]
            ${colors.watermark}
            transition-all duration-500
            group-hover:scale-110
            group-hover:-rotate-6
          `}
          strokeWidth={1.2}
        />
      )}

      {/* Content */}
      <div className="relative z-10">

        {/* Top Row */}
        <div className="flex items-center justify-between">

          {/* Icon */}
          {Icon && (
            <div
              className={`
                flex h-9 w-9
                items-center justify-center
                rounded-xl
                ${colors.icon}
                shadow-sm
                transition-all duration-300
                group-hover:scale-105
              `}
            >
              <Icon size={17} strokeWidth={2} />
            </div>
          )}

          {/* Badge */}
          <span
            className={`
              rounded-full
              px-2 py-1
              text-[8px]
              font-bold
              uppercase
              tracking-wider
              ${colors.badge}
            `}
          >
            {type}
          </span>
        </div>

        {/* Stats */}
        <div className="mt-2">
          <h3 className="text-xl font-semibold leading-none tracking-tight text-gray-800">
            {value}
          </h3>

          {/* <p className="mt-1.5 text-[11px] font-semibold text-gray-500">
            {title}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default StatCard;