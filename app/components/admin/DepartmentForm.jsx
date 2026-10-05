// "use client";

// import React, { useEffect, useState } from "react";
// import {
//   FiSave,
//   FiUser,
//   FiPhone,
//   FiMapPin,
//   FiClock,
//   FiImage,
//   FiUploadCloud,
//   FiX,
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
//   // Doctors
//   // =========================================================
//   const { data: doctorsData, isLoading: doctorsLoading } = useSWR(
//     "doctors",
//     ApiService.get
//   );

//   const doctors = Array.isArray(doctorsData)
//     ? doctorsData
//     : doctorsData?.data || [];

//     console.log(doctors)

//   // =========================================================
//   // Form State
//   // =========================================================
//   const [formData, setFormData] = useState({
//     name: initialData?.name || "",
//     slug: initialData?.slug || "",
//     short_description: initialData?.short_description || "",
//     description: initialData?.description || "",

//     image: null,
//     banner_image: null,

//     imagePreview: initialData?.image || "",
//     bannerPreview: initialData?.banner_image || "",

//     head_doctor_id: initialData?.head_doctor_id || "",

//     phone: initialData?.phone || "",
//     location: initialData?.location || "",
//     timing: initialData?.timing || "",

//     emergency_available:
//       initialData?.emergency_available ?? false,

//     appointment_available:
//       initialData?.appointment_available ?? true,

//     status: initialData?.status || "active",

//     user_id: userId,
//   });

//   const [loading, setLoading] = useState(false);

//   // =========================================================
//   // Update form when editing another department
//   // =========================================================
//   useEffect(() => {
//     setFormData({
//       name: initialData?.name || "",
//       slug: initialData?.slug || "",
//       short_description: initialData?.short_description || "",
//       description: initialData?.description || "",

//       image: null,
//       banner_image: null,

//       imagePreview: initialData?.image || "",
//       bannerPreview: initialData?.banner_image || "",

//       head_doctor_id: initialData?.head_doctor_id || "",

//       phone: initialData?.phone || "",
//       location: initialData?.location || "",
//       timing: initialData?.timing || "",

//       emergency_available:
//         initialData?.emergency_available ?? false,

//       appointment_available:
//         initialData?.appointment_available ?? true,

//       status: initialData?.status || "active",

//       user_id: userId,
//     });
//   }, [initialData, userId]);

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

//   // =========================================================
//   // Name Change
//   // =========================================================
//   const handleNameChange = (e) => {
//     const name = e.target.value;

//     setFormData((prev) => ({
//       ...prev,
//       name,
//       slug: generateSlug(name),
//     }));
//   };

//   // =========================================================
//   // Input Change
//   // =========================================================
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   // =========================================================
//   // Image Upload
//   // =========================================================
//   const handleImageChange = (e, type) => {
//     const file = e.target.files?.[0];

//     if (!file) return;

//     // File size validation - 5MB
//     if (file.size > 5 * 1024 * 1024) {
//       alert("Image size should be less than 5MB.");
//       e.target.value = "";
//       return;
//     }

//     // File type validation
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
//       setFormData((prev) => ({
//         ...prev,
//         image: file,
//         imagePreview: preview,
//       }));
//     }

//     if (type === "banner") {
//       setFormData((prev) => ({
//         ...prev,
//         banner_image: file,
//         bannerPreview: preview,
//       }));
//     }
//   };

//   // =========================================================
//   // Remove Image
//   // =========================================================
//   const removeImage = (type) => {
//     if (type === "image") {
//       setFormData((prev) => ({
//         ...prev,
//         image: null,
//         imagePreview: "",
//       }));
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

//       // Basic
//       payload.append("name", formData.name);
//       payload.append("slug", formData.slug);
//       payload.append(
//         "short_description",
//         formData.short_description
//       );
//       payload.append("description", formData.description);

//       // Doctor
//       payload.append(
//         "head_doctor_id",
//         formData.head_doctor_id || ""
//       );

//       // Contact
//       payload.append("phone", formData.phone);
//       payload.append("location", formData.location);
//       payload.append("timing", formData.timing);

//       // Availability
//       payload.append(
//         "emergency_available",
//         formData.emergency_available ? "1" : "0"
//       );

//       payload.append(
//         "appointment_available",
//         formData.appointment_available ? "1" : "0"
//       );

//       // Status
//       payload.append("status", formData.status);

//       // User
//       payload.append("user_id", userId || "");

//       // Image
//       if (formData.image instanceof File) {
//         payload.append("image", formData.image);
//       }

//       // Banner
//       if (formData.banner_image instanceof File) {
//         payload.append(
//           "banner_image",
//           formData.banner_image
//         );
//       }

//       console.log("Department FormData:", formData);

//       await onSubmit(payload);
//     } catch (error) {
//       console.error(
//         "Department submit error:",
//         error
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // =========================================================
//   // File Picker Component
//   // =========================================================
//   const FilePicker = ({
//     type,
//     preview,
//     label,
//   }) => {
//     const isImage = type === "image";

//     return (
//       <div>
//         <label className="mb-1.5 block text-xs font-semibold text-gray-700">
//           {label}
//         </label>

//         {preview ? (
//           <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white">
//             <img
//               src={preview}
//               alt={label}
//               className="h-40 w-full object-cover"
//             />

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

//             <span className="mt-1 text-[11px] text-gray-400">
//               Maximum 5MB
//             </span>

//             <input
//               type="file"
//               accept="image/png,image/jpeg,image/jpg,image/webp"
//               className="hidden"
//               onChange={(e) =>
//                 handleImageChange(
//                   e,
//                   isImage ? "image" : "banner"
//                 )
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
//     <form
//       onSubmit={handleSubmit}
//       className="mx-auto w-full  space-y-5"
//     >
//       {/* =====================================================
//           BASIC INFORMATION
//       ===================================================== */}
//       <div>
//         <div className="grid gap-4 md:grid-cols-2">
//           {/* Department Name */}
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

//           {/* Slug */}
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

//           {/* Short Description */}
//           <div className="md:col-span-2">
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

//           {/* Description */}
//           <div className="md:col-span-2">
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

//       {/* =====================================================
//           IMAGES
//       ===================================================== */}
//       <div className="border-t border-gray-100 pt-5">
//         <div className="mb-4 flex items-center gap-2">
//           <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0d3c59]/10 text-[#0d3c59]">
//             <FiImage size={16} />
//           </div>

//           <div>
//             <h3 className="text-sm font-bold text-gray-800">
//               Department Images
//             </h3>

//             <p className="text-xs text-gray-500">
//               Upload department images
//             </p>
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

//       {/* =====================================================
//           CONTACT & DOCTOR
//       ===================================================== */}
//       <div className="border-t border-gray-100 pt-5">
//         {/* <div className="mb-4">
//           <h3 className="text-sm font-bold text-gray-800">
//             Contact & Department Details
//           </h3>

//           <p className="text-xs text-gray-500">
//             Department contact and head doctor
//           </p>
//         </div> */}

//         <div className="grid gap-4 md:grid-cols-2">
//           {/* Head Doctor */}
//           <div>
//             <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-gray-700">
//               <FiUser size={13} />
//               Doctor's
//             </label>

//             <select
//               name="head_doctor_id"
//               value={formData.head_doctor_id}
//               onChange={handleChange}
//               disabled={doctorsLoading}
//               className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10 disabled:bg-gray-100"
//             >
//               <option value="">
//                 {doctorsLoading
//                   ? "Loading doctors..."
//                   : "Select Head Doctor"}
//               </option>

//               {doctors.map((doctor) => (
//                 <option
//                   key={doctor.id}
//                   value={doctor.id}
//                 >
//                   {doctor.name}
//                   {doctor.specialization
//                     ? ` — ${doctor.specialization}`
//                     : ""}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Phone */}
//           {/* <div>
//             <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-gray-700">
//               <FiPhone size={13} />
//               Phone
//             </label>

//             <input
//               type="text"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="+91 9575300110"
//               className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10"
//             />
//           </div> */}

//           {/* Location */}
//           {/* <div>
//             <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-gray-700">
//               <FiMapPin size={13} />
//               Location
//             </label>

//             <input
//               type="text"
//               name="location"
//               value={formData.location}
//               onChange={handleChange}
//               placeholder="1st Floor, Block A"
//               className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10"
//             />
//           </div> */}

//           {/* Timing */}
//           {/* <div>
//             <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-gray-700">
//               <FiClock size={13} />
//               OPD Timing
//             </label>

//             <input
//               type="text"
//               name="timing"
//               value={formData.timing}
//               onChange={handleChange}
//               placeholder="Mon - Sat, 9:00 AM - 5:00 PM"
//               className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10"
//             />
//           </div> */}
//         </div>
//       </div>

//       {/* =====================================================
//           AVAILABILITY
//       ===================================================== */}
//       {/* <div className="border-t border-gray-100 pt-5">
//         <h3 className="mb-4 text-sm font-bold text-gray-800">
//           Availability
//         </h3>

//         <div className="grid gap-3 md:grid-cols-2">
        
//           <label className="flex cursor-pointer items-center justify-between rounded-xl border border-gray-200 bg-white p-3.5 transition hover:border-[#0d3c59]/30">
//             <div>
//               <p className="text-sm font-semibold text-gray-800">
//                 Emergency Available
//               </p>

//               <p className="text-xs text-gray-500">
//                 Handles emergency cases
//               </p>
//             </div>

//             <input
//               type="checkbox"
//               name="emergency_available"
//               checked={formData.emergency_available}
//               onChange={handleChange}
//               className="h-4 w-4 accent-[#0d3c59]"
//             />
//           </label>

//           <label className="flex cursor-pointer items-center justify-between rounded-xl border border-gray-200 bg-white p-3.5 transition hover:border-[#0d3c59]/30">
//             <div>
//               <p className="text-sm font-semibold text-gray-800">
//                 Appointment Available
//               </p>

//               <p className="text-xs text-gray-500">
//                 Allow online appointments
//               </p>
//             </div>

//             <input
//               type="checkbox"
//               name="appointment_available"
//               checked={formData.appointment_available}
//               onChange={handleChange}
//               className="h-4 w-4 accent-[#0d3c59]"
//             />
//           </label>
//         </div>
//       </div> */}

//       {/* =====================================================
//           STATUS
//       ===================================================== */}
//       {/* <div className="border-t border-gray-100 pt-5">
//         <label className="mb-1.5 block text-xs font-semibold text-gray-700">
//           Status
//         </label>

//         <select
//           name="status"
//           value={formData.status}
//           onChange={handleChange}
//           className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10"
//         >
//           <option value="active">Active</option>
//           <option value="inactive">Inactive</option>
//         </select>
//       </div> */}

//       {/* =====================================================
//           FOOTER
//       ===================================================== */}
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

//   const [doctorDropdownOpen, setDoctorDropdownOpen] =
//     useState(false);

//   const [doctorSearch, setDoctorSearch] = useState("");

//   const doctorDropdownRef = useRef(null);

//   // =========================================================
//   // Form State
//   // =========================================================

//   const [formData, setFormData] = useState({
//     name: initialData?.name || "",
//     slug: initialData?.slug || "",
//     icon: initialData?.icon || "",

//     short_description:
//       initialData?.short_description || "",

//     description: initialData?.description || "",

//     image: null,
//     banner_image: null,

//     imagePreview: initialData?.image || "",
//     bannerPreview: initialData?.banner_image || "",

//     head_doctor_id:
//       initialData?.head_doctor_id || "",

//     phone: initialData?.phone || "",
//     location: initialData?.location || "",
//     timing: initialData?.timing || "",

//     emergency_available:
//       initialData?.emergency_available ?? false,

//     appointment_available:
//       initialData?.appointment_available ?? true,

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

//       short_description:
//         initialData?.short_description || "",

//       description: initialData?.description || "",

//       image: null,
//       banner_image: null,

//       imagePreview: initialData?.image || "",
//       bannerPreview: initialData?.banner_image || "",

//       head_doctor_id:
//         initialData?.head_doctor_id || "",

//       phone: initialData?.phone || "",
//       location: initialData?.location || "",
//       timing: initialData?.timing || "",

//       emergency_available:
//         initialData?.emergency_available ?? false,

//       appointment_available:
//         initialData?.appointment_available ?? true,

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

//     document.addEventListener(
//       "mousedown",
//       handleClickOutside
//     );

//     return () => {
//       document.removeEventListener(
//         "mousedown",
//         handleClickOutside
//       );
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

//   // =========================================================
//   // Department Name Change
//   // =========================================================

//   const handleNameChange = (e) => {
//     const name = e.target.value;

//     setFormData((prev) => ({
//       ...prev,
//       name,
//       slug: generateSlug(name),
//     }));
//   };

//   // =========================================================
//   // Input Change
//   // =========================================================

//   const handleChange = (e) => {
//     const {
//       name,
//       value,
//       type,
//       checked,
//     } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]:
//         type === "checkbox"
//           ? checked
//           : value,
//     }));
//   };

//   // =========================================================
//   // Selected Doctor
//   // =========================================================

//   const selectedDoctor = doctors.find(
//     (doctor) =>
//       String(doctor.id) ===
//       String(formData.head_doctor_id)
//   );

//   // =========================================================
//   // Filter Doctors
//   // =========================================================

//   const filteredDoctors = doctors.filter((doctor) => {
//     const search = doctorSearch
//       .toLowerCase()
//       .trim();

//     if (!search) return true;

//     return (
//       doctor.name
//         ?.toLowerCase()
//         .includes(search) ||
//       doctor.specialization
//         ?.toLowerCase()
//         .includes(search) ||
//       doctor.department_name
//         ?.toLowerCase()
//         .includes(search) ||
//       doctor.department?.name
//         ?.toLowerCase()
//         .includes(search) ||
//       doctor.departmentName
//         ?.toLowerCase()
//         .includes(search)
//     );
//   });

//   // =========================================================
//   // Get Doctor Department
//   // =========================================================

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
//   // Select Doctor
//   // =========================================================

//   const handleDoctorSelect = (doctor) => {
//     setFormData((prev) => ({
//       ...prev,
//       head_doctor_id: doctor.id,
//     }));

//     setDoctorDropdownOpen(false);
//     setDoctorSearch("");
//   };

//   // =========================================================
//   // Image Upload
//   // =========================================================

//   const handleImageChange = (e, type) => {
//     const file = e.target.files?.[0];

//     if (!file) return;

//     // 5 MB
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
//       alert(
//         "Only JPG, JPEG, PNG and WEBP images are allowed."
//       );

//       e.target.value = "";
//       return;
//     }

//     const preview = URL.createObjectURL(file);

//     if (type === "image") {
//       setFormData((prev) => ({
//         ...prev,
//         image: file,
//         imagePreview: preview,
//       }));
//     }

//     if (type === "banner") {
//       setFormData((prev) => ({
//         ...prev,
//         banner_image: file,
//         bannerPreview: preview,
//       }));
//     }
//   };

//   // =========================================================
//   // Remove Image
//   // =========================================================

//   const removeImage = (type) => {
//     if (type === "image") {
//       setFormData((prev) => ({
//         ...prev,
//         image: null,
//         imagePreview: "",
//       }));
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

//       // Basic
//       payload.append(
//         "name",
//         formData.name
//       );

//       payload.append(
//         "slug",
//         formData.slug
//       );

//       payload.append(
//         "icon",
//         formData.icon
//       );

//       payload.append(
//         "short_description",
//         formData.short_description
//       );

//       payload.append(
//         "description",
//         formData.description
//       );

//       // Doctor
//       payload.append(
//         "head_doctor_id",
//         formData.head_doctor_id || ""
//       );

//       // Contact
//       payload.append(
//         "phone",
//         formData.phone
//       );

//       payload.append(
//         "location",
//         formData.location
//       );

//       payload.append(
//         "timing",
//         formData.timing
//       );

//       // Availability
//       payload.append(
//         "emergency_available",
//         formData.emergency_available
//           ? "1"
//           : "0"
//       );

//       payload.append(
//         "appointment_available",
//         formData.appointment_available
//           ? "1"
//           : "0"
//       );

//       // Status
//       payload.append(
//         "status",
//         formData.status
//       );

//       // User
//       payload.append(
//         "user_id",
//         userId || ""
//       );

//       // Image
//       if (formData.image instanceof File) {
//         payload.append(
//           "image",
//           formData.image
//         );
//       }

//       // Banner
//       if (
//         formData.banner_image instanceof File
//       ) {
//         payload.append(
//           "banner_image",
//           formData.banner_image
//         );
//       }

//       console.log(
//         "Department FormData:",
//         formData
//       );

//       await onSubmit(payload);
//     } catch (error) {
//       console.error(
//         "Department submit error:",
//         error
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // =========================================================
//   // File Picker Component
//   // =========================================================

//   const FilePicker = ({
//     type,
//     preview,
//     label,
//   }) => {
//     const isImage = type === "image";

//     return (
//       <div>
//         <label className="mb-1.5 block text-xs font-semibold text-gray-700">
//           {label}
//         </label>

//         {preview ? (
//           <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white">
//             <img
//               src={preview}
//               alt={label}
//               className="h-40 w-full object-cover"
//             />

//             <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">
//               <button
//                 type="button"
//                 onClick={() =>
//                   removeImage(type)
//                 }
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

//             <span className="mt-1 text-[11px] text-gray-400">
//               Maximum 5MB
//             </span>

//             <input
//               type="file"
//               accept="image/png,image/jpeg,image/jpg,image/webp"
//               className="hidden"
//               onChange={(e) =>
//                 handleImageChange(
//                   e,
//                   isImage
//                     ? "image"
//                     : "banner"
//                 )
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
//     <form
//       onSubmit={handleSubmit}
//       className="mx-auto w-full space-y-5"
//     >
//       {/* =====================================================
//           BASIC INFORMATION
//       ===================================================== */}

//       <div>
//         <div className="grid gap-4 md:grid-cols-3">

//           {/* Department Name */}
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

//           {/* Slug */}
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

//           {/* Department Icon */}
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

//           {/* Short Description */}
//           <div className="md:col-span-3">
//             <label className="mb-1.5 block text-xs font-semibold text-gray-700">
//               Short Description
//             </label>

//             <textarea
//               name="short_description"
//               rows={2}
//               value={
//                 formData.short_description
//               }
//               onChange={handleChange}
//               placeholder="Advanced cardiac care and treatment..."
//               className="w-full resize-none rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10"
//             />
//           </div>

//           {/* Description */}
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

//       {/* =====================================================
//           IMAGES
//       ===================================================== */}

//       <div className="border-t border-gray-100 pt-5">

//         <div className="mb-4 flex items-center gap-2">
//           <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0d3c59]/10 text-[#0d3c59]">
//             <FiImage size={16} />
//           </div>

//           <div>
//             <h3 className="text-sm font-bold text-gray-800">
//               Department Images
//             </h3>

//             <p className="text-xs text-gray-500">
//               Upload department images
//             </p>
//           </div>
//         </div>

//         <div className="grid gap-4 md:grid-cols-2">

//           <FilePicker
//             type="image"
//             preview={
//               formData.imagePreview
//             }
//             label="Department Image"
//           />

//           <FilePicker
//             type="banner"
//             preview={
//               formData.bannerPreview
//             }
//             label="Banner Image"
//           />

//         </div>
//       </div>

//       {/* =====================================================
//           CONTACT & DOCTOR
//       ===================================================== */}

//       <div className="border-t border-gray-100 pt-5">

//         <div className="grid gap-4 md:grid-cols-2">

//           {/* =================================================
//               HEAD DOCTOR
//           ================================================= */}

//           <div
//             className="relative"
//             ref={doctorDropdownRef}
//           >
//             <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-gray-700">
//               <FiUser size={13} />

//               Head Doctor
//             </label>

//             {/* Selected Doctor */}
//             <button
//               type="button"
//               disabled={doctorsLoading}
//               onClick={() =>
//                 setDoctorDropdownOpen(
//                   (prev) => !prev
//                 )
//               }
//               className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition hover:border-[#0d3c59] focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10 disabled:cursor-not-allowed disabled:bg-gray-100"
//             >
//               <div className="flex min-w-0 items-center gap-2">

//                 <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0d3c59]/10 text-[#0d3c59]">
//                   <FiUser size={14} />
//                 </div>

//                 <span
//                   className={`truncate ${
//                     selectedDoctor
//                       ? "font-medium text-gray-700"
//                       : "text-gray-400"
//                   }`}
//                 >
//                   {doctorsLoading
//                     ? "Loading doctors..."
//                     : selectedDoctor
//                     ? selectedDoctor.name
//                     : "Select Head Doctor"}
//                 </span>
//               </div>

//               <FiChevronDown
//                 size={17}
//                 className={`shrink-0 text-gray-400 transition-transform ${
//                   doctorDropdownOpen
//                     ? "rotate-180"
//                     : ""
//                 }`}
//               />
//             </button>

//             {/* Dropdown */}
//             {doctorDropdownOpen &&
//               !doctorsLoading && (
//                 <div className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl">

//                   {/* Search */}
//                   <div className="border-b border-gray-100 p-2">

//                     <div className="relative">

//                       <FiSearch
//                         size={15}
//                         className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//                       />

//                       <input
//                         type="text"
//                         value={doctorSearch}
//                         onChange={(e) =>
//                           setDoctorSearch(
//                             e.target.value
//                           )
//                         }
//                         placeholder="Search doctor..."
//                         className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-9 pr-3 text-xs outline-none transition focus:border-[#0d3c59] focus:bg-white"
//                       />
//                     </div>
//                   </div>

//                   {/* Doctor List */}
//                   <div className="max-h-64 overflow-y-auto p-1">

//                     {filteredDoctors.length >
//                     0 ? (
//                       filteredDoctors.map(
//                         (doctor) => {
//                           const isSelected =
//                             String(
//                               doctor.id
//                             ) ===
//                             String(
//                               formData.head_doctor_id
//                             );

//                           const departmentName =
//                             getDoctorDepartment(
//                               doctor
//                             );

//                           return (
//                             <button
//                               key={
//                                 doctor.id
//                               }
//                               type="button"
//                               onClick={() =>
//                                 handleDoctorSelect(
//                                   doctor
//                                 )
//                               }
//                               className={`flex w-full items-center justify-between gap-4 rounded-lg px-3 py-2.5 text-left transition ${
//                                 isSelected
//                                   ? "bg-[#0d3c59]/5"
//                                   : "hover:bg-gray-50"
//                               }`}
//                             >
//                               {/* LEFT */}
//                               <div className="flex min-w-0 items-center gap-3">

//                                 <div
//                                   className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
//                                     isSelected
//                                       ? "bg-[#0d3c59] text-white"
//                                       : "bg-gray-100 text-[#0d3c59]"
//                                   }`}
//                                 >
//                                   <FiUser
//                                     size={
//                                       16
//                                     }
//                                   />
//                                 </div>

//                                 <div className="min-w-0">

//                                   <p
//                                     className={`truncate text-sm font-semibold ${
//                                       isSelected
//                                         ? "text-[#0d3c59]"
//                                         : "text-gray-700"
//                                     }`}
//                                   >
//                                     {
//                                       doctor.name
//                                     }
//                                   </p>

//                                   {doctor.specialization && (
//                                     <p className="truncate text-[11px] text-gray-400">
//                                       {
//                                         doctor.specialization
//                                       }
//                                     </p>
//                                   )}
//                                 </div>
//                               </div>

//                               {/* RIGHT */}
//                               <div className="flex shrink-0 items-center gap-2">

//                                 <span
//                                   className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${
//                                     isSelected
//                                       ? "bg-[#0d3c59]/10 text-[#0d3c59]"
//                                       : "bg-gray-100 text-gray-500"
//                                   }`}
//                                 >
//                                   {
//                                     departmentName
//                                   }
//                                 </span>

//                                 {isSelected && (
//                                   <FiCheck
//                                     size={
//                                       16
//                                     }
//                                     className="text-[#0d3c59]"
//                                   />
//                                 )}
//                               </div>
//                             </button>
//                           );
//                         }
//                       )
//                     ) : (
//                       <div className="px-4 py-8 text-center">

//                         <FiUser
//                           size={25}
//                           className="mx-auto mb-2 text-gray-300"
//                         />

//                         <p className="text-xs font-medium text-gray-500">
//                           No doctors found
//                         </p>

//                         <p className="mt-1 text-[11px] text-gray-400">
//                           Try another search
//                         </p>
//                       </div>
//                     )}

//                   </div>
//                 </div>
//               )}
//           </div>

//         </div>
//       </div>

//       {/* =====================================================
//           FOOTER
//       ===================================================== */}

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

// deepsheek code 

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

//     // ✅ MULTIPLE DOCTORS ARRAY
//     head_doctor_ids:
//       initialData?.head_doctor_ids ||
//       (initialData?.head_doctor_id ? [initialData.head_doctor_id] : []) ||
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

//       head_doctor_ids:
//         initialData?.head_doctor_ids ||
//         (initialData?.head_doctor_id ? [initialData.head_doctor_id] : []) ||
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
//   // ✅ TOGGLE DOCTOR (MULTI SELECT)
//   // =========================================================
//   const toggleDoctor = (doctor) => {
//     setFormData((prev) => {
//       const exists = prev.head_doctor_ids.some(
//         (id) => String(id) === String(doctor.id)
//       );

//       return {
//         ...prev,
//         head_doctor_ids: exists
//           ? prev.head_doctor_ids.filter(
//               (id) => String(id) !== String(doctor.id)
//             )
//           : [...prev.head_doctor_ids, doctor.id],
//       };
//     });
//   };

//   // =========================================================
//   // ✅ REMOVE DOCTOR BY ID
//   // =========================================================
//   const removeDoctor = (doctorId) => {
//     setFormData((prev) => ({
//       ...prev,
//       head_doctor_ids: prev.head_doctor_ids.filter(
//         (id) => String(id) !== String(doctorId)
//       ),
//     }));
//   };

//   // =========================================================
//   // ✅ GET SELECTED DOCTOR OBJECTS
//   // =========================================================
//   const selectedDoctors = doctors.filter((doctor) =>
//     formData.head_doctor_ids.some(
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

//       // ✅ MULTIPLE DOCTORS BHEJ RAHE HAIN
//       // Backend ke hisaab se adjust karein:
//       // Option A: array as JSON string
//       payload.append(
//         "head_doctor_ids",
//         JSON.stringify(formData.head_doctor_ids)
//       );

//       // Option B: comma separated (agar backend comma expect karta hai)
//       // payload.append("head_doctor_ids", formData.head_doctor_ids.join(","));

//       // Option C: multiple entries (Laravel style)
//       // formData.head_doctor_ids.forEach((id) => {
//       //   payload.append("head_doctor_ids[]", id);
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

//       await onSubmit(payload);
//     // for (let [key, value] of payload.entries()) {
//     //     console.log(key, "=>", value);
//     //     }

//     //     // ✅ Ya ye
//     //     console.log([...payload.entries()]);
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
//               HEAD DOCTORS (MULTI SELECT)
//           ================================================= */}
//           <div className="relative md:col-span-2" ref={doctorDropdownRef}>
//             <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-gray-700">
//               <FiUser size={13} />
//               Head Doctors
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
//                     : "Select Head Doctors"}
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
//                       const isSelected = formData.head_doctor_ids.some(
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

// new  

"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  FiSave,
  FiUser,
  FiImage,
  FiUploadCloud,
  FiX,
  FiSearch,
  FiChevronDown,
  FiCheck,
  FiActivity,
} from "react-icons/fi";
import useSWR from "swr";
import ApiService from "../../src/services/Apiservices";

const DepartmentForm = ({
  onSubmit,
  onCancel,
  userId,
  initialData = null,
}) => {
  // =========================================================
  // Doctors API
  // =========================================================
  const { data: doctorsData, isLoading: doctorsLoading } = useSWR(
    "doctors",
    ApiService.get
  );

  const doctors = Array.isArray(doctorsData)
    ? doctorsData
    : doctorsData?.data || [];

  // =========================================================
  // Doctor Dropdown State
  // =========================================================
  const [doctorDropdownOpen, setDoctorDropdownOpen] = useState(false);
  const [doctorSearch, setDoctorSearch] = useState("");
  const doctorDropdownRef = useRef(null);

  // =========================================================
  // Form State
  // =========================================================
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    slug: initialData?.slug || "",
    icon: initialData?.icon || "",
    short_description: initialData?.short_description || "",
    description: initialData?.description || "",
    image: null,
    banner_image: null,
    imagePreview: initialData?.image || "",
    bannerPreview: initialData?.banner_image || "",

    // ✅ DOCTOR IDS (renamed from head_doctor_ids)
    doctor_ids:
      initialData?.doctor_ids ||
      (initialData?.doctor_id ? [initialData.doctor_id] : []) ||
      [],

    phone: initialData?.phone || "",
    location: initialData?.location || "",
    timing: initialData?.timing || "",
    emergency_available: initialData?.emergency_available ?? false,
    appointment_available: initialData?.appointment_available ?? true,
    status: initialData?.status || "active",
    user_id: userId,
  });

  const [loading, setLoading] = useState(false);

  // =========================================================
  // Update Form When Editing
  // =========================================================
  useEffect(() => {
    setFormData({
      name: initialData?.name || "",
      slug: initialData?.slug || "",
      icon: initialData?.icon || "",
      short_description: initialData?.short_description || "",
      description: initialData?.description || "",
      image: null,
      banner_image: null,
      imagePreview: initialData?.image || "",
      bannerPreview: initialData?.banner_image || "",

      doctor_ids:
        initialData?.doctor_ids ||
        (initialData?.doctor_id ? [initialData.doctor_id] : []) ||
        [],

      phone: initialData?.phone || "",
      location: initialData?.location || "",
      timing: initialData?.timing || "",
      emergency_available: initialData?.emergency_available ?? false,
      appointment_available: initialData?.appointment_available ?? true,
      status: initialData?.status || "active",
      user_id: userId,
    });
  }, [initialData, userId]);

  // =========================================================
  // Close Doctor Dropdown Outside Click
  // =========================================================
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

  // =========================================================
  // Generate Slug
  // =========================================================
  const generateSlug = (value) => {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

  const handleNameChange = (e) => {
    const name = e.target.value;
    setFormData((prev) => ({
      ...prev,
      name,
      slug: generateSlug(name),
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // =========================================================
  // ✅ TOGGLE DOCTOR (MULTI SELECT) - renamed to doctor_ids
  // =========================================================
  const toggleDoctor = (doctor) => {
    setFormData((prev) => {
      const exists = prev.doctor_ids.some(
        (id) => String(id) === String(doctor.id)
      );

      return {
        ...prev,
        doctor_ids: exists
          ? prev.doctor_ids.filter(
              (id) => String(id) !== String(doctor.id)
            )
          : [...prev.doctor_ids, doctor.id],
      };
    });
  };

  // =========================================================
  // ✅ REMOVE DOCTOR BY ID
  // =========================================================
  const removeDoctor = (doctorId) => {
    setFormData((prev) => ({
      ...prev,
      doctor_ids: prev.doctor_ids.filter(
        (id) => String(id) !== String(doctorId)
      ),
    }));
  };

  // =========================================================
  // ✅ GET SELECTED DOCTOR OBJECTS
  // =========================================================
  const selectedDoctors = doctors.filter((doctor) =>
    formData.doctor_ids.some(
      (id) => String(id) === String(doctor.id)
    )
  );

  // =========================================================
  // Filter Doctors
  // =========================================================
  const filteredDoctors = doctors.filter((doctor) => {
    const search = doctorSearch.toLowerCase().trim();
    if (!search) return true;
    return (
      doctor.name?.toLowerCase().includes(search) ||
      doctor.specialization?.toLowerCase().includes(search) ||
      doctor.department_name?.toLowerCase().includes(search) ||
      doctor.department?.name?.toLowerCase().includes(search) ||
      doctor.departmentName?.toLowerCase().includes(search)
    );
  });

  const getDoctorDepartment = (doctor) => {
    return (
      doctor.department_name ||
      doctor.department?.name ||
      doctor.departmentName ||
      doctor.department?.title ||
      doctor.specialization ||
      "General"
    );
  };

  // =========================================================
  // Image Upload
  // =========================================================
  const handleImageChange = (e, type) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("Image size should be less than 5MB.");
      e.target.value = "";
      return;
    }

    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Only JPG, JPEG, PNG and WEBP images are allowed.");
      e.target.value = "";
      return;
    }

    const preview = URL.createObjectURL(file);

    if (type === "image") {
      setFormData((prev) => ({ ...prev, image: file, imagePreview: preview }));
    }
    if (type === "banner") {
      setFormData((prev) => ({
        ...prev,
        banner_image: file,
        bannerPreview: preview,
      }));
    }
  };

  const removeImage = (type) => {
    if (type === "image") {
      setFormData((prev) => ({ ...prev, image: null, imagePreview: "" }));
    }
    if (type === "banner") {
      setFormData((prev) => ({
        ...prev,
        banner_image: null,
        bannerPreview: "",
      }));
    }
  };

  // =========================================================
  // Submit
  // =========================================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const payload = new FormData();

      payload.append("name", formData.name);
      payload.append("slug", formData.slug);
      payload.append("icon", formData.icon);
      payload.append("short_description", formData.short_description);
      payload.append("description", formData.description);

      // ✅ DOCTOR IDS (renamed from head_doctor_ids)
      // Backend ke hisaab se adjust karein:
      payload.append(
        "doctor_ids",
        JSON.stringify(formData.doctor_ids)
      );

      // Option B: comma separated
      // payload.append("doctor_ids", formData.doctor_ids.join(","));

      // Option C: multiple entries (Laravel style)
      // formData.doctor_ids.forEach((id) => {
      //   payload.append("doctor_ids[]", id);
      // });

      payload.append("phone", formData.phone);
      payload.append("location", formData.location);
      payload.append("timing", formData.timing);
      payload.append(
        "emergency_available",
        formData.emergency_available ? "1" : "0"
      );
      payload.append(
        "appointment_available",
        formData.appointment_available ? "1" : "0"
      );
      payload.append("status", formData.status);
      payload.append("user_id", userId || "");

      if (formData.image instanceof File) {
        payload.append("image", formData.image);
      }
      if (formData.banner_image instanceof File) {
        payload.append("banner_image", formData.banner_image);
      }

    //   // ✅ Debug ke liye - ab ye uncommented rakhein
    //   console.log("=========== FORM DATA ===========");
    //   for (let [key, value] of payload.entries()) {
    //     console.log(key, "=>", value);
    //   }
    //   console.log("=================================");

      await onSubmit(payload);
    } catch (error) {
      console.error("Department submit error:", error);
    } finally {
      setLoading(false);
    }
  };

  // =========================================================
  // File Picker Component
  // =========================================================
  const FilePicker = ({ type, preview, label }) => {
    const isImage = type === "image";
    return (
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-gray-700">
          {label}
        </label>

        {preview ? (
          <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white">
            <img src={preview} alt={label} className="h-40 w-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">
              <button
                type="button"
                onClick={() => removeImage(type)}
                className="flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-red-600 shadow-lg transition hover:bg-red-50"
              >
                <FiX size={14} />
                Remove
              </button>
            </div>
          </div>
        ) : (
          <label className="flex min-h-[170px] cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white transition hover:border-[#0d3c59] hover:bg-[#0d3c59]/[0.02]">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0d3c59]/10 text-[#0d3c59]">
              <FiUploadCloud size={21} />
            </div>
            <span className="mb-1 text-sm font-semibold text-gray-700">
              Pick a file
            </span>
            <span className="text-xs text-gray-400">
              PNG, JPG, JPEG or WEBP
            </span>
            <span className="mt-1 text-[11px] text-gray-400">Maximum 5MB</span>
            <input
              type="file"
              accept="image/png,image/jpeg,image/jpg,image/webp"
              className="hidden"
              onChange={(e) =>
                handleImageChange(e, isImage ? "image" : "banner")
              }
            />
          </label>
        )}
      </div>
    );
  };

  // =========================================================
  // UI
  // =========================================================
  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full space-y-5">
      {/* BASIC INFORMATION */}
      <div>
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-gray-700">
              Department Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleNameChange}
              placeholder="Cardiology"
              required
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold text-gray-700">
              Slug *
            </label>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              placeholder="cardiology"
              required
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10"
            />
          </div>

          <div>
            <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-gray-700">
              <FiActivity size={13} />
              Department Icon
            </label>
            <div className="relative">
              <input
                type="text"
                name="icon"
                value={formData.icon}
                onChange={handleChange}
                placeholder="HeartPulse"
                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 pr-12 text-sm outline-none transition focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10"
              />
              <div className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md bg-[#0d3c59]/10 text-[#0d3c59]">
                <FiActivity size={17} />
              </div>
            </div>
            <p className="mt-1 text-[10px] text-gray-400">
              Example: HeartPulse, Brain, Stethoscope
            </p>
          </div>

          <div className="md:col-span-3">
            <label className="mb-1.5 block text-xs font-semibold text-gray-700">
              Short Description
            </label>
            <textarea
              name="short_description"
              rows={2}
              value={formData.short_description}
              onChange={handleChange}
              placeholder="Advanced cardiac care and treatment..."
              className="w-full resize-none rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10"
            />
          </div>

          <div className="md:col-span-3">
            <label className="mb-1.5 block text-xs font-semibold text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter complete department description..."
              className="w-full resize-none rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10"
            />
          </div>
        </div>
      </div>

      {/* IMAGES */}
      <div className="border-t border-gray-100 pt-5">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0d3c59]/10 text-[#0d3c59]">
            <FiImage size={16} />
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-800">
              Department Images
            </h3>
            <p className="text-xs text-gray-500">Upload department images</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <FilePicker
            type="image"
            preview={formData.imagePreview}
            label="Department Image"
          />
          <FilePicker
            type="banner"
            preview={formData.bannerPreview}
            label="Banner Image"
          />
        </div>
      </div>

      {/* CONTACT & DOCTOR */}
      <div className="border-t border-gray-100 pt-5">
        <div className="grid gap-4 md:grid-cols-2">
          {/* =================================================
              DOCTORS (MULTI SELECT)
          ================================================= */}
          <div className="relative md:col-span-2" ref={doctorDropdownRef}>
            <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-gray-700">
              <FiUser size={13} />
              Doctors
              {selectedDoctors.length > 0 && (
                <span className="ml-1 rounded-full bg-[#0d3c59]/10 px-2 py-0.5 text-[10px] font-semibold text-[#0d3c59]">
                  {selectedDoctors.length} selected
                </span>
              )}
            </label>

            {/* ✅ SELECTED DOCTORS CHIPS */}
            {selectedDoctors.length > 0 && (
              <div className="mb-2 flex flex-wrap gap-1.5">
                {selectedDoctors.map((doctor) => (
                  <span
                    key={doctor.id}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#0d3c59]/20 bg-[#0d3c59]/5 py-1 pl-2.5 pr-1.5 text-xs font-medium text-[#0d3c59]"
                  >
                    <FiUser size={11} />
                    {doctor.name}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeDoctor(doctor.id);
                      }}
                      className="flex h-4 w-4 items-center justify-center rounded-full bg-[#0d3c59]/10 transition hover:bg-[#0d3c59]/20"
                    >
                      <FiX size={10} />
                    </button>
                  </span>
                ))}
              </div>
            )}

            {/* Dropdown Trigger */}
            <button
              type="button"
              disabled={doctorsLoading}
              onClick={() => setDoctorDropdownOpen((prev) => !prev)}
              className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition hover:border-[#0d3c59] focus:border-[#0d3c59] focus:ring-2 focus:ring-[#0d3c59]/10 disabled:cursor-not-allowed disabled:bg-gray-100"
            >
              <div className="flex min-w-0 items-center gap-2">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0d3c59]/10 text-[#0d3c59]">
                  <FiUser size={14} />
                </div>
                <span className="truncate text-gray-400">
                  {doctorsLoading
                    ? "Loading doctors..."
                    : selectedDoctors.length > 0
                    ? `${selectedDoctors.length} doctor(s) selected`
                    : "Select Doctors"}
                </span>
              </div>
              <FiChevronDown
                size={17}
                className={`shrink-0 text-gray-400 transition-transform ${
                  doctorDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown */}
            {doctorDropdownOpen && !doctorsLoading && (
              <div className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl">
                <div className="border-b border-gray-100 p-2">
                  <div className="relative">
                    <FiSearch
                      size={15}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="text"
                      value={doctorSearch}
                      onChange={(e) => setDoctorSearch(e.target.value)}
                      placeholder="Search doctor..."
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-9 pr-3 text-xs outline-none transition focus:border-[#0d3c59] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="max-h-64 overflow-y-auto p-1">
                  {filteredDoctors.length > 0 ? (
                    filteredDoctors.map((doctor) => {
                      // ✅ MULTI-SELECT CHECK
                      const isSelected = formData.doctor_ids.some(
                        (id) => String(id) === String(doctor.id)
                      );
                      const departmentName = getDoctorDepartment(doctor);

                      return (
                        <button
                          key={doctor.id}
                          type="button"
                          onClick={() => toggleDoctor(doctor)}
                          className={`flex w-full items-center justify-between gap-4 rounded-lg px-3 py-2.5 text-left transition ${
                            isSelected ? "bg-[#0d3c59]/5" : "hover:bg-gray-50"
                          }`}
                        >
                          <div className="flex min-w-0 items-center gap-3">
                            {/* ✅ CHECKBOX STYLE ICON */}
                            <div
                              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition ${
                                isSelected
                                  ? "border-[#0d3c59] bg-[#0d3c59]"
                                  : "border-gray-300 bg-white"
                              }`}
                            >
                              {isSelected && (
                                <FiCheck size={12} className="text-white" />
                              )}
                            </div>

                            <div
                              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                                isSelected
                                  ? "bg-[#0d3c59] text-white"
                                  : "bg-gray-100 text-[#0d3c59]"
                              }`}
                            >
                              <FiUser size={16} />
                            </div>

                            <div className="min-w-0">
                              <p
                                className={`truncate text-sm font-semibold ${
                                  isSelected ? "text-[#0d3c59]" : "text-gray-700"
                                }`}
                              >
                                {doctor.name}
                              </p>
                              {doctor.specialization && (
                                <p className="truncate text-[11px] text-gray-400">
                                  {doctor.specialization}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="flex shrink-0 items-center gap-2">
                            <span
                              className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${
                                isSelected
                                  ? "bg-[#0d3c59]/10 text-[#0d3c59]"
                                  : "bg-gray-100 text-gray-500"
                              }`}
                            >
                              {departmentName}
                            </span>
                          </div>
                        </button>
                      );
                    })
                  ) : (
                    <div className="px-4 py-8 text-center">
                      <FiUser
                        size={25}
                        className="mx-auto mb-2 text-gray-300"
                      />
                      <p className="text-xs font-medium text-gray-500">
                        No doctors found
                      </p>
                      <p className="mt-1 text-[11px] text-gray-400">
                        Try another search
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="flex justify-end gap-2 border-t border-gray-100 pt-4">
        <button
          type="button"
          onClick={onCancel}
          disabled={loading}
          className="rounded-lg border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-600 transition hover:bg-gray-50 disabled:opacity-50"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={loading}
          className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#0d3c59] to-[#075985] px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <FiSave size={15} />
          {loading
            ? "Saving..."
            : initialData
            ? "Update Department"
            : "Save Department"}
        </button>
      </div>
    </form>
  );
};

export default DepartmentForm;