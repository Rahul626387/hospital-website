"use client";

import React from "react";

const MasterFooter = ({
  total = 0,
  label = "Categories",
  rightText = "Master Management",
}) => {
  return (
    <div className="flex items-center justify-between border-t border-gray-100 bg-gray-50/50 px-5 py-3">

      <p className="text-[11px] text-gray-500">
        Total {label}:{" "}
        <span className="font-bold text-gray-700">
          {total}
        </span>
      </p>

      <p className="text-[10px] text-gray-400">
        {rightText}
      </p>

    </div>
  );
};

export default MasterFooter;