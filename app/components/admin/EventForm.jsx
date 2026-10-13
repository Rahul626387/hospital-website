
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  FiCalendar,
  FiClock,
  FiMapPin,
  FiFileText,
  FiImage,
  FiPlus,
  FiSave,
  FiStar,
  FiTrash2,
  FiUploadCloud,
  FiUser,
  FiPhone,
  FiTag,
  FiX,
  FiCheck,
  FiChevronDown,
  FiAlignLeft,
  FiHash,
  FiLink,
} from "react-icons/fi";

const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
];

const categories = [
  "Conference",
  "Workshop",
  "Seminar",
  "Health Camp",
  "Awareness Program",
  "Medical Camp",
  "Training",
  "Webinar",
  "Celebration",
  "Other",
];

const SectionTitle = ({
  icon: Icon,
  title,
  description,
  iconClass = "bg-teal-50 text-[#087f8c]",
}) => (
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

const FieldLabel = ({ children, required = false }) => (
  <label className="mb-1.5 block text-[13px] font-semibold text-slate-700">
    {children}
    {required && <span className="ml-1 text-red-500">*</span>}
  </label>
);

const InlineError = ({ message }) => {
  if (!message) return null;

  return (
    <p className="mt-1.5 flex items-start gap-1.5 text-[11px] font-medium leading-4 text-red-600">
      <FiX size={13} className="mt-0.5 shrink-0" />
      <span>{message}</span>
    </p>
  );
};

const Input = ({
  icon: Icon,
  error = false,
  className = "",
  ...props
}) => (
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

const Textarea = ({ error = false, ...props }) => (
  <textarea
    {...props}
    aria-invalid={error}
    className={`min-h-[110px] w-full resize-y rounded-xl border bg-white px-3.5 py-3 text-[13px] font-medium leading-5 text-slate-800 outline-none transition placeholder:text-[13px] placeholder:font-normal placeholder:text-slate-400 ${
      error
        ? "border-red-400 bg-red-50/40 focus:border-red-500 focus:ring-4 focus:ring-red-100"
        : "border-slate-200 hover:border-slate-300 focus:border-[#087f8c] focus:ring-4 focus:ring-[#087f8c]/10"
    }`}
  />
);

const Select = ({
  children,
  error = false,
  ...props
}) => (
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

const Toggle = ({ enabled, onChange, label, description }) => (
  <button
    type="button"
    onClick={() => onChange(!enabled)}
    className="flex w-full items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-3 text-left transition hover:border-slate-300"
  >
    <div>
      <p className="text-[13px] font-semibold text-slate-800">{label}</p>
      {description && (
        <p className="mt-0.5 text-[11px] leading-4 text-slate-500">
          {description}
        </p>
      )}
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

const getInitialForm = (initialData, userId) => ({
  userId: initialData?.userId ?? userId ?? "",
  slug: initialData?.slug ?? "",
  title: initialData?.title ?? "",
  category: initialData?.category ?? "",
  event_date: initialData?.event_date
    ? String(initialData.event_date).slice(0, 10)
    : "",
  end_date: initialData?.end_date
    ? String(initialData.end_date).slice(0, 10)
    : "",
  event_time: initialData?.event_time ?? "",
  location: initialData?.location ?? "",
  short_description: initialData?.short_description ?? "",
  description: initialData?.description ?? "",
  image: null,
  image_url: initialData?.image ?? "",
  status: initialData?.status === undefined
    ? true
    : initialData.status === true ||
      initialData.status === 1 ||
      initialData.status === "1" ||
      initialData.status === "active",
  featured: initialData?.featured === true ||
    initialData?.featured === 1 ||
    initialData?.featured === "1",
  organizer: initialData?.organizer ?? "",
  contact: initialData?.contact ?? "",
  highlights: Array.isArray(initialData?.highlights)
    ? initialData.highlights
    : typeof initialData?.highlights === "string"
      ? (() => {
          try {
            const parsed = JSON.parse(initialData.highlights);
            return Array.isArray(parsed) ? parsed : [];
          } catch {
            return initialData.highlights
              ? initialData.highlights.split(",").map((item) => item.trim()).filter(Boolean)
              : [];
          }
        })()
      : [],
});

export default function EventForm({
  onSubmit,
  onCancel,
  onClose,
  userId,
  initialData = null,
}) {
  const imageInputRef = useRef(null);
  const imagePreviewRef = useRef(null);

  const [formData, setFormData] = useState(() =>
    getInitialForm(initialData, userId)
  );

  const [imagePreview, setImagePreview] = useState(
    initialData?.image || ""
  );

  const [highlightInput, setHighlightInput] = useState("");
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    return () => {
      if (imagePreviewRef.current) {
        URL.revokeObjectURL(imagePreviewRef.current);
      }
    };
  }, []);

  const clearError = (name) => {
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updated = {
        ...prev,
        [name]: value,
      };

      if (name === "title" && !initialData?.slug) {
        updated.slug = createSlug(value);
      }

      return updated;
    });

    clearError(name);

    if (name === "event_date" || name === "end_date") {
      setErrors((prev) => ({
        ...prev,
        event_date: "",
        end_date: "",
      }));
    }
  };

  const createSlug = (value) =>
    value
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        image: "Only JPG, PNG and WebP images are allowed.",
      }));

      toast.error("Only JPG, PNG and WebP images are allowed.");
      e.target.value = "";
      return;
    }

    if (file.size > MAX_IMAGE_SIZE) {
      setErrors((prev) => ({
        ...prev,
        image: "Event image must not exceed 5 MB.",
      }));

      toast.error("Event image must not exceed 5 MB.");
      e.target.value = "";
      return;
    }

    if (imagePreviewRef.current) {
      URL.revokeObjectURL(imagePreviewRef.current);
    }

    const preview = URL.createObjectURL(file);
    imagePreviewRef.current = preview;

    setImagePreview(preview);

    setFormData((prev) => ({
      ...prev,
      image: file,
    }));

    clearError("image");
    toast.success("Event image selected.");
  };

  const addHighlight = () => {
    const value = highlightInput.trim();

    if (!value) {
      toast.error("Please enter an event highlight.");
      return;
    }

    if (
      formData.highlights.some(
        (item) => item.toLowerCase() === value.toLowerCase()
      )
    ) {
      toast.error("This highlight already exists.");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      highlights: [...prev.highlights, value],
    }));

    setHighlightInput("");
    clearError("highlights");
  };

  const removeHighlight = (index) => {
    setFormData((prev) => ({
      ...prev,
      highlights: prev.highlights.filter((_, i) => i !== index),
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Please enter the event title.";
    } else if (formData.title.trim().length < 3) {
      newErrors.title = "Title must contain at least 3 characters.";
    }

    if (!formData.category) {
      newErrors.category = "Please select an event category.";
    }

    if (!formData.event_date) {
      newErrors.event_date = "Please select the event start date.";
    }

    if (
      formData.event_date &&
      formData.end_date &&
      formData.end_date < formData.event_date
    ) {
      newErrors.end_date = "End date cannot be before the start date.";
    }

    if (!formData.event_time) {
      newErrors.event_time = "Please select the event time.";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Please enter the event location.";
    }

    if (!formData.short_description.trim()) {
      newErrors.short_description = "Please enter a short description.";
    } else if (formData.short_description.trim().length > 300) {
      newErrors.short_description =
        "Short description cannot exceed 300 characters.";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Please enter the event description.";
    }

    if (!formData.organizer.trim()) {
      newErrors.organizer = "Please enter the organizer name.";
    }

    if (
      formData.contact.trim() &&
      !/^[+()\d\s.-]{7,20}$/.test(formData.contact.trim())
    ) {
      newErrors.contact = "Please enter a valid contact number.";
    }

    if (
      formData.image &&
      !ALLOWED_IMAGE_TYPES.includes(formData.image.type)
    ) {
      newErrors.image = "Only JPG, PNG and WebP images are allowed.";
    }

    if (formData.image && formData.image.size > MAX_IMAGE_SIZE) {
      newErrors.image = "Event image must not exceed 5 MB.";
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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (saving) return;

  //   if (!validateForm()) return;

  //   if (typeof onSubmit !== "function") {
  //     toast.error("Event submit handler is not configured.");
  //     return;
  //   }

  //   try {
  //     setSaving(true);

  //     const payload = new FormData();

  //     payload.append("userId","2");
  //     payload.append("slug", formData.slug || createSlug(formData.title));
  //     payload.append("title", formData.title.trim());
  //     payload.append("category", formData.category);
  //     payload.append("event_date", formData.event_date);
  //     payload.append("end_date", formData.end_date || "");
  //     payload.append("event_time", formData.event_time);
  //     payload.append("location", formData.location.trim());
  //     payload.append("short_description", formData.short_description.trim());
  //     payload.append("description", formData.description.trim());
  //     payload.append("organizer", formData.organizer.trim());
  //     payload.append("contact", formData.contact.trim());
  //     payload.append("highlights", JSON.stringify(formData.highlights));
  //     payload.append("status", formData.status ? "1" : "0");
  //     payload.append("featured", formData.featured ? "1" : "0");

  //     // Only append a new file when the user selects one.
  //     // For edits, retain the existing image URL in the parent/API logic.
  //     if (formData.image) {
  //       payload.append("image", formData.image);
  //     }

  //     // Existing URL helps the API retain the current image on edit.
  //     payload.append("existing_image", formData.image_url || "");
  //     console.log("Payload Data:", payload);
  //     console.log("Payload Fields:", Object.keys(payload));

  //     await onSubmit(payload);

  //     toast.success(
  //       initialData?.id
  //         ? "Event updated successfully!"
  //         : "Event created successfully!"
  //     );
  //   } catch (error) {
  //     console.error("Event form submit error:", error);

  //     toast.error(
  //       error?.message || "Failed to save event. Please try again."
  //     );
  //   } finally {
  //     setSaving(false);
  //   }
  // };


const handleSubmit = async (e) => {
  e.preventDefault();

  if (saving) return;

  if (!validateForm()) return;

  if (typeof onSubmit !== "function") {
    toast.error("Event submit handler is not configured.");
    return;
  }

  try {
    setSaving(true);

    const payload = new FormData();

    payload.append("userId", "2");
    payload.append("slug", formData.slug || createSlug(formData.title));
    payload.append("title", formData.title.trim());
    payload.append("category", formData.category);
    payload.append("event_date", formData.event_date);
    payload.append("end_date", formData.end_date || "");
    payload.append("event_time", formData.event_time);
    payload.append("location", formData.location.trim());
    payload.append("short_description", formData.short_description.trim());
    payload.append("description", formData.description.trim());
    payload.append("organizer", formData.organizer.trim());
    payload.append("contact", formData.contact.trim());
    payload.append("highlights", JSON.stringify(formData.highlights));
    payload.append("status", formData.status ? "1" : "0");
    payload.append("featured", formData.featured ? "1" : "0");

    // Add image only when a new file is selected
    if (formData.image instanceof File) {
      payload.append("image", formData.image);
    }

    // Existing image URL
    payload.append("existing_image", formData.image_url || "");

    // Log all payload fields and values
    console.log("Payload Data:");

    for (const [key, value] of payload.entries()) {
      console.log(
        key,
        value instanceof File
          ? {
              name: value.name,
              type: value.type,
              size: value.size,
            }
          : value
      );
    }

    // Log field names only
    console.log(
      "Payload Fields:",
      Array.from(payload.keys())
    );

    await onSubmit(payload);

    toast.success(
      initialData?.id
        ? "Event updated successfully!"
        : "Event created successfully!"
    );
  } catch (error) {
    console.error("Event form submit error:", error);

    toast.error(
      error?.response?.data?.message ||
      error?.message ||
      "Failed to save event. Please try again."
    );
  } finally {
    setSaving(false);
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
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_285px]">

        {/* MAIN FORM */}
        <div className="space-y-4">

          {/* EVENT DETAILS */}
          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <SectionTitle
              icon={FiCalendar}
              title="Event Information"
              description="Enter the basic information about this event."
            />

            <div className="space-y-4">
              <div>
                <FieldLabel required>Event Title</FieldLabel>

                <Input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. World Heart Day Celebration"
                  icon={FiFileText}
                  error={Boolean(errors.title)}
                />

                <InlineError message={errors.title} />
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <FieldLabel required>Category</FieldLabel>

                  <Select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    error={Boolean(errors.category)}
                  >
                    <option value="">Select category</option>

                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </Select>

                  <InlineError message={errors.category} />
                </div>

                <div>
                  <FieldLabel>Event Slug</FieldLabel>

                  <Input
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    placeholder="world-heart-day"
                    icon={FiLink}
                  />

                  <p className="mt-1 text-[10px] text-slate-400">
                    Automatically generated from the event title.
                  </p>
                </div>

                <div>
                  <FieldLabel required>Start Date</FieldLabel>

                  <Input
                    name="event_date"
                    type="date"
                    value={formData.event_date}
                    onChange={handleChange}
                    icon={FiCalendar}
                    error={Boolean(errors.event_date)}
                  />

                  <InlineError message={errors.event_date} />
                </div>

                <div>
                  <FieldLabel>End Date</FieldLabel>

                  <Input
                    name="end_date"
                    type="date"
                    min={formData.event_date || undefined}
                    value={formData.end_date}
                    onChange={handleChange}
                    icon={FiCalendar}
                    error={Boolean(errors.end_date)}
                  />

                  <InlineError message={errors.end_date} />
                </div>

                <div>
                  <FieldLabel required>Event Time</FieldLabel>

                  <Input
                    name="event_time"
                    type="time"
                    value={formData.event_time}
                    onChange={handleChange}
                    icon={FiClock}
                    error={Boolean(errors.event_time)}
                  />

                  <InlineError message={errors.event_time} />
                </div>

                <div>
                  <FieldLabel required>Location</FieldLabel>

                  <Input
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Hospital auditorium, Jabalpur"
                    icon={FiMapPin}
                    error={Boolean(errors.location)}
                  />

                  <InlineError message={errors.location} />
                </div>
              </div>
            </div>
          </section>

          {/* DESCRIPTIONS */}
          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <SectionTitle
              icon={FiAlignLeft}
              title="Event Description"
              description="Add a short summary and the full event details."
              iconClass="bg-blue-50 text-blue-600"
            />

            <div className="space-y-4">
              <div>
                <FieldLabel required>Short Description</FieldLabel>

                <Textarea
                  name="short_description"
                  value={formData.short_description}
                  onChange={handleChange}
                  placeholder="Briefly describe the event for event cards..."
                  error={Boolean(errors.short_description)}
                  maxLength={300}
                />

                <div className="mt-1.5 flex items-start justify-between gap-2">
                  <InlineError message={errors.short_description} />

                  <span className="shrink-0 text-[10px] text-slate-400">
                    {formData.short_description.length}/300
                  </span>
                </div>
              </div>

              <div>
                <FieldLabel required>Full Description</FieldLabel>

                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Write the complete event details, objectives, agenda and other important information..."
                  error={Boolean(errors.description)}
                />

                <InlineError message={errors.description} />
              </div>
            </div>
          </section>

          {/* ORGANIZER */}
          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <SectionTitle
              icon={FiUser}
              title="Organizer & Contact"
              description="Provide organizer and contact information."
              iconClass="bg-purple-50 text-purple-600"
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <FieldLabel required>Organizer</FieldLabel>

                <Input
                  name="organizer"
                  value={formData.organizer}
                  onChange={handleChange}
                  placeholder="Apollo JBP Hospital"
                  icon={FiUser}
                  error={Boolean(errors.organizer)}
                />

                <InlineError message={errors.organizer} />
              </div>

              <div>
                <FieldLabel>Contact Number</FieldLabel>

                <Input
                  name="contact"
                  type="tel"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  icon={FiPhone}
                  error={Boolean(errors.contact)}
                />

                <InlineError message={errors.contact} />
              </div>
            </div>
          </section>

          {/* HIGHLIGHTS */}
          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <SectionTitle
              icon={FiStar}
              title="Event Highlights"
              description="Add key activities or highlights of the event."
              iconClass="bg-amber-50 text-amber-600"
            />

            <div className="flex gap-2">
              <input
                value={highlightInput}
                onChange={(e) => setHighlightInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addHighlight();
                  }
                }}
                placeholder="e.g. Free health checkup"
                className="h-11 min-w-0 flex-1 rounded-xl border border-slate-200 px-3.5 text-[13px] outline-none focus:border-[#087f8c] focus:ring-4 focus:ring-[#087f8c]/10"
              />

              <button
                type="button"
                onClick={addHighlight}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#087f8c] text-white hover:bg-[#066c77]"
              >
                <FiPlus size={18} />
              </button>
            </div>

            {formData.highlights.length > 0 ? (
              <div className="mt-3 space-y-2">
                {formData.highlights.map((highlight, index) => (
                  <div
                    key={`${highlight}-${index}`}
                    className="flex items-center justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5"
                  >
                    <div className="flex min-w-0 items-center gap-2">
                      <FiCheck
                        size={15}
                        className="shrink-0 text-[#087f8c]"
                      />

                      <span className="break-words text-[12px] font-medium text-slate-700">
                        {highlight}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeHighlight(index)}
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-red-500 hover:bg-red-50"
                      aria-label="Remove highlight"
                    >
                      <FiTrash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-2 text-[11px] text-slate-400">
                No highlights added yet.
              </p>
            )}
          </section>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-4 xl:sticky xl:top-4 xl:self-start">

          {/* EVENT IMAGE */}
          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <SectionTitle
              icon={FiImage}
              title="Event Cover"
              description="Upload the event banner or cover image."
              iconClass="bg-cyan-50 text-cyan-600"
            />

            <div className="relative flex min-h-[175px] items-center justify-center overflow-hidden rounded-xl border border-dashed border-slate-300 bg-slate-50">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Event preview"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <div className="px-4 py-8 text-center">
                  <FiImage
                    size={30}
                    className="mx-auto text-slate-300"
                  />

                  <p className="mt-2 text-[12px] font-semibold text-slate-600">
                    No cover image
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
              className="hidden"
            />

            <button
              type="button"
              onClick={() => imageInputRef.current?.click()}
              className="mt-3 flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-[#087f8c]/20 bg-[#087f8c]/5 text-[12px] font-semibold text-[#087f8c] transition hover:bg-[#087f8c]/10"
            >
              <FiUploadCloud size={15} />
              {imagePreview ? "Change Image" : "Upload Image"}
            </button>

            <InlineError message={errors.image} />
          </section>

          {/* PUBLISH SETTINGS */}
          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <SectionTitle
              icon={FiCheck}
              title="Publish Settings"
              description="Manage event visibility."
              iconClass="bg-emerald-50 text-emerald-600"
            />

            <div className="space-y-2.5">
              <Toggle
                enabled={formData.status}
                onChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    status: value,
                  }))
                }
                label="Published"
                description="Event is visible on the website."
              />

              <Toggle
                enabled={formData.featured}
                onChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    featured: value,
                  }))
                }
                label="Featured Event"
                description="Highlight this event in featured sections."
              />
            </div>
          </section>

          {/* SUMMARY */}
          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <FiFileText size={16} />
              </div>

              <div>
                <h3 className="text-[14px] font-bold text-slate-900">
                  Event Summary
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
                  value: formData.category || "—",
                },
                {
                  label: "Highlights",
                  value: formData.highlights.length,
                },
                {
                  label: "Start Date",
                  value: formData.event_date || "—",
                },
                {
                  label: "Featured",
                  value: formData.featured ? "Yes" : "No",
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
        </div>
      </div>

      {/* FOOTER ACTIONS */}
      <div className="mt-4 flex flex-col-reverse gap-3 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-4">
        <div>
          <p className="text-[12px] font-semibold text-slate-700">
            Ready to save event?
          </p>

          <p className="mt-0.5 text-[10px] text-slate-400">
            Required fields are marked with an asterisk (*).
          </p>
        </div>

        <div className="flex w-full gap-2 sm:w-auto">
          {(onCancel || onClose) && (
            <button
              type="button"
              onClick={onCancel || onClose}
              disabled={saving}
              className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 text-[12px] font-semibold text-slate-600 hover:bg-slate-50 disabled:opacity-50 sm:flex-none"
            >
              <FiX size={15} />
              Cancel
            </button>
          )}

          <button
            type="submit"
            disabled={saving}
            className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#087f8c] px-5 text-[12px] font-semibold text-white shadow-sm transition hover:bg-[#066c77] disabled:cursor-not-allowed disabled:opacity-60 sm:flex-none"
          >
            {saving ? (
              <>
                <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Saving...
              </>
            ) : (
              <>
                <FiSave size={15} />
                {initialData?.id ? "Update Event" : "Save Event"}
              </>
            )}
          </button>
        </div>
      </div>
    </motion.form>
  );
}
