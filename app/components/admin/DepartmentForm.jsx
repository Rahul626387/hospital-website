// // "use client";

// // import React, { useEffect, useState } from "react";
// // import {
// //   FiSave,
// //   FiUser,
// //   FiPhone,
// //   FiMapPin,
// //   FiClock,
// //   FiImage,
// //   FiUploadCloud,
// //   FiX,
// // } from "react-icons/fi";
// // import useSWR from "swr";
// // import ApiService from "../../src/services/Apiservices";

// // const DepartmentForm = ({
// //   onSubmit,
// //   onCancel,
// //   userId,
// //   initialData = null,
// // }) => {
// //   // =========================================================
// //   // Doctors
// //   // =========================================================
// //   const { data: doctorsData, isLoading: doctorsLoading } = useSWR(
// //     "doctors",
// //     ApiService.get
// //   );

// //   const doctors = Array.isArray(doctorsData)
// //     ? doctorsData
// //     : doctorsData?.data || [];

// //     console.log(doctors)

// //   // =========================================================
// //   // Form State
// //   // =========================================================
// //   const [formData, setFormData] = useState({
// //     name: initialData?.name || "",
// //     slug: initialData?.slug || "",
// //     short_description: initialData?.short_description || "",
// //     description: initialData?.description || "",

// //     image: null,
// //     banner_image: null,

// //     imagePreview: initialData?.image || "",
// //     bannerPreview: initialData?.banner_image || "",

// //     head_doctor_id: initialData?.head_doctor_id || "",

// //     phone: initialData?.phone || "",
// //     location: initialData?.location || "",
// //     timing: initialData?.timing || "",

// //     emergency_available:
// //       initialData?.emergency_available ?? false,

// //     appointment_available:
// //       initialData?.appointment_available ?? true,

// //     status: initialData?.status || "active",

// //     user_id: userId,
// //   });

// //   const [loading, setLoading] = useState(false);

// //   // =========================================================
// //   // Update form when editing another department
// //   // =========================================================
// //   useEffect(() => {
// //     setFormData({
// //       name: initialData?.name || "",
// //       slug: initialData?.slug || "",
// //       short_description: initialData?.short_description || "",
// //       description: initialData?.description || "",

// //       image: null,
// //       banner_image: null,

// //       imagePreview: initialData?.image || "",
// //       bannerPreview: initialData?.banner_image || "",

// //       head_doctor_id: initialData?.head_doctor_id || "",

// //       phone: initialData?.phone || "",
// //       location: initialData?.location || "",
// //       timing: initialData?.timing || "",

// //       emergency_available:
// //         initialData?.emergency_available ?? false,

// //       appointment_available:
// //         initialData?.appointment_available ?? true,

// //       status: initialData?.status || "active",

// //       user_id: userId,
// //     });
// //   }, [initialData, userId]);

// //   // =========================================================
// //   // Generate Slug
// //   // =========================================================
// //   const generateSlug = (value) => {
// //     return value
// //       .toLowerCase()
// //       .trim()
// //       .replace(/[^\w\s-]/g, "")
// //       .replace(/\s+/g, "-")
// //       .replace(/-+/g, "-");
// //   };

// //   // =========================================================
// //   // Name Change
// //   // =========================================================
// //   const handleNameChange = (e) => {
// //     const name = e.target.value;

// //     setFormData((prev) => ({
// //       ...prev,
// //       name,
// //       slug: generateSlug(name),
// //     }));
// //   };

// //   // =========================================================
// //   // Input Change
// //   // =========================================================
// //   const handleChange = (e) => {
// //     const { name, value, type, checked } = e.target;

// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: type === "checkbox" ? checked : value,
// //     }));
// //   };

// //   // =========================================================
// //   // Image Upload
// //   // =========================================================
// //   const handleImageChange = (e, type) => {
// //     const file = e.target.files?.[0];

// //     if (!file) return;

// //     // File size validation - 5MB
// //     if (file.size > 5 * 1024 * 1024) {
// //       alert("Image size should be less than 5MB.");
// //       e.target.value = "";
// //       return;
// //     }

// //     // File type validation
// //     const allowedTypes = [
// //       "image/jpeg",
// //       "image/jpg",
// //       "image/png",
// //       "image/webp",
// //     ];

// //     if (!allowedTypes.includes(file.type)) {
// //       alert("Only JPG, JPEG, PNG and WEBP images are allowed.");
// //       e.target.value = "";
// //       return;
// //     }

// //     const preview = URL.createObjectURL(file);

// //     if (type === "image") {
// //       setFormData((prev) => ({
// //         ...prev,
// //         image: file,
// //         imagePreview: preview,
// //       }));
// //     }

// //     if (type === "banner") {
// //       setFormData((prev) => ({
// //         ...prev,
// //         banner_image: file,
// //         bannerPreview: preview,
// //       }));
// //     }
// //   };

// //   // =========================================================
// //   // Remove Image
// //   // =========================================================
// //   const removeImage = (type) => {
// //     if (type === "image") {
// //       setFormData((prev) => ({
// //         ...prev,
// //         image: null,
// //         imagePreview: "",
// //       }));
// //     }

// //     if (type === "banner") {
// //       setFormData((prev) => ({
// //         ...prev,
// //         banner_image: null,
// //         bannerPreview: "",
// //       }));
// //     }
// //   };

// //   // =========================================================
// //   // Submit
// //   // =========================================================
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       setLoading(true);

// //       const payload = new FormData();

// //       // Basic
// //       payload.append("name", formData.name);
// //       payload.append("slug", formData.slug);
// //       payload.append(
// //         "short_description",
// //         formData.short_description
// //       );
// //       payload.append("description", formData.description);

// //       // Doctor
// //       payload.append(
// //         "head_doctor_id",
// //         formData.head_doctor_id || ""
// //       );

// //       // Contact
// //       payload.append("phone", formData.phone);
// //       payload.append("location", formData.location);
// //       payload.append("timing", formData.timing);

// //       // Availability
// //       payload.append(
// //         "emergency_available",
// //         formData.emergency_available ? "1" : "0"
// //       );

// //       payload.append(
// //         "appointment_available",
// //         formData.appointment_available ? "1" : "0"
// //       );

// //       // Status
// //       payload.append("status", formData.status);

// //       // User
// //       payload.append("user_id", userId || "");

// //       // Image
// //       if (formData.image instanceof File) {
// //         payload.append("image", formData.image);
// //       }

// //       // Banner
// //       if (formData.banner_image instanceof File) {
// //         payload.append(
// //           "banner_image",
// //           formData.banner_image
// //         );
// //       }

// //       console.log("Department FormData:", formData);

// //       await onSubmit(payload);
// //     } catch (error) {
// //       console.error(
// //         "Department submit error:",
// //         error
// //       );
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // =========================================================
// //   // File Picker Component
// //   // =========================================================
// //   const FilePicker = ({
// //     type,
// //     preview,
// //     label,
// //   }) => {
// //     const isImage = type === "image";

// //     return (
// //       <div>
// //         <label className="mb-1.5 block text-xs font-semibold text-gray-700">
// //           {label}
// //         </label>

// //         {preview ? (
// //           <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white">
// //             <img
// //               src={preview}
// //               alt={label}
// //               className="h-40 w-full object-cover"
// //             />

// //             <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">
// //               <button
// //                 type="button"
// //                 onClick={() => removeImage(type)}
// //                 className="flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-red-600 shadow-lg transition hover:bg-red-50"
// //               >
// //                 <FiX size={14} />
// //                 Remove
// //               </button>
// //             </div>
// //           </div>
// //         ) : (
// //           <label className="flex min-h-[170px] cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white transition hover:border-[#0d3c59] hover:bg-[#0d3c59]/[0.02]">
// //             <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0d3c59]/10 text-[#0d3c59]">
// //               <FiUploadCloud size={21} />
// //             </div>

// //             <span className="mb-1 text-sm font-semibold text-gray-700">
// //               Pick a file
// //             </span>

// //             <span className="text-xs text-gray-400">
// //               PNG, JPG, JPEG or WEBP
// //             </span>

// //             <span className="mt-1 text-[11px] text-gray-400">
// //               Maximum 5MB
// //             </span>

// //             <input
// //               type="file"
// //               accept="image/png,image/jpeg,image/jpg,image/webp"
// //               className="hidden"
// //               onChange={(e) =>
// //                 handleImageChange(
// //                   e,
// //                   isImage ? "image" : "banner"
// //                 )
// //               }
// //             />
// //           </label>
// //         )}
// //       </div>
// //     );
// //   };

// //   // =========================================================
// //   // UI
// //   // =========================================================
// //   return (
// //     <form
// //       onSubmit={handleSubmit}
// //       className="mx-auto w-full  space-y-5"
// //     >
// //       {/* =====================================================
// //           BASIC INFORMATION
// //       ===================================================== */}
// //       <div>
// //         <div className="grid gap-4 md:grid-cols-2">
// //           {/* Department Name */}
// //           <div>
// //             <label className="mb-1.5 block text-xs font-semibold text-gray-700">
// //               Department Name *
// //             </label>

// //             <input
// //               type="text"
// //               name="name"
// //               value={formData.name}
// //               onChange={handleNameChange}
// //               placeholder="Cardiology"
// //               required
// //               className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10"
// //             />
// //           </div>

// //           {/* Slug */}
// //           <div>
// //             <label className="mb-1.5 block text-xs font-semibold text-gray-700">
// //               Slug *
// //             </label>

// //             <input
// //               type="text"
// //               name="slug"
// //               value={formData.slug}
// //               onChange={handleChange}
// //               placeholder="cardiology"
// //               required
// //               className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10"
// //             />
// //           </div>

// //           {/* Short Description */}
// //           <div className="md:col-span-2">
// //             <label className="mb-1.5 block text-xs font-semibold text-gray-700">
// //               Short Description
// //             </label>

// //             <textarea
// //               name="short_description"
// //               rows={2}
// //               value={formData.short_description}
// //               onChange={handleChange}
// //               placeholder="Advanced cardiac care and treatment..."
// //               className="w-full resize-none rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10"
// //             />
// //           </div>

// //           {/* Description */}
// //           <div className="md:col-span-2">
// //             <label className="mb-1.5 block text-xs font-semibold text-gray-700">
// //               Description
// //             </label>

// //             <textarea
// //               name="description"
// //               rows={4}
// //               value={formData.description}
// //               onChange={handleChange}
// //               placeholder="Enter complete department description..."
// //               className="w-full resize-none rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10"
// //             />
// //           </div>
// //         </div>
// //       </div>

// //       {/* =====================================================
// //           IMAGES
// //       ===================================================== */}
// //       <div className="border-t border-gray-100 pt-5">
// //         <div className="mb-4 flex items-center gap-2">
// //           <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0d3c59]/10 text-[#0d3c59]">
// //             <FiImage size={16} />
// //           </div>

// //           <div>
// //             <h3 className="text-sm font-bold text-gray-800">
// //               Department Images
// //             </h3>

// //             <p className="text-xs text-gray-500">
// //               Upload department images
// //             </p>
// //           </div>
// //         </div>

// //         <div className="grid gap-4 md:grid-cols-2">
// //           <FilePicker
// //             type="image"
// //             preview={formData.imagePreview}
// //             label="Department Image"
// //           />

// //           <FilePicker
// //             type="banner"
// //             preview={formData.bannerPreview}
// //             label="Banner Image"
// //           />
// //         </div>
// //       </div>

// //       {/* =====================================================
// //           CONTACT & DOCTOR
// //       ===================================================== */}
// //       <div className="border-t border-gray-100 pt-5">
// //         {/* <div className="mb-4">
// //           <h3 className="text-sm font-bold text-gray-800">
// //             Contact & Department Details
// //           </h3>

// //           <p className="text-xs text-gray-500">
// //             Department contact and head doctor
// //           </p>
// //         </div> */}

// //         <div className="grid gap-4 md:grid-cols-2">
// //           {/* Head Doctor */}
// //           <div>
// //             <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-gray-700">
// //               <FiUser size={13} />
// //               Doctor's
// //             </label>

// //             <select
// //               name="head_doctor_id"
// //               value={formData.head_doctor_id}
// //               onChange={handleChange}
// //               disabled={doctorsLoading}
// //               className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10 disabled:bg-gray-100"
// //             >
// //               <option value="">
// //                 {doctorsLoading
// //                   ? "Loading doctors..."
// //                   : "Select Head Doctor"}
// //               </option>

// //               {doctors.map((doctor) => (
// //                 <option
// //                   key={doctor.id}
// //                   value={doctor.id}
// //                 >
// //                   {doctor.name}
// //                   {doctor.specialization
// //                     ? ` — ${doctor.specialization}`
// //                     : ""}
// //                 </option>
// //               ))}
// //             </select>
// //           </div>

// //           {/* Phone */}
// //           {/* <div>
// //             <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-gray-700">
// //               <FiPhone size={13} />
// //               Phone
// //             </label>

// //             <input
// //               type="text"
// //               name="phone"
// //               value={formData.phone}
// //               onChange={handleChange}
// //               placeholder="+91 9575300110"
// //               className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10"
// //             />
// //           </div> */}

// //           {/* Location */}
// //           {/* <div>
// //             <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-gray-700">
// //               <FiMapPin size={13} />
// //               Location
// //             </label>

// //             <input
// //               type="text"
// //               name="location"
// //               value={formData.location}
// //               onChange={handleChange}
// //               placeholder="1st Floor, Block A"
// //               className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10"
// //             />
// //           </div> */}

// //           {/* Timing */}
// //           {/* <div>
// //             <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-gray-700">
// //               <FiClock size={13} />
// //               OPD Timing
// //             </label>

// //             <input
// //               type="text"
// //               name="timing"
// //               value={formData.timing}
// //               onChange={handleChange}
// //               placeholder="Mon - Sat, 9:00 AM - 5:00 PM"
// //               className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10"
// //             />
// //           </div> */}
// //         </div>
// //       </div>

// //       {/* =====================================================
// //           AVAILABILITY
// //       ===================================================== */}
// //       {/* <div className="border-t border-gray-100 pt-5">
// //         <h3 className="mb-4 text-sm font-bold text-gray-800">
// //           Availability
// //         </h3>

// //         <div className="grid gap-3 md:grid-cols-2">
        
// //           <label className="flex cursor-pointer items-center justify-between rounded-xl border border-gray-200 bg-white p-3.5 transition hover:border-[#0d3c59]/30">
// //             <div>
// //               <p className="text-sm font-semibold text-gray-800">
// //                 Emergency Available
// //               </p>

// //               <p className="text-xs text-gray-500">
// //                 Handles emergency cases
// //               </p>
// //             </div>

// //             <input
// //               type="checkbox"
// //               name="emergency_available"
// //               checked={formData.emergency_available}
// //               onChange={handleChange}
// //               className="h-4 w-4 accent-[#0d3c59]"
// //             />
// //           </label>

// //           <label className="flex cursor-pointer items-center justify-between rounded-xl border border-gray-200 bg-white p-3.5 transition hover:border-[#0d3c59]/30">
// //             <div>
// //               <p className="text-sm font-semibold text-gray-800">
// //                 Appointment Available
// //               </p>

// //               <p className="text-xs text-gray-500">
// //                 Allow online appointments
// //               </p>
// //             </div>

// //             <input
// //               type="checkbox"
// //               name="appointment_available"
// //               checked={formData.appointment_available}
// //               onChange={handleChange}
// //               className="h-4 w-4 accent-[#0d3c59]"
// //             />
// //           </label>
// //         </div>
// //       </div> */}

// //       {/* =====================================================
// //           STATUS
// //       ===================================================== */}
// //       {/* <div className="border-t border-gray-100 pt-5">
// //         <label className="mb-1.5 block text-xs font-semibold text-gray-700">
// //           Status
// //         </label>

// //         <select
// //           name="status"
// //           value={formData.status}
// //           onChange={handleChange}
// //           className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10"
// //         >
// //           <option value="active">Active</option>
// //           <option value="inactive">Inactive</option>
// //         </select>
// //       </div> */}

// //       {/* =====================================================
// //           FOOTER
// //       ===================================================== */}
// //       <div className="flex justify-end gap-2 border-t border-gray-100 pt-4">
// //         <button
// //           type="button"
// //           onClick={onCancel}
// //           disabled={loading}
// //           className="rounded-lg border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-600 transition hover:bg-gray-50 disabled:opacity-50"
// //         >
// //           Cancel
// //         </button>

// //         <button
// //           type="submit"
// //           disabled={loading}
// //           className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#0d3c59] to-[#075985] px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
// //         >
// //           <FiSave size={15} />

// //           {loading
// //             ? "Saving..."
// //             : initialData
// //             ? "Update Department"
// //             : "Save Department"}
// //         </button>
// //       </div>
// //     </form>
// //   );
// // };

// // export default DepartmentForm;



// // "use client";

// // import React, { useEffect, useRef, useState } from "react";
// // import {
// //   FiSave,
// //   FiUser,
// //   FiImage,
// //   FiUploadCloud,
// //   FiX,
// //   FiSearch,
// //   FiChevronDown,
// //   FiCheck,
// //   FiActivity,
// // } from "react-icons/fi";
// // import useSWR from "swr";
// // import ApiService from "../../src/services/Apiservices";

// // const DepartmentForm = ({
// //   onSubmit,
// //   onCancel,
// //   userId,
// //   initialData = null,
// // }) => {
// //   // =========================================================
// //   // Doctors API
// //   // =========================================================

// //   const { data: doctorsData, isLoading: doctorsLoading } = useSWR(
// //     "doctors",
// //     ApiService.get
// //   );

// //   const doctors = Array.isArray(doctorsData)
// //     ? doctorsData
// //     : doctorsData?.data || [];

// //   // =========================================================
// //   // Doctor Dropdown State
// //   // =========================================================

// //   const [doctorDropdownOpen, setDoctorDropdownOpen] =
// //     useState(false);

// //   const [doctorSearch, setDoctorSearch] = useState("");

// //   const doctorDropdownRef = useRef(null);

// //   // =========================================================
// //   // Form State
// //   // =========================================================

// //   const [formData, setFormData] = useState({
// //     name: initialData?.name || "",
// //     slug: initialData?.slug || "",
// //     icon: initialData?.icon || "",

// //     short_description:
// //       initialData?.short_description || "",

// //     description: initialData?.description || "",

// //     image: null,
// //     banner_image: null,

// //     imagePreview: initialData?.image || "",
// //     bannerPreview: initialData?.banner_image || "",

// //     head_doctor_id:
// //       initialData?.head_doctor_id || "",

// //     phone: initialData?.phone || "",
// //     location: initialData?.location || "",
// //     timing: initialData?.timing || "",

// //     emergency_available:
// //       initialData?.emergency_available ?? false,

// //     appointment_available:
// //       initialData?.appointment_available ?? true,

// //     status: initialData?.status || "active",

// //     user_id: userId,
// //   });

// //   const [loading, setLoading] = useState(false);

// //   // =========================================================
// //   // Update Form When Editing
// //   // =========================================================

// //   useEffect(() => {
// //     setFormData({
// //       name: initialData?.name || "",
// //       slug: initialData?.slug || "",
// //       icon: initialData?.icon || "",

// //       short_description:
// //         initialData?.short_description || "",

// //       description: initialData?.description || "",

// //       image: null,
// //       banner_image: null,

// //       imagePreview: initialData?.image || "",
// //       bannerPreview: initialData?.banner_image || "",

// //       head_doctor_id:
// //         initialData?.head_doctor_id || "",

// //       phone: initialData?.phone || "",
// //       location: initialData?.location || "",
// //       timing: initialData?.timing || "",

// //       emergency_available:
// //         initialData?.emergency_available ?? false,

// //       appointment_available:
// //         initialData?.appointment_available ?? true,

// //       status: initialData?.status || "active",

// //       user_id: userId,
// //     });
// //   }, [initialData, userId]);

// //   // =========================================================
// //   // Close Doctor Dropdown Outside Click
// //   // =========================================================

// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (
// //         doctorDropdownRef.current &&
// //         !doctorDropdownRef.current.contains(event.target)
// //       ) {
// //         setDoctorDropdownOpen(false);
// //       }
// //     };

// //     document.addEventListener(
// //       "mousedown",
// //       handleClickOutside
// //     );

// //     return () => {
// //       document.removeEventListener(
// //         "mousedown",
// //         handleClickOutside
// //       );
// //     };
// //   }, []);

// //   // =========================================================
// //   // Generate Slug
// //   // =========================================================

// //   const generateSlug = (value) => {
// //     return value
// //       .toLowerCase()
// //       .trim()
// //       .replace(/[^\w\s-]/g, "")
// //       .replace(/\s+/g, "-")
// //       .replace(/-+/g, "-");
// //   };

// //   // =========================================================
// //   // Department Name Change
// //   // =========================================================

// //   const handleNameChange = (e) => {
// //     const name = e.target.value;

// //     setFormData((prev) => ({
// //       ...prev,
// //       name,
// //       slug: generateSlug(name),
// //     }));
// //   };

// //   // =========================================================
// //   // Input Change
// //   // =========================================================

// //   const handleChange = (e) => {
// //     const {
// //       name,
// //       value,
// //       type,
// //       checked,
// //     } = e.target;

// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]:
// //         type === "checkbox"
// //           ? checked
// //           : value,
// //     }));
// //   };

// //   // =========================================================
// //   // Selected Doctor
// //   // =========================================================

// //   const selectedDoctor = doctors.find(
// //     (doctor) =>
// //       String(doctor.id) ===
// //       String(formData.head_doctor_id)
// //   );

// //   // =========================================================
// //   // Filter Doctors
// //   // =========================================================

// //   const filteredDoctors = doctors.filter((doctor) => {
// //     const search = doctorSearch
// //       .toLowerCase()
// //       .trim();

// //     if (!search) return true;

// //     return (
// //       doctor.name
// //         ?.toLowerCase()
// //         .includes(search) ||
// //       doctor.specialization
// //         ?.toLowerCase()
// //         .includes(search) ||
// //       doctor.department_name
// //         ?.toLowerCase()
// //         .includes(search) ||
// //       doctor.department?.name
// //         ?.toLowerCase()
// //         .includes(search) ||
// //       doctor.departmentName
// //         ?.toLowerCase()
// //         .includes(search)
// //     );
// //   });

// //   // =========================================================
// //   // Get Doctor Department
// //   // =========================================================

// //   const getDoctorDepartment = (doctor) => {
// //     return (
// //       doctor.department_name ||
// //       doctor.department?.name ||
// //       doctor.departmentName ||
// //       doctor.department?.title ||
// //       doctor.specialization ||
// //       "General"
// //     );
// //   };

// //   // =========================================================
// //   // Select Doctor
// //   // =========================================================

// //   const handleDoctorSelect = (doctor) => {
// //     setFormData((prev) => ({
// //       ...prev,
// //       head_doctor_id: doctor.id,
// //     }));

// //     setDoctorDropdownOpen(false);
// //     setDoctorSearch("");
// //   };

// //   // =========================================================
// //   // Image Upload
// //   // =========================================================

// //   const handleImageChange = (e, type) => {
// //     const file = e.target.files?.[0];

// //     if (!file) return;

// //     // 5 MB
// //     if (file.size > 5 * 1024 * 1024) {
// //       alert("Image size should be less than 5MB.");
// //       e.target.value = "";
// //       return;
// //     }

// //     const allowedTypes = [
// //       "image/jpeg",
// //       "image/jpg",
// //       "image/png",
// //       "image/webp",
// //     ];

// //     if (!allowedTypes.includes(file.type)) {
// //       alert(
// //         "Only JPG, JPEG, PNG and WEBP images are allowed."
// //       );

// //       e.target.value = "";
// //       return;
// //     }

// //     const preview = URL.createObjectURL(file);

// //     if (type === "image") {
// //       setFormData((prev) => ({
// //         ...prev,
// //         image: file,
// //         imagePreview: preview,
// //       }));
// //     }

// //     if (type === "banner") {
// //       setFormData((prev) => ({
// //         ...prev,
// //         banner_image: file,
// //         bannerPreview: preview,
// //       }));
// //     }
// //   };

// //   // =========================================================
// //   // Remove Image
// //   // =========================================================

// //   const removeImage = (type) => {
// //     if (type === "image") {
// //       setFormData((prev) => ({
// //         ...prev,
// //         image: null,
// //         imagePreview: "",
// //       }));
// //     }

// //     if (type === "banner") {
// //       setFormData((prev) => ({
// //         ...prev,
// //         banner_image: null,
// //         bannerPreview: "",
// //       }));
// //     }
// //   };

// //   // =========================================================
// //   // Submit
// //   // =========================================================

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       setLoading(true);

// //       const payload = new FormData();

// //       // Basic
// //       payload.append(
// //         "name",
// //         formData.name
// //       );

// //       payload.append(
// //         "slug",
// //         formData.slug
// //       );

// //       payload.append(
// //         "icon",
// //         formData.icon
// //       );

// //       payload.append(
// //         "short_description",
// //         formData.short_description
// //       );

// //       payload.append(
// //         "description",
// //         formData.description
// //       );

// //       // Doctor
// //       payload.append(
// //         "head_doctor_id",
// //         formData.head_doctor_id || ""
// //       );

// //       // Contact
// //       payload.append(
// //         "phone",
// //         formData.phone
// //       );

// //       payload.append(
// //         "location",
// //         formData.location
// //       );

// //       payload.append(
// //         "timing",
// //         formData.timing
// //       );

// //       // Availability
// //       payload.append(
// //         "emergency_available",
// //         formData.emergency_available
// //           ? "1"
// //           : "0"
// //       );

// //       payload.append(
// //         "appointment_available",
// //         formData.appointment_available
// //           ? "1"
// //           : "0"
// //       );

// //       // Status
// //       payload.append(
// //         "status",
// //         formData.status
// //       );

// //       // User
// //       payload.append(
// //         "user_id",
// //         userId || ""
// //       );

// //       // Image
// //       if (formData.image instanceof File) {
// //         payload.append(
// //           "image",
// //           formData.image
// //         );
// //       }

// //       // Banner
// //       if (
// //         formData.banner_image instanceof File
// //       ) {
// //         payload.append(
// //           "banner_image",
// //           formData.banner_image
// //         );
// //       }

// //       console.log(
// //         "Department FormData:",
// //         formData
// //       );

// //       await onSubmit(payload);
// //     } catch (error) {
// //       console.error(
// //         "Department submit error:",
// //         error
// //       );
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // =========================================================
// //   // File Picker Component
// //   // =========================================================

// //   const FilePicker = ({
// //     type,
// //     preview,
// //     label,
// //   }) => {
// //     const isImage = type === "image";

// //     return (
// //       <div>
// //         <label className="mb-1.5 block text-xs font-semibold text-gray-700">
// //           {label}
// //         </label>

// //         {preview ? (
// //           <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white">
// //             <img
// //               src={preview}
// //               alt={label}
// //               className="h-40 w-full object-cover"
// //             />

// //             <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">
// //               <button
// //                 type="button"
// //                 onClick={() =>
// //                   removeImage(type)
// //                 }
// //                 className="flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-red-600 shadow-lg transition hover:bg-red-50"
// //               >
// //                 <FiX size={14} />

// //                 Remove
// //               </button>
// //             </div>
// //           </div>
// //         ) : (
// //           <label className="flex min-h-[170px] cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white transition hover:border-[#0d3c59] hover:bg-[#0d3c59]/[0.02]">
// //             <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0d3c59]/10 text-[#0d3c59]">
// //               <FiUploadCloud size={21} />
// //             </div>

// //             <span className="mb-1 text-sm font-semibold text-gray-700">
// //               Pick a file
// //             </span>

// //             <span className="text-xs text-gray-400">
// //               PNG, JPG, JPEG or WEBP
// //             </span>

// //             <span className="mt-1 text-[11px] text-gray-400">
// //               Maximum 5MB
// //             </span>

// //             <input
// //               type="file"
// //               accept="image/png,image/jpeg,image/jpg,image/webp"
// //               className="hidden"
// //               onChange={(e) =>
// //                 handleImageChange(
// //                   e,
// //                   isImage
// //                     ? "image"
// //                     : "banner"
// //                 )
// //               }
// //             />
// //           </label>
// //         )}
// //       </div>
// //     );
// //   };

// //   // =========================================================
// //   // UI
// //   // =========================================================

// //   return (
// //     <form
// //       onSubmit={handleSubmit}
// //       className="mx-auto w-full space-y-5"
// //     >
// //       {/* =====================================================
// //           BASIC INFORMATION
// //       ===================================================== */}

// //       <div>
// //         <div className="grid gap-4 md:grid-cols-3">

// //           {/* Department Name */}
// //           <div>
// //             <label className="mb-1.5 block text-xs font-semibold text-gray-700">
// //               Department Name *
// //             </label>

// //             <input
// //               type="text"
// //               name="name"
// //               value={formData.name}
// //               onChange={handleNameChange}
// //               placeholder="Cardiology"
// //               required
// //               className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10"
// //             />
// //           </div>

// //           {/* Slug */}
// //           <div>
// //             <label className="mb-1.5 block text-xs font-semibold text-gray-700">
// //               Slug *
// //             </label>

// //             <input
// //               type="text"
// //               name="slug"
// //               value={formData.slug}
// //               onChange={handleChange}
// //               placeholder="cardiology"
// //               required
// //               className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10"
// //             />
// //           </div>

// //           {/* Department Icon */}
// //           <div>
// //             <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-gray-700">
// //               <FiActivity size={13} />

// //               Department Icon
// //             </label>

// //             <div className="relative">
// //               <input
// //                 type="text"
// //                 name="icon"
// //                 value={formData.icon}
// //                 onChange={handleChange}
// //                 placeholder="HeartPulse"
// //                 className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 pr-12 text-sm outline-none transition focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10"
// //               />

// //               <div className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md bg-[#0d3c59]/10 text-[#0d3c59]">
// //                 <FiActivity size={17} />
// //               </div>
// //             </div>

// //             <p className="mt-1 text-[10px] text-gray-400">
// //               Example: HeartPulse, Brain, Stethoscope
// //             </p>
// //           </div>

// //           {/* Short Description */}
// //           <div className="md:col-span-3">
// //             <label className="mb-1.5 block text-xs font-semibold text-gray-700">
// //               Short Description
// //             </label>

// //             <textarea
// //               name="short_description"
// //               rows={2}
// //               value={
// //                 formData.short_description
// //               }
// //               onChange={handleChange}
// //               placeholder="Advanced cardiac care and treatment..."
// //               className="w-full resize-none rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10"
// //             />
// //           </div>

// //           {/* Description */}
// //           <div className="md:col-span-3">
// //             <label className="mb-1.5 block text-xs font-semibold text-gray-700">
// //               Description
// //             </label>

// //             <textarea
// //               name="description"
// //               rows={4}
// //               value={formData.description}
// //               onChange={handleChange}
// //               placeholder="Enter complete department description..."
// //               className="w-full resize-none rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10"
// //             />
// //           </div>

// //         </div>
// //       </div>

// //       {/* =====================================================
// //           IMAGES
// //       ===================================================== */}

// //       <div className="border-t border-gray-100 pt-5">

// //         <div className="mb-4 flex items-center gap-2">
// //           <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0d3c59]/10 text-[#0d3c59]">
// //             <FiImage size={16} />
// //           </div>

// //           <div>
// //             <h3 className="text-sm font-bold text-gray-800">
// //               Department Images
// //             </h3>

// //             <p className="text-xs text-gray-500">
// //               Upload department images
// //             </p>
// //           </div>
// //         </div>

// //         <div className="grid gap-4 md:grid-cols-2">

// //           <FilePicker
// //             type="image"
// //             preview={
// //               formData.imagePreview
// //             }
// //             label="Department Image"
// //           />

// //           <FilePicker
// //             type="banner"
// //             preview={
// //               formData.bannerPreview
// //             }
// //             label="Banner Image"
// //           />

// //         </div>
// //       </div>

// //       {/* =====================================================
// //           CONTACT & DOCTOR
// //       ===================================================== */}

// //       <div className="border-t border-gray-100 pt-5">

// //         <div className="grid gap-4 md:grid-cols-2">

// //           {/* =================================================
// //               HEAD DOCTOR
// //           ================================================= */}

// //           <div
// //             className="relative"
// //             ref={doctorDropdownRef}
// //           >
// //             <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-gray-700">
// //               <FiUser size={13} />

// //               Head Doctor
// //             </label>

// //             {/* Selected Doctor */}
// //             <button
// //               type="button"
// //               disabled={doctorsLoading}
// //               onClick={() =>
// //                 setDoctorDropdownOpen(
// //                   (prev) => !prev
// //                 )
// //               }
// //               className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition hover:border-[#0d3c59] focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10 disabled:cursor-not-allowed disabled:bg-gray-100"
// //             >
// //               <div className="flex min-w-0 items-center gap-2">

// //                 <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0d3c59]/10 text-[#0d3c59]">
// //                   <FiUser size={14} />
// //                 </div>

// //                 <span
// //                   className={`truncate ${
// //                     selectedDoctor
// //                       ? "font-medium text-gray-700"
// //                       : "text-gray-400"
// //                   }`}
// //                 >
// //                   {doctorsLoading
// //                     ? "Loading doctors..."
// //                     : selectedDoctor
// //                     ? selectedDoctor.name
// //                     : "Select Head Doctor"}
// //                 </span>
// //               </div>

// //               <FiChevronDown
// //                 size={17}
// //                 className={`shrink-0 text-gray-400 transition-transform ${
// //                   doctorDropdownOpen
// //                     ? "rotate-180"
// //                     : ""
// //                 }`}
// //               />
// //             </button>

// //             {/* Dropdown */}
// //             {doctorDropdownOpen &&
// //               !doctorsLoading && (
// //                 <div className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl">

// //                   {/* Search */}
// //                   <div className="border-b border-gray-100 p-2">

// //                     <div className="relative">

// //                       <FiSearch
// //                         size={15}
// //                         className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
// //                       />

// //                       <input
// //                         type="text"
// //                         value={doctorSearch}
// //                         onChange={(e) =>
// //                           setDoctorSearch(
// //                             e.target.value
// //                           )
// //                         }
// //                         placeholder="Search doctor..."
// //                         className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-9 pr-3 text-xs outline-none transition focus:border-[#0d3c59] focus:bg-white"
// //                       />
// //                     </div>
// //                   </div>

// //                   {/* Doctor List */}
// //                   <div className="max-h-64 overflow-y-auto p-1">

// //                     {filteredDoctors.length >
// //                     0 ? (
// //                       filteredDoctors.map(
// //                         (doctor) => {
// //                           const isSelected =
// //                             String(
// //                               doctor.id
// //                             ) ===
// //                             String(
// //                               formData.head_doctor_id
// //                             );

// //                           const departmentName =
// //                             getDoctorDepartment(
// //                               doctor
// //                             );

// //                           return (
// //                             <button
// //                               key={
// //                                 doctor.id
// //                               }
// //                               type="button"
// //                               onClick={() =>
// //                                 handleDoctorSelect(
// //                                   doctor
// //                                 )
// //                               }
// //                               className={`flex w-full items-center justify-between gap-4 rounded-lg px-3 py-2.5 text-left transition ${
// //                                 isSelected
// //                                   ? "bg-[#0d3c59]/5"
// //                                   : "hover:bg-gray-50"
// //                               }`}
// //                             >
// //                               {/* LEFT */}
// //                               <div className="flex min-w-0 items-center gap-3">

// //                                 <div
// //                                   className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
// //                                     isSelected
// //                                       ? "bg-[#0d3c59] text-white"
// //                                       : "bg-gray-100 text-[#0d3c59]"
// //                                   }`}
// //                                 >
// //                                   <FiUser
// //                                     size={
// //                                       16
// //                                     }
// //                                   />
// //                                 </div>

// //                                 <div className="min-w-0">

// //                                   <p
// //                                     className={`truncate text-sm font-semibold ${
// //                                       isSelected
// //                                         ? "text-[#0d3c59]"
// //                                         : "text-gray-700"
// //                                     }`}
// //                                   >
// //                                     {
// //                                       doctor.name
// //                                     }
// //                                   </p>

// //                                   {doctor.specialization && (
// //                                     <p className="truncate text-[11px] text-gray-400">
// //                                       {
// //                                         doctor.specialization
// //                                       }
// //                                     </p>
// //                                   )}
// //                                 </div>
// //                               </div>

// //                               {/* RIGHT */}
// //                               <div className="flex shrink-0 items-center gap-2">

// //                                 <span
// //                                   className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${
// //                                     isSelected
// //                                       ? "bg-[#0d3c59]/10 text-[#0d3c59]"
// //                                       : "bg-gray-100 text-gray-500"
// //                                   }`}
// //                                 >
// //                                   {
// //                                     departmentName
// //                                   }
// //                                 </span>

// //                                 {isSelected && (
// //                                   <FiCheck
// //                                     size={
// //                                       16
// //                                     }
// //                                     className="text-[#0d3c59]"
// //                                   />
// //                                 )}
// //                               </div>
// //                             </button>
// //                           );
// //                         }
// //                       )
// //                     ) : (
// //                       <div className="px-4 py-8 text-center">

// //                         <FiUser
// //                           size={25}
// //                           className="mx-auto mb-2 text-gray-300"
// //                         />

// //                         <p className="text-xs font-medium text-gray-500">
// //                           No doctors found
// //                         </p>

// //                         <p className="mt-1 text-[11px] text-gray-400">
// //                           Try another search
// //                         </p>
// //                       </div>
// //                     )}

// //                   </div>
// //                 </div>
// //               )}
// //           </div>

// //         </div>
// //       </div>

// //       {/* =====================================================
// //           FOOTER
// //       ===================================================== */}

// //       <div className="flex justify-end gap-2 border-t border-gray-100 pt-4">

// //         <button
// //           type="button"
// //           onClick={onCancel}
// //           disabled={loading}
// //           className="rounded-lg border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-600 transition hover:bg-gray-50 disabled:opacity-50"
// //         >
// //           Cancel
// //         </button>

// //         <button
// //           type="submit"
// //           disabled={loading}
// //           className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#0d3c59] to-[#075985] px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
// //         >
// //           <FiSave size={15} />

// //           {loading
// //             ? "Saving..."
// //             : initialData
// //             ? "Update Department"
// //             : "Save Department"}
// //         </button>

// //       </div>
// //     </form>
// //   );
// // };

// // export default DepartmentForm;

// // deepsheek code 

// // "use client";

// // import React, { useEffect, useRef, useState } from "react";
// // import {
// //   FiSave,
// //   FiUser,
// //   FiImage,
// //   FiUploadCloud,
// //   FiX,
// //   FiSearch,
// //   FiChevronDown,
// //   FiCheck,
// //   FiActivity,
// // } from "react-icons/fi";
// // import useSWR from "swr";
// // import ApiService from "../../src/services/Apiservices";

// // const DepartmentForm = ({
// //   onSubmit,
// //   onCancel,
// //   userId,
// //   initialData = null,
// // }) => {
// //   // =========================================================
// //   // Doctors API
// //   // =========================================================
// //   const { data: doctorsData, isLoading: doctorsLoading } = useSWR(
// //     "doctors",
// //     ApiService.get
// //   );

// //   const doctors = Array.isArray(doctorsData)
// //     ? doctorsData
// //     : doctorsData?.data || [];

// //   // =========================================================
// //   // Doctor Dropdown State
// //   // =========================================================
// //   const [doctorDropdownOpen, setDoctorDropdownOpen] = useState(false);
// //   const [doctorSearch, setDoctorSearch] = useState("");
// //   const doctorDropdownRef = useRef(null);

// //   // =========================================================
// //   // Form State
// //   // =========================================================
// //   const [formData, setFormData] = useState({
// //     name: initialData?.name || "",
// //     slug: initialData?.slug || "",
// //     icon: initialData?.icon || "",
// //     short_description: initialData?.short_description || "",
// //     description: initialData?.description || "",
// //     image: null,
// //     banner_image: null,
// //     imagePreview: initialData?.image || "",
// //     bannerPreview: initialData?.banner_image || "",

// //     // ✅ MULTIPLE DOCTORS ARRAY
// //     head_doctor_ids:
// //       initialData?.head_doctor_ids ||
// //       (initialData?.head_doctor_id ? [initialData.head_doctor_id] : []) ||
// //       [],

// //     phone: initialData?.phone || "",
// //     location: initialData?.location || "",
// //     timing: initialData?.timing || "",
// //     emergency_available: initialData?.emergency_available ?? false,
// //     appointment_available: initialData?.appointment_available ?? true,
// //     status: initialData?.status || "active",
// //     user_id: userId,
// //   });

// //   const [loading, setLoading] = useState(false);

// //   // =========================================================
// //   // Update Form When Editing
// //   // =========================================================
// //   useEffect(() => {
// //     setFormData({
// //       name: initialData?.name || "",
// //       slug: initialData?.slug || "",
// //       icon: initialData?.icon || "",
// //       short_description: initialData?.short_description || "",
// //       description: initialData?.description || "",
// //       image: null,
// //       banner_image: null,
// //       imagePreview: initialData?.image || "",
// //       bannerPreview: initialData?.banner_image || "",

// //       head_doctor_ids:
// //         initialData?.head_doctor_ids ||
// //         (initialData?.head_doctor_id ? [initialData.head_doctor_id] : []) ||
// //         [],

// //       phone: initialData?.phone || "",
// //       location: initialData?.location || "",
// //       timing: initialData?.timing || "",
// //       emergency_available: initialData?.emergency_available ?? false,
// //       appointment_available: initialData?.appointment_available ?? true,
// //       status: initialData?.status || "active",
// //       user_id: userId,
// //     });
// //   }, [initialData, userId]);

// //   // =========================================================
// //   // Close Doctor Dropdown Outside Click
// //   // =========================================================
// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (
// //         doctorDropdownRef.current &&
// //         !doctorDropdownRef.current.contains(event.target)
// //       ) {
// //         setDoctorDropdownOpen(false);
// //       }
// //     };
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => {
// //       document.removeEventListener("mousedown", handleClickOutside);
// //     };
// //   }, []);

// //   // =========================================================
// //   // Generate Slug
// //   // =========================================================
// //   const generateSlug = (value) => {
// //     return value
// //       .toLowerCase()
// //       .trim()
// //       .replace(/[^\w\s-]/g, "")
// //       .replace(/\s+/g, "-")
// //       .replace(/-+/g, "-");
// //   };

// //   const handleNameChange = (e) => {
// //     const name = e.target.value;
// //     setFormData((prev) => ({
// //       ...prev,
// //       name,
// //       slug: generateSlug(name),
// //     }));
// //   };

// //   const handleChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: type === "checkbox" ? checked : value,
// //     }));
// //   };

// //   // =========================================================
// //   // ✅ TOGGLE DOCTOR (MULTI SELECT)
// //   // =========================================================
// //   const toggleDoctor = (doctor) => {
// //     setFormData((prev) => {
// //       const exists = prev.head_doctor_ids.some(
// //         (id) => String(id) === String(doctor.id)
// //       );

// //       return {
// //         ...prev,
// //         head_doctor_ids: exists
// //           ? prev.head_doctor_ids.filter(
// //               (id) => String(id) !== String(doctor.id)
// //             )
// //           : [...prev.head_doctor_ids, doctor.id],
// //       };
// //     });
// //   };

// //   // =========================================================
// //   // ✅ REMOVE DOCTOR BY ID
// //   // =========================================================
// //   const removeDoctor = (doctorId) => {
// //     setFormData((prev) => ({
// //       ...prev,
// //       head_doctor_ids: prev.head_doctor_ids.filter(
// //         (id) => String(id) !== String(doctorId)
// //       ),
// //     }));
// //   };

// //   // =========================================================
// //   // ✅ GET SELECTED DOCTOR OBJECTS
// //   // =========================================================
// //   const selectedDoctors = doctors.filter((doctor) =>
// //     formData.head_doctor_ids.some(
// //       (id) => String(id) === String(doctor.id)
// //     )
// //   );

// //   // =========================================================
// //   // Filter Doctors
// //   // =========================================================
// //   const filteredDoctors = doctors.filter((doctor) => {
// //     const search = doctorSearch.toLowerCase().trim();
// //     if (!search) return true;
// //     return (
// //       doctor.name?.toLowerCase().includes(search) ||
// //       doctor.specialization?.toLowerCase().includes(search) ||
// //       doctor.department_name?.toLowerCase().includes(search) ||
// //       doctor.department?.name?.toLowerCase().includes(search) ||
// //       doctor.departmentName?.toLowerCase().includes(search)
// //     );
// //   });

// //   const getDoctorDepartment = (doctor) => {
// //     return (
// //       doctor.department_name ||
// //       doctor.department?.name ||
// //       doctor.departmentName ||
// //       doctor.department?.title ||
// //       doctor.specialization ||
// //       "General"
// //     );
// //   };

// //   // =========================================================
// //   // Image Upload
// //   // =========================================================
// //   const handleImageChange = (e, type) => {
// //     const file = e.target.files?.[0];
// //     if (!file) return;

// //     if (file.size > 5 * 1024 * 1024) {
// //       alert("Image size should be less than 5MB.");
// //       e.target.value = "";
// //       return;
// //     }

// //     const allowedTypes = [
// //       "image/jpeg",
// //       "image/jpg",
// //       "image/png",
// //       "image/webp",
// //     ];

// //     if (!allowedTypes.includes(file.type)) {
// //       alert("Only JPG, JPEG, PNG and WEBP images are allowed.");
// //       e.target.value = "";
// //       return;
// //     }

// //     const preview = URL.createObjectURL(file);

// //     if (type === "image") {
// //       setFormData((prev) => ({ ...prev, image: file, imagePreview: preview }));
// //     }
// //     if (type === "banner") {
// //       setFormData((prev) => ({
// //         ...prev,
// //         banner_image: file,
// //         bannerPreview: preview,
// //       }));
// //     }
// //   };

// //   const removeImage = (type) => {
// //     if (type === "image") {
// //       setFormData((prev) => ({ ...prev, image: null, imagePreview: "" }));
// //     }
// //     if (type === "banner") {
// //       setFormData((prev) => ({
// //         ...prev,
// //         banner_image: null,
// //         bannerPreview: "",
// //       }));
// //     }
// //   };

// //   // =========================================================
// //   // Submit
// //   // =========================================================
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       setLoading(true);
// //       const payload = new FormData();

// //       payload.append("name", formData.name);
// //       payload.append("slug", formData.slug);
// //       payload.append("icon", formData.icon);
// //       payload.append("short_description", formData.short_description);
// //       payload.append("description", formData.description);

// //       // ✅ MULTIPLE DOCTORS BHEJ RAHE HAIN
// //       // Backend ke hisaab se adjust karein:
// //       // Option A: array as JSON string
// //       payload.append(
// //         "head_doctor_ids",
// //         JSON.stringify(formData.head_doctor_ids)
// //       );

// //       // Option B: comma separated (agar backend comma expect karta hai)
// //       // payload.append("head_doctor_ids", formData.head_doctor_ids.join(","));

// //       // Option C: multiple entries (Laravel style)
// //       // formData.head_doctor_ids.forEach((id) => {
// //       //   payload.append("head_doctor_ids[]", id);
// //       // });

// //       payload.append("phone", formData.phone);
// //       payload.append("location", formData.location);
// //       payload.append("timing", formData.timing);
// //       payload.append(
// //         "emergency_available",
// //         formData.emergency_available ? "1" : "0"
// //       );
// //       payload.append(
// //         "appointment_available",
// //         formData.appointment_available ? "1" : "0"
// //       );
// //       payload.append("status", formData.status);
// //       payload.append("user_id", userId || "");

// //       if (formData.image instanceof File) {
// //         payload.append("image", formData.image);
// //       }
// //       if (formData.banner_image instanceof File) {
// //         payload.append("banner_image", formData.banner_image);
// //       }

// //       await onSubmit(payload);
// //     // for (let [key, value] of payload.entries()) {
// //     //     console.log(key, "=>", value);
// //     //     }

// //     //     // ✅ Ya ye
// //     //     console.log([...payload.entries()]);
// //     } catch (error) {
// //       console.error("Department submit error:", error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // =========================================================
// //   // File Picker Component
// //   // =========================================================
// //   const FilePicker = ({ type, preview, label }) => {
// //     const isImage = type === "image";
// //     return (
// //       <div>
// //         <label className="mb-1.5 block text-xs font-semibold text-gray-700">
// //           {label}
// //         </label>

// //         {preview ? (
// //           <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white">
// //             <img src={preview} alt={label} className="h-40 w-full object-cover" />
// //             <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">
// //               <button
// //                 type="button"
// //                 onClick={() => removeImage(type)}
// //                 className="flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-red-600 shadow-lg transition hover:bg-red-50"
// //               >
// //                 <FiX size={14} />
// //                 Remove
// //               </button>
// //             </div>
// //           </div>
// //         ) : (
// //           <label className="flex min-h-[170px] cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white transition hover:border-[#0d3c59] hover:bg-[#0d3c59]/[0.02]">
// //             <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0d3c59]/10 text-[#0d3c59]">
// //               <FiUploadCloud size={21} />
// //             </div>
// //             <span className="mb-1 text-sm font-semibold text-gray-700">
// //               Pick a file
// //             </span>
// //             <span className="text-xs text-gray-400">
// //               PNG, JPG, JPEG or WEBP
// //             </span>
// //             <span className="mt-1 text-[11px] text-gray-400">Maximum 5MB</span>
// //             <input
// //               type="file"
// //               accept="image/png,image/jpeg,image/jpg,image/webp"
// //               className="hidden"
// //               onChange={(e) =>
// //                 handleImageChange(e, isImage ? "image" : "banner")
// //               }
// //             />
// //           </label>
// //         )}
// //       </div>
// //     );
// //   };

// //   // =========================================================
// //   // UI
// //   // =========================================================
// //   return (
// //     <form onSubmit={handleSubmit} className="mx-auto w-full space-y-5">
// //       {/* BASIC INFORMATION */}
// //       <div>
// //         <div className="grid gap-4 md:grid-cols-3">
// //           <div>
// //             <label className="mb-1.5 block text-xs font-semibold text-gray-700">
// //               Department Name *
// //             </label>
// //             <input
// //               type="text"
// //               name="name"
// //               value={formData.name}
// //               onChange={handleNameChange}
// //               placeholder="Cardiology"
// //               required
// //               className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10"
// //             />
// //           </div>

// //           <div>
// //             <label className="mb-1.5 block text-xs font-semibold text-gray-700">
// //               Slug *
// //             </label>
// //             <input
// //               type="text"
// //               name="slug"
// //               value={formData.slug}
// //               onChange={handleChange}
// //               placeholder="cardiology"
// //               required
// //               className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10"
// //             />
// //           </div>

// //           <div>
// //             <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-gray-700">
// //               <FiActivity size={13} />
// //               Department Icon
// //             </label>
// //             <div className="relative">
// //               <input
// //                 type="text"
// //                 name="icon"
// //                 value={formData.icon}
// //                 onChange={handleChange}
// //                 placeholder="HeartPulse"
// //                 className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 pr-12 text-sm outline-none transition focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10"
// //               />
// //               <div className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md bg-[#0d3c59]/10 text-[#0d3c59]">
// //                 <FiActivity size={17} />
// //               </div>
// //             </div>
// //             <p className="mt-1 text-[10px] text-gray-400">
// //               Example: HeartPulse, Brain, Stethoscope
// //             </p>
// //           </div>

// //           <div className="md:col-span-3">
// //             <label className="mb-1.5 block text-xs font-semibold text-gray-700">
// //               Short Description
// //             </label>
// //             <textarea
// //               name="short_description"
// //               rows={2}
// //               value={formData.short_description}
// //               onChange={handleChange}
// //               placeholder="Advanced cardiac care and treatment..."
// //               className="w-full resize-none rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10"
// //             />
// //           </div>

// //           <div className="md:col-span-3">
// //             <label className="mb-1.5 block text-xs font-semibold text-gray-700">
// //               Description
// //             </label>
// //             <textarea
// //               name="description"
// //               rows={4}
// //               value={formData.description}
// //               onChange={handleChange}
// //               placeholder="Enter complete department description..."
// //               className="w-full resize-none rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10"
// //             />
// //           </div>
// //         </div>
// //       </div>

// //       {/* IMAGES */}
// //       <div className="border-t border-gray-100 pt-5">
// //         <div className="mb-4 flex items-center gap-2">
// //           <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0d3c59]/10 text-[#0d3c59]">
// //             <FiImage size={16} />
// //           </div>
// //           <div>
// //             <h3 className="text-sm font-bold text-gray-800">
// //               Department Images
// //             </h3>
// //             <p className="text-xs text-gray-500">Upload department images</p>
// //           </div>
// //         </div>

// //         <div className="grid gap-4 md:grid-cols-2">
// //           <FilePicker
// //             type="image"
// //             preview={formData.imagePreview}
// //             label="Department Image"
// //           />
// //           <FilePicker
// //             type="banner"
// //             preview={formData.bannerPreview}
// //             label="Banner Image"
// //           />
// //         </div>
// //       </div>

// //       {/* CONTACT & DOCTOR */}
// //       <div className="border-t border-gray-100 pt-5">
// //         <div className="grid gap-4 md:grid-cols-2">
// //           {/* =================================================
// //               HEAD DOCTORS (MULTI SELECT)
// //           ================================================= */}
// //           <div className="relative md:col-span-2" ref={doctorDropdownRef}>
// //             <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-gray-700">
// //               <FiUser size={13} />
// //               Head Doctors
// //               {selectedDoctors.length > 0 && (
// //                 <span className="ml-1 rounded-full bg-[#0d3c59]/10 px-2 py-0.5 text-[10px] font-semibold text-[#0d3c59]">
// //                   {selectedDoctors.length} selected
// //                 </span>
// //               )}
// //             </label>

// //             {/* ✅ SELECTED DOCTORS CHIPS */}
// //             {selectedDoctors.length > 0 && (
// //               <div className="mb-2 flex flex-wrap gap-1.5">
// //                 {selectedDoctors.map((doctor) => (
// //                   <span
// //                     key={doctor.id}
// //                     className="inline-flex items-center gap-1.5 rounded-full border border-[#0d3c59]/20 bg-[#0d3c59]/5 py-1 pl-2.5 pr-1.5 text-xs font-medium text-[#0d3c59]"
// //                   >
// //                     <FiUser size={11} />
// //                     {doctor.name}
// //                     <button
// //                       type="button"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         removeDoctor(doctor.id);
// //                       }}
// //                       className="flex h-4 w-4 items-center justify-center rounded-full bg-[#0d3c59]/10 transition hover:bg-[#0d3c59]/20"
// //                     >
// //                       <FiX size={10} />
// //                     </button>
// //                   </span>
// //                 ))}
// //               </div>
// //             )}

// //             {/* Dropdown Trigger */}
// //             <button
// //               type="button"
// //               disabled={doctorsLoading}
// //               onClick={() => setDoctorDropdownOpen((prev) => !prev)}
// //               className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition hover:border-[#0d3c59] focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10 disabled:cursor-not-allowed disabled:bg-gray-100"
// //             >
// //               <div className="flex min-w-0 items-center gap-2">
// //                 <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0d3c59]/10 text-[#0d3c59]">
// //                   <FiUser size={14} />
// //                 </div>
// //                 <span className="truncate text-gray-400">
// //                   {doctorsLoading
// //                     ? "Loading doctors..."
// //                     : selectedDoctors.length > 0
// //                     ? `${selectedDoctors.length} doctor(s) selected`
// //                     : "Select Head Doctors"}
// //                 </span>
// //               </div>
// //               <FiChevronDown
// //                 size={17}
// //                 className={`shrink-0 text-gray-400 transition-transform ${
// //                   doctorDropdownOpen ? "rotate-180" : ""
// //                 }`}
// //               />
// //             </button>

// //             {/* Dropdown */}
// //             {doctorDropdownOpen && !doctorsLoading && (
// //               <div className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl">
// //                 <div className="border-b border-gray-100 p-2">
// //                   <div className="relative">
// //                     <FiSearch
// //                       size={15}
// //                       className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
// //                     />
// //                     <input
// //                       type="text"
// //                       value={doctorSearch}
// //                       onChange={(e) => setDoctorSearch(e.target.value)}
// //                       placeholder="Search doctor..."
// //                       className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-9 pr-3 text-xs outline-none transition focus:border-[#0d3c59] focus:bg-white"
// //                     />
// //                   </div>
// //                 </div>

// //                 <div className="max-h-64 overflow-y-auto p-1">
// //                   {filteredDoctors.length > 0 ? (
// //                     filteredDoctors.map((doctor) => {
// //                       // ✅ MULTI-SELECT CHECK
// //                       const isSelected = formData.head_doctor_ids.some(
// //                         (id) => String(id) === String(doctor.id)
// //                       );
// //                       const departmentName = getDoctorDepartment(doctor);

// //                       return (
// //                         <button
// //                           key={doctor.id}
// //                           type="button"
// //                           onClick={() => toggleDoctor(doctor)}
// //                           className={`flex w-full items-center justify-between gap-4 rounded-lg px-3 py-2.5 text-left transition ${
// //                             isSelected ? "bg-[#0d3c59]/5" : "hover:bg-gray-50"
// //                           }`}
// //                         >
// //                           <div className="flex min-w-0 items-center gap-3">
// //                             {/* ✅ CHECKBOX STYLE ICON */}
// //                             <div
// //                               className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition ${
// //                                 isSelected
// //                                   ? "border-[#0d3c59] bg-[#0d3c59]"
// //                                   : "border-gray-300 bg-white"
// //                               }`}
// //                             >
// //                               {isSelected && (
// //                                 <FiCheck size={12} className="text-white" />
// //                               )}
// //                             </div>

// //                             <div
// //                               className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
// //                                 isSelected
// //                                   ? "bg-[#0d3c59] text-white"
// //                                   : "bg-gray-100 text-[#0d3c59]"
// //                               }`}
// //                             >
// //                               <FiUser size={16} />
// //                             </div>

// //                             <div className="min-w-0">
// //                               <p
// //                                 className={`truncate text-sm font-semibold ${
// //                                   isSelected ? "text-[#0d3c59]" : "text-gray-700"
// //                                 }`}
// //                               >
// //                                 {doctor.name}
// //                               </p>
// //                               {doctor.specialization && (
// //                                 <p className="truncate text-[11px] text-gray-400">
// //                                   {doctor.specialization}
// //                                 </p>
// //                               )}
// //                             </div>
// //                           </div>

// //                           <div className="flex shrink-0 items-center gap-2">
// //                             <span
// //                               className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${
// //                                 isSelected
// //                                   ? "bg-[#0d3c59]/10 text-[#0d3c59]"
// //                                   : "bg-gray-100 text-gray-500"
// //                               }`}
// //                             >
// //                               {departmentName}
// //                             </span>
// //                           </div>
// //                         </button>
// //                       );
// //                     })
// //                   ) : (
// //                     <div className="px-4 py-8 text-center">
// //                       <FiUser
// //                         size={25}
// //                         className="mx-auto mb-2 text-gray-300"
// //                       />
// //                       <p className="text-xs font-medium text-gray-500">
// //                         No doctors found
// //                       </p>
// //                       <p className="mt-1 text-[11px] text-gray-400">
// //                         Try another search
// //                       </p>
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>

// //       {/* FOOTER */}
// //       <div className="flex justify-end gap-2 border-t border-gray-100 pt-4">
// //         <button
// //           type="button"
// //           onClick={onCancel}
// //           disabled={loading}
// //           className="rounded-lg border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-600 transition hover:bg-gray-50 disabled:opacity-50"
// //         >
// //           Cancel
// //         </button>

// //         <button
// //           type="submit"
// //           disabled={loading}
// //           className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#0d3c59] to-[#075985] px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
// //         >
// //           <FiSave size={15} />
// //           {loading
// //             ? "Saving..."
// //             : initialData
// //             ? "Update Department"
// //             : "Save Department"}
// //         </button>
// //       </div>
// //     </form>
// //   );
// // };

// // export default DepartmentForm;

// // new  

// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import {
//   FiSave,
//   FiUser,
//   FiImage,
//   FiUploadCloud,
//   FiX,
//   FiSearch,
//   FiChevronDown,
//   FiCheck,
//   FiActivity,
// } from "react-icons/fi";
// import useSWR from "swr";
// import ApiService from "../../src/services/Apiservices";

// const DepartmentForm = ({
//   onSubmit,
//   onCancel,
//   userId,
//   initialData = null,
// }) => {
//   // =========================================================
//   // Doctors API
//   // =========================================================
//   const { data: doctorsData, isLoading: doctorsLoading } = useSWR(
//     "doctors",
//     ApiService.get
//   );

//   const doctors = Array.isArray(doctorsData)
//     ? doctorsData
//     : doctorsData?.data || [];

//   // =========================================================
//   // Doctor Dropdown State
//   // =========================================================
//   const [doctorDropdownOpen, setDoctorDropdownOpen] = useState(false);
//   const [doctorSearch, setDoctorSearch] = useState("");
//   const doctorDropdownRef = useRef(null);

//   // =========================================================
//   // Form State
//   // =========================================================
//   const [formData, setFormData] = useState({
//     name: initialData?.name || "",
//     slug: initialData?.slug || "",
//     icon: initialData?.icon || "",
//     short_description: initialData?.short_description || "",
//     description: initialData?.description || "",
//     image: null,
//     banner_image: null,
//     imagePreview: initialData?.image || "",
//     bannerPreview: initialData?.banner_image || "",

//     // ✅ DOCTOR IDS (renamed from head_doctor_ids)
//     doctor_ids:
//       initialData?.doctor_ids ||
//       (initialData?.doctor_id ? [initialData.doctor_id] : []) ||
//       [],

//     phone: initialData?.phone || "",
//     location: initialData?.location || "",
//     timing: initialData?.timing || "",
//     emergency_available: initialData?.emergency_available ?? false,
//     appointment_available: initialData?.appointment_available ?? true,
//     status: initialData?.status || "active",
//     user_id: userId,
//   });

//   const [loading, setLoading] = useState(false);

//   // =========================================================
//   // Update Form When Editing
//   // =========================================================
//   useEffect(() => {
//     setFormData({
//       name: initialData?.name || "",
//       slug: initialData?.slug || "",
//       icon: initialData?.icon || "",
//       short_description: initialData?.short_description || "",
//       description: initialData?.description || "",
//       image: null,
//       banner_image: null,
//       imagePreview: initialData?.image || "",
//       bannerPreview: initialData?.banner_image || "",

//       doctor_ids:
//         initialData?.doctor_ids ||
//         (initialData?.doctor_id ? [initialData.doctor_id] : []) ||
//         [],

//       phone: initialData?.phone || "",
//       location: initialData?.location || "",
//       timing: initialData?.timing || "",
//       emergency_available: initialData?.emergency_available ?? false,
//       appointment_available: initialData?.appointment_available ?? true,
//       status: initialData?.status || "active",
//       user_id: userId,
//     });
//   }, [initialData, userId]);

//   // =========================================================
//   // Close Doctor Dropdown Outside Click
//   // =========================================================
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         doctorDropdownRef.current &&
//         !doctorDropdownRef.current.contains(event.target)
//       ) {
//         setDoctorDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // =========================================================
//   // Generate Slug
//   // =========================================================
//   const generateSlug = (value) => {
//     return value
//       .toLowerCase()
//       .trim()
//       .replace(/[^\w\s-]/g, "")
//       .replace(/\s+/g, "-")
//       .replace(/-+/g, "-");
//   };

//   const handleNameChange = (e) => {
//     const name = e.target.value;
//     setFormData((prev) => ({
//       ...prev,
//       name,
//       slug: generateSlug(name),
//     }));
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   // =========================================================
//   // ✅ TOGGLE DOCTOR (MULTI SELECT) - renamed to doctor_ids
//   // =========================================================
//   const toggleDoctor = (doctor) => {
//     setFormData((prev) => {
//       const exists = prev.doctor_ids.some(
//         (id) => String(id) === String(doctor.id)
//       );

//       return {
//         ...prev,
//         doctor_ids: exists
//           ? prev.doctor_ids.filter(
//               (id) => String(id) !== String(doctor.id)
//             )
//           : [...prev.doctor_ids, doctor.id],
//       };
//     });
//   };

//   // =========================================================
//   // ✅ REMOVE DOCTOR BY ID
//   // =========================================================
//   const removeDoctor = (doctorId) => {
//     setFormData((prev) => ({
//       ...prev,
//       doctor_ids: prev.doctor_ids.filter(
//         (id) => String(id) !== String(doctorId)
//       ),
//     }));
//   };

//   // =========================================================
//   // ✅ GET SELECTED DOCTOR OBJECTS
//   // =========================================================
//   const selectedDoctors = doctors.filter((doctor) =>
//     formData.doctor_ids.some(
//       (id) => String(id) === String(doctor.id)
//     )
//   );

//   // =========================================================
//   // Filter Doctors
//   // =========================================================
//   const filteredDoctors = doctors.filter((doctor) => {
//     const search = doctorSearch.toLowerCase().trim();
//     if (!search) return true;
//     return (
//       doctor.name?.toLowerCase().includes(search) ||
//       doctor.specialization?.toLowerCase().includes(search) ||
//       doctor.department_name?.toLowerCase().includes(search) ||
//       doctor.department?.name?.toLowerCase().includes(search) ||
//       doctor.departmentName?.toLowerCase().includes(search)
//     );
//   });

//   const getDoctorDepartment = (doctor) => {
//     return (
//       doctor.department_name ||
//       doctor.department?.name ||
//       doctor.departmentName ||
//       doctor.department?.title ||
//       doctor.specialization ||
//       "General"
//     );
//   };

//   // =========================================================
//   // Image Upload
//   // =========================================================
//   const handleImageChange = (e, type) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     if (file.size > 5 * 1024 * 1024) {
//       alert("Image size should be less than 5MB.");
//       e.target.value = "";
//       return;
//     }

//     const allowedTypes = [
//       "image/jpeg",
//       "image/jpg",
//       "image/png",
//       "image/webp",
//     ];

//     if (!allowedTypes.includes(file.type)) {
//       alert("Only JPG, JPEG, PNG and WEBP images are allowed.");
//       e.target.value = "";
//       return;
//     }

//     const preview = URL.createObjectURL(file);

//     if (type === "image") {
//       setFormData((prev) => ({ ...prev, image: file, imagePreview: preview }));
//     }
//     if (type === "banner") {
//       setFormData((prev) => ({
//         ...prev,
//         banner_image: file,
//         bannerPreview: preview,
//       }));
//     }
//   };

//   const removeImage = (type) => {
//     if (type === "image") {
//       setFormData((prev) => ({ ...prev, image: null, imagePreview: "" }));
//     }
//     if (type === "banner") {
//       setFormData((prev) => ({
//         ...prev,
//         banner_image: null,
//         bannerPreview: "",
//       }));
//     }
//   };

//   // =========================================================
//   // Submit
//   // =========================================================
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setLoading(true);
//       const payload = new FormData();

//       payload.append("name", formData.name);
//       payload.append("slug", formData.slug);
//       payload.append("icon", formData.icon);
//       payload.append("short_description", formData.short_description);
//       payload.append("description", formData.description);

//       // ✅ DOCTOR IDS (renamed from head_doctor_ids)
//       // Backend ke hisaab se adjust karein:
//       payload.append(
//         "doctor_ids",
//         JSON.stringify(formData.doctor_ids)
//       );

//       // Option B: comma separated
//       // payload.append("doctor_ids", formData.doctor_ids.join(","));

//       // Option C: multiple entries (Laravel style)
//       // formData.doctor_ids.forEach((id) => {
//       //   payload.append("doctor_ids[]", id);
//       // });

//       payload.append("phone", formData.phone);
//       payload.append("location", formData.location);
//       payload.append("timing", formData.timing);
//       payload.append(
//         "emergency_available",
//         formData.emergency_available ? "1" : "0"
//       );
//       payload.append(
//         "appointment_available",
//         formData.appointment_available ? "1" : "0"
//       );
//       payload.append("status", formData.status);
//       payload.append("user_id", userId || "");

//       if (formData.image instanceof File) {
//         payload.append("image", formData.image);
//       }
//       if (formData.banner_image instanceof File) {
//         payload.append("banner_image", formData.banner_image);
//       }

//     //   // ✅ Debug ke liye - ab ye uncommented rakhein
//     //   console.log("=========== FORM DATA ===========");
//     //   for (let [key, value] of payload.entries()) {
//     //     console.log(key, "=>", value);
//     //   }
//     //   console.log("=================================");

//       await onSubmit(payload);
//     } catch (error) {
//       console.error("Department submit error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // =========================================================
//   // File Picker Component
//   // =========================================================
//   const FilePicker = ({ type, preview, label }) => {
//     const isImage = type === "image";
//     return (
//       <div>
//         <label className="mb-1.5 block text-xs font-semibold text-gray-700">
//           {label}
//         </label>

//         {preview ? (
//           <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white">
//             <img src={preview} alt={label} className="h-40 w-full object-cover" />
//             <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">
//               <button
//                 type="button"
//                 onClick={() => removeImage(type)}
//                 className="flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-red-600 shadow-lg transition hover:bg-red-50"
//               >
//                 <FiX size={14} />
//                 Remove
//               </button>
//             </div>
//           </div>
//         ) : (
//           <label className="flex min-h-[170px] cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white transition hover:border-[#0d3c59] hover:bg-[#0d3c59]/[0.02]">
//             <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0d3c59]/10 text-[#0d3c59]">
//               <FiUploadCloud size={21} />
//             </div>
//             <span className="mb-1 text-sm font-semibold text-gray-700">
//               Pick a file
//             </span>
//             <span className="text-xs text-gray-400">
//               PNG, JPG, JPEG or WEBP
//             </span>
//             <span className="mt-1 text-[11px] text-gray-400">Maximum 5MB</span>
//             <input
//               type="file"
//               accept="image/png,image/jpeg,image/jpg,image/webp"
//               className="hidden"
//               onChange={(e) =>
//                 handleImageChange(e, isImage ? "image" : "banner")
//               }
//             />
//           </label>
//         )}
//       </div>
//     );
//   };

//   // =========================================================
//   // UI
//   // =========================================================
//   return (
//     <form onSubmit={handleSubmit} className="mx-auto w-full space-y-5">
//       {/* BASIC INFORMATION */}
//       <div>
//         <div className="grid gap-4 md:grid-cols-3">
//           <div>
//             <label className="mb-1.5 block text-xs font-semibold text-gray-700">
//               Department Name *
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleNameChange}
//               placeholder="Cardiology"
//               required
//               className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10"
//             />
//           </div>

//           <div>
//             <label className="mb-1.5 block text-xs font-semibold text-gray-700">
//               Slug *
//             </label>
//             <input
//               type="text"
//               name="slug"
//               value={formData.slug}
//               onChange={handleChange}
//               placeholder="cardiology"
//               required
//               className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10"
//             />
//           </div>

//           <div>
//             <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-gray-700">
//               <FiActivity size={13} />
//               Department Icon
//             </label>
//             <div className="relative">
//               <input
//                 type="text"
//                 name="icon"
//                 value={formData.icon}
//                 onChange={handleChange}
//                 placeholder="HeartPulse"
//                 className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 pr-12 text-sm outline-none transition focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10"
//               />
//               <div className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md bg-[#0d3c59]/10 text-[#0d3c59]">
//                 <FiActivity size={17} />
//               </div>
//             </div>
//             <p className="mt-1 text-[10px] text-gray-400">
//               Example: HeartPulse, Brain, Stethoscope
//             </p>
//           </div>

//           <div className="md:col-span-3">
//             <label className="mb-1.5 block text-xs font-semibold text-gray-700">
//               Short Description
//             </label>
//             <textarea
//               name="short_description"
//               rows={2}
//               value={formData.short_description}
//               onChange={handleChange}
//               placeholder="Advanced cardiac care and treatment..."
//               className="w-full resize-none rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10"
//             />
//           </div>

//           <div className="md:col-span-3">
//             <label className="mb-1.5 block text-xs font-semibold text-gray-700">
//               Description
//             </label>
//             <textarea
//               name="description"
//               rows={4}
//               value={formData.description}
//               onChange={handleChange}
//               placeholder="Enter complete department description..."
//               className="w-full resize-none rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10"
//             />
//           </div>
//         </div>
//       </div>

//       {/* IMAGES */}
//       <div className="border-t border-gray-100 pt-5">
//         <div className="mb-4 flex items-center gap-2">
//           <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0d3c59]/10 text-[#0d3c59]">
//             <FiImage size={16} />
//           </div>
//           <div>
//             <h3 className="text-sm font-bold text-gray-800">
//               Department Images
//             </h3>
//             <p className="text-xs text-gray-500">Upload department images</p>
//           </div>
//         </div>

//         <div className="grid gap-4 md:grid-cols-2">
//           <FilePicker
//             type="image"
//             preview={formData.imagePreview}
//             label="Department Image"
//           />
//           <FilePicker
//             type="banner"
//             preview={formData.bannerPreview}
//             label="Banner Image"
//           />
//         </div>
//       </div>

//       {/* CONTACT & DOCTOR */}
//       <div className="border-t border-gray-100 pt-5">
//         <div className="grid gap-4 md:grid-cols-2">
//           {/* =================================================
//               DOCTORS (MULTI SELECT)
//           ================================================= */}
//           <div className="relative md:col-span-2" ref={doctorDropdownRef}>
//             <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-gray-700">
//               <FiUser size={13} />
//               Doctors
//               {selectedDoctors.length > 0 && (
//                 <span className="ml-1 rounded-full bg-[#0d3c59]/10 px-2 py-0.5 text-[10px] font-semibold text-[#0d3c59]">
//                   {selectedDoctors.length} selected
//                 </span>
//               )}
//             </label>

//             {/* ✅ SELECTED DOCTORS CHIPS */}
//             {selectedDoctors.length > 0 && (
//               <div className="mb-2 flex flex-wrap gap-1.5">
//                 {selectedDoctors.map((doctor) => (
//                   <span
//                     key={doctor.id}
//                     className="inline-flex items-center gap-1.5 rounded-full border border-[#0d3c59]/20 bg-[#0d3c59]/5 py-1 pl-2.5 pr-1.5 text-xs font-medium text-[#0d3c59]"
//                   >
//                     <FiUser size={11} />
//                     {doctor.name}
//                     <button
//                       type="button"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         removeDoctor(doctor.id);
//                       }}
//                       className="flex h-4 w-4 items-center justify-center rounded-full bg-[#0d3c59]/10 transition hover:bg-[#0d3c59]/20"
//                     >
//                       <FiX size={10} />
//                     </button>
//                   </span>
//                 ))}
//               </div>
//             )}

//             {/* Dropdown Trigger */}
//             <button
//               type="button"
//               disabled={doctorsLoading}
//               onClick={() => setDoctorDropdownOpen((prev) => !prev)}
//               className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition hover:border-[#0d3c59] focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10 disabled:cursor-not-allowed disabled:bg-gray-100"
//             >
//               <div className="flex min-w-0 items-center gap-2">
//                 <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0d3c59]/10 text-[#0d3c59]">
//                   <FiUser size={14} />
//                 </div>
//                 <span className="truncate text-gray-400">
//                   {doctorsLoading
//                     ? "Loading doctors..."
//                     : selectedDoctors.length > 0
//                     ? `${selectedDoctors.length} doctor(s) selected`
//                     : "Select Doctors"}
//                 </span>
//               </div>
//               <FiChevronDown
//                 size={17}
//                 className={`shrink-0 text-gray-400 transition-transform ${
//                   doctorDropdownOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </button>

//             {/* Dropdown */}
//             {doctorDropdownOpen && !doctorsLoading && (
//               <div className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl">
//                 <div className="border-b border-gray-100 p-2">
//                   <div className="relative">
//                     <FiSearch
//                       size={15}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//                     />
//                     <input
//                       type="text"
//                       value={doctorSearch}
//                       onChange={(e) => setDoctorSearch(e.target.value)}
//                       placeholder="Search doctor..."
//                       className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-9 pr-3 text-xs outline-none transition focus:border-[#0d3c59] focus:bg-white"
//                     />
//                   </div>
//                 </div>

//                 <div className="max-h-64 overflow-y-auto p-1">
//                   {filteredDoctors.length > 0 ? (
//                     filteredDoctors.map((doctor) => {
//                       // ✅ MULTI-SELECT CHECK
//                       const isSelected = formData.doctor_ids.some(
//                         (id) => String(id) === String(doctor.id)
//                       );
//                       const departmentName = getDoctorDepartment(doctor);

//                       return (
//                         <button
//                           key={doctor.id}
//                           type="button"
//                           onClick={() => toggleDoctor(doctor)}
//                           className={`flex w-full items-center justify-between gap-4 rounded-lg px-3 py-2.5 text-left transition ${
//                             isSelected ? "bg-[#0d3c59]/5" : "hover:bg-gray-50"
//                           }`}
//                         >
//                           <div className="flex min-w-0 items-center gap-3">
//                             {/* ✅ CHECKBOX STYLE ICON */}
//                             <div
//                               className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition ${
//                                 isSelected
//                                   ? "border-[#0d3c59] bg-[#0d3c59]"
//                                   : "border-gray-300 bg-white"
//                               }`}
//                             >
//                               {isSelected && (
//                                 <FiCheck size={12} className="text-white" />
//                               )}
//                             </div>

//                             <div
//                               className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
//                                 isSelected
//                                   ? "bg-[#0d3c59] text-white"
//                                   : "bg-gray-100 text-[#0d3c59]"
//                               }`}
//                             >
//                               <FiUser size={16} />
//                             </div>

//                             <div className="min-w-0">
//                               <p
//                                 className={`truncate text-sm font-semibold ${
//                                   isSelected ? "text-[#0d3c59]" : "text-gray-700"
//                                 }`}
//                               >
//                                 {doctor.name}
//                               </p>
//                               {doctor.specialization && (
//                                 <p className="truncate text-[11px] text-gray-400">
//                                   {doctor.specialization}
//                                 </p>
//                               )}
//                             </div>
//                           </div>

//                           <div className="flex shrink-0 items-center gap-2">
//                             <span
//                               className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${
//                                 isSelected
//                                   ? "bg-[#0d3c59]/10 text-[#0d3c59]"
//                                   : "bg-gray-100 text-gray-500"
//                               }`}
//                             >
//                               {departmentName}
//                             </span>
//                           </div>
//                         </button>
//                       );
//                     })
//                   ) : (
//                     <div className="px-4 py-8 text-center">
//                       <FiUser
//                         size={25}
//                         className="mx-auto mb-2 text-gray-300"
//                       />
//                       <p className="text-xs font-medium text-gray-500">
//                         No doctors found
//                       </p>
//                       <p className="mt-1 text-[11px] text-gray-400">
//                         Try another search
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* FOOTER */}
//       <div className="flex justify-end gap-2 border-t border-gray-100 pt-4">
//         <button
//           type="button"
//           onClick={onCancel}
//           disabled={loading}
//           className="rounded-lg border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-600 transition hover:bg-gray-50 disabled:opacity-50"
//         >
//           Cancel
//         </button>

//         <button
//           type="submit"
//           disabled={loading}
//           className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#0d3c59] to-[#075985] px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
//         >
//           <FiSave size={15} />
//           {loading
//             ? "Saving..."
//             : initialData
//             ? "Update Department"
//             : "Save Department"}
//         </button>
//       </div>
//     </form>
//   );
// };

// export default DepartmentForm;



// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import toast from "react-hot-toast";

// import {

//   FiSave,

//   FiUser,

//   FiImage,

//   FiUploadCloud,

//   FiX,

//   FiSearch,

//   FiChevronDown,

//   FiCheck,

//   FiActivity,
//   FiTrash2,

// } from "react-icons/fi";

// import useSWR from "swr";

// import ApiService from "../../src/services/Apiservices";

// const DepartmentForm = ({

//   onSubmit,

//   onCancel,

//   userId,

//   initialData = null,

// }) => {

//   // =========================================================

//   // Doctors API

//   // =========================================================

//   const { data: doctorsData, isLoading: doctorsLoading } = useSWR(

//     "doctors",

//     ApiService.get

//   );

//   const doctors = Array.isArray(doctorsData)

//     ? doctorsData

//     : doctorsData?.data || [];

//   // =========================================================

//   // Doctor Dropdown State

//   // =========================================================

//   const [doctorDropdownOpen, setDoctorDropdownOpen] = useState(false);

//   const [doctorSearch, setDoctorSearch] = useState("");

//   const doctorDropdownRef = useRef(null);

//   // =========================================================

//   // Form State

//   // =========================================================

//   const [formData, setFormData] = useState({

//     name: initialData?.name || "",

//     slug: initialData?.slug || "",

//     icon: initialData?.icon || "",

//     short_description: initialData?.short_description || "",

//     description: initialData?.description || "",

//     image: null,

//     banner_image: null,

//     imagePreview: initialData?.image || "",

//     bannerPreview: initialData?.banner_image || "",

//     // ✅ DOCTOR IDS (renamed from head_doctor_ids)

//     doctor_ids:

//       initialData?.doctor_ids ||

//       (initialData?.doctor_id ? [initialData.doctor_id] : []) ||

//       [],

//     phone: initialData?.phone || "",

//     location: initialData?.location || "",

//     timing: initialData?.timing || "",

//     emergency_available: initialData?.emergency_available ?? false,

//     appointment_available: initialData?.appointment_available ?? true,

//     status: initialData?.status || "active",

//     user_id: userId,

//   });

//   const [loading, setLoading] = useState(false);

//   // =========================================================

//   // Update Form When Editing

//   // =========================================================

//   useEffect(() => {

//     setFormData({

//       name: initialData?.name || "",

//       slug: initialData?.slug || "",

//       icon: initialData?.icon || "",

//       short_description: initialData?.short_description || "",

//       description: initialData?.description || "",

//       image: null,

//       banner_image: null,

//       imagePreview: initialData?.image || "",

//       bannerPreview: initialData?.banner_image || "",

//       doctor_ids:

//         initialData?.doctor_ids ||

//         (initialData?.doctor_id ? [initialData.doctor_id] : []) ||

//         [],

//       phone: initialData?.phone || "",

//       location: initialData?.location || "",

//       timing: initialData?.timing || "",

//       emergency_available: initialData?.emergency_available ?? false,

//       appointment_available: initialData?.appointment_available ?? true,

//       status: initialData?.status || "active",

//       user_id: userId,

//     });

//   }, [initialData, userId]);

//   // =========================================================

//   // Close Doctor Dropdown Outside Click

//   // =========================================================

//   useEffect(() => {

//     const handleClickOutside = (event) => {

//       if (

//         doctorDropdownRef.current &&

//         !doctorDropdownRef.current.contains(event.target)

//       ) {

//         setDoctorDropdownOpen(false);

//       }

//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {

//       document.removeEventListener("mousedown", handleClickOutside);

//     };

//   }, []);

//   // =========================================================

//   // Generate Slug

//   // =========================================================

//   const generateSlug = (value) => {

//     return value

//       .toLowerCase()

//       .trim()

//       .replace(/[^\w\s-]/g, "")

//       .replace(/\s+/g, "-")

//       .replace(/-+/g, "-");

//   };

//   const handleNameChange = (e) => {

//     const name = e.target.value;

//     setFormData((prev) => ({

//       ...prev,

//       name,

//       slug: generateSlug(name),

//     }));

//   };

//   const handleChange = (e) => {

//     const { name, value, type, checked } = e.target;

//     setFormData((prev) => ({

//       ...prev,

//       [name]: type === "checkbox" ? checked : value,

//     }));

//   };

//   // =========================================================

//   // ✅ TOGGLE DOCTOR (MULTI SELECT) - renamed to doctor_ids

//   // =========================================================

//   const toggleDoctor = (doctor) => {

//     setFormData((prev) => {

//       const exists = prev.doctor_ids.some(

//         (id) => String(id) === String(doctor.id)

//       );

//       return {

//         ...prev,

//         doctor_ids: exists

//           ? prev.doctor_ids.filter(

//               (id) => String(id) !== String(doctor.id)

//             )

//           : [...prev.doctor_ids, doctor.id],

//       };

//     });

//   };

//   // =========================================================

//   // ✅ REMOVE DOCTOR BY ID

//   // =========================================================

//   const removeDoctor = (doctorId) => {

//     setFormData((prev) => ({

//       ...prev,

//       doctor_ids: prev.doctor_ids.filter(

//         (id) => String(id) !== String(doctorId)

//       ),

//     }));

//   };

//   // =========================================================

//   // ✅ GET SELECTED DOCTOR OBJECTS

//   // =========================================================

//   const selectedDoctors = doctors.filter((doctor) =>

//     formData.doctor_ids.some(

//       (id) => String(id) === String(doctor.id)

//     )

//   );

//   // =========================================================

//   // Filter Doctors

//   // =========================================================

//   const filteredDoctors = doctors.filter((doctor) => {

//     const search = doctorSearch.toLowerCase().trim();

//     if (!search) return true;

//     return (

//       doctor.name?.toLowerCase().includes(search) ||

//       doctor.specialization?.toLowerCase().includes(search) ||

//       doctor.department_name?.toLowerCase().includes(search) ||

//       doctor.department?.name?.toLowerCase().includes(search) ||

//       doctor.departmentName?.toLowerCase().includes(search)

//     );

//   });

//   const getDoctorDepartment = (doctor) => {

//     return (

//       doctor.department_name ||

//       doctor.department?.name ||

//       doctor.departmentName ||

//       doctor.department?.title ||

//       doctor.specialization ||

//       "General"

//     );

//   };

//   // =========================================================

//   // Image Upload

//   // =========================================================

//   const handleImageChange = (e, type) => {

//     const file = e.target.files?.[0];

//     if (!file) return;

//     if (file.size > 5 * 1024 * 1024) {

//       toast.error("Image size should be less than 5 MB.");

//       e.target.value = "";

//       return;

//     }

//     const allowedTypes = [

//       "image/jpeg",

//       "image/jpg",

//       "image/png",

//       "image/webp",

//     ];

//     if (!allowedTypes.includes(file.type)) {

//       toast.error("Only JPG, JPEG, PNG and WebP images are allowed.");

//       e.target.value = "";

//       return;

//     }

//     const preview = URL.createObjectURL(file);

//     if (type === "image") {

//       setFormData((prev) => ({ ...prev, image: file, imagePreview: preview }));

//     }

//     if (type === "banner") {

//       setFormData((prev) => ({

//         ...prev,

//         banner_image: file,

//         bannerPreview: preview,

//       }));

//     }

//   };

//   const removeImage = (type) => {

//     if (type === "image") {

//       setFormData((prev) => ({ ...prev, image: null, imagePreview: "" }));

//     }

//     if (type === "banner") {

//       setFormData((prev) => ({

//         ...prev,

//         banner_image: null,

//         bannerPreview: "",

//       }));

//     }

//   };

//   // =========================================================

//   // Submit

//   // =========================================================

//   const handleSubmit = async (e) => {

//     e.preventDefault();

//     try {

//       setLoading(true);

//       const payload = new FormData();

//       payload.append("name", formData.name);

//       payload.append("slug", formData.slug);

//       payload.append("icon", formData.icon);

//       payload.append("short_description", formData.short_description);

//       payload.append("description", formData.description);

//       // ✅ DOCTOR IDS (renamed from head_doctor_ids)

//       // Backend ke hisaab se adjust karein:

//       payload.append(

//         "doctor_ids",

//         JSON.stringify(formData.doctor_ids)

//       );

//       // Option B: comma separated

//       // payload.append("doctor_ids", formData.doctor_ids.join(","));

//       // Option C: multiple entries (Laravel style)

//       // formData.doctor_ids.forEach((id) => {

//       //   payload.append("doctor_ids[]", id);

//       // });

//       payload.append("phone", formData.phone);

//       payload.append("location", formData.location);

//       payload.append("timing", formData.timing);

//       payload.append(

//         "emergency_available",

//         formData.emergency_available ? "1" : "0"

//       );

//       payload.append(

//         "appointment_available",

//         formData.appointment_available ? "1" : "0"

//       );

//       payload.append("status", formData.status);

//       payload.append("user_id", userId || "");

//       if (formData.image instanceof File) {

//         payload.append("image", formData.image);

//       }

//       if (formData.banner_image instanceof File) {

//         payload.append("banner_image", formData.banner_image);

//       }

//     //   // ✅ Debug ke liye - ab ye uncommented rakhein

//     //   console.log("=========== FORM DATA ===========");

//     //   for (let [key, value] of payload.entries()) {

//     //     console.log(key, "=>", value);

//     //   }

//     //   console.log("=================================");

//       if (typeof onSubmit !== "function") {
//         throw new Error("Department submit handler is not configured.");
//       }
//       await onSubmit(payload);
//       toast.success(initialData?.id ? "Department updated successfully!" : "Department created successfully!");

//     } catch (error) {

//       console.error("Department submit error:", error);

//     } finally {

//       setLoading(false);

//     }

//   };

//   // =========================================================

//   // File Picker Component

//   // =========================================================

//   const FilePicker = ({ type, preview, label }) => {

//     const isImage = type === "image";

//     return (

//       <div>

//         <label className="mb-1.5 block text-xs font-semibold text-gray-700">

//           {label}

//         </label>

//         {preview ? (

//           <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white">

//             <img src={preview} alt={label} className="h-36 w-full rounded-lg object-cover sm:h-40" />

//             <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">

//               <button

//                 type="button"

//                 onClick={() => removeImage(type)}

//                 className="flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-red-600 shadow-lg transition hover:bg-red-50"

//               >

//                 <FiX size={14} />

//                 Remove

//               </button>

//             </div>

//           </div>

//         ) : (

//           <label className="flex min-h-[145px] cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white px-3 py-5 text-center transition hover:border-[#087f8c] hover:bg-[#087f8c]/[0.03]">

//             <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#087f8c]/10 text-[#087f8c]">

//               <FiUploadCloud size={21} />

//             </div>

//             <span className="mb-1 text-sm font-semibold text-gray-700">

//               Pick a file

//             </span>

//             <span className="text-xs text-gray-400">

//               PNG, JPG, JPEG or WEBP

//             </span>

//             <span className="mt-1 text-[11px] text-gray-400">Maximum 5MB</span>

//             <input

//               type="file"

//               accept="image/png,image/jpeg,image/jpg,image/webp"

//               className="hidden"

//               onChange={(e) =>

//                 handleImageChange(e, isImage ? "image" : "banner")

//               }

//             />

//           </label>

//         )}

//       </div>

//     );

//   };

//   // =========================================================
//   // Department form UI — matching the AwardForm layout
//   // =========================================================
//   const fieldClass =
//     "h-11 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-[13px] font-medium text-slate-800 outline-none transition placeholder:font-normal placeholder:text-slate-400 hover:border-slate-300 focus:border-[#087f8c] focus:ring-4 focus:ring-[#087f8c]/10";
//   const labelClass = "mb-1.5 block text-[13px] font-semibold text-slate-700";
//   const SectionHeader = ({ title, subtitle, icon: Icon, iconClass = "bg-teal-50 text-[#087f8c]" }) => (
//     <div className="mb-4 flex items-start gap-3">
//       <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${iconClass}`}>
//         <Icon size={18} />
//       </div>
//       <div>
//         <h2 className="text-[16px] font-bold tracking-tight text-slate-900">{title}</h2>
//         {subtitle && <p className="mt-0.5 text-[12px] leading-5 text-slate-500">{subtitle}</p>}
//       </div>
//     </div>
//   );
//   const InlineError = ({ children }) =>
//     children ? <p className="mt-1.5 text-[11px] font-medium text-red-600">{children}</p> : null;

//   const selectedDoctorNames = selectedDoctors.map((doctor) => doctor.name).filter(Boolean);

//   return (
//     <motion.form
//       onSubmit={handleSubmit}
//       initial={{ opacity: 0, y: 8 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="w-full text-slate-700"
//       noValidate
//     >
//       {/* <div className="mb-4 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
//         <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#087f8c]/10 text-[#087f8c]">
//           <FiActivity size={21} />
//         </div>
//         <div className="min-w-0 flex-1">
//           <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#087f8c]">Hospital Administration</p>
//           <h2 className="mt-0.5 text-lg font-bold tracking-tight text-slate-900">
//             {initialData?.id ? "Update Department" : "Create Department"}
//           </h2>
//           <p className="mt-0.5 text-xs text-slate-500">
//             {initialData?.id ? "Review the details and save your changes." : "Add department details, assign doctors and configure availability."}
//           </p>
//         </div>
//         <span className={`hidden rounded-full px-3 py-1.5 text-[11px] font-bold sm:inline-flex ${initialData?.id ? "bg-amber-50 text-amber-700" : "bg-emerald-50 text-emerald-700"}`}>
//           {initialData?.id ? "Editing" : "New department"}
//         </span>
//       </div> */}

//       <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_285px]">
//         <div className="space-y-4">
//           <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
//             <SectionHeader icon={FiActivity} title="Department Information" subtitle="Enter the main details shown on the hospital website." />
//             <div className="space-y-4">
//               <div>
//                 <label className={labelClass}>Department Name <span className="text-red-500">*</span></label>
//                 <input name="name" value={formData.name} onChange={handleNameChange} required maxLength={150} placeholder="e.g. Cardiology" className={fieldClass} />
//               </div>
//               <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//                 <div>
//                   <label className={labelClass}>URL Slug <span className="text-red-500">*</span></label>
//                   <input name="slug" value={formData.slug} onChange={handleChange} required placeholder="cardiology" className={fieldClass} />
//                   <p className="mt-1.5 text-[10px] text-slate-400">Generated from department name; editable.</p>
//                 </div>
//                 <div>
//                   <label className={labelClass}>Icon Name</label>
//                   <div className="relative">
//                     <input name="icon" value={formData.icon} onChange={handleChange} placeholder="HeartPulse, Brain, Stethoscope" className={`${fieldClass} pr-10`} />
//                     <FiActivity className="absolute right-3 top-1/2 -translate-y-1/2 text-[#087f8c]" size={17} />
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div className="mb-1.5 flex items-center justify-between gap-2">
//                   <label className={labelClass.replace("mb-1.5 ", "")}>Short Description</label>
//                   <span className="text-[10px] text-slate-400">{formData.short_description.length}/250</span>
//                 </div>
//                 <textarea name="short_description" rows={3} maxLength={250} value={formData.short_description} onChange={handleChange} placeholder="Briefly describe the department's services..." className="w-full resize-y rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-[13px] leading-5 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#087f8c] focus:ring-4 focus:ring-[#087f8c]/10" />
//               </div>
//             </div>
//           </section>

//           <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
//             <SectionHeader icon={FiImage} title="Department Description" subtitle="Explain services, facilities, specialties and patient care." iconClass="bg-blue-50 text-blue-600" />
//             <label className={labelClass}>Full Description</label>
//             <textarea name="description" rows={6} value={formData.description} onChange={handleChange} placeholder="Describe the department's services, equipment, specialties and patient care..." className="min-h-[150px] w-full resize-y rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-[13px] leading-5 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#087f8c] focus:ring-4 focus:ring-[#087f8c]/10" />
//           </section>

//           <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
//             <SectionHeader icon={FiUser} title="Doctors & Contact Information" subtitle="Assign doctors and provide contact details for this department." iconClass="bg-purple-50 text-purple-600" />
//             <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//               <div className="relative md:col-span-2" ref={doctorDropdownRef}>
//                 <div className="mb-2 flex items-center justify-between gap-2">
//                   <label className={labelClass.replace("mb-1.5 ", "")}>Assigned Doctors</label>
//                   <span className="rounded-full bg-[#087f8c]/10 px-2.5 py-1 text-[10px] font-bold text-[#087f8c]">{selectedDoctors.length} selected</span>
//                 </div>
//                 {selectedDoctors.length > 0 && (
//                   <div className="mb-2 flex flex-wrap gap-2">
//                     {selectedDoctors.map((doctor) => (
//                       <span key={doctor.id} className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1.5 text-xs font-semibold text-[#087f8c]">
//                         {doctor.name}
//                         <button type="button" aria-label={`Remove ${doctor.name}`} onClick={() => removeDoctor(doctor.id)} className="rounded-full p-0.5 hover:bg-cyan-100"><FiX size={13} /></button>
//                       </span>
//                     ))}
//                   </div>
//                 )}
//                 <button type="button" disabled={doctorsLoading} onClick={() => setDoctorDropdownOpen((prev) => !prev)} className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-left text-sm transition hover:border-[#087f8c] focus:outline-none focus:ring-4 focus:ring-[#087f8c]/10 disabled:bg-slate-100">
//                   <span>
//                     <span className="block font-semibold text-slate-700">{doctorsLoading ? "Loading doctors..." : selectedDoctors.length ? `${selectedDoctors.length} doctor(s) selected` : "Choose doctors"}</span>
//                     <span className="mt-0.5 block text-[11px] text-slate-400">You can select multiple doctors.</span>
//                   </span>
//                   <FiChevronDown className={`text-slate-400 transition ${doctorDropdownOpen ? "rotate-180" : ""}`} />
//                 </button>
//                 {doctorDropdownOpen && !doctorsLoading && (
//                   <div className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
//                     <div className="border-b border-slate-100 p-3">
//                       <div className="relative">
//                         <FiSearch size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
//                         <input type="search" value={doctorSearch} onChange={(e) => setDoctorSearch(e.target.value)} placeholder="Search doctor or specialty..." className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-3 text-xs outline-none focus:border-[#087f8c] focus:bg-white" />
//                       </div>
//                     </div>
//                     <div className="max-h-60 overflow-y-auto p-1.5">
//                       {filteredDoctors.length ? filteredDoctors.map((doctor) => {
//                         const isSelected = formData.doctor_ids.some((id) => String(id) === String(doctor.id));
//                         return (
//                           <button key={doctor.id} type="button" onClick={() => toggleDoctor(doctor)} className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left transition ${isSelected ? "bg-cyan-50" : "hover:bg-slate-50"}`}>
//                             <span className="min-w-0"><span className="block truncate text-xs font-semibold text-slate-700">{doctor.name || "Unnamed doctor"}</span><span className="mt-0.5 block truncate text-[11px] text-slate-400">{doctor.specialization || getDoctorDepartment(doctor)}</span></span>
//                             <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${isSelected ? "border-[#087f8c] bg-[#087f8c] text-white" : "border-slate-300 text-transparent"}`}><FiCheck size={12} /></span>
//                           </button>
//                         );
//                       }) : <p className="px-3 py-8 text-center text-xs text-slate-400">No doctors match your search.</p>}
//                     </div>
//                     <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-3 py-2">
//                       <span className="text-[11px] text-slate-500">{selectedDoctors.length} selected</span>
//                       <button type="button" onClick={() => setDoctorDropdownOpen(false)} className="rounded-lg bg-[#087f8c] px-3 py-1.5 text-[11px] font-semibold text-white">Done</button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//               <div>
//                 <label className={labelClass}>Contact Phone</label>
//                 <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" className={fieldClass} />
//               </div>
//               <div>
//                 <label className={labelClass}>Department Location</label>
//                 <input name="location" value={formData.location} onChange={handleChange} placeholder="Block A, 2nd Floor" className={fieldClass} />
//               </div>
//               <div className="md:col-span-2">
//                 <label className={labelClass}>Working Hours / Timing</label>
//                 <input name="timing" value={formData.timing} onChange={handleChange} placeholder="Mon–Sat, 9:00 AM – 5:00 PM" className={fieldClass} />
//               </div>
//             </div>
//           </section>
//         </div>

//         <div className="space-y-4 xl:sticky xl:top-4 xl:self-start">
//           <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
//             <SectionHeader icon={FiImage} title="Department Images" subtitle="Upload a thumbnail and banner image." iconClass="bg-cyan-50 text-cyan-600" />
//             <div className="space-y-4">
//               <div>
//                 <label className={labelClass}>Department Image</label>
//                 <div className="relative flex min-h-[145px] items-center justify-center overflow-hidden rounded-xl border border-dashed border-slate-300 bg-slate-50">
//                   {formData.imagePreview ? <img src={formData.imagePreview} alt="Department preview" className="absolute inset-0 h-full w-full object-contain p-2" /> : <div className="px-3 py-7 text-center"><FiImage size={28} className="mx-auto text-slate-300" /><p className="mt-2 text-xs font-semibold text-slate-600">No department image</p><p className="mt-1 text-[10px] text-slate-400">JPG, PNG or WebP · Max 5 MB</p></div>}
//                 </div>
//                 <div className="mt-2 flex gap-2">
//                   <label className="flex h-9 flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#087f8c]/20 bg-[#087f8c]/5 text-[11px] font-semibold text-[#087f8c] hover:bg-[#087f8c]/10"><FiUploadCloud size={14} />{formData.imagePreview ? "Change Image" : "Upload Image"}<input type="file" accept="image/jpeg,image/jpg,image/png,image/webp" onChange={(e) => handleImageChange(e, "image")} className="hidden" /></label>
//                   {formData.imagePreview && <button type="button" onClick={() => removeImage("image")} className="flex h-9 items-center justify-center rounded-xl border border-red-100 px-3 text-red-600 hover:bg-red-50"><FiTrash2 size={14} /></button>}
//                 </div>
//               </div>
//               <div>
//                 <label className={labelClass}>Banner Image</label>
//                 <div className="relative flex min-h-[110px] items-center justify-center overflow-hidden rounded-xl border border-dashed border-slate-300 bg-slate-50">
//                   {formData.bannerPreview ? <img src={formData.bannerPreview} alt="Department banner preview" className="absolute inset-0 h-full w-full object-cover" /> : <div className="px-3 py-5 text-center"><FiImage size={24} className="mx-auto text-slate-300" /><p className="mt-2 text-xs font-semibold text-slate-600">No banner image</p><p className="mt-1 text-[10px] text-slate-400">Wide image · Max 5 MB</p></div>}
//                 </div>
//                 <div className="mt-2 flex gap-2">
//                   <label className="flex h-9 flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#087f8c]/20 bg-[#087f8c]/5 text-[11px] font-semibold text-[#087f8c] hover:bg-[#087f8c]/10"><FiUploadCloud size={14} />{formData.bannerPreview ? "Change Banner" : "Upload Banner"}<input type="file" accept="image/jpeg,image/jpg,image/png,image/webp" onChange={(e) => handleImageChange(e, "banner")} className="hidden" /></label>
//                   {formData.bannerPreview && <button type="button" onClick={() => removeImage("banner")} className="flex h-9 items-center justify-center rounded-xl border border-red-100 px-3 text-red-600 hover:bg-red-50"><FiTrash2 size={14} /></button>}
//                 </div>
//               </div>
//             </div>
//           </section>

//           <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
//             <SectionHeader icon={FiCheck} title="Availability & Status" subtitle="Manage department access." iconClass="bg-emerald-50 text-emerald-600" />
//             <div className="space-y-2.5">
//               <label className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3 transition ${formData.emergency_available ? "border-rose-200 bg-rose-50/60" : "border-slate-200 hover:bg-slate-50"}`}>
//                 <input type="checkbox" name="emergency_available" checked={!!formData.emergency_available} onChange={handleChange} className="mt-1 h-4 w-4 accent-rose-600" />
//                 <span className="flex-1"><span className="block text-[12px] font-semibold text-slate-800">Emergency Service</span><span className="mt-0.5 block text-[10px] leading-4 text-slate-500">Handles emergency cases.</span></span>
//               </label>
//               <label className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3 transition ${formData.appointment_available ? "border-emerald-200 bg-emerald-50/60" : "border-slate-200 hover:bg-slate-50"}`}>
//                 <input type="checkbox" name="appointment_available" checked={!!formData.appointment_available} onChange={handleChange} className="mt-1 h-4 w-4 accent-emerald-600" />
//                 <span className="flex-1"><span className="block text-[12px] font-semibold text-slate-800">Appointments Available</span><span className="mt-0.5 block text-[10px] leading-4 text-slate-500">Patients can request appointments.</span></span>
//               </label>
//               <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
//                 <label className={labelClass}>Department Status</label>
//                 <div className="mt-2 grid grid-cols-2 gap-2">
//                   <button type="button" onClick={() => setFormData((prev) => ({ ...prev, status: "active" }))} className={`rounded-lg border px-3 py-2 text-[11px] font-bold ${String(formData.status) === "active" || String(formData.status) === "1" ? "border-emerald-300 bg-emerald-50 text-emerald-700" : "border-slate-200 bg-white text-slate-500"}`}>● Active</button>
//                   <button type="button" onClick={() => setFormData((prev) => ({ ...prev, status: "inactive" }))} className={`rounded-lg border px-3 py-2 text-[11px] font-bold ${String(formData.status) === "inactive" || String(formData.status) === "0" ? "border-amber-300 bg-amber-50 text-amber-700" : "border-slate-200 bg-white text-slate-500"}`}>● Inactive</button>
//                 </div>
//               </div>
//             </div>
//           </section>

//           <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
//             <div className="mb-3 flex items-center gap-2.5">
//               <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600"><FiActivity size={16} /></div>
//               <div><h3 className="text-[14px] font-bold text-slate-900">Department Summary</h3><p className="text-[10px] text-slate-400">Current form information</p></div>
//             </div>
//             <div className="space-y-1.5">
//               {[
//                 { label: "Department", value: formData.name || "—" },
//                 { label: "URL Slug", value: formData.slug || "—" },
//                 { label: "Doctors", value: String(selectedDoctors.length) },
//                 { label: "Emergency", value: formData.emergency_available ? "Available" : "Not available" },
//                 { label: "Appointments", value: formData.appointment_available ? "Available" : "Not available" },
//                 { label: "Status", value: String(formData.status) === "active" || String(formData.status) === "1" ? "Active" : "Inactive" },
//               ].map((item) => (
//                 <div key={item.label} className="flex items-center justify-between gap-2 rounded-lg bg-slate-50 px-3 py-2">
//                   <span className="text-[11px] font-medium text-slate-500">{item.label}</span>
//                   <span className="max-w-[150px] truncate text-right text-[11px] font-bold text-slate-800">{item.value}</span>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </div>
//       </div>

//       <div className="mt-4 flex flex-col-reverse gap-3 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-4">
//         <div>
//           <p className="text-[12px] font-semibold text-slate-700">Ready to save department?</p>
//           <p className="mt-0.5 text-[10px] text-slate-400">Fields marked with an asterisk (*) are required.</p>
//         </div>
//         <div className="flex w-full gap-2 sm:w-auto">
//           <button type="button" onClick={onCancel} disabled={loading} className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 text-[12px] font-semibold text-slate-600 transition hover:bg-slate-50 disabled:opacity-50 sm:flex-none">
//             <FiX size={15} /> Cancel
//           </button>
//           <button type="submit" disabled={loading} className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#087f8c] px-5 text-[12px] font-semibold text-white shadow-sm transition hover:bg-[#066c77] disabled:cursor-not-allowed disabled:opacity-60 sm:flex-none">
//             {loading ? <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" /> : <FiSave size={15} />}
//             {loading ? "Saving..." : initialData?.id ? "Update Department" : "Save Department"}
//           </button>
//         </div>
//       </div>
//     </motion.form>
//   );
// };

// export default DepartmentForm;



"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import useSWR from "swr";
import {
  FiActivity,
  FiUser,
  FiImage,
  FiUploadCloud,
  FiX,
  FiSearch,
  FiChevronDown,
  FiCheck,
  FiPhone,
  FiMapPin,
  FiClock,
  FiFileText,
  FiSave,
  FiTrash2,
} from "react-icons/fi";

import ApiService from "../../src/services/Apiservices";

const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
];

const fieldClass =
  "w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10";

const labelClass =
  "mb-1.5 block text-xs font-semibold text-slate-700";

const generateSlug = (value = "") =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const normalizeDoctorIds = (value) => {
  if (value === null || value === undefined || value === "") {
    return [];
  }

  if (typeof value === "string") {
    try {
      value = JSON.parse(value);
    } catch {
      value = value.split(",").map((id) => id.trim());
    }
  }

  if (!Array.isArray(value)) {
    value = [value];
  }

  return [
    ...new Map(
      value
        .filter((id) => id !== null && id !== undefined && id !== "")
        .map((id) => [String(id), id])
    ).values(),
  ];
};

const getInitialFormData = (initialData, userId) => ({
  name: initialData?.name || "",
  slug: initialData?.slug || "",
  icon: initialData?.icon || "",
  short_description: initialData?.short_description || "",
  description: initialData?.description || "",

  image: null,
  banner_image: null,

  imagePreview: initialData?.image || "",
  bannerPreview: initialData?.banner_image || "",

  // Database column: department.doctors = "[1,2,3]"
  doctor_ids: normalizeDoctorIds(
    initialData?.doctors ??
      initialData?.doctor_ids ??
      initialData?.doctor_id
  ),

  phone: initialData?.phone || "",
  location: initialData?.location || "",
  timing: initialData?.timing || "",

  emergency_available:
    initialData?.emergency_available === true ||
    initialData?.emergency_available === 1 ||
    initialData?.emergency_available === "1",

  appointment_available:
    initialData?.appointment_available === false ||
    initialData?.appointment_available === 0 ||
    initialData?.appointment_available === "0"
      ? false
      : true,

  status: initialData?.status ?? "active",
  user_id: userId || "",
});

const SectionHeader = ({
  icon: Icon,
  title,
  subtitle,
  color = "teal",
}) => {
  const colors = {
    teal: "bg-teal-50 text-teal-700",
    blue: "bg-blue-50 text-blue-700",
    purple: "bg-purple-50 text-purple-700",
    cyan: "bg-cyan-50 text-cyan-700",
    green: "bg-emerald-50 text-emerald-700",
  };

  return (
    <div className="mb-5 flex items-start gap-3">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
          colors[color] || colors.teal
        }`}
      >
        <Icon size={19} />
      </div>

      <div>
        <h3 className="text-base font-bold text-slate-900">
          {title}
        </h3>

        {subtitle && (
          <p className="mt-1 text-xs leading-5 text-slate-500">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

const DepartmentForm = ({
  onSubmit,
  onCancel,
  userId,
  initialData = null,
}) => {
  // Doctors API
  const {
    data: doctorsData,
    isLoading: doctorsLoading,
    error: doctorsError,
  } = useSWR("doctors", ApiService.get);

  const doctors = useMemo(() => {
    const candidates = [
      doctorsData,
      doctorsData?.data,
      doctorsData?.data?.data,
      doctorsData?.doctors,
      doctorsData?.data?.doctors,
      doctorsData?.result,
    ];

    return candidates.find(Array.isArray) || [];
  }, [doctorsData]);

  // Form state
  const [formData, setFormData] = useState(() =>
    getInitialFormData(initialData, userId)
  );

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [doctorDropdownOpen, setDoctorDropdownOpen] = useState(false);
  const [doctorSearch, setDoctorSearch] = useState("");

  const doctorDropdownRef = useRef(null);

  // Reset form when edit record changes
  useEffect(() => {
    setFormData(getInitialFormData(initialData, userId));
    setErrors({});
    setDoctorSearch("");
    setDoctorDropdownOpen(false);
  }, [initialData, userId]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        doctorDropdownRef.current &&
        !doctorDropdownRef.current.contains(event.target)
      ) {
        setDoctorDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Name and slug
  const handleNameChange = (event) => {
    const name = event.target.value;

    setFormData((prev) => ({
      ...prev,
      name,
      slug: generateSlug(name),
    }));

    setErrors((prev) => ({
      ...prev,
      name: "",
      slug: "",
    }));
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // Doctor selection is optional
  const toggleDoctor = (doctor) => {
    setFormData((prev) => {
      const currentIds = normalizeDoctorIds(prev.doctor_ids);

      const alreadySelected = currentIds.some(
        (id) => String(id) === String(doctor.id)
      );

      return {
        ...prev,
        doctor_ids: alreadySelected
          ? currentIds.filter(
              (id) => String(id) !== String(doctor.id)
            )
          : [...currentIds, doctor.id],
      };
    });
  };

  const removeDoctor = (doctorId) => {
    setFormData((prev) => ({
      ...prev,
      doctor_ids: normalizeDoctorIds(prev.doctor_ids).filter(
        (id) => String(id) !== String(doctorId)
      ),
    }));
  };

  const selectedDoctors = useMemo(() => {
    const selectedIds = normalizeDoctorIds(formData.doctor_ids);

    return doctors.filter((doctor) =>
      selectedIds.some(
        (id) => String(id) === String(doctor.id)
      )
    );
  }, [doctors, formData.doctor_ids]);

  const filteredDoctors = useMemo(() => {
    const search = doctorSearch.trim().toLowerCase();

    if (!search) return doctors;

    return doctors.filter((doctor) => {
      const name = String(
        doctor.name || doctor.full_name || ""
      ).toLowerCase();

      const specialization = String(
        doctor.specialization || doctor.specialty || ""
      ).toLowerCase();

      return (
        name.includes(search) ||
        specialization.includes(search)
      );
    });
  }, [doctors, doctorSearch]);

  // Image upload
  const handleImageChange = (event, type) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (file.size > MAX_IMAGE_SIZE) {
      toast.error("Image size must be less than 5 MB.");
      event.target.value = "";
      return;
    }

    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      toast.error("Only JPG, PNG and WebP images are allowed.");
      event.target.value = "";
      return;
    }

    const preview = URL.createObjectURL(file);

    setFormData((prev) => {
      const oldPreview =
        type === "image" ? prev.imagePreview : prev.bannerPreview;

      if (oldPreview?.startsWith("blob:")) {
        URL.revokeObjectURL(oldPreview);
      }

      if (type === "image") {
        return {
          ...prev,
          image: file,
          imagePreview: preview,
        };
      }

      return {
        ...prev,
        banner_image: file,
        bannerPreview: preview,
      };
    });

    event.target.value = "";
  };

  const removeImage = (type) => {
    setFormData((prev) => {
      const preview =
        type === "image" ? prev.imagePreview : prev.bannerPreview;

      if (preview?.startsWith("blob:")) {
        URL.revokeObjectURL(preview);
      }

      if (type === "image") {
        return {
          ...prev,
          image: null,
          imagePreview: "",
        };
      }

      return {
        ...prev,
        banner_image: null,
        bannerPreview: "",
      };
    });
  };

  // Validation: doctors are NOT required
  const validateForm = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Department name is required.";
    }

    if (!formData.slug.trim()) {
      nextErrors.slug = "Department slug is required.";
    } else if (
      !/^[a-z0-9]+(?:-[a-z0-9]+)*$/i.test(formData.slug.trim())
    ) {
      nextErrors.slug =
        "Use letters, numbers and hyphens only.";
    }

    if (
      formData.phone.trim() &&
      !/^[+()\d\s.-]{7,20}$/.test(formData.phone.trim())
    ) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      toast.error("Please check the highlighted fields.");
      return false;
    }

    return true;
  };

  // Submit FormData to parent handler
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (loading || !validateForm()) return;

//     if (typeof onSubmit !== "function") {
//       toast.error("Department submit handler is not configured.");
//       return;
//     }

//     try {
//       setLoading(true);

//       const payload = new FormData();

//       payload.append("name", formData.name.trim());
//       payload.append("slug", formData.slug.trim());
//       payload.append("icon", formData.icon.trim());

//       payload.append(
//         "short_description",
//         formData.short_description.trim()
//       );

//       payload.append("description", formData.description);

//       // IMPORTANT:
//       // Database column is named "doctors", not "doctor_ids".
//       // Example value sent: "[1,2,3]"
//       payload.append(
//         "doctors",
//         JSON.stringify(normalizeDoctorIds(formData.doctor_ids))
//       );

//       payload.append("phone", formData.phone.trim());
//       payload.append("location", formData.location.trim());
//       payload.append("timing", formData.timing.trim());

//       payload.append(
//         "emergency_available",
//         formData.emergency_available ? "1" : "0"
//       );

//       payload.append(
//         "appointment_available",
//         formData.appointment_available ? "1" : "0"
//       );

//       payload.append("status", String(formData.status));
//       payload.append("user_id", userId || "");

//       if (formData.image instanceof File) {
//         payload.append("image", formData.image);
//       }

//       if (formData.banner_image instanceof File) {
//         payload.append("banner_image", formData.banner_image);
//       }

//       for (const [key, value] of payload.entries()) {
//   if (value instanceof File) {
//     console.log(key, {
//       name: value.name,
//       size: value.size,
//       type: value.type,
//     });
//   } else {
//     console.log(key, value);
//   }
// }

//       await onSubmit(payload);
//     } catch (error) {
//       console.error("Department submit error:", error);
//       toast.error(error?.message || "Unable to save department.");
//     } finally {
//       setLoading(false);
//     }
//   };

const handleSubmit = async (event) => {
  event.preventDefault();

  if (loading || !validateForm()) return;

  if (typeof onSubmit !== "function") {
    toast.error("Submit function is not available");
    return;
  }

  try {
    setLoading(true);

    const payload = new FormData();

    // Basic fields
    payload.append("name", formData.name?.trim() || "");
    payload.append("slug", formData.slug?.trim() || "");
    payload.append("icon", formData.icon?.trim() || "");
    payload.append(
      "short_description",
      formData.short_description?.trim() || ""
    );
    payload.append("description", formData.description || "");

    // Multiple Doctor IDs: [12, 11]
    const doctorIds = normalizeDoctorIds(formData.doctor_ids);

    // API request field name
    payload.append("doctor_ids", JSON.stringify(doctorIds));

    // Other fields
    payload.append("phone", formData.phone?.trim() || "");
    payload.append("location", formData.location?.trim() || "");
    payload.append("timing", formData.timing?.trim() || "");

    payload.append(
      "emergency_available",
      formData.emergency_available ? "1" : "0"
    );

    payload.append(
      "appointment_available",
      formData.appointment_available ? "1" : "0"
    );

    payload.append("status", String(formData.status ?? 1));
    payload.append("user_id", String(userId || ""));

    // Department image
    if (formData.image instanceof File) {
      payload.append("image", formData.image);
    }

    // Department banner image
    if (formData.banner_image instanceof File) {
      payload.append("banner_image", formData.banner_image);
    }

    // Debug payload
    // console.log("========== DEPARTMENT PAYLOAD ==========");

    // for (const [key, value] of payload.entries()) {
    //   if (value instanceof File) {
    //     console.log(key, {
    //       name: value.name,
    //       size: value.size,
    //       type: value.type,
    //     });
    //   } else {
    //     console.log(key, value);
    //   }
    // }

    console.log("Doctor IDs:", payload.get("doctor_ids"));
    console.log("========================================");

    await onSubmit(payload);
  } catch (error) {
    console.error("Department submit error:", error);
    toast.error(error?.message || "Failed to save department");
  } finally {
    setLoading(false);
  }
};

  // Image picker
  const ImagePicker = ({
    type,
    preview,
    title,
    wide = false,
  }) => (
    <div>
      <label className={labelClass}>{title}</label>

      <div
        className={`group relative flex items-center justify-center overflow-hidden rounded-xl border border-dashed border-slate-300 bg-slate-50 ${
          wide ? "h-32" : "h-40"
        }`}
      >
        {preview ? (
          <>
            <img
              src={preview}
              alt={title}
              className={`h-full w-full ${
                wide ? "object-cover" : "object-contain p-2"
              }`}
            />

            <button
              type="button"
              onClick={() => removeImage(type)}
              className="absolute right-2 top-2 flex items-center gap-1 rounded-lg bg-white px-2.5 py-2 text-xs font-semibold text-red-600 shadow hover:bg-red-50"
            >
              <FiTrash2 size={13} />
              Remove
            </button>
          </>
        ) : (
          <div className="px-3 text-center">
            <FiImage
              size={27}
              className="mx-auto text-slate-300"
            />

            <p className="mt-2 text-xs font-semibold text-slate-600">
              Upload {title.toLowerCase()}
            </p>

            <p className="mt-1 text-[10px] text-slate-400">
              JPG, PNG or WebP · Max 5 MB
            </p>
          </div>
        )}
      </div>

      <label className="mt-2 flex h-10 cursor-pointer items-center justify-center gap-2 rounded-xl border border-teal-700/20 bg-teal-50 text-xs font-semibold text-teal-700 transition hover:bg-teal-100">
        <FiUploadCloud size={15} />
        {preview ? "Change Image" : "Choose Image"}

        <input
          type="file"
          accept="image/jpeg,image/png,image/webp"
          className="hidden"
          onChange={(event) => handleImageChange(event, type)}
        />
      </label>
    </div>
  );

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      noValidate
      className="w-full space-y-4 text-slate-700"
    >
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_290px]">
        {/* LEFT COLUMN */}
        <div className="space-y-4">
          {/* Department information */}
          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <SectionHeader
              icon={FiActivity}
              title="Department Information"
              subtitle="Enter the basic information for this department."
            />

            <div className="space-y-4">
              <div>
                <label className={labelClass}>
                  Department Name <span className="text-red-500">*</span>
                </label>

                <input
                  name="name"
                  value={formData.name}
                  onChange={handleNameChange}
                  maxLength={150}
                  placeholder="e.g. Cardiology"
                  className={`${fieldClass} ${
                    errors.name ? "border-red-400" : ""
                  }`}
                />

                {errors.name && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className={labelClass}>
                    URL Slug <span className="text-red-500">*</span>
                  </label>

                  <input
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    placeholder="cardiology"
                    className={`${fieldClass} ${
                      errors.slug ? "border-red-400" : ""
                    }`}
                  />

                  {errors.slug && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.slug}
                    </p>
                  )}
                </div>

                <div>
                  <label className={labelClass}>Icon Name</label>

                  <input
                    name="icon"
                    value={formData.icon}
                    onChange={handleChange}
                    placeholder="HeartPulse, Brain"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>
                  Short Description
                </label>

                <textarea
                  name="short_description"
                  rows={3}
                  maxLength={250}
                  value={formData.short_description}
                  onChange={handleChange}
                  placeholder="Briefly describe the department..."
                  className={fieldClass}
                />

                <p className="mt-1 text-right text-[10px] text-slate-400">
                  {formData.short_description.length}/250
                </p>
              </div>
            </div>
          </section>

          {/* Description */}
          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <SectionHeader
              icon={FiFileText}
              color="blue"
              title="Department Description"
              subtitle="Describe services, specialties and facilities."
            />

            <label className={labelClass}>Full Description</label>

            <textarea
              name="description"
              rows={6}
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the department's services, equipment and patient care..."
              className={fieldClass}
            />
          </section>

          {/* Doctors and contact */}
          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <SectionHeader
              icon={FiUser}
              color="purple"
              title="Doctors & Contact Information"
              subtitle="Assign doctors if required. This field is optional."
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div
                ref={doctorDropdownRef}
                className="relative md:col-span-2"
              >
                <div className="mb-2 flex items-center justify-between gap-2">
                  <label className="text-xs font-semibold text-slate-700">
                    Assigned Doctors (Optional)
                  </label>

                  <span className="rounded-full bg-teal-50 px-2.5 py-1 text-[10px] font-bold text-teal-700">
                    {selectedDoctors.length} selected
                  </span>
                </div>

                {selectedDoctors.length > 0 && (
                  <div className="mb-2 flex flex-wrap gap-2">
                    {selectedDoctors.map((doctor) => (
                      <span
                        key={doctor.id}
                        className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-800"
                      >
                        {doctor.name ||
                          doctor.full_name ||
                          `Doctor ${doctor.id}`}

                        <button
                          type="button"
                          onClick={() => removeDoctor(doctor.id)}
                          aria-label="Remove doctor"
                          className="rounded-full p-0.5 hover:bg-teal-100"
                        >
                          <FiX size={13} />
                        </button>
                      </span>
                    ))}
                  </div>
                )}

                <button
                  type="button"
                  onClick={() =>
                    setDoctorDropdownOpen((prev) => !prev)
                  }
                  className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-left transition hover:border-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-600/10"
                >
                  <span>
                    <span className="block text-sm font-semibold text-slate-700">
                      {doctorsLoading
                        ? "Loading doctors..."
                        : selectedDoctors.length
                        ? `${selectedDoctors.length} doctor(s) selected`
                        : "Choose doctors (optional)"}
                    </span>

                    <span className="mt-1 block text-[11px] text-slate-400">
                      Select doctors or leave this field empty.
                    </span>
                  </span>

                  <FiChevronDown
                    className={`transition ${
                      doctorDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {doctorsError && (
                  <p className="mt-2 text-xs text-red-600">
                    Could not load doctors. Please check the doctors API.
                  </p>
                )}

                {doctorDropdownOpen && (
                  <div className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
                    <div className="border-b border-slate-100 p-3">
                      <div className="relative">
                        <FiSearch
                          size={15}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                          type="search"
                          value={doctorSearch}
                          onChange={(event) =>
                            setDoctorSearch(event.target.value)
                          }
                          placeholder="Search doctor..."
                          className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-3 text-xs outline-none focus:border-teal-600"
                        />
                      </div>
                    </div>

                    <div className="max-h-60 overflow-y-auto p-1.5">
                      {doctorsLoading ? (
                        <p className="px-3 py-8 text-center text-xs text-slate-400">
                          Loading doctors...
                        </p>
                      ) : filteredDoctors.length > 0 ? (
                        filteredDoctors.map((doctor) => {
                          const isSelected =
                            normalizeDoctorIds(
                              formData.doctor_ids
                            ).some(
                              (id) =>
                                String(id) === String(doctor.id)
                            );

                          return (
                            <button
                              key={doctor.id}
                              type="button"
                              onClick={() => toggleDoctor(doctor)}
                              className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left transition ${
                                isSelected
                                  ? "bg-teal-50"
                                  : "hover:bg-slate-50"
                              }`}
                            >
                              <span className="min-w-0">
                                <span className="block truncate text-xs font-semibold text-slate-700">
                                  {doctor.name ||
                                    doctor.full_name ||
                                    `Doctor ${doctor.id}`}
                                </span>

                                <span className="mt-0.5 block truncate text-[11px] text-slate-400">
                                  {doctor.specialization ||
                                    doctor.specialty ||
                                    "General"}
                                </span>
                              </span>

                              <span
                                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${
                                  isSelected
                                    ? "border-teal-700 bg-teal-700 text-white"
                                    : "border-slate-300 text-transparent"
                                }`}
                              >
                                <FiCheck size={12} />
                              </span>
                            </button>
                          );
                        })
                      ) : (
                        <p className="px-3 py-8 text-center text-xs text-slate-400">
                          No doctors found.
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-3 py-2">
                      <span className="text-[11px] text-slate-500">
                        {selectedDoctors.length} selected
                      </span>

                      <button
                        type="button"
                        onClick={() => setDoctorDropdownOpen(false)}
                        className="rounded-lg bg-teal-700 px-3 py-1.5 text-[11px] font-semibold text-white hover:bg-teal-800"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label className={labelClass}>
                  <FiPhone className="mr-1 inline" />
                  Contact Phone
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className={`${fieldClass} ${
                    errors.phone ? "border-red-400" : ""
                  }`}
                />

                {errors.phone && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label className={labelClass}>
                  <FiMapPin className="mr-1 inline" />
                  Department Location
                </label>

                <input
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Block A, 2nd Floor"
                  className={fieldClass}
                />
              </div>

              <div className="md:col-span-2">
                <label className={labelClass}>
                  <FiClock className="mr-1 inline" />
                  Working Hours / Timing
                </label>

                <input
                  name="timing"
                  value={formData.timing}
                  onChange={handleChange}
                  placeholder="Mon-Sat, 9:00 AM - 5:00 PM"
                  className={fieldClass}
                />
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-4 xl:sticky xl:top-4 xl:self-start">
          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <SectionHeader
              icon={FiImage}
              color="cyan"
              title="Department Images"
              subtitle="Upload department and banner images."
            />

            <div className="space-y-5">
              <ImagePicker
                type="image"
                title="Department Image"
                preview={formData.imagePreview}
              />

              <ImagePicker
                type="banner"
                title="Banner Image"
                preview={formData.bannerPreview}
                wide
              />
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <SectionHeader
              icon={FiCheck}
              color="green"
              title="Availability & Status"
              subtitle="Configure department services."
            />

            <div className="space-y-3">
              <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-3 transition hover:bg-slate-50">
                <input
                  type="checkbox"
                  name="emergency_available"
                  checked={formData.emergency_available}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 accent-teal-700"
                />

                <span>
                  <span className="block text-xs font-semibold text-slate-800">
                    Emergency Service
                  </span>

                  <span className="mt-1 block text-[11px] text-slate-500">
                    Emergency cases accepted.
                  </span>
                </span>
              </label>

              <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-3 transition hover:bg-slate-50">
                <input
                  type="checkbox"
                  name="appointment_available"
                  checked={formData.appointment_available}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 accent-teal-700"
                />

                <span>
                  <span className="block text-xs font-semibold text-slate-800">
                    Appointments Available
                  </span>

                  <span className="mt-1 block text-[11px] text-slate-500">
                    Patients can request appointments.
                  </span>
                </span>
              </label>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <label className={labelClass}>
                  Department Status
                </label>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        status: "active",
                      }))
                    }
                    className={`rounded-lg border px-3 py-2 text-xs font-bold ${
                      ["active", 1, "1"].includes(formData.status)
                        ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                        : "border-slate-200 bg-white text-slate-500"
                    }`}
                  >
                    Active
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        status: "inactive",
                      }))
                    }
                    className={`rounded-lg border px-3 py-2 text-xs font-bold ${
                      ["inactive", 0, "0"].includes(formData.status)
                        ? "border-amber-300 bg-amber-50 text-amber-700"
                        : "border-slate-200 bg-white text-slate-500"
                    }`}
                  >
                    Inactive
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <SectionHeader
              icon={FiActivity}
              title="Department Summary"
              subtitle="Current form information."
            />

            <div className="space-y-2">
              {[
                {
                  label: "Department",
                  value: formData.name || "Not entered",
                },
                {
                  label: "Slug",
                  value: formData.slug || "Not entered",
                },
                {
                  label: "Doctors",
                  value: String(selectedDoctors.length),
                },
                {
                  label: "Emergency",
                  value: formData.emergency_available
                    ? "Available"
                    : "Unavailable",
                },
                {
                  label: "Appointments",
                  value: formData.appointment_available
                    ? "Available"
                    : "Unavailable",
                },
                {
                  label: "Status",
                  value: ["active", 1, "1"].includes(formData.status)
                    ? "Active"
                    : "Inactive",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-2 rounded-lg bg-slate-50 px-3 py-2"
                >
                  <span className="text-[11px] text-slate-500">
                    {item.label}
                  </span>

                  <span className="max-w-[145px] truncate text-right text-[11px] font-bold text-slate-800">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col-reverse gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold text-slate-700">
            {initialData?.id
              ? "Update department details"
              : "Ready to create department?"}
          </p>

          <p className="mt-1 text-[10px] text-slate-400">
            Name and slug are required. Doctor selection is optional.
          </p>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={onCancel}
            disabled={loading}
            className="flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 text-xs font-semibold text-slate-600 transition hover:bg-slate-50 disabled:opacity-50"
          >
            <FiX size={15} />
            Cancel
          </button>

          <button
            type="submit"
            disabled={loading}
            className="flex h-10 items-center justify-center gap-2 rounded-xl bg-teal-700 px-5 text-xs font-semibold text-white shadow-sm transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            ) : (
              <FiSave size={15} />
            )}

            {loading
              ? "Saving..."
              : initialData?.id
              ? "Update Department"
              : "Save Department"}
          </button>
        </div>
      </div>
    </motion.form>
  );
};

export default DepartmentForm;
