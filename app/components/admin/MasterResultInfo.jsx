"use client";

import React from "react";

const MasterResultInfo = ({
  filteredCount = 0,
  totalCount = 0,
  label = "records",
  hasFilter = false,
}) => {
  return (
    <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50/60 px-5 py-2.5">

      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#087f8c]" />

        <p className="text-[11px] text-gray-500">
          Showing{" "}
          <span className="font-bold text-gray-700">
            {filteredCount}
          </span>{" "}
          of{" "}
          <span className="font-bold text-gray-700">
            {totalCount}
          </span>{" "}
          {label}
        </p>
      </div>

      {hasFilter && (
        <span className="rounded-full bg-[#087f8c]/10 px-2.5 py-1 text-[10px] font-semibold text-[#087f8c]">
          Filter applied
        </span>
      )}
    </div>
  );
};

export default MasterResultInfo;