"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  FiUser,
  FiMail,
  FiShield,
  FiLogOut,
} from "react-icons/fi";

export default function AdminPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      router.replace("/login");
      return;
    }

    try {
      setUser(JSON.parse(storedUser));
    } catch {
      localStorage.removeItem("user");
      localStorage.removeItem("isLoggedIn");
      router.replace("/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    router.replace("/");
  };

  if (!user) return null;

  return (
    <div className="flex justify-center items-center min-h-[70vh]">

      <div className="w-full max-w-sm bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-4 text-white">
          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-lg font-bold">
              {user.name?.charAt(0)?.toUpperCase()}
            </div>

            <div className="min-w-0">
              <p className="text-xs text-blue-100">
                Welcome back
              </p>

              <h1 className="text-lg font-bold truncate">
                {user.name}
              </h1>
            </div>

          </div>
        </div>

        {/* Details */}
        <div className="p-4 space-y-2.5">

          <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
            <FiUser className="text-blue-600" size={17} />

            <div className="min-w-0">
              <p className="text-[11px] text-gray-400">
                Name
              </p>
              <p className="text-sm font-semibold text-gray-700 truncate">
                {user.name}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
            <FiMail className="text-cyan-600" size={17} />

            <div className="min-w-0">
              <p className="text-[11px] text-gray-400">
                Email
              </p>
              <p className="text-sm font-semibold text-gray-700 truncate">
                {user.email}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
            <FiShield className="text-purple-600" size={17} />

            <div>
              <p className="text-[11px] text-gray-400">
                Role
              </p>
              <p className="text-sm font-semibold text-gray-700 capitalize">
                {user.role}
              </p>
            </div>
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="w-full mt-2 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white text-sm font-semibold transition-all active:scale-[0.98]"
          >
            <FiLogOut size={17} />
            Logout
          </button>

        </div>
      </div>
    </div>
  );
}