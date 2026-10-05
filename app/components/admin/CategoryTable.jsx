// "use client";

// import React from "react";
// import { FiEdit2, FiTrash2, FiEye } from "react-icons/fi";



// const CategoryTable = ({categories}) => {
//   console.log(categories)

//   return (
//     <div className="w-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
//       {/* Table */}
//       <div className="max-h-[380px] overflow-auto">
//         <table className="w-full min-w-[550px] text-left">
//           {/* Fixed Header */}
//           <thead className="sticky top-0 z-20">
//             <tr className="border-b border-[#087f8c]/20 bg-gradient-to-r from-[#087f8c] to-[#075985]">
//               <th className="px-5 py-3 text-xs font-semibold text-white">#</th>

//               <th className="px-5 py-3 text-xs font-semibold text-white">
//                 Category
//               </th>

//               <th className="px-5 py-3 text-xs font-semibold text-white">
//                 Slug
//               </th>

//               <th className="px-5 py-3 text-xs font-semibold text-white">
//                 Description
//               </th>

//               {/* <th className="px-5 py-3 text-center text-xs font-semibold text-white">
//                 Posts
//               </th> */}

//               <th className="px-5 py-3 text-center text-xs font-semibold text-white">
//                 Status
//               </th>

//               <th className="px-5 py-3 text-right text-xs font-semibold text-white">
//                 Actions
//               </th>
//             </tr>
//           </thead>

//           <tbody className="bg-white">
//             {categories?.map((category) => (
//               <tr
//                 key={category.id}
//                 className="group border-b border-gray-50 transition hover:bg-[#087f8c]/[0.03]"
//               >
//                 {/* ID */}
//                 <td className="px-5 py-3.5 text-xs font-medium text-gray-400">
//                   {String(category.id).padStart(2, "0")}
//                 </td>

//                 {/* Category */}
//                 <td className="px-5 py-3.5">
//                   <div className="flex items-center gap-3">
//                     <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#087f8c]/10 to-[#075985]/10 text-xs font-bold text-[#087f8c]">
//                       {category.name.charAt(0)}
//                     </div>

//                     <p className="text-sm font-semibold text-gray-800">
//                       {category.name}
//                     </p>
//                   </div>
//                 </td>

//                 {/* Slug */}
//                 <td className="px-5 py-3.5">
//                   <span className="rounded-md bg-gray-50 px-2 py-1 font-mono text-[11px] text-gray-500" style={{textTransform:"capitalize"}}>
//                     {category.slug}
//                   </span>
//                 </td>

//                 {/* Description */}
//                 <td className="max-w-[280px] px-5 py-3.5">
//                   <p className="truncate text-xs text-gray-500">
//                     {category.description}
//                   </p>
//                 </td>

//                 {/* Posts */}
//                 {/* <td className="px-5 py-3.5 text-center">
//                   <span className="inline-flex min-w-[32px] justify-center rounded-lg bg-[#075985]/10 px-2 py-1 text-xs font-bold text-[#075985]">
//                     {category.postCount}
//                   </span>
//                 </td> */}

//                 {/* Status */}
//                 <td className="px-5 py-3.5 text-center">
//                   <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-600">
//                     <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
//                     {category.status == '1' ? 'Active' : 'Inactive'}
//                   </span>
//                 </td>

//                 {/* Actions */}
//                 <td className="px-5 py-3.5">
//                   <div className="flex justify-end gap-1.5">
//                     <button
//                       type="button"
//                       title="View"
//                       className="rounded-lg p-2 text-gray-400 transition hover:bg-[#087f8c]/10 hover:text-[#087f8c]"
//                     >
//                       <FiEye size={15} />
//                     </button>

//                     <button
//                       type="button"
//                       title="Edit"
//                       className="rounded-lg p-2 text-gray-400 transition hover:bg-blue-50 hover:text-blue-600"
//                     >
//                       <FiEdit2 size={15} />
//                     </button>

//                     <button
//                       type="button"
//                       title="Delete"
//                       className="rounded-lg p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-500"
//                     >
//                       <FiTrash2 size={15} />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Footer */}
//       <div className="flex items-center justify-between border-t border-gray-100 bg-gray-50/60 px-5 py-3">
//         <p className="text-xs text-gray-500">
//           Showing{" "}
//           <span className="font-semibold text-gray-700">
//             {categories?.length}
//           </span>{" "}
//           categories
//         </p>

//         {/* <p className="text-xs text-gray-400">
//           Total Posts:{" "}
//           <span className="font-semibold text-[#087f8c]">
//             {categories?.reduce((total, item) => total + item.postCount, 0)}
//           </span>
//         </p> */}
//       </div>
//     </div>
//   );
// };

// export default CategoryTable;


"use client";

import React, { useMemo, useState } from "react";
import {
  FiEdit2,
  FiTrash2,
  FiEye,
  FiLayers,
  FiSearch,
  FiRotateCcw,
  FiFilter,
  FiX,
} from "react-icons/fi";
import ApiService from "../../src/services/Apiservices";
import { mutate } from "swr";
import toast from "react-hot-toast";

const CategoryTable = ({ categories = [],userId }) => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // ================= FILTER DATA =================
  const filteredCategories = useMemo(() => {
    return categories.filter((category) => {
      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        !searchText ||
        category.name?.toLowerCase().includes(searchText) ||
        category.slug?.toLowerCase().includes(searchText) ||
        category.description?.toLowerCase().includes(searchText);

      const matchesStatus =
        statusFilter === "all" ||
        String(category.status) === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [categories, search, statusFilter]);

  // ================= RESET =================
  const handleReset = () => {
    setSearch("");
    setStatusFilter("all");
  };

  const hasFilter = search || statusFilter !== "all";


  // delete api 

// const handleDelete = async (cateId) => {
//   try {
   

//     // if (!userId) {
//     //   toast.error("User ID not found");
//     //   return;
//     // }

//     const res = await ApiService.delete(
//       `blog-categories/${cateId}`,
//       {
//         user_id:userId,
//       }
//     );

//     console.log("Delete Response:", res);

//     if (res?.success) {
//       toast.success(
//         res.message || "Category deleted successfully"
//       );

//       mutate("blog-categories");
//     } else {
//       toast.error(
//         res?.message || "Failed to delete category"
//       );
//     }

//   } catch (error) {
//     console.error("Delete Error:", error);

//     toast.error(
//       error?.response?.data?.message ||
//       "Something went wrong"
//     );
//   }
// };


const handleDelete = (cateId) => {
  toast((t) => (
    <div className="flex flex-col gap-3">
      <p className="font-medium text-gray-800">
        Are you sure you want to delete this category?
      </p>

      <div className="flex justify-end gap-2">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="rounded-md bg-gray-200 px-3 py-1.5 text-sm"
        >
          Cancel
        </button>

        <button
          onClick={async () => {
            toast.dismiss(t.id);

            try {
              const user_id = localStorage.getItem("user_id");

              const res = await ApiService.delete(
                `blog-categories/${cateId}`,
                {
                  user_id: Number(user_id),
                }
              );

              if (res?.success) {
                toast.success(
                  res.message || "Category deleted successfully"
                );

                mutate("blog-categories");
              } else {
                toast.error(
                  res?.message || "Failed to delete category"
                );
              }
            } catch (error) {
              toast.error(
                error?.response?.data?.message ||
                "Something went wrong"
              );
            }
          }}
          className="rounded-md bg-red-600 px-3 py-1.5 text-sm text-white"
        >
          Delete
        </button>
      </div>
    </div>
  ));
};

// Edit api

const handleEdit = (cateId) => {
  console.log(cateId)

}

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)]">

      {/* ================= TOP HEADER ================= */}
      <div className="flex flex-col gap-3 border-b border-gray-100 bg-white px-5 py-3.5 lg:flex-row lg:items-center lg:justify-between">

        {/* TITLE */}
        <div className="flex items-center gap-3">

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#087f8c]/10 text-[#087f8c]">
            <FiLayers size={17} />
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-800">
              Blog Categories
            </h3>

            <p className="text-[11px] text-gray-400">
              Manage your blog categories
            </p>
          </div>

        </div>

        {/* ================= FILTER AREA ================= */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">

          {/* SEARCH */}
          <div className="relative">

            <FiSearch
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search category..."
              className="h-9 w-full rounded-lg border border-gray-200 bg-gray-50 pl-9 pr-8 text-xs text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-[#087f8c]/40 focus:bg-white focus:ring-2 focus:ring-[#087f8c]/10 sm:w-[190px]"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <FiX size={13} />
              </button>
            )}

          </div>

          {/* STATUS FILTER */}
          <div className="relative">

            <FiFilter
              size={13}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="h-9 w-full cursor-pointer appearance-none rounded-lg border border-gray-200 bg-gray-50 pl-8 pr-8 text-xs font-medium text-gray-600 outline-none transition focus:border-[#087f8c]/40 focus:bg-white focus:ring-2 focus:ring-[#087f8c]/10 sm:w-[125px]"
            >
              <option value="all">All Status</option>
              <option value="1">Active</option>
              <option value="0">Inactive</option>
            </select>

            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[9px] text-gray-400">
              ▼
            </span>

          </div>

          {/* RESET */}
          {hasFilter && (
            <button
              type="button"
              onClick={handleReset}
              title="Reset filters"
              className="flex h-9 items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 text-xs font-semibold text-gray-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"
            >
              <FiRotateCcw size={13} />
              <span>Reset</span>
            </button>
          )}

        </div>
      </div>

      {/* ================= FILTER RESULT INFO ================= */}
      <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50/60 px-5 py-2.5">

        <div className="flex items-center gap-2">

          <span className="h-1.5 w-1.5 rounded-full bg-[#087f8c]" />

          <p className="text-[11px] text-gray-500">
            Showing{" "}
            <span className="font-bold text-gray-700">
              {filteredCategories.length}
            </span>{" "}
            of{" "}
            <span className="font-bold text-gray-700">
              {categories.length}
            </span>{" "}
            categories
          </p>

        </div>

        {hasFilter && (
          <span className="rounded-full bg-[#087f8c]/10 px-2.5 py-1 text-[10px] font-semibold text-[#087f8c]">
            Filter applied
          </span>
        )}

      </div>

      {/* ================= TABLE ================= */}
      <div className="max-h-[430px] overflow-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">

        <table className="w-full min-w-[750px] text-left">

          {/* ================= TABLE HEAD ================= */}
          <thead className="sticky top-0 z-20">

            <tr className="border-b border-white/10 bg-gradient-to-r from-[#075f6a] via-[#087f8c] to-[#075985]">

              <th className="w-[60px] px-5 py-3.5 text-[10px] font-bold uppercase tracking-wider text-white/80">
                #
              </th>

              <th className="px-5 py-3.5 text-[10px] font-bold uppercase tracking-wider text-white/80">
                Category
              </th>

              <th className="px-5 py-3.5 text-[10px] font-bold uppercase tracking-wider text-white/80">
                Slug
              </th>

              <th className="px-5 py-3.5 text-[10px] font-bold uppercase tracking-wider text-white/80">
                Description
              </th>

              <th className="px-5 py-3.5 text-center text-[10px] font-bold uppercase tracking-wider text-white/80">
                Status
              </th>

              <th className="px-5 py-3.5 text-right text-[10px] font-bold uppercase tracking-wider text-white/80">
                Actions
              </th>

            </tr>

          </thead>

          {/* ================= BODY ================= */}
          <tbody className="divide-y divide-gray-100">

            {filteredCategories.length > 0 ? (

              filteredCategories.map((category) => (

                <tr
                  key={category.id}
                  className="group bg-white transition-all duration-200 hover:bg-[#087f8c]/[0.025]"
                >

                  {/* ID */}
                  <td className="px-5 py-3.5">

                    <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-lg bg-gray-50 px-2 text-[10px] font-bold text-gray-400 transition group-hover:bg-[#087f8c]/10 group-hover:text-[#087f8c]">
                      {String(category.id).padStart(2, "0")}
                    </span>

                  </td>

                  {/* CATEGORY */}
                  <td className="px-5 py-3.5">

                    <div className="flex items-center gap-3">

                      <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#087f8c]/10 to-[#075985]/10 text-[#087f8c]">

                        <span className="text-sm font-bold">
                          {category.name?.charAt(0)?.toUpperCase()}
                        </span>

                        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full border-2 border-white bg-[#087f8c]" />

                      </div>

                      <div className="min-w-0">

                        <p className="truncate text-[13px] font-semibold text-gray-800">
                          {category.name}
                        </p>

                        <p className="mt-0.5 text-[10px] text-gray-400">
                          Category #{category.id}
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* SLUG */}
                  <td className="px-5 py-3.5">

                    <span className="inline-flex max-w-[190px] truncate rounded-lg border border-gray-100 bg-gray-50 px-2.5 py-1.5 font-mono text-[10px] text-gray-500 transition group-hover:border-[#087f8c]/10 group-hover:bg-[#087f8c]/5 group-hover:text-[#087f8c]">
                      /{category.slug}
                    </span>

                  </td>

                  {/* DESCRIPTION */}
                  <td className="max-w-[300px] px-5 py-3.5">

                    <p
                      className="max-w-[280px] truncate text-[11px] leading-5 text-gray-500"
                      title={category.description || ""}
                    >
                      {category.description || "No description available"}
                    </p>

                  </td>

                  {/* STATUS */}
                  <td className="px-5 py-3.5 text-center">

                    {category.status == "1" ? (

                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-600">

                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        </span>

                        Active

                      </span>

                    ) : (

                      <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-[10px] font-bold text-gray-500">

                        <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />

                        Inactive

                      </span>

                    )}

                  </td>

                  {/* ACTIONS */}
                  <td className="px-5 py-3.5">

                    <div className="flex justify-end">

                      <div className="flex items-center gap-1 rounded-xl border border-gray-100 bg-gray-50/70 p-1 opacity-70 transition-all duration-200 group-hover:border-gray-200 group-hover:bg-white group-hover:opacity-100 group-hover:shadow-sm">

                        {/* <button
                          type="button"
                          title="View Category"
                          className="flex h-7 w-7 items-center justify-center rounded-lg text-gray-400 transition hover:bg-[#087f8c]/10 hover:text-[#087f8c]"
                        >
                          <FiEye size={14} />
                        </button> */}

                        <button
                          type="button"
                          title="Edit Category"
                          className="flex h-7 w-7 items-center justify-center rounded-lg text-gray-400 transition hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                        >
                          <FiEdit2 size={14} onClick={()=>handleEdit(category.id)}  />
                        </button>

                        <button
                          type="button"
                          title="Delete Category"
                          className="flex h-7 w-7 items-center justify-center rounded-lg text-gray-400 transition hover:bg-red-50 hover:text-red-500 cursor-pointer"
                        >
                          <FiTrash2 size={14} onClick={()=>handleDelete(category.id)} />
                        </button>

                      </div>

                    </div>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="6"
                  className="px-5 py-16 text-center"
                >

                  <div className="flex flex-col items-center justify-center">

                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-50 text-gray-300">
                      <FiSearch size={20} />
                    </div>

                    <h4 className="text-sm font-semibold text-gray-700">
                      No categories found
                    </h4>

                    <p className="mt-1 text-[11px] text-gray-400">
                      Try changing your search or filter.
                    </p>

                    {hasFilter && (
                      <button
                        onClick={handleReset}
                        className="mt-3 rounded-lg bg-[#087f8c] px-3 py-1.5 text-[10px] font-semibold text-white transition hover:bg-[#076d78]"
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

      {/* ================= FOOTER ================= */}
      <div className="flex items-center justify-between border-t border-gray-100 bg-gray-50/50 px-5 py-3">

        <p className="text-[11px] text-gray-500">
          Total Categories:{" "}
          <span className="font-bold text-gray-700">
            {categories.length}
          </span>
        </p>

        <p className="text-[10px] text-gray-400">
          Category Management
        </p>

      </div>

    </div>
  );
};

export default CategoryTable;


