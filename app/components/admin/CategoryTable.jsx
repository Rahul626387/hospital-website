"use client";

import React from "react";
import { FiEdit2, FiTrash2, FiEye } from "react-icons/fi";

const categories = [
  {
    id: 1,
    name: "Health Tips",
    slug: "health-tips",
    description: "General health and wellness tips",
    status: "active",
    postCount: 12,
  },
  {
    id: 2,
    name: "Heart Care",
    slug: "heart-care",
    description: "Heart health and cardiovascular care",
    status: "active",
    postCount: 8,
  },
  {
    id: 3,
    name: "Diabetes",
    slug: "diabetes",
    description: "Diabetes care and management",
    status: "active",
    postCount: 6,
  },
  {
    id: 4,
    name: "Women Health",
    slug: "women-health",
    description: "Women's health and wellness",
    status: "active",
    postCount: 10,
  },
  {
    id: 5,
    name: "Child Care",
    slug: "child-care",
    description: "Child health and pediatric care",
    status: "active",
    postCount: 7,
  },
  {
    id: 6,
    name: "Mental Health",
    slug: "mental-health",
    description: "Mental health awareness and care",
    status: "active",
    postCount: 5,
  },
  {
    id: 7,
    name: "Nutrition",
    slug: "nutrition",
    description: "Healthy diet and nutrition tips",
    status: "active",
    postCount: 9,
  },
  {
    id: 8,
    name: "Fitness",
    slug: "fitness",
    description: "Fitness, exercise and lifestyle",
    status: "active",
    postCount: 4,
  },
  {
    id: 9,
    name: "Hospital News",
    slug: "hospital-news",
    description: "Latest hospital updates and news",
    status: "active",
    postCount: 11,
  },
  {
    id: 10,
    name: "Medical Awareness",
    slug: "medical-awareness",
    description: "Medical awareness and education",
    status: "active",
    postCount: 15,
  },
];

const CategoryTable = () => {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
      {/* Table */}
      <div className="max-h-[380px] overflow-auto">
        <table className="w-full min-w-[550px] text-left">
          {/* Fixed Header */}
          <thead className="sticky top-0 z-20">
            <tr className="border-b border-[#087f8c]/20 bg-gradient-to-r from-[#087f8c] to-[#075985]">
              <th className="px-5 py-3 text-xs font-semibold text-white">#</th>

              <th className="px-5 py-3 text-xs font-semibold text-white">
                Category
              </th>

              <th className="px-5 py-3 text-xs font-semibold text-white">
                Slug
              </th>

              <th className="px-5 py-3 text-xs font-semibold text-white">
                Description
              </th>

              <th className="px-5 py-3 text-center text-xs font-semibold text-white">
                Posts
              </th>

              <th className="px-5 py-3 text-center text-xs font-semibold text-white">
                Status
              </th>

              <th className="px-5 py-3 text-right text-xs font-semibold text-white">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="bg-white">
            {categories.map((category) => (
              <tr
                key={category.id}
                className="group border-b border-gray-50 transition hover:bg-[#087f8c]/[0.03]"
              >
                {/* ID */}
                <td className="px-5 py-3.5 text-xs font-medium text-gray-400">
                  {String(category.id).padStart(2, "0")}
                </td>

                {/* Category */}
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#087f8c]/10 to-[#075985]/10 text-xs font-bold text-[#087f8c]">
                      {category.name.charAt(0)}
                    </div>

                    <p className="text-sm font-semibold text-gray-800">
                      {category.name}
                    </p>
                  </div>
                </td>

                {/* Slug */}
                <td className="px-5 py-3.5">
                  <span className="rounded-md bg-gray-50 px-2 py-1 font-mono text-[11px] text-gray-500">
                    /{category.slug}
                  </span>
                </td>

                {/* Description */}
                <td className="max-w-[280px] px-5 py-3.5">
                  <p className="truncate text-xs text-gray-500">
                    {category.description}
                  </p>
                </td>

                {/* Posts */}
                <td className="px-5 py-3.5 text-center">
                  <span className="inline-flex min-w-[32px] justify-center rounded-lg bg-[#075985]/10 px-2 py-1 text-xs font-bold text-[#075985]">
                    {category.postCount}
                  </span>
                </td>

                {/* Status */}
                <td className="px-5 py-3.5 text-center">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {category.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-5 py-3.5">
                  <div className="flex justify-end gap-1.5">
                    <button
                      type="button"
                      title="View"
                      className="rounded-lg p-2 text-gray-400 transition hover:bg-[#087f8c]/10 hover:text-[#087f8c]"
                    >
                      <FiEye size={15} />
                    </button>

                    <button
                      type="button"
                      title="Edit"
                      className="rounded-lg p-2 text-gray-400 transition hover:bg-blue-50 hover:text-blue-600"
                    >
                      <FiEdit2 size={15} />
                    </button>

                    <button
                      type="button"
                      title="Delete"
                      className="rounded-lg p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                    >
                      <FiTrash2 size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-gray-100 bg-gray-50/60 px-5 py-3">
        <p className="text-xs text-gray-500">
          Showing{" "}
          <span className="font-semibold text-gray-700">
            {categories.length}
          </span>{" "}
          categories
        </p>

        <p className="text-xs text-gray-400">
          Total Posts:{" "}
          <span className="font-semibold text-[#087f8c]">
            {categories.reduce((total, item) => total + item.postCount, 0)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CategoryTable;
