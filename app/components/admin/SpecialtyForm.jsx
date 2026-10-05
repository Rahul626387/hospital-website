"use client";

import React, { useState } from "react";
import { FiSave } from "react-icons/fi";
import useSWR  from "swr";
import ApiService from "../../src/services/Apiservices";

const SpecialtyForm = ({
  onSubmit,
  onCancel,
  userId,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    department_id: "",
    user_id: userId,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };


  const {data,error,isLoading} = useSWR('departments',ApiService.get)
  const departments = data?.data  || []

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-md space-y-4"
    >
      {/* Specialty Name */}
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-gray-700">
          Specialty Name
        </label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Cardiology"
          className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#087f8c]"
        />
      </div>

      {/* Department */}
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-gray-700">
          Department
        </label>

        <select
          name="department_id"
          value={formData.department_id}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#087f8c]"
        >
          <option value="">Select Department</option>

          {departments?.map((department) => (
            <option
              key={department.id}
              value={department.id}
            >
              {department.name}
            </option>
          ))}
        </select>
      </div>

      {/* Description */}
      {/* <div>
        <label className="mb-1.5 block text-xs font-semibold text-gray-700">
          Description
        </label>

        <textarea
          name="description"
          rows={3}
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter specialty description..."
          className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#087f8c]"
        />
      </div> */}

      {/* Status */}
      {/* <div>
        <label className="mb-1.5 block text-xs font-semibold text-gray-700">
          Status
        </label>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#087f8c]"
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div> */}

      {/* Footer */}
      <div className="flex justify-end gap-2 border-t border-gray-100 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-50"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#087f8c] to-[#075985] px-4 py-2 text-xs font-semibold text-white"
        >
          <FiSave size={15} />
          Save Specialty
        </button>
      </div>
    </form>
  );
};

export default SpecialtyForm;