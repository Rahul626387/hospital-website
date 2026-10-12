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
  FiFileText,
  FiActivity,
  FiUsers,
  FiBriefcase,
  FiCalendar,
  FiAward,
  FiImage,
} from "react-icons/fi";

const menuItems = [
  // =========================
  // DASHBOARD
  // =========================
  {
    title: "Dashboard",
    icon: FiHome,
    path: "/admin/",
  },

  // =========================
  // BLOG
  // =========================
  {
    title: "Blog",
    icon: FiFileText,
    children: [
      {
        title: "Blog Category",
        icon: FiGrid,
        path: "/admin/blog-category",
      },
      {
        title: "Blog Post",
        icon: FiFileText,
        path: "/admin/blog-post",
      },
    ],
  },

 

  {
  title: "Medical Management",
  icon: FiLayers,
  children: [
    {
      title: "Departments",
      icon: FiGrid,
      path: "/admin/departments",
    },
    {
      title: "Specialties",
      icon: FiActivity,
      path: "/admin/specialties",
    },
    {
      title: "Doctors",
      icon: FiUserPlus,
      path: "/admin/doctors",
    },
  ],
},
 {
  title: "Careers",
  icon: FiBriefcase,
  children: [
    {
      title: "Job Roles",
      icon: FiGrid,
      path: "/admin/career",
    },
    {
      title: "Applications",
      icon: FiUsers,
      path: "/admin/career/applications",
    },
  ],
},
{
  title: "Media & Events",
  icon: FiLayers,
  children: [
    {
      title: "Events",
      icon: FiCalendar,
      path: "/admin/events",
    },
    {
      title: "Awards & Achievements",
      icon: FiAward,
      path: "/admin/awards",
    },
    {
      title: "Gallery",
      icon: FiImage,
      path: "/admin/gallery",
    },
  ],
},

  // =========================
  // DOCTOR MASTER
  // =========================
  // {
  //   title: "Doctor Master",
  //   icon: FiUsers,
  //   children: [
  //     {
  //       title: "Doctors",
  //       icon: FiUserPlus,
  //       path: "/admin/doctor-master/doctors",
  //     },
  //   ],
  // },

  // =========================
  // SETTINGS
  // =========================
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

  // const isPathActive = (path) => {
  //   if (!path) return false;

  //   return pathname === path || pathname.startsWith(`${path}/`);
  // };

//   const isPathActive = (path) => {
//   if (!path) return false;

//   // Dashboard
//   if (path === "/admin/" || path === "/admin") {
//     return pathname === "/admin" || pathname === "/admin/";
//   }

//   return pathname === path || pathname.startsWith(`${path}/`);
// };

const isPathActive = (path) => {
  if (!path) return false;

  // Dashboard
  if (path === "/admin/" || path === "/admin") {
    return pathname === "/admin" || pathname === "/admin/";
  }

  // Exact match only
  return pathname === path;
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
// old code 28-09
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

// new code 28-09
//   useEffect(() => {
//   const activeMenu = menuItems.find(
//     (item) =>
//       item.children?.length &&
//       hasActiveChild(item)
//   );

//   setOpenMenus(
//     activeMenu
//       ? { [activeMenu.title]: true }
//       : {}
//   );
// }, [pathname]);

  // =====================================================
  // TOGGLE MENU
  // =====================================================

  // const toggleMenu = (title) => {
  //   setOpenMenus((prev) => ({
  //     ...prev,
  //     [title]: !prev[title],
  //   }));
  // };

  const toggleMenu = (title) => {
  setOpenMenus((prev) => {
    const isCurrentlyOpen = !!prev[title];

    // Agar current menu already open hai → close it
    if (isCurrentlyOpen) {
      return {};
    }

    // Sirf clicked menu open hoga
    return {
      [title]: true,
    };
  });
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
    localStorage.removeItem("adminUser");
    router.push("/");
  };

  // =====================================================
  // RENDER MENU ITEMS
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
              rounded-lg
              overflow-hidden

              transition-all
              duration-300

              ${
                collapsed
                  ? "justify-center px-2 py-2"
                  : "gap-2.5 px-2.5 py-2"
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
                  h-6

                  bg-[#087f8c]

                  rounded-r-full

                  shadow-[0_0_10px_rgba(8,127,140,0.8)]
                "
              />
            )}

            {/* ICON */}

            <span
              className={`
                relative
                z-10
                flex-shrink-0

                w-7
                h-7

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
                      group-hover:scale-105
                    `
                }
              `}
            >
              {Icon && <Icon size={16} />}
            </span>

            {/* TITLE */}

            {!collapsed && (
              <span
                className={`
                  relative
                  z-10

                  flex-1

                  text-left
                  text-[12px]
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
                size={14}
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

                  shadow-[0_0_7px_rgba(94,234,212,0.8)]
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
                  ml-6
                  mt-1
                  pl-2.5

                  border-l
                  border-[#087f8c]/15

                  space-y-0.5
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
                        gap-2

                        px-2
                        py-1.5

                        rounded-md

                        text-[11px]

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
                            h-4

                            bg-[#087f8c]

                            rounded-r-full

                            shadow-[0_0_7px_rgba(8,127,140,0.8)]
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
                            size={13}
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

                            shadow-[0_0_7px_rgba(94,234,212,0.8)]
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
                left-[62px]
                top-0

                z-[99999]

                hidden
                group-hover:block

                w-56

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
                  py-1.5
                  mb-1

                  border-b
                  border-white/[0.05]
                "
              >
                <p
                  className="
                    text-[9px]
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
                        gap-2

                        px-2.5
                        py-2

                        rounded-lg

                        text-[11px]

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
                          w-6
                          h-6

                          rounded-md

                          flex
                          items-center
                          justify-center

                          bg-white/[0.03]
                        "
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
            left-3
            top-3

            z-[9997]

            w-9
            h-9

            rounded-lg

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
          <FiMenu size={18} />
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

          rounded-xl

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
              ? "lg:w-[68px]"
              : "lg:w-[230px]"
          }

          ${
            mobileOpen
              ? "translate-x-0 w-[230px]"
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

            rounded-xl

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

            -top-16
            -left-16

            w-44
            h-44

            rounded-full

            bg-[#087f8c]/10

            blur-[60px]

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
            top-6

            z-[10000]

            w-6
            h-6

            rounded-full

            bg-gradient-to-br
            from-[#087f8c]
            to-[#075985]

            text-white

            items-center
            justify-center

            border-[3px]
            border-[#061114]

            shadow-[0_4px_12px_rgba(8,127,140,0.35)]

            hover:scale-110

            transition
          "
        >
          {collapsed ? (
            <FiChevronRight size={12} />
          ) : (
            <FiChevronLeft size={12} />
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
            right-3
            top-3

            z-20

            w-7
            h-7

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
          <FiX size={16} />
        </button>

        {/* =====================================================
            LOGO
        ===================================================== */}

        <div
          className={`
            relative
            z-10

            pt-4
            pb-4

            ${
              collapsed
                ? "px-2"
                : "px-4"
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
                  : "gap-2.5"
              }
            `}
          >
            {/* LOGO */}

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

                shadow-[0_6px_18px_rgba(8,127,140,0.25)]

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

                  -top-8
                  -left-8

                  w-16
                  h-16

                  rounded-full

                  bg-white/10

                  blur-lg
                "
              />

              <span
                className="
                  text-sm
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
                    text-[14px]
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
                    text-[8px]
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

            scrollbar-thin
            scrollbar-thumb-[#087f8c]/20
          "
        >
          {!collapsed && (
            <p
              className="
                px-2.5
                mb-1.5

                text-[8px]
                uppercase
                tracking-[0.18em]

                font-bold

                text-gray-600
              "
            >
              Main Menu
            </p>
          )}

          <nav className="space-y-0.5">
            {renderMenuItems(menuItems)}
          </nav>
        </div>

        {/* =====================================================
            NOTIFICATION
        ===================================================== */}

            {/* comment  */}

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
                  : "gap-2"
              }
            `}
          >
            {/* PROFILE */}

            <div
              className="
                flex-shrink-0

                w-8
                h-8

                rounded-lg

                bg-gradient-to-br
                from-[#087f8c]
                to-[#075985]

                flex
                items-center
                justify-center

                text-[10px]
                font-bold

                shadow-[0_4px_12px_rgba(8,127,140,0.20)]
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
                      text-[11px]
                      font-semibold
                      truncate
                    "
                  >
                    Admin
                  </p>

                  <p
                    className="
                      text-[8px]
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
                    w-7
                    h-7

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
                  <FiLogOut size={14} />
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
