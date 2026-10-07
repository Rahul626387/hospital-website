"use client";

import React, { useState, useMemo } from "react";
import useSWR from "swr";
import { Plus, Pencil, Trash2, Eye, Building2 } from "lucide-react";

import ApiService from "../../src/services/Apiservices";
import DepartmentForm from "../../components/admin/DepartmentForm";
import ModalComponent from "../../components/admin/ModelComponent";
import PediatricsCard from "../../components/PediatricsCard";
import {
  FiGrid,
  FiUsers,
  FiSearch,
  FiFilter,
  FiRotateCcw,
  FiPlus,
  FiX,
  FiEye,
  FiEdit2,
  FiTrash2,
  FiMoreVertical,
} from "react-icons/fi";

const Departmentpage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [doctorFilter, setDoctorFilter] = useState("all");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");

  // Apne auth/user context ke according replace karein
  const userId = 1;

  const { data, error, isLoading, mutate } = useSWR(
    "departments",
    ApiService.get,
  );

  // API response ke according adjust kar sakte hain
  const departments = Array.isArray(data) ? data : data?.data || [];
  // console.log(departments)

  const filteredDepartments = useMemo(() => {
    return (
      departments?.filter((department) => {
        // Search
        const searchText = search.toLowerCase().trim();

        const matchesSearch =
          !searchText ||
          department.name?.toLowerCase().includes(searchText) ||
          department.slug?.toLowerCase().includes(searchText) ||
          department.short_description?.toLowerCase().includes(searchText);

        // Status
        const isActive =
          department.status === "active" ||
          department.status === 1 ||
          department.status === "1";

        const matchesStatus =
          statusFilter === "all" ||
          (statusFilter === "active" && isActive) ||
          (statusFilter === "inactive" && !isActive);

        // Doctor
        const hasDoctor = !!department.doctor_id;

        const matchesDoctor =
          doctorFilter === "all" ||
          (doctorFilter === "assigned" && hasDoctor) ||
          (doctorFilter === "unassigned" && !hasDoctor);

        return matchesSearch && matchesStatus && matchesDoctor;
      }) || []
    );
  }, [departments, search, statusFilter, doctorFilter]);

  const resetFilters = () => {
    setSearch("");
    setStatusFilter("all");
    setDoctorFilter("all");
  };

  // --------------------------------
  // Open Create Modal
  // --------------------------------
  const handleAddDepartment = () => {
    setSelectedDepartment(null);
    setModalOpen(true);
  };

  // --------------------------------
  // Open Edit Modal
  // --------------------------------
  const handleEditDepartment = (department) => {
    setSelectedDepartment(department);
    setModalOpen(true);
  };

  // --------------------------------
  // Save Department
  // --------------------------------
  const handleSaveDepartment = async (departmentData) => {
    try {
      console.log("Department Data:", departmentData);
      if (departmentData instanceof FormData) {
        console.log("----- FORM DATA -----");

        for (const [key, value] of departmentData.entries()) {
          console.log(key, ":", value);
        }
      }
      await ApiService.post("departments", departmentData);
      setModalOpen(false);
      setSelectedDepartment(null);
    } catch (error) {
      console.error("Department save error:", error);
    }
  };

  // --------------------------------
  // Delete Department
  // --------------------------------
  const handleDeleteDepartment = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this department?",
    );

    if (!confirmDelete) return;

    try {
      console.log("Delete department:", id);

      /*
      Example:

      await ApiService.delete(`departments/${id}`);
      */

      await mutate();
    } catch (error) {
      console.error("Department delete error:", error);
    }
  };

  // --------------------------------
  // Loading
  // --------------------------------
  if (isLoading) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-[#0d3c59]" />
      </div>
    );
  }

  // --------------------------------
  // Error
  // --------------------------------
  if (error) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-5 text-sm text-red-600">
        Failed to load departments.
      </div>
    );
  }

  return (
   <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

  {/* ================================= */}
  {/* HEADER */}
  {/* ================================= */}
  <div className="border-b border-slate-200">

    <div className="flex flex-col gap-3 px-4 py-3.5 lg:flex-row lg:items-center lg:justify-between">

      {/* TITLE */}
      <div className="flex items-center gap-3">

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <FiGrid size={17} />
        </div>

        <div>
          <h2 className="text-sm font-semibold text-slate-800">
            Departments List
          </h2>

          <p className="mt-0.5 text-[11px] text-slate-400">
            Manage hospital departments
          </p>
        </div>

      </div>

      {/* ADD DEPARTMENT */}
      <button
        type="button"
        onClick={() => setModalOpen(true)}
        className="flex h-9 items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-3.5 text-xs font-semibold text-white shadow-sm shadow-blue-600/20 transition hover:bg-blue-700 active:scale-95"
      >
        <FiPlus size={14} />
        Add Department
      </button>

    </div>

    {/* ================================= */}
    {/* FILTER BAR */}
    {/* ================================= */}

    <div className="flex flex-col gap-2 bg-slate-50/70 px-4 py-3 md:flex-row md:items-center">

      {/* SEARCH */}
      <div className="relative flex-1">

        <FiSearch
          size={14}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search department..."
          className="h-9 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-8 text-xs text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/10"
        />

        {search && (
          <button
            type="button"
            onClick={() => setSearch("")}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
          >
            <FiX size={13} />
          </button>
        )}

      </div>

      {/* STATUS FILTER */}
      <div className="relative">

        <FiFilter
          size={13}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="h-9 w-full appearance-none rounded-lg border border-slate-200 bg-white pl-8 pr-8 text-xs font-medium text-slate-600 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/10 md:w-[125px]"
        >
          <option value="all">
            All Status
          </option>

          <option value="active">
            Active
          </option>

          <option value="inactive">
            Inactive
          </option>
        </select>

        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[9px] text-slate-400">
          ▼
        </span>

      </div>

      {/* DOCTOR FILTER */}
      <div className="relative">

        <FiUsers
          size={13}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <select
          value={doctorFilter}
          onChange={(e) => setDoctorFilter(e.target.value)}
          className="h-9 w-full appearance-none rounded-lg border border-slate-200 bg-white pl-8 pr-8 text-xs font-medium text-slate-600 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/10 md:w-[150px]"
        >
          <option value="all">
            All Doctors
          </option>

          <option value="assigned">
            Doctor Assigned
          </option>

          <option value="unassigned">
            No Doctor
          </option>
        </select>

        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[9px] text-slate-400">
          ▼
        </span>

      </div>

      {/* RESET */}
      {(search ||
        statusFilter !== "all" ||
        doctorFilter !== "all") && (

        <button
          type="button"
          onClick={resetFilters}
          className="flex h-9 items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 text-xs font-medium text-slate-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"
        >
          <FiRotateCcw size={13} />
          Reset
        </button>

      )}

    </div>

  </div>

  {/* ================================= */}
  {/* RESULT INFO */}
  {/* ================================= */}

  <div className="flex items-center justify-between border-b border-slate-100 bg-white px-4 py-2.5">

    <div className="flex items-center gap-2">

      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />

      <span className="text-[11px] text-slate-500">

        Showing{" "}

        <span className="font-semibold text-slate-700">
          {filteredDepartments.length}
        </span>

        {" "}of{" "}

        <span className="font-semibold text-slate-700">
          {departments?.length || 0}
        </span>

        {" "}departments

      </span>

    </div>

    {(search ||
      statusFilter !== "all" ||
      doctorFilter !== "all") && (

      <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-semibold text-blue-600">
        Filter applied
      </span>

    )}

  </div>

  {/* ================================= */}
  {/* TABLE */}
  {/* ================================= */}

  <div className="max-h-[350px] w-full overflow-auto">

    <table className="w-full min-w-[900px]">

      <thead className="sticky top-0 z-20">

        <tr className="border-b border-slate-200 bg-slate-50">

          <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Department
          </th>

          <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Description
          </th>

          <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Doctor
          </th>

          <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Status
          </th>

          <th className="px-4 py-3 text-right text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Action
          </th>

        </tr>

      </thead>

      <tbody className="divide-y divide-slate-100">

        {filteredDepartments.length > 0 ? (

          filteredDepartments.map((department) => (

            <tr
              key={department.id}
              className="group transition hover:bg-slate-50/70"
            >

              {/* ========================= */}
              {/* DEPARTMENT */}
              {/* ========================= */}

              <td className="px-4 py-3">

                <div className="flex items-center gap-3">

                  <div className="h-9 w-9 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">

                    {department.image ? (

                      <img
                        src={department.image}
                        alt={department.name}
                        className="h-full w-full object-cover"
                      />

                    ) : (

                      <div className="flex h-full w-full items-center justify-center bg-blue-50 text-xs font-bold text-blue-600">
                        {department.name
                          ?.charAt(0)
                          ?.toUpperCase() || "D"}
                      </div>

                    )}

                  </div>

                  <div className="min-w-0">

                    <p className="truncate text-xs font-semibold text-slate-800">
                      {department.name || "Unnamed Department"}
                    </p>

                    <p className="mt-0.5 truncate text-[10px] text-slate-400">
                      {department.slug
                        ? `/${department.slug}`
                        : "No slug"}
                    </p>

                  </div>

                </div>

              </td>

              {/* ========================= */}
              {/* DESCRIPTION */}
              {/* ========================= */}

              <td className="max-w-[300px] px-4 py-3">

                <p
                  className="truncate text-xs text-slate-600"
                  title={department.short_description || ""}
                >
                  {department.short_description ||
                    "No description"}
                </p>

              </td>

              {/* ========================= */}
              {/* DOCTOR */}
              {/* ========================= */}

              <td className="px-4 py-3">

                {department.doctor_id ? (

                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-50 px-2.5 py-1.5 text-[10px] font-semibold text-indigo-600">

                    <FiUsers size={11} />

                    Doctor Assigned

                  </span>

                ) : (

                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-2.5 py-1.5 text-[10px] font-semibold text-slate-500">

                    No Doctor

                  </span>

                )}

              </td>

              {/* ========================= */}
              {/* STATUS */}
              {/* ========================= */}

              <td className="px-4 py-3">

                {department.status === "active" ||
                department.status === 1 ||
                department.status === "1" ? (

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-600">

                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                    Active

                  </span>

                ) : (

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-500">

                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />

                    Inactive

                  </span>

                )}

              </td>

              {/* ========================= */}
              {/* ACTION */}
              {/* ========================= */}

              <td className="px-4 py-3">

                <div className="flex items-center justify-end gap-1">

                  {/* <button
                    type="button"
                    title="View Department"
                    onClick={() => handleView(department)}
                    className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition hover:bg-emerald-50 hover:text-emerald-600"
                  >
                    <FiEye size={13} />
                  </button> */}

                  <button
                    type="button"
                    title="Edit Department"
                    onClick={() => handleEdit(department)}
                    className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    <FiEdit2 size={13} />
                  </button>

                  <button
                    type="button"
                    title="Delete Department"
                    onClick={() =>
                      handleDelete(department.id)
                    }
                    className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                  >
                    <FiTrash2 size={13} />
                  </button>

                  {/* <button
                    type="button"
                    title="More"
                    className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                  >
                    <FiMoreVertical size={14} />
                  </button> */}

                </div>

              </td>

            </tr>

          ))

        ) : (

          /* ========================= */
          /* EMPTY STATE */
          /* ========================= */

          <tr>

            <td
              colSpan={5}
              className="px-4 py-16 text-center"
            >

              <div className="flex flex-col items-center">

                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-300">
                  <FiSearch size={20} />
                </div>

                <h3 className="text-sm font-semibold text-slate-700">
                  No departments found
                </h3>

                <p className="mt-1 text-[11px] text-slate-400">
                  Try changing your search or filters.
                </p>

                {(search ||
                  statusFilter !== "all" ||
                  doctorFilter !== "all") && (

                  <button
                    type="button"
                    onClick={resetFilters}
                    className="mt-3 rounded-lg bg-blue-600 px-3 py-1.5 text-[10px] font-semibold text-white transition hover:bg-blue-700"
                  >
                    Clear Filters
                  </button>

                )}

              </div>

            </td>

          </tr>

        )}

      </tbody>

    </table>

  </div>

  {/* ================================= */}
  {/* FOOTER */}
  {/* ================================= */}

  <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50/50 px-4 py-3">

    <p className="text-[11px] text-slate-500">

      Total Departments:{" "}

      <span className="font-semibold text-slate-700">
        {departments?.length || 0}
      </span>

    </p>

    <p className="text-[10px] text-slate-400">
      Department Management
    </p>

  </div>


      {/* ================================= */}
      {/* MODAL */}
      {/* ================================= */}

      <ModalComponent
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelectedDepartment(null);
        }}
        title={selectedDepartment ? "Edit Department" : "Add Department"}
        size="xl"
      >
        <DepartmentForm
          initialData={selectedDepartment}
          onSubmit={handleSaveDepartment}
          onCancel={() => {
            setModalOpen(false);
            setSelectedDepartment(null);
          }}
          userId={userId}
        />
      </ModalComponent>
    </div>
  );
};

export default Departmentpage;
