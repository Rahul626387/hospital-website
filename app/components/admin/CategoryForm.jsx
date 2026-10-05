
"use client";

import React, { useState } from "react";
import { FiSave } from "react-icons/fi";

const CategoryForm = ({ onSubmit, onCancel,userId }) => {
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    status: "active",
    user_id:userId
  });

  const handleNameChange = (e) => {
    const name = e.target.value;

    const slug = name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

    setFormData({
      ...formData,
      name,
      slug,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-md space-y-4"
    >
      {/* Name */}
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-gray-700">
          Category Name
        </label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleNameChange}
          placeholder="Heart Care"
          className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none transition focus:border-[#087f8c] focus:ring-2 focus:ring-[#087f8c]/10"
        />
      </div>

      {/* Slug */}
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-gray-700">
          Slug
        </label>

        <input
          type="text"
          name="slug"
          value={formData.slug}
          onChange={handleChange}
          placeholder="heart-care"
          className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none transition focus:border-[#087f8c] focus:ring-2 focus:ring-[#087f8c]/10"
        />
      </div>

      {/* Description */}
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-gray-700">
          Description
        </label>

        <textarea
          name="description"
          rows={3}
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter category description..."
          className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none transition focus:border-[#087f8c] focus:ring-2 focus:ring-[#087f8c]/10"
        />
      </div>

      {/* Status */}
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-gray-700">
          Status
        </label>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-[#087f8c]"
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      {/* Footer */}
      <div className="flex justify-end gap-2 border-t border-gray-100 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-600 transition hover:bg-gray-50"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#087f8c] to-[#075985] px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:opacity-90"
        >
          <FiSave size={15} />
          Save Category
        </button>
      </div>
    </form>
  );
};

export default CategoryForm;

