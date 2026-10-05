// "use client";

// import React from "react";
// import { FiLayers } from "react-icons/fi";
// import CommonButton from "./CommonButton";

// const MasterHeader = ({
//   title = "Master",
//   description = "Manage records",
//   icon: Icon = FiLayers,
//   addText = "Add",
//   onAdd,
// }) => {
//   return (
//     <div className="flex flex-col gap-3 border-b border-gray-100 bg-white px-5 py-3.5 lg:flex-row lg:items-center lg:justify-between">

//       <div className="flex items-center gap-3">
//         <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#087f8c]/10 text-[#087f8c]">
//           <Icon size={17} />
//         </div>

//         <div>
//           <h3 className="text-sm font-bold text-gray-800">
//             {title}
//           </h3>

//           <p className="text-[11px] text-gray-400">
//             {description}
//           </p>
//         </div>
//       </div>

//       {onAdd && (
//         <CommonButton onClick={onAdd}>
//           + {addText}
//         </CommonButton>
//       )}
//     </div>
//   );
// };

// export default MasterHeader;




"use client";

import React from "react";
import { FiLayers, FiSearch, FiFilter, FiRotateCcw, FiX } from "react-icons/fi";
import CommonButton from "./CommonButton";

const MasterHeader = ({
  title = "Master",
  description = "Manage records",
  icon: Icon = FiLayers,
  addText = "Add",

  // Filter props
  search = "",
  setSearch,
  statusFilter = "all",
  setStatusFilter,
  onReset,
  hasFilter,
  searchPlaceholder = "Search...",
  onAdd,
}) => {
  return (
    <div className="flex flex-col gap-3 border-b border-gray-100 bg-white px-5 py-3.5 lg:flex-row lg:items-center lg:justify-between">

      {/* LEFT */}
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#087f8c]/10 text-[#087f8c]">
          <Icon size={17} />
        </div>

        <div>
          <h3 className="text-sm font-bold text-gray-800">
            {title}
          </h3>

          <p className="text-[11px] text-gray-400">
            {description}
          </p>
        </div>
      </div>

      {/* RIGHT */}
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
            onChange={(e) => setSearch?.(e.target.value)}
            placeholder={searchPlaceholder}
            className="h-9 w-full rounded-lg border border-gray-200 bg-gray-50 pl-9 pr-8 text-xs text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-[#087f8c]/40 focus:bg-white focus:ring-2 focus:ring-[#087f8c]/10 sm:w-[190px]"
          />

          {search && (
            <button
              type="button"
              onClick={() => setSearch?.("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <FiX size={13} />
            </button>
          )}
        </div>

        {/* STATUS */}
        <div className="relative">
          <FiFilter
            size={13}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter?.(e.target.value)}
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
            onClick={onReset}
            title="Reset filters"
            className="flex h-9 items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 text-xs font-semibold text-gray-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"
          >
            <FiRotateCcw size={13} />
            <span>Reset</span>
          </button>
        )}

        {/* ADD */}
        {onAdd && (
          <CommonButton onClick={onAdd}>
            + {addText}
          </CommonButton>
        )}
      </div>
    </div>
  );
};

export default MasterHeader;