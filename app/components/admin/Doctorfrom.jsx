// "use client";

// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import useSWR from "swr";

// import {
//   FiActivity,
//   FiAward,
//   FiBriefcase,
//   FiCheck,
//   FiChevronDown,
//   FiFileText,
//   FiImage,
//   FiMail,
//   FiPlus,
//   FiSave,
//   FiShield,
//   FiStar,
//   FiTrash2,
//   FiUploadCloud,
//   FiUser,
//   FiX,
//   FiPhone,
//   FiBookOpen,
//   FiCalendar,
// } from "react-icons/fi";

// import ApiService from "./../../src/services/Apiservices";

// /* =========================================================
//    SECTION TITLE
// ========================================================= */

// const SectionTitle = ({
//   icon: Icon,
//   title,
//   description,
//   iconClass = "bg-teal-50 text-[#087f8c]",
// }) => {
//   return (
//     <div className="mb-4 flex items-start gap-3">
//       <div
//         className={`
//           flex h-10 w-10 shrink-0 items-center justify-center
//           rounded-xl
//           ${iconClass}
//         `}
//       >
//         <Icon size={18} />
//       </div>

//       <div>
//         <h2 className="text-[16px] font-bold tracking-tight text-slate-900">
//           {title}
//         </h2>

//         {description && (
//           <p className="mt-0.5 text-[12px] leading-5 text-slate-500">
//             {description}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// /* =========================================================
//    FIELD LABEL
// ========================================================= */

// const FieldLabel = ({ children, required = false }) => {
//   return (
//     <label className="mb-1.5 block text-[13px] font-semibold text-slate-700">
//       {children}

//       {required && (
//         <span className="ml-1 text-red-500">*</span>
//       )}
//     </label>
//   );
// };

// /* =========================================================
//    INPUT
// ========================================================= */

// const Input = ({
//   icon: Icon,
//   className = "",
//   ...props
// }) => {
//   return (
//     <div className="relative">
//       {Icon && (
//         <Icon
//           size={16}
//           className="
//             pointer-events-none
//             absolute
//             left-3.5
//             top-1/2
//             -translate-y-1/2
//             text-slate-400
//           "
//         />
//       )}

//       <input
//         {...props}
//         className={`
//           h-11
//           w-full
//           rounded-xl
//           border border-slate-200
//           bg-white
//           ${Icon ? "pl-10" : "px-3.5"}
//           pr-3.5
//           text-[13px]
//           font-medium
//           text-slate-800
//           outline-none
//           transition-all
//           duration-200
//           placeholder:text-[13px]
//           placeholder:font-normal
//           placeholder:text-slate-400
//           hover:border-slate-300
//           focus:border-[#087f8c]
//           focus:ring-4
//           focus:ring-[#087f8c]/10
//           disabled:cursor-not-allowed
//           disabled:bg-slate-50
//           ${className}
//         `}
//       />
//     </div>
//   );
// };

// /* =========================================================
//    TEXTAREA
// ========================================================= */

// const Textarea = ({ ...props }) => {
//   return (
//     <textarea
//       {...props}
//       className="
//         min-h-[115px]
//         w-full
//         resize-y
//         rounded-xl
//         border border-slate-200
//         bg-white
//         px-3.5
//         py-3
//         text-[13px]
//         font-medium
//         leading-5
//         text-slate-800
//         outline-none
//         transition-all
//         duration-200
//         placeholder:text-[13px]
//         placeholder:font-normal
//         placeholder:text-slate-400
//         hover:border-slate-300
//         focus:border-[#087f8c]
//         focus:ring-4
//         focus:ring-[#087f8c]/10
//       "
//     />
//   );
// };

// /* =========================================================
//    SELECT
// ========================================================= */

// const Select = ({ children, ...props }) => {
//   return (
//     <div className="relative">
//       <select
//         {...props}
//         className="
//           h-11
//           w-full
//           appearance-none
//           rounded-xl
//           border border-slate-200
//           bg-white
//           px-3.5
//           pr-10
//           text-[13px]
//           font-medium
//           text-slate-800
//           outline-none
//           transition-all
//           duration-200
//           hover:border-slate-300
//           focus:border-[#087f8c]
//           focus:ring-4
//           focus:ring-[#087f8c]/10
//         "
//       >
//         {children}
//       </select>

//       <FiChevronDown
//         size={16}
//         className="
//           pointer-events-none
//           absolute
//           right-3.5
//           top-1/2
//           -translate-y-1/2
//           text-slate-400
//         "
//       />
//     </div>
//   );
// };

// /* =========================================================
//    TOGGLE
// ========================================================= */

// const Toggle = ({
//   enabled,
//   onChange,
//   label,
//   description,
// }) => {
//   return (
//     <button
//       type="button"
//       onClick={() => onChange(!enabled)}
//       className="
//         flex
//         w-full
//         items-center
//         justify-between
//         gap-3
//         rounded-xl
//         border
//         border-slate-200
//         bg-white
//         p-3
//         text-left
//         transition
//         hover:border-slate-300
//       "
//     >
//       <div>
//         <p className="text-[13px] font-semibold text-slate-800">
//           {label}
//         </p>

//         {description && (
//           <p className="mt-0.5 text-[11px] leading-4 text-slate-500">
//             {description}
//           </p>
//         )}
//       </div>

//       <span
//         className={`
//           relative
//           h-5
//           w-9
//           shrink-0
//           rounded-full
//           transition-colors
//           ${enabled ? "bg-[#087f8c]" : "bg-slate-300"}
//         `}
//       >
//         <span
//           className={`
//             absolute
//             top-0.5
//             h-4
//             w-4
//             rounded-full
//             bg-white
//             shadow
//             transition-transform
//             ${enabled
//               ? "translate-x-[18px]"
//               : "translate-x-0.5"
//             }
//           `}
//         />
//       </span>
//     </button>
//   );
// };

// /* =========================================================
//    MAIN FORM
// ========================================================= */

// export default function DoctorForm({
//   onSubmit,
//   onClose,
//   userId,
//   initialData = null,
// }) {
//   const imageInputRef = useRef(null);
//   const certificateInputRefs = useRef({});

//   /* =========================================================
//      API
//   ========================================================= */

//   const {
//     data: deptData,
//     isLoading: deptLoading,
//   } = useSWR(
//     "departments",
//     ApiService.get
//   );

//   const {
//     data: specData,
//     isLoading: specLoading,
//   } = useSWR(
//     "specialties",
//     ApiService.get
//   );

//   const departments = deptData?.data || [];
//   const specialties = specData?.data || [];

//   /* =========================================================
//      FORM STATE
//   ========================================================= */

//   const [formData, setFormData] = useState({
//     created_by:
//       initialData?.created_by ??
//       userId ??
//       "",

//     department_id:
//       initialData?.department_id ??
//       "",

//     specialty_id:
//       initialData?.specialty_id ??
//       "",

//     name:
//       initialData?.name ??
//       "",

//     contact_no:
//       initialData?.contact_no ??
//       "",

//     email:
//       initialData?.email ??
//       "",

//     qualification:
//       initialData?.qualification ??
//       "",

//     experience_years:
//       initialData?.experience_years ??
//       "",

//     image_url:
//       initialData?.image_url ??
//       "",

//     web_heading:
//       initialData?.web_heading ??
//       "Senior Consultant",

//     web_bio:
//       initialData?.web_bio ??
//       "",

//     web_experience:
//       initialData?.web_experience ??
//       "",

//     web_specilization:
//       Array.isArray(
//         initialData?.web_specilization
//       )
//         ? initialData.web_specilization
//         : [],

//     web_certificat:
//       Array.isArray(
//         initialData?.web_certificat
//       )
//         ? initialData.web_certificat
//         : [],

//     web_awards:
//       Array.isArray(initialData?.web_awards)
//         ? initialData.web_awards
//         : [],

//     available:
//       initialData?.available ?? true,

//     status:
//       initialData?.status ?? true,
//   });

//   const [
//     specializationInput,
//     setSpecializationInput,
//   ] = useState("");

//   const [
//     imagePreview,
//     setImagePreview,
//   ] = useState(
//     initialData?.image_url || ""
//   );

//   const [saving, setSaving] =
//     useState(false);

//   /* =========================================================
//      COMMON CHANGE
//   ========================================================= */

//   const handleChange = (e) => {
//     const {
//       name,
//       value,
//     } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   /* =========================================================
//      IMAGE UPLOAD
//   ========================================================= */

//   const handleImageChange = (e) => {
//     const file =
//       e.target.files?.[0];

//     if (!file) return;

//     const preview =
//       URL.createObjectURL(file);

//     setImagePreview(preview);

//     setFormData((prev) => ({
//       ...prev,
//       image_url: file,
//       image_file: file,
//     }));
//   };

//   /* =========================================================
//      SPECIALIZATION
//   ========================================================= */

//   const addSpecialization = () => {
//     const value =
//       specializationInput.trim();

//     if (!value) return;

//     const alreadyExists =
//       formData.web_specilization.some(
//         (item) =>
//           item.toLowerCase() ===
//           value.toLowerCase()
//       );

//     if (alreadyExists) {
//       setSpecializationInput("");
//       return;
//     }

//     setFormData((prev) => ({
//       ...prev,
//       web_specilization: [
//         ...prev.web_specilization,
//         value,
//       ],
//     }));

//     setSpecializationInput("");
//   };

//   const handleSpecializationKeyDown = (
//     e
//   ) => {
//     if (
//       e.key === "Enter" ||
//       e.key === ","
//     ) {
//       e.preventDefault();
//       addSpecialization();
//     }
//   };

//   const removeSpecialization = (
//     index
//   ) => {
//     setFormData((prev) => ({
//       ...prev,
//       web_specilization:
//         prev.web_specilization.filter(
//           (_, i) => i !== index
//         ),
//     }));
//   };

//   /* =========================================================
//      CERTIFICATES
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
//       const certificates = [
//         ...prev.web_certificat,
//       ];

//       certificates[index] = {
//         ...certificates[index],
//         [field]: value,
//       };

//       return {
//         ...prev,
//         web_certificat: certificates,
//       };
//     });
//   };

//   const removeCertificate = (
//     index
//   ) => {
//     setFormData((prev) => ({
//       ...prev,
//       web_certificat:
//         prev.web_certificat.filter(
//           (_, i) => i !== index
//         ),
//     }));
//   };

//   const handleCertificateFile = (
//     index,
//     file
//   ) => {
//     if (!file) return;

//     setFormData((prev) => {
//       const certificates = [
//         ...prev.web_certificat,
//       ];

//       certificates[index] = {
//         ...certificates[index],
//         file,
//       };

//       return {
//         ...prev,
//         web_certificat: certificates,
//       };
//     });
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
//       const awards = [
//         ...prev.web_awards,
//       ];

//       awards[index] = {
//         ...awards[index],
//         [field]: value,
//       };

//       return {
//         ...prev,
//         web_awards: awards,
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
//      AUTO EXPERIENCE
//   ========================================================= */

//   const useExperienceText = () => {
//     if (
//       formData.experience_years === ""
//     ) {
//       return;
//     }

//     setFormData((prev) => ({
//       ...prev,
//       web_experience:
//         `${prev.experience_years}+ Years of Experience`,
//     }));
//   };

//   /* =========================================================
//      SUBMIT
//   ========================================================= */

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   // if (!formData.name.trim()) {
//   //   //   alert("Please enter doctor name.");
//   //   //   return;
//   //   // }

//   //   // if (!formData.email.trim()) {
//   //   //   alert("Please enter doctor email.");
//   //   //   return;
//   //   // }

//   //   // if (!formData.department_id) {
//   //   //   alert("Please select department.");
//   //   //   return;
//   //   // }

//   //   // if (!formData.specialty_id) {
//   //   //   alert("Please select specialty.");
//   //   //   return;
//   //   // }

//   //   const payload = {
//   //     ...formData,

//   //     created_by:
//   //       formData.created_by
//   //         ? Number(
//   //             formData.created_by
//   //           )
//   //         : null,

//   //     department_id:
//   //       formData.department_id
//   //         ? Number(
//   //             formData.department_id
//   //           )
//   //         : null,

//   //     specialty_id:
//   //       formData.specialty_id
//   //         ? Number(
//   //             formData.specialty_id
//   //           )
//   //         : null,

//   //     experience_years:
//   //       formData.experience_years !== ""
//   //         ? Number(
//   //             formData.experience_years
//   //           )
//   //         : 0,

//   //     web_specilization:
//   //       formData.web_specilization,

//   //     web_certificat:
//   //       formData.web_certificat,

//   //     web_awards:
//   //       formData.web_awards,

//   //     available:
//   //       Boolean(formData.available),

//   //     status:
//   //       Boolean(formData.status),
//   //   };

//   //   try {
//   //     setSaving(true);

//   //     if (onSubmit) {
//   //       await onSubmit(payload);
//   //     }
//   //   } finally {
//   //     setSaving(false);
//   //   }
//   // };

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     setSaving(true);

//     // ==========================================
//     // CREATE FORMDATA
//     // ==========================================

//     const payload = new FormData();

//     // ==========================================
//     // NORMAL FIELDS
//     // ==========================================

//     payload.append(
//       "created_by",
//       formData.created_by
//         ? String(formData.created_by)
//         : ""
//     );

//     payload.append(
//       "department_id",
//       formData.department_id
//         ? String(formData.department_id)
//         : ""
//     );

//     payload.append(
//       "specialty_id",
//       formData.specialty_id
//         ? String(formData.specialty_id)
//         : ""
//     );

//     payload.append(
//       "name",
//       formData.name || ""
//     );

//     payload.append(
//       "contact_no",
//       formData.contact_no || ""
//     );

//     payload.append(
//       "email",
//       formData.email || ""
//     );

//     payload.append(
//       "qualification",
//       formData.qualification || ""
//     );

//     payload.append(
//       "experience_years",
//       formData.experience_years !== ""
//         ? String(formData.experience_years)
//         : "0"
//     );

//     payload.append(
//       "web_experience",
//       formData.web_experience || ""
//     );

//     payload.append(
//       "web_bio",
//       formData.web_bio || ""
//     );

//     payload.append(
//       "web_heading",
//       formData.web_heading || ""
//     );

//     // ==========================================
//     // JSON FIELDS
//     // ==========================================

//     payload.append(
//       "web_specilization",
//       JSON.stringify(
//         formData.web_specilization || []
//       )
//     );

//     payload.append(
//       "web_certificat",
//       JSON.stringify(
//         formData.web_certificat || []
//       )
//     );

//     payload.append(
//       "web_awards",
//       JSON.stringify(
//         formData.web_awards || []
//       )
//     );

//     // ==========================================
//     // STATUS
//     // ==========================================

//     payload.append(
//       "available",
//       formData.available ? "1" : "0"
//     );

//     payload.append(
//       "status",
//       formData.status ? "1" : "0"
//     );

//     // ==========================================
//     // IMAGE
//     // ==========================================

//     if (formData.image_file) {
//       payload.append(
//         "image",
//         formData.image_file
//       );
//     }

//     // ==========================================
//     // DEBUG
//     // ==========================================

//     for (const [key, value] of payload.entries()) {
//       console.log(key, value);
//     }

//     // ==========================================
//     // SEND TO PARENT
//     // ==========================================

//     if (onSubmit) {
//       await onSubmit(payload);
//     }

//   } catch (error) {
//     console.error(
//       "Doctor submit error:",
//       error
//     );
//   } finally {
//     setSaving(false);
//   }
// };
//   /* =========================================================
//      ANIMATION
//   ========================================================= */

//   const containerVariants = {
//     hidden: {
//       opacity: 0,
//       y: 8,
//     },

//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.35,
//         staggerChildren: 0.04,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: {
//       opacity: 0,
//       y: 8,
//     },

//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.3,
//       },
//     },
//   };

//   /* =========================================================
//      JSX
//   ========================================================= */

//   return (
//     <motion.form
//       onSubmit={handleSubmit}
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//       className="w-full"
//     >
//       <div
//         className="
//           grid
//           grid-cols-1
//           gap-4
//           xl:grid-cols-[minmax(0,1fr)_320px]
//         "
//       >
//         {/* =====================================================
//             LEFT
//         ===================================================== */}

//         <div className="space-y-4">

//           {/* ===================================================
//               BASIC INFORMATION
//           =================================================== */}

//           <motion.section
//             variants={itemVariants}
//             className="
//               rounded-2xl
//               border
//               border-slate-200
//               bg-white
//               p-4
//               shadow-sm
//               sm:p-5
//             "
//           >
//             <SectionTitle
//               icon={FiUser}
//               title="Basic Information"
//               description="Enter doctor's personal and contact details."
//               iconClass="bg-teal-50 text-[#087f8c]"
//             />

//             <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

//               <div className="md:col-span-2">
//                 <FieldLabel required>
//                   Doctor Name
//                 </FieldLabel>

//                 <Input
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Enter doctor full name"
//                   icon={FiUser}
//                 />
//               </div>

//               <div>
//                 <FieldLabel required>
//                   Email Address
//                 </FieldLabel>

//                 <Input
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="doctor@example.com"
//                   icon={FiMail}
//                 />
//               </div>

//               <div>
//                 <FieldLabel>
//                   Contact Number
//                 </FieldLabel>

//                 <Input
//                   name="contact_no"
//                   value={
//                     formData.contact_no
//                   }
//                   onChange={handleChange}
//                   placeholder="+91 98765 43210"
//                   icon={FiPhone}
//                 />
//               </div>

//               <div className="md:col-span-2">
//                 <FieldLabel>
//                   Qualification
//                 </FieldLabel>

//                 <Input
//                   name="qualification"
//                   value={
//                     formData.qualification
//                   }
//                   onChange={handleChange}
//                   placeholder="MBBS, MD (Medicine), DM (Cardiology)"
//                   icon={FiBookOpen}
//                 />
//               </div>
//             </div>
//           </motion.section>

//           {/* ===================================================
//               PROFESSIONAL INFORMATION
//           =================================================== */}

//           <motion.section
//             variants={itemVariants}
//             className="
//               rounded-2xl
//               border
//               border-slate-200
//               bg-white
//               p-4
//               shadow-sm
//               sm:p-5
//             "
//           >
//             <SectionTitle
//               icon={FiBriefcase}
//               title="Professional Information"
//               description="Configure department, specialty and experience."
//               iconClass="bg-blue-50 text-blue-600"
//             />

//             <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

//               <div>
//                 <FieldLabel required>
//                   Department
//                 </FieldLabel>

//                 <Select
//                   name="department_id"
//                   value={
//                     formData.department_id
//                   }
//                   onChange={handleChange}
//                   disabled={deptLoading}
//                 >
//                   <option value="">
//                     {deptLoading
//                       ? "Loading departments..."
//                       : "Select Department"}
//                   </option>

//                   {departments.map(
//                     (department) => (
//                       <option
//                         key={department.id}
//                         value={department.id}
//                       >
//                         {department.name}
//                       </option>
//                     )
//                   )}
//                 </Select>
//               </div>

//               <div>
//                 <FieldLabel required>
//                   Specialty
//                 </FieldLabel>

//                 <Select
//                   name="specialty_id"
//                   value={
//                     formData.specialty_id
//                   }
//                   onChange={handleChange}
//                   disabled={specLoading}
//                 >
//                   <option value="">
//                     {specLoading
//                       ? "Loading specialties..."
//                       : "Select Specialty"}
//                   </option>

//                   {specialties.map(
//                     (specialty) => (
//                       <option
//                         key={specialty.id}
//                         value={specialty.id}
//                       >
//                         {specialty.name}
//                       </option>
//                     )
//                   )}
//                 </Select>
//               </div>

//               <div>
//                 <FieldLabel>
//                   Experience (Years)
//                 </FieldLabel>

//                 <Input
//                   name="experience_years"
//                   type="number"
//                   min="0"
//                   value={
//                     formData.experience_years
//                   }
//                   onChange={handleChange}
//                   placeholder="18"
//                   icon={FiCalendar}
//                 />
//               </div>

//               <div>
//                 <FieldLabel>
//                   Website Experience
//                 </FieldLabel>

//                 <div className="flex gap-2">
//                   <div className="min-w-0 flex-1">
//                     <Input
//                       name="web_experience"
//                       value={
//                         formData.web_experience
//                       }
//                       onChange={handleChange}
//                       placeholder="18+ Years of Experience"
//                     />
//                   </div>

//                   <button
//                     type="button"
//                     onClick={
//                       useExperienceText
//                     }
//                     className="
//                       h-11
//                       shrink-0
//                       rounded-xl
//                       border
//                       border-[#087f8c]/20
//                       bg-[#087f8c]/5
//                       px-3
//                       text-[12px]
//                       font-semibold
//                       text-[#087f8c]
//                       transition
//                       hover:bg-[#087f8c]/10
//                     "
//                   >
//                     Auto
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </motion.section>

//           {/* ===================================================
//               WEBSITE PROFILE
//           =================================================== */}

//           <motion.section
//             variants={itemVariants}
//             className="
//               rounded-2xl
//               border
//               border-slate-200
//               bg-white
//               p-4
//               shadow-sm
//               sm:p-5
//             "
//           >
//             <SectionTitle
//               icon={FiFileText}
//               title="Website Profile"
//               description="Content displayed on public doctor profile."
//               iconClass="bg-purple-50 text-purple-600"
//             />

//             <div className="space-y-4">

//               <div>
//                 <FieldLabel>
//                   Profile Heading
//                 </FieldLabel>

//                 <Input
//                   name="web_heading"
//                   value={
//                     formData.web_heading
//                   }
//                   onChange={handleChange}
//                   placeholder="Senior Consultant Cardiologist"
//                 />
//               </div>

//               <div>
//                 <FieldLabel>
//                   Doctor Biography
//                 </FieldLabel>

//                 <Textarea
//                   name="web_bio"
//                   value={formData.web_bio}
//                   onChange={handleChange}
//                   placeholder="Write a professional biography about the doctor..."
//                 />

//                 <p className="mt-1.5 text-[11px] text-slate-400">
//                   Recommended: 2–4 professional paragraphs.
//                 </p>
//               </div>
//             </div>
//           </motion.section>

//           {/* ===================================================
//               SPECIALIZATIONS
//           =================================================== */}

//           <motion.section
//             variants={itemVariants}
//             className="
//               rounded-2xl
//               border
//               border-slate-200
//               bg-white
//               p-4
//               shadow-sm
//               sm:p-5
//             "
//           >
//             <SectionTitle
//               icon={FiActivity}
//               title="Specializations"
//               description="Add doctor's areas of expertise."
//               iconClass="bg-emerald-50 text-emerald-600"
//             />

//             <FieldLabel>
//               Areas of Specialization
//             </FieldLabel>

//             <div className="flex gap-2">
//               <input
//                 value={
//                   specializationInput
//                 }
//                 onChange={(e) =>
//                   setSpecializationInput(
//                     e.target.value
//                   )
//                 }
//                 onKeyDown={
//                   handleSpecializationKeyDown
//                 }
//                 placeholder="e.g. Interventional Cardiology"
//                 className="
//                   h-11
//                   min-w-0
//                   flex-1
//                   rounded-xl
//                   border
//                   border-slate-200
//                   bg-white
//                   px-3.5
//                   text-[13px]
//                   font-medium
//                   text-slate-800
//                   outline-none
//                   placeholder:text-[13px]
//                   placeholder:text-slate-400
//                   focus:border-[#087f8c]
//                   focus:ring-4
//                   focus:ring-[#087f8c]/10
//                 "
//               />

//               <button
//                 type="button"
//                 onClick={
//                   addSpecialization
//                 }
//                 className="
//                   flex
//                   h-11
//                   w-11
//                   shrink-0
//                   items-center
//                   justify-center
//                   rounded-xl
//                   bg-[#087f8c]
//                   text-white
//                   shadow-sm
//                   transition
//                   hover:bg-[#066c77]
//                   active:scale-95
//                 "
//               >
//                 <FiPlus size={18} />
//               </button>
//             </div>

//             <p className="mt-1.5 text-[11px] text-slate-400">
//               Press Enter or click + to add.
//             </p>

//             {formData.web_specilization
//               .length > 0 && (
//               <div className="mt-3 flex flex-wrap gap-2">
//                 {formData.web_specilization.map(
//                   (
//                     specialization,
//                     index
//                   ) => (
//                     <motion.div
//                       key={`${specialization}-${index}`}
//                       initial={{
//                         opacity: 0,
//                         scale: 0.9,
//                       }}
//                       animate={{
//                         opacity: 1,
//                         scale: 1,
//                       }}
//                       className="
//                         inline-flex
//                         items-center
//                         gap-1.5
//                         rounded-full
//                         border
//                         border-teal-100
//                         bg-teal-50
//                         px-2.5
//                         py-1.5
//                         text-[12px]
//                         font-semibold
//                         text-[#087f8c]
//                       "
//                     >
//                       <FiCheck
//                         size={12}
//                       />

//                       <span>
//                         {specialization}
//                       </span>

//                       <button
//                         type="button"
//                         onClick={() =>
//                           removeSpecialization(
//                             index
//                           )
//                         }
//                         className="
//                           rounded-full
//                           p-0.5
//                           hover:bg-white
//                         "
//                       >
//                         <FiX size={12} />
//                       </button>
//                     </motion.div>
//                   )
//                 )}
//               </div>
//             )}
//           </motion.section>

//           {/* ===================================================
//               CERTIFICATES
//           =================================================== */}

//           <motion.section
//             variants={itemVariants}
//             className="
//               rounded-2xl
//               border
//               border-slate-200
//               bg-white
//               p-4
//               shadow-sm
//               sm:p-5
//             "
//           >
//             <div className="flex items-start justify-between gap-3">
//               <SectionTitle
//                 icon={FiShield}
//                 title="Certificates"
//                 description="Add professional certifications."
//                 iconClass="bg-amber-50 text-amber-600"
//               />

//               <button
//                 type="button"
//                 onClick={
//                   addCertificate
//                 }
//                 className="
//                   flex
//                   shrink-0
//                   items-center
//                   gap-1.5
//                   rounded-xl
//                   bg-[#087f8c]
//                   px-3
//                   py-2
//                   text-[12px]
//                   font-semibold
//                   text-white
//                   transition
//                   hover:bg-[#066c77]
//                 "
//               >
//                 <FiPlus size={14} />

//                 <span className="hidden sm:inline">
//                   Add Certificate
//                 </span>
//               </button>
//             </div>

//             {formData.web_certificat
//               .length === 0 ? (
//               <div
//                 className="
//                   rounded-xl
//                   border
//                   border-dashed
//                   border-slate-300
//                   bg-slate-50
//                   px-4
//                   py-8
//                   text-center
//                 "
//               >
//                 <div className="
//                   mx-auto
//                   flex
//                   h-10
//                   w-10
//                   items-center
//                   justify-center
//                   rounded-full
//                   bg-white
//                   text-slate-400
//                   shadow-sm
//                 ">
//                   <FiShield size={19} />
//                 </div>

//                 <p className="mt-2 text-[13px] font-semibold text-slate-700">
//                   No certificates added
//                 </p>

//                 <p className="mt-0.5 text-[11px] text-slate-400">
//                   Add certifications to display on profile.
//                 </p>
//               </div>
//             ) : (
//               <div className="space-y-3">
//                 {formData.web_certificat.map(
//                   (
//                     certificate,
//                     index
//                   ) => (
//                     <motion.div
//                       key={index}
//                       initial={{
//                         opacity: 0,
//                         y: 8,
//                       }}
//                       animate={{
//                         opacity: 1,
//                         y: 0,
//                       }}
//                       className="
//                         rounded-xl
//                         border
//                         border-slate-200
//                         bg-slate-50/70
//                         p-3.5
//                       "
//                     >
//                       <div className="mb-3 flex items-center justify-between">
//                         <div className="flex items-center gap-2">
//                           <div className="
//                             flex
//                             h-8
//                             w-8
//                             items-center
//                             justify-center
//                             rounded-lg
//                             bg-amber-50
//                             text-amber-600
//                           ">
//                             <FiAward size={15} />
//                           </div>

//                           <div>
//                             <p className="text-[12px] font-bold text-slate-800">
//                               Certificate #
//                               {index + 1}
//                             </p>

//                             <p className="text-[10px] text-slate-400">
//                               Professional certification
//                             </p>
//                           </div>
//                         </div>

//                         <button
//                           type="button"
//                           onClick={() =>
//                             removeCertificate(
//                               index
//                             )
//                           }
//                           className="
//                             flex
//                             h-8
//                             w-8
//                             items-center
//                             justify-center
//                             rounded-lg
//                             bg-red-50
//                             text-red-500
//                             transition
//                             hover:bg-red-100
//                           "
//                         >
//                           <FiTrash2
//                             size={14}
//                           />
//                         </button>
//                       </div>

//                       <div className="grid grid-cols-1 gap-3 md:grid-cols-2">

//                         <div>
//                           <FieldLabel>
//                             Certificate Title
//                           </FieldLabel>

//                           <Input
//                             value={
//                               certificate.title ||
//                               ""
//                             }
//                             onChange={(e) =>
//                               updateCertificate(
//                                 index,
//                                 "title",
//                                 e.target.value
//                               )
//                             }
//                             placeholder="Advanced Cardiac Life Support"
//                           />
//                         </div>

//                         <div>
//                           <FieldLabel>
//                             Organization
//                           </FieldLabel>

//                           <Input
//                             value={
//                               certificate.organization ||
//                               ""
//                             }
//                             onChange={(e) =>
//                               updateCertificate(
//                                 index,
//                                 "organization",
//                                 e.target.value
//                               )
//                             }
//                             placeholder="American Heart Association"
//                           />
//                         </div>

//                         <div>
//                           <FieldLabel>
//                             Year
//                           </FieldLabel>

//                           <Input
//                             type="number"
//                             value={
//                               certificate.year ||
//                               ""
//                             }
//                             onChange={(e) =>
//                               updateCertificate(
//                                 index,
//                                 "year",
//                                 e.target.value
//                               )
//                             }
//                             placeholder="2024"
//                             icon={FiCalendar}
//                           />
//                         </div>

//                         <div>
//                           <FieldLabel>
//                             Certificate File
//                           </FieldLabel>

//                           <input
//                             type="file"
//                             accept=".pdf,.jpg,.jpeg,.png"
//                             ref={(element) => {
//                               certificateInputRefs.current[
//                                 index
//                               ] = element;
//                             }}
//                             onChange={(e) =>
//                               handleCertificateFile(
//                                 index,
//                                 e.target.files?.[0]
//                               )
//                             }
//                             className="hidden"
//                           />

//                           <button
//                             type="button"
//                             onClick={() =>
//                               certificateInputRefs.current[
//                                 index
//                               ]?.click()
//                             }
//                             className="
//                               flex
//                               h-11
//                               w-full
//                               items-center
//                               gap-2
//                               rounded-xl
//                               border
//                               border-dashed
//                               border-slate-300
//                               bg-white
//                               px-3.5
//                               text-left
//                               transition
//                               hover:border-[#087f8c]
//                               hover:bg-teal-50/30
//                             "
//                           >
//                             <FiUploadCloud
//                               size={16}
//                               className="shrink-0 text-[#087f8c]"
//                             />

//                             <span className="min-w-0 truncate text-[12px] font-medium text-slate-600">
//                               {certificate
//                                 .file?.name ||
//                                 certificate.file_url ||
//                                 "Upload certificate"}
//                             </span>
//                           </button>
//                         </div>
//                       </div>
//                     </motion.div>
//                   )
//                 )}
//               </div>
//             )}
//           </motion.section>

//           {/* ===================================================
//               AWARDS
//           =================================================== */}

//           <motion.section
//             variants={itemVariants}
//             className="
//               rounded-2xl
//               border
//               border-slate-200
//               bg-white
//               p-4
//               shadow-sm
//               sm:p-5
//             "
//           >
//             <div className="flex items-start justify-between gap-3">
//               <SectionTitle
//                 icon={FiStar}
//                 title="Awards & Recognition"
//                 description="Showcase professional recognition."
//                 iconClass="bg-rose-50 text-rose-600"
//               />

//               <button
//                 type="button"
//                 onClick={addAward}
//                 className="
//                   flex
//                   shrink-0
//                   items-center
//                   gap-1.5
//                   rounded-xl
//                   bg-[#087f8c]
//                   px-3
//                   py-2
//                   text-[12px]
//                   font-semibold
//                   text-white
//                   transition
//                   hover:bg-[#066c77]
//                 "
//               >
//                 <FiPlus size={14} />

//                 <span className="hidden sm:inline">
//                   Add Award
//                 </span>
//               </button>
//             </div>

//             {formData.web_awards
//               .length === 0 ? (
//               <div
//                 className="
//                   rounded-xl
//                   border
//                   border-dashed
//                   border-slate-300
//                   bg-slate-50
//                   px-4
//                   py-8
//                   text-center
//                 "
//               >
//                 <div className="
//                   mx-auto
//                   flex
//                   h-10
//                   w-10
//                   items-center
//                   justify-center
//                   rounded-full
//                   bg-white
//                   text-slate-400
//                   shadow-sm
//                 ">
//                   <FiStar size={19} />
//                 </div>

//                 <p className="mt-2 text-[13px] font-semibold text-slate-700">
//                   No awards added
//                 </p>

//                 <p className="mt-0.5 text-[11px] text-slate-400">
//                   Add awards and recognition received by doctor.
//                 </p>
//               </div>
//             ) : (
//               <div className="space-y-3">
//                 {formData.web_awards.map(
//                   (award, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{
//                         opacity: 0,
//                         y: 8,
//                       }}
//                       animate={{
//                         opacity: 1,
//                         y: 0,
//                       }}
//                       className="
//                         rounded-xl
//                         border
//                         border-slate-200
//                         bg-slate-50/70
//                         p-3.5
//                       "
//                     >
//                       <div className="mb-3 flex items-center justify-between">
//                         <div className="flex items-center gap-2">
//                           <div className="
//                             flex
//                             h-8
//                             w-8
//                             items-center
//                             justify-center
//                             rounded-lg
//                             bg-rose-50
//                             text-rose-600
//                           ">
//                             <FiStar size={15} />
//                           </div>

//                           <div>
//                             <p className="text-[12px] font-bold text-slate-800">
//                               Award #{index + 1}
//                             </p>

//                             <p className="text-[10px] text-slate-400">
//                               Professional recognition
//                             </p>
//                           </div>
//                         </div>

//                         <button
//                           type="button"
//                           onClick={() =>
//                             removeAward(
//                               index
//                             )
//                           }
//                           className="
//                             flex
//                             h-8
//                             w-8
//                             items-center
//                             justify-center
//                             rounded-lg
//                             bg-red-50
//                             text-red-500
//                             transition
//                             hover:bg-red-100
//                           "
//                         >
//                           <FiTrash2
//                             size={14}
//                           />
//                         </button>
//                       </div>

//                       <div className="grid grid-cols-1 gap-3 md:grid-cols-3">

//                         <div>
//                           <FieldLabel>
//                             Award Title
//                           </FieldLabel>

//                           <Input
//                             value={
//                               award.title ||
//                               ""
//                             }
//                             onChange={(e) =>
//                               updateAward(
//                                 index,
//                                 "title",
//                                 e.target.value
//                               )
//                             }
//                             placeholder="Best Cardiologist Award"
//                           />
//                         </div>

//                         <div>
//                           <FieldLabel>
//                             Organization
//                           </FieldLabel>

//                           <Input
//                             value={
//                               award.organization ||
//                               ""
//                             }
//                             onChange={(e) =>
//                               updateAward(
//                                 index,
//                                 "organization",
//                                 e.target.value
//                               )
//                             }
//                             placeholder="Healthcare Excellence Foundation"
//                           />
//                         </div>

//                         <div>
//                           <FieldLabel>
//                             Year
//                           </FieldLabel>

//                           <Input
//                             type="number"
//                             value={
//                               award.year ||
//                               ""
//                             }
//                             onChange={(e) =>
//                               updateAward(
//                                 index,
//                                 "year",
//                                 e.target.value
//                               )
//                             }
//                             placeholder="2024"
//                             icon={FiCalendar}
//                           />
//                         </div>
//                       </div>
//                     </motion.div>
//                   )
//                 )}
//               </div>
//             )}
//           </motion.section>
//         </div>

//         {/* =====================================================
//             RIGHT SIDE
//         ===================================================== */}

//         <div className="space-y-4 xl:sticky xl:top-4 xl:self-start">

//           {/* ===================================================
//               PHOTO
//           =================================================== */}

//           <motion.section
//             variants={itemVariants}
//             className="
//               overflow-hidden
//               rounded-2xl
//               border
//               border-slate-200
//               bg-white
//               shadow-sm
//             "
//           >
//             <div className="border-b border-slate-100 p-4 sm:p-5">
//               <SectionTitle
//                 icon={FiImage}
//                 title="Doctor Photo"
//                 description="Upload professional profile photo."
//                 iconClass="bg-cyan-50 text-cyan-600"
//               />

//               <div className="flex flex-col items-center">

//                 <div
//                   className="
//                     relative
//                     flex
//                     h-36
//                     w-36
//                     items-center
//                     justify-center
//                     overflow-hidden
//                     rounded-full
//                     border-4
//                     border-white
//                     bg-slate-100
//                     shadow-[0_8px_30px_rgba(0,0,0,0.10)]
//                   "
//                 >
//                   {imagePreview ? (
//                     <img
//                       src={imagePreview}
//                       alt="Doctor preview"
//                       className="
//                         h-full
//                         w-full
//                         object-cover
//                       "
//                     />
//                   ) : (
//                     <div className="text-center">
//                       <FiUser
//                         size={32}
//                         className="mx-auto text-slate-300"
//                       />

//                       <p className="mt-1 text-[10px] font-medium text-slate-400">
//                         No Photo
//                       </p>
//                     </div>
//                   )}
//                 </div>

//                 <input
//                   ref={imageInputRef}
//                   type="file"
//                   accept="image/*"
//                   onChange={
//                     handleImageChange
//                   }
//                   className="hidden"
//                 />

//                 <button
//                   type="button"
//                   onClick={() =>
//                     imageInputRef.current?.click()
//                   }
//                   className="
//                     mt-4
//                     flex
//                     items-center
//                     gap-2
//                     rounded-xl
//                     border
//                     border-[#087f8c]/20
//                     bg-[#087f8c]/5
//                     px-3.5
//                     py-2
//                     text-[12px]
//                     font-semibold
//                     text-[#087f8c]
//                     transition
//                     hover:bg-[#087f8c]/10
//                   "
//                 >
//                   <FiUploadCloud size={15} />

//                   {imagePreview
//                     ? "Change Photo"
//                     : "Upload Photo"}
//                 </button>

//                 <p className="mt-2 text-center text-[10px] leading-4 text-slate-400">
//                   JPG, JPEG or PNG
//                   <br />
//                   Recommended: 500 × 500 px
//                 </p>
//               </div>
//             </div>

//             {/* =================================================
//                 STATUS
//             ================================================= */}

//             <div className="space-y-2.5 p-4 sm:p-5">
//               <FieldLabel>
//                 Doctor Status
//               </FieldLabel>

//               <Toggle
//                 enabled={
//                   formData.status
//                 }
//                 onChange={(value) =>
//                   setFormData((prev) => ({
//                     ...prev,
//                     status: value,
//                   }))
//                 }
//                 label="Active Doctor"
//                 description="Profile is visible in the system."
//               />

//               <Toggle
//                 enabled={
//                   formData.available
//                 }
//                 onChange={(value) =>
//                   setFormData((prev) => ({
//                     ...prev,
//                     available: value,
//                   }))
//                 }
//                 label="Available for Appointment"
//                 description="Allow patients to book appointments."
//               />
//             </div>
//           </motion.section>

//           {/* ===================================================
//               SUMMARY
//           =================================================== */}

//           <motion.section
//             variants={itemVariants}
//             className="
//               rounded-2xl
//               border
//               border-slate-200
//               bg-white
//               p-4
//               shadow-sm
//             "
//           >
//             <div className="mb-3 flex items-center gap-2.5">
//               <div className="
//                 flex
//                 h-9
//                 w-9
//                 items-center
//                 justify-center
//                 rounded-xl
//                 bg-indigo-50
//                 text-indigo-600
//               ">
//                 <FiActivity size={16} />
//               </div>

//               <div>
//                 <h3 className="text-[14px] font-bold text-slate-900">
//                   Profile Summary
//                 </h3>

//                 <p className="text-[10px] text-slate-400">
//                   Current form information
//                 </p>
//               </div>
//             </div>

//             <div className="space-y-1.5">

//               <div className="
//                 flex
//                 items-center
//                 justify-between
//                 rounded-lg
//                 bg-slate-50
//                 px-3
//                 py-2
//               ">
//                 <span className="text-[11px] font-medium text-slate-500">
//                   Specializations
//                 </span>

//                 <span className="text-[12px] font-bold text-slate-800">
//                   {
//                     formData
//                       .web_specilization
//                       .length
//                   }
//                 </span>
//               </div>

//               <div className="
//                 flex
//                 items-center
//                 justify-between
//                 rounded-lg
//                 bg-slate-50
//                 px-3
//                 py-2
//               ">
//                 <span className="text-[11px] font-medium text-slate-500">
//                   Certificates
//                 </span>

//                 <span className="text-[12px] font-bold text-slate-800">
//                   {
//                     formData
//                       .web_certificat
//                       .length
//                   }
//                 </span>
//               </div>

//               <div className="
//                 flex
//                 items-center
//                 justify-between
//                 rounded-lg
//                 bg-slate-50
//                 px-3
//                 py-2
//               ">
//                 <span className="text-[11px] font-medium text-slate-500">
//                   Awards
//                 </span>

//                 <span className="text-[12px] font-bold text-slate-800">
//                   {
//                     formData
//                       .web_awards
//                       .length
//                   }
//                 </span>
//               </div>

//               <div className="
//                 flex
//                 items-center
//                 justify-between
//                 rounded-lg
//                 bg-slate-50
//                 px-3
//                 py-2
//               ">
//                 <span className="text-[11px] font-medium text-slate-500">
//                   Experience
//                 </span>

//                 <span className="text-[12px] font-bold text-slate-800">
//                   {formData
//                     .experience_years
//                     ? `${formData.experience_years} Years`
//                     : "—"}
//                 </span>
//               </div>
//             </div>
//           </motion.section>
//         </div>
//       </div>

//       {/* =====================================================
//           FOOTER
//       ===================================================== */}

//       <motion.div
//         variants={itemVariants}
//         className="
//           mt-4
//           flex
//           flex-col-reverse
//           gap-3
//           rounded-2xl
//           border
//           border-slate-200
//           bg-white
//           p-3.5
//           shadow-sm
//           sm:flex-row
//           sm:items-center
//           sm:justify-between
//           sm:p-4
//         "
//       >
//         <div>
//           <p className="text-[12px] font-semibold text-slate-700">
//             Ready to save doctor profile?
//           </p>

//           <p className="mt-0.5 text-[10px] text-slate-400">
//             Make sure all required information is completed.
//           </p>
//         </div>

//         <div className="flex w-full gap-2 sm:w-auto">

//           {onClose && (
//             <button
//               type="button"
//               onClick={onClose}
//               disabled={saving}
//               className="
//                 flex
//                 h-10
//                 flex-1
//                 items-center
//                 justify-center
//                 gap-1.5
//                 rounded-xl
//                 border
//                 border-slate-200
//                 bg-white
//                 px-4
//                 text-[12px]
//                 font-semibold
//                 text-slate-600
//                 transition
//                 hover:bg-slate-50
//                 disabled:opacity-50
//                 sm:flex-none
//               "
//             >
//               <FiX size={15} />
//               Cancel
//             </button>
//           )}

//           <button
//             type="submit"
//             disabled={saving}
//             className="
//               flex
//               h-10
//               flex-1
//               items-center
//               justify-center
//               gap-1.5
//               rounded-xl
//               bg-[#087f8c]
//               px-5
//               text-[12px]
//               font-semibold
//               text-white
//               shadow-sm
//               shadow-[#087f8c]/20
//               transition
//               hover:bg-[#066c77]
//               active:scale-[0.98]
//               disabled:cursor-not-allowed
//               disabled:opacity-60
//               sm:flex-none
//             "
//           >
//             {saving ? (
//               <>
//                 <span
//                   className="
//                     h-3.5
//                     w-3.5
//                     animate-spin
//                     rounded-full
//                     border-2
//                     border-white/30
//                     border-t-white
//                   "
//                 />

//                 Saving...
//               </>
//             ) : (
//               <>
//                 <FiSave size={15} />
//                 Save Doctor
//               </>
//             )}
//           </button>
//         </div>
//       </motion.div>
//     </motion.form>
//   );
// }





// "use client";

// import React, { useRef, useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import useSWR from "swr";
// import toast from "react-hot-toast";

// import {
//   FiActivity,
//   FiAward,
//   FiBriefcase,
//   FiCheck,
//   FiChevronDown,
//   FiFileText,
//   FiImage,
//   FiMail,
//   FiPlus,
//   FiSave,
//   FiShield,
//   FiStar,
//   FiTrash2,
//   FiUploadCloud,
//   FiUser,
//   FiX,
//   FiPhone,
//   FiBookOpen,
//   FiCalendar,
// } from "react-icons/fi";

// import ApiService from "./../../src/services/Apiservices";

// const MAX_IMAGE_SIZE = 5 * 1024 * 1024;
// const ALLOWED_IMAGE_TYPES = [
//   "image/jpeg",
//   "image/png",
//   "image/webp",
// ];

// const SectionTitle = ({
//   icon: Icon,
//   title,
//   description,
//   iconClass = "bg-teal-50 text-[#087f8c]",
// }) => (
//   <div className="mb-4 flex items-start gap-3">
//     <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${iconClass}`}>
//       <Icon size={18} />
//     </div>
//     <div>
//       <h2 className="text-[16px] font-bold tracking-tight text-slate-900">
//         {title}
//       </h2>
//       {description && (
//         <p className="mt-0.5 text-[12px] leading-5 text-slate-500">
//           {description}
//         </p>
//       )}
//     </div>
//   </div>
// );

// const FieldLabel = ({ children, required = false }) => (
//   <label className="mb-1.5 block text-[13px] font-semibold text-slate-700">
//     {children}
//     {required && <span className="ml-1 text-red-500">*</span>}
//   </label>
// );

// const Input = ({ icon: Icon, className = "", ...props }) => (
//   <div className="relative">
//     {Icon && (
//       <Icon
//         size={16}
//         className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
//       />
//     )}
//     <input
//       {...props}
//       className={`h-11 w-full rounded-xl border border-slate-200 bg-white ${
//         Icon ? "pl-10" : "px-3.5"
//       } pr-3.5 text-[13px] font-medium text-slate-800 outline-none transition hover:border-slate-300 focus:border-[#087f8c] focus:ring-4 focus:ring-[#087f8c]/10 placeholder:text-[13px] placeholder:font-normal placeholder:text-slate-400 disabled:cursor-not-allowed disabled:bg-slate-50 ${className}`}
//     />
//   </div>
// );

// const Textarea = (props) => (
//   <textarea
//     {...props}
//     className="min-h-[115px] w-full resize-y rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-[13px] font-medium leading-5 text-slate-800 outline-none transition placeholder:text-[13px] placeholder:font-normal placeholder:text-slate-400 hover:border-slate-300 focus:border-[#087f8c] focus:ring-4 focus:ring-[#087f8c]/10"
//   />
// );

// const Select = ({ children, ...props }) => (
//   <div className="relative">
//     <select
//       {...props}
//       className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 pr-10 text-[13px] font-medium text-slate-800 outline-none transition hover:border-slate-300 focus:border-[#087f8c] focus:ring-4 focus:ring-[#087f8c]/10"
//     >
//       {children}
//     </select>
//     <FiChevronDown
//       size={16}
//       className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400"
//     />
//   </div>
// );

// const Toggle = ({ enabled, onChange, label, description }) => (
//   <button
//     type="button"
//     onClick={() => onChange(!enabled)}
//     className="flex w-full items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-3 text-left transition hover:border-slate-300"
//   >
//     <div>
//       <p className="text-[13px] font-semibold text-slate-800">{label}</p>
//       {description && (
//         <p className="mt-0.5 text-[11px] leading-4 text-slate-500">
//           {description}
//         </p>
//       )}
//     </div>
//     <span
//       className={`relative h-5 w-9 shrink-0 rounded-full transition-colors ${
//         enabled ? "bg-[#087f8c]" : "bg-slate-300"
//       }`}
//     >
//       <span
//         className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform ${
//           enabled ? "translate-x-[18px]" : "translate-x-0.5"
//         }`}
//       />
//     </span>
//   </button>
// );

// export default function DoctorForm({
//   onSubmit,
//   onClose,
//   userId,
//   initialData = null,
// }) {
//   const imageInputRef = useRef(null);
//   const certificateInputRefs = useRef({});
//   const imagePreviewRef = useRef(null);

//   const { data: deptData, isLoading: deptLoading } = useSWR(
//     "departments",
//     ApiService.get
//   );

//   const { data: specData, isLoading: specLoading } = useSWR(
//     "specialties",
//     ApiService.get
//   );

//   const departments = deptData?.data || [];
//   const specialties = specData?.data || [];

//   const [formData, setFormData] = useState({
//     created_by: initialData?.created_by ?? userId ?? "",
//     department_id: initialData?.department_id ?? "",
//     specialty_id: initialData?.specialty_id ?? "",
//     name: initialData?.name ?? "",
//     contact_no: initialData?.contact_no ?? "",
//     email: initialData?.email ?? "",
//     qualification: initialData?.qualification ?? "",
//     experience_years: initialData?.experience_years ?? "",
//     image_url: initialData?.image_url ?? "",
//     web_heading: initialData?.web_heading ?? "Senior Consultant",
//     web_bio: initialData?.web_bio ?? "",
//     web_experience: initialData?.web_experience ?? "",
//     web_specilization: Array.isArray(initialData?.web_specilization)
//       ? initialData.web_specilization
//       : [],
//     web_certificat: Array.isArray(initialData?.web_certificat)
//       ? initialData.web_certificat
//       : [],
//     web_awards: Array.isArray(initialData?.web_awards)
//       ? initialData.web_awards
//       : [],
//     available: initialData?.available ?? true,
//     status: initialData?.status ?? true,
//   });

//   const [specializationInput, setSpecializationInput] = useState("");
//   const [imagePreview, setImagePreview] = useState(
//     initialData?.image_url || ""
//   );
//   const [saving, setSaving] = useState(false);

//   // Release temporary image previews when replaced or component unmounts.
//   useEffect(() => {
//     return () => {
//       if (imagePreviewRef.current) {
//         URL.revokeObjectURL(imagePreviewRef.current);
//       }
//     };
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // IMAGE VALIDATION
//   const handleImageChange = (e) => {
//     const file = e.target.files?.[0];

//     if (!file) return;

//     if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
//       toast.error("Only JPG, PNG and WebP images are allowed.");
//       e.target.value = "";
//       return;
//     }

//     if (file.size > MAX_IMAGE_SIZE) {
//       toast.error("Doctor image must not exceed 5 MB.");
//       e.target.value = "";
//       return;
//     }

//     if (imagePreviewRef.current) {
//       URL.revokeObjectURL(imagePreviewRef.current);
//     }

//     const preview = URL.createObjectURL(file);
//     imagePreviewRef.current = preview;
//     setImagePreview(preview);

//     setFormData((prev) => ({
//       ...prev,
//       image_url: file,
//       image_file: file,
//     }));

//     toast.success("Doctor image selected successfully.");
//   };

//   // SPECIALIZATIONS
//   const addSpecialization = () => {
//     const value = specializationInput.trim();

//     if (!value) {
//       toast.error("Please enter a specialization.");
//       return;
//     }

//     const exists = formData.web_specilization.some(
//       (item) => item.toLowerCase() === value.toLowerCase()
//     );

//     if (exists) {
//       toast.error("This specialization already exists.");
//       return;
//     }

//     setFormData((prev) => ({
//       ...prev,
//       web_specilization: [...prev.web_specilization, value],
//     }));

//     setSpecializationInput("");
//     toast.success("Specialization added.");
//   };

//   const handleSpecializationKeyDown = (e) => {
//     if (e.key === "Enter" || e.key === ",") {
//       e.preventDefault();
//       addSpecialization();
//     }
//   };

//   const removeSpecialization = (index) => {
//     setFormData((prev) => ({
//       ...prev,
//       web_specilization: prev.web_specilization.filter(
//         (_, i) => i !== index
//       ),
//     }));

//     toast.success("Specialization removed.");
//   };

//   // CERTIFICATES
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

//   const updateCertificate = (index, field, value) => {
//     setFormData((prev) => {
//       const certificates = [...prev.web_certificat];

//       certificates[index] = {
//         ...certificates[index],
//         [field]: value,
//       };

//       return { ...prev, web_certificat: certificates };
//     });
//   };

//   const removeCertificate = (index) => {
//     setFormData((prev) => ({
//       ...prev,
//       web_certificat: prev.web_certificat.filter(
//         (_, i) => i !== index
//       ),
//     }));

//     toast.success("Certificate removed.");
//   };

//   const handleCertificateFile = (index, file) => {
//     if (!file) return;

//     const allowed = [
//       "application/pdf",
//       "image/jpeg",
//       "image/png",
//     ];

//     if (!allowed.includes(file.type)) {
//       toast.error("Certificate must be a PDF, JPG or PNG file.");
//       if (certificateInputRefs.current[index]) {
//         certificateInputRefs.current[index].value = "";
//       }
//       return;
//     }

//     if (file.size > MAX_IMAGE_SIZE) {
//       toast.error("Certificate file must not exceed 5 MB.");
//       if (certificateInputRefs.current[index]) {
//         certificateInputRefs.current[index].value = "";
//       }
//       return;
//     }

//     setFormData((prev) => {
//       const certificates = [...prev.web_certificat];

//       certificates[index] = {
//         ...certificates[index],
//         file,
//       };

//       return { ...prev, web_certificat: certificates };
//     });

//     toast.success("Certificate file selected.");
//   };

//   // AWARDS
//   const addAward = () => {
//     setFormData((prev) => ({
//       ...prev,
//       web_awards: [
//         ...prev.web_awards,
//         { title: "", organization: "", year: "" },
//       ],
//     }));
//   };

//   const updateAward = (index, field, value) => {
//     setFormData((prev) => {
//       const awards = [...prev.web_awards];

//       awards[index] = {
//         ...awards[index],
//         [field]: value,
//       };

//       return { ...prev, web_awards: awards };
//     });
//   };

//   const removeAward = (index) => {
//     setFormData((prev) => ({
//       ...prev,
//       web_awards: prev.web_awards.filter(
//         (_, i) => i !== index
//       ),
//     }));

//     toast.success("Award removed.");
//   };

//   const useExperienceText = () => {
//     if (formData.experience_years === "") {
//       toast.error("Please enter experience in years first.");
//       return;
//     }

//     setFormData((prev) => ({
//       ...prev,
//       web_experience: `${prev.experience_years}+ Years of Experience`,
//     }));

//     toast.success("Experience text generated.");
//   };

//   // VALIDATION
//   const validateForm = () => {
//     if (!formData.name.trim()) {
//       toast.error("Please enter doctor name.");
//       return false;
//     }

//     if (!formData.email.trim()) {
//       toast.error("Please enter doctor email address.");
//       return false;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailRegex.test(formData.email.trim())) {
//       toast.error("Please enter a valid email address.");
//       return false;
//     }

//     if (!formData.contact_no.trim()) {
//       toast.error("Please enter contact number.");
//       return false;
//     }

//     const phoneDigits = formData.contact_no.replace(/\D/g, "");
//     const phoneRegex = /^\+?[0-9\s()-]+$/;

//     if (
//       !phoneRegex.test(formData.contact_no.trim()) ||
//       phoneDigits.length < 7 ||
//       phoneDigits.length > 15
//     ) {
//       toast.error("Please enter a valid contact number.");
//       return false;
//     }

//     if (!formData.qualification.trim()) {
//       toast.error("Please enter doctor's qualification.");
//       return false;
//     }

//     if (!formData.department_id) {
//       toast.error("Please select department.");
//       return false;
//     }

//     if (!formData.specialty_id) {
//       toast.error("Please select specialty.");
//       return false;
//     }

//     if (
//       formData.experience_years !== "" &&
//       (
//         !Number.isFinite(Number(formData.experience_years)) ||
//         Number(formData.experience_years) < 0
//       )
//     ) {
//       toast.error("Please enter valid experience in years.");
//       return false;
//     }

//     if (
//       formData.image_file &&
//       !ALLOWED_IMAGE_TYPES.includes(formData.image_file.type)
//     ) {
//       toast.error("Please select a valid doctor image.");
//       return false;
//     }

//     if (
//       formData.image_file &&
//       formData.image_file.size > MAX_IMAGE_SIZE
//     ) {
//       toast.error("Doctor image must not exceed 5 MB.");
//       return false;
//     }

//     for (let i = 0; i < formData.web_certificat.length; i++) {
//       const certificate = formData.web_certificat[i];

//       if (certificate.file && certificate.file.size > MAX_IMAGE_SIZE) {
//         toast.error(`Certificate #${i + 1} must not exceed 5 MB.`);
//         return false;
//       }
//     }

//     return true;
//   };

//   // SUBMIT
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (saving) return;

//     if (!validateForm()) return;

//     if (typeof onSubmit !== "function") {
//       toast.error("Submit handler is not configured.");
//       return;
//     }

//     try {
//       setSaving(true);

//       const payload = new FormData();

//       payload.append("created_by", formData.created_by || "");
//       payload.append("department_id", String(formData.department_id));
//       payload.append("specialty_id", String(formData.specialty_id));
//       payload.append("name", formData.name.trim());
//       payload.append("contact_no", formData.contact_no.trim());
//       payload.append("email", formData.email.trim());
//       payload.append("qualification", formData.qualification.trim());

//       payload.append(
//         "experience_years",
//         formData.experience_years !== ""
//           ? String(formData.experience_years)
//           : "0"
//       );

//       payload.append("web_experience", formData.web_experience || "");
//       payload.append("web_bio", formData.web_bio || "");
//       payload.append("web_heading", formData.web_heading || "");

//       payload.append(
//         "web_specilization",
//         JSON.stringify(formData.web_specilization || [])
//       );

//       // Send certificate metadata as JSON and files separately.
//       const certificates = formData.web_certificat.map(
//         (certificate, index) => {
//           if (certificate.file) {
//             payload.append(
//               `certificate_file_${index}`,
//               certificate.file
//             );
//           }

//           const { file, ...metadata } = certificate;
//           return metadata;
//         }
//       );

//       payload.append(
//         "web_certificat",
//         JSON.stringify(certificates)
//       );

//       payload.append(
//         "web_awards",
//         JSON.stringify(formData.web_awards || [])
//       );

//       payload.append("available", formData.available ? "1" : "0");
//       payload.append("status", formData.status ? "1" : "0");

//       if (formData.image_file) {
//         payload.append("image", formData.image_file);
//       }

//       await onSubmit(payload);

//       toast.success(
//         initialData?.id
//           ? "Doctor profile updated successfully!"
//           : "Doctor profile saved successfully!"
//       );
//     } catch (error) {
//       console.error("Doctor submit error:", error);

//       toast.error(
//         error?.message || "Failed to save doctor profile. Please try again."
//       );
//     } finally {
//       setSaving(false);
//     }
//   };

//   const containerVariants = {
//     hidden: { opacity: 0, y: 8 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.35, staggerChildren: 0.04 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 8 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
//   };

//   return (
//     <motion.form
//       onSubmit={handleSubmit}
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//       className="w-full"
//       noValidate
//     >
//       <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
//         <div className="space-y-4">

//           {/* BASIC INFORMATION */}
//           <motion.section
//             variants={itemVariants}
//             className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
//           >
//             <SectionTitle
//               icon={FiUser}
//               title="Basic Information"
//               description="Enter doctor's personal and contact details."
//             />

//             <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//               <div className="md:col-span-2">
//                 <FieldLabel required>Doctor Name</FieldLabel>
//                 <Input
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Enter doctor full name"
//                   icon={FiUser}
//                 />
//               </div>

//               <div>
//                 <FieldLabel required>Email Address</FieldLabel>
//                 <Input
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="doctor@example.com"
//                   icon={FiMail}
//                 />
//               </div>

//               <div>
//                 <FieldLabel required>Contact Number</FieldLabel>
//                 <Input
//                   name="contact_no"
//                   type="tel"
//                   value={formData.contact_no}
//                   onChange={handleChange}
//                   placeholder="+91 98765 43210"
//                   icon={FiPhone}
//                 />
//               </div>

//               <div className="md:col-span-2">
//                 <FieldLabel required>Qualification</FieldLabel>
//                 <Input
//                   name="qualification"
//                   value={formData.qualification}
//                   onChange={handleChange}
//                   placeholder="MBBS, MD (Medicine), DM (Cardiology)"
//                   icon={FiBookOpen}
//                 />
//               </div>
//             </div>
//           </motion.section>

//           {/* PROFESSIONAL INFORMATION */}
//           <motion.section
//             variants={itemVariants}
//             className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
//           >
//             <SectionTitle
//               icon={FiBriefcase}
//               title="Professional Information"
//               description="Configure department, specialty and experience."
//               iconClass="bg-blue-50 text-blue-600"
//             />

//             <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//               <div>
//                 <FieldLabel required>Department</FieldLabel>
//                 <Select
//                   name="department_id"
//                   value={formData.department_id}
//                   onChange={handleChange}
//                   disabled={deptLoading}
//                 >
//                   <option value="">
//                     {deptLoading ? "Loading departments..." : "Select Department"}
//                   </option>
//                   {departments.map((department) => (
//                     <option key={department.id} value={department.id}>
//                       {department.name}
//                     </option>
//                   ))}
//                 </Select>
//               </div>

//               <div>
//                 <FieldLabel required>Specialty</FieldLabel>
//                 <Select
//                   name="specialty_id"
//                   value={formData.specialty_id}
//                   onChange={handleChange}
//                   disabled={specLoading}
//                 >
//                   <option value="">
//                     {specLoading ? "Loading specialties..." : "Select Specialty"}
//                   </option>
//                   {specialties.map((specialty) => (
//                     <option key={specialty.id} value={specialty.id}>
//                       {specialty.name}
//                     </option>
//                   ))}
//                 </Select>
//               </div>

//               <div>
//                 <FieldLabel>Experience (Years)</FieldLabel>
//                 <Input
//                   name="experience_years"
//                   type="number"
//                   min="0"
//                   value={formData.experience_years}
//                   onChange={handleChange}
//                   placeholder="18"
//                   icon={FiCalendar}
//                 />
//               </div>

//               <div>
//                 <FieldLabel>Website Experience</FieldLabel>
//                 <div className="flex gap-2">
//                   <div className="min-w-0 flex-1">
//                     <Input
//                       name="web_experience"
//                       value={formData.web_experience}
//                       onChange={handleChange}
//                       placeholder="18+ Years of Experience"
//                     />
//                   </div>
//                   <button
//                     type="button"
//                     onClick={useExperienceText}
//                     className="h-11 shrink-0 rounded-xl border border-[#087f8c]/20 bg-[#087f8c]/5 px-3 text-[12px] font-semibold text-[#087f8c] hover:bg-[#087f8c]/10"
//                   >
//                     Auto
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </motion.section>

//           {/* WEBSITE PROFILE */}
//           <motion.section
//             variants={itemVariants}
//             className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
//           >
//             <SectionTitle
//               icon={FiFileText}
//               title="Website Profile"
//               description="Content displayed on public doctor profile."
//               iconClass="bg-purple-50 text-purple-600"
//             />

//             <div className="space-y-4">
//               <div>
//                 <FieldLabel>Profile Heading</FieldLabel>
//                 <Input
//                   name="web_heading"
//                   value={formData.web_heading}
//                   onChange={handleChange}
//                   placeholder="Senior Consultant Cardiologist"
//                 />
//               </div>

//               <div>
//                 <FieldLabel>Doctor Biography</FieldLabel>
//                 <Textarea
//                   name="web_bio"
//                   value={formData.web_bio}
//                   onChange={handleChange}
//                   placeholder="Write a professional biography about the doctor..."
//                 />
//                 <p className="mt-1.5 text-[11px] text-slate-400">
//                   Recommended: 2–4 professional paragraphs.
//                 </p>
//               </div>
//             </div>
//           </motion.section>

//           {/* SPECIALIZATIONS */}
//           <motion.section
//             variants={itemVariants}
//             className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
//           >
//             <SectionTitle
//               icon={FiActivity}
//               title="Specializations"
//               description="Add doctor's areas of expertise."
//               iconClass="bg-emerald-50 text-emerald-600"
//             />

//             <FieldLabel>Areas of Specialization</FieldLabel>
//             <div className="flex gap-2">
//               <input
//                 value={specializationInput}
//                 onChange={(e) => setSpecializationInput(e.target.value)}
//                 onKeyDown={handleSpecializationKeyDown}
//                 placeholder="e.g. Interventional Cardiology"
//                 className="h-11 min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-3.5 text-[13px] outline-none focus:border-[#087f8c] focus:ring-4 focus:ring-[#087f8c]/10"
//               />
//               <button
//                 type="button"
//                 onClick={addSpecialization}
//                 className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#087f8c] text-white hover:bg-[#066c77]"
//               >
//                 <FiPlus size={18} />
//               </button>
//             </div>

//             <p className="mt-1.5 text-[11px] text-slate-400">
//               Press Enter or click + to add.
//             </p>

//             {formData.web_specilization.length > 0 && (
//               <div className="mt-3 flex flex-wrap gap-2">
//                 {formData.web_specilization.map((item, index) => (
//                   <div
//                     key={`${item}-${index}`}
//                     className="inline-flex items-center gap-1.5 rounded-full border border-teal-100 bg-teal-50 px-2.5 py-1.5 text-[12px] font-semibold text-[#087f8c]"
//                   >
//                     <FiCheck size={12} />
//                     <span>{item}</span>
//                     <button
//                       type="button"
//                       onClick={() => removeSpecialization(index)}
//                       className="rounded-full p-0.5 hover:bg-white"
//                       aria-label={`Remove ${item}`}
//                     >
//                       <FiX size={12} />
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </motion.section>

//           {/* CERTIFICATES */}
//           <motion.section
//             variants={itemVariants}
//             className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
//           >
//             <div className="flex items-start justify-between gap-3">
//               <SectionTitle
//                 icon={FiShield}
//                 title="Certificates"
//                 description="Add professional certifications."
//                 iconClass="bg-amber-50 text-amber-600"
//               />
//               <button
//                 type="button"
//                 onClick={addCertificate}
//                 className="flex shrink-0 items-center gap-1.5 rounded-xl bg-[#087f8c] px-3 py-2 text-[12px] font-semibold text-white hover:bg-[#066c77]"
//               >
//                 <FiPlus size={14} />
//                 <span className="hidden sm:inline">Add Certificate</span>
//               </button>
//             </div>

//             {formData.web_certificat.length === 0 ? (
//               <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-center">
//                 <FiShield size={24} className="mx-auto text-slate-400" />
//                 <p className="mt-2 text-[13px] font-semibold text-slate-700">
//                   No certificates added
//                 </p>
//                 <p className="mt-0.5 text-[11px] text-slate-400">
//                   Add certifications to display on profile.
//                 </p>
//               </div>
//             ) : (
//               <div className="space-y-3">
//                 {formData.web_certificat.map((certificate, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 8 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="rounded-xl border border-slate-200 bg-slate-50/70 p-3.5"
//                   >
//                     <div className="mb-3 flex items-center justify-between">
//                       <div className="flex items-center gap-2">
//                         <FiAward className="text-amber-600" size={18} />
//                         <p className="text-[12px] font-bold text-slate-800">
//                           Certificate #{index + 1}
//                         </p>
//                       </div>
//                       <button
//                         type="button"
//                         onClick={() => removeCertificate(index)}
//                         className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-500 hover:bg-red-100"
//                         aria-label="Remove certificate"
//                       >
//                         <FiTrash2 size={14} />
//                       </button>
//                     </div>

//                     <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
//                       <div>
//                         <FieldLabel>Certificate Title</FieldLabel>
//                         <Input
//                           value={certificate.title || ""}
//                           onChange={(e) =>
//                             updateCertificate(index, "title", e.target.value)
//                           }
//                           placeholder="Advanced Cardiac Life Support"
//                         />
//                       </div>

//                       <div>
//                         <FieldLabel>Organization</FieldLabel>
//                         <Input
//                           value={certificate.organization || ""}
//                           onChange={(e) =>
//                             updateCertificate(
//                               index,
//                               "organization",
//                               e.target.value
//                             )
//                           }
//                           placeholder="American Heart Association"
//                         />
//                       </div>

//                       <div>
//                         <FieldLabel>Year</FieldLabel>
//                         <Input
//                           type="number"
//                           value={certificate.year || ""}
//                           onChange={(e) =>
//                             updateCertificate(index, "year", e.target.value)
//                           }
//                           placeholder="2024"
//                           icon={FiCalendar}
//                         />
//                       </div>

//                       <div>
//                         <FieldLabel>Certificate File</FieldLabel>
//                         <input
//                           type="file"
//                           accept=".pdf,.jpg,.jpeg,.png"
//                           ref={(element) => {
//                             certificateInputRefs.current[index] = element;
//                           }}
//                           onChange={(e) =>
//                             handleCertificateFile(
//                               index,
//                               e.target.files?.[0]
//                             )
//                           }
//                           className="hidden"
//                         />
//                         <button
//                           type="button"
//                           onClick={() =>
//                             certificateInputRefs.current[index]?.click()
//                           }
//                           className="flex h-11 w-full items-center gap-2 rounded-xl border border-dashed border-slate-300 bg-white px-3.5 text-left hover:border-[#087f8c]"
//                         >
//                           <FiUploadCloud size={16} className="shrink-0 text-[#087f8c]" />
//                           <span className="min-w-0 truncate text-[12px] text-slate-600">
//                             {certificate.file?.name ||
//                               certificate.file_url ||
//                               "Upload certificate"}
//                           </span>
//                         </button>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             )}
//           </motion.section>

//           {/* AWARDS */}
//           <motion.section
//             variants={itemVariants}
//             className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
//           >
//             <div className="flex items-start justify-between gap-3">
//               <SectionTitle
//                 icon={FiStar}
//                 title="Awards & Recognition"
//                 description="Showcase professional recognition."
//                 iconClass="bg-rose-50 text-rose-600"
//               />
//               <button
//                 type="button"
//                 onClick={addAward}
//                 className="flex shrink-0 items-center gap-1.5 rounded-xl bg-[#087f8c] px-3 py-2 text-[12px] font-semibold text-white hover:bg-[#066c77]"
//               >
//                 <FiPlus size={14} />
//                 <span className="hidden sm:inline">Add Award</span>
//               </button>
//             </div>

//             {formData.web_awards.length === 0 ? (
//               <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-center">
//                 <FiStar size={24} className="mx-auto text-slate-400" />
//                 <p className="mt-2 text-[13px] font-semibold text-slate-700">
//                   No awards added
//                 </p>
//                 <p className="mt-0.5 text-[11px] text-slate-400">
//                   Add awards and recognition received by doctor.
//                 </p>
//               </div>
//             ) : (
//               <div className="space-y-3">
//                 {formData.web_awards.map((award, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 8 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="rounded-xl border border-slate-200 bg-slate-50/70 p-3.5"
//                   >
//                     <div className="mb-3 flex items-center justify-between">
//                       <div className="flex items-center gap-2">
//                         <FiStar size={17} className="text-rose-600" />
//                         <p className="text-[12px] font-bold text-slate-800">
//                           Award #{index + 1}
//                         </p>
//                       </div>
//                       <button
//                         type="button"
//                         onClick={() => removeAward(index)}
//                         className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-500 hover:bg-red-100"
//                         aria-label="Remove award"
//                       >
//                         <FiTrash2 size={14} />
//                       </button>
//                     </div>

//                     <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
//                       <div>
//                         <FieldLabel>Award Title</FieldLabel>
//                         <Input
//                           value={award.title || ""}
//                           onChange={(e) =>
//                             updateAward(index, "title", e.target.value)
//                           }
//                           placeholder="Best Cardiologist Award"
//                         />
//                       </div>
//                       <div>
//                         <FieldLabel>Organization</FieldLabel>
//                         <Input
//                           value={award.organization || ""}
//                           onChange={(e) =>
//                             updateAward(
//                               index,
//                               "organization",
//                               e.target.value
//                             )
//                           }
//                           placeholder="Healthcare Excellence Foundation"
//                         />
//                       </div>
//                       <div>
//                         <FieldLabel>Year</FieldLabel>
//                         <Input
//                           type="number"
//                           value={award.year || ""}
//                           onChange={(e) =>
//                             updateAward(index, "year", e.target.value)
//                           }
//                           placeholder="2024"
//                           icon={FiCalendar}
//                         />
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             )}
//           </motion.section>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="space-y-4 xl:sticky xl:top-4 xl:self-start">

//           {/* DOCTOR PHOTO */}
//           <motion.section
//             variants={itemVariants}
//             className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
//           >
//             <div className="border-b border-slate-100 p-4 sm:p-5">
//               <SectionTitle
//                 icon={FiImage}
//                 title="Doctor Photo"
//                 description="Upload professional profile photo."
//                 iconClass="bg-cyan-50 text-cyan-600"
//               />

//               <div className="flex flex-col items-center">
//                 <div className="relative flex h-36 w-36 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow-lg">
//                   {imagePreview ? (
//                     <img
//                       src={imagePreview}
//                       alt="Doctor preview"
//                       className="h-full w-full object-cover"
//                     />
//                   ) : (
//                     <div className="text-center">
//                       <FiUser size={32} className="mx-auto text-slate-300" />
//                       <p className="mt-1 text-[10px] text-slate-400">
//                         No Photo
//                       </p>
//                     </div>
//                   )}
//                 </div>

//                 <input
//                   ref={imageInputRef}
//                   type="file"
//                   accept="image/jpeg,image/png,image/webp"
//                   onChange={handleImageChange}
//                   className="hidden"
//                 />

//                 <button
//                   type="button"
//                   onClick={() => imageInputRef.current?.click()}
//                   className="mt-4 flex items-center gap-2 rounded-xl border border-[#087f8c]/20 bg-[#087f8c]/5 px-3.5 py-2 text-[12px] font-semibold text-[#087f8c] hover:bg-[#087f8c]/10"
//                 >
//                   <FiUploadCloud size={15} />
//                   {imagePreview ? "Change Photo" : "Upload Photo"}
//                 </button>

//                 <p className="mt-2 text-center text-[10px] leading-4 text-slate-400">
//                   JPG, PNG or WebP
//                   <br />
//                   Maximum size: 5 MB
//                 </p>
//               </div>
//             </div>

//             {/* STATUS */}
//             <div className="space-y-2.5 p-4 sm:p-5">
//               <FieldLabel>Doctor Status</FieldLabel>
//               <Toggle
//                 enabled={formData.status}
//                 onChange={(value) =>
//                   setFormData((prev) => ({ ...prev, status: value }))
//                 }
//                 label="Active Doctor"
//                 description="Profile is visible in the system."
//               />
//               <Toggle
//                 enabled={formData.available}
//                 onChange={(value) =>
//                   setFormData((prev) => ({ ...prev, available: value }))
//                 }
//                 label="Available for Appointment"
//                 description="Allow patients to book appointments."
//               />
//             </div>
//           </motion.section>

//           {/* PROFILE SUMMARY */}
//           <motion.section
//             variants={itemVariants}
//             className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
//           >
//             <div className="mb-3 flex items-center gap-2.5">
//               <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
//                 <FiActivity size={16} />
//               </div>
//               <div>
//                 <h3 className="text-[14px] font-bold text-slate-900">
//                   Profile Summary
//                 </h3>
//                 <p className="text-[10px] text-slate-400">
//                   Current form information
//                 </p>
//               </div>
//             </div>

//             <div className="space-y-1.5">
//               {[
//                 {
//                   label: "Specializations",
//                   value: formData.web_specilization.length,
//                 },
//                 {
//                   label: "Certificates",
//                   value: formData.web_certificat.length,
//                 },
//                 {
//                   label: "Awards",
//                   value: formData.web_awards.length,
//                 },
//                 {
//                   label: "Experience",
//                   value: formData.experience_years
//                     ? `${formData.experience_years} Years`
//                     : "—",
//                 },
//               ].map((item) => (
//                 <div
//                   key={item.label}
//                   className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2"
//                 >
//                   <span className="text-[11px] font-medium text-slate-500">
//                     {item.label}
//                   </span>
//                   <span className="text-[12px] font-bold text-slate-800">
//                     {item.value}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </motion.section>
//         </div>
//       </div>

//       {/* FOOTER */}
//       <motion.div
//         variants={itemVariants}
//         className="mt-4 flex flex-col-reverse gap-3 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-4"
//       >
//         <div>
//           <p className="text-[12px] font-semibold text-slate-700">
//             Ready to save doctor profile?
//           </p>
//           <p className="mt-0.5 text-[10px] text-slate-400">
//             Make sure all required information is completed.
//           </p>
//         </div>

//         <div className="flex w-full gap-2 sm:w-auto">
//           {onClose && (
//             <button
//               type="button"
//               onClick={onClose}
//               disabled={saving}
//               className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 text-[12px] font-semibold text-slate-600 hover:bg-slate-50 disabled:opacity-50 sm:flex-none"
//             >
//               <FiX size={15} />
//               Cancel
//             </button>
//           )}

//           <button
//             type="submit"
//             disabled={saving}
//             className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#087f8c] px-5 text-[12px] font-semibold text-white shadow-sm transition hover:bg-[#066c77] disabled:cursor-not-allowed disabled:opacity-60 sm:flex-none"
//           >
//             {saving ? (
//               <>
//                 <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
//                 Saving...
//               </>
//             ) : (
//               <>
//                 <FiSave size={15} />
//                 {initialData?.id ? "Update Doctor" : "Save Doctor"}
//               </>
//             )}
//           </button>
//         </div>
//       </motion.div>
//     </motion.form>
//   );
// }




"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import useSWR from "swr";
import toast from "react-hot-toast";

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

const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
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
  className = "",
  error = false,
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
      } pr-3.5 text-[13px] font-medium text-slate-800 outline-none transition placeholder:text-[13px] placeholder:font-normal placeholder:text-slate-400 disabled:cursor-not-allowed disabled:bg-slate-50 ${className}`}
    />
  </div>
);

const Textarea = ({ error = false, ...props }) => (
  <textarea
    {...props}
    aria-invalid={error}
    className={`min-h-[115px] w-full resize-y rounded-xl border bg-white px-3.5 py-3 text-[13px] font-medium leading-5 text-slate-800 outline-none transition placeholder:text-[13px] placeholder:font-normal placeholder:text-slate-400 ${
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

export default function DoctorForm({
  onSubmit,
  onClose,
  userId,
  initialData = null,
}) {
  const imageInputRef = useRef(null);
  const certificateInputRefs = useRef({});
  const imagePreviewRef = useRef(null);

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
    web_heading: initialData?.web_heading ?? "Senior Consultant",
    web_bio: initialData?.web_bio ?? "",
    web_experience: initialData?.web_experience ?? "",
    web_specilization: Array.isArray(initialData?.web_specilization)
      ? initialData.web_specilization
      : [],
    web_certificat: Array.isArray(initialData?.web_certificat)
      ? initialData.web_certificat
      : [],
    web_awards: Array.isArray(initialData?.web_awards)
      ? initialData.web_awards
      : [],
    available: initialData?.available ?? true,
    status: initialData?.status ?? true,
  });

  const [specializationInput, setSpecializationInput] = useState("");
  const [imagePreview, setImagePreview] = useState(
    initialData?.image_url || ""
  );
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    return () => {
      if (imagePreviewRef.current) {
        URL.revokeObjectURL(imagePreviewRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter the doctor's full name.";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Doctor name must contain at least 3 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter the doctor's email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email =
        "Enter a valid email address, e.g. doctor@example.com.";
    }

    if (!formData.contact_no.trim()) {
      newErrors.contact_no = "Please enter the contact number.";
    } else {
      const digits = formData.contact_no.replace(/\D/g, "");

      if (digits.length < 7 || digits.length > 15) {
        newErrors.contact_no =
          "Contact number must contain 7 to 15 digits.";
      }
    }

    if (!formData.qualification.trim()) {
      newErrors.qualification =
        "Please enter qualification, e.g. MBBS, MD or MS.";
    }

    if (!formData.department_id) {
      newErrors.department_id = "Please select a department.";
    }

    if (!formData.specialty_id) {
      newErrors.specialty_id = "Please select a specialty.";
    }

    if (
      formData.experience_years !== "" &&
      (
        !Number.isFinite(Number(formData.experience_years)) ||
        Number(formData.experience_years) < 0 ||
        Number(formData.experience_years) > 80
      )
    ) {
      newErrors.experience_years =
        "Experience must be between 0 and 80 years.";
    }

    if (formData.web_heading.trim().length > 150) {
      newErrors.web_heading =
        "Profile heading cannot exceed 150 characters.";
    }

    if (formData.web_bio.length > 2000) {
      newErrors.web_bio =
        "Biography cannot exceed 2000 characters.";
    }

    if (
      formData.image_file &&
      !ALLOWED_IMAGE_TYPES.includes(formData.image_file.type)
    ) {
      newErrors.image_file =
        "Only JPG, PNG and WebP images are allowed.";
    }

    if (
      formData.image_file &&
      formData.image_file.size > MAX_IMAGE_SIZE
    ) {
      newErrors.image_file =
        "Doctor image must not exceed 5 MB.";
    }

    formData.web_certificat.forEach((certificate, index) => {
      if (certificate.file && certificate.file.size > MAX_IMAGE_SIZE) {
        newErrors[`certificate_${index}`] =
          `Certificate ${index + 1} must not exceed 5 MB.`;
      }
    });

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

  // IMAGE VALIDATION
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        image_file: "Only JPG, PNG and WebP images are allowed.",
      }));

      toast.error("Only JPG, PNG and WebP images are allowed.");
      e.target.value = "";
      return;
    }

    if (file.size > MAX_IMAGE_SIZE) {
      setErrors((prev) => ({
        ...prev,
        image_file: "Doctor image must not exceed 5 MB.",
      }));

      toast.error("Doctor image must not exceed 5 MB.");
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
      image_url: file,
      image_file: file,
    }));

    setErrors((prev) => ({
      ...prev,
      image_file: "",
    }));

    toast.success("Doctor image selected successfully.");
  };

  // SPECIALIZATIONS
  const addSpecialization = () => {
    const value = specializationInput.trim();

    if (!value) {
      toast.error("Please enter a specialization.");
      return;
    }

    const exists = formData.web_specilization.some(
      (item) => item.toLowerCase() === value.toLowerCase()
    );

    if (exists) {
      toast.error("This specialization already exists.");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      web_specilization: [...prev.web_specilization, value],
    }));

    setSpecializationInput("");
    toast.success("Specialization added.");
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
      web_specilization: prev.web_specilization.filter(
        (_, i) => i !== index
      ),
    }));

    toast.success("Specialization removed.");
  };

  // CERTIFICATES
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

  const updateCertificate = (index, field, value) => {
    setFormData((prev) => {
      const certificates = [...prev.web_certificat];

      certificates[index] = {
        ...certificates[index],
        [field]: value,
      };

      return {
        ...prev,
        web_certificat: certificates,
      };
    });

    setErrors((prev) => ({
      ...prev,
      [`certificate_${index}`]: "",
    }));
  };

  const removeCertificate = (index) => {
    setFormData((prev) => ({
      ...prev,
      web_certificat: prev.web_certificat.filter(
        (_, i) => i !== index
      ),
    }));

    setErrors((prev) => {
      const next = { ...prev };
      delete next[`certificate_${index}`];
      return next;
    });

    toast.success("Certificate removed.");
  };

  const handleCertificateFile = (index, file) => {
    if (!file) return;

    const allowed = [
      "application/pdf",
      "image/jpeg",
      "image/png",
    ];

    if (!allowed.includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        [`certificate_${index}`]:
          "Certificate must be a PDF, JPG or PNG file.",
      }));

      toast.error("Certificate must be a PDF, JPG or PNG file.");

      if (certificateInputRefs.current[index]) {
        certificateInputRefs.current[index].value = "";
      }

      return;
    }

    if (file.size > MAX_IMAGE_SIZE) {
      setErrors((prev) => ({
        ...prev,
        [`certificate_${index}`]:
          "Certificate file must not exceed 5 MB.",
      }));

      toast.error("Certificate file must not exceed 5 MB.");

      if (certificateInputRefs.current[index]) {
        certificateInputRefs.current[index].value = "";
      }

      return;
    }

    setFormData((prev) => {
      const certificates = [...prev.web_certificat];

      certificates[index] = {
        ...certificates[index],
        file,
      };

      return {
        ...prev,
        web_certificat: certificates,
      };
    });

    setErrors((prev) => ({
      ...prev,
      [`certificate_${index}`]: "",
    }));

    toast.success("Certificate file selected.");
  };

  // AWARDS
  const addAward = () => {
    setFormData((prev) => ({
      ...prev,
      web_awards: [
        ...prev.web_awards,
        { title: "", organization: "", year: "" },
      ],
    }));
  };

  const updateAward = (index, field, value) => {
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
      web_awards: prev.web_awards.filter(
        (_, i) => i !== index
      ),
    }));

    toast.success("Award removed.");
  };

  const useExperienceText = () => {
    if (formData.experience_years === "") {
      setErrors((prev) => ({
        ...prev,
        experience_years: "Please enter experience in years first.",
      }));

      toast.error("Please enter experience in years first.");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      web_experience: `${prev.experience_years}+ Years of Experience`,
    }));

    toast.success("Experience text generated.");
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (saving) return;

    if (!validateForm()) return;

    if (typeof onSubmit !== "function") {
      toast.error("Submit handler is not configured.");
      return;
    }

    try {
      setSaving(true);

      const payload = new FormData();

      payload.append("created_by", formData.created_by || "");
      payload.append("department_id", String(formData.department_id));
      payload.append("specialty_id", String(formData.specialty_id));
      payload.append("name", formData.name.trim());
      payload.append("contact_no", formData.contact_no.trim());
      payload.append("email", formData.email.trim());
      payload.append("qualification", formData.qualification.trim());

      payload.append(
        "experience_years",
        formData.experience_years !== ""
          ? String(formData.experience_years)
          : "0"
      );

      payload.append("web_experience", formData.web_experience || "");
      payload.append("web_bio", formData.web_bio || "");
      payload.append("web_heading", formData.web_heading || "");

      payload.append(
        "web_specilization",
        JSON.stringify(formData.web_specilization || [])
      );

      const certificates = formData.web_certificat.map(
        (certificate, index) => {
          if (certificate.file) {
            payload.append(
              `certificate_file_${index}`,
              certificate.file
            );
          }

          const { file, ...metadata } = certificate;

          return metadata;
        }
      );

      payload.append(
        "web_certificat",
        JSON.stringify(certificates)
      );

      payload.append(
        "web_awards",
        JSON.stringify(formData.web_awards || [])
      );

      payload.append("available", formData.available ? "1" : "0");
      payload.append("status", formData.status ? "1" : "0");

      if (formData.image_file) {
        payload.append("image", formData.image_file);
      }

      await onSubmit(payload);

      toast.success(
        initialData?.id
          ? "Doctor profile updated successfully!"
          : "Doctor profile saved successfully!"
      );
    } catch (error) {
      console.error("Doctor submit error:", error);

      toast.error(
        error?.message ||
          "Failed to save doctor profile. Please try again."
      );
    } finally {
      setSaving(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 8 },
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
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full"
      noValidate
    >
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-4">

          {/* BASIC INFORMATION */}
          <motion.section
            variants={itemVariants}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
          >
            <SectionTitle
              icon={FiUser}
              title="Basic Information"
              description="Enter doctor's personal and contact details."
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="md:col-span-2">
                <FieldLabel required>Doctor Name</FieldLabel>

                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter doctor full name"
                  icon={FiUser}
                  error={Boolean(errors.name)}
                />

                <InlineError message={errors.name} />
              </div>

              <div>
                <FieldLabel required>Email Address</FieldLabel>

                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="doctor@example.com"
                  icon={FiMail}
                  error={Boolean(errors.email)}
                />

                <InlineError message={errors.email} />
              </div>

              <div>
                <FieldLabel required>Contact Number</FieldLabel>

                <Input
                  name="contact_no"
                  type="tel"
                  value={formData.contact_no}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  icon={FiPhone}
                  error={Boolean(errors.contact_no)}
                />

                <InlineError message={errors.contact_no} />
              </div>

              <div className="md:col-span-2">
                <FieldLabel required>Qualification</FieldLabel>

                <Input
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  placeholder="MBBS, MD (Medicine), DM (Cardiology)"
                  icon={FiBookOpen}
                  error={Boolean(errors.qualification)}
                />

                <InlineError message={errors.qualification} />
              </div>
            </div>
          </motion.section>

          {/* PROFESSIONAL INFORMATION */}
          <motion.section
            variants={itemVariants}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
          >
            <SectionTitle
              icon={FiBriefcase}
              title="Professional Information"
              description="Configure department, specialty and experience."
              iconClass="bg-blue-50 text-blue-600"
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <FieldLabel required>Department</FieldLabel>

                <Select
                  name="department_id"
                  value={formData.department_id}
                  onChange={handleChange}
                  disabled={deptLoading}
                  error={Boolean(errors.department_id)}
                >
                  <option value="">
                    {deptLoading
                      ? "Loading departments..."
                      : "Select Department"}
                  </option>

                  {departments.map((department) => (
                    <option key={department.id} value={department.id}>
                      {department.name}
                    </option>
                  ))}
                </Select>

                <InlineError message={errors.department_id} />
              </div>

              <div>
                <FieldLabel required>Specialty</FieldLabel>

                <Select
                  name="specialty_id"
                  value={formData.specialty_id}
                  onChange={handleChange}
                  disabled={specLoading}
                  error={Boolean(errors.specialty_id)}
                >
                  <option value="">
                    {specLoading
                      ? "Loading specialties..."
                      : "Select Specialty"}
                  </option>

                  {specialties.map((specialty) => (
                    <option key={specialty.id} value={specialty.id}>
                      {specialty.name}
                    </option>
                  ))}
                </Select>

                <InlineError message={errors.specialty_id} />
              </div>

              <div>
                <FieldLabel>Experience (Years)</FieldLabel>

                <Input
                  name="experience_years"
                  type="number"
                  min="0"
                  max="80"
                  value={formData.experience_years}
                  onChange={handleChange}
                  placeholder="18"
                  icon={FiCalendar}
                  error={Boolean(errors.experience_years)}
                />

                <InlineError message={errors.experience_years} />
              </div>

              <div>
                <FieldLabel>Website Experience</FieldLabel>

                <div className="flex gap-2">
                  <div className="min-w-0 flex-1">
                    <Input
                      name="web_experience"
                      value={formData.web_experience}
                      onChange={handleChange}
                      placeholder="18+ Years of Experience"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={useExperienceText}
                    className="h-11 shrink-0 rounded-xl border border-[#087f8c]/20 bg-[#087f8c]/5 px-3 text-[12px] font-semibold text-[#087f8c] hover:bg-[#087f8c]/10"
                  >
                    Auto
                  </button>
                </div>
              </div>
            </div>
          </motion.section>

          {/* WEBSITE PROFILE */}
          <motion.section
            variants={itemVariants}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
          >
            <SectionTitle
              icon={FiFileText}
              title="Website Profile"
              description="Content displayed on public doctor profile."
              iconClass="bg-purple-50 text-purple-600"
            />

            <div className="space-y-4">
              <div>
                <FieldLabel>Profile Heading</FieldLabel>

                <Input
                  name="web_heading"
                  value={formData.web_heading}
                  onChange={handleChange}
                  placeholder="Senior Consultant Cardiologist"
                  error={Boolean(errors.web_heading)}
                />

                <InlineError message={errors.web_heading} />
              </div>

              <div>
                <FieldLabel>Doctor Biography</FieldLabel>

                <Textarea
                  name="web_bio"
                  value={formData.web_bio}
                  onChange={handleChange}
                  placeholder="Write a professional biography about the doctor..."
                  error={Boolean(errors.web_bio)}
                />

                <div className="mt-1.5 flex items-start justify-between gap-2">
                  <InlineError message={errors.web_bio} />

                  <p className="shrink-0 text-[11px] text-slate-400">
                    {formData.web_bio.length}/2000
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* SPECIALIZATIONS */}
          <motion.section
            variants={itemVariants}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
          >
            <SectionTitle
              icon={FiActivity}
              title="Specializations"
              description="Add doctor's areas of expertise."
              iconClass="bg-emerald-50 text-emerald-600"
            />

            <FieldLabel>Areas of Specialization</FieldLabel>

            <div className="flex gap-2">
              <input
                value={specializationInput}
                onChange={(e) => setSpecializationInput(e.target.value)}
                onKeyDown={handleSpecializationKeyDown}
                placeholder="e.g. Interventional Cardiology"
                className="h-11 min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-3.5 text-[13px] outline-none focus:border-[#087f8c] focus:ring-4 focus:ring-[#087f8c]/10"
              />

              <button
                type="button"
                onClick={addSpecialization}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#087f8c] text-white hover:bg-[#066c77]"
              >
                <FiPlus size={18} />
              </button>
            </div>

            <p className="mt-1.5 text-[11px] text-slate-400">
              Press Enter or click + to add.
            </p>

            {formData.web_specilization.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {formData.web_specilization.map((item, index) => (
                  <div
                    key={`${item}-${index}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-teal-100 bg-teal-50 px-2.5 py-1.5 text-[12px] font-semibold text-[#087f8c]"
                  >
                    <FiCheck size={12} />
                    <span>{item}</span>

                    <button
                      type="button"
                      onClick={() => removeSpecialization(index)}
                      className="rounded-full p-0.5 hover:bg-white"
                      aria-label={`Remove ${item}`}
                    >
                      <FiX size={12} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </motion.section>

          {/* CERTIFICATES */}
          <motion.section
            variants={itemVariants}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <SectionTitle
                icon={FiShield}
                title="Certificates"
                description="Add professional certifications."
                iconClass="bg-amber-50 text-amber-600"
              />

              <button
                type="button"
                onClick={addCertificate}
                className="flex shrink-0 items-center gap-1.5 rounded-xl bg-[#087f8c] px-3 py-2 text-[12px] font-semibold text-white hover:bg-[#066c77]"
              >
                <FiPlus size={14} />
                <span className="hidden sm:inline">Add Certificate</span>
              </button>
            </div>

            {formData.web_certificat.length === 0 ? (
              <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-center">
                <FiShield size={24} className="mx-auto text-slate-400" />

                <p className="mt-2 text-[13px] font-semibold text-slate-700">
                  No certificates added
                </p>

                <p className="mt-0.5 text-[11px] text-slate-400">
                  Add certifications to display on profile.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {formData.web_certificat.map((certificate, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl border border-slate-200 bg-slate-50/70 p-3.5"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FiAward className="text-amber-600" size={18} />

                        <p className="text-[12px] font-bold text-slate-800">
                          Certificate #{index + 1}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeCertificate(index)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-500 hover:bg-red-100"
                        aria-label="Remove certificate"
                      >
                        <FiTrash2 size={14} />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      <div>
                        <FieldLabel>Certificate Title</FieldLabel>

                        <Input
                          value={certificate.title || ""}
                          onChange={(e) =>
                            updateCertificate(index, "title", e.target.value)
                          }
                          placeholder="Advanced Cardiac Life Support"
                        />
                      </div>

                      <div>
                        <FieldLabel>Organization</FieldLabel>

                        <Input
                          value={certificate.organization || ""}
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
                        <FieldLabel>Year</FieldLabel>

                        <Input
                          type="number"
                          value={certificate.year || ""}
                          onChange={(e) =>
                            updateCertificate(index, "year", e.target.value)
                          }
                          placeholder="2024"
                          icon={FiCalendar}
                        />
                      </div>

                      <div>
                        <FieldLabel>Certificate File</FieldLabel>

                        <input
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          ref={(element) => {
                            certificateInputRefs.current[index] = element;
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
                            certificateInputRefs.current[index]?.click()
                          }
                          className={`flex h-11 w-full items-center gap-2 rounded-xl border border-dashed bg-white px-3.5 text-left hover:border-[#087f8c] ${
                            errors[`certificate_${index}`]
                              ? "border-red-400"
                              : "border-slate-300"
                          }`}
                        >
                          <FiUploadCloud
                            size={16}
                            className="shrink-0 text-[#087f8c]"
                          />

                          <span className="min-w-0 truncate text-[12px] text-slate-600">
                            {certificate.file?.name ||
                              certificate.file_url ||
                              "Upload certificate"}
                          </span>
                        </button>

                        <InlineError
                          message={errors[`certificate_${index}`]}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.section>

          {/* AWARDS */}
          <motion.section
            variants={itemVariants}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <SectionTitle
                icon={FiStar}
                title="Awards & Recognition"
                description="Showcase professional recognition."
                iconClass="bg-rose-50 text-rose-600"
              />

              <button
                type="button"
                onClick={addAward}
                className="flex shrink-0 items-center gap-1.5 rounded-xl bg-[#087f8c] px-3 py-2 text-[12px] font-semibold text-white hover:bg-[#066c77]"
              >
                <FiPlus size={14} />
                <span className="hidden sm:inline">Add Award</span>
              </button>
            </div>

            {formData.web_awards.length === 0 ? (
              <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-center">
                <FiStar size={24} className="mx-auto text-slate-400" />

                <p className="mt-2 text-[13px] font-semibold text-slate-700">
                  No awards added
                </p>

                <p className="mt-0.5 text-[11px] text-slate-400">
                  Add awards and recognition received by doctor.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {formData.web_awards.map((award, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl border border-slate-200 bg-slate-50/70 p-3.5"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FiStar size={17} className="text-rose-600" />

                        <p className="text-[12px] font-bold text-slate-800">
                          Award #{index + 1}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeAward(index)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-500 hover:bg-red-100"
                        aria-label="Remove award"
                      >
                        <FiTrash2 size={14} />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                      <div>
                        <FieldLabel>Award Title</FieldLabel>

                        <Input
                          value={award.title || ""}
                          onChange={(e) =>
                            updateAward(index, "title", e.target.value)
                          }
                          placeholder="Best Cardiologist Award"
                        />
                      </div>

                      <div>
                        <FieldLabel>Organization</FieldLabel>

                        <Input
                          value={award.organization || ""}
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
                        <FieldLabel>Year</FieldLabel>

                        <Input
                          type="number"
                          value={award.year || ""}
                          onChange={(e) =>
                            updateAward(index, "year", e.target.value)
                          }
                          placeholder="2024"
                          icon={FiCalendar}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.section>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-4 xl:sticky xl:top-4 xl:self-start">

          {/* DOCTOR PHOTO */}
          <motion.section
            variants={itemVariants}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="border-b border-slate-100 p-4 sm:p-5">
              <SectionTitle
                icon={FiImage}
                title="Doctor Photo"
                description="Upload professional profile photo."
                iconClass="bg-cyan-50 text-cyan-600"
              />

              <div className="flex flex-col items-center">
                <div className="relative flex h-36 w-36 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow-lg">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Doctor preview"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="text-center">
                      <FiUser
                        size={32}
                        className="mx-auto text-slate-300"
                      />

                      <p className="mt-1 text-[10px] text-slate-400">
                        No Photo
                      </p>
                    </div>
                  )}
                </div>

                <input
                  ref={imageInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={handleImageChange}
                  className="hidden"
                />

                <button
                  type="button"
                  onClick={() => imageInputRef.current?.click()}
                  className="mt-4 flex items-center gap-2 rounded-xl border border-[#087f8c]/20 bg-[#087f8c]/5 px-3.5 py-2 text-[12px] font-semibold text-[#087f8c] hover:bg-[#087f8c]/10"
                >
                  <FiUploadCloud size={15} />
                  {imagePreview ? "Change Photo" : "Upload Photo"}
                </button>

                <p className="mt-2 text-center text-[10px] leading-4 text-slate-400">
                  JPG, PNG or WebP
                  <br />
                  Maximum size: 5 MB
                </p>

                <InlineError message={errors.image_file} />
              </div>
            </div>

            {/* STATUS */}
            <div className="space-y-2.5 p-4 sm:p-5">
              <FieldLabel>Doctor Status</FieldLabel>

              <Toggle
                enabled={Boolean(Number(formData.status))}
                onChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    status: value,
                  }))
                }
                label="Active Doctor"
                description="Profile is visible in the system."
              />

              <Toggle
                enabled={Boolean(Number(formData.available))}
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

          {/* PROFILE SUMMARY */}
          <motion.section
            variants={itemVariants}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="mb-3 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <FiActivity size={16} />
              </div>

              <div>
                <h3 className="text-[14px] font-bold text-slate-900">
                  Profile Summary
                </h3>

                <p className="text-[10px] text-slate-400">
                  Current form information
                </p>
              </div>
            </div>

            <div className="space-y-1.5">
              {[
                {
                  label: "Specializations",
                  value: formData.web_specilization.length,
                },
                {
                  label: "Certificates",
                  value: formData.web_certificat.length,
                },
                {
                  label: "Awards",
                  value: formData.web_awards.length,
                },
                {
                  label: "Experience",
                  value:
                    formData.experience_years !== ""
                      ? `${formData.experience_years} Years`
                      : "—",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2"
                >
                  <span className="text-[11px] font-medium text-slate-500">
                    {item.label}
                  </span>

                  <span className="text-[12px] font-bold text-slate-800">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>

      {/* FOOTER */}
      <motion.div
        variants={itemVariants}
        className="mt-4 flex flex-col-reverse gap-3 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-4"
      >
        <div>
          <p className="text-[12px] font-semibold text-slate-700">
            Ready to save doctor profile?
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
                {initialData?.id ? "Update Doctor" : "Save Doctor"}
              </>
            )}
          </button>
        </div>
      </motion.div>
    </motion.form>
  );
}
