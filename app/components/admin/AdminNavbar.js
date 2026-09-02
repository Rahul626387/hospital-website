
"use client";

import React, { useEffect, useState } from "react";
import {
  FiMenu,
  FiBell,
  FiUser,
  FiChevronDown,
  FiLogOut,
  FiSettings,
} from "react-icons/fi";
import { useRouter } from "next/navigation";

const AdminNavbar = ({ onMenuClick }) => {
  const router = useRouter();

  const [profileOpen, setProfileOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  // ================= USER DATA =================
  useEffect(() => {
    try {
      const user = JSON.parse(
        localStorage.getItem("userData") || "{}"
      );

      const info = user?.response?.[0] || user?.user || user || {};

      setUserInfo(info);
    } catch (error) {
      console.error("User data error:", error);
    }
  }, []);

  // ================= USER DETAILS =================
  const userName = userInfo?.emp_name || userInfo?.name || "Admin";

  const email =
    userInfo?.emp_code ||
    userInfo?.email ||
    "admin";

  // ================= INITIALS =================
  const initials = userName
    ?.trim()
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  // ================= LOGOUT =================
  const handleLogout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("auth");

    setShowLogoutConfirm(false);
    setProfileOpen(false);

    router.push("/login");
  };

  return (
    <>
      {/* ================================================= */}
      {/* NAVBAR */}
      {/* ================================================= */}

      <header
        className="
          sticky
          top-2
          z-50
          mx-2
          rounded-2xl
          bg-gradient-to-r
          from-[#087f8c]
          to-[#075985]
          shadow-lg
          shadow-[#075985]/20
        "
      >
        <div
          className="
            flex
            h-14
            items-center
            justify-between
            px-4
            sm:px-6
            lg:px-8
          "
        >

          {/* ================= LEFT ================= */}

          <div className="flex items-center gap-3">

            {/* Mobile Menu */}

            <button
              onClick={onMenuClick}
              className="
                rounded-lg
                p-2
                text-white/80
                transition
                hover:bg-white/20
                hover:text-white
                lg:hidden
              "
            >
              <FiMenu size={20} />
            </button>

            {/* Logo */}

            <div className="flex items-center gap-2.5">

              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-xl
                  bg-white
                  text-[#087f8c]
                  shadow-md
                "
              >
                <span className="text-base font-bold">
                  B
                </span>
              </div>

              <div className="hidden sm:block">

                <h1 className="text-sm font-bold text-white">
                  Baderia Metroprime
                </h1>

                <p className="text-[10px] text-white/70">
                  Multi Speciality Hospital
                </p>

              </div>

            </div>
          </div>

          {/* ================= RIGHT ================= */}

          <div className="flex items-center gap-1.5">

            {/* Notification */}

            <button
              className="
                relative
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                text-white/80
                transition
                hover:bg-white/20
                hover:text-white
              "
            >
              <FiBell size={18} />

              <span
                className="
                  absolute
                  right-2
                  top-2
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-red-400
                  ring-2
                  ring-white/40
                "
              />
            </button>

            {/* Divider */}

            <div className="mx-1 hidden h-6 w-px bg-white/30 sm:block" />

            {/* ================= PROFILE ================= */}

            <div className="relative">

              <button
                onClick={() =>
                  setProfileOpen(!profileOpen)
                }
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  px-2
                  py-1
                  transition
                  hover:bg-white/20
                "
              >

                {/* Avatar */}

                <div
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-xs
                    font-semibold
                    text-[#087f8c]
                    shadow-md
                  "
                >
                  {initials}
                </div>

                {/* User Info */}

                <div className="hidden text-left sm:block">

                  <p className="text-sm font-medium leading-tight text-white">
                    {userName}
                  </p>

                  <p className="text-[10px] text-white/70">
                    Administrator
                  </p>

                </div>

                <FiChevronDown
                  size={14}
                  className={`
                    hidden
                    text-white/80
                    transition
                    sm:block
                    ${
                      profileOpen
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />

              </button>

              {/* ================= DROPDOWN ================= */}

              {profileOpen && (
                <div
                  className="
                    absolute
                    right-0
                    top-12
                    z-50
                    w-60
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-1.5
                    shadow-2xl
                  "
                >

                  {/* Profile Header */}

                  <div className="mb-1 border-b border-slate-100 px-3 py-3">

                    <div className="flex items-center gap-3">

                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          bg-gradient-to-br
                          from-[#087f8c]
                          to-[#075985]
                          text-sm
                          font-semibold
                          text-white
                        "
                      >
                        {initials}
                      </div>

                      <div className="min-w-0">

                        <p className="truncate text-sm font-semibold text-slate-800">
                          {userName}
                        </p>

                        <p className="truncate text-xs text-slate-500">
                          {email}
                        </p>

                      </div>

                    </div>

                  </div>

                  {/* My Profile */}

                  <button
                    onClick={() => {
                      setProfileOpen(false);
                      router.push("/admin/profile");
                    }}
                    className="
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-xl
                      px-3
                      py-2.5
                      text-sm
                      text-slate-600
                      transition
                      hover:bg-[#087f8c]/10
                      hover:text-[#087f8c]
                    "
                  >
                    <FiUser size={16} />
                    My Profile
                  </button>

                  {/* Settings */}

                  <button
                    onClick={() => {
                      setProfileOpen(false);
                      router.push("/admin/settings");
                    }}
                    className="
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-xl
                      px-3
                      py-2.5
                      text-sm
                      text-slate-600
                      transition
                      hover:bg-[#087f8c]/10
                      hover:text-[#087f8c]
                    "
                  >
                    <FiSettings size={16} />
                    Settings
                  </button>

                  {/* Divider */}

                  <div className="my-1 border-t border-slate-100" />

                  {/* Logout */}

                  <button
                    onClick={() => {
                      setProfileOpen(false);
                      setShowLogoutConfirm(true);
                    }}
                    className="
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-xl
                      px-3
                      py-2.5
                      text-sm
                      text-red-500
                      transition
                      hover:bg-red-50
                    "
                  >
                    <FiLogOut size={16} />
                    Logout
                  </button>

                </div>
              )}

            </div>
          </div>
        </div>
      </header>

      {/* ================================================= */}
      {/* LOGOUT CONFIRMATION */}
      {/* ================================================= */}

      {showLogoutConfirm && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-slate-900/50
            px-4
            backdrop-blur-sm
          "
          onClick={() =>
            setShowLogoutConfirm(false)
          }
        >

          <div
            className="
              w-full
              max-w-sm
              rounded-2xl
              border
              border-slate-100
              bg-white
              p-6
              shadow-2xl
            "
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* Icon */}

            <div className="mb-4 flex justify-center">

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-red-50
                  text-red-500
                "
              >
                <FiLogOut size={25} />
              </div>

            </div>

            {/* Title */}

            <h3
              className="
                text-center
                text-lg
                font-semibold
                text-slate-800
              "
            >
              Logout Confirmation
            </h3>

            {/* Message */}

            <p
              className="
                mt-2
                text-center
                text-sm
                leading-5
                text-slate-500
              "
            >
              Are you sure you want to logout
              from your account?
            </p>

            {/* Buttons */}

            <div className="mt-6 flex gap-3">

              {/* Cancel */}

              <button
                type="button"
                onClick={() =>
                  setShowLogoutConfirm(false)
                }
                className="
                  flex-1
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  text-slate-600
                  transition
                  hover:bg-slate-50
                "
              >
                Cancel
              </button>

              {/* Logout */}

              <button
                type="button"
                onClick={handleLogout}
                className="
                  flex-1
                  rounded-xl
                  bg-red-500
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  text-white
                  shadow-sm
                  shadow-red-500/20
                  transition
                  hover:bg-red-600
                "
              >
                Logout
              </button>

            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default AdminNavbar;

