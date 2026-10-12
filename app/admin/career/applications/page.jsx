
"use client";

import React, { useMemo, useState } from "react";
import useSWR from "swr";

import {
  FiUsers,
  FiSearch,
  FiX,
  FiFilter,
  FiRotateCcw,
  FiArrowUp,
  FiArrowDown,
  FiEye,
  FiCheckCircle,
  FiClock,
  FiBriefcase,
  FiMail,
  FiPhone,
  FiDownload,
} from "react-icons/fi";

import ApiService from "../../../src/services/Apiservices";
import { motion } from "framer-motion";

const ApplicationPage = () => {
  const { data, error, isLoading } = useSWR(
    "career-applications",
    ApiService.get
  );

  const applications = data?.data || [];

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortField, setSortField] = useState("created_at");
  const [sortDirection, setSortDirection] = useState("desc");

  // =========================================================
  // STATUS LIST
  // =========================================================
  const statuses = useMemo(() => {
    const uniqueStatuses = [
      ...new Set(
        applications
          .map((item) => item.status)
          .filter(Boolean)
      ),
    ];

    return uniqueStatuses.sort((a, b) =>
      String(a).localeCompare(String(b))
    );
  }, [applications]);

  // =========================================================
  // FILTER + SEARCH + SORT
  // =========================================================
  const filteredApplications = useMemo(() => {
    let result = [...applications];

    const searchText = search.trim().toLowerCase();

    // SEARCH
    if (searchText) {
      result = result.filter((application) => {
        return (
          String(application.full_name || "")
            .toLowerCase()
            .includes(searchText) ||

          String(application.email || "")
            .toLowerCase()
            .includes(searchText) ||

          String(application.phone || "")
            .toLowerCase()
            .includes(searchText) ||

          String(application.current_position || "")
            .toLowerCase()
            .includes(searchText) ||

          String(application.experience || "")
            .toLowerCase()
            .includes(searchText) ||

          String(application.additional_information || "")
            .toLowerCase()
            .includes(searchText) ||

          String(application.job_title || "")
            .toLowerCase()
            .includes(searchText) ||

          String(application.department_name || "")
            .toLowerCase()
            .includes(searchText) ||

          String(application.career_role_id || "")
            .toLowerCase()
            .includes(searchText) ||

          String(application.department_id || "")
            .toLowerCase()
            .includes(searchText)
        );
      });
    }

    // STATUS FILTER
    if (statusFilter !== "all") {
      result = result.filter(
        (application) =>
          application.status === statusFilter
      );
    }

    // SORT
    result.sort((a, b) => {
      let valueA = a?.[sortField];
      let valueB = b?.[sortField];

      if (
        sortField === "created_at" ||
        sortField === "updated_at"
      ) {
        valueA = new Date(valueA || 0).getTime();
        valueB = new Date(valueB || 0).getTime();
      } else if (
        sortField === "id" ||
        sortField === "career_role_id" ||
        sortField === "department_id"
      ) {
        valueA = Number(valueA || 0);
        valueB = Number(valueB || 0);
      } else {
        valueA = String(valueA || "").toLowerCase();
        valueB = String(valueB || "").toLowerCase();
      }

      if (valueA < valueB) {
        return sortDirection === "asc" ? -1 : 1;
      }

      if (valueA > valueB) {
        return sortDirection === "asc" ? 1 : -1;
      }

      return 0;
    });

    return result;
  }, [
    applications,
    search,
    statusFilter,
    sortField,
    sortDirection,
  ]);

  // =========================================================
  // SORT
  // =========================================================
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection((prev) =>
        prev === "asc" ? "desc" : "asc"
      );
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  // =========================================================
  // RESET
  // =========================================================
  const handleReset = () => {
    setSearch("");
    setStatusFilter("all");
    setSortField("created_at");
    setSortDirection("desc");
  };

  // =========================================================
  // STATUS STYLE
  // =========================================================
  const getStatusStyle = (status) => {
    switch (String(status || "").toLowerCase()) {
      case "new":
        return "bg-blue-50 text-blue-700 border-blue-200";

      case "shortlisted":
        return "bg-cyan-50 text-cyan-700 border-cyan-200";

      case "interview":
        return "bg-purple-50 text-purple-700 border-purple-200";

      case "selected":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";

      case "rejected":
        return "bg-red-50 text-red-700 border-red-200";

      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  // =========================================================
  // DATE FORMAT
  // =========================================================
  const formatDate = (date) => {
    if (!date) return "—";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "—";
    }

    return parsedDate.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // =========================================================
  // STATISTICS
  // =========================================================
  const totalApplications = applications.length;

  const newApplications = applications.filter(
    (item) =>
      String(item.status || "").toLowerCase() === "new"
  ).length;

  const shortlistedApplications = applications.filter(
    (item) =>
      String(item.status || "").toLowerCase() ===
      "shortlisted"
  ).length;

  const interviewApplications = applications.filter(
    (item) =>
      String(item.status || "").toLowerCase() ===
      "interview"
  ).length;

  const selectedApplications = applications.filter(
    (item) =>
      String(item.status || "").toLowerCase() ===
      "selected"
  ).length;

  // =========================================================
  // STAT CARDS
  // =========================================================
  const statCards = [
    {
      title: "Total Applications",
      value: totalApplications,
      icon: FiUsers,
      iconStyle: "bg-blue-100 text-blue-600",
      cardStyle:
        "from-white via-blue-50/70 to-blue-100/80 border-blue-100 hover:border-blue-300",
      watermark: "text-blue-600",
    },
    {
      title: "New Applications",
      value: newApplications,
      icon: FiClock,
      iconStyle: "bg-amber-100 text-amber-600",
      cardStyle:
        "from-white via-amber-50/70 to-amber-100/80 border-amber-100 hover:border-amber-300",
      watermark: "text-amber-600",
    },
    {
      title: "Shortlisted",
      value: shortlistedApplications,
      icon: FiBriefcase,
      iconStyle: "bg-cyan-100 text-cyan-600",
      cardStyle:
        "from-white via-cyan-50/70 to-cyan-100/80 border-cyan-100 hover:border-cyan-300",
      watermark: "text-cyan-600",
    },
    {
      title: "Interview",
      value: interviewApplications,
      icon: FiClock,
      iconStyle: "bg-purple-100 text-purple-600",
      cardStyle:
        "from-white via-purple-50/70 to-purple-100/80 border-purple-100 hover:border-purple-300",
      watermark: "text-purple-600",
    },
    {
      title: "Selected",
      value: selectedApplications,
      icon: FiCheckCircle,
      iconStyle: "bg-emerald-100 text-emerald-600",
      cardStyle:
        "from-white via-emerald-50/70 to-emerald-100/80 border-emerald-100 hover:border-emerald-300",
      watermark: "text-emerald-600",
    },
  ];

  // =========================================================
  // LOADING
  // =========================================================
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="mx-auto max-w-[1600px]">

          <div className="mb-5">
            <div className="h-6 w-52 animate-pulse rounded bg-gray-200" />
            <div className="mt-2 h-3 w-72 animate-pulse rounded bg-gray-200" />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {Array.from({ length: 5 }).map(
              (_, index) => (
                <div
                  key={index}
                  className="h-28 animate-pulse rounded-xl bg-white shadow-sm"
                />
              )
            )}
          </div>

          <div className="mt-5 h-96 animate-pulse rounded-xl bg-white shadow-sm" />
        </div>
      </div>
    );
  }

  // =========================================================
  // ERROR
  // =========================================================
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="mx-auto max-w-[1600px]">

          <div className="rounded-xl border border-red-200 bg-red-50 p-5 text-red-700">

            <h2 className="text-base font-bold">
              Unable to load applications
            </h2>

            <p className="mt-1 text-xs">
              Something went wrong while fetching career
              applications.
            </p>

            <button
              onClick={() => window.location.reload()}
              className="mt-3 inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-red-700"
            >
              <FiRotateCcw size={14} />
              Try Again
            </button>
          </div>

        </div>
      </div>
    );
  }

  // =========================================================
  // UI
  // =========================================================
  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4">

      <div className="mx-auto max-w-[1600px]">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Career Applications
            </h1>

            <p className="mt-0.5 text-xs text-gray-500">
              Manage and review candidate applications
            </p>
          </div>

          <div className="flex w-fit items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm">

            <FiUsers
              size={15}
              className="text-blue-600"
            />

            <span className="text-xs font-semibold text-gray-700">
              {applications.length} Applications
            </span>

          </div>
        </div>

        {/* =====================================================
            STAT CARDS
        ====================================================== */}
       <div className="mb-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
  {statCards.map((card, index) => {
    const Icon = card.icon;

    return (
      <motion.div
        key={card.title}
        initial={{
          opacity: 0,
          y: 15,
          scale: 0.97,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.35,
          delay: index * 0.07,
          ease: "easeOut",
        }}
        whileHover={{
          y: -3,
          scale: 1.015,
          transition: {
            duration: 0.2,
          },
        }}
        className={`group relative overflow-hidden rounded-lg border bg-gradient-to-br p-3 shadow-sm transition-shadow duration-300 hover:shadow-md ${card.cardStyle}`}
      >
        {/* WATERMARK */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            rotate: -15,
          }}
          animate={{
            opacity: 0.08,
            scale: 1,
            rotate: -10,
          }}
          whileHover={{
            scale: 1.1,
            rotate: 0,
            opacity: 0.13,
          }}
          transition={{
            duration: 0.4,
          }}
          className={`absolute -bottom-4 -right-3 ${card.watermark}`}
        >
          <Icon size={58} />
        </motion.div>

        <div className="relative z-10 flex items-center gap-2.5">
          
          {/* ICON */}
          <motion.div
            whileHover={{
              rotate: 5,
              scale: 1.08,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
            }}
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${card.iconStyle}`}
          >
            <Icon size={15} />
          </motion.div>

          {/* CONTENT */}
          <div className="min-w-0">
            <p className="truncate text-[10px] font-medium text-gray-500">
              {card.title}
            </p>

            <motion.h2
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.07 + 0.15,
              }}
              className="mt-0.5 text-lg font-bold leading-none text-gray-900"
            >
              {card.value}
            </motion.h2>
          </div>

        </div>
      </motion.div>
    );
  })}
</div>

        {/* =====================================================
            FILTER
        ====================================================== */}
        <div className="mb-4 rounded-xl border border-gray-200 bg-white p-3 shadow-sm">

          <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">

            {/* SEARCH */}
            <div className="relative w-full xl:max-w-md">

              <FiSearch
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={15}
              />

              <input
                type="text"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search name, email, phone, job, department..."
                className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50 pl-9 pr-9 text-xs text-gray-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                >
                  <FiX size={15} />
                </button>
              )}

            </div>

            <div className="flex flex-col gap-2 sm:flex-row">

              {/* STATUS */}
              <div className="relative">

                <FiFilter
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={14}
                />

                <select
                  value={statusFilter}
                  onChange={(e) =>
                    setStatusFilter(e.target.value)
                  }
                  className="h-10 min-w-[170px] appearance-none rounded-lg border border-gray-200 bg-gray-50 pl-8 pr-7 text-xs font-medium text-gray-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                >

                  <option value="all">
                    All Status
                  </option>

                  {statuses.map((status) => (
                    <option
                      key={status}
                      value={status}
                    >
                      {status}
                    </option>
                  ))}

                </select>

              </div>

              {/* SORT */}
              <button
                type="button"
                onClick={() =>
                  handleSort("full_name")
                }
                className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-3 text-xs font-medium text-gray-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              >

                {sortField === "full_name" &&
                sortDirection === "asc" ? (
                  <FiArrowUp size={14} />
                ) : (
                  <FiArrowDown size={14} />
                )}

                Name
              </button>

              {/* RESET */}
              {(search || statusFilter !== "all") && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 text-xs font-medium text-gray-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                >
                  <FiRotateCcw size={14} />
                  Reset
                </button>
              )}

            </div>
          </div>
        </div>

        {/* =====================================================
            TABLE
        ====================================================== */}
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

          {/* TABLE HEADER */}
          <div className="flex flex-col gap-2 border-b border-gray-100 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <h2 className="text-sm font-bold text-gray-900">
                Applications List
              </h2>

              <p className="mt-0.5 text-[10px] text-gray-500">
                Showing {filteredApplications.length} of{" "}
                {applications.length} applications
              </p>

            </div>

            <div className="w-fit rounded-md bg-gray-50 px-2.5 py-1 text-[10px] font-semibold text-gray-600">
              {filteredApplications.length} Results
            </div>

          </div>

          {/* TABLE SCROLL */}
          <div className="max-h-[650px] overflow-auto">

            <table className="min-w-[1350px] w-full border-collapse">

              {/* =================================================
                  THEAD
              ================================================== */}
              <thead className="sticky top-0 z-20 bg-gray-50">

                <tr className="border-b border-gray-200">

                  <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Applicant
                  </th>

                  <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Job Role
                  </th>

                  <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Department
                  </th>

                  <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Experience
                  </th>

                  <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Current Position
                  </th>

                  <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Additional Information
                  </th>

                  <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Status
                  </th>

                  <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Applied
                  </th>

                  <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Resume
                  </th>

                  <th className="px-4 py-3 text-center text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Action
                  </th>

                </tr>
              </thead>

              {/* =================================================
                  TBODY
              ================================================== */}
              <tbody className="divide-y divide-gray-100">

                {filteredApplications.length === 0 ? (

                  <tr>

                    <td
                      colSpan={10}
                      className="px-5 py-12 text-center"
                    >

                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                        <FiUsers
                          size={20}
                          className="text-gray-400"
                        />
                      </div>

                      <h3 className="mt-3 text-sm font-bold text-gray-800">
                        No applications found
                      </h3>

                      <p className="mt-1 text-xs text-gray-500">
                        Try changing your search or filter.
                      </p>

                      <button
                        onClick={handleReset}
                        className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
                      >
                        <FiRotateCcw size={13} />
                        Reset Filters
                      </button>

                    </td>

                  </tr>

                ) : (

                  filteredApplications.map(
                    (application, index) => (

                      <tr
                        key={
                          application.id || index
                        }
                        className="group transition-colors duration-200 hover:bg-blue-50/40"
                      >

                        {/* =================================================
                            APPLICANT
                        ================================================== */}
                        <td className="px-4 py-3">

                          <div className="flex items-center gap-2.5">

                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-xs font-bold text-white shadow-sm">
                              {String(
                                application.full_name ||
                                  "A"
                              )
                                .charAt(0)
                                .toUpperCase()}
                            </div>

                            <div className="min-w-0">

                              <p className="truncate text-sm font-semibold text-gray-900">
                                {application.full_name ||
                                  "—"}
                              </p>

                              <div className="mt-0.5 flex items-center gap-1 text-[10px] text-gray-500">

                                <FiMail size={10} />

                                <span className="max-w-[170px] truncate">
                                  {application.email ||
                                    "—"}
                                </span>

                              </div>

                              <div className="mt-0.5 flex items-center gap-1 text-[10px] text-gray-500">

                                <FiPhone size={10} />

                                <span>
                                  {application.phone ||
                                    "—"}
                                </span>

                              </div>

                            </div>

                          </div>

                        </td>

                        {/* =================================================
                            JOB ROLE
                        ================================================== */}
                        <td className="px-4 py-3">

                          <div className="flex items-center gap-2.5">

                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                              <FiBriefcase size={15} />
                            </div>

                            <div>

                              <p className="text-sm font-semibold text-gray-800">
                                {application.job_title ||
                                  "—"}
                              </p>

                              <p className="mt-0.5 text-[10px] text-gray-400">
                                Role ID #
                                {application.career_role_id ||
                                  "—"}
                              </p>

                            </div>

                          </div>

                        </td>

                        {/* =================================================
                            DEPARTMENT
                        ================================================== */}
                        <td className="px-4 py-3">

                          <div className="flex items-center gap-2.5">

                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
                              <FiBriefcase size={15} />
                            </div>

                            <div>

                              <p className="text-sm font-semibold text-gray-800">
                                {application.department_name ||
                                  "—"}
                              </p>

                              <p className="mt-0.5 text-[10px] text-gray-400">
                                Dept ID #
                                {application.department_id ||
                                  "—"}
                              </p>

                            </div>

                          </div>

                        </td>

                        {/* =================================================
                            EXPERIENCE
                        ================================================== */}
                        <td className="px-4 py-3">

                          <span className="inline-flex rounded-md bg-gray-100 px-2.5 py-1 text-[10px] font-semibold text-gray-700">
                            {application.experience ||
                              "—"}
                          </span>

                        </td>

                        {/* =================================================
                            CURRENT POSITION
                        ================================================== */}
                        <td className="px-4 py-3">

                          <p className="max-w-[140px] truncate text-xs font-medium text-gray-700">
                            {application.current_position ||
                              "—"}
                          </p>

                        </td>

                        {/* =================================================
                            ADDITIONAL INFORMATION
                        ================================================== */}
                        <td className="px-4 py-3">

                          <p
                            title={
                              application.additional_information ||
                              ""
                            }
                            className="max-w-[220px] truncate text-xs text-gray-500"
                          >
                            {application.additional_information ||
                              "—"}
                          </p>

                        </td>

                        {/* =================================================
                            STATUS
                        ================================================== */}
                        <td className="px-4 py-3">

                          <span
                            className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-bold ${getStatusStyle(
                              application.status
                            )}`}
                          >

                            <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current" />

                            {application.status ||
                              "—"}

                          </span>

                        </td>

                        {/* =================================================
                            DATE
                        ================================================== */}
                        <td className="px-4 py-3">

                          <div>

                            <p className="text-xs font-semibold text-gray-700">
                              {formatDate(
                                application.created_at
                              )}
                            </p>

                            <p className="mt-0.5 text-[10px] text-gray-400">

                              {application.created_at
                                ? new Date(
                                    application.created_at
                                  ).toLocaleTimeString(
                                    "en-IN",
                                    {
                                      hour: "2-digit",
                                      minute: "2-digit",
                                    }
                                  )
                                : ""}

                            </p>

                          </div>

                        </td>

                        {/* =================================================
                            RESUME
                        ================================================== */}
                        <td className="px-4 py-3">

                          {application.resume_path ? (

                            <a
                              href={
                                application.resume_path
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1.5 text-[10px] font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
                            >
                              <FiDownload size={12} />
                              Resume
                            </a>

                          ) : (

                            <span className="text-[10px] text-gray-400">
                              No Resume
                            </span>

                          )}

                        </td>

                        {/* =================================================
                            ACTION
                        ================================================== */}
                        <td className="px-4 py-3 text-center">

                          <button
                            type="button"
                            onClick={() => {
                              console.log(
                                "View application:",
                                application
                              );
                            }}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                            title="View Application"
                          >
                            <FiEye size={14} />
                          </button>

                        </td>

                      </tr>
                    )
                  )

                )}

              </tbody>

            </table>

          </div>

          {/* =====================================================
              FOOTER
          ====================================================== */}
          <div className="flex flex-col gap-1.5 border-t border-gray-100 bg-gray-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-xs text-gray-500">

              Total Applications:

              <span className="ml-1 font-bold text-gray-800">
                {applications.length}
              </span>

            </p>

            <p className="text-[10px] text-gray-400">
              Showing {filteredApplications.length} records
            </p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ApplicationPage;