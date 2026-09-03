
// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { FiChevronRight, FiHome } from "react-icons/fi";

// const Breadcrumb = () => {
//   const pathname = usePathname();

//   const segments = pathname
//     .split("/")
//     .filter(Boolean);

//   // URL labels ko readable name mein convert karega
//   const formatLabel = (text) => {
//     return text
//       .replace(/-/g, " ")
//       .replace(/\b\w/g, (char) => char.toUpperCase());
//   };

//   // Admin ke baad wale routes
//   const breadcrumbSegments = segments.filter(
//     (segment) => segment !== "admin"
//   );

//   return (
//     <nav aria-label="Breadcrumb" className="mb-4">
//       <ol className="flex items-center gap-2 text-sm">

//         {/* Dashboard */}
//         <li>
//           <Link
//             href="/admin/"
//             className="flex items-center gap-1.5 text-gray-500 transition hover:text-[#087f8c]"
//           >
//             <FiHome size={15} />
//             <span>Dashboard</span>
//           </Link>
//         </li>

//         {/* Other Pages */}
//         {breadcrumbSegments.map((segment, index) => {
//           const isLast =
//             index === breadcrumbSegments.length - 1;

//           const href =
//             "/admin/" +
//             breadcrumbSegments
//               .slice(0, index + 1)
//               .join("/");

//           return (
//             <li
//               key={segment}
//               className="flex items-center gap-2"
//             >
//               <FiChevronRight
//                 size={15}
//                 className="text-gray-400"
//               />

//               {isLast ? (
//                 <span className="font-medium text-[#087f8c]">
//                   {formatLabel(segment)}
//                 </span>
//               ) : (
//                 <Link
//                   href={href}
//                   className="text-gray-500 transition hover:text-[#087f8c]"
//                 >
//                   {formatLabel(segment)}
//                 </Link>
//               )}
//             </li>
//           );
//         })}
//       </ol>
//     </nav>
//   );
// };

// export default Breadcrumb;


// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { FiHome, FiChevronRight } from "react-icons/fi";

// const Breadcrumb = () => {
//   const pathname = usePathname();

//   const segments = pathname
//     .split("/")
//     .filter(Boolean)
//     .filter((segment) => segment !== "admin");

//   const formatLabel = (text) => {
//     return text
//       .replace(/-/g, " ")
//       .replace(/\b\w/g, (char) => char.toUpperCase());
//   };

//   return (
//     <div className="mb-4 w-full">
//       <div className="flex min-h-[44px] w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-3 shadow-sm">

//         {/* Left Side */}
//         <div className="flex min-w-0 items-center">

//           {/* Dashboard */}
//           <Link
//             href="/admin/"
//             className="group flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[12px] font-medium text-gray-500 transition-all hover:bg-[#087f8c]/10 hover:text-[#087f8c]"
//           >
//             <FiHome
//               size={14}
//               className="transition-transform group-hover:scale-110"
//             />

//             <span>Dashboard</span>
//           </Link>

//           {/* Breadcrumb Items */}
//           {segments.map((segment, index) => {
//             const isLast =
//               index === segments.length - 1;

//             const href =
//               "/admin/" +
//               segments
//                 .slice(0, index + 1)
//                 .join("/");

//             return (
//               <div
//                 key={segment}
//                 className="flex min-w-0 items-center"
//               >
//                 {/* Separator */}
//                 <FiChevronRight
//                   size={14}
//                   className="mx-1 text-gray-300"
//                 />

//                 {isLast ? (
//                   <span className="flex max-w-[200px] items-center gap-1.5 truncate rounded-md bg-[#087f8c]/10 px-2.5 py-1.5 text-[12px] font-semibold text-[#087f8c]">
//                     <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#087f8c]" />

//                     <span className="truncate">
//                       {formatLabel(segment)}
//                     </span>
//                   </span>
//                 ) : (
//                   <Link
//                     href={href}
//                     className="truncate rounded-md px-2 py-1.5 text-[12px] font-medium text-gray-500 transition hover:bg-gray-100 hover:text-[#087f8c]"
//                   >
//                     {formatLabel(segment)}
//                   </Link>
//                 )}
//               </div>
//             );
//           })}
//         </div>

//         {/* Optional Right Side */}
//         <div className="hidden text-[11px] text-gray-400 sm:block">
//           Admin Panel
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Breadcrumb;


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiChevronRight } from "react-icons/fi";

const Breadcrumb = () => {
  const pathname = usePathname();

  // Dashboard page par breadcrumb hide
  if (pathname === "/admin" || pathname === "/admin/") {
    return null;
  }

  const segments = pathname
    .split("/")
    .filter(Boolean)
    .filter((segment) => segment !== "admin");

  const formatLabel = (text) => {
    return text
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className="mb-4 w-full">
      <div
        className="
          flex min-h-[40px] w-full items-center
          rounded-lg
          border border-[#087f8c]/10
          bg-gradient-to-r
          from-[#087f8c]/10
          via-[#087f8c]/5
          to-transparent
          px-3
        "
      >
        {/* Dashboard */}
        <Link
          href="/admin/"
          className="
            group flex items-center gap-1.5
            rounded-md px-2 py-1
            text-[12px] font-medium
            text-gray-500
            transition-all duration-200
            hover:bg-white/70
            hover:text-[#087f8c]
          "
        >
          <FiHome
            size={14}
            className="transition-transform group-hover:scale-110"
          />

          <span>Dashboard</span>
        </Link>

        {/* Breadcrumb Items */}
        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1;

          const href =
            "/admin/" +
            segments
              .slice(0, index + 1)
              .join("/");

          return (
            <div
              key={segment}
              className="flex min-w-0 items-center"
            >
              {/* Separator */}
              <FiChevronRight
                size={14}
                className="mx-1 text-gray-400"
              />

              {isLast ? (
                <span
                  className="
                    flex max-w-[220px]
                    items-center gap-1.5
                    truncate
                    rounded-md
                    bg-white/70
                    px-2.5 py-1
                    text-[12px]
                    font-semibold
                    text-[#087f8c]
                    shadow-sm
                  "
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#087f8c]" />

                  <span className="truncate">
                    {formatLabel(segment)}
                  </span>
                </span>
              ) : (
                <Link
                  href={href}
                  className="
                    truncate rounded-md
                    px-2 py-1
                    text-[12px]
                    font-medium
                    text-gray-500
                    transition
                    hover:bg-white/70
                    hover:text-[#087f8c]
                  "
                >
                  {formatLabel(segment)}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Breadcrumb;


