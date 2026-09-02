// "use client";

// import React, { useEffect, useState } from "react";
// import { usePathname, useRouter } from "next/navigation";

// import {
//   FiHome,
//   FiUsers,
//   FiUserPlus,
//   FiCalendar,
//   FiLayers,
//   FiGrid,
//   FiMapPin,
//   FiBarChart2,
//   FiSettings,
//   FiBell,
//   FiLogOut,
//   FiChevronDown,
//   FiChevronLeft,
//   FiChevronRight,
//   FiMenu,
//   FiX,
//   FiActivity,
// } from "react-icons/fi";

// const menuItems = [
//   {
//     title: "Dashboard",
//     icon: FiHome,
//     path: "/admin/dashboard",
//   },

 

//   {
//     title: "Doctors",
//     icon: FiUserPlus,
//     path: "/admin/doctors",
//   },

//   {
//     title: "Master",
//     icon: FiLayers,

//     children: [
//       {
//         title: "Departments",
//         icon: FiGrid,
//         path: "/admin/departments",
//       },

//       {
//         title: "Doctors Master",
//         icon: FiUserPlus,
//         path: "/admin/doctors-master",
//       },
//     ],
//   },

//   {
//     title: "Settings",
//     icon: FiSettings,
//     path: "/admin/settings",
//   },
// ];

// const AdminSidebar = () => {
//   const router = useRouter();
//   const pathname = usePathname();

//   const [collapsed, setCollapsed] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [openMenus, setOpenMenus] = useState({});

//   // =====================================================
//   // ACTIVE PATH
//   // =====================================================

//   const isPathActive = (path) => {
//     if (!path) return false;

//     return (
//       pathname === path ||
//       pathname.startsWith(`${path}/`)
//     );
//   };

//   // =====================================================
//   // CHECK ACTIVE CHILD
//   // =====================================================

//   const hasActiveChild = (item) => {
//     if (!item?.children?.length) return false;

//     return item.children.some((child) =>
//       isPathActive(child.path)
//     );
//   };

//   // =====================================================
//   // MENU ACTIVE
//   // =====================================================

//   const isMenuActive = (item) => {
//     if (item.path && isPathActive(item.path)) {
//       return true;
//     }

//     if (item.children?.length) {
//       return hasActiveChild(item);
//     }

//     return false;
//   };

//   // =====================================================
//   // AUTO OPEN MENU
//   // =====================================================

//   useEffect(() => {
//     const activeMenus = {};

//     menuItems.forEach((item) => {
//       if (
//         item.children?.length &&
//         hasActiveChild(item)
//       ) {
//         activeMenus[item.title] = true;
//       }
//     });

//     setOpenMenus((prev) => ({
//       ...prev,
//       ...activeMenus,
//     }));
//   }, [pathname]);

//   // =====================================================
//   // TOGGLE
//   // =====================================================

//   const toggleMenu = (title) => {
//     setOpenMenus((prev) => ({
//       ...prev,
//       [title]: !prev[title],
//     }));
//   };

//   // =====================================================
//   // NAVIGATION
//   // =====================================================

//   const handleNavigate = (path) => {
//     if (!path) return;

//     router.push(path);
//     setMobileOpen(false);
//   };

//   // =====================================================
//   // LOGOUT
//   // =====================================================

//   const handleLogout = () => {
//     localStorage.removeItem("token");

//     router.push("/login");
//   };

//   // =====================================================
//   // RENDER MENU
//   // =====================================================

//   const renderMenuItems = (items) => {
//     return items.map((item) => {
//       const Icon = item.icon;

//       const hasChildren =
//         Array.isArray(item.children) &&
//         item.children.length > 0;

//       const active = isMenuActive(item);
//       const isOpen = !!openMenus[item.title];

//       return (
//         <div
//           key={item.title}
//           className="relative"
//         >
//           {/* ================= PARENT ================= */}

//           <button
//             type="button"
//             title={collapsed ? item.title : ""}
//             onClick={() => {
//               if (hasChildren) {
//                 toggleMenu(item.title);
//               } else {
//                 handleNavigate(item.path);
//               }
//             }}
//             className={`
//               group
//               relative
//               w-full
//               flex
//               items-center
//               rounded-xl
//               overflow-hidden

//               transition-all
//               duration-300

//               ${
//                 collapsed
//                   ? "justify-center px-2 py-2.5"
//                   : "gap-3 px-3 py-2.5"
//               }

//               ${
//                 active
//                   ? `
//                     bg-orange-500/[0.13]
//                     text-orange-300
//                     border
//                     border-orange-500/20
//                   `
//                   : `
//                     text-gray-500
//                     border
//                     border-transparent

//                     hover:text-white
//                     hover:bg-white/[0.045]
//                   `
//               }
//             `}
//           >
//             {/* Active Gradient */}

//             {active && (
//               <span
//                 className="
//                   absolute
//                   inset-0
//                   pointer-events-none

//                   bg-gradient-to-r
//                   from-orange-500/[0.15]
//                   via-orange-500/[0.06]
//                   to-transparent
//                 "
//               />
//             )}

//             {/* Active Line */}

//             {active && (
//               <span
//                 className="
//                   absolute
//                   left-0
//                   top-1/2
//                   -translate-y-1/2

//                   w-[3px]
//                   h-7

//                   bg-orange-500
//                   rounded-r-full

//                   shadow-[0_0_12px_rgba(249,115,22,0.9)]
//                 "
//               />
//             )}

//             {/* ICON */}

//             <span
//               className={`
//                 relative
//                 z-10

//                 flex-shrink-0

//                 w-8
//                 h-8

//                 rounded-lg

//                 flex
//                 items-center
//                 justify-center

//                 transition-all
//                 duration-300

//                 ${
//                   active
//                     ? `
//                       bg-orange-500/20
//                       text-orange-400
//                       scale-105
//                     `
//                     : `
//                       text-gray-500

//                       group-hover:bg-white/5
//                       group-hover:text-orange-500
//                       group-hover:scale-110
//                     `
//                 }
//               `}
//             >
//               {Icon && <Icon size={18} />}
//             </span>

//             {/* TITLE */}

//             {!collapsed && (
//               <span
//                 className={`
//                   relative
//                   z-10

//                   flex-1

//                   text-left
//                   text-[13px]
//                   font-medium

//                   whitespace-nowrap

//                   ${
//                     active
//                       ? "text-orange-300"
//                       : "text-gray-400 group-hover:text-white"
//                   }
//                 `}
//               >
//                 {item.title}
//               </span>
//             )}

//             {/* ARROW */}

//             {!collapsed && hasChildren && (
//               <FiChevronDown
//                 size={15}
//                 className={`
//                   relative
//                   z-10

//                   text-gray-600

//                   transition-transform
//                   duration-300

//                   ${
//                     isOpen
//                       ? "rotate-180 text-orange-400"
//                       : ""
//                   }
//                 `}
//               />
//             )}

//             {/* DOT */}

//             {!collapsed && active && (
//               <span
//                 className="
//                   relative
//                   z-10

//                   w-1.5
//                   h-1.5

//                   rounded-full

//                   bg-orange-400

//                   shadow-[0_0_8px_rgba(249,115,22,0.9)]
//                 "
//               />
//             )}
//           </button>

//           {/* ================= CHILDREN ================= */}

//           {hasChildren && !collapsed && (
//             <div
//               className={`
//                 overflow-hidden

//                 transition-all
//                 duration-300

//                 ${
//                   isOpen
//                     ? "max-h-[800px] opacity-100"
//                     : "max-h-0 opacity-0"
//                 }
//               `}
//             >
//               <div
//                 className="
//                   ml-7
//                   mt-1
//                   pl-3

//                   border-l
//                   border-white/[0.07]

//                   space-y-1
//                 "
//               >
//                 {item.children.map((child) => {
//                   const ChildIcon = child.icon;

//                   const childActive =
//                     isPathActive(child.path);

//                   return (
//                     <button
//                       key={child.title}
//                       type="button"
//                       onClick={() =>
//                         handleNavigate(child.path)
//                       }
//                       className={`
//                         group/child

//                         relative
//                         w-full

//                         flex
//                         items-center
//                         gap-3

//                         px-3
//                         py-2

//                         rounded-lg

//                         text-[12px]

//                         transition-all
//                         duration-300

//                         ${
//                           childActive
//                             ? `
//                               bg-orange-500/[0.14]
//                               text-orange-300
//                               border
//                               border-orange-500/15
//                             `
//                             : `
//                               text-gray-500
//                               border
//                               border-transparent

//                               hover:text-white
//                               hover:bg-white/[0.045]

//                               hover:translate-x-1
//                             `
//                         }
//                       `}
//                     >
//                       {/* Active line */}

//                       {childActive && (
//                         <span
//                           className="
//                             absolute
//                             left-0
//                             top-1/2
//                             -translate-y-1/2

//                             w-[2px]
//                             h-5

//                             bg-orange-400
//                             rounded-r-full
//                           "
//                         />
//                       )}

//                       {/* Child icon */}

//                       <span
//                         className={`
//                           w-6
//                           h-6

//                           rounded-md

//                           flex
//                           items-center
//                           justify-center

//                           ${
//                             childActive
//                               ? "bg-orange-500/20"
//                               : "bg-white/[0.02]"
//                           }
//                         `}
//                       >
//                         {ChildIcon && (
//                           <ChildIcon
//                             size={14}
//                             className={
//                               childActive
//                                 ? "text-orange-400"
//                                 : "text-gray-500"
//                             }
//                           />
//                         )}
//                       </span>

//                       {/* Title */}

//                       <span
//                         className={`
//                           flex-1
//                           text-left

//                           ${
//                             childActive
//                               ? "font-semibold text-orange-300"
//                               : ""
//                           }
//                         `}
//                       >
//                         {child.title}
//                       </span>

//                       {childActive && (
//                         <span
//                           className="
//                             w-1.5
//                             h-1.5

//                             rounded-full

//                             bg-orange-400
//                             shadow-[0_0_8px_rgba(249,115,22,0.9)]
//                           "
//                         />
//                       )}
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           )}

//           {/* ================= COLLAPSED POPUP ================= */}

//           {hasChildren && collapsed && (
//             <div
//               className="
//                 absolute
//                 left-[68px]
//                 top-0

//                 z-[99999]

//                 hidden
//                 group-hover:block

//                 w-60

//                 rounded-xl

//                 bg-[#151819]

//                 border
//                 border-white/[0.08]

//                 shadow-2xl

//                 p-2
//               "
//             >
//               <div
//                 className="
//                   px-3
//                   py-2
//                   mb-1

//                   border-b
//                   border-white/[0.05]
//                 "
//               >
//                 <p
//                   className="
//                     text-[10px]
//                     uppercase
//                     tracking-[0.18em]
//                     font-bold
//                     text-gray-500
//                   "
//                 >
//                   {item.title}
//                 </p>
//               </div>

//               <div className="space-y-1">
//                 {item.children.map((child) => {
//                   const ChildIcon = child.icon;
//                   const childActive =
//                     isPathActive(child.path);

//                   return (
//                     <button
//                       key={child.title}
//                       type="button"
//                       onClick={() =>
//                         handleNavigate(child.path)
//                       }
//                       className={`
//                         relative
//                         w-full

//                         flex
//                         items-center
//                         gap-3

//                         px-3
//                         py-2.5

//                         rounded-lg

//                         text-xs

//                         transition-all

//                         ${
//                           childActive
//                             ? `
//                               bg-orange-500/[0.15]
//                               text-orange-300
//                               border
//                               border-orange-500/20
//                             `
//                             : `
//                               text-gray-400
//                               hover:text-white
//                               hover:bg-white/[0.05]
//                             `
//                         }
//                       `}
//                     >
//                       <span
//                         className="
//                           w-7
//                           h-7

//                           rounded-lg

//                           flex
//                           items-center
//                           justify-center

//                           bg-white/[0.03]
//                         "
//                       >
//                         {ChildIcon && (
//                           <ChildIcon
//                             size={15}
//                             className={
//                               childActive
//                                 ? "text-orange-400"
//                                 : "text-gray-500"
//                             }
//                           />
//                         )}
//                       </span>

//                       <span>
//                         {child.title}
//                       </span>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           )}
//         </div>
//       );
//     });
//   };

//   return (
//     <>
//       {/* =====================================================
//           MOBILE OVERLAY
//       ===================================================== */}

//       {mobileOpen && (
//         <div
//           onClick={() => setMobileOpen(false)}
//           className="
//             fixed
//             inset-0
//             z-[9998]

//             bg-black/60
//             backdrop-blur-sm

//             lg:hidden
//           "
//         />
//       )}

//       {/* =====================================================
//           MOBILE BUTTON
//       ===================================================== */}

//       {!mobileOpen && (
//         <button
//           type="button"
//           onClick={() => setMobileOpen(true)}
//           className="
//             fixed
//             left-4
//             top-4

//             z-[9997]

//             w-10
//             h-10

//             rounded-xl

//             bg-[#111415]

//             border
//             border-white/[0.08]

//             text-white

//             flex
//             items-center
//             justify-center

//             shadow-xl

//             lg:hidden
//           "
//         >
//           <FiMenu size={20} />
//         </button>
//       )}

//       {/* =====================================================
//           SIDEBAR
//       ===================================================== */}

//       <aside
//         className={`
//           fixed
//           lg:sticky

//           top-2
//           left-0

//           z-[9999]

//           h-[calc(100vh-1rem)]

//           flex
//           flex-col

//           m-2

//           rounded-2xl

//           bg-[#0D0F10]

//           border
//           border-white/[0.06]

//           text-white

//           shadow-2xl

//           transition-all
//           duration-300

//           ${
//             collapsed
//               ? "lg:w-[78px]"
//               : "lg:w-[260px]"
//           }

//           ${
//             mobileOpen
//               ? "translate-x-0 w-[260px]"
//               : "-translate-x-[110%] lg:translate-x-0"
//           }
//         `}
//       >
//         {/* =====================================================
//             COLLAPSE
//         ===================================================== */}

//         <button
//           type="button"
//           onClick={() => setCollapsed(!collapsed)}
//           className="
//             hidden
//             lg:flex

//             absolute

//             -right-3
//             top-7

//             z-[10000]

//             w-7
//             h-7

//             rounded-full

//             bg-orange-500

//             text-white

//             items-center
//             justify-center

//             border-4
//             border-gray-100

//             shadow-lg

//             hover:bg-orange-600
//             hover:scale-110

//             transition
//           "
//         >
//           {collapsed ? (
//             <FiChevronRight size={13} />
//           ) : (
//             <FiChevronLeft size={13} />
//           )}
//         </button>

//         {/* =====================================================
//             MOBILE CLOSE
//         ===================================================== */}

//         <button
//           onClick={() => setMobileOpen(false)}
//           className="
//             absolute
//             right-4
//             top-4

//             w-8
//             h-8

//             rounded-lg

//             bg-white/[0.04]

//             text-gray-500

//             flex
//             items-center
//             justify-center

//             hover:text-white

//             lg:hidden
//           "
//         >
//           <FiX size={18} />
//         </button>

//         {/* =====================================================
//             LOGO
//         ===================================================== */}

//         <div
//           className={`
//             pt-6
//             pb-5

//             ${
//               collapsed
//                 ? "px-3"
//                 : "px-5"
//             }
//           `}
//         >
//           <div
//             className={`
//               flex
//               items-center

//               ${
//                 collapsed
//                   ? "justify-center"
//                   : "gap-3"
//               }
//             `}
//           >
//             <div
//               className="
//                 flex-shrink-0

//                 w-11
//                 h-11

//                 rounded-[14px]

//                 bg-gradient-to-br
//                 from-orange-400
//                 to-orange-600

//                 flex
//                 items-center
//                 justify-center

//                 shadow-[0_8px_25px_rgba(249,115,22,0.25)]
//               "
//             >
//               <span className="text-lg font-black">
//                 BM
//               </span>
//             </div>

//             {!collapsed && (
//               <div className="whitespace-nowrap">
//                 <h1 className="text-[17px] font-bold">
//                   Baderia
//                   <span className="text-orange-500">
//                     Metroprime
//                   </span>
//                 </h1>

//                 <p className="text-[9px] text-gray-500">
//                   Multi Speciality Hospital
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* =====================================================
//             NAVIGATION
//         ===================================================== */}

//         <div className="flex-1 px-2 overflow-y-auto">
//           {!collapsed && (
//             <p
//               className="
//                 px-3
//                 mb-2

//                 text-[9px]
//                 uppercase
//                 tracking-[0.18em]

//                 font-bold
//                 text-gray-600
//               "
//             >
//               Main Menu
//             </p>
//           )}

//           <nav className="space-y-1">
//             {renderMenuItems(menuItems)}
//           </nav>
//         </div>

//         {/* =====================================================
//             NOTIFICATION
//         ===================================================== */}

//         <div
//           className={`
//             ${
//               collapsed
//                 ? "px-2"
//                 : "px-3"
//             }

//             pb-3
//           `}
//         >
//           <div
//             className={`
//               rounded-2xl

//               bg-gradient-to-br
//               from-orange-500/[0.12]
//               to-orange-500/[0.02]

//               border
//               border-orange-500/10

//               ${
//                 collapsed
//                   ? "p-2"
//                   : "p-3"
//               }
//             `}
//           >
//             <div
//               className={`
//                 flex
//                 items-center

//                 ${
//                   collapsed
//                     ? "justify-center"
//                     : "gap-3"
//                 }
//               `}
//             >
//               <div
//                 className="
//                   relative

//                   w-9
//                   h-9

//                   rounded-xl

//                   bg-orange-500/10

//                   flex
//                   items-center
//                   justify-center

//                   text-orange-500
//                 "
//               >
//                 <FiBell size={17} />

//                 <span
//                   className="
//                     absolute
//                     top-1
//                     right-1

//                     w-2
//                     h-2

//                     rounded-full

//                     bg-orange-500

//                     animate-pulse
//                   "
//                 />
//               </div>

//               {!collapsed && (
//                 <div>
//                   <p className="text-[11px] font-semibold">
//                     Notifications
//                   </p>

//                   <p className="text-[9px] text-gray-500">
//                     5 new notifications
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* =====================================================
//             PROFILE
//         ===================================================== */}

//         <div className="p-2 border-t border-white/[0.06]">
//           <div
//             className={`
//               flex
//               items-center

//               ${
//                 collapsed
//                   ? "justify-center"
//                   : "gap-3"
//               }
//             `}
//           >
//             <div
//               className="
//                 flex-shrink-0

//                 w-9
//                 h-9

//                 rounded-xl

//                 bg-gradient-to-br
//                 from-orange-400
//                 to-orange-600

//                 flex
//                 items-center
//                 justify-center

//                 text-xs
//                 font-bold
//               "
//             >
//               A
//             </div>

//             {!collapsed && (
//               <>
//                 <div className="flex-1 min-w-0">
//                   <p className="text-xs font-semibold truncate">
//                     Admin
//                   </p>

//                   <p className="text-[9px] text-gray-600">
//                     Administrator
//                   </p>
//                 </div>

//                 <button
//                   type="button"
//                   onClick={handleLogout}
//                   title="Logout"
//                   className="
//                     w-8
//                     h-8

//                     rounded-lg

//                     flex
//                     items-center
//                     justify-center

//                     text-gray-600

//                     hover:text-red-400
//                     hover:bg-red-500/10

//                     transition
//                   "
//                 >
//                   <FiLogOut size={16} />
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default AdminSidebar;


"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import {
  FiHome,
  FiUserPlus,
  FiLayers,
  FiGrid,
  FiSettings,
  FiBell,
  FiLogOut,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiMenu,
  FiX,
} from "react-icons/fi";

const menuItems = [
  {
    title: "Dashboard",
    icon: FiHome,
    path: "/admin/dashboard",
  },

  {
    title: "Doctors",
    icon: FiUserPlus,
    path: "/admin/doctors",
  },

  {
    title: "Master",
    icon: FiLayers,
    children: [
      {
        title: "Departments",
        icon: FiGrid,
        path: "/admin/departments",
      },
      {
        title: "Doctors Master",
        icon: FiUserPlus,
        path: "/admin/doctors-master",
      },
    ],
  },

  {
    title: "Settings",
    icon: FiSettings,
    path: "/admin/settings",
  },
];

const AdminSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({});

  // =====================================================
  // ACTIVE PATH
  // =====================================================

  const isPathActive = (path) => {
    if (!path) return false;

    return pathname === path || pathname.startsWith(`${path}/`);
  };

  // =====================================================
  // CHECK ACTIVE CHILD
  // =====================================================

  const hasActiveChild = (item) => {
    if (!item?.children?.length) return false;

    return item.children.some((child) =>
      isPathActive(child.path)
    );
  };

  // =====================================================
  // MENU ACTIVE
  // =====================================================

  const isMenuActive = (item) => {
    if (item.path && isPathActive(item.path)) {
      return true;
    }

    if (item.children?.length) {
      return hasActiveChild(item);
    }

    return false;
  };

  // =====================================================
  // AUTO OPEN ACTIVE MENU
  // =====================================================

  useEffect(() => {
    const activeMenus = {};

    menuItems.forEach((item) => {
      if (item.children?.length && hasActiveChild(item)) {
        activeMenus[item.title] = true;
      }
    });

    setOpenMenus((prev) => ({
      ...prev,
      ...activeMenus,
    }));
  }, [pathname]);

  // =====================================================
  // TOGGLE MENU
  // =====================================================

  const toggleMenu = (title) => {
    setOpenMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  // =====================================================
  // NAVIGATION
  // =====================================================

  const handleNavigate = (path) => {
    if (!path) return;

    router.push(path);
    setMobileOpen(false);
  };

  // =====================================================
  // LOGOUT
  // =====================================================

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  // =====================================================
  // RENDER MENU
  // =====================================================

  const renderMenuItems = (items) => {
    return items.map((item) => {
      const Icon = item.icon;

      const hasChildren =
        Array.isArray(item.children) &&
        item.children.length > 0;

      const active = isMenuActive(item);
      const isOpen = !!openMenus[item.title];

      return (
        <div
          key={item.title}
          className="relative"
        >
          {/* =================================================
              PARENT MENU
          ================================================= */}

          <button
            type="button"
            title={collapsed ? item.title : ""}
            onClick={() => {
              if (hasChildren) {
                toggleMenu(item.title);
              } else {
                handleNavigate(item.path);
              }
            }}
            className={`
              group
              relative
              w-full
              flex
              items-center
              rounded-xl
              overflow-hidden

              transition-all
              duration-300

              ${
                collapsed
                  ? "justify-center px-2 py-2.5"
                  : "gap-3 px-3 py-2.5"
              }

              ${
                active
                  ? `
                    bg-[#087f8c]/15
                    text-[#5eead4]
                    border
                    border-[#087f8c]/25
                  `
                  : `
                    text-gray-500
                    border
                    border-transparent

                    hover:text-white
                    hover:bg-white/[0.045]
                  `
              }
            `}
          >
            {/* ACTIVE BACKGROUND */}

            {active && (
              <span
                className="
                  absolute
                  inset-0
                  pointer-events-none

                  bg-gradient-to-br
                  from-[#087f8c]/30
                  via-transparent
                  to-[#075985]/30
                "
              />
            )}

            {/* ACTIVE LEFT LINE */}

            {active && (
              <span
                className="
                  absolute
                  left-0
                  top-1/2
                  -translate-y-1/2

                  w-[3px]
                  h-7

                  bg-[#087f8c]

                  rounded-r-full

                  shadow-[0_0_12px_rgba(8,127,140,0.8)]
                "
              />
            )}

            {/* ICON */}

            <span
              className={`
                relative
                z-10

                flex-shrink-0

                w-8
                h-8

                rounded-lg

                flex
                items-center
                justify-center

                transition-all
                duration-300

                ${
                  active
                    ? `
                      bg-[#087f8c]/20
                      text-[#5eead4]
                      scale-105
                    `
                    : `
                      text-gray-500

                      group-hover:bg-[#087f8c]/10
                      group-hover:text-[#5eead4]
                      group-hover:scale-110
                    `
                }
              `}
            >
              {Icon && <Icon size={18} />}
            </span>

            {/* TITLE */}

            {!collapsed && (
              <span
                className={`
                  relative
                  z-10

                  flex-1

                  text-left
                  text-[13px]
                  font-medium

                  whitespace-nowrap

                  ${
                    active
                      ? "text-[#5eead4]"
                      : "text-gray-400 group-hover:text-white"
                  }
                `}
              >
                {item.title}
              </span>
            )}

            {/* ARROW */}

            {!collapsed && hasChildren && (
              <FiChevronDown
                size={15}
                className={`
                  relative
                  z-10

                  text-gray-600

                  transition-transform
                  duration-300

                  ${
                    isOpen
                      ? "rotate-180 text-[#087f8c]"
                      : ""
                  }
                `}
              />
            )}

            {/* ACTIVE DOT */}

            {!collapsed && active && (
              <span
                className="
                  relative
                  z-10

                  w-1.5
                  h-1.5

                  rounded-full

                  bg-[#5eead4]

                  shadow-[0_0_8px_rgba(94,234,212,0.8)]
                "
              />
            )}
          </button>

          {/* =================================================
              CHILDREN
          ================================================= */}

          {hasChildren && !collapsed && (
            <div
              className={`
                overflow-hidden

                transition-all
                duration-300

                ${
                  isOpen
                    ? "max-h-[800px] opacity-100"
                    : "max-h-0 opacity-0"
                }
              `}
            >
              <div
                className="
                  ml-7
                  mt-1
                  pl-3

                  border-l
                  border-[#087f8c]/15

                  space-y-1
                "
              >
                {item.children.map((child) => {
                  const ChildIcon = child.icon;

                  const childActive =
                    isPathActive(child.path);

                  return (
                    <button
                      key={child.title}
                      type="button"
                      onClick={() =>
                        handleNavigate(child.path)
                      }
                      className={`
                        group/child

                        relative
                        w-full

                        flex
                        items-center
                        gap-3

                        px-3
                        py-2

                        rounded-lg

                        text-[12px]

                        transition-all
                        duration-300

                        ${
                          childActive
                            ? `
                              bg-[#087f8c]/15
                              text-[#5eead4]

                              border
                              border-[#087f8c]/20
                            `
                            : `
                              text-gray-500

                              border
                              border-transparent

                              hover:text-white
                              hover:bg-[#087f8c]/[0.06]

                              hover:translate-x-1
                            `
                        }
                      `}
                    >
                      {/* CHILD ACTIVE LINE */}

                      {childActive && (
                        <span
                          className="
                            absolute
                            left-0
                            top-1/2
                            -translate-y-1/2

                            w-[2px]
                            h-5

                            bg-[#087f8c]

                            rounded-r-full

                            shadow-[0_0_8px_rgba(8,127,140,0.8)]
                          "
                        />
                      )}

                      {/* CHILD ICON */}

                      <span
                        className={`
                          w-6
                          h-6

                          rounded-md

                          flex
                          items-center
                          justify-center

                          ${
                            childActive
                              ? "bg-[#087f8c]/20"
                              : "bg-white/[0.02]"
                          }
                        `}
                      >
                        {ChildIcon && (
                          <ChildIcon
                            size={14}
                            className={
                              childActive
                                ? "text-[#5eead4]"
                                : "text-gray-500"
                            }
                          />
                        )}
                      </span>

                      {/* CHILD TITLE */}

                      <span
                        className={`
                          flex-1
                          text-left

                          ${
                            childActive
                              ? "font-semibold text-[#5eead4]"
                              : ""
                          }
                        `}
                      >
                        {child.title}
                      </span>

                      {/* CHILD DOT */}

                      {childActive && (
                        <span
                          className="
                            w-1.5
                            h-1.5

                            rounded-full

                            bg-[#5eead4]

                            shadow-[0_0_8px_rgba(94,234,212,0.8)]
                          "
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* =================================================
              COLLAPSED POPUP
          ================================================= */}

          {hasChildren && collapsed && (
            <div
              className="
                absolute
                left-[68px]
                top-0

                z-[99999]

                hidden
                group-hover:block

                w-60

                rounded-xl

                bg-[#081419]

                border
                border-[#087f8c]/20

                shadow-2xl

                p-2

                backdrop-blur-xl
              "
            >
              {/* POPUP HEADER */}

              <div
                className="
                  px-3
                  py-2
                  mb-1

                  border-b
                  border-white/[0.05]
                "
              >
                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.18em]

                    font-bold

                    text-gray-500
                  "
                >
                  {item.title}
                </p>
              </div>

              {/* POPUP ITEMS */}

              <div className="space-y-1">
                {item.children.map((child) => {
                  const ChildIcon = child.icon;

                  const childActive =
                    isPathActive(child.path);

                  return (
                    <button
                      key={child.title}
                      type="button"
                      onClick={() =>
                        handleNavigate(child.path)
                      }
                      className={`
                        relative
                        w-full

                        flex
                        items-center
                        gap-3

                        px-3
                        py-2.5

                        rounded-lg

                        text-xs

                        transition-all

                        ${
                          childActive
                            ? `
                              bg-gradient-to-br
                              from-[#087f8c]/30
                              via-transparent
                              to-[#075985]/30

                              text-[#5eead4]

                              border
                              border-[#087f8c]/20
                            `
                            : `
                              text-gray-400

                              border
                              border-transparent

                              hover:text-white
                              hover:bg-[#087f8c]/[0.06]
                            `
                        }
                      `}
                    >
                      <span
                        className="
                          w-7
                          h-7

                          rounded-lg

                          flex
                          items-center
                          justify-center

                          bg-white/[0.03]
                        "
                      >
                        {ChildIcon && (
                          <ChildIcon
                            size={15}
                            className={
                              childActive
                                ? "text-[#5eead4]"
                                : "text-gray-500"
                            }
                          />
                        )}
                      </span>

                      <span>{child.title}</span>

                      {childActive && (
                        <span
                          className="
                            ml-auto

                            w-1.5
                            h-1.5

                            rounded-full

                            bg-[#5eead4]
                          "
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <>
      {/* =====================================================
          MOBILE OVERLAY
      ===================================================== */}

      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="
            fixed
            inset-0

            z-[9998]

            bg-black/60
            backdrop-blur-sm

            lg:hidden
          "
        />
      )}

      {/* =====================================================
          MOBILE MENU BUTTON
      ===================================================== */}

      {!mobileOpen && (
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="
            fixed
            left-4
            top-4

            z-[9997]

            w-10
            h-10

            rounded-xl

            bg-[#081419]

            border
            border-[#087f8c]/20

            text-[#5eead4]

            flex
            items-center
            justify-center

            shadow-xl

            hover:bg-[#087f8c]/10
            hover:border-[#087f8c]/40

            transition-all

            lg:hidden
          "
        >
          <FiMenu size={20} />
        </button>
      )}

      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside
        className={`
          fixed
          lg:sticky

          top-2
          left-0

          z-[9999]

          h-[calc(100vh-1rem)]

          flex
          flex-col

          m-2

          rounded-2xl

          bg-[#081419]

          border
          border-white/[0.06]

          text-white

          shadow-2xl

          transition-all
          duration-300

          overflow-visible

          ${
            collapsed
              ? "lg:w-[78px]"
              : "lg:w-[260px]"
          }

          ${
            mobileOpen
              ? "translate-x-0 w-[260px]"
              : "-translate-x-[110%] lg:translate-x-0"
          }
        `}
      >
        {/* =====================================================
            SIDEBAR BACKGROUND GLOW
        ===================================================== */}

        <div
          className="
            absolute
            inset-0

            pointer-events-none

            rounded-2xl

            bg-gradient-to-br
            from-[#087f8c]/10
            via-transparent
            to-[#075985]/10
          "
        />

        {/* =====================================================
            TOP GLOW
        ===================================================== */}

        <div
          className="
            absolute

            -top-20
            -left-20

            w-52
            h-52

            rounded-full

            bg-[#087f8c]/10

            blur-[70px]

            pointer-events-none
          "
        />

        {/* =====================================================
            COLLAPSE BUTTON
        ===================================================== */}

        <button
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          className="
            hidden
            lg:flex

            absolute

            -right-3
            top-7

            z-[10000]

            w-7
            h-7

            rounded-full

            bg-gradient-to-br
            from-[#087f8c]
            to-[#075985]

            text-white

            items-center
            justify-center

            border-4
            border-[#061114]

            shadow-[0_4px_15px_rgba(8,127,140,0.35)]

            hover:scale-110

            transition
          "
        >
          {collapsed ? (
            <FiChevronRight size={13} />
          ) : (
            <FiChevronLeft size={13} />
          )}
        </button>

        {/* =====================================================
            MOBILE CLOSE
        ===================================================== */}

        <button
          type="button"
          onClick={() => setMobileOpen(false)}
          className="
            absolute
            right-4
            top-4

            z-20

            w-8
            h-8

            rounded-lg

            bg-white/[0.04]

            text-gray-500

            flex
            items-center
            justify-center

            hover:text-white
            hover:bg-[#087f8c]/10

            transition

            lg:hidden
          "
        >
          <FiX size={18} />
        </button>

        {/* =====================================================
            LOGO
        ===================================================== */}

        <div
          className={`
            relative
            z-10

            pt-6
            pb-5

            ${
              collapsed
                ? "px-3"
                : "px-5"
            }
          `}
        >
          <div
            className={`
              flex
              items-center

              ${
                collapsed
                  ? "justify-center"
                  : "gap-3"
              }
            `}
          >
            {/* LOGO */}

            <div
              className="
                flex-shrink-0

                w-11
                h-11

                rounded-[14px]

                bg-gradient-to-br
                from-[#087f8c]
                to-[#075985]

                flex
                items-center
                justify-center

                shadow-[0_8px_25px_rgba(8,127,140,0.30)]

                border
                border-white/10

                relative
                overflow-hidden
              "
            >
              {/* LOGO SHINE */}

              <span
                className="
                  absolute

                  -top-10
                  -left-10

                  w-20
                  h-20

                  rounded-full

                  bg-white/10

                  blur-xl
                "
              />

              <span
                className="
                  text-lg
                  font-black
                  relative
                  z-10
                "
              >
                BM
              </span>
            </div>

            {/* BRAND */}

            {!collapsed && (
              <div className="whitespace-nowrap">
                <h1
                  className="
                    text-[17px]
                    font-bold
                    tracking-tight
                  "
                >
                  Baderia{" "}
                  <span className="text-[#087f8c]">
                    Metroprime
                  </span>
                </h1>

                <p
                  className="
                    text-[9px]
                    text-gray-500
                    tracking-wide
                  "
                >
                  Multi Speciality Hospital
                </p>
              </div>
            )}
          </div>
        </div>

        {/* =====================================================
            NAVIGATION
        ===================================================== */}

        <div
          className="
            relative
            z-10

            flex-1

            px-2

            overflow-y-auto
          "
        >
          {!collapsed && (
            <p
              className="
                px-3
                mb-2

                text-[9px]
                uppercase
                tracking-[0.18em]

                font-bold

                text-gray-600
              "
            >
              Main Menu
            </p>
          )}

          <nav className="space-y-1">
            {renderMenuItems(menuItems)}
          </nav>
        </div>

        {/* =====================================================
            NOTIFICATION
        ===================================================== */}

        <div
          className={`
            relative
            z-10

            ${
              collapsed
                ? "px-2"
                : "px-3"
            }

            pb-3
          `}
        >
          <div
            className={`
              rounded-2xl

              bg-gradient-to-br
              from-[#087f8c]/30
              via-transparent
              to-[#075985]/30

              border
              border-[#087f8c]/20

              shadow-[0_8px_25px_rgba(8,127,140,0.08)]

              ${
                collapsed
                  ? "p-2"
                  : "p-3"
              }
            `}
          >
            <div
              className={`
                flex
                items-center

                ${
                  collapsed
                    ? "justify-center"
                    : "gap-3"
                }
              `}
            >
              {/* NOTIFICATION ICON */}

              <div
                className="
                  relative

                  w-9
                  h-9

                  rounded-xl

                  bg-[#087f8c]/15

                  flex
                  items-center
                  justify-center

                  text-[#5eead4]

                  border
                  border-[#087f8c]/10
                "
              >
                <FiBell size={17} />

                <span
                  className="
                    absolute
                    top-1
                    right-1

                    w-2
                    h-2

                    rounded-full

                    bg-[#5eead4]

                    animate-pulse

                    shadow-[0_0_8px_rgba(94,234,212,0.9)]
                  "
                />
              </div>

              {!collapsed && (
                <div>
                  <p className="text-[11px] font-semibold">
                    Notifications
                  </p>

                  <p className="text-[9px] text-gray-500">
                    5 new notifications
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* =====================================================
            PROFILE
        ===================================================== */}

        <div
          className="
            relative
            z-10

            p-2

            border-t
            border-white/[0.06]
          "
        >
          <div
            className={`
              flex
              items-center

              ${
                collapsed
                  ? "justify-center"
                  : "gap-3"
              }
            `}
          >
            {/* PROFILE */}

            <div
              className="
                flex-shrink-0

                w-9
                h-9

                rounded-xl

                bg-gradient-to-br
                from-[#087f8c]
                to-[#075985]

                flex
                items-center
                justify-center

                text-xs
                font-bold

                shadow-[0_5px_15px_rgba(8,127,140,0.20)]
              "
            >
              A
            </div>

            {!collapsed && (
              <>
                {/* USER INFO */}

                <div className="flex-1 min-w-0">
                  <p
                    className="
                      text-xs
                      font-semibold
                      truncate
                    "
                  >
                    Admin
                  </p>

                  <p
                    className="
                      text-[9px]
                      text-gray-600
                    "
                  >
                    Administrator
                  </p>
                </div>

                {/* LOGOUT */}

                <button
                  type="button"
                  onClick={handleLogout}
                  title="Logout"
                  className="
                    w-8
                    h-8

                    rounded-lg

                    flex
                    items-center
                    justify-center

                    text-gray-600

                    hover:text-red-400
                    hover:bg-red-500/10

                    transition
                  "
                >
                  <FiLogOut size={16} />
                </button>
              </>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;