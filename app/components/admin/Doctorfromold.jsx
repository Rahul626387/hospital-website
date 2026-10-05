// "use client";

// import React, { useRef, useState } from "react";
// import {
//   FiSave,
//   FiImage,
//   FiFileText,
//   FiTag,
//   FiGlobe,
//   FiEye,
//   FiUploadCloud,
//   FiX,
//   FiPlus,
//   FiChevronDown,
//   FiUser,
//   FiPhone,
//   FiMail,
//   FiAward,
//   FiBriefcase,
//   FiCheckCircle,
//   FiAlignLeft,
// } from "react-icons/fi";
// import useSWR from "swr";
// import ApiService from "../../src/services/Apiservices";

// const DoctorForm = ({ onSubmit, onClose, userId }) => {
//   const fileInputRef = useRef(null);

//   // =============================================================
//   // FORM DATA
//   // =============================================================

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     contact_no: "",
//     qualification: "",
//     experience_years: "",
//     department_id: "",
//     specialty_id: "",
//     created_by: userId || "",

//     // Web fields
//     web_heading: "",
//     web_bio: "",
//     web_experience: "",
//     web_specilization: "",
//     web_certificat: "",
//     web_awards: "",

//     // Image
//     image_url: null,

//     // Toggles
//     available: 1, // 1 = Available, 0 = Not Available
//     status: 1,    // 1 = Active, 0 = Inactive
//   });

//   const [imagePreview, setImagePreview] = useState("");

//   // =============================================================
//   // FETCH DEPARTMENTS + SPECIALTIES
//   // =============================================================

//   const { data: deptData } = useSWR("departments", ApiService.get);
//   const { data: specData } = useSWR("specialties", ApiService.get);

//   const departments = deptData?.data || [];
//   const specialties = specData?.data || [];

//   // =============================================================
//   // NORMAL INPUT CHANGE
//   // =============================================================

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // =============================================================
//   // IMAGE UPLOAD
//   // =============================================================

//   const handleImageChange = (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     setFormData((prev) => ({
//       ...prev,
//       image_url: file,
//     }));

//     setImagePreview(URL.createObjectURL(file));
//   };

//   // =============================================================
//   // REMOVE IMAGE
//   // =============================================================

//   const removeImage = () => {
//     setFormData((prev) => ({
//       ...prev,
//       image_url: null,
//     }));

//     if (imagePreview) {
//       URL.revokeObjectURL(imagePreview);
//     }

//     setImagePreview("");

//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//     }
//   };

//   // =============================================================
//   // TOGGLES
//   // =============================================================

//   const toggleAvailable = () => {
//     setFormData((prev) => ({
//       ...prev,
//       available: prev.available === 1 ? 0 : 1,
//     }));
//   };

//   const toggleStatus = () => {
//     setFormData((prev) => ({
//       ...prev,
//       status: prev.status === 1 ? 0 : 1,
//     }));
//   };

//   // =============================================================
//   // SUBMIT
//   // =============================================================

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const finalData = { ...formData };

//     console.log("Doctor Data:", finalData);

//     onSubmit(finalData);
//   };

//   // =============================================================
//   // RETURN
//   // =============================================================

//   return (
//     <form onSubmit={handleSubmit} className="w-full">
//       <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_290px]">

//         {/* =====================================================
//             LEFT SIDE
//         ===================================================== */}

//         <div className="min-w-0 space-y-4">

//           {/* =====================================================
//               BASIC INFO
//           ===================================================== */}

//           <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">

//             <SectionTitle
//               icon={FiUser}
//               title="Basic Information"
//               description="Doctor's personal details."
//             />

//             <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">

//               {/* Name */}

//               <div className="md:col-span-2">

//                 <label className="mb-1 block text-[10px] font-semibold text-gray-600">
//                   Doctor Name *
//                 </label>

//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Dr. John Doe"
//                   required
//                   className="
//                     h-9
//                     w-full
//                     rounded-lg
//                     border
//                     border-gray-200
//                     bg-gray-50/50
//                     px-3
//                     text-xs
//                     outline-none
//                     transition
//                     focus:border-[#087f8c]
//                     focus:bg-white
//                     focus:ring-2
//                     focus:ring-[#087f8c]/10
//                   "
//                 />

//               </div>

//               {/* Email */}

//               <div>

//                 <label className="mb-1 block text-[10px] font-semibold text-gray-600">
//                   Email
//                 </label>

//                 <div className="relative">

//                   <FiMail
//                     size={12}
//                     className="pointer-events-none absolute left-3 top-3 text-gray-400"
//                   />

//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="doctor@example.com"
//                     className="
//                       h-9
//                       w-full
//                       rounded-lg
//                       border
//                       border-gray-200
//                       bg-gray-50/50
//                       pl-8
//                       pr-3
//                       text-xs
//                       outline-none
//                       transition
//                       focus:border-[#087f8c]
//                       focus:bg-white
//                       focus:ring-2
//                       focus:ring-[#087f8c]/10
//                     "
//                   />

//                 </div>

//               </div>

//               {/* Contact */}

//               <div>

//                 <label className="mb-1 block text-[10px] font-semibold text-gray-600">
//                   Contact Number
//                 </label>

//                 <div className="relative">

//                   <FiPhone
//                     size={12}
//                     className="pointer-events-none absolute left-3 top-3 text-gray-400"
//                   />

//                   <input
//                     type="text"
//                     name="contact_no"
//                     value={formData.contact_no}
//                     onChange={handleChange}
//                     placeholder="+91 9876543210"
//                     className="
//                       h-9
//                       w-full
//                       rounded-lg
//                       border
//                       border-gray-200
//                       bg-gray-50/50
//                       pl-8
//                       pr-3
//                       text-xs
//                       outline-none
//                       transition
//                       focus:border-[#087f8c]
//                       focus:bg-white
//                       focus:ring-2
//                       focus:ring-[#087f8c]/10
//                     "
//                   />

//                 </div>

//               </div>

//               {/* Qualification */}

//               <div>

//                 <label className="mb-1 block text-[10px] font-semibold text-gray-600">
//                   Qualification
//                 </label>

//                 <input
//                   type="text"
//                   name="qualification"
//                   value={formData.qualification}
//                   onChange={handleChange}
//                   placeholder="MBBS, MD"
//                   className="
//                     h-9
//                     w-full
//                     rounded-lg
//                     border
//                     border-gray-200
//                     bg-gray-50/50
//                     px-3
//                     text-xs
//                     outline-none
//                     transition
//                     focus:border-[#087f8c]
//                     focus:bg-white
//                     focus:ring-2
//                     focus:ring-[#087f8c]/10
//                   "
//                 />

//               </div>

//               {/* Experience */}

//               <div>

//                 <label className="mb-1 block text-[10px] font-semibold text-gray-600">
//                   Experience (Years)
//                 </label>

//                 <input
//                   type="number"
//                   name="experience_years"
//                   value={formData.experience_years}
//                   onChange={handleChange}
//                   placeholder="5"
//                   className="
//                     h-9
//                     w-full
//                     rounded-lg
//                     border
//                     border-gray-200
//                     bg-gray-50/50
//                     px-3
//                     text-xs
//                     outline-none
//                     transition
//                     focus:border-[#087f8c]
//                     focus:bg-white
//                     focus:ring-2
//                     focus:ring-[#087f8c]/10
//                   "
//                 />

//               </div>

//             </div>

//           </div>

//           {/* =====================================================
//               DEPARTMENT + SPECIALTY
//           ===================================================== */}

//           <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">

//             <SectionTitle
//               icon={FiBriefcase}
//               title="Department & Specialty"
//               description="Assign doctor to a department."
//             />

//             <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">

//               {/* Department */}

//               <div>

//                 <label className="mb-1 block text-[10px] font-semibold text-gray-600">
//                   Department *
//                 </label>

//                 <div className="relative">

//                   <select
//                     name="department_id"
//                     value={formData.department_id}
//                     onChange={handleChange}
//                     required
//                     className="
//                       h-9
//                       w-full
//                       appearance-none
//                       rounded-lg
//                       border
//                       border-gray-200
//                       bg-gray-50/50
//                       px-3
//                       pr-8
//                       text-xs
//                       text-gray-700
//                       outline-none
//                       transition
//                       focus:border-[#087f8c]
//                       focus:bg-white
//                       focus:ring-2
//                       focus:ring-[#087f8c]/10
//                     "
//                   >

//                     <option value="">Select department</option>

//                     {departments
//                       ?.filter((d) => Number(d.status) === 1)
//                       .map((dept) => (
//                         <option key={dept.id} value={dept.id}>
//                           {dept.name}
//                         </option>
//                       ))}

//                   </select>

//                   <FiChevronDown
//                     size={13}
//                     className="pointer-events-none absolute right-3 top-3 text-gray-400"
//                   />

//                 </div>

//               </div>

//               {/* Specialty */}

//               <div>

//                 <label className="mb-1 block text-[10px] font-semibold text-gray-600">
//                   Specialty
//                 </label>

//                 <div className="relative">

//                   <select
//                     name="specialty_id"
//                     value={formData.specialty_id}
//                     onChange={handleChange}
//                     className="
//                       h-9
//                       w-full
//                       appearance-none
//                       rounded-lg
//                       border
//                       border-gray-200
//                       bg-gray-50/50
//                       px-3
//                       pr-8
//                       text-xs
//                       text-gray-700
//                       outline-none
//                       transition
//                       focus:border-[#087f8c]
//                       focus:bg-white
//                       focus:ring-2
//                       focus:ring-[#087f8c]/10
//                     "
//                   >

//                     <option value="">Select specialty</option>

//                     {specialties
//                       ?.filter((s) => Number(s.status) === 1)
//                       .map((spec) => (
//                         <option key={spec.id} value={spec.id}>
//                           {spec.name}
//                         </option>
//                       ))}

//                   </select>

//                   <FiChevronDown
//                     size={13}
//                     className="pointer-events-none absolute right-3 top-3 text-gray-400"
//                   />

//                 </div>

//               </div>

//             </div>

//           </div>

//           {/* =====================================================
//               WEB PROFILE
//           ===================================================== */}

//           <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">

//             <SectionTitle
//               icon={FiGlobe}
//               title="Web Profile"
//               description="Details shown on the website."
//             />

//             <div className="mt-3 space-y-3">

//               {/* Web Heading */}

//               <div>

//                 <label className="mb-1 block text-[10px] font-semibold text-gray-600">
//                   Web Heading
//                 </label>

//                 <input
//                   type="text"
//                   name="web_heading"
//                   value={formData.web_heading}
//                   onChange={handleChange}
//                   maxLength={80}
//                   placeholder="Senior Cardiologist"
//                   className="
//                     h-9
//                     w-full
//                     rounded-lg
//                     border
//                     border-gray-200
//                     bg-gray-50/50
//                     px-3
//                     text-xs
//                     outline-none
//                     transition
//                     focus:border-[#087f8c]
//                     focus:bg-white
//                     focus:ring-2
//                     focus:ring-[#087f8c]/10
//                   "
//                 />

//                 <div className="mt-1 text-right text-[9px] text-gray-400">
//                   {formData.web_heading.length}/80
//                 </div>

//               </div>

//               {/* Web Specialization */}

//               <div>

//                 <label className="mb-1 block text-[10px] font-semibold text-gray-600">
//                   Web Specialization
//                 </label>

//                 <input
//                   type="text"
//                   name="web_specilization"
//                   value={formData.web_specilization}
//                   onChange={handleChange}
//                   placeholder="Cardiology, Heart Surgery"
//                   className="
//                     h-9
//                     w-full
//                     rounded-lg
//                     border
//                     border-gray-200
//                     bg-gray-50/50
//                     px-3
//                     text-xs
//                     outline-none
//                     transition
//                     focus:border-[#087f8c]
//                     focus:bg-white
//                     focus:ring-2
//                     focus:ring-[#087f8c]/10
//                   "
//                 />

//               </div>

//               {/* Web Bio */}

//               <div>

//                 <label className="mb-1 block text-[10px] font-semibold text-gray-600">
//                   Web Bio
//                 </label>

//                 <textarea
//                   name="web_bio"
//                   value={formData.web_bio}
//                   onChange={handleChange}
//                   maxLength={400}
//                   rows={4}
//                   placeholder="Write a short biography..."
//                   className="
//                     w-full
//                     resize-none
//                     rounded-lg
//                     border
//                     border-gray-200
//                     bg-gray-50/50
//                     px-3
//                     py-2
//                     text-xs
//                     leading-5
//                     outline-none
//                     transition
//                     focus:border-[#087f8c]
//                     focus:bg-white
//                     focus:ring-2
//                     focus:ring-[#087f8c]/10
//                   "
//                 />

//                 <div className="mt-1 text-right text-[9px] text-gray-400">
//                   {formData.web_bio.length}/400
//                 </div>

//               </div>

//               {/* Web Experience */}

//               <div>

//                 <label className="mb-1 block text-[10px] font-semibold text-gray-600">
//                   Web Experience
//                 </label>

//                 <textarea
//                   name="web_experience"
//                   value={formData.web_experience}
//                   onChange={handleChange}
//                   rows={3}
//                   placeholder="Describe experience for website..."
//                   className="
//                     w-full
//                     resize-none
//                     rounded-lg
//                     border
//                     border-gray-200
//                     bg-gray-50/50
//                     px-3
//                     py-2
//                     text-xs
//                     leading-5
//                     outline-none
//                     transition
//                     focus:border-[#087f8c]
//                     focus:bg-white
//                     focus:ring-2
//                     focus:ring-[#087f8c]/10
//                   "
//                 />

//               </div>

//               {/* Web Certificates */}

//               <div>

//                 <label className="mb-1 block text-[10px] font-semibold text-gray-600">
//                   Web Certificates
//                 </label>

//                 <textarea
//                   name="web_certificat"
//                   value={formData.web_certificat}
//                   onChange={handleChange}
//                   rows={3}
//                   placeholder="List certifications..."
//                   className="
//                     w-full
//                     resize-none
//                     rounded-lg
//                     border
//                     border-gray-200
//                     bg-gray-50/50
//                     px-3
//                     py-2
//                     text-xs
//                     leading-5
//                     outline-none
//                     transition
//                     focus:border-[#087f8c]
//                     focus:bg-white
//                     focus:ring-2
//                     focus:ring-[#087f8c]/10
//                   "
//                 />

//               </div>

//               {/* Web Awards */}

//               <div>

//                 <label className="mb-1 block text-[10px] font-semibold text-gray-600">
//                   Web Awards
//                 </label>

//                 <textarea
//                   name="web_awards"
//                   value={formData.web_awards}
//                   onChange={handleChange}
//                   rows={3}
//                   placeholder="List awards..."
//                   className="
//                     w-full
//                     resize-none
//                     rounded-lg
//                     border
//                     border-gray-200
//                     bg-gray-50/50
//                     px-3
//                     py-2
//                     text-xs
//                     leading-5
//                     outline-none
//                     transition
//                     focus:border-[#087f8c]
//                     focus:bg-white
//                     focus:ring-2
//                     focus:ring-[#087f8c]/10
//                   "
//                 />

//               </div>

//             </div>

//           </div>

//         </div>

//         {/* =====================================================
//             RIGHT SIDE
//         ===================================================== */}

//         <div className="space-y-4 xl:sticky xl:top-4 xl:self-start">

//           {/* =====================================================
//               PUBLISH
//           ===================================================== */}

//           <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

//             <div
//               className="
//                 border-b
//                 border-gray-100
//                 bg-gradient-to-r
//                 from-[#087f8c]/5
//                 to-[#075985]/5
//                 px-4
//                 py-3
//               "
//             >

//               <div className="flex items-center justify-between">

//                 <div>

//                   <h3 className="text-xs font-bold text-gray-800">
//                     Publish
//                   </h3>

//                   <p className="mt-0.5 text-[9px] text-gray-400">
//                     Manage doctor visibility
//                   </p>

//                 </div>

//                 <div
//                   className="
//                     flex
//                     h-7
//                     w-7
//                     items-center
//                     justify-center
//                     rounded-lg
//                     bg-white
//                     text-[#087f8c]
//                     shadow-sm
//                   "
//                 >
//                   <FiEye size={13} />
//                 </div>

//               </div>

//             </div>

//             <div className="space-y-3 p-4">

//               {/* STATUS TOGGLE */}

//               <div>

//                 <label className="mb-1 block text-[10px] font-semibold text-gray-600">
//                   Status
//                 </label>

//                 <div
//                   className="
//                     rounded-lg
//                     border
//                     border-gray-200
//                     bg-gray-50/50
//                     p-3
//                   "
//                 >

//                   <div className="flex items-center justify-between gap-3">

//                     <div className="min-w-0">

//                       <div className="flex items-center gap-1.5">

//                         <span className="text-[10px] font-semibold text-gray-700">
//                           Active
//                         </span>

//                         {formData.status === 1 && (
//                           <span
//                             className="
//                               rounded-full
//                               bg-[#087f8c]/10
//                               px-1.5
//                               py-0.5
//                               text-[8px]
//                               font-semibold
//                               text-[#087f8c]
//                             "
//                           >
//                             Active
//                           </span>
//                         )}

//                       </div>

//                       <p className="mt-0.5 text-[9px] text-gray-400">
//                         Show this doctor publicly
//                       </p>

//                     </div>

//                     <button
//                       type="button"
//                       onClick={toggleStatus}
//                       aria-label="Toggle status"
//                       aria-pressed={formData.status === 1}
//                       className={`
//                         relative
//                         h-5
//                         w-9
//                         shrink-0
//                         rounded-full
//                         transition
//                         ${
//                           formData.status === 1
//                             ? "bg-[#087f8c]"
//                             : "bg-gray-300"
//                         }
//                       `}
//                     >

//                       <span
//                         className={`
//                           absolute
//                           top-0.5
//                           h-4
//                           w-4
//                           rounded-full
//                           bg-white
//                           shadow-sm
//                           transition
//                           ${
//                             formData.status === 1
//                               ? "left-[18px]"
//                               : "left-0.5"
//                           }
//                         `}
//                       />

//                     </button>

//                   </div>

//                 </div>

//               </div>

//               {/* AVAILABLE TOGGLE */}

//               <div>

//                 <label className="mb-1 block text-[10px] font-semibold text-gray-600">
//                   Availability
//                 </label>

//                 <div
//                   className="
//                     rounded-lg
//                     border
//                     border-gray-200
//                     bg-gray-50/50
//                     p-3
//                   "
//                 >

//                   <div className="flex items-center justify-between gap-3">

//                     <div className="min-w-0">

//                       <div className="flex items-center gap-1.5">

//                         <span className="text-[10px] font-semibold text-gray-700">
//                           Available
//                         </span>

//                         {formData.available === 1 && (
//                           <span
//                             className="
//                               rounded-full
//                               bg-green-500/10
//                               px-1.5
//                               py-0.5
//                               text-[8px]
//                               font-semibold
//                               text-green-600
//                             "
//                           >
//                             Yes
//                           </span>
//                         )}

//                       </div>

//                       <p className="mt-0.5 text-[9px] text-gray-400">
//                         Accepting appointments
//                       </p>

//                     </div>

//                     <button
//                       type="button"
//                       onClick={toggleAvailable}
//                       aria-label="Toggle availability"
//                       aria-pressed={formData.available === 1}
//                       className={`
//                         relative
//                         h-5
//                         w-9
//                         shrink-0
//                         rounded-full
//                         transition
//                         ${
//                           formData.available === 1
//                             ? "bg-green-500"
//                             : "bg-gray-300"
//                         }
//                       `}
//                     >

//                       <span
//                         className={`
//                           absolute
//                           top-0.5
//                           h-4
//                           w-4
//                           rounded-full
//                           bg-white
//                           shadow-sm
//                           transition
//                           ${
//                             formData.available === 1
//                               ? "left-[18px]"
//                               : "left-0.5"
//                           }
//                         `}
//                       />

//                     </button>

//                   </div>

//                 </div>

//               </div>

//             </div>

//             {/* BUTTONS */}

//             <div className="border-t border-gray-100 bg-gray-50/50 p-3">

//               <button
//                 type="submit"
//                 className="
//                   flex
//                   h-9
//                   w-full
//                   items-center
//                   justify-center
//                   gap-2
//                   rounded-lg
//                   bg-gradient-to-r
//                   from-[#087f8c]
//                   to-[#075985]
//                   text-xs
//                   font-semibold
//                   text-white
//                   shadow-sm
//                   transition
//                   hover:-translate-y-0.5
//                   hover:shadow-md
//                   active:translate-y-0
//                 "
//               >

//                 <FiSave size={13} />

//                 Save Doctor

//               </button>

//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="
//                   mt-2
//                   flex
//                   h-8
//                   w-full
//                   items-center
//                   justify-center
//                   gap-2
//                   rounded-lg
//                   border
//                   border-gray-200
//                   bg-white
//                   text-[10px]
//                   font-medium
//                   text-gray-500
//                   transition
//                   hover:border-gray-300
//                   hover:text-gray-700
//                 "
//               >

//                 <FiX size={12} />

//                 Cancel

//               </button>

//             </div>

//           </div>

//           {/* =====================================================
//               DOCTOR IMAGE
//           ===================================================== */}

//           <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">

//             <SectionTitle
//               icon={FiImage}
//               title="Doctor Image"
//               description="Recommended 400 × 400 px"
//             />

//             <label className="mt-3 block cursor-pointer">

//               {imagePreview ? (

//                 <div className="relative overflow-hidden rounded-lg border border-gray-200">

//                   <img
//                     src={imagePreview}
//                     alt="Doctor"
//                     className="h-36 w-full object-cover"
//                   />

//                   <button
//                     type="button"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       e.stopPropagation();
//                       removeImage();
//                     }}
//                     className="
//                       absolute
//                       right-2
//                       top-2
//                       flex
//                       h-6
//                       w-6
//                       items-center
//                       justify-center
//                       rounded-full
//                       bg-black/60
//                       text-white
//                       transition
//                       hover:bg-red-500
//                     "
//                   >
//                     <FiX size={12} />
//                   </button>

//                 </div>

//               ) : (

//                 <div
//                   className="
//                     flex
//                     h-32
//                     flex-col
//                     items-center
//                     justify-center
//                     rounded-lg
//                     border
//                     border-dashed
//                     border-gray-200
//                     bg-gray-50/70
//                     transition
//                     hover:border-[#087f8c]/40
//                     hover:bg-[#087f8c]/[0.03]
//                   "
//                 >

//                   <div
//                     className="
//                       mb-2
//                       flex
//                       h-9
//                       w-9
//                       items-center
//                       justify-center
//                       rounded-lg
//                       bg-white
//                       text-[#087f8c]
//                       shadow-sm
//                     "
//                   >
//                     <FiUploadCloud size={18} />
//                   </div>

//                   <p className="text-[10px] font-semibold text-gray-600">
//                     Click to upload
//                   </p>

//                   <p className="mt-0.5 text-[9px] text-gray-400">
//                     PNG, JPG, WEBP
//                   </p>

//                 </div>

//               )}

//               <input
//                 ref={fileInputRef}
//                 type="file"
//                 accept="image/png,image/jpeg,image/webp"
//                 onChange={handleImageChange}
//                 className="hidden"
//               />

//             </label>

//           </div>

//         </div>

//       </div>
//     </form>
//   );
// };

// // =============================================================
// // SECTION TITLE
// // =============================================================

// const SectionTitle = ({ icon: Icon, title, description }) => {
//   return (
//     <div className="flex items-center gap-2.5">

//       <div
//         className="
//           flex
//           h-7
//           w-7
//           shrink-0
//           items-center
//           justify-center
//           rounded-lg
//           bg-[#087f8c]/10
//           text-[#087f8c]
//         "
//       >
//         <Icon size={13} />
//       </div>

//       <div>

//         <h3 className="text-xs font-bold text-gray-800">
//           {title}
//         </h3>

//         {description && (
//           <p className="text-[9px] text-gray-400">
//             {description}
//           </p>
//         )}

//       </div>

//     </div>
//   );
// };

// export default DoctorForm;


// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import {
//   FiSave,
//   FiImage,
//   FiGlobe,
//   FiEye,
//   FiUploadCloud,
//   FiX,
//   FiPlus,
//   FiChevronDown,
//   FiUser,
//   FiPhone,
//   FiMail,
//   FiAward,
//   FiBriefcase,
//   FiCheckCircle,
//   FiTrash2,
//   FiFileText,
//   FiBookOpen,
//   FiShield,
//   FiExternalLink,
//   FiStar,
// } from "react-icons/fi";
// import useSWR from "swr";
// import ApiService from "../../src/services/Apiservices";

// const DoctorForm = ({
//   onSubmit,
//   onClose,
//   userId,
//   initialData = null,
// }) => {
//   const fileInputRef = useRef(null);

//   /* =========================================================
//      FORM DATA
//   ========================================================= */

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     contact_no: "",
//     qualification: "",
//     experience_years: "",
//     department_id: "",
//     specialty_id: "",
//     created_by: userId || "",

//     web_heading: "",
//     web_bio: "",
//     web_specilization: [],
//     web_certificat: [],
//     web_awards: [],

//     image_url: null,

//     available: 1,
//     status: 1,
//   });

//   const [imagePreview, setImagePreview] = useState("");

//   /* =========================================================
//      FETCH DEPARTMENT + SPECIALTY
//   ========================================================= */

//   const { data: deptData } = useSWR(
//     "departments",
//     ApiService.get
//   );

//   const { data: specData } = useSWR(
//     "specialties",
//     ApiService.get
//   );

//   const departments = deptData?.data || [];
//   const specialties = specData?.data || [];

//   /* =========================================================
//      EDIT DATA
//   ========================================================= */

//   useEffect(() => {
//     if (!initialData) return;

//     setFormData({
//       name: initialData.name || "",
//       email: initialData.email || "",
//       contact_no: initialData.contact_no || "",
//       qualification: initialData.qualification || "",
//       experience_years:
//         initialData.experience_years ?? "",
//       department_id:
//         initialData.department_id ?? "",
//       specialty_id:
//         initialData.specialty_id ?? "",
//       created_by:
//         initialData.created_by || userId || "",

//       web_heading:
//         initialData.web_heading || "",

//       web_bio:
//         initialData.web_bio || "",

//       web_specilization:
//         Array.isArray(initialData.web_specilization)
//           ? initialData.web_specilization
//           : [],

//       web_certificat:
//         Array.isArray(initialData.web_certificat)
//           ? initialData.web_certificat
//           : [],

//       web_awards:
//         Array.isArray(initialData.web_awards)
//           ? initialData.web_awards
//           : [],

//       image_url:
//         initialData.image_url || null,

//       available:
//         initialData.available ?? 1,

//       status:
//         initialData.status ?? 1,
//     });

//     if (initialData.image_url) {
//       setImagePreview(initialData.image_url);
//     }
//   }, [initialData, userId]);

//   /* =========================================================
//      NORMAL INPUT
//   ========================================================= */

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   /* =========================================================
//      IMAGE
//   ========================================================= */

//   const handleImageChange = (e) => {
//     const file = e.target.files?.[0];

//     if (!file) return;

//     if (imagePreview?.startsWith("blob:")) {
//       URL.revokeObjectURL(imagePreview);
//     }

//     setFormData((prev) => ({
//       ...prev,
//       image_url: file,
//     }));

//     setImagePreview(URL.createObjectURL(file));
//   };

//   const removeImage = () => {
//     if (imagePreview?.startsWith("blob:")) {
//       URL.revokeObjectURL(imagePreview);
//     }

//     setFormData((prev) => ({
//       ...prev,
//       image_url: null,
//     }));

//     setImagePreview("");

//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//     }
//   };

//   /* =========================================================
//      SPECIALIZATION
//   ========================================================= */

//   const addSpecialization = () => {
//     setFormData((prev) => ({
//       ...prev,
//       web_specilization: [
//         ...prev.web_specilization,
//         "",
//       ],
//     }));
//   };

//   const updateSpecialization = (index, value) => {
//     setFormData((prev) => {
//       const items = [...prev.web_specilization];

//       items[index] = value;

//       return {
//         ...prev,
//         web_specilization: items,
//       };
//     });
//   };

//   const removeSpecialization = (index) => {
//     setFormData((prev) => ({
//       ...prev,
//       web_specilization:
//         prev.web_specilization.filter(
//           (_, i) => i !== index
//         ),
//     }));
//   };

//   /* =========================================================
//      CERTIFICATE
//   ========================================================= */

//   const addCertificate = () => {
//     setFormData((prev) => ({
//       ...prev,
//       web_certificat: [
//         ...prev.web_certificat,
//         {
//           title: "",
//           organization: "",
//           year: "",
//           file_url: "",
//         },
//       ],
//     }));
//   };

//   const updateCertificate = (
//     index,
//     field,
//     value
//   ) => {
//     setFormData((prev) => {
//       const items = [...prev.web_certificat];

//       items[index] = {
//         ...items[index],
//         [field]: value,
//       };

//       return {
//         ...prev,
//         web_certificat: items,
//       };
//     });
//   };

//   const removeCertificate = (index) => {
//     setFormData((prev) => ({
//       ...prev,
//       web_certificat:
//         prev.web_certificat.filter(
//           (_, i) => i !== index
//         ),
//     }));
//   };

//   /* =========================================================
//      AWARDS
//   ========================================================= */

//   const addAward = () => {
//     setFormData((prev) => ({
//       ...prev,
//       web_awards: [
//         ...prev.web_awards,
//         {
//           title: "",
//           organization: "",
//           year: "",
//         },
//       ],
//     }));
//   };

//   const updateAward = (
//     index,
//     field,
//     value
//   ) => {
//     setFormData((prev) => {
//       const items = [...prev.web_awards];

//       items[index] = {
//         ...items[index],
//         [field]: value,
//       };

//       return {
//         ...prev,
//         web_awards: items,
//       };
//     });
//   };

//   const removeAward = (index) => {
//     setFormData((prev) => ({
//       ...prev,
//       web_awards:
//         prev.web_awards.filter(
//           (_, i) => i !== index
//         ),
//     }));
//   };

//   /* =========================================================
//      TOGGLES
//   ========================================================= */

//   const toggleAvailable = () => {
//     setFormData((prev) => ({
//       ...prev,
//       available:
//         prev.available === 1 ? 0 : 1,
//     }));
//   };

//   const toggleStatus = () => {
//     setFormData((prev) => ({
//       ...prev,
//       status:
//         prev.status === 1 ? 0 : 1,
//     }));
//   };

//   /* =========================================================
//      SUBMIT
//   ========================================================= */

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const finalData = {
//       ...formData,

//       experience_years:
//         formData.experience_years
//           ? Number(formData.experience_years)
//           : null,

//       department_id:
//         formData.department_id
//           ? Number(formData.department_id)
//           : null,

//       specialty_id:
//         formData.specialty_id
//           ? Number(formData.specialty_id)
//           : null,

//       created_by:
//         formData.created_by
//           ? Number(formData.created_by)
//           : null,

//       web_specilization:
//         formData.web_specilization
//           .map((item) => item.trim())
//           .filter(Boolean),

//       web_certificat:
//         formData.web_certificat.filter(
//           (item) =>
//             item.title?.trim() ||
//             item.organization?.trim()
//         ),

//       web_awards:
//         formData.web_awards.filter(
//           (item) =>
//             item.title?.trim() ||
//             item.organization?.trim()
//         ),
//     };

//     console.log("Doctor Data:", finalData);

//     onSubmit(finalData);
//   };

//   /* =========================================================
//      RETURN
//   ========================================================= */

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="w-full"
//     >
//       <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_300px]">

//         {/* =====================================================
//             LEFT
//         ===================================================== */}

//         <div className="min-w-0 space-y-4">

//           {/* ===================================================
//               BASIC INFORMATION
//           =================================================== */}

//           <FormCard>
//             <SectionTitle
//               icon={FiUser}
//               title="Basic Information"
//               description="Doctor's personal and professional details."
//               color="blue"
//             />

//             <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">

//               <InputField
//                 label="Doctor Name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Dr. Rajesh Sharma"
//                 required
//                 icon={FiUser}
//                 full
//               />

//               <InputField
//                 label="Email"
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="doctor@example.com"
//                 icon={FiMail}
//               />

//               <InputField
//                 label="Contact Number"
//                 name="contact_no"
//                 value={formData.contact_no}
//                 onChange={handleChange}
//                 placeholder="+91 9876543210"
//                 icon={FiPhone}
//               />

//               <InputField
//                 label="Qualification"
//                 name="qualification"
//                 value={formData.qualification}
//                 onChange={handleChange}
//                 placeholder="MBBS, MD, DM"
//                 icon={FiBookOpen}
//               />

//               <InputField
//                 label="Experience (Years)"
//                 name="experience_years"
//                 type="number"
//                 min="0"
//                 value={formData.experience_years}
//                 onChange={handleChange}
//                 placeholder="18"
//                 icon={FiBriefcase}
//               />

//             </div>
//           </FormCard>

//           {/* ===================================================
//               DEPARTMENT
//           =================================================== */}

//           <FormCard>
//             <SectionTitle
//               icon={FiBriefcase}
//               title="Department & Specialty"
//               description="Assign this doctor to a department and specialty."
//               color="purple"
//             />

//             <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">

//               <SelectField
//                 label="Department"
//                 name="department_id"
//                 value={formData.department_id}
//                 onChange={handleChange}
//                 required
//                 options={departments
//                   ?.filter(
//                     (d) =>
//                       Number(d.status) === 1
//                   )
//                   .map((dept) => ({
//                     value: dept.id,
//                     label: dept.name,
//                   }))}
//               />

//               <SelectField
//                 label="Specialty"
//                 name="specialty_id"
//                 value={formData.specialty_id}
//                 onChange={handleChange}
//                 options={specialties
//                   ?.filter(
//                     (s) =>
//                       Number(s.status) === 1
//                   )
//                   .map((spec) => ({
//                     value: spec.id,
//                     label: spec.name,
//                   }))}
//               />

//             </div>
//           </FormCard>

//           {/* ===================================================
//               WEBSITE PROFILE
//           =================================================== */}

//           <FormCard>
//             <SectionTitle
//               icon={FiGlobe}
//               title="Website Profile"
//               description="Information displayed on the public doctor profile."
//               color="cyan"
//             />

//             <div className="mt-4 space-y-4">

//               {/* Heading */}

//               <InputField
//                 label="Website Heading"
//                 name="web_heading"
//                 value={formData.web_heading}
//                 onChange={handleChange}
//                 placeholder="Senior Consultant Cardiologist"
//                 maxLength={100}
//               />

//               {/* About Doctor */}

//               <TextareaField
//                 label="About Doctor"
//                 name="web_bio"
//                 value={formData.web_bio}
//                 onChange={handleChange}
//                 placeholder="Write a professional description about the doctor..."
//                 rows={5}
//                 maxLength={1000}
//               />

//               {/* Experience Info */}

//               <div className="rounded-xl border border-blue-100 bg-blue-50/40 p-4">

//                 <div className="flex items-start gap-3">

//                   <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
//                     <FiBriefcase size={16} />
//                   </div>

//                   <div className="min-w-0 flex-1">

//                     <p className="text-xs font-bold text-gray-800">
//                       Experience Display
//                     </p>

//                     <p className="mt-1 text-[10px] leading-5 text-gray-500">
//                       Experience is automatically taken
//                       from the Experience (Years) field.
//                     </p>

//                     <div className="mt-3 inline-flex items-center rounded-lg bg-white px-3 py-2 text-sm font-bold text-blue-600 shadow-sm">
//                       {formData.experience_years
//                         ? `${formData.experience_years}+ Years of Experience`
//                         : "18+ Years of Experience"}
//                     </div>

//                   </div>

//                 </div>

//               </div>

//             </div>
//           </FormCard>

//           {/* ===================================================
//               SPECIALIZATION
//           =================================================== */}

//           <FormCard>
//             <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

//               <SectionTitle
//                 icon={FiCheckCircle}
//                 title="Specializations"
//                 description="Add areas of medical expertise."
//                 color="green"
//               />

//               <AddButton
//                 onClick={addSpecialization}
//                 label="Add Specialization"
//               />

//             </div>

//             <div className="mt-4 space-y-2">

//               {formData.web_specilization.length === 0 ? (
//                 <EmptyState
//                   icon={FiCheckCircle}
//                   text="No specialization added yet."
//                 />
//               ) : (
//                 formData.web_specilization.map(
//                   (item, index) => (
//                     <div
//                       key={index}
//                       className="group flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50/60 p-2 transition hover:border-[#087f8c]/30 hover:bg-white"
//                     >

//                       <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-500">
//                         <FiCheckCircle size={14} />
//                       </div>

//                       <input
//                         type="text"
//                         value={item}
//                         onChange={(e) =>
//                           updateSpecialization(
//                             index,
//                             e.target.value
//                           )
//                         }
//                         placeholder="Interventional Cardiology"
//                         className="h-9 min-w-0 flex-1 rounded-lg border border-transparent bg-transparent px-2 text-xs font-medium outline-none focus:border-gray-200 focus:bg-white"
//                       />

//                       <button
//                         type="button"
//                         onClick={() =>
//                           removeSpecialization(index)
//                         }
//                         className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-gray-400 transition hover:bg-red-50 hover:text-red-500"
//                       >
//                         <FiTrash2 size={14} />
//                       </button>

//                     </div>
//                   )
//                 )
//               )}

//             </div>
//           </FormCard>

//           {/* ===================================================
//               CERTIFICATES
//           =================================================== */}

//           <FormCard>
//             <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

//               <SectionTitle
//                 icon={FiShield}
//                 title="Certificates"
//                 description="Professional certifications and credentials."
//                 color="violet"
//               />

//               <AddButton
//                 onClick={addCertificate}
//                 label="Add Certificate"
//               />

//             </div>

//             <div className="mt-4 space-y-3">

//               {formData.web_certificat.length === 0 ? (
//                 <EmptyState
//                   icon={FiShield}
//                   text="No certificate added yet."
//                 />
//               ) : (
//                 formData.web_certificat.map(
//                   (certificate, index) => (
//                     <div
//                       key={index}
//                       className="rounded-2xl border border-gray-200 bg-gray-50/60 p-4"
//                     >

//                       <div className="mb-3 flex items-center justify-between">

//                         <div className="flex items-center gap-2">

//                           <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-50 text-violet-500">
//                             <FiShield size={14} />
//                           </div>

//                           <span className="text-[11px] font-bold text-gray-700">
//                             Certificate {index + 1}
//                           </span>

//                         </div>

//                         <button
//                           type="button"
//                           onClick={() =>
//                             removeCertificate(index)
//                           }
//                           className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition hover:bg-red-50 hover:text-red-500"
//                         >
//                           <FiTrash2 size={14} />
//                         </button>

//                       </div>

//                       <div className="grid grid-cols-1 gap-3 md:grid-cols-2">

//                         <InputField
//                           label="Certificate Title"
//                           value={
//                             certificate.title
//                           }
//                           onChange={(e) =>
//                             updateCertificate(
//                               index,
//                               "title",
//                               e.target.value
//                             )
//                           }
//                           placeholder="Advanced Cardiac Life Support"
//                         />

//                         <InputField
//                           label="Organization"
//                           value={
//                             certificate.organization
//                           }
//                           onChange={(e) =>
//                             updateCertificate(
//                               index,
//                               "organization",
//                               e.target.value
//                             )
//                           }
//                           placeholder="American Heart Association"
//                         />

//                         <InputField
//                           label="Year"
//                           type="number"
//                           value={
//                             certificate.year
//                           }
//                           onChange={(e) =>
//                             updateCertificate(
//                               index,
//                               "year",
//                               e.target.value
//                             )
//                           }
//                           placeholder="2024"
//                         />

//                         <InputField
//                           label="Certificate File URL"
//                           value={
//                             certificate.file_url
//                           }
//                           onChange={(e) =>
//                             updateCertificate(
//                               index,
//                               "file_url",
//                               e.target.value
//                             )
//                           }
//                           placeholder="/uploads/certificates/acls.pdf"
//                           icon={FiFileText}
//                         />

//                       </div>

//                       {certificate.file_url && (
//                         <a
//                           href={
//                             certificate.file_url
//                           }
//                           target="_blank"
//                           rel="noreferrer"
//                           className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-semibold text-violet-600 hover:underline"
//                         >
//                           <FiExternalLink
//                             size={12}
//                           />
//                           View Certificate
//                         </a>
//                       )}

//                     </div>
//                   )
//                 )
//               )}

//             </div>
//           </FormCard>

//           {/* ===================================================
//               AWARDS
//           =================================================== */}

//           <FormCard>
//             <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

//               <SectionTitle
//                 icon={FiAward}
//                 title="Awards & Recognition"
//                 description="Doctor's awards and professional recognition."
//                 color="orange"
//               />

//               <AddButton
//                 onClick={addAward}
//                 label="Add Award"
//               />

//             </div>

//             <div className="mt-4 space-y-3">

//               {formData.web_awards.length === 0 ? (
//                 <EmptyState
//                   icon={FiAward}
//                   text="No award added yet."
//                 />
//               ) : (
//                 formData.web_awards.map(
//                   (award, index) => (
//                     <div
//                       key={index}
//                       className="rounded-2xl border border-gray-200 bg-gray-50/60 p-4"
//                     >

//                       <div className="mb-3 flex items-center justify-between">

//                         <div className="flex items-center gap-2">

//                           <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
//                             <FiAward size={14} />
//                           </div>

//                           <span className="text-[11px] font-bold text-gray-700">
//                             Award {index + 1}
//                           </span>

//                         </div>

//                         <button
//                           type="button"
//                           onClick={() =>
//                             removeAward(index)
//                           }
//                           className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition hover:bg-red-50 hover:text-red-500"
//                         >
//                           <FiTrash2 size={14} />
//                         </button>

//                       </div>

//                       <div className="grid grid-cols-1 gap-3 md:grid-cols-2">

//                         <InputField
//                           label="Award Title"
//                           value={award.title}
//                           onChange={(e) =>
//                             updateAward(
//                               index,
//                               "title",
//                               e.target.value
//                             )
//                           }
//                           placeholder="Best Cardiologist Award"
//                         />

//                         <InputField
//                           label="Organization"
//                           value={
//                             award.organization
//                           }
//                           onChange={(e) =>
//                             updateAward(
//                               index,
//                               "organization",
//                               e.target.value
//                             )
//                           }
//                           placeholder="Healthcare Excellence Foundation"
//                         />

//                         <InputField
//                           label="Year"
//                           type="number"
//                           value={award.year}
//                           onChange={(e) =>
//                             updateAward(
//                               index,
//                               "year",
//                               e.target.value
//                             )
//                           }
//                           placeholder="2024"
//                         />

//                       </div>

//                     </div>
//                   )
//                 )
//               )}

//             </div>
//           </FormCard>

//         </div>

//         {/* =====================================================
//             RIGHT SIDEBAR
//         ===================================================== */}

//         <div className="space-y-4 xl:sticky xl:top-4 xl:self-start">

//           {/* ===================================================
//               PUBLISH
//           =================================================== */}

//           <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

//             <div className="border-b border-gray-100 bg-gradient-to-r from-[#087f8c]/5 to-blue-500/5 px-4 py-3">

//               <div className="flex items-center justify-between">

//                 <div>

//                   <h3 className="text-xs font-bold text-gray-800">
//                     Publish
//                   </h3>

//                   <p className="mt-0.5 text-[9px] text-gray-400">
//                     Manage doctor visibility
//                   </p>

//                 </div>

//                 <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#087f8c] shadow-sm">
//                   <FiEye size={14} />
//                 </div>

//               </div>

//             </div>

//             <div className="space-y-3 p-4">

//               <ToggleCard
//                 label="Status"
//                 description="Show this doctor publicly"
//                 active={formData.status === 1}
//                 activeText="Active"
//                 onClick={toggleStatus}
//                 color="teal"
//               />

//               <ToggleCard
//                 label="Availability"
//                 description="Accepting appointments"
//                 active={formData.available === 1}
//                 activeText="Available"
//                 onClick={toggleAvailable}
//                 color="green"
//               />

//             </div>

//             <div className="border-t border-gray-100 bg-gray-50/60 p-3">

//               <button
//                 type="submit"
//                 className="flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#087f8c] to-[#075985] text-xs font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
//               >
//                 <FiSave size={14} />
//                 {initialData
//                   ? "Update Doctor"
//                   : "Save Doctor"}
//               </button>

//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="mt-2 flex h-9 w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white text-[10px] font-semibold text-gray-500 transition hover:border-gray-300 hover:text-gray-700"
//               >
//                 <FiX size={13} />
//                 Cancel
//               </button>

//             </div>

//           </div>

//           {/* ===================================================
//               IMAGE
//           =================================================== */}

//           <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">

//             <SectionTitle
//               icon={FiImage}
//               title="Doctor Image"
//               description="Recommended 400 × 400 px"
//               color="pink"
//             />

//             <label className="mt-4 block cursor-pointer">

//               {imagePreview ? (
//                 <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">

//                   <img
//                     src={imagePreview}
//                     alt="Doctor"
//                     className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

//                   <button
//                     type="button"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       e.stopPropagation();
//                       removeImage();
//                     }}
//                     className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition hover:bg-red-500"
//                   >
//                     <FiX size={14} />
//                   </button>

//                 </div>
//               ) : (
//                 <div className="flex h-44 flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50/70 transition hover:border-[#087f8c]/40 hover:bg-[#087f8c]/[0.03]">

//                   <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#087f8c] shadow-sm">
//                     <FiUploadCloud size={22} />
//                   </div>

//                   <p className="text-xs font-bold text-gray-600">
//                     Click to upload
//                   </p>

//                   <p className="mt-1 text-[9px] text-gray-400">
//                     PNG, JPG or WEBP
//                   </p>

//                 </div>
//               )}

//               <input
//                 ref={fileInputRef}
//                 type="file"
//                 accept="image/png,image/jpeg,image/webp"
//                 onChange={handleImageChange}
//                 className="hidden"
//               />

//             </label>

//           </div>

//           {/* ===================================================
//               PREVIEW
//           =================================================== */}

//           <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">

//             <div className="flex items-center gap-2">

//               <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-500">
//                 <FiStar size={14} />
//               </div>

//               <div>
//                 <h3 className="text-xs font-bold text-gray-800">
//                   Profile Preview
//                 </h3>

//                 <p className="text-[9px] text-gray-400">
//                   Current doctor information
//                 </p>
//               </div>

//             </div>

//             <div className="mt-4 rounded-xl bg-gray-50 p-3">

//               <div className="flex items-center gap-3">

//                 {imagePreview ? (
//                   <img
//                     src={imagePreview}
//                     alt=""
//                     className="h-12 w-12 rounded-xl object-cover"
//                   />
//                 ) : (
//                   <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-gray-300">
//                     <FiUser size={20} />
//                   </div>
//                 )}

//                 <div className="min-w-0">

//                   <p className="truncate text-xs font-bold text-gray-800">
//                     {formData.name ||
//                       "Doctor Name"}
//                   </p>

//                   <p className="mt-0.5 truncate text-[10px] text-[#087f8c]">
//                     {formData.web_heading ||
//                       "Doctor Heading"}
//                   </p>

//                 </div>

//               </div>

//               <div className="mt-3 grid grid-cols-2 gap-2">

//                 <MiniStat
//                   value={
//                     formData.experience_years ||
//                     "0"
//                   }
//                   label="Years"
//                 />

//                 <MiniStat
//                   value={
//                     formData.web_specilization
//                       .filter(Boolean).length
//                   }
//                   label="Specialties"
//                 />

//               </div>

//             </div>

//           </div>

//         </div>

//       </div>
//     </form>
//   );
// };

// /* =========================================================
//    FORM CARD
// ========================================================= */

// const FormCard = ({ children }) => {
//   return (
//     <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
//       {children}
//     </section>
//   );
// };

// /* =========================================================
//    SECTION TITLE
// ========================================================= */

// const SectionTitle = ({
//   icon: Icon,
//   title,
//   description,
//   color = "teal",
// }) => {
//   const colors = {
//     teal: "bg-[#087f8c]/10 text-[#087f8c]",
//     blue: "bg-blue-50 text-blue-500",
//     purple: "bg-purple-50 text-purple-500",
//     cyan: "bg-cyan-50 text-cyan-500",
//     green: "bg-green-50 text-green-500",
//     violet: "bg-violet-50 text-violet-500",
//     orange: "bg-orange-50 text-orange-500",
//     pink: "bg-pink-50 text-pink-500",
//   };

//   return (
//     <div className="flex min-w-0 items-center gap-2.5">

//       <div
//         className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
//           colors[color] || colors.teal
//         }`}
//       >
//         <Icon size={15} />
//       </div>

//       <div className="min-w-0">

//         <h3 className="truncate text-xs font-bold text-gray-800">
//           {title}
//         </h3>

//         {description && (
//           <p className="mt-0.5 truncate text-[9px] text-gray-400">
//             {description}
//           </p>
//         )}

//       </div>

//     </div>
//   );
// };

// /* =========================================================
//    INPUT
// ========================================================= */

// const InputField = ({
//   label,
//   name,
//   value,
//   onChange,
//   placeholder,
//   type = "text",
//   required = false,
//   icon: Icon,
//   full = false,
//   maxLength,
//   min,
// }) => {
//   return (
//     <div className={full ? "md:col-span-2" : ""}>

//       <label className="mb-1.5 block text-[10px] font-bold text-gray-600">
//         {label}
//         {required && (
//           <span className="ml-1 text-red-500">
//             *
//           </span>
//         )}
//       </label>

//       <div className="relative">

//         {Icon && (
//           <Icon
//             size={13}
//             className="pointer-events-none absolute left-3 top-3 text-gray-400"
//           />
//         )}

//         <input
//           type={type}
//           name={name}
//           value={value ?? ""}
//           onChange={onChange}
//           placeholder={placeholder}
//           required={required}
//           maxLength={maxLength}
//           min={min}
//           className={`h-10 w-full rounded-xl border border-gray-200 bg-gray-50/50 ${
//             Icon ? "pl-9" : "px-3"
//           } pr-3 text-xs font-medium text-gray-700 outline-none transition placeholder:text-gray-300 focus:border-[#087f8c] focus:bg-white focus:ring-2 focus:ring-[#087f8c]/10`}
//         />

//       </div>

//       {maxLength && (
//         <p className="mt-1 text-right text-[8px] text-gray-400">
//           {(value || "").length}/{maxLength}
//         </p>
//       )}

//     </div>
//   );
// };

// /* =========================================================
//    TEXTAREA
// ========================================================= */

// const TextareaField = ({
//   label,
//   name,
//   value,
//   onChange,
//   placeholder,
//   rows = 4,
//   maxLength,
// }) => {
//   return (
//     <div>

//       <label className="mb-1.5 block text-[10px] font-bold text-gray-600">
//         {label}
//       </label>

//       <textarea
//         name={name}
//         value={value ?? ""}
//         onChange={onChange}
//         placeholder={placeholder}
//         rows={rows}
//         maxLength={maxLength}
//         className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50/50 px-3 py-2.5 text-xs font-medium leading-6 text-gray-700 outline-none transition placeholder:text-gray-300 focus:border-[#087f8c] focus:bg-white focus:ring-2 focus:ring-[#087f8c]/10"
//       />

//       {maxLength && (
//         <p className="mt-1 text-right text-[8px] text-gray-400">
//           {(value || "").length}/{maxLength}
//         </p>
//       )}

//     </div>
//   );
// };

// /* =========================================================
//    SELECT
// ========================================================= */

// const SelectField = ({
//   label,
//   name,
//   value,
//   onChange,
//   options = [],
//   required = false,
// }) => {
//   return (
//     <div>

//       <label className="mb-1.5 block text-[10px] font-bold text-gray-600">
//         {label}
//         {required && (
//           <span className="ml-1 text-red-500">
//             *
//           </span>
//         )}
//       </label>

//       <div className="relative">

//         <select
//           name={name}
//           value={value ?? ""}
//           onChange={onChange}
//           required={required}
//           className="h-10 w-full appearance-none rounded-xl border border-gray-200 bg-gray-50/50 px-3 pr-9 text-xs font-medium text-gray-700 outline-none transition focus:border-[#087f8c] focus:bg-white focus:ring-2 focus:ring-[#087f8c]/10"
//         >

//           <option value="">
//             Select {label.toLowerCase()}
//           </option>

//           {options.map((option) => (
//             <option
//               key={option.value}
//               value={option.value}
//             >
//               {option.label}
//             </option>
//           ))}

//         </select>

//         <FiChevronDown
//           size={14}
//           className="pointer-events-none absolute right-3 top-3 text-gray-400"
//         />

//       </div>

//     </div>
//   );
// };

// /* =========================================================
//    ADD BUTTON
// ========================================================= */

// const AddButton = ({
//   onClick,
//   label,
// }) => {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       className="inline-flex h-9 shrink-0 items-center justify-center gap-1.5 rounded-xl border border-[#087f8c]/20 bg-[#087f8c]/5 px-3 text-[10px] font-bold text-[#087f8c] transition hover:bg-[#087f8c]/10"
//     >
//       <FiPlus size={13} />
//       {label}
//     </button>
//   );
// };

// /* =========================================================
//    EMPTY STATE
// ========================================================= */

// const EmptyState = ({
//   icon: Icon,
//   text,
// }) => {
//   return (
//     <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-200 bg-gray-50/50 py-8">

//       <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-gray-300 shadow-sm">
//         <Icon size={18} />
//       </div>

//       <p className="mt-2 text-[10px] font-medium text-gray-400">
//         {text}
//       </p>

//     </div>
//   );
// };

// /* =========================================================
//    TOGGLE
// ========================================================= */

// const ToggleCard = ({
//   label,
//   description,
//   active,
//   activeText,
//   onClick,
//   color,
// }) => {
//   const activeColor =
//     color === "green"
//       ? "bg-green-500"
//       : "bg-[#087f8c]";

//   return (
//     <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-3">

//       <div className="flex items-center justify-between gap-3">

//         <div className="min-w-0">

//           <div className="flex items-center gap-1.5">

//             <span className="text-[10px] font-bold text-gray-700">
//               {label}
//             </span>

//             {active && (
//               <span className="rounded-full bg-green-500/10 px-1.5 py-0.5 text-[8px] font-bold text-green-600">
//                 {activeText}
//               </span>
//             )}

//           </div>

//           <p className="mt-0.5 text-[9px] text-gray-400">
//             {description}
//           </p>

//         </div>

//         <button
//           type="button"
//           onClick={onClick}
//           aria-pressed={active}
//           className={`relative h-5 w-9 shrink-0 rounded-full transition ${
//             active
//               ? activeColor
//               : "bg-gray-300"
//           }`}
//         >

//           <span
//             className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition ${
//               active
//                 ? "left-[18px]"
//                 : "left-0.5"
//             }`}
//           />

//         </button>

//       </div>

//     </div>
//   );
// };

// /* =========================================================
//    MINI STAT
// ========================================================= */

// const MiniStat = ({
//   value,
//   label,
// }) => {
//   return (
//     <div className="rounded-lg bg-white px-3 py-2">

//       <p className="text-sm font-black text-gray-800">
//         {value}
//       </p>

//       <p className="text-[8px] font-medium text-gray-400">
//         {label}
//       </p>

//     </div>
//   );
// };

// export default DoctorForm;




"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import useSWR from "swr";
import {
  FiActivity,
  FiAward,
  FiBriefcase,
  FiCheck,
  FiChevronDown,
  FiFileText,
  FiImage,
  FiMail,
  FiPlus,
  FiSave,
  FiShield,
  FiStar,
  FiTrash2,
  FiUploadCloud,
  FiUser,
  FiX,
  FiPhone,
  FiBookOpen,
  FiCalendar,
} from "react-icons/fi";

import ApiService from "./../../src/services/Apiservices";

/* =========================================================
   SMALL COMPONENTS
========================================================= */

const SectionTitle = ({
  icon: Icon,
  title,
  description,
  iconClass = "bg-teal-50 text-[#087f8c]",
}) => {
  return (
    <div className="mb-5 flex items-start gap-3">
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconClass}`}
      >
        <Icon size={20} />
      </div>

      <div>
        <h2 className="text-[17px] font-bold tracking-tight text-slate-900 sm:text-[18px]">
          {title}
        </h2>

        {description && (
          <p className="mt-1 text-[13px] leading-5 text-slate-500 sm:text-[14px]">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

const FieldLabel = ({ children, required = false }) => {
  return (
    <label className="mb-2 block text-[14px] font-semibold tracking-[0.01em] text-slate-700 sm:text-[15px]">
      {children}

      {required && (
        <span className="ml-1 text-red-500">*</span>
      )}
    </label>
  );
};

const Input = ({
  icon: Icon,
  className = "",
  ...props
}) => {
  return (
    <div className="relative">
      {Icon && (
        <Icon
          size={17}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />
      )}

      <input
        {...props}
        className={`
          h-12 w-full rounded-xl
          border border-slate-200
          bg-white
          ${Icon ? "pl-11" : "px-4"}
          pr-4
          text-[14px] font-medium text-slate-800
          outline-none
          transition-all duration-200
          placeholder:text-[14px]
          placeholder:font-normal
          placeholder:text-slate-400
          hover:border-slate-300
          focus:border-[#087f8c]
          focus:ring-4 focus:ring-[#087f8c]/10
          disabled:cursor-not-allowed
          disabled:bg-slate-50
          ${className}
        `}
      />
    </div>
  );
};

const Textarea = ({ ...props }) => {
  return (
    <textarea
      {...props}
      className="
        min-h-[125px]
        w-full
        resize-y
        rounded-xl
        border border-slate-200
        bg-white
        px-4 py-3
        text-[14px]
        font-medium
        leading-6
        text-slate-800
        outline-none
        transition-all duration-200
        placeholder:text-[14px]
        placeholder:font-normal
        placeholder:text-slate-400
        hover:border-slate-300
        focus:border-[#087f8c]
        focus:ring-4
        focus:ring-[#087f8c]/10
      "
    />
  );
};

const Select = ({ children, ...props }) => {
  return (
    <div className="relative">
      <select
        {...props}
        className="
          h-12
          w-full
          appearance-none
          rounded-xl
          border border-slate-200
          bg-white
          px-4 pr-11
          text-[14px]
          font-medium
          text-slate-800
          outline-none
          transition-all duration-200
          hover:border-slate-300
          focus:border-[#087f8c]
          focus:ring-4
          focus:ring-[#087f8c]/10
        "
      >
        {children}
      </select>

      <FiChevronDown
        size={18}
        className="
          pointer-events-none
          absolute
          right-4
          top-1/2
          -translate-y-1/2
          text-slate-400
        "
      />
    </div>
  );
};

const Toggle = ({ enabled, onChange, label, description }) => {
  return (
    <button
      type="button"
      onClick={() => onChange(!enabled)}
      className="flex w-full items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 text-left transition hover:border-slate-300"
    >
      <div>
        <p className="text-[14px] font-semibold text-slate-800">
          {label}
        </p>

        {description && (
          <p className="mt-1 text-[12px] leading-5 text-slate-500">
            {description}
          </p>
        )}
      </div>

      <span
        className={`
          relative
          h-6
          w-11
          shrink-0
          rounded-full
          transition-colors
          ${enabled ? "bg-[#087f8c]" : "bg-slate-300"}
        `}
      >
        <span
          className={`
            absolute
            top-1
            h-4
            w-4
            rounded-full
            bg-white
            shadow
            transition-transform
            ${enabled ? "translate-x-6" : "translate-x-1"}
          `}
        />
      </span>
    </button>
  );
};

/* =========================================================
   MAIN FORM
========================================================= */

export default function DoctorForm({
  onSubmit,
  onClose,
  userId,
  initialData = null,
}) {
  const imageInputRef = useRef(null);
  const certificateInputRefs = useRef({});

  /* =========================================================
     API
  ========================================================= */

  const { data: deptData, isLoading: deptLoading } = useSWR(
    "departments",
    ApiService.get
  );

  const { data: specData, isLoading: specLoading } = useSWR(
    "specialties",
    ApiService.get
  );

  const departments = deptData?.data || [];
  const specialties = specData?.data || [];

  /* =========================================================
     FORM STATE
  ========================================================= */

  const [formData, setFormData] = useState({
    created_by: initialData?.created_by ?? userId ?? "",

    department_id: initialData?.department_id ?? "",
    specialty_id: initialData?.specialty_id ?? "",

    name: initialData?.name ?? "",
    contact_no: initialData?.contact_no ?? "",
    email: initialData?.email ?? "",

    qualification: initialData?.qualification ?? "",
    experience_years: initialData?.experience_years ?? "",

    image_url: initialData?.image_url ?? "",

    web_heading:
      initialData?.web_heading ??
      "Senior Consultant",

    web_bio: initialData?.web_bio ?? "",

    web_experience:
      initialData?.web_experience ?? "",

    web_specilization:
      Array.isArray(initialData?.web_specilization)
        ? initialData.web_specilization
        : [],

    web_certificat:
      Array.isArray(initialData?.web_certificat)
        ? initialData.web_certificat
        : [],

    web_awards:
      Array.isArray(initialData?.web_awards)
        ? initialData.web_awards
        : [],

    available:
      initialData?.available ?? true,

    status:
      initialData?.status ?? true,
  });

  const [specializationInput, setSpecializationInput] =
    useState("");

  const [imagePreview, setImagePreview] = useState(
    initialData?.image_url || ""
  );

  const [saving, setSaving] = useState(false);

  /* =========================================================
     COMMON CHANGE
  ========================================================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =========================================================
     IMAGE
  ========================================================= */

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const preview = URL.createObjectURL(file);

    setImagePreview(preview);

    setFormData((prev) => ({
      ...prev,
      image_url: file,
      image_file: file,
    }));
  };

  /* =========================================================
     SPECIALIZATIONS
  ========================================================= */

  const addSpecialization = () => {
    const value = specializationInput.trim();

    if (!value) return;

    const alreadyExists =
      formData.web_specilization.some(
        (item) =>
          item.toLowerCase() === value.toLowerCase()
      );

    if (alreadyExists) {
      setSpecializationInput("");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      web_specilization: [
        ...prev.web_specilization,
        value,
      ],
    }));

    setSpecializationInput("");
  };

  const handleSpecializationKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addSpecialization();
    }
  };

  const removeSpecialization = (index) => {
    setFormData((prev) => ({
      ...prev,
      web_specilization:
        prev.web_specilization.filter(
          (_, i) => i !== index
        ),
    }));
  };

  /* =========================================================
     CERTIFICATES
  ========================================================= */

  const addCertificate = () => {
    setFormData((prev) => ({
      ...prev,
      web_certificat: [
        ...prev.web_certificat,
        {
          title: "",
          organization: "",
          year: "",
          file_url: "",
        },
      ],
    }));
  };

  const updateCertificate = (
    index,
    field,
    value
  ) => {
    setFormData((prev) => {
      const certificates = [
        ...prev.web_certificat,
      ];

      certificates[index] = {
        ...certificates[index],
        [field]: value,
      };

      return {
        ...prev,
        web_certificat: certificates,
      };
    });
  };

  const removeCertificate = (index) => {
    setFormData((prev) => ({
      ...prev,
      web_certificat:
        prev.web_certificat.filter(
          (_, i) => i !== index
        ),
    }));
  };

  const handleCertificateFile = (
    index,
    file
  ) => {
    if (!file) return;

    setFormData((prev) => {
      const certificates = [
        ...prev.web_certificat,
      ];

      certificates[index] = {
        ...certificates[index],
        file,
      };

      return {
        ...prev,
        web_certificat: certificates,
      };
    });
  };

  /* =========================================================
     AWARDS
  ========================================================= */

  const addAward = () => {
    setFormData((prev) => ({
      ...prev,
      web_awards: [
        ...prev.web_awards,
        {
          title: "",
          organization: "",
          year: "",
        },
      ],
    }));
  };

  const updateAward = (
    index,
    field,
    value
  ) => {
    setFormData((prev) => {
      const awards = [...prev.web_awards];

      awards[index] = {
        ...awards[index],
        [field]: value,
      };

      return {
        ...prev,
        web_awards: awards,
      };
    });
  };

  const removeAward = (index) => {
    setFormData((prev) => ({
      ...prev,
      web_awards:
        prev.web_awards.filter(
          (_, i) => i !== index
        ),
    }));
  };

  /* =========================================================
     AUTO EXPERIENCE TEXT
  ========================================================= */

  const useExperienceText = () => {
    if (!formData.experience_years) return;

    setFormData((prev) => ({
      ...prev,
      web_experience: `${prev.experience_years}+ Years of Experience`,
    }));
  };

  /* =========================================================
     SUBMIT
  ========================================================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert("Please enter doctor name.");
      return;
    }

    if (!formData.email.trim()) {
      alert("Please enter doctor email.");
      return;
    }

    if (!formData.department_id) {
      alert("Please select department.");
      return;
    }

    if (!formData.specialty_id) {
      alert("Please select specialty.");
      return;
    }

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

      specialty_id:
        formData.specialty_id
          ? Number(formData.specialty_id)
          : null,

      experience_years:
        formData.experience_years !== ""
          ? Number(formData.experience_years)
          : 0,

      web_specilization:
        formData.web_specilization,

      web_certificat:
        formData.web_certificat,

      web_awards:
        formData.web_awards,

      available:
        Boolean(formData.available),

      status:
        Boolean(formData.status),
    };

    try {
      setSaving(true);

      if (onSubmit) {
        await onSubmit(payload);
      }
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
      y: 12,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        staggerChildren: 0.06,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
      },
    },
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <motion.form
      onSubmit={handleSubmit}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full"
    >
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_340px]">

        {/* =====================================================
            LEFT SIDE
        ===================================================== */}

        <div className="space-y-5">

          {/* -----------------------------------------------
              BASIC INFORMATION
          ------------------------------------------------ */}

          <motion.section
            variants={itemVariants}
            className="
              rounded-2xl
              border border-slate-200
              bg-white
              p-5
              shadow-sm
              sm:p-6
            "
          >
            <SectionTitle
              icon={FiUser}
              title="Basic Information"
              description="Enter the doctor's personal and contact details."
              iconClass="bg-teal-50 text-[#087f8c]"
            />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              <div className="md:col-span-2">
                <FieldLabel required>
                  Doctor Name
                </FieldLabel>

                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter doctor full name"
                  icon={FiUser}
                />
              </div>

              <div>
                <FieldLabel required>
                  Email Address
                </FieldLabel>

                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="doctor@example.com"
                  icon={FiMail}
                />
              </div>

              <div>
                <FieldLabel>
                  Contact Number
                </FieldLabel>

                <Input
                  name="contact_no"
                  value={formData.contact_no}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  icon={FiPhone}
                />
              </div>

              <div className="md:col-span-2">
                <FieldLabel>
                  Qualification
                </FieldLabel>

                <Input
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  placeholder="MBBS, MD (Medicine), DM (Cardiology)"
                  icon={FiBookOpen}
                />
              </div>
            </div>
          </motion.section>

          {/* -----------------------------------------------
              PROFESSIONAL INFORMATION
          ------------------------------------------------ */}

          <motion.section
            variants={itemVariants}
            className="
              rounded-2xl
              border border-slate-200
              bg-white
              p-5
              shadow-sm
              sm:p-6
            "
          >
            <SectionTitle
              icon={FiBriefcase}
              title="Professional Information"
              description="Configure department, specialty and experience."
              iconClass="bg-blue-50 text-blue-600"
            />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              <div>
                <FieldLabel required>
                  Department
                </FieldLabel>

                <Select
                  name="department_id"
                  value={formData.department_id}
                  onChange={handleChange}
                  disabled={deptLoading}
                >
                  <option value="">
                    {deptLoading
                      ? "Loading departments..."
                      : "Select Department"}
                  </option>

                  {departments.map((department) => (
                    <option
                      key={department.id}
                      value={department.id}
                    >
                      {department.name}
                    </option>
                  ))}
                </Select>
              </div>

              <div>
                <FieldLabel required>
                  Specialty
                </FieldLabel>

                <Select
                  name="specialty_id"
                  value={formData.specialty_id}
                  onChange={handleChange}
                  disabled={specLoading}
                >
                  <option value="">
                    {specLoading
                      ? "Loading specialties..."
                      : "Select Specialty"}
                  </option>

                  {specialties.map((specialty) => (
                    <option
                      key={specialty.id}
                      value={specialty.id}
                    >
                      {specialty.name}
                    </option>
                  ))}
                </Select>
              </div>

              <div>
                <FieldLabel>
                  Experience (Years)
                </FieldLabel>

                <Input
                  name="experience_years"
                  type="number"
                  min="0"
                  value={formData.experience_years}
                  onChange={handleChange}
                  placeholder="18"
                  icon={FiCalendar}
                />
              </div>

              <div>
                <FieldLabel>
                  Website Experience
                </FieldLabel>

                <div className="flex gap-2">
                  <Input
                    name="web_experience"
                    value={formData.web_experience}
                    onChange={handleChange}
                    placeholder="18+ Years of Experience"
                  />

                  <button
                    type="button"
                    onClick={useExperienceText}
                    className="
                      h-12
                      shrink-0
                      rounded-xl
                      border border-[#087f8c]/20
                      bg-[#087f8c]/5
                      px-3
                      text-[12px]
                      font-semibold
                      text-[#087f8c]
                      transition
                      hover:bg-[#087f8c]/10
                    "
                  >
                    Auto
                  </button>
                </div>
              </div>
            </div>
          </motion.section>

          {/* -----------------------------------------------
              WEBSITE PROFILE
          ------------------------------------------------ */}

          <motion.section
            variants={itemVariants}
            className="
              rounded-2xl
              border border-slate-200
              bg-white
              p-5
              shadow-sm
              sm:p-6
            "
          >
            <SectionTitle
              icon={FiFileText}
              title="Website Profile"
              description="Content displayed on the public doctor profile."
              iconClass="bg-purple-50 text-purple-600"
            />

            <div className="space-y-5">

              <div>
                <FieldLabel>
                  Profile Heading
                </FieldLabel>

                <Input
                  name="web_heading"
                  value={formData.web_heading}
                  onChange={handleChange}
                  placeholder="Senior Consultant Cardiologist"
                />
              </div>

              <div>
                <FieldLabel>
                  Doctor Biography
                </FieldLabel>

                <Textarea
                  name="web_bio"
                  value={formData.web_bio}
                  onChange={handleChange}
                  placeholder="Write a professional biography about the doctor..."
                />

                <p className="mt-2 text-[12px] text-slate-400">
                  Recommended: 2–4 professional paragraphs.
                </p>
              </div>
            </div>
          </motion.section>

          {/* -----------------------------------------------
              SPECIALIZATIONS
          ------------------------------------------------ */}

          <motion.section
            variants={itemVariants}
            className="
              rounded-2xl
              border border-slate-200
              bg-white
              p-5
              shadow-sm
              sm:p-6
            "
          >
            <SectionTitle
              icon={FiActivity}
              title="Specializations"
              description="Add the doctor's areas of expertise."
              iconClass="bg-emerald-50 text-emerald-600"
            />

            <FieldLabel>
              Areas of Specialization
            </FieldLabel>

            <div className="flex gap-2">
              <input
                value={specializationInput}
                onChange={(e) =>
                  setSpecializationInput(
                    e.target.value
                  )
                }
                onKeyDown={
                  handleSpecializationKeyDown
                }
                placeholder="e.g. Interventional Cardiology"
                className="
                  h-12
                  min-w-0
                  flex-1
                  rounded-xl
                  border border-slate-200
                  bg-white
                  px-4
                  text-[14px]
                  font-medium
                  text-slate-800
                  outline-none
                  placeholder:text-[14px]
                  placeholder:text-slate-400
                  focus:border-[#087f8c]
                  focus:ring-4
                  focus:ring-[#087f8c]/10
                "
              />

              <button
                type="button"
                onClick={addSpecialization}
                className="
                  flex
                  h-12
                  w-12
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
                <FiPlus size={20} />
              </button>
            </div>

            <p className="mt-2 text-[12px] text-slate-400">
              Press Enter or click + to add a specialization.
            </p>

            {formData.web_specilization.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {formData.web_specilization.map(
                  (specialization, index) => (
                    <motion.div
                      key={`${specialization}-${index}`}
                      initial={{
                        opacity: 0,
                        scale: 0.85,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-teal-100
                        bg-teal-50
                        px-3
                        py-2
                        text-[13px]
                        font-semibold
                        text-[#087f8c]
                      "
                    >
                      <FiCheck size={14} />

                      <span>
                        {specialization}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          removeSpecialization(
                            index
                          )
                        }
                        className="
                          rounded-full
                          p-0.5
                          text-[#087f8c]
                          hover:bg-white
                        "
                      >
                        <FiX size={14} />
                      </button>
                    </motion.div>
                  )
                )}
              </div>
            )}
          </motion.section>

          {/* -----------------------------------------------
              CERTIFICATES
          ------------------------------------------------ */}

          <motion.section
            variants={itemVariants}
            className="
              rounded-2xl
              border border-slate-200
              bg-white
              p-5
              shadow-sm
              sm:p-6
            "
          >
            <div className="flex items-start justify-between gap-4">
              <SectionTitle
                icon={FiShield}
                title="Certificates"
                description="Add professional certifications and achievements."
                iconClass="bg-amber-50 text-amber-600"
              />

              <button
                type="button"
                onClick={addCertificate}
                className="
                  flex
                  shrink-0
                  items-center
                  gap-2
                  rounded-xl
                  bg-[#087f8c]
                  px-3
                  py-2.5
                  text-[13px]
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#066c77]
                "
              >
                <FiPlus size={16} />
                <span className="hidden sm:inline">
                  Add Certificate
                </span>
              </button>
            </div>

            {formData.web_certificat.length === 0 ? (
              <div
                className="
                  rounded-2xl
                  border
                  border-dashed
                  border-slate-300
                  bg-slate-50
                  px-5
                  py-10
                  text-center
                "
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm">
                  <FiShield size={22} />
                </div>

                <p className="mt-3 text-[14px] font-semibold text-slate-700">
                  No certificates added
                </p>

                <p className="mt-1 text-[12px] text-slate-400">
                  Add certifications to display them on the doctor's profile.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {formData.web_certificat.map(
                  (certificate, index) => (
                    <motion.div
                      key={index}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      className="
                        rounded-2xl
                        border
                        border-slate-200
                        bg-slate-50/70
                        p-4
                        sm:p-5
                      "
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                            <FiAward size={17} />
                          </div>

                          <div>
                            <p className="text-[14px] font-bold text-slate-800">
                              Certificate #{index + 1}
                            </p>

                            <p className="text-[11px] text-slate-400">
                              Professional certification
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            removeCertificate(index)
                          }
                          className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-lg
                            bg-red-50
                            text-red-500
                            transition
                            hover:bg-red-100
                          "
                        >
                          <FiTrash2 size={16} />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                        <div>
                          <FieldLabel>
                            Certificate Title
                          </FieldLabel>

                          <Input
                            value={
                              certificate.title || ""
                            }
                            onChange={(e) =>
                              updateCertificate(
                                index,
                                "title",
                                e.target.value
                              )
                            }
                            placeholder="Advanced Cardiac Life Support"
                          />
                        </div>

                        <div>
                          <FieldLabel>
                            Organization
                          </FieldLabel>

                          <Input
                            value={
                              certificate.organization ||
                              ""
                            }
                            onChange={(e) =>
                              updateCertificate(
                                index,
                                "organization",
                                e.target.value
                              )
                            }
                            placeholder="American Heart Association"
                          />
                        </div>

                        <div>
                          <FieldLabel>
                            Year
                          </FieldLabel>

                          <Input
                            type="number"
                            value={
                              certificate.year || ""
                            }
                            onChange={(e) =>
                              updateCertificate(
                                index,
                                "year",
                                e.target.value
                              )
                            }
                            placeholder="2024"
                            icon={FiCalendar}
                          />
                        </div>

                        <div>
                          <FieldLabel>
                            Certificate File
                          </FieldLabel>

                          <input
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            ref={(element) => {
                              certificateInputRefs.current[
                                index
                              ] = element;
                            }}
                            onChange={(e) =>
                              handleCertificateFile(
                                index,
                                e.target.files?.[0]
                              )
                            }
                            className="hidden"
                          />

                          <button
                            type="button"
                            onClick={() =>
                              certificateInputRefs.current[
                                index
                              ]?.click()
                            }
                            className="
                              flex
                              h-12
                              w-full
                              items-center
                              gap-3
                              rounded-xl
                              border
                              border-dashed
                              border-slate-300
                              bg-white
                              px-4
                              text-left
                              transition
                              hover:border-[#087f8c]
                              hover:bg-teal-50/30
                            "
                          >
                            <FiUploadCloud
                              size={18}
                              className="text-[#087f8c]"
                            />

                            <span className="min-w-0 truncate text-[13px] font-medium text-slate-600">
                              {certificate.file?.name ||
                                certificate.file_url ||
                                "Upload certificate"}
                            </span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            )}
          </motion.section>

          {/* -----------------------------------------------
              AWARDS
          ------------------------------------------------ */}

          <motion.section
            variants={itemVariants}
            className="
              rounded-2xl
              border border-slate-200
              bg-white
              p-5
              shadow-sm
              sm:p-6
            "
          >
            <div className="flex items-start justify-between gap-4">
              <SectionTitle
                icon={FiStar}
                title="Awards & Recognition"
                description="Showcase awards and professional recognition."
                iconClass="bg-rose-50 text-rose-600"
              />

              <button
                type="button"
                onClick={addAward}
                className="
                  flex
                  shrink-0
                  items-center
                  gap-2
                  rounded-xl
                  bg-[#087f8c]
                  px-3
                  py-2.5
                  text-[13px]
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#066c77]
                "
              >
                <FiPlus size={16} />

                <span className="hidden sm:inline">
                  Add Award
                </span>
              </button>
            </div>

            {formData.web_awards.length === 0 ? (
              <div
                className="
                  rounded-2xl
                  border
                  border-dashed
                  border-slate-300
                  bg-slate-50
                  px-5
                  py-10
                  text-center
                "
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm">
                  <FiStar size={22} />
                </div>

                <p className="mt-3 text-[14px] font-semibold text-slate-700">
                  No awards added
                </p>

                <p className="mt-1 text-[12px] text-slate-400">
                  Add awards and recognition received by the doctor.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {formData.web_awards.map(
                  (award, index) => (
                    <motion.div
                      key={index}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      className="
                        rounded-2xl
                        border
                        border-slate-200
                        bg-slate-50/70
                        p-4
                        sm:p-5
                      "
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-50 text-rose-600">
                            <FiStar size={17} />
                          </div>

                          <div>
                            <p className="text-[14px] font-bold text-slate-800">
                              Award #{index + 1}
                            </p>

                            <p className="text-[11px] text-slate-400">
                              Professional recognition
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            removeAward(index)
                          }
                          className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-lg
                            bg-red-50
                            text-red-500
                            transition
                            hover:bg-red-100
                          "
                        >
                          <FiTrash2 size={16} />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

                        <div className="md:col-span-1">
                          <FieldLabel>
                            Award Title
                          </FieldLabel>

                          <Input
                            value={
                              award.title || ""
                            }
                            onChange={(e) =>
                              updateAward(
                                index,
                                "title",
                                e.target.value
                              )
                            }
                            placeholder="Best Cardiologist Award"
                          />
                        </div>

                        <div className="md:col-span-1">
                          <FieldLabel>
                            Organization
                          </FieldLabel>

                          <Input
                            value={
                              award.organization ||
                              ""
                            }
                            onChange={(e) =>
                              updateAward(
                                index,
                                "organization",
                                e.target.value
                              )
                            }
                            placeholder="Healthcare Excellence Foundation"
                          />
                        </div>

                        <div>
                          <FieldLabel>
                            Year
                          </FieldLabel>

                          <Input
                            type="number"
                            value={
                              award.year || ""
                            }
                            onChange={(e) =>
                              updateAward(
                                index,
                                "year",
                                e.target.value
                              )
                            }
                            placeholder="2024"
                            icon={FiCalendar}
                          />
                        </div>
                      </div>
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

        <div className="space-y-5 xl:sticky xl:top-5 xl:self-start">

          {/* -----------------------------------------------
              PROFILE IMAGE
          ------------------------------------------------ */}

          <motion.section
            variants={itemVariants}
            className="
              overflow-hidden
              rounded-2xl
              border border-slate-200
              bg-white
              shadow-sm
            "
          >
            <div className="border-b border-slate-100 p-5 sm:p-6">
              <SectionTitle
                icon={FiImage}
                title="Doctor Photo"
                description="Upload a professional profile photo."
                iconClass="bg-cyan-50 text-cyan-600"
              />

              <div className="flex flex-col items-center">
                <div
                  className="
                    relative
                    flex
                    h-44
                    w-44
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-full
                    border-4
                    border-white
                    bg-slate-100
                    shadow-[0_10px_35px_rgba(0,0,0,0.10)]
                  "
                >
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Doctor preview"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="text-center">
                      <FiUser
                        size={40}
                        className="mx-auto text-slate-300"
                      />

                      <p className="mt-2 text-[11px] font-medium text-slate-400">
                        No Photo
                      </p>
                    </div>
                  )}
                </div>

                <input
                  ref={imageInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />

                <button
                  type="button"
                  onClick={() =>
                    imageInputRef.current?.click()
                  }
                  className="
                    mt-5
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-[#087f8c]/20
                    bg-[#087f8c]/5
                    px-4
                    py-2.5
                    text-[13px]
                    font-semibold
                    text-[#087f8c]
                    transition
                    hover:bg-[#087f8c]/10
                  "
                >
                  <FiUploadCloud size={17} />

                  {imagePreview
                    ? "Change Photo"
                    : "Upload Photo"}
                </button>

                <p className="mt-3 text-center text-[11px] leading-5 text-slate-400">
                  JPG, JPEG or PNG
                  <br />
                  Recommended: 500 × 500 px
                </p>
              </div>
            </div>

            {/* -------------------------------------------
                STATUS
            -------------------------------------------- */}

            <div className="space-y-3 p-5 sm:p-6">
              <FieldLabel>
                Doctor Status
              </FieldLabel>

              <Toggle
                enabled={formData.status}
                onChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    status: value,
                  }))
                }
                label="Active Doctor"
                description="Doctor profile is visible in the system."
              />

              <Toggle
                enabled={formData.available}
                onChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    available: value,
                  }))
                }
                label="Available for Appointment"
                description="Allow patients to book appointments."
              />
            </div>
          </motion.section>

          {/* -----------------------------------------------
              SUMMARY
          ------------------------------------------------ */}

          <motion.section
            variants={itemVariants}
            className="
              rounded-2xl
              border border-slate-200
              bg-white
              p-5
              shadow-sm
            "
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <FiActivity size={18} />
              </div>

              <div>
                <h3 className="text-[16px] font-bold text-slate-900">
                  Profile Summary
                </h3>

                <p className="text-[12px] text-slate-400">
                  Current form information
                </p>
              </div>
            </div>

            <div className="space-y-2">

              <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2.5">
                <span className="text-[12px] font-medium text-slate-500">
                  Specializations
                </span>

                <span className="text-[13px] font-bold text-slate-800">
                  {formData.web_specilization.length}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2.5">
                <span className="text-[12px] font-medium text-slate-500">
                  Certificates
                </span>

                <span className="text-[13px] font-bold text-slate-800">
                  {formData.web_certificat.length}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2.5">
                <span className="text-[12px] font-medium text-slate-500">
                  Awards
                </span>

                <span className="text-[13px] font-bold text-slate-800">
                  {formData.web_awards.length}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2.5">
                <span className="text-[12px] font-medium text-slate-500">
                  Experience
                </span>

                <span className="text-[13px] font-bold text-slate-800">
                  {formData.experience_years
                    ? `${formData.experience_years} Years`
                    : "—"}
                </span>
              </div>
            </div>
          </motion.section>
        </div>
      </div>

      {/* =====================================================
          FOOTER ACTIONS
      ===================================================== */}

      <motion.div
        variants={itemVariants}
        className="
          mt-5
          flex
          flex-col-reverse
          gap-3
          rounded-2xl
          border border-slate-200
          bg-white
          p-4
          shadow-sm
          sm:flex-row
          sm:items-center
          sm:justify-between
          sm:p-5
        "
      >
        <div>
          <p className="text-[13px] font-semibold text-slate-700">
            Ready to save doctor profile?
          </p>

          <p className="mt-1 text-[11px] text-slate-400">
            Make sure all required information is completed.
          </p>
        </div>

        <div className="flex w-full gap-3 sm:w-auto">

          {onClose && (
            <button
              type="button"
              onClick={onClose}
              disabled={saving}
              className="
                flex
                h-11
                flex-1
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-slate-200
                bg-white
                px-5
                text-[14px]
                font-semibold
                text-slate-600
                transition
                hover:bg-slate-50
                disabled:opacity-50
                sm:flex-none
              "
            >
              <FiX size={17} />
              Cancel
            </button>
          )}

          <button
            type="submit"
            disabled={saving}
            className="
              flex
              h-11
              flex-1
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-[#087f8c]
              px-6
              text-[14px]
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
                    h-4
                    w-4
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
                <FiSave size={17} />

                Save Doctor
              </>
            )}
          </button>
        </div>
      </motion.div>
    </motion.form>
  );
}