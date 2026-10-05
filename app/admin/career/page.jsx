"use client"

import React, { useState } from 'react'
import ModalComponent from '../../components/admin/ModelComponent';
import CareerRoleForm from '../../components/admin/CareerRoleForm';
import ApiService from '../../src/services/Apiservices';
import toast from 'react-hot-toast';
import useSWR from 'swr'
import {
  FiAward,
  FiBriefcase,
  FiCalendar,
  FiClock,
  FiEdit2,
  FiEye,
  FiFilter,
  FiMapPin,
  FiMoreVertical,
  FiPlus,
  FiRotateCcw,
  FiSearch,
  FiTrash2,
  FiX,
} from "react-icons/fi";

const page = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");




// get api 

const {data,error,isLoading} = useSWR('career-roles',ApiService.get)

const jobsData = data?.data || []


const filteredJobs = jobsData.filter((job) => {
  const searchText = search.toLowerCase();

  const matchesSearch =
    job.title?.toLowerCase().includes(searchText) ||
    job.location?.toLowerCase().includes(searchText) ||
    job.experience?.toLowerCase().includes(searchText) ||
    job.qualification?.toLowerCase().includes(searchText);

  const matchesStatus =
    statusFilter === "all" ||
    String(job.is_active) === statusFilter;

  return matchesSearch && matchesStatus;
});

const hasFilters = search || statusFilter !== "all";

const handleReset = () => {
  setSearch("");
  setStatusFilter("all");
};
   
// save api 
const handleSave = async (formData) => {
  try {
    const res = await ApiService.post("career-roles", formData);
    console.log("API Response:", res);

    if (res?.success) {
      toast.success(
        res?.message || "Career role created successfully!"
      );

     // Close modal after successful save 
     setModalOpen(false);
      return res;
    }

    toast.error(
      res?.message || "Failed to create career role."
    );

  } catch (error) {
    console.error("Create Career Role Error:", error);

    toast.error(
      error?.response?.data?.message ||
      error?.message ||
      "Something went wrong. Please try again."
    );
  }
};

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"> 
       {/* HEADER */}
<div className="border-b border-slate-200">
  <div className="flex flex-col gap-3 px-4 py-3.5 lg:flex-row lg:items-center lg:justify-between">
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        <FiBriefcase size={17} />
      </div>

      <div>
        <h2 className="text-sm font-semibold text-slate-800">
          Career Roles
        </h2>

        <p className="mt-0.5 text-[11px] text-slate-400">
          Manage hospital job openings
        </p>
      </div>
    </div>

    <button
      type="button"
      onClick={() => setModalOpen(true)}
      className="flex h-9 items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-3.5 text-xs font-semibold text-white shadow-sm shadow-blue-600/20 transition hover:bg-blue-700 active:scale-95"
    >
      <FiPlus size={14} />
      Add Job
    </button>
  </div>

  {/* FILTER BAR */}
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
        placeholder="Search job title, location, qualification..."
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

    {/* STATUS */}
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
        <option value="all">All Status</option>
        <option value="1">Active</option>
        <option value="0">Inactive</option>
      </select>

      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[9px] text-slate-400">
        ▼
      </span>
    </div>

    {/* RESET */}
    {hasFilters && (
      <button
        type="button"
        onClick={handleReset}
        className="flex h-9 items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 text-xs font-medium text-slate-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"
      >
        <FiRotateCcw size={13} />
        Reset
      </button>
    )}
  </div>
</div>


{/* RESULT INFO */}
<div className="flex items-center justify-between border-b border-slate-100 bg-white px-4 py-2.5">
  <div className="flex items-center gap-2">
    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />

    <span className="text-[11px] text-slate-500">
      Showing{" "}
      <span className="font-semibold text-slate-700">
        {filteredJobs.length}
      </span>{" "}
      of{" "}
      <span className="font-semibold text-slate-700">
        {jobsData.length}
      </span>{" "}
      jobs
    </span>
  </div>

  {hasFilters && (
    <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-semibold text-blue-600">
      Filter applied
    </span>
  )}
</div>


{/* TABLE */}
<div className="max-h-[500px] w-full overflow-auto">
  <table className="w-full min-w-[1100px]">
    
    <thead className="sticky top-0 z-20">
      <tr className="border-b border-slate-200 bg-slate-50">
        
        <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">
          Job Role
        </th>

        <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">
          Location
        </th>

        <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">
          Experience
        </th>

        <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">
          Qualification
        </th>

        <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">
          Employment
        </th>

        <th className="px-4 py-3 text-center text-[10px] font-bold uppercase tracking-wider text-slate-500">
          Vacancies
        </th>

        <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">
          Deadline
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

      {isLoading ? (
        <tr>
          <td colSpan="9" className="px-4 py-16 text-center">
            <div className="flex flex-col items-center">
              <div className="h-7 w-7 animate-spin rounded-full border-2 border-slate-200 border-t-blue-600" />

              <p className="mt-3 text-xs text-slate-400">
                Loading career roles...
              </p>
            </div>
          </td>
        </tr>
      ) : filteredJobs.length > 0 ? (

        filteredJobs.map((job) => (
          <tr
            key={job.id}
            className="group transition hover:bg-slate-50/70"
          >

            {/* JOB TITLE */}
            <td className="px-4 py-3">
              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <FiBriefcase size={15} />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-slate-800">
                    {job.title}
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-400">
                    {job.vacancy_code}
                  </p>
                </div>

              </div>
            </td>


            {/* LOCATION */}
            <td className="px-4 py-3">
              <div className="flex items-center gap-1.5 text-xs text-slate-600">
                <FiMapPin
                  size={13}
                  className="text-slate-400"
                />

                <span>
                  {job.location || "-"}
                </span>
              </div>
            </td>


            {/* EXPERIENCE */}
            <td className="px-4 py-3">
              <div className="flex items-center gap-1.5 text-xs text-slate-600">
                <FiClock
                  size={13}
                  className="text-slate-400"
                />

                <span>
                  {job.experience || "-"}
                </span>
              </div>
            </td>


            {/* QUALIFICATION */}
            <td className="px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <FiAward size={13} />
                </div>

                <span className="max-w-[180px] text-xs font-medium text-slate-600">
                  {job.qualification || "-"}
                </span>
              </div>
            </td>


            {/* EMPLOYMENT TYPE */}
            <td className="px-4 py-3">
              <span className="inline-flex items-center rounded-lg bg-purple-50 px-2.5 py-1.5 text-[10px] font-semibold text-purple-600">
                {job.employment_type || "-"}
              </span>
            </td>


            {/* VACANCIES */}
            <td className="px-4 py-3 text-center">
              <span className="inline-flex min-w-[30px] items-center justify-center rounded-lg bg-blue-50 px-2 py-1.5 text-xs font-bold text-blue-600">
                {job.vacancies || 0}
              </span>
            </td>


            {/* DEADLINE */}
            <td className="px-4 py-3">
              <div className="flex items-center gap-1.5 text-xs text-slate-600">
                <FiCalendar
                  size={13}
                  className="text-slate-400"
                />

                <span>
                  {job.application_deadline
                    ? new Date(
                        job.application_deadline
                      ).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })
                    : "-"}
                </span>
              </div>
            </td>


            {/* STATUS */}
            <td className="px-4 py-3">
              {Number(job.is_active) === 1 ? (
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


            {/* ACTION */}
            <td className="px-4 py-3">
              <div className="flex items-center justify-end gap-1">

                <button
                  type="button"
                  title="View Job"
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition hover:bg-emerald-50 hover:text-emerald-600"
                >
                  <FiEye size={13} />
                </button>

                <button
                  type="button"
                  title="Edit Job"
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  <FiEdit2 size={13} />
                </button>

                <button
                  type="button"
                  title="Delete Job"
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                >
                  <FiTrash2 size={13} />
                </button>

                <button
                  type="button"
                  title="More"
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                >
                  <FiMoreVertical size={14} />
                </button>

              </div>
            </td>

          </tr>
        ))

      ) : (

        <tr>
          <td colSpan="9" className="px-4 py-16 text-center">

            <div className="flex flex-col items-center">

              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-300">
                <FiSearch size={20} />
              </div>

              <h3 className="text-sm font-semibold text-slate-700">
                No career roles found
              </h3>

              <p className="mt-1 text-[11px] text-slate-400">
                Try changing your search or filters.
              </p>

              {hasFilters && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-3 rounded-lg bg-blue-600 px-3 py-1.5 text-[10px] font-semibold text-white hover:bg-blue-700"
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


{/* FOOTER */}
<div className="flex items-center justify-between border-t border-slate-200 bg-slate-50/50 px-4 py-3">
  <p className="text-[11px] text-slate-500">
    Total Jobs:{" "}
    <span className="font-semibold text-slate-700">
      {jobsData.length}
    </span>
  </p>

  <p className="text-[10px] text-slate-400">
    Career Management
  </p>
</div>
   

     <ModalComponent
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Add Career Role"
        size="xl"
        >
        <CareerRoleForm
            onSubmit={handleSave}
            onCancel={() => setModalOpen(false)}
        />
        </ModalComponent>
      {/* modal  */}
    </div>
  )
}

export default page