// "use client";

// import React from "react";
// import {
//   FiUser,
//   FiAward,
//   FiClock,
//   FiGrid,
//   FiActivity,
//   FiEdit2,
//   FiTrash2,
//   FiMoreVertical,
// } from "react-icons/fi";
// import ApiService from "../../src/services/Apiservices";
// import useSWR from 'swr'

// const doctors = [
//   {
//     id: 1,
//     name: "Dr. Rajesh Sharma",
//     image: "https://randomuser.me/api/portraits/men/32.jpg",
//     specialization: "Cardiologist",
//     experience: "15 Years",
//     department: "Cardiology",
//     status: "active",
//   },
//   {
//     id: 2,
//     name: "Dr. Priya Verma",
//     image: "https://randomuser.me/api/portraits/women/44.jpg",
//     specialization: "Neurologist",
//     experience: "12 Years",
//     department: "Neurology",
//     status: "active",
//   },
//   {
//     id: 3,
//     name: "Dr. Amit Singh",
//     image: "https://randomuser.me/api/portraits/men/41.jpg",
//     specialization: "Orthopedic",
//     experience: "10 Years",
//     department: "Orthopedics",
//     status: "inactive",
//   },
// ];

// const Doctorpage = () => {

//  const { data, error, isLoading } =  useSWR('doctors',ApiService.get)
//  const doctors = data?.data || []
//   return (
//     <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

//       {/* Table Header */}
//       <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
//         <div>
//           <h2 className="text-sm font-semibold text-slate-800">
//             Doctors List
//           </h2>
//           <p className="mt-0.5 text-[11px] text-slate-400">
//             Manage registered doctors
//           </p>
//         </div>

//         <button
//           className="
//             flex items-center gap-1.5
//             rounded-lg bg-blue-600
//             px-3 py-2
//             text-xs font-medium text-white
//             transition
//             hover:bg-blue-700
//             active:scale-95
//           "
//         >
//           <FiUser size={14} />
//           Add Doctor
//         </button>
//       </div>

//       {/* Table */}
//       <div className="w-full overflow-x-auto">
//         <table className="w-full min-w-[850px]">

//           {/* Head */}
//           <thead>
//             <tr className="border-b border-slate-200 bg-slate-50/80">

//               <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-500">
//                 Doctor
//               </th>

//               <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-500">
//                 Specialization
//               </th>

//               <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-500">
//                 Experience
//               </th>

//               <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-500">
//                 Department
//               </th>

//               <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-500">
//                 Status
//               </th>

//               <th className="px-4 py-2.5 text-right text-[11px] font-semibold uppercase tracking-wide text-slate-500">
//                 Action
//               </th>

//             </tr>
//           </thead>

//           {/* Body */}
//           <tbody className="divide-y divide-slate-100">

//             {doctors?.map((doctor) => (

//               <tr
//                 key={doctor.id}
//                 className="
//                   group
//                   transition
//                   hover:bg-slate-50/70
//                 "
//               >

//                 {/* Doctor */}
//                 <td className="px-4 py-3">

//                   <div className="flex items-center gap-3">

//                     <div className="relative shrink-0">

//                       <img
//                         src={doctor.image}
//                         alt={doctor.name}
//                         className="
//                           h-9 w-9
//                           rounded-full
//                           object-cover
//                           ring-2 ring-white
//                           shadow-sm
//                         "
//                       />

//                       {/* Online Dot */}
//                       <span
//                         className={`
//                           absolute
//                           bottom-0
//                           right-0
//                           h-2.5
//                           w-2.5
//                           rounded-full
//                           border-2
//                           border-white
//                           ${
//                             doctor.status === "active"
//                               ? "bg-emerald-500"
//                               : "bg-slate-400"
//                           }
//                         `}
//                       />

//                     </div>

//                     <div className="min-w-0">

//                       <p className="truncate text-xs font-semibold text-slate-800">
//                         {doctor.name}
//                       </p>

//                       {/* <p className="mt-0.5 text-[10px] text-slate-400">
//                         Doctor ID #{String(doctor.id).padStart(3, "0")}
//                       </p> */}

//                     </div>

//                   </div>

//                 </td>

//                 {/* Specialization */}
//                 <td className="px-4 py-3">

//                   <div className="flex items-center gap-2">

//                     <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
//                       <FiAward size={13} />
//                     </div>

//                     <span className="text-xs font-medium text-slate-600">
//                       {doctor.specialty_name}
//                     </span>

//                   </div>

//                 </td>

//                 {/* Experience */}
//                 <td className="px-4 py-3">

//                   <div className="flex items-center gap-1.5 text-xs text-slate-600">

//                     <FiClock
//                       size={13}
//                       className="text-slate-400"
//                     />

//                     {doctor.experience_years} Years

//                   </div>

//                 </td>

//                 {/* Department */}
//                 <td className="px-4 py-3">

//                   <div
//                     className="
//                       inline-flex
//                       items-center
//                       gap-1.5
//                       rounded-lg
//                       bg-indigo-50
//                       px-2.5
//                       py-1.5
//                       text-[11px]
//                       font-medium
//                       text-indigo-600
//                     "
//                   >

//                     <FiGrid size={12} />

//                     {doctor.department_name}

//                   </div>

//                 </td>

//                 {/* Status */}
//                 <td className="px-4 py-3">

//                   <span
//                     className={`
//                       inline-flex
//                       items-center
//                       gap-1.5
//                       rounded-full
//                       px-2.5
//                       py-1
//                       text-[10px]
//                       font-semibold
//                       capitalize
//                       ${
//                         doctor.status == "1"
//                           ? "bg-emerald-50 text-emerald-600"
//                           : "bg-slate-100 text-slate-500"
//                       }
//                     `}
//                   >

//                     <span
//                       className={`
//                         h-1.5
//                         w-1.5
//                         rounded-full
//                         ${
//                           doctor.status == "1"
//                             ? "bg-emerald-500"
//                             : "bg-slate-400"
//                         }
//                       `}
//                     />

//                     {doctor.status == '1' ? 'Active' : 'Inactive'}

//                   </span>

//                 </td>

//                 {/* Actions */}
//                 <td className="px-4 py-3">

//                   <div className="flex items-center justify-end gap-1">

//                     {/* Edit */}
//                     <button
//                       title="Edit Doctor"
//                       className="
//                         flex h-7 w-7
//                         items-center justify-center
//                         rounded-lg
//                         text-slate-400
//                         transition
//                         hover:bg-blue-50
//                         hover:text-blue-600
//                       "
//                     >
//                       <FiEdit2 size={13} />
//                     </button>

//                     {/* Delete */}
//                     <button
//                       title="Delete Doctor"
//                       className="
//                         flex h-7 w-7
//                         items-center justify-center
//                         rounded-lg
//                         text-slate-400
//                         transition
//                         hover:bg-red-50
//                         hover:text-red-500
//                       "
//                     >
//                       <FiTrash2 size={13} />
//                     </button>

//                     {/* More */}
//                     <button
//                       title="More"
//                       className="
//                         flex h-7 w-7
//                         items-center justify-center
//                         rounded-lg
//                         text-slate-400
//                         transition
//                         hover:bg-slate-100
//                         hover:text-slate-700
//                       "
//                     >
//                       <FiMoreVertical size={14} />
//                     </button>

//                   </div>

//                 </td>

//               </tr>

//             ))}

//           </tbody>

//         </table>
//       </div>

//     </div>
//   );
// };

// export default Doctorpage;


"use client";

import React, { useMemo, useState } from "react";
import {
  FiUser,
  FiEdit2,
  FiTrash2,
  FiEye,
  FiMoreVertical,
  FiAward,
  FiClock,
  FiGrid,
  FiSearch,
  FiFilter,
  FiRotateCcw,
  FiX,
  FiUsers,
} from "react-icons/fi";
import ApiService from "../../src/services/Apiservices";
import useSWR from 'swr'
import ModalComponent from "../../components/admin/ModelComponent";
import Doctorfrom from "../../components/admin/Doctorfrom";
import AuthService from "../../src/services/Authservices";

const DoctorsPage = ({onAddDoctor }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [departmentFilter, setDepartmentFilter] = useState("all");
 const { data, error, isLoading } =  useSWR('doctors',ApiService.get)
 const doctors = data?.data || []
  const departments = useMemo(() => {
    const uniqueDepartments = [
      ...new Set(
        doctors
          .map((doctor) => doctor.department_name)
          .filter(Boolean)
      ),
    ];
    return uniqueDepartments;
  }, [doctors]);

  const filteredDoctors = useMemo(() => {
    const searchValue = search.toLowerCase().trim();
    return doctors.filter((doctor) => {
      const matchesSearch =
        !searchValue ||
        doctor.name?.toLowerCase().includes(searchValue) ||
        doctor.specialty_name?.toLowerCase().includes(searchValue) ||
        doctor.department_name?.toLowerCase().includes(searchValue);
      const matchesStatus =
        statusFilter === "all" ||
        String(doctor.status) === statusFilter;
      const matchesDepartment =
        departmentFilter === "all" ||
        doctor.department_name === departmentFilter;
      return matchesSearch && matchesStatus && matchesDepartment;
    });
  }, [doctors, search, statusFilter, departmentFilter]);

  const handleReset = () => {
    setSearch("");
    setStatusFilter("all");
    setDepartmentFilter("all");
  };

  const hasFilters =
    search ||
    statusFilter !== "all" ||
    departmentFilter !== "all";


    // get userid 

     const userId = AuthService.getUserId()

    //  const handleSave =async(formData)=>{
    //   console.log(formData)
    //   return
    //    try {
    //     let res = await ApiService.post('doctors',formData)
    //     console.log(res)
    //    } catch (error) {
    //     console.log(error.message)
    //    }
    //  }

    const handleSave = async (formData) => {
        try {
          const res = await ApiService.post(
            "doctors",
            formData
          );

          console.log(res);
        } catch (error) {
          console.error(error);
        }
      };

//     const handleSave = async (data) => {
//   try {
//     const formData = new FormData();

//     formData.append(
//       "created_by",
//       String(data.created_by)
//     );

//     formData.append(
//       "department_id",
//       String(data.department_id)
//     );

//     formData.append(
//       "specialty_id",
//       String(data.specialty_id)
//     );

//     formData.append(
//       "name",
//       data.name
//     );

//     formData.append(
//       "contact_no",
//       data.contact_no
//     );

//     formData.append(
//       "email",
//       data.email
//     );

//     formData.append(
//       "qualification",
//       data.qualification
//     );

//     formData.append(
//       "experience_years",
//       String(data.experience_years)
//     );

//     formData.append(
//       "web_experience",
//       data.web_experience
//     );

//     formData.append(
//       "web_bio",
//       data.web_bio
//     );

//     formData.append(
//       "web_heading",
//       data.web_heading
//     );

//     // JSON fields
//     formData.append(
//       "web_specilization",
//       JSON.stringify(
//         data.web_specilization || []
//       )
//     );

//     formData.append(
//       "web_certificat",
//       JSON.stringify(
//         data.web_certificat || []
//       )
//     );

//     formData.append(
//       "web_awards",
//       JSON.stringify(
//         data.web_awards || []
//       )
//     );

//     formData.append(
//       "available",
//       "1"
//     );

//     formData.append(
//       "status",
//       data.status ? "1" : "0"
//     );

//     // IMPORTANT
//     // Actual image file
//     if (data.image_file) {
//       formData.append(
//         "image",
//         data.image_file
//       );
//     }

//     // Check FormData
//     for (const [key, value] of formData.entries()) {
//       console.log(key, value);
//     }

//     // API
//     const res = await ApiService.post(
//       "doctors",
//       formData
//     );

//     console.log("API RESPONSE:", res);

//   } catch (error) {
//     console.error(
//       "Doctor save error:",
//       error
//     );
//   }
// };

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* HEADER */}
      <div className="border-b border-slate-200">
        <div className="flex flex-col gap-3 px-4 py-3.5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <FiUsers size={17} />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-800">
                Doctors List
              </h2>
              <p className="mt-0.5 text-[11px] text-slate-400">
                Manage registered doctors
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={()=>setModalOpen(true)}
            // onClick={onAddDoctor}
            className="flex h-9 items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-3.5 text-xs font-semibold text-white shadow-sm shadow-blue-600/20 transition hover:bg-blue-700 active:scale-95"
          >
            <FiUser size={14} />
            Add Doctor
          </button>
        </div>

        {/* FILTER BAR */}
        <div className="flex flex-col gap-2 bg-slate-50/70 px-4 py-3 md:flex-row md:items-center">
          <div className="relative flex-1">
            <FiSearch
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search doctor, specialization..."
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

          <div className="relative">
            <FiGrid
              size={13}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <select
              value={departmentFilter}
              onChange={(e) => setDepartmentFilter(e.target.value)}
              className="h-9 w-full appearance-none rounded-lg border border-slate-200 bg-white pl-8 pr-8 text-xs font-medium text-slate-600 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/10 md:w-[170px]"
            >
              <option value="all">All Departments</option>
              {departments.map((department) => (
                <option key={department} value={department}>
                  {department}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[9px] text-slate-400">
              ▼
            </span>
          </div>

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
              {filteredDoctors.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-slate-700">
              {doctors.length}
            </span>{" "}
            doctors
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
        <table className="w-full min-w-[900px]">
          <thead className="sticky top-0 z-20">
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Doctor
              </th>
              <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Specialization
              </th>
              <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Experience
              </th>
              <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Department
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
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor) => (
                <tr
                  key={doctor.id}
                  className="group transition hover:bg-slate-50/70"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      {/* <div className="relative shrink-0">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="h-9 w-9 rounded-full object-cover ring-2 ring-white shadow-sm"
                        />
                        <span
                          className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white ${
                            doctor.status == "1"
                              ? "bg-emerald-500"
                              : "bg-slate-400"
                          }`}
                        />
                      </div> */}
                      <div className="min-w-0">
                        <p className="truncate text-xs font-semibold text-slate-800">
                          {doctor.name}
                        </p>
                        {/* <p className="mt-0.5 text-[10px] text-slate-400">
                          Doctor ID #{String(doctor.id).padStart(3, "0")}
                        </p> */}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <FiAward size={13} />
                      </div>
                      <span className="text-xs font-medium text-slate-600">
                        {doctor.specialty_name}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1.5 text-xs text-slate-600">
                      <FiClock size={13} className="text-slate-400" />
                      <span>{doctor.experience_years}</span>
                      <span className="text-slate-400">Years</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-50 px-2.5 py-1.5 text-[10px] font-semibold text-indigo-600">
                      <FiGrid size={11} />
                      {doctor.department_name}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {doctor.status == "1" ? (
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
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        type="button"
                        title="View Doctor"
                        className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition hover:bg-emerald-50 hover:text-emerald-600"
                      >
                        <FiEye size={13} />
                      </button>
                      <button
                        type="button"
                        title="Edit Doctor"
                        className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition hover:bg-blue-50 hover:text-blue-600"
                      >
                        <FiEdit2 size={13} />
                      </button>
                      <button
                        type="button"
                        title="Delete Doctor"
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
                <td colSpan="6" className="px-4 py-16 text-center">
                  <div className="flex flex-col items-center">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-300">
                      <FiSearch size={20} />
                    </div>
                    <h3 className="text-sm font-semibold text-slate-700">
                      No doctors found
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
          Total Doctors:{" "}
          <span className="font-semibold text-slate-700">
            {doctors.length}
          </span>
        </p>
        <p className="text-[10px] text-slate-400">Doctor Management</p>
      </div>

      {/* modal  */}
      <ModalComponent
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          
        }}
        title="Add Doctor"
        size="xl"
      >
       <Doctorfrom
        onSubmit={handleSave}
        onCancel={() => setModalOpen(false)}
        userId={userId}
        />
      </ModalComponent>
      {/* modal  */}
    </div>
  );
};

export default DoctorsPage;