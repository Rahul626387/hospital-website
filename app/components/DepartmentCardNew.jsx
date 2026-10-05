"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";



const DepartmentCardNew = ({ department }) => {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      
      {/* Image */}
      <div className="relative h-36 overflow-hidden">
        <img
          src={department.image}
          alt={department.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Soft overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

        {/* Floating Icon */}
        <div className="absolute -bottom-1 left-4 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-white shadow-md">
          {department.icon ? (
            <img
              src={department.icon}
              alt=""
              className="h-7 w-7 object-contain"
            />
          ) : (
            <span className="text-xl">⚕️</span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-4 pt-5">
        
        <h3 className="text-base font-semibold text-[#0d3c59] transition-colors duration-300 group-hover:text-[#087ea4]">
          {department.name}
        </h3>

        <p className="mt-1.5 line-clamp-2 text-[11px] leading-5 text-slate-500">
          {department.description}
        </p>

        {/* View Details */}
        <Link
          href={`/departments/${department.id}`}
          className="mt-3 inline-flex items-center gap-1 text-[10px] font-semibold text-[#0d3c59] transition-all duration-300 group-hover:gap-2 group-hover:text-[#087ea4]"
        >
          View Details
          <ArrowRight
            size={12}
            strokeWidth={2.5}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </article>
  );
};

export default DepartmentCardNew;