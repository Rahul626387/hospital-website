
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import useSWR from "swr";

import {
  FiBriefcase,
  FiCalendar,
  FiCheck,
  FiChevronDown,
  FiClipboard,
  FiFileText,
  FiMapPin,
  FiPlus,
  FiSave,
  FiTrash2,
  FiUser,
  FiX,
  FiActivity,
} from "react-icons/fi";
import ApiService from "../../src/services/Apiservices";


/* =========================================================
   SECTION TITLE
========================================================= */

const SectionTitle = ({
  icon: Icon,
  title,
  description,
  iconClass = "bg-teal-50 text-[#087f8c]",
}) => {
  return (
    <div className="mb-4 flex items-start gap-3">
      <div
        className={`
          flex h-10 w-10 shrink-0 items-center justify-center
          rounded-xl
          ${iconClass}
        `}
      >
        <Icon size={18} />
      </div>

      <div>
        <h2 className="text-[16px] font-bold tracking-tight text-slate-900">
          {title}
        </h2>

        {description && (
          <p className="mt-0.5 text-[12px] leading-5 text-slate-500">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

/* =========================================================
   FIELD LABEL
========================================================= */

const FieldLabel = ({ children, required = false }) => {
  return (
    <label className="mb-1.5 block text-[13px] font-semibold text-slate-700">
      {children}

      {required && (
        <span className="ml-1 text-red-500">*</span>
      )}
    </label>
  );
};

/* =========================================================
   INPUT
========================================================= */

const Input = ({
  icon: Icon,
  className = "",
  ...props
}) => {
  return (
    <div className="relative">
      {Icon && (
        <Icon
          size={16}
          className="
            pointer-events-none
            absolute
            left-3.5
            top-1/2
            -translate-y-1/2
            text-slate-400
          "
        />
      )}

      <input
        {...props}
        className={`
          h-11
          w-full
          rounded-xl
          border border-slate-200
          bg-white
          ${Icon ? "pl-10" : "px-3.5"}
          pr-3.5
          text-[13px]
          font-medium
          text-slate-800
          outline-none
          transition-all
          duration-200
          placeholder:text-[13px]
          placeholder:font-normal
          placeholder:text-slate-400
          hover:border-slate-300
          focus:border-[#087f8c]
          focus:ring-4
          focus:ring-[#087f8c]/10
          disabled:cursor-not-allowed
          disabled:bg-slate-50
          ${className}
        `}
      />
    </div>
  );
};

/* =========================================================
   TEXTAREA
========================================================= */

const Textarea = ({
  className = "",
  ...props
}) => {
  return (
    <textarea
      {...props}
      className={`
        min-h-[115px]
        w-full
        resize-y
        rounded-xl
        border border-slate-200
        bg-white
        px-3.5
        py-3
        text-[13px]
        font-medium
        leading-5
        text-slate-800
        outline-none
        transition-all
        duration-200
        placeholder:text-[13px]
        placeholder:font-normal
        placeholder:text-slate-400
        hover:border-slate-300
        focus:border-[#087f8c]
        focus:ring-4
        focus:ring-[#087f8c]/10
        ${className}
      `}
    />
  );
};

/* =========================================================
   SELECT
========================================================= */

const Select = ({
  children,
  ...props
}) => {
  return (
    <div className="relative">
      <select
        {...props}
        className="
          h-11
          w-full
          appearance-none
          rounded-xl
          border border-slate-200
          bg-white
          px-3.5
          pr-10
          text-[13px]
          font-medium
          text-slate-800
          outline-none
          transition-all
          duration-200
          hover:border-slate-300
          focus:border-[#087f8c]
          focus:ring-4
          focus:ring-[#087f8c]/10
        "
      >
        {children}
      </select>

      <FiChevronDown
        size={16}
        className="
          pointer-events-none
          absolute
          right-3.5
          top-1/2
          -translate-y-1/2
          text-slate-400
        "
      />
    </div>
  );
};

/* =========================================================
   TOGGLE
========================================================= */

const Toggle = ({
  enabled,
  onChange,
  label,
  description,
}) => {
  return (
    <button
      type="button"
      onClick={() => onChange(!enabled)}
      className="
        flex
        w-full
        items-center
        justify-between
        gap-3
        rounded-xl
        border
        border-slate-200
        bg-white
        p-3
        text-left
        transition
        hover:border-slate-300
      "
    >
      <div>
        <p className="text-[13px] font-semibold text-slate-800">
          {label}
        </p>

        {description && (
          <p className="mt-0.5 text-[11px] leading-4 text-slate-500">
            {description}
          </p>
        )}
      </div>

      <span
        className={`
          relative
          h-5
          w-9
          shrink-0
          rounded-full
          transition-colors
          ${enabled ? "bg-[#087f8c]" : "bg-slate-300"}
        `}
      >
        <span
          className={`
            absolute
            top-0.5
            h-4
            w-4
            rounded-full
            bg-white
            shadow
            transition-transform
            ${
              enabled
                ? "translate-x-[18px]"
                : "translate-x-0.5"
            }
          `}
        />
      </span>
    </button>
  );
};

/* =========================================================
   MAIN FORM
========================================================= */

export default function CareerRoleForm({
  onSubmit,
  onClose,
  userId,
  initialData = null,
}) {
  /* =========================================================
     API
  ========================================================= */

  const {
    data: deptData,
    isLoading: deptLoading,
  } = useSWR(
    "departments",
    ApiService.get
  );

  const departments = deptData?.data || [];

  /* =========================================================
     FORM STATE
  ========================================================= */

  const [formData, setFormData] = useState({
    department_id:
      initialData?.department_id ?? "",

    title:
      initialData?.title ?? "",

    location:
      initialData?.location ?? "",

    experience:
      initialData?.experience ?? "",

    qualification:
      initialData?.qualification ?? "",

    employment_type:
      initialData?.employment_type ?? "Full Time",

    summary:
      initialData?.summary ?? "",

    description:
      initialData?.description ?? "",

    responsibilities:
      Array.isArray(initialData?.responsibilities)
        ? initialData.responsibilities
        : [],

    skills:
      Array.isArray(initialData?.skills)
        ? initialData.skills
        : [],

    vacancy_code:
      initialData?.vacancy_code ?? "",

    vacancies:
      initialData?.vacancies ?? 1,

    application_deadline:
      initialData?.application_deadline ?? "",

    is_active:
      initialData?.is_active ?? true,

    display_order:
      initialData?.display_order ?? 0,

    created_by:
      initialData?.created_by ??
      userId ??
      "",
  });

  const [responsibilityInput, setResponsibilityInput] =
    useState("");

  const [skillInput, setSkillInput] =
    useState("");

  const [saving, setSaving] =
    useState(false);

  /* =========================================================
     COMMON CHANGE
  ========================================================= */

  const handleChange = (e) => {
    const {
      name,
      value,
    } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =========================================================
     RESPONSIBILITIES
  ========================================================= */

  const addResponsibility = () => {
    const value =
      responsibilityInput.trim();

    if (!value) return;

    const exists =
      formData.responsibilities.some(
        (item) =>
          item.toLowerCase() ===
          value.toLowerCase()
      );

    if (exists) {
      setResponsibilityInput("");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      responsibilities: [
        ...prev.responsibilities,
        value,
      ],
    }));

    setResponsibilityInput("");
  };

  const handleResponsibilityKeyDown = (e) => {
    if (
      e.key === "Enter" ||
      e.key === ","
    ) {
      e.preventDefault();
      addResponsibility();
    }
  };

  const removeResponsibility = (index) => {
    setFormData((prev) => ({
      ...prev,
      responsibilities:
        prev.responsibilities.filter(
          (_, i) => i !== index
        ),
    }));
  };

  /* =========================================================
     SKILLS
  ========================================================= */

  const addSkill = () => {
    const value =
      skillInput.trim();

    if (!value) return;

    const exists =
      formData.skills.some(
        (item) =>
          item.toLowerCase() ===
          value.toLowerCase()
      );

    if (exists) {
      setSkillInput("");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      skills: [
        ...prev.skills,
        value,
      ],
    }));

    setSkillInput("");
  };

  const handleSkillKeyDown = (e) => {
    if (
      e.key === "Enter" ||
      e.key === ","
    ) {
      e.preventDefault();
      addSkill();
    }
  };

  const removeSkill = (index) => {
    setFormData((prev) => ({
      ...prev,
      skills:
        prev.skills.filter(
          (_, i) => i !== index
        ),
    }));
  };

  /* =========================================================
     SUBMIT
  ========================================================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    /* ---------------------------------------------
       BASIC VALIDATION
    --------------------------------------------- */

    if (!formData.title.trim()) {
      alert("Please enter job title.");
      return;
    }

    if (!formData.department_id) {
      alert("Please select department.");
      return;
    }

    if (!formData.location.trim()) {
      alert("Please enter location.");
      return;
    }

    if (!formData.experience.trim()) {
      alert("Please enter experience.");
      return;
    }

    if (!formData.qualification.trim()) {
      alert("Please enter qualification.");
      return;
    }

    try {
      setSaving(true);

      /* ---------------------------------------------
         PAYLOAD
      --------------------------------------------- */

      const payload = {
        ...formData,

        created_by:
          formData.created_by
            ? Number(formData.created_by)
            : null,

        department_id:
          formData.department_id
            ? Number(formData.department_id)
            : null,

        vacancies:
          formData.vacancies
            ? Number(formData.vacancies)
            : 1,

        display_order:
          formData.display_order
            ? Number(formData.display_order)
            : 0,

        responsibilities:
          formData.responsibilities || [],

        skills:
          formData.skills || [],

        is_active:
          Boolean(formData.is_active),
      };

    //   console.log(
    //     "Career Role Payload:",
    //     payload
    //   );

      if (onSubmit) {
        await onSubmit(payload);
      }
    } catch (error) {
      console.error(
        "Career role submit error:",
        error
      );
    } finally {
      setSaving(false);
    }
  };

  /* =========================================================
     ANIMATION
  ========================================================= */

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 8,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.35,
        staggerChildren: 0.04,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 8,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.3,
      },
    },
  };

  /* =========================================================
     JSX
  ========================================================= */

  return (
    <motion.form
      onSubmit={handleSubmit}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full"
    >
      <div
        className="
          grid
          grid-cols-1
          gap-4
          xl:grid-cols-[minmax(0,1fr)_320px]
        "
      >

        {/* ===================================================
            LEFT SIDE
        =================================================== */}

        <div className="space-y-4">

          {/* =================================================
              BASIC JOB INFORMATION
          ================================================= */}

          <motion.section
            variants={itemVariants}
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-4
              shadow-sm
              sm:p-5
            "
          >
            <SectionTitle
              icon={FiBriefcase}
              title="Basic Job Information"
              description="Enter the basic information for this career opportunity."
              iconClass="bg-teal-50 text-[#087f8c]"
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

              {/* JOB TITLE */}

              <div className="md:col-span-2">
                <FieldLabel required>
                  Job Title
                </FieldLabel>

                <Input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. Staff Nurse"
                  icon={FiBriefcase}
                />
              </div>

              {/* DEPARTMENT */}

              <div>
                <FieldLabel required>
                  Department
                </FieldLabel>

                <Select
                  name="department_id"
                  value={
                    formData.department_id
                  }
                  onChange={handleChange}
                  disabled={deptLoading}
                >
                  <option value="">
                    {deptLoading
                      ? "Loading departments..."
                      : "Select Department"}
                  </option>

                  {departments.map(
                    (department) => (
                      <option
                        key={department.id}
                        value={department.id}
                      >
                        {department.name}
                      </option>
                    )
                  )}
                </Select>
              </div>

              {/* LOCATION */}

              <div>
                <FieldLabel required>
                  Location
                </FieldLabel>

                <Input
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Metro Hospital"
                  icon={FiMapPin}
                />
              </div>

              {/* EMPLOYMENT TYPE */}

              <div>
                <FieldLabel required>
                  Employment Type
                </FieldLabel>

                <Select
                  name="employment_type"
                  value={
                    formData.employment_type
                  }
                  onChange={handleChange}
                >
                  <option value="Full Time">
                    Full Time
                  </option>

                  <option value="Part Time">
                    Part Time
                  </option>

                  <option value="Contract">
                    Contract
                  </option>

                  <option value="Internship">
                    Internship
                  </option>

                  <option value="Temporary">
                    Temporary
                  </option>
                </Select>
              </div>

              {/* EXPERIENCE */}

              <div>
                <FieldLabel required>
                  Experience
                </FieldLabel>

                <Input
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="e.g. 2-5 Years"
                  icon={FiCalendar}
                />
              </div>

              {/* QUALIFICATION */}

              <div className="md:col-span-2">
                <FieldLabel required>
                  Qualification
                </FieldLabel>

                <Input
                  name="qualification"
                  value={
                    formData.qualification
                  }
                  onChange={handleChange}
                  placeholder="e.g. B.Sc Nursing / GNM"
                />
              </div>

            </div>
          </motion.section>

          {/* =================================================
              VACANCY INFORMATION
          ================================================= */}

          <motion.section
            variants={itemVariants}
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-4
              shadow-sm
              sm:p-5
            "
          >
            <SectionTitle
              icon={FiClipboard}
              title="Vacancy Information"
              description="Configure vacancy reference, openings and application deadline."
              iconClass="bg-blue-50 text-blue-600"
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

              {/* VACANCY CODE */}

              <div>
                <FieldLabel required>
                  Vacancy Code
                </FieldLabel>

                <Input
                  name="vacancy_code"
                  value={
                    formData.vacancy_code
                  }
                  onChange={handleChange}
                  placeholder="e.g. NUR-2026-001"
                />
              </div>

              {/* VACANCIES */}

              <div>
                <FieldLabel required>
                  Number of Vacancies
                </FieldLabel>

                <Input
                  name="vacancies"
                  type="number"
                  min="1"
                  value={
                    formData.vacancies
                  }
                  onChange={handleChange}
                  placeholder="5"
                />
              </div>

              {/* DEADLINE */}

              <div>
                <FieldLabel>
                  Application Deadline
                </FieldLabel>

                <Input
                  name="application_deadline"
                  type="date"
                  value={
                    formData.application_deadline
                  }
                  onChange={handleChange}
                  icon={FiCalendar}
                />
              </div>

              {/* DISPLAY ORDER */}

              <div>
                <FieldLabel>
                  Display Order
                </FieldLabel>

                <Input
                  name="display_order"
                  type="number"
                  min="0"
                  value={
                    formData.display_order
                  }
                  onChange={handleChange}
                  placeholder="0"
                />
              </div>

            </div>
          </motion.section>

          {/* =================================================
              JOB DESCRIPTION
          ================================================= */}

          <motion.section
            variants={itemVariants}
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-4
              shadow-sm
              sm:p-5
            "
          >
            <SectionTitle
              icon={FiFileText}
              title="Job Description"
              description="Provide a clear overview of this position."
              iconClass="bg-purple-50 text-purple-600"
            />

            <div className="space-y-4">

              <div>
                <FieldLabel>
                  Summary
                </FieldLabel>

                <Textarea
                  name="summary"
                  value={formData.summary}
                  onChange={handleChange}
                  placeholder="Write a short summary of this position..."
                  className="min-h-[90px]"
                />
              </div>

              <div>
                <FieldLabel>
                  Detailed Description
                </FieldLabel>

                <Textarea
                  name="description"
                  value={
                    formData.description
                  }
                  onChange={handleChange}
                  placeholder="Write detailed information about the job..."
                  className="min-h-[150px]"
                />
              </div>

            </div>
          </motion.section>

          {/* =================================================
              RESPONSIBILITIES
          ================================================= */}

          <motion.section
            variants={itemVariants}
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-4
              shadow-sm
              sm:p-5
            "
          >
            <SectionTitle
              icon={FiCheck}
              title="Responsibilities"
              description="Add the key responsibilities for this position."
              iconClass="bg-emerald-50 text-emerald-600"
            />

            <FieldLabel>
              Job Responsibilities
            </FieldLabel>

            <div className="flex gap-2">

              <input
                value={
                  responsibilityInput
                }
                onChange={(e) =>
                  setResponsibilityInput(
                    e.target.value
                  )
                }
                onKeyDown={
                  handleResponsibilityKeyDown
                }
                placeholder="e.g. Provide patient care"
                className="
                  h-11
                  min-w-0
                  flex-1
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-3.5
                  text-[13px]
                  font-medium
                  text-slate-800
                  outline-none
                  placeholder:text-[13px]
                  placeholder:text-slate-400
                  focus:border-[#087f8c]
                  focus:ring-4
                  focus:ring-[#087f8c]/10
                "
              />

              <button
                type="button"
                onClick={
                  addResponsibility
                }
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#087f8c]
                  text-white
                  shadow-sm
                  transition
                  hover:bg-[#066c77]
                  active:scale-95
                "
              >
                <FiPlus size={18} />
              </button>

            </div>

            <p className="mt-1.5 text-[11px] text-slate-400">
              Press Enter or click + to add.
            </p>

            {formData.responsibilities.length > 0 && (
              <div className="mt-3 space-y-2">

                {formData.responsibilities.map(
                  (item, index) => (
                    <motion.div
                      key={`${item}-${index}`}
                      initial={{
                        opacity: 0,
                        y: 6,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      className="
                        flex
                        items-center
                        justify-between
                        gap-3
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        px-3
                        py-2.5
                      "
                    >
                      <div className="flex min-w-0 items-center gap-2">

                        <span
                          className="
                            flex
                            h-6
                            w-6
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-emerald-50
                            text-emerald-600
                          "
                        >
                          <FiCheck size={12} />
                        </span>

                        <span className="truncate text-[12px] font-medium text-slate-700">
                          {item}
                        </span>

                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          removeResponsibility(
                            index
                          )
                        }
                        className="
                          flex
                          h-7
                          w-7
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          bg-red-50
                          text-red-500
                          transition
                          hover:bg-red-100
                        "
                      >
                        <FiTrash2 size={13} />
                      </button>

                    </motion.div>
                  )
                )}

              </div>
            )}
          </motion.section>

          {/* =================================================
              SKILLS
          ================================================= */}

          <motion.section
            variants={itemVariants}
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-4
              shadow-sm
              sm:p-5
            "
          >
            <SectionTitle
              icon={FiActivity}
              title="Required Skills"
              description="Add skills required for this position."
              iconClass="bg-cyan-50 text-cyan-600"
            />

            <FieldLabel>
              Skills
            </FieldLabel>

            <div className="flex gap-2">

              <input
                value={skillInput}
                onChange={(e) =>
                  setSkillInput(
                    e.target.value
                  )
                }
                onKeyDown={
                  handleSkillKeyDown
                }
                placeholder="e.g. Patient Care"
                className="
                  h-11
                  min-w-0
                  flex-1
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-3.5
                  text-[13px]
                  font-medium
                  text-slate-800
                  outline-none
                  placeholder:text-[13px]
                  placeholder:text-slate-400
                  focus:border-[#087f8c]
                  focus:ring-4
                  focus:ring-[#087f8c]/10
                "
              />

              <button
                type="button"
                onClick={addSkill}
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#087f8c]
                  text-white
                  shadow-sm
                  transition
                  hover:bg-[#066c77]
                  active:scale-95
                "
              >
                <FiPlus size={18} />
              </button>

            </div>

            <p className="mt-1.5 text-[11px] text-slate-400">
              Press Enter or click + to add.
            </p>

            {formData.skills.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">

                {formData.skills.map(
                  (skill, index) => (
                    <motion.div
                      key={`${skill}-${index}`}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        rounded-full
                        border
                        border-cyan-100
                        bg-cyan-50
                        px-2.5
                        py-1.5
                        text-[12px]
                        font-semibold
                        text-cyan-700
                      "
                    >
                      <FiCheck size={12} />

                      <span>
                        {skill}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          removeSkill(
                            index
                          )
                        }
                        className="
                          rounded-full
                          p-0.5
                          hover:bg-white
                        "
                      >
                        <FiX size={12} />
                      </button>

                    </motion.div>
                  )
                )}

              </div>
            )}
          </motion.section>

        </div>

        {/* =====================================================
            RIGHT SIDE
        ===================================================== */}

        <div className="space-y-4 xl:sticky xl:top-4 xl:self-start">

          {/* =================================================
              JOB STATUS
          ================================================= */}

          <motion.section
            variants={itemVariants}
            className="
              overflow-hidden
              rounded-2xl
              border
              border-slate-200
              bg-white
              shadow-sm
            "
          >
            <div className="border-b border-slate-100 p-4 sm:p-5">

              <SectionTitle
                icon={FiBriefcase}
                title="Job Status"
                description="Control visibility of this career opportunity."
                iconClass="bg-teal-50 text-[#087f8c]"
              />

              <Toggle
                enabled={
                  formData.is_active
                }
                onChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    is_active: value,
                  }))
                }
                label="Active Job"
                description="This job will be visible on the career page."
              />

            </div>
          </motion.section>

          {/* =================================================
              SUMMARY
          ================================================= */}

          <motion.section
            variants={itemVariants}
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-4
              shadow-sm
            "
          >

            <div className="mb-3 flex items-center gap-2.5">

              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-xl
                  bg-indigo-50
                  text-indigo-600
                "
              >
                <FiClipboard size={16} />
              </div>

              <div>
                <h3 className="text-[14px] font-bold text-slate-900">
                  Job Summary
                </h3>

                <p className="text-[10px] text-slate-400">
                  Current form information
                </p>
              </div>

            </div>

            <div className="space-y-1.5">

              {/* TITLE */}

              <div
                className="
                  rounded-lg
                  bg-slate-50
                  px-3
                  py-2
                "
              >
                <span className="text-[10px] font-medium text-slate-400">
                  Job Title
                </span>

                <p className="mt-0.5 truncate text-[12px] font-bold text-slate-800">
                  {formData.title || "—"}
                </p>
              </div>

              {/* DEPARTMENT */}

              <div
                className="
                  rounded-lg
                  bg-slate-50
                  px-3
                  py-2
                "
              >
                <span className="text-[10px] font-medium text-slate-400">
                  Department
                </span>

                <p className="mt-0.5 truncate text-[12px] font-bold text-slate-800">
                  {departments.find(
                    (department) =>
                      String(department.id) ===
                      String(
                        formData.department_id
                      )
                  )?.name || "—"}
                </p>
              </div>

              {/* LOCATION */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  rounded-lg
                  bg-slate-50
                  px-3
                  py-2
                "
              >
                <span className="text-[11px] font-medium text-slate-500">
                  Location
                </span>

                <span className="max-w-[160px] truncate text-[12px] font-bold text-slate-800">
                  {formData.location || "—"}
                </span>
              </div>

              {/* EXPERIENCE */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  rounded-lg
                  bg-slate-50
                  px-3
                  py-2
                "
              >
                <span className="text-[11px] font-medium text-slate-500">
                  Experience
                </span>

                <span className="text-[12px] font-bold text-slate-800">
                  {formData.experience || "—"}
                </span>
              </div>

              {/* EMPLOYMENT */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  rounded-lg
                  bg-slate-50
                  px-3
                  py-2
                "
              >
                <span className="text-[11px] font-medium text-slate-500">
                  Employment
                </span>

                <span className="text-[12px] font-bold text-slate-800">
                  {formData.employment_type ||
                    "—"}
                </span>
              </div>

              {/* VACANCIES */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  rounded-lg
                  bg-slate-50
                  px-3
                  py-2
                "
              >
                <span className="text-[11px] font-medium text-slate-500">
                  Vacancies
                </span>

                <span className="text-[12px] font-bold text-slate-800">
                  {formData.vacancies || 0}
                </span>
              </div>

              {/* RESPONSIBILITIES */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  rounded-lg
                  bg-slate-50
                  px-3
                  py-2
                "
              >
                <span className="text-[11px] font-medium text-slate-500">
                  Responsibilities
                </span>

                <span className="text-[12px] font-bold text-slate-800">
                  {
                    formData
                      .responsibilities
                      .length
                  }
                </span>
              </div>

              {/* SKILLS */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  rounded-lg
                  bg-slate-50
                  px-3
                  py-2
                "
              >
                <span className="text-[11px] font-medium text-slate-500">
                  Skills
                </span>

                <span className="text-[12px] font-bold text-slate-800">
                  {
                    formData.skills.length
                  }
                </span>
              </div>

            </div>
          </motion.section>

        </div>
      </div>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <motion.div
        variants={itemVariants}
        className="
          mt-4
          flex
          flex-col-reverse
          gap-3
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-3.5
          shadow-sm
          sm:flex-row
          sm:items-center
          sm:justify-between
          sm:p-4
        "
      >

        <div>
          <p className="text-[12px] font-semibold text-slate-700">
            Ready to publish this job?
          </p>

          <p className="mt-0.5 text-[10px] text-slate-400">
            Make sure all required information is completed.
          </p>
        </div>

        <div className="flex w-full gap-2 sm:w-auto">

          {onClose && (
            <button
              type="button"
              onClick={onClose}
              disabled={saving}
              className="
                flex
                h-10
                flex-1
                items-center
                justify-center
                gap-1.5
                rounded-xl
                border
                border-slate-200
                bg-white
                px-4
                text-[12px]
                font-semibold
                text-slate-600
                transition
                hover:bg-slate-50
                disabled:opacity-50
                sm:flex-none
              "
            >
              <FiX size={15} />
              Cancel
            </button>
          )}

          <button
            type="submit"
            disabled={saving}
            className="
              flex
              h-10
              flex-1
              items-center
              justify-center
              gap-1.5
              rounded-xl
              bg-[#087f8c]
              px-5
              text-[12px]
              font-semibold
              text-white
              shadow-sm
              shadow-[#087f8c]/20
              transition
              hover:bg-[#066c77]
              active:scale-[0.98]
              disabled:cursor-not-allowed
              disabled:opacity-60
              sm:flex-none
            "
          >
            {saving ? (
              <>
                <span
                  className="
                    h-3.5
                    w-3.5
                    animate-spin
                    rounded-full
                    border-2
                    border-white/30
                    border-t-white
                  "
                />

                Saving...
              </>
            ) : (
              <>
                <FiSave size={15} />
                Save Job
              </>
            )}
          </button>

        </div>
      </motion.div>
    </motion.form>
  );
}

