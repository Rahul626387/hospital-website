
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  FiAward,
  FiCalendar,
  FiTag,
  FiFileText,
  FiImage,
  FiUploadCloud,
  FiSave,
  FiStar,
  FiX,
  FiCheck,
  FiChevronDown,
  FiAlignLeft,
  FiUser,
  FiTrash2,
  FiBriefcase,
  FiAlertCircle,
  FiPlus,
  FiEye,
} from "react-icons/fi";

const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
];

const categories = [
  "Healthcare Excellence",
  "Patient Care",
  "Medical Innovation",
  "Research",
  "Hospital Accreditation",
  "Community Service",
  "Quality & Safety",
  "Other",
];

const iconOptions = [
  { value: "award", label: "Award" },
  { value: "trophy", label: "Trophy" },
  { value: "medal", label: "Medal" },
  { value: "star", label: "Star" },
];

const initialForm = {
  userId: "",
  year: new Date().getFullYear().toString(),
  category: "",
  title: "",
  organization: "",
  description: "",
  image: null,
  icon: "award",
  featured: false,
  status: "active",
};

function getInitialForm(userId, initialData) {
  if (!initialData) {
    return {
      ...initialForm,
      userId: userId ?? "",
    };
  }

  return {
    ...initialForm,
    userId: initialData.userId ?? userId ?? "",
    year: String(
      initialData.year ?? new Date().getFullYear()
    ),
    category: initialData.category ?? "",
    title: initialData.title ?? "",
    organization: initialData.organization ?? "",
    description: initialData.description ?? "",
    image: initialData.image ?? null,
    icon: initialData.icon ?? "award",
    featured:
      initialData.featured === true ||
      initialData.featured === 1 ||
      initialData.featured === "1" ||
      initialData.featured === "true",
    status:
      initialData.status === 1 ||
      initialData.status === "1" ||
      initialData.status === true
        ? "active"
        : initialData.status === 0 ||
            initialData.status === "0" ||
            initialData.status === false
          ? "inactive"
          : initialData.status ?? "active",
  };
}

/* -------------------------------------------------------
   REUSABLE COMPONENTS
------------------------------------------------------- */

function SectionTitle({
  icon: Icon,
  title,
  description,
  iconClass = "bg-teal-50 text-[#087f8c]",
}) {
  return (
    <div className="mb-4 flex items-start gap-3">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${iconClass}`}
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
}

function FieldLabel({ children, required = false }) {
  return (
    <label className="mb-1.5 block text-[13px] font-semibold text-slate-700">
      {children}
      {required && (
        <span className="ml-1 text-red-500">*</span>
      )}
    </label>
  );
}

function InlineError({ message }) {
  if (!message) return null;

  return (
    <p className="mt-1.5 flex items-start gap-1.5 text-[11px] font-medium leading-4 text-red-600">
      <FiAlertCircle size={13} className="mt-0.5 shrink-0" />
      <span>{message}</span>
    </p>
  );
}

function Input({
  icon: Icon,
  error = false,
  className = "",
  ...props
}) {
  return (
    <div className="relative">
      {Icon && (
        <Icon
          size={16}
          className={`pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 ${
            error ? "text-red-400" : "text-slate-400"
          }`}
        />
      )}

      <input
        {...props}
        aria-invalid={error}
        className={`h-11 w-full rounded-xl border bg-white ${
          error
            ? "border-red-400 bg-red-50/40 focus:border-red-500 focus:ring-4 focus:ring-red-100"
            : "border-slate-200 hover:border-slate-300 focus:border-[#087f8c] focus:ring-4 focus:ring-[#087f8c]/10"
        } ${
          Icon ? "pl-10" : "px-3.5"
        } pr-3.5 text-[13px] font-medium text-slate-800 outline-none transition placeholder:text-[13px] placeholder:font-normal placeholder:text-slate-400 ${className}`}
      />
    </div>
  );
}

function Select({
  children,
  error = false,
  ...props
}) {
  return (
    <div className="relative">
      <select
        {...props}
        aria-invalid={error}
        className={`h-11 w-full appearance-none rounded-xl border bg-white px-3.5 pr-10 text-[13px] font-medium text-slate-800 outline-none transition ${
          error
            ? "border-red-400 bg-red-50/40 focus:border-red-500 focus:ring-4 focus:ring-red-100"
            : "border-slate-200 hover:border-slate-300 focus:border-[#087f8c] focus:ring-4 focus:ring-[#087f8c]/10"
        }`}
      >
        {children}
      </select>

      <FiChevronDown
        size={16}
        className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400"
      />
    </div>
  );
}

function Textarea({ error = false, ...props }) {
  return (
    <textarea
      {...props}
      aria-invalid={error}
      className={`min-h-[130px] w-full resize-y rounded-xl border bg-white px-3.5 py-3 text-[13px] font-medium leading-5 text-slate-800 outline-none transition placeholder:text-[13px] placeholder:font-normal placeholder:text-slate-400 ${
        error
          ? "border-red-400 bg-red-50/40 focus:border-red-500 focus:ring-4 focus:ring-red-100"
          : "border-slate-200 hover:border-slate-300 focus:border-[#087f8c] focus:ring-4 focus:ring-[#087f8c]/10"
      }`}
    />
  );
}

function Toggle({
  enabled,
  onChange,
  label,
  description,
  icon: Icon = FiStar,
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      onClick={() => onChange(!enabled)}
      className="flex w-full items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-3 text-left transition hover:border-slate-300"
    >
      <div className="flex min-w-0 items-start gap-2.5">
        <div className="mt-0.5 text-[#087f8c]">
          <Icon size={17} />
        </div>

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
      </div>

      <span
        className={`relative h-5 w-9 shrink-0 rounded-full transition-colors ${
          enabled ? "bg-[#087f8c]" : "bg-slate-300"
        }`}
      >
        <span
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform ${
            enabled ? "translate-x-[18px]" : "translate-x-0.5"
          }`}
        />
      </span>
    </button>
  );
}

/* -------------------------------------------------------
   AWARD FORM
------------------------------------------------------- */

export default function AwardForm({
  onSubmit,
  onCancel,
  onClose,
  userId,
  initialData = null,
  isSaving = false,
  submitError = "",
}) {
  const imageInputRef = useRef(null);
  const imagePreviewRef = useRef(null);

  const [form, setForm] = useState(() =>
    getInitialForm(userId, initialData)
  );

  const [preview, setPreview] = useState(
    typeof initialData?.image === "string"
      ? initialData.image
      : ""
  );

  const [errors, setErrors] = useState({});

  const isEdit = Boolean(initialData?.id);

  // Reinitialize the form when opening another award.
  useEffect(() => {
    if (imagePreviewRef.current) {
      URL.revokeObjectURL(imagePreviewRef.current);
      imagePreviewRef.current = null;
    }

    setForm(getInitialForm(userId, initialData));

    setPreview(
      typeof initialData?.image === "string"
        ? initialData.image
        : ""
    );

    setErrors({});

    if (imageInputRef.current) {
      imageInputRef.current.value = "";
    }
  }, [userId, initialData]);

  // Release temporary preview URLs.
  useEffect(() => {
    return () => {
      if (imagePreviewRef.current) {
        URL.revokeObjectURL(imagePreviewRef.current);
        imagePreviewRef.current = null;
      }
    };
  }, []);

  const clearError = (name) => {
    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    clearError(name);
  };

  /* IMAGE UPLOAD */

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      setErrors((previous) => ({
        ...previous,
        image: "Only JPG, PNG and WebP images are allowed.",
      }));

      toast.error("Only JPG, PNG and WebP images are allowed.");

      event.target.value = "";
      return;
    }

    if (file.size > MAX_IMAGE_SIZE) {
      setErrors((previous) => ({
        ...previous,
        image: "Award image must not exceed 5 MB.",
      }));

      toast.error("Award image must not exceed 5 MB.");

      event.target.value = "";
      return;
    }

    if (imagePreviewRef.current) {
      URL.revokeObjectURL(imagePreviewRef.current);
    }

    const objectUrl = URL.createObjectURL(file);

    imagePreviewRef.current = objectUrl;

    setPreview(objectUrl);

    setForm((previous) => ({
      ...previous,
      image: file,
    }));

    clearError("image");

    toast.success("Award image selected.");
  };

  const removeImage = () => {
    if (imagePreviewRef.current) {
      URL.revokeObjectURL(imagePreviewRef.current);
      imagePreviewRef.current = null;
    }

    setForm((previous) => ({
      ...previous,
      image: null,
    }));

    setPreview("");

    if (imageInputRef.current) {
      imageInputRef.current.value = "";
    }

    clearError("image");
  };

  /* VALIDATION */

  const validateForm = () => {
    const newErrors = {};

    if (!String(form.title).trim()) {
      newErrors.title = "Please enter the award title.";
    } else if (form.title.trim().length < 3) {
      newErrors.title =
        "Award title must contain at least 3 characters.";
    }

    if (!String(form.year).trim()) {
      newErrors.year = "Please enter the award year.";
    } else {
      const yearNumber = Number(form.year);

      if (
        !Number.isInteger(yearNumber) ||
        yearNumber < 1900 ||
        yearNumber > 2200
      ) {
        newErrors.year = "Please enter a valid year.";
      }
    }

    if (!String(form.category).trim()) {
      newErrors.category = "Please select an award category.";
    }

    if (!String(form.organization).trim()) {
      newErrors.organization =
        "Please enter the organization name.";
    }

    if (!String(form.description).trim()) {
      newErrors.description =
        "Please enter the award description.";
    } else if (form.description.trim().length > 5000) {
      newErrors.description =
        "Description cannot exceed 5000 characters.";
    }

    if (
      form.image instanceof File &&
      !ALLOWED_IMAGE_TYPES.includes(form.image.type)
    ) {
      newErrors.image =
        "Only JPG, PNG and WebP images are allowed.";
    }

    if (
      form.image instanceof File &&
      form.image.size > MAX_IMAGE_SIZE
    ) {
      newErrors.image = "Award image must not exceed 5 MB.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast.error("Please correct the highlighted fields.");

      const firstError = Object.keys(newErrors)[0];

      requestAnimationFrame(() => {
        const element = document.querySelector(
          `[name="${firstError}"]`
        );

        element?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        element?.focus?.();
      });

      return false;
    }

    return true;
  };

  /* SUBMIT */

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSaving) return;

    if (!validateForm()) return;

    if (typeof onSubmit !== "function") {
      toast.error("Award submit handler is not configured.");
      return;
    }

    try {
      const payload = new FormData();

      payload.append(
        "userId",
        String(form.userId || userId || "")
      );

      payload.append("year", String(form.year));
      payload.append("category", form.category.trim());
      payload.append("title", form.title.trim());
      payload.append(
        "organization",
        form.organization.trim()
      );
      payload.append(
        "description",
        form.description.trim()
      );
      payload.append("icon", form.icon);
      payload.append(
        "featured",
        form.featured ? "1" : "0"
      );
      payload.append("status", form.status);

      // Upload a new file only when a new image is selected.
      if (form.image instanceof File) {
        payload.append("image", form.image);
      } else if (typeof form.image === "string" && form.image) {
        // Preserve the existing image URL for the current API.
        payload.append("image", form.image);
      }

      if (initialData?.id) {
        payload.append("id", String(initialData.id));
      }

      await onSubmit(payload);

      toast.success(
        isEdit
          ? "Award updated successfully!"
          : "Award created successfully!"
      );
    } catch (error) {
      console.error("Award form submit error:", error);

      toast.error(
        error?.message ||
          "Failed to save award. Please try again."
      );
    }
  };

  const closeForm = () => {
    if (isSaving) return;

    if (typeof onCancel === "function") {
      onCancel();
    } else if (typeof onClose === "function") {
      onClose();
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full"
      noValidate
    >
      {/* FORM HEADER */}

    

      {/* API ERROR */}

      {submitError && (
        <div
          role="alert"
          className="mb-4 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-[12px] text-red-700"
        >
          <FiAlertCircle
            size={16}
            className="mt-0.5 shrink-0"
          />
          <p>{submitError}</p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_285px]">
        {/* LEFT: MAIN FORM */}

        <div className="space-y-4">
          {/* AWARD INFORMATION */}

          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <SectionTitle
              icon={FiAward}
              title="Award Information"
              description="Enter the main details of the award or recognition."
            />

            <div className="space-y-4">
              <div>
                <FieldLabel required>
                  Award Title
                </FieldLabel>

                <Input
                  name="title"
                  icon={FiAward}
                  value={form.title}
                  onChange={handleChange}
                  placeholder="e.g. Excellence in Patient Care"
                  maxLength={200}
                  error={Boolean(errors.title)}
                />

                <InlineError message={errors.title} />
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <FieldLabel required>
                    Award Category
                  </FieldLabel>

                  <Select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    error={Boolean(errors.category)}
                  >
                    <option value="">Select category</option>

                    {categories.map((category) => (
                      <option
                        key={category}
                        value={category}
                      >
                        {category}
                      </option>
                    ))}
                  </Select>

                  <InlineError message={errors.category} />
                </div>

                <div>
                  <FieldLabel required>
                    Award Year
                  </FieldLabel>

                  <Input
                    name="year"
                    type="number"
                    icon={FiCalendar}
                    min="1900"
                    max="2200"
                    value={form.year}
                    onChange={handleChange}
                    placeholder="2026"
                    error={Boolean(errors.year)}
                  />

                  <InlineError message={errors.year} />
                </div>

                <div className="md:col-span-2">
                  <FieldLabel required>
                    Awarding Organization
                  </FieldLabel>

                  <Input
                    name="organization"
                    icon={FiBriefcase}
                    value={form.organization}
                    onChange={handleChange}
                    placeholder="e.g. Healthcare Excellence Awards"
                    maxLength={200}
                    error={Boolean(errors.organization)}
                  />

                  <InlineError
                    message={errors.organization}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* AWARD DESCRIPTION */}

          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <SectionTitle
              icon={FiAlignLeft}
              title="Award Description"
              description="Explain the achievement, recognition and its significance."
              iconClass="bg-blue-50 text-blue-600"
            />

            <div>
              <FieldLabel required>
                Full Description
              </FieldLabel>

              <Textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Describe the achievement, the reason for receiving the award, and its importance..."
                maxLength={5000}
                error={Boolean(errors.description)}
              />

              <div className="mt-1.5 flex items-start justify-between gap-2">
                <InlineError
                  message={errors.description}
                />

                <span className="shrink-0 text-[10px] text-slate-400">
                  {form.description.length}/5000
                </span>
              </div>
            </div>
          </section>

          {/* DISPLAY SETTINGS */}

          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <SectionTitle
              icon={FiTag}
              title="Display Settings"
              description="Configure the award icon and how the award appears on the website."
              iconClass="bg-purple-50 text-purple-600"
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <FieldLabel>Display Icon</FieldLabel>

                <Select
                  name="icon"
                  value={form.icon}
                  onChange={handleChange}
                >
                  {iconOptions.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </Select>
              </div>

              <div>
                <FieldLabel>Status</FieldLabel>

                <Select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </Select>
              </div>
            </div>

            <div className="mt-4">
              <Toggle
                enabled={form.featured}
                onChange={(value) =>
                  setForm((previous) => ({
                    ...previous,
                    featured: value,
                  }))
                }
                label="Featured Award"
                description="Highlight this award in the featured awards section."
                icon={FiStar}
              />
            </div>
          </section>
        </div>

        {/* RIGHT: SIDEBAR */}

        <div className="space-y-4 xl:sticky xl:top-4 xl:self-start">
          {/* AWARD IMAGE */}

          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <SectionTitle
              icon={FiImage}
              title="Award Image"
              description="Upload the award certificate or recognition image."
              iconClass="bg-cyan-50 text-cyan-600"
            />

            <div className="relative flex min-h-[175px] items-center justify-center overflow-hidden rounded-xl border border-dashed border-slate-300 bg-slate-50">
              {preview ? (
                <>
                  <img
                    src={preview}
                    alt="Award preview"
                    className="absolute inset-0 h-full w-full object-contain p-2"
                  />

                  <span className="absolute left-2 top-2 flex items-center gap-1 rounded-lg bg-white/95 px-2 py-1 text-[10px] font-semibold text-emerald-700 shadow-sm">
                    <FiCheck size={12} />
                    Image selected
                  </span>
                </>
              ) : (
                <div className="px-4 py-8 text-center">
                  <FiImage
                    size={30}
                    className="mx-auto text-slate-300"
                  />

                  <p className="mt-2 text-[12px] font-semibold text-slate-600">
                    No award image
                  </p>

                  <p className="mt-1 text-[10px] text-slate-400">
                    JPG, PNG or WebP · Max 5 MB
                  </p>
                </div>
              )}
            </div>

            <input
              ref={imageInputRef}
              name="image"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={handleImageChange}
              disabled={isSaving}
              className="hidden"
            />

            <div className="mt-3 grid grid-cols-1 gap-2">
              <button
                type="button"
                onClick={() => imageInputRef.current?.click()}
                disabled={isSaving}
                className="flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-[#087f8c]/20 bg-[#087f8c]/5 text-[12px] font-semibold text-[#087f8c] transition hover:bg-[#087f8c]/10 disabled:opacity-50"
              >
                <FiUploadCloud size={15} />
                {preview ? "Change Image" : "Upload Image"}
              </button>

              {preview && (
                <button
                  type="button"
                  onClick={removeImage}
                  disabled={isSaving}
                  className="flex h-9 w-full items-center justify-center gap-2 rounded-xl border border-red-100 text-[12px] font-semibold text-red-600 transition hover:bg-red-50 disabled:opacity-50"
                >
                  <FiTrash2 size={14} />
                  Remove Image
                </button>
              )}
            </div>

            <InlineError message={errors.image} />
          </section>

          {/* PUBLISH SETTINGS */}

          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <SectionTitle
              icon={FiCheck}
              title="Publish Settings"
              description="Manage award visibility."
              iconClass="bg-emerald-50 text-emerald-600"
            />

            <div className="space-y-2.5">
              <Toggle
                enabled={form.status === "active"}
                onChange={(value) =>
                  setForm((previous) => ({
                    ...previous,
                    status: value ? "active" : "inactive",
                  }))
                }
                label="Published"
                description="Award is visible on the website."
                icon={FiEye}
              />

              <Toggle
                enabled={form.featured}
                onChange={(value) =>
                  setForm((previous) => ({
                    ...previous,
                    featured: value,
                  }))
                }
                label="Featured Award"
                description="Promote this award in featured sections."
                icon={FiStar}
              />
            </div>
          </section>

          {/* AWARD SUMMARY */}

          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <FiFileText size={16} />
              </div>

              <div>
                <h3 className="text-[14px] font-bold text-slate-900">
                  Award Summary
                </h3>

                <p className="text-[10px] text-slate-400">
                  Current form information
                </p>
              </div>
            </div>

            <div className="space-y-1.5">
              {[
                {
                  label: "Category",
                  value: form.category || "—",
                },
                {
                  label: "Award Year",
                  value: form.year || "—",
                },
                {
                  label: "Organization",
                  value: form.organization || "—",
                },
                {
                  label: "Display Icon",
                  value:
                    iconOptions.find(
                      (option) => option.value === form.icon
                    )?.label || "Award",
                },
                {
                  label: "Featured",
                  value: form.featured ? "Yes" : "No",
                },
                {
                  label: "Status",
                  value:
                    form.status === "active"
                      ? "Published"
                      : "Inactive",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-2 rounded-lg bg-slate-50 px-3 py-2"
                >
                  <span className="text-[11px] font-medium text-slate-500">
                    {item.label}
                  </span>

                  <span className="max-w-[150px] truncate text-right text-[11px] font-bold text-slate-800">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* HELPFUL CHECKLIST */}

          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <FiCheck size={17} />
              </div>

              <div>
                <h3 className="text-[13px] font-bold text-slate-900">
                  Before Saving
                </h3>

                <p className="text-[10px] text-slate-400">
                  Quick checklist
                </p>
              </div>
            </div>

            <ul className="space-y-2 text-[11px] leading-4 text-slate-500">
              <li className="flex items-start gap-2">
                <FiCheck
                  size={13}
                  className="mt-0.5 shrink-0 text-[#087f8c]"
                />
                Award title and year are correct.
              </li>

              <li className="flex items-start gap-2">
                <FiCheck
                  size={13}
                  className="mt-0.5 shrink-0 text-[#087f8c]"
                />
                Category and organization are provided.
              </li>

              <li className="flex items-start gap-2">
                <FiCheck
                  size={13}
                  className="mt-0.5 shrink-0 text-[#087f8c]"
                />
                Description explains the achievement.
              </li>

              <li className="flex items-start gap-2">
                <FiCheck
                  size={13}
                  className="mt-0.5 shrink-0 text-[#087f8c]"
                />
                Image is within the 5 MB limit.
              </li>
            </ul>
          </section>
        </div>
      </div>

      {/* FOOTER ACTIONS */}

      <div className="mt-4 flex flex-col-reverse gap-3 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-4">
        <div>
          <p className="text-[12px] font-semibold text-slate-700">
            Ready to save award?
          </p>

          <p className="mt-0.5 text-[10px] text-slate-400">
            Required fields are marked with an asterisk (*).
          </p>
        </div>

        <div className="flex w-full gap-2 sm:w-auto">
          {(onCancel || onClose) && (
            <button
              type="button"
              onClick={closeForm}
              disabled={isSaving}
              className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 text-[12px] font-semibold text-slate-600 transition hover:bg-slate-50 disabled:opacity-50 sm:flex-none"
            >
              <FiX size={15} />
              Cancel
            </button>
          )}

          <button
            type="submit"
            disabled={isSaving}
            className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#087f8c] px-5 text-[12px] font-semibold text-white shadow-sm transition hover:bg-[#066c77] disabled:cursor-not-allowed disabled:opacity-60 sm:flex-none"
          >
            {isSaving ? (
              <>
                <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Saving...
              </>
            ) : (
              <>
                <FiSave size={15} />
                {isEdit ? "Update Award" : "Save Award"}
              </>
            )}
          </button>
        </div>
      </div>
    </motion.form>
  );
}
