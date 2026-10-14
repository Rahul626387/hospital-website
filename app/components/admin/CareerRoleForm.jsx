
// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import useSWR from "swr";

// import {
//   FiBriefcase,
//   FiCalendar,
//   FiCheck,
//   FiChevronDown,
//   FiClipboard,
//   FiFileText,
//   FiMapPin,
//   FiPlus,
//   FiSave,
//   FiTrash2,
//   FiUser,
//   FiX,
//   FiActivity,
// } from "react-icons/fi";
// import ApiService from "../../src/services/Apiservices";


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

// const Textarea = ({
//   className = "",
//   ...props
// }) => {
//   return (
//     <textarea
//       {...props}
//       className={`
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
//         ${className}
//       `}
//     />
//   );
// };

// /* =========================================================
//    SELECT
// ========================================================= */

// const Select = ({
//   children,
//   ...props
// }) => {
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
//             ${
//               enabled
//                 ? "translate-x-[18px]"
//                 : "translate-x-0.5"
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

// export default function CareerRoleForm({
//   onSubmit,
//   onClose,
//   userId,
//   initialData = null,
// }) {
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

//   const departments = deptData?.data || [];

//   /* =========================================================
//      FORM STATE
//   ========================================================= */

//   const [formData, setFormData] = useState({
//     department_id:
//       initialData?.department_id ?? "",

//     title:
//       initialData?.title ?? "",

//     location:
//       initialData?.location ?? "",

//     experience:
//       initialData?.experience ?? "",

//     qualification:
//       initialData?.qualification ?? "",

//     employment_type:
//       initialData?.employment_type ?? "Full Time",

//     summary:
//       initialData?.summary ?? "",

//     description:
//       initialData?.description ?? "",

//     responsibilities:
//       Array.isArray(initialData?.responsibilities)
//         ? initialData.responsibilities
//         : [],

//     skills:
//       Array.isArray(initialData?.skills)
//         ? initialData.skills
//         : [],

//     vacancy_code:
//       initialData?.vacancy_code ?? "",

//     vacancies:
//       initialData?.vacancies ?? 1,

//     application_deadline:
//       initialData?.application_deadline ?? "",

//     is_active:
//       initialData?.is_active ?? true,

//     display_order:
//       initialData?.display_order ?? 0,

//     created_by:
//       initialData?.created_by ??
//       userId ??
//       "",
//   });

//   const [responsibilityInput, setResponsibilityInput] =
//     useState("");

//   const [skillInput, setSkillInput] =
//     useState("");

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
//      RESPONSIBILITIES
//   ========================================================= */

//   const addResponsibility = () => {
//     const value =
//       responsibilityInput.trim();

//     if (!value) return;

//     const exists =
//       formData.responsibilities.some(
//         (item) =>
//           item.toLowerCase() ===
//           value.toLowerCase()
//       );

//     if (exists) {
//       setResponsibilityInput("");
//       return;
//     }

//     setFormData((prev) => ({
//       ...prev,
//       responsibilities: [
//         ...prev.responsibilities,
//         value,
//       ],
//     }));

//     setResponsibilityInput("");
//   };

//   const handleResponsibilityKeyDown = (e) => {
//     if (
//       e.key === "Enter" ||
//       e.key === ","
//     ) {
//       e.preventDefault();
//       addResponsibility();
//     }
//   };

//   const removeResponsibility = (index) => {
//     setFormData((prev) => ({
//       ...prev,
//       responsibilities:
//         prev.responsibilities.filter(
//           (_, i) => i !== index
//         ),
//     }));
//   };

//   /* =========================================================
//      SKILLS
//   ========================================================= */

//   const addSkill = () => {
//     const value =
//       skillInput.trim();

//     if (!value) return;

//     const exists =
//       formData.skills.some(
//         (item) =>
//           item.toLowerCase() ===
//           value.toLowerCase()
//       );

//     if (exists) {
//       setSkillInput("");
//       return;
//     }

//     setFormData((prev) => ({
//       ...prev,
//       skills: [
//         ...prev.skills,
//         value,
//       ],
//     }));

//     setSkillInput("");
//   };

//   const handleSkillKeyDown = (e) => {
//     if (
//       e.key === "Enter" ||
//       e.key === ","
//     ) {
//       e.preventDefault();
//       addSkill();
//     }
//   };

//   const removeSkill = (index) => {
//     setFormData((prev) => ({
//       ...prev,
//       skills:
//         prev.skills.filter(
//           (_, i) => i !== index
//         ),
//     }));
//   };

//   /* =========================================================
//      SUBMIT
//   ========================================================= */

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     /* ---------------------------------------------
//        BASIC VALIDATION
//     --------------------------------------------- */

//     if (!formData.title.trim()) {
//       alert("Please enter job title.");
//       return;
//     }

//     if (!formData.department_id) {
//       alert("Please select department.");
//       return;
//     }

//     if (!formData.location.trim()) {
//       alert("Please enter location.");
//       return;
//     }

//     if (!formData.experience.trim()) {
//       alert("Please enter experience.");
//       return;
//     }

//     if (!formData.qualification.trim()) {
//       alert("Please enter qualification.");
//       return;
//     }

//     try {
//       setSaving(true);

//       /* ---------------------------------------------
//          PAYLOAD
//       --------------------------------------------- */

//       const payload = {
//         ...formData,

//         created_by:
//           formData.created_by
//             ? Number(formData.created_by)
//             : null,

//         department_id:
//           formData.department_id
//             ? Number(formData.department_id)
//             : null,

//         vacancies:
//           formData.vacancies
//             ? Number(formData.vacancies)
//             : 1,

//         display_order:
//           formData.display_order
//             ? Number(formData.display_order)
//             : 0,

//         responsibilities:
//           formData.responsibilities || [],

//         skills:
//           formData.skills || [],

//         is_active:
//           Boolean(formData.is_active),
//       };

//     //   console.log(
//     //     "Career Role Payload:",
//     //     payload
//     //   );

//       if (onSubmit) {
//         await onSubmit(payload);
//       }
//     } catch (error) {
//       console.error(
//         "Career role submit error:",
//         error
//       );
//     } finally {
//       setSaving(false);
//     }
//   };

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

//         {/* ===================================================
//             LEFT SIDE
//         =================================================== */}

//         <div className="space-y-4">

//           {/* =================================================
//               BASIC JOB INFORMATION
//           ================================================= */}

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
//               title="Basic Job Information"
//               description="Enter the basic information for this career opportunity."
//               iconClass="bg-teal-50 text-[#087f8c]"
//             />

//             <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

//               {/* JOB TITLE */}

//               <div className="md:col-span-2">
//                 <FieldLabel required>
//                   Job Title
//                 </FieldLabel>

//                 <Input
//                   name="title"
//                   value={formData.title}
//                   onChange={handleChange}
//                   placeholder="e.g. Staff Nurse"
//                   icon={FiBriefcase}
//                 />
//               </div>

//               {/* DEPARTMENT */}

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

//               {/* LOCATION */}

//               <div>
//                 <FieldLabel required>
//                   Location
//                 </FieldLabel>

//                 <Input
//                   name="location"
//                   value={formData.location}
//                   onChange={handleChange}
//                   placeholder="e.g. Metro Hospital"
//                   icon={FiMapPin}
//                 />
//               </div>

//               {/* EMPLOYMENT TYPE */}

//               <div>
//                 <FieldLabel required>
//                   Employment Type
//                 </FieldLabel>

//                 <Select
//                   name="employment_type"
//                   value={
//                     formData.employment_type
//                   }
//                   onChange={handleChange}
//                 >
//                   <option value="Full Time">
//                     Full Time
//                   </option>

//                   <option value="Part Time">
//                     Part Time
//                   </option>

//                   <option value="Contract">
//                     Contract
//                   </option>

//                   <option value="Internship">
//                     Internship
//                   </option>

//                   <option value="Temporary">
//                     Temporary
//                   </option>
//                 </Select>
//               </div>

//               {/* EXPERIENCE */}

//               <div>
//                 <FieldLabel required>
//                   Experience
//                 </FieldLabel>

//                 <Input
//                   name="experience"
//                   value={formData.experience}
//                   onChange={handleChange}
//                   placeholder="e.g. 2-5 Years"
//                   icon={FiCalendar}
//                 />
//               </div>

//               {/* QUALIFICATION */}

//               <div className="md:col-span-2">
//                 <FieldLabel required>
//                   Qualification
//                 </FieldLabel>

//                 <Input
//                   name="qualification"
//                   value={
//                     formData.qualification
//                   }
//                   onChange={handleChange}
//                   placeholder="e.g. B.Sc Nursing / GNM"
//                 />
//               </div>

//             </div>
//           </motion.section>

//           {/* =================================================
//               VACANCY INFORMATION
//           ================================================= */}

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
//               icon={FiClipboard}
//               title="Vacancy Information"
//               description="Configure vacancy reference, openings and application deadline."
//               iconClass="bg-blue-50 text-blue-600"
//             />

//             <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

//               {/* VACANCY CODE */}

//               <div>
//                 <FieldLabel required>
//                   Vacancy Code
//                 </FieldLabel>

//                 <Input
//                   name="vacancy_code"
//                   value={
//                     formData.vacancy_code
//                   }
//                   onChange={handleChange}
//                   placeholder="e.g. NUR-2026-001"
//                 />
//               </div>

//               {/* VACANCIES */}

//               <div>
//                 <FieldLabel required>
//                   Number of Vacancies
//                 </FieldLabel>

//                 <Input
//                   name="vacancies"
//                   type="number"
//                   min="1"
//                   value={
//                     formData.vacancies
//                   }
//                   onChange={handleChange}
//                   placeholder="5"
//                 />
//               </div>

//               {/* DEADLINE */}

//               <div>
//                 <FieldLabel>
//                   Application Deadline
//                 </FieldLabel>

//                 <Input
//                   name="application_deadline"
//                   type="date"
//                   value={
//                     formData.application_deadline
//                   }
//                   onChange={handleChange}
//                   icon={FiCalendar}
//                 />
//               </div>

//               {/* DISPLAY ORDER */}

//               <div>
//                 <FieldLabel>
//                   Display Order
//                 </FieldLabel>

//                 <Input
//                   name="display_order"
//                   type="number"
//                   min="0"
//                   value={
//                     formData.display_order
//                   }
//                   onChange={handleChange}
//                   placeholder="0"
//                 />
//               </div>

//             </div>
//           </motion.section>

//           {/* =================================================
//               JOB DESCRIPTION
//           ================================================= */}

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
//               title="Job Description"
//               description="Provide a clear overview of this position."
//               iconClass="bg-purple-50 text-purple-600"
//             />

//             <div className="space-y-4">

//               <div>
//                 <FieldLabel>
//                   Summary
//                 </FieldLabel>

//                 <Textarea
//                   name="summary"
//                   value={formData.summary}
//                   onChange={handleChange}
//                   placeholder="Write a short summary of this position..."
//                   className="min-h-[90px]"
//                 />
//               </div>

//               <div>
//                 <FieldLabel>
//                   Detailed Description
//                 </FieldLabel>

//                 <Textarea
//                   name="description"
//                   value={
//                     formData.description
//                   }
//                   onChange={handleChange}
//                   placeholder="Write detailed information about the job..."
//                   className="min-h-[150px]"
//                 />
//               </div>

//             </div>
//           </motion.section>

//           {/* =================================================
//               RESPONSIBILITIES
//           ================================================= */}

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
//               icon={FiCheck}
//               title="Responsibilities"
//               description="Add the key responsibilities for this position."
//               iconClass="bg-emerald-50 text-emerald-600"
//             />

//             <FieldLabel>
//               Job Responsibilities
//             </FieldLabel>

//             <div className="flex gap-2">

//               <input
//                 value={
//                   responsibilityInput
//                 }
//                 onChange={(e) =>
//                   setResponsibilityInput(
//                     e.target.value
//                   )
//                 }
//                 onKeyDown={
//                   handleResponsibilityKeyDown
//                 }
//                 placeholder="e.g. Provide patient care"
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
//                   addResponsibility
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

//             {formData.responsibilities.length > 0 && (
//               <div className="mt-3 space-y-2">

//                 {formData.responsibilities.map(
//                   (item, index) => (
//                     <motion.div
//                       key={`${item}-${index}`}
//                       initial={{
//                         opacity: 0,
//                         y: 6,
//                       }}
//                       animate={{
//                         opacity: 1,
//                         y: 0,
//                       }}
//                       className="
//                         flex
//                         items-center
//                         justify-between
//                         gap-3
//                         rounded-xl
//                         border
//                         border-slate-200
//                         bg-slate-50
//                         px-3
//                         py-2.5
//                       "
//                     >
//                       <div className="flex min-w-0 items-center gap-2">

//                         <span
//                           className="
//                             flex
//                             h-6
//                             w-6
//                             shrink-0
//                             items-center
//                             justify-center
//                             rounded-full
//                             bg-emerald-50
//                             text-emerald-600
//                           "
//                         >
//                           <FiCheck size={12} />
//                         </span>

//                         <span className="truncate text-[12px] font-medium text-slate-700">
//                           {item}
//                         </span>

//                       </div>

//                       <button
//                         type="button"
//                         onClick={() =>
//                           removeResponsibility(
//                             index
//                           )
//                         }
//                         className="
//                           flex
//                           h-7
//                           w-7
//                           shrink-0
//                           items-center
//                           justify-center
//                           rounded-lg
//                           bg-red-50
//                           text-red-500
//                           transition
//                           hover:bg-red-100
//                         "
//                       >
//                         <FiTrash2 size={13} />
//                       </button>

//                     </motion.div>
//                   )
//                 )}

//               </div>
//             )}
//           </motion.section>

//           {/* =================================================
//               SKILLS
//           ================================================= */}

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
//               title="Required Skills"
//               description="Add skills required for this position."
//               iconClass="bg-cyan-50 text-cyan-600"
//             />

//             <FieldLabel>
//               Skills
//             </FieldLabel>

//             <div className="flex gap-2">

//               <input
//                 value={skillInput}
//                 onChange={(e) =>
//                   setSkillInput(
//                     e.target.value
//                   )
//                 }
//                 onKeyDown={
//                   handleSkillKeyDown
//                 }
//                 placeholder="e.g. Patient Care"
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
//                 onClick={addSkill}
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

//             {formData.skills.length > 0 && (
//               <div className="mt-3 flex flex-wrap gap-2">

//                 {formData.skills.map(
//                   (skill, index) => (
//                     <motion.div
//                       key={`${skill}-${index}`}
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
//                         border-cyan-100
//                         bg-cyan-50
//                         px-2.5
//                         py-1.5
//                         text-[12px]
//                         font-semibold
//                         text-cyan-700
//                       "
//                     >
//                       <FiCheck size={12} />

//                       <span>
//                         {skill}
//                       </span>

//                       <button
//                         type="button"
//                         onClick={() =>
//                           removeSkill(
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

//         </div>

//         {/* =====================================================
//             RIGHT SIDE
//         ===================================================== */}

//         <div className="space-y-4 xl:sticky xl:top-4 xl:self-start">

//           {/* =================================================
//               JOB STATUS
//           ================================================= */}

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
//                 icon={FiBriefcase}
//                 title="Job Status"
//                 description="Control visibility of this career opportunity."
//                 iconClass="bg-teal-50 text-[#087f8c]"
//               />

//               <Toggle
//                 enabled={
//                   formData.is_active
//                 }
//                 onChange={(value) =>
//                   setFormData((prev) => ({
//                     ...prev,
//                     is_active: value,
//                   }))
//                 }
//                 label="Active Job"
//                 description="This job will be visible on the career page."
//               />

//             </div>
//           </motion.section>

//           {/* =================================================
//               SUMMARY
//           ================================================= */}

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

//               <div
//                 className="
//                   flex
//                   h-9
//                   w-9
//                   items-center
//                   justify-center
//                   rounded-xl
//                   bg-indigo-50
//                   text-indigo-600
//                 "
//               >
//                 <FiClipboard size={16} />
//               </div>

//               <div>
//                 <h3 className="text-[14px] font-bold text-slate-900">
//                   Job Summary
//                 </h3>

//                 <p className="text-[10px] text-slate-400">
//                   Current form information
//                 </p>
//               </div>

//             </div>

//             <div className="space-y-1.5">

//               {/* TITLE */}

//               <div
//                 className="
//                   rounded-lg
//                   bg-slate-50
//                   px-3
//                   py-2
//                 "
//               >
//                 <span className="text-[10px] font-medium text-slate-400">
//                   Job Title
//                 </span>

//                 <p className="mt-0.5 truncate text-[12px] font-bold text-slate-800">
//                   {formData.title || "—"}
//                 </p>
//               </div>

//               {/* DEPARTMENT */}

//               <div
//                 className="
//                   rounded-lg
//                   bg-slate-50
//                   px-3
//                   py-2
//                 "
//               >
//                 <span className="text-[10px] font-medium text-slate-400">
//                   Department
//                 </span>

//                 <p className="mt-0.5 truncate text-[12px] font-bold text-slate-800">
//                   {departments.find(
//                     (department) =>
//                       String(department.id) ===
//                       String(
//                         formData.department_id
//                       )
//                   )?.name || "—"}
//                 </p>
//               </div>

//               {/* LOCATION */}

//               <div
//                 className="
//                   flex
//                   items-center
//                   justify-between
//                   rounded-lg
//                   bg-slate-50
//                   px-3
//                   py-2
//                 "
//               >
//                 <span className="text-[11px] font-medium text-slate-500">
//                   Location
//                 </span>

//                 <span className="max-w-[160px] truncate text-[12px] font-bold text-slate-800">
//                   {formData.location || "—"}
//                 </span>
//               </div>

//               {/* EXPERIENCE */}

//               <div
//                 className="
//                   flex
//                   items-center
//                   justify-between
//                   rounded-lg
//                   bg-slate-50
//                   px-3
//                   py-2
//                 "
//               >
//                 <span className="text-[11px] font-medium text-slate-500">
//                   Experience
//                 </span>

//                 <span className="text-[12px] font-bold text-slate-800">
//                   {formData.experience || "—"}
//                 </span>
//               </div>

//               {/* EMPLOYMENT */}

//               <div
//                 className="
//                   flex
//                   items-center
//                   justify-between
//                   rounded-lg
//                   bg-slate-50
//                   px-3
//                   py-2
//                 "
//               >
//                 <span className="text-[11px] font-medium text-slate-500">
//                   Employment
//                 </span>

//                 <span className="text-[12px] font-bold text-slate-800">
//                   {formData.employment_type ||
//                     "—"}
//                 </span>
//               </div>

//               {/* VACANCIES */}

//               <div
//                 className="
//                   flex
//                   items-center
//                   justify-between
//                   rounded-lg
//                   bg-slate-50
//                   px-3
//                   py-2
//                 "
//               >
//                 <span className="text-[11px] font-medium text-slate-500">
//                   Vacancies
//                 </span>

//                 <span className="text-[12px] font-bold text-slate-800">
//                   {formData.vacancies || 0}
//                 </span>
//               </div>

//               {/* RESPONSIBILITIES */}

//               <div
//                 className="
//                   flex
//                   items-center
//                   justify-between
//                   rounded-lg
//                   bg-slate-50
//                   px-3
//                   py-2
//                 "
//               >
//                 <span className="text-[11px] font-medium text-slate-500">
//                   Responsibilities
//                 </span>

//                 <span className="text-[12px] font-bold text-slate-800">
//                   {
//                     formData
//                       .responsibilities
//                       .length
//                   }
//                 </span>
//               </div>

//               {/* SKILLS */}

//               <div
//                 className="
//                   flex
//                   items-center
//                   justify-between
//                   rounded-lg
//                   bg-slate-50
//                   px-3
//                   py-2
//                 "
//               >
//                 <span className="text-[11px] font-medium text-slate-500">
//                   Skills
//                 </span>

//                 <span className="text-[12px] font-bold text-slate-800">
//                   {
//                     formData.skills.length
//                   }
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
//             Ready to publish this job?
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
//                 Save Job
//               </>
//             )}
//           </button>

//         </div>
//       </motion.div>
//     </motion.form>
//   );
// }




// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import useSWR from "swr";
// import toast from "react-hot-toast";

// import {
//   FiBriefcase,
//   FiCalendar,
//   FiCheck,
//   FiChevronDown,
//   FiClipboard,
//   FiFileText,
//   FiMapPin,
//   FiPlus,
//   FiSave,
//   FiTrash2,
//   FiX,
//   FiActivity,
//   FiSearch,
// } from "react-icons/fi";

// import ApiService from "../../src/services/Apiservices";

// /* =========================================================
//    SECTION TITLE
// ========================================================= */

// const SectionTitle = ({
//   icon: Icon,
//   title,
//   description,
//   iconClass = "bg-teal-50 text-[#087f8c]",
// }) => (
//   <div className="mb-4 flex items-start gap-3">
//     <div
//       className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${iconClass}`}
//     >
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

// /* =========================================================
//    FIELD LABEL
// ========================================================= */

// const FieldLabel = ({ children, required = false }) => (
//   <label className="mb-1.5 block text-[13px] font-semibold text-slate-700">
//     {children}
//     {required && <span className="ml-1 text-red-500">*</span>}
//   </label>
// );

// /* =========================================================
//    INLINE ERROR
// ========================================================= */

// const FieldError = ({ children }) => {
//   if (!children) return null;

//   return (
//     <p
//       role="alert"
//       className="mt-1.5 flex items-start gap-1 text-xs font-medium text-red-600"
//     >
//       <FiX size={13} className="mt-0.5 shrink-0" />
//       <span>{children}</span>
//     </p>
//   );
// };

// /* =========================================================
//    INPUT
// ========================================================= */

// const Input = ({
//   icon: Icon,
//   className = "",
//   ...props
// }) => (
//   <div className="relative">
//     {Icon && (
//       <Icon
//         size={16}
//         className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
//       />
//     )}

//     <input
//       {...props}
//       className={`h-11 w-full rounded-xl border bg-white ${
//         Icon ? "pl-10" : "px-3.5"
//       } pr-3.5 text-[13px] font-medium text-slate-800 outline-none transition
//       placeholder:text-[13px] placeholder:font-normal placeholder:text-slate-400
//       focus:border-[#087f8c] focus:ring-4 focus:ring-[#087f8c]/10
//       disabled:cursor-not-allowed disabled:bg-slate-50
//       ${
//         props["aria-invalid"]
//           ? "border-red-400 focus:border-red-500 focus:ring-red-100"
//           : "border-slate-200 hover:border-slate-300"
//       } ${className}`}
//     />
//   </div>
// );

// /* =========================================================
//    TEXTAREA
// ========================================================= */

// const Textarea = ({
//   className = "",
//   ...props
// }) => (
//   <textarea
//     {...props}
//     className={`min-h-[115px] w-full resize-y rounded-xl border bg-white px-3.5 py-3
//     text-[13px] font-medium leading-5 text-slate-800 outline-none transition
//     placeholder:text-[13px] placeholder:font-normal placeholder:text-slate-400
//     focus:border-[#087f8c] focus:ring-4 focus:ring-[#087f8c]/10
//     ${
//       props["aria-invalid"]
//         ? "border-red-400"
//         : "border-slate-200 hover:border-slate-300"
//     } ${className}`}
//   />
// );

// /* =========================================================
//    NORMAL SELECT
// ========================================================= */

// const Select = ({ children, ...props }) => (
//   <div className="relative">
//     <select
//       {...props}
//       className={`h-11 w-full appearance-none rounded-xl border bg-white px-3.5 pr-10
//       text-[13px] font-medium text-slate-800 outline-none transition
//       focus:border-[#087f8c] focus:ring-4 focus:ring-[#087f8c]/10
//       ${
//         props["aria-invalid"]
//           ? "border-red-400"
//           : "border-slate-200 hover:border-slate-300"
//       }`}
//     >
//       {children}
//     </select>

//     <FiChevronDown
//       size={16}
//       className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400"
//     />
//   </div>
// );

// /* =========================================================
//    SEARCHABLE DEPARTMENT DROPDOWN
// ========================================================= */

// function DepartmentSelect({
//   departments = [],
//   value,
//   onChange,
//   loading,
//   error,
//   invalid,
// }) {
//   const [open, setOpen] = useState(false);
//   const [search, setSearch] = useState("");
//   const wrapperRef = useRef(null);

//   const selectedDepartment = departments.find(
//     (department) => String(department.id) === String(value)
//   );

//   const filteredDepartments = departments.filter((department) =>
//     String(department.name ?? "")
//       .toLowerCase()
//       .includes(search.trim().toLowerCase())
//   );

//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (
//         wrapperRef.current &&
//         !wrapperRef.current.contains(event.target)
//       ) {
//         setOpen(false);
//       }
//     };

//     const handleEscape = (event) => {
//       if (event.key === "Escape") {
//         setOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleOutsideClick);
//     document.addEventListener("keydown", handleEscape);

//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//       document.removeEventListener("keydown", handleEscape);
//     };
//   }, []);

//   return (
//     <div ref={wrapperRef} className="relative w-full">
//       <button
//         type="button"
//         aria-haspopup="listbox"
//         aria-expanded={open}
//         aria-invalid={invalid}
//         disabled={loading}
//         onClick={() => {
//           if (!loading && !error) {
//             setOpen((previous) => !previous);
//             setSearch("");
//           }
//         }}
//         className={`flex h-11 w-full items-center justify-between gap-3 rounded-xl border bg-white px-3.5 text-left text-[13px] font-medium outline-none transition focus:ring-4 focus:ring-[#087f8c]/10 disabled:cursor-not-allowed disabled:bg-slate-50 ${
//           invalid
//             ? "border-red-400"
//             : open
//             ? "border-[#087f8c]"
//             : "border-slate-200 hover:border-slate-300"
//         }`}
//       >
//         <span
//           className={`truncate ${
//             selectedDepartment ? "text-slate-800" : "text-slate-400"
//           }`}
//         >
//           {loading
//             ? "Loading departments..."
//             : error
//             ? "Unable to load departments"
//             : selectedDepartment?.name || "Select Department"}
//         </span>

//         <FiChevronDown
//           size={16}
//           className={`shrink-0 text-slate-400 transition-transform ${
//             open ? "rotate-180" : ""
//           }`}
//         />
//       </button>

//       {open && (
//         <div className="absolute left-0 top-full z-[99999] mt-2 w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
//           <div className="border-b border-slate-100 p-2">
//             <div className="relative">
//               <FiSearch
//                 size={15}
//                 className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//               />

//               <input
//                 autoFocus
//                 type="text"
//                 value={search}
//                 onChange={(event) => setSearch(event.target.value)}
//                 placeholder="Search department..."
//                 className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-[12px] outline-none focus:border-[#087f8c] focus:bg-white"
//               />
//             </div>
//           </div>

//           <div className="max-h-56 overflow-y-auto overscroll-contain py-1">
//             {error ? (
//               <p className="px-3 py-4 text-center text-xs text-red-500">
//                 Failed to load departments.
//               </p>
//             ) : filteredDepartments.length === 0 ? (
//               <p className="px-3 py-4 text-center text-xs text-slate-400">
//                 {departments.length === 0
//                   ? "No departments available"
//                   : "No matching departments found"}
//               </p>
//             ) : (
//               filteredDepartments.map((department) => {
//                 const selected =
//                   String(department.id) === String(value);

//                 return (
//                   <button
//                     key={department.id}
//                     type="button"
//                     role="option"
//                     aria-selected={selected}
//                     onClick={() => {
//                       onChange(String(department.id));
//                       setOpen(false);
//                       setSearch("");
//                     }}
//                     className={`flex w-full items-center justify-between gap-2 px-3.5 py-2.5 text-left text-[13px] transition ${
//                       selected
//                         ? "bg-teal-50 font-semibold text-[#087f8c]"
//                         : "text-slate-700 hover:bg-slate-50"
//                     }`}
//                   >
//                     <span className="truncate">{department.name}</span>
//                     {selected && <FiCheck size={15} />}
//                   </button>
//                 );
//               })
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// /* =========================================================
//    TOGGLE
// ========================================================= */

// const Toggle = ({
//   enabled,
//   onChange,
//   label,
//   description,
// }) => (
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

// /* =========================================================
//    SUMMARY ITEM
// ========================================================= */

// function SummaryItem({ label, value }) {
//   return (
//     <div className="rounded-lg bg-slate-50 px-3 py-2">
//       <span className="text-[10px] font-medium text-slate-400">
//         {label}
//       </span>

//       <p className="mt-0.5 truncate text-[12px] font-bold text-slate-800">
//         {value === null || value === undefined || value === ""
//           ? "—"
//           : value}
//       </p>
//     </div>
//   );
// }

// /* =========================================================
//    MAIN CAREER ROLE FORM
// ========================================================= */

// export default function CareerRoleForm({
//   onSubmit,
//   onClose,
//   userId,
//   initialData = null,
// }) {
//   const {
//     data: deptData,
//     isLoading: deptLoading,
//     error: deptError,
//     mutate: reloadDepartments,
//   } = useSWR("departments", ApiService.get, {
//     revalidateOnFocus: false,
//   });

//   const departments = Array.isArray(deptData)
//     ? deptData
//     : Array.isArray(deptData?.data)
//     ? deptData.data
//     : Array.isArray(deptData?.departments)
//     ? deptData.departments
//     : [];

//   const [formData, setFormData] = useState(() => ({
//     department_id: initialData?.department_id ?? "",
//     title: initialData?.title ?? "",
//     location: initialData?.location ?? "",
//     experience: initialData?.experience ?? "",
//     qualification: initialData?.qualification ?? "",
//     employment_type: initialData?.employment_type ?? "Full Time",
//     summary: initialData?.summary ?? "",
//     description: initialData?.description ?? "",
//     responsibilities: Array.isArray(initialData?.responsibilities)
//       ? initialData.responsibilities
//       : [],
//     skills: Array.isArray(initialData?.skills)
//       ? initialData.skills
//       : [],
//     vacancy_code: initialData?.vacancy_code ?? "",
//     vacancies: initialData?.vacancies ?? 1,
//     application_deadline: initialData?.application_deadline ?? "",
//     is_active:
//       initialData?.is_active === undefined
//         ? true
//         : initialData.is_active === true ||
//           initialData.is_active === 1 ||
//           initialData.is_active === "1",
//     display_order: initialData?.display_order ?? 0,
//     created_by: initialData?.created_by ?? userId ?? "",
//   }));

//   const [errors, setErrors] = useState({});
//   const [responsibilityInput, setResponsibilityInput] = useState("");
//   const [skillInput, setSkillInput] = useState("");
//   const [saving, setSaving] = useState(false);

//   /* ---------------------------------------------------------
//      CLEAR A SINGLE FIELD ERROR
//   --------------------------------------------------------- */

//   const clearFieldError = (name) => {
//     setErrors((previous) => {
//       if (!previous[name]) return previous;

//       const updated = { ...previous };
//       delete updated[name];
//       return updated;
//     });
//   };

//   /* ---------------------------------------------------------
//      INPUT CHANGE
//   --------------------------------------------------------- */

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));

//     clearFieldError(name);
//   };

//   /* ---------------------------------------------------------
//      VALIDATION
//   --------------------------------------------------------- */

//   const validateForm = () => {
//     const newErrors = {};

//     const title = String(formData.title ?? "").trim();
//     const location = String(formData.location ?? "").trim();
//     const experience = String(formData.experience ?? "").trim();
//     const qualification = String(formData.qualification ?? "").trim();
//     const vacancyCode = String(formData.vacancy_code ?? "").trim();

//     if (!title) {
//       newErrors.title = "Job title is required.";
//     } else if (title.length < 3) {
//       newErrors.title = "Job title must contain at least 3 characters.";
//     } else if (title.length > 150) {
//       newErrors.title = "Job title cannot exceed 150 characters.";
//     }

//     if (!formData.department_id) {
//       newErrors.department_id = "Please select a department.";
//     } else if (
//       !departments.some(
//         (department) =>
//           String(department.id) === String(formData.department_id)
//       )
//     ) {
//       newErrors.department_id =
//         "Selected department is invalid. Please select it again.";
//     }

//     if (!location) {
//       newErrors.location = "Location is required.";
//     } else if (location.length > 150) {
//       newErrors.location = "Location cannot exceed 150 characters.";
//     }

//     if (!experience) {
//       newErrors.experience = "Experience is required.";
//     } else if (experience.length > 100) {
//       newErrors.experience = "Experience cannot exceed 100 characters.";
//     }

//     if (!qualification) {
//       newErrors.qualification = "Qualification is required.";
//     } else if (qualification.length > 255) {
//       newErrors.qualification =
//         "Qualification cannot exceed 255 characters.";
//     }

//     if (!vacancyCode) {
//       newErrors.vacancy_code = "Vacancy code is required.";
//     } else if (!/^[A-Za-z0-9_-]+$/.test(vacancyCode)) {
//       newErrors.vacancy_code =
//         "Use only letters, numbers, hyphens and underscores.";
//     } else if (vacancyCode.length > 50) {
//       newErrors.vacancy_code = "Vacancy code cannot exceed 50 characters.";
//     }

//     const vacancies = Number(formData.vacancies);

//     if (
//       formData.vacancies === "" ||
//       !Number.isInteger(vacancies) ||
//       vacancies < 1
//     ) {
//       newErrors.vacancies =
//         "Enter a whole number of vacancies (minimum 1).";
//     }

//     const displayOrder = Number(formData.display_order);

//     if (
//       formData.display_order === "" ||
//       !Number.isInteger(displayOrder) ||
//       displayOrder < 0
//     ) {
//       newErrors.display_order =
//         "Display order must be a whole number of 0 or greater.";
//     }

//     if (formData.application_deadline) {
//       const deadlineString = formData.application_deadline;
//       const deadline = new Date(`${deadlineString}T00:00:00`);
//       const today = new Date();

//       today.setHours(0, 0, 0, 0);

//       if (Number.isNaN(deadline.getTime())) {
//         newErrors.application_deadline =
//           "Please enter a valid application deadline.";
//       } else if (deadline < today) {
//         newErrors.application_deadline =
//           "Application deadline cannot be in the past.";
//       }
//     }

//     if (
//       formData.summary &&
//       String(formData.summary).trim().length > 1000
//     ) {
//       newErrors.summary = "Summary cannot exceed 1000 characters.";
//     }

//     if (
//       formData.description &&
//       String(formData.description).trim().length > 10000
//     ) {
//       newErrors.description =
//         "Description cannot exceed 10000 characters.";
//     }

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length > 0) {
//       const firstError = Object.values(newErrors)[0];
//       toast.error(firstError || "Please correct the highlighted fields.");
//       return false;
//     }

//     return true;
//   };

//   /* ---------------------------------------------------------
//      RESPONSIBILITIES
//   --------------------------------------------------------- */

//   const addResponsibility = () => {
//     const value = responsibilityInput.trim();

//     if (!value) {
//       toast.error("Enter a responsibility first.");
//       return;
//     }

//     if (
//       formData.responsibilities.some(
//         (item) => item.toLowerCase() === value.toLowerCase()
//       )
//     ) {
//       toast.error("This responsibility has already been added.");
//       return;
//     }

//     setFormData((previous) => ({
//       ...previous,
//       responsibilities: [...previous.responsibilities, value],
//     }));

//     setResponsibilityInput("");
//     toast.success("Responsibility added.");
//   };

//   const removeResponsibility = (index) => {
//     setFormData((previous) => ({
//       ...previous,
//       responsibilities: previous.responsibilities.filter(
//         (_, itemIndex) => itemIndex !== index
//       ),
//     }));
//   };

//   /* ---------------------------------------------------------
//      SKILLS
//   --------------------------------------------------------- */

//   const addSkill = () => {
//     const value = skillInput.trim();

//     if (!value) {
//       toast.error("Enter a skill first.");
//       return;
//     }

//     if (
//       formData.skills.some(
//         (item) => item.toLowerCase() === value.toLowerCase()
//       )
//     ) {
//       toast.error("This skill has already been added.");
//       return;
//     }

//     setFormData((previous) => ({
//       ...previous,
//       skills: [...previous.skills, value],
//     }));

//     setSkillInput("");
//     toast.success("Skill added.");
//   };

//   const removeSkill = (index) => {
//     setFormData((previous) => ({
//       ...previous,
//       skills: previous.skills.filter(
//         (_, itemIndex) => itemIndex !== index
//       ),
//     }));
//   };

//   /* ---------------------------------------------------------
//      SUBMIT
//   --------------------------------------------------------- */

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (saving) return;

//     if (deptLoading) {
//       toast.error("Please wait until departments finish loading.");
//       return;
//     }

//     if (deptError) {
//       toast.error("Departments could not be loaded. Please retry.");
//       return;
//     }

//     if (!validateForm()) return;

//     if (typeof onSubmit !== "function") {
//       toast.error("Submit handler is not configured.");
//       return;
//     }

//     try {
//       setSaving(true);

//       const payload = {
//         ...formData,
//         title: String(formData.title).trim(),
//         location: String(formData.location).trim(),
//         experience: String(formData.experience).trim(),
//         qualification: String(formData.qualification).trim(),
//         vacancy_code: String(formData.vacancy_code).trim(),

//         created_by: formData.created_by
//           ? Number(formData.created_by)
//           : null,

//         department_id: Number(formData.department_id),
//         vacancies: Number(formData.vacancies),
//         display_order: Number(formData.display_order),

//         responsibilities: formData.responsibilities,
//         skills: formData.skills,
//         is_active: Boolean(formData.is_active),
//       };

//       await onSubmit(payload);

//       toast.success(
//         initialData?.id
//           ? "Career role updated successfully."
//           : "Career role saved successfully."
//       );
//     } catch (error) {
//       console.error("Career role submit error:", error);

//       toast.error(
//         error?.message || "Failed to save career role."
//       );
//     } finally {
//       setSaving(false);
//     }
//   };

//   /* ---------------------------------------------------------
//      ANIMATIONS
//   --------------------------------------------------------- */

//   const containerVariants = {
//     hidden: { opacity: 0, y: 8 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.3,
//         staggerChildren: 0.04,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 8 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.25 },
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
//       noValidate
//       className="w-full"
//     >
//       <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
//         {/* LEFT SIDE */}
//         <div className="space-y-4">
//           {/* BASIC INFORMATION */}
//           <motion.section
//             variants={itemVariants}
//             className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
//           >
//             <SectionTitle
//               icon={FiBriefcase}
//               title="Basic Job Information"
//               description="Enter the basic information for this career opportunity."
//             />

//             <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//               <div className="md:col-span-2">
//                 <FieldLabel required>Job Title</FieldLabel>
//                 <Input
//                   name="title"
//                   value={formData.title}
//                   onChange={handleChange}
//                   placeholder="e.g. Staff Nurse"
//                   icon={FiBriefcase}
//                   maxLength={150}
//                   aria-invalid={Boolean(errors.title)}
//                 />
//                 <FieldError>{errors.title}</FieldError>
//               </div>

//               <div>
//                 <FieldLabel required>Department</FieldLabel>
//                 <DepartmentSelect
//                   departments={departments}
//                   value={formData.department_id}
//                   loading={deptLoading}
//                   error={deptError}
//                   invalid={Boolean(errors.department_id)}
//                   onChange={(value) => {
//                     setFormData((previous) => ({
//                       ...previous,
//                       department_id: value,
//                     }));
//                     clearFieldError("department_id");
//                   }}
//                 />
//                 <FieldError>{errors.department_id}</FieldError>

//                 {deptError && (
//                   <button
//                     type="button"
//                     onClick={() => reloadDepartments()}
//                     className="mt-1.5 text-xs font-semibold text-[#087f8c] underline"
//                   >
//                     Retry loading departments
//                   </button>
//                 )}
//               </div>

//               <div>
//                 <FieldLabel required>Location</FieldLabel>
//                 <Input
//                   name="location"
//                   value={formData.location}
//                   onChange={handleChange}
//                   placeholder="e.g. Metro Hospital"
//                   icon={FiMapPin}
//                   maxLength={150}
//                   aria-invalid={Boolean(errors.location)}
//                 />
//                 <FieldError>{errors.location}</FieldError>
//               </div>

//               <div>
//                 <FieldLabel required>Employment Type</FieldLabel>
//                 <Select
//                   name="employment_type"
//                   value={formData.employment_type}
//                   onChange={handleChange}
//                 >
//                   <option value="Full Time">Full Time</option>
//                   <option value="Part Time">Part Time</option>
//                   <option value="Contract">Contract</option>
//                   <option value="Internship">Internship</option>
//                   <option value="Temporary">Temporary</option>
//                 </Select>
//               </div>

//               <div>
//                 <FieldLabel required>Experience</FieldLabel>
//                 <Input
//                   name="experience"
//                   value={formData.experience}
//                   onChange={handleChange}
//                   placeholder="e.g. 2-5 Years"
//                   maxLength={100}
//                   aria-invalid={Boolean(errors.experience)}
//                 />
//                 <FieldError>{errors.experience}</FieldError>
//               </div>

//               <div className="md:col-span-2">
//                 <FieldLabel required>Qualification</FieldLabel>
//                 <Input
//                   name="qualification"
//                   value={formData.qualification}
//                   onChange={handleChange}
//                   placeholder="e.g. B.Sc Nursing / GNM"
//                   maxLength={255}
//                   aria-invalid={Boolean(errors.qualification)}
//                 />
//                 <FieldError>{errors.qualification}</FieldError>
//               </div>
//             </div>
//           </motion.section>

//           {/* VACANCY INFORMATION */}
//           <motion.section
//             variants={itemVariants}
//             className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
//           >
//             <SectionTitle
//               icon={FiClipboard}
//               title="Vacancy Information"
//               description="Configure vacancy reference, openings and application deadline."
//               iconClass="bg-blue-50 text-blue-600"
//             />

//             <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//               <div>
//                 <FieldLabel required>Vacancy Code</FieldLabel>
//                 <Input
//                   name="vacancy_code"
//                   value={formData.vacancy_code}
//                   onChange={handleChange}
//                   placeholder="e.g. NUR-2026-001"
//                   maxLength={50}
//                   aria-invalid={Boolean(errors.vacancy_code)}
//                 />
//                 <FieldError>{errors.vacancy_code}</FieldError>
//               </div>

//               <div>
//                 <FieldLabel required>Number of Vacancies</FieldLabel>
//                 <Input
//                   name="vacancies"
//                   type="number"
//                   min="1"
//                   step="1"
//                   value={formData.vacancies}
//                   onChange={handleChange}
//                   aria-invalid={Boolean(errors.vacancies)}
//                 />
//                 <FieldError>{errors.vacancies}</FieldError>
//               </div>

//               <div>
//                 <FieldLabel>Application Deadline</FieldLabel>
//                 <Input
//                   name="application_deadline"
//                   type="date"
//                   value={formData.application_deadline}
//                   onChange={handleChange}
//                   icon={FiCalendar}
//                   aria-invalid={Boolean(errors.application_deadline)}
//                 />
//                 <FieldError>{errors.application_deadline}</FieldError>
//               </div>

//               <div>
//                 <FieldLabel>Display Order</FieldLabel>
//                 <Input
//                   name="display_order"
//                   type="number"
//                   min="0"
//                   step="1"
//                   value={formData.display_order}
//                   onChange={handleChange}
//                   aria-invalid={Boolean(errors.display_order)}
//                 />
//                 <FieldError>{errors.display_order}</FieldError>
//               </div>
//             </div>
//           </motion.section>

//           {/* JOB DESCRIPTION */}
//           <motion.section
//             variants={itemVariants}
//             className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
//           >
//             <SectionTitle
//               icon={FiFileText}
//               title="Job Description"
//               description="Provide a clear overview of this position."
//               iconClass="bg-purple-50 text-purple-600"
//             />

//             <div className="space-y-4">
//               <div>
//                 <FieldLabel>Summary</FieldLabel>
//                 <Textarea
//                   name="summary"
//                   value={formData.summary}
//                   onChange={handleChange}
//                   placeholder="Write a short summary of this position..."
//                   maxLength={1000}
//                   className="min-h-[90px]"
//                   aria-invalid={Boolean(errors.summary)}
//                 />
//                 <FieldError>{errors.summary}</FieldError>
//                 <p className="mt-1 text-right text-[10px] text-slate-400">
//                   {String(formData.summary).length}/1000
//                 </p>
//               </div>

//               <div>
//                 <FieldLabel>Detailed Description</FieldLabel>
//                 <Textarea
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                   placeholder="Write detailed information about the job..."
//                   maxLength={10000}
//                   className="min-h-[150px]"
//                   aria-invalid={Boolean(errors.description)}
//                 />
//                 <FieldError>{errors.description}</FieldError>
//                 <p className="mt-1 text-right text-[10px] text-slate-400">
//                   {String(formData.description).length}/10000
//                 </p>
//               </div>
//             </div>
//           </motion.section>

//           {/* RESPONSIBILITIES */}
//           <motion.section
//             variants={itemVariants}
//             className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
//           >
//             <SectionTitle
//               icon={FiCheck}
//               title="Responsibilities"
//               description="Add the key responsibilities for this position."
//               iconClass="bg-emerald-50 text-emerald-600"
//             />

//             <FieldLabel>Job Responsibilities</FieldLabel>

//             <div className="flex gap-2">
//               <input
//                 value={responsibilityInput}
//                 onChange={(event) => setResponsibilityInput(event.target.value)}
//                 onKeyDown={(event) => {
//                   if (event.key === "Enter" || event.key === ",") {
//                     event.preventDefault();
//                     addResponsibility();
//                   }
//                 }}
//                 placeholder="e.g. Provide patient care"
//                 className="h-11 min-w-0 flex-1 rounded-xl border border-slate-200 px-3.5 text-[13px] outline-none focus:border-[#087f8c] focus:ring-4 focus:ring-[#087f8c]/10"
//               />

//               <button
//                 type="button"
//                 onClick={addResponsibility}
//                 className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#087f8c] text-white transition hover:bg-[#066c77]"
//               >
//                 <FiPlus size={18} />
//               </button>
//             </div>

//             <p className="mt-1.5 text-[11px] text-slate-400">
//               Press Enter or click + to add.
//             </p>

//             <div className="mt-3 space-y-2">
//               {formData.responsibilities.map((item, index) => (
//                 <div
//                   key={`${item}-${index}`}
//                   className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5"
//                 >
//                   <div className="flex min-w-0 items-center gap-2">
//                     <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
//                       <FiCheck size={12} />
//                     </span>
//                     <span className="truncate text-[12px] font-medium text-slate-700">
//                       {item}
//                     </span>
//                   </div>

//                   <button
//                     type="button"
//                     onClick={() => removeResponsibility(index)}
//                     className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500 hover:bg-red-100"
//                     aria-label="Remove responsibility"
//                   >
//                     <FiTrash2 size={13} />
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </motion.section>

//           {/* SKILLS */}
//           <motion.section
//             variants={itemVariants}
//             className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
//           >
//             <SectionTitle
//               icon={FiActivity}
//               title="Required Skills"
//               description="Add skills required for this position."
//               iconClass="bg-cyan-50 text-cyan-600"
//             />

//             <FieldLabel>Skills</FieldLabel>

//             <div className="flex gap-2">
//               <input
//                 value={skillInput}
//                 onChange={(event) => setSkillInput(event.target.value)}
//                 onKeyDown={(event) => {
//                   if (event.key === "Enter" || event.key === ",") {
//                     event.preventDefault();
//                     addSkill();
//                   }
//                 }}
//                 placeholder="e.g. Patient Care"
//                 className="h-11 min-w-0 flex-1 rounded-xl border border-slate-200 px-3.5 text-[13px] outline-none focus:border-[#087f8c] focus:ring-4 focus:ring-[#087f8c]/10"
//               />

//               <button
//                 type="button"
//                 onClick={addSkill}
//                 className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#087f8c] text-white transition hover:bg-[#066c77]"
//               >
//                 <FiPlus size={18} />
//               </button>
//             </div>

//             <p className="mt-1.5 text-[11px] text-slate-400">
//               Press Enter or click + to add.
//             </p>

//             <div className="mt-3 flex flex-wrap gap-2">
//               {formData.skills.map((skill, index) => (
//                 <span
//                   key={`${skill}-${index}`}
//                   className="inline-flex items-center gap-1.5 rounded-full border border-cyan-100 bg-cyan-50 px-2.5 py-1.5 text-[12px] font-semibold text-cyan-700"
//                 >
//                   <FiCheck size={12} />
//                   {skill}
//                   <button
//                     type="button"
//                     onClick={() => removeSkill(index)}
//                     className="rounded-full p-0.5 hover:bg-white"
//                     aria-label={`Remove ${skill}`}
//                   >
//                     <FiX size={12} />
//                   </button>
//                 </span>
//               ))}
//             </div>
//           </motion.section>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="space-y-4 xl:sticky xl:top-4 xl:self-start">
//           <motion.section
//             variants={itemVariants}
//             className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
//           >
//             <div className="border-b border-slate-100 p-4 sm:p-5">
//               <SectionTitle
//                 icon={FiBriefcase}
//                 title="Job Status"
//                 description="Control visibility of this career opportunity."
//               />

//               <Toggle
//                 enabled={formData.is_active}
//                 onChange={(value) =>
//                   setFormData((previous) => ({
//                     ...previous,
//                     is_active: value,
//                   }))
//                 }
//                 label="Active Job"
//                 description="This job will be visible on the career page."
//               />
//             </div>
//           </motion.section>

//           <motion.section
//             variants={itemVariants}
//             className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
//           >
//             <div className="mb-3 flex items-center gap-2.5">
//               <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
//                 <FiClipboard size={16} />
//               </div>

//               <div>
//                 <h3 className="text-[14px] font-bold text-slate-900">
//                   Job Summary
//                 </h3>
//                 <p className="text-[10px] text-slate-400">
//                   Current form information
//                 </p>
//               </div>
//             </div>

//             <div className="space-y-1.5">
//               <SummaryItem label="Job Title" value={formData.title} />

//               <SummaryItem
//                 label="Department"
//                 value={
//                   departments.find(
//                     (department) =>
//                       String(department.id) ===
//                       String(formData.department_id)
//                   )?.name
//                 }
//               />

//               <SummaryItem label="Location" value={formData.location} />
//               <SummaryItem label="Experience" value={formData.experience} />
//               <SummaryItem label="Employment" value={formData.employment_type} />
//               <SummaryItem label="Vacancies" value={formData.vacancies} />
//               <SummaryItem
//                 label="Responsibilities"
//                 value={formData.responsibilities.length}
//               />
//               <SummaryItem label="Skills" value={formData.skills.length} />
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
//             Ready to publish this job?
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
//               className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 text-[12px] font-semibold text-slate-600 transition hover:bg-slate-50 disabled:opacity-50 sm:flex-none"
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
//                 Save Job
//               </>
//             )}
//           </button>
//         </div>
//       </motion.div>
//     </motion.form>
//   );
// }




"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import useSWR from "swr";
import toast from "react-hot-toast";

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
  FiX,
  FiActivity,
  FiSearch,
} from "react-icons/fi";

import ApiService from "../../src/services/Apiservices";

/* =========================================================
   HELPERS
========================================================= */

const parseArrayField = (value) => {
  if (Array.isArray(value)) {
    return value;
  }

  if (typeof value === "string" && value.trim()) {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return value
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean);
    }
  }

  return [];
};

const formatDateForInput = (value) => {
  if (!value) return "";

  // Handles ISO strings, SQL dates, and Date-like values.
  const text = String(value).trim();

  const match = text.match(/^(\d{4}-\d{2}-\d{2})/);

  if (match) {
    return match[1];
  }

  const date = new Date(text);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const normalizeActive = (value) => {
  if (value === undefined || value === null) return true;

  return (
    value === true ||
    value === 1 ||
    value === "1"
  );
};

const buildFormData = (initialData, userId) => ({
  department_id: initialData?.department_id ?? "",
  title: initialData?.title ?? "",
  location: initialData?.location ?? "",
  experience: initialData?.experience ?? "",
  qualification: initialData?.qualification ?? "",
  employment_type: initialData?.employment_type ?? "Full Time",
  summary: initialData?.summary ?? "",
  description: initialData?.description ?? "",

  // FIX: Support JSON strings and arrays.
  responsibilities: parseArrayField(
    initialData?.responsibilities
  ),

  skills: parseArrayField(initialData?.skills),

  vacancy_code: initialData?.vacancy_code ?? "",
  vacancies: initialData?.vacancies ?? 1,

  // FIX: Format date for input type="date".
  application_deadline: formatDateForInput(
    initialData?.application_deadline
  ),

  is_active: normalizeActive(initialData?.is_active),
  display_order: initialData?.display_order ?? 0,
  created_by: initialData?.created_by ?? userId ?? "",
});

/* =========================================================
   SECTION TITLE
========================================================= */

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

/* =========================================================
   FIELD LABEL
========================================================= */

const FieldLabel = ({ children, required = false }) => (
  <label className="mb-1.5 block text-[13px] font-semibold text-slate-700">
    {children}
    {required && <span className="ml-1 text-red-500">*</span>}
  </label>
);

/* =========================================================
   INLINE ERROR
========================================================= */

const FieldError = ({ children }) => {
  if (!children) return null;

  return (
    <p
      role="alert"
      className="mt-1.5 flex items-start gap-1 text-xs font-medium text-red-600"
    >
      <FiX size={13} className="mt-0.5 shrink-0" />
      <span>{children}</span>
    </p>
  );
};

/* =========================================================
   INPUT
========================================================= */

const Input = ({ icon: Icon, className = "", ...props }) => (
  <div className="relative">
    {Icon && (
      <Icon
        size={16}
        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
      />
    )}

    <input
      {...props}
      className={`h-11 w-full rounded-xl border bg-white ${
        Icon ? "pl-10" : "px-3.5"
      } pr-3.5 text-[13px] font-medium text-slate-800 outline-none transition
      placeholder:text-[13px] placeholder:font-normal placeholder:text-slate-400
      focus:border-[#087f8c] focus:ring-4 focus:ring-[#087f8c]/10
      disabled:cursor-not-allowed disabled:bg-slate-50
      ${
        props["aria-invalid"]
          ? "border-red-400 focus:border-red-500 focus:ring-red-100"
          : "border-slate-200 hover:border-slate-300"
      } ${className}`}
    />
  </div>
);

/* =========================================================
   TEXTAREA
========================================================= */

const Textarea = ({ className = "", ...props }) => (
  <textarea
    {...props}
    className={`min-h-[115px] w-full resize-y rounded-xl border bg-white px-3.5 py-3
    text-[13px] font-medium leading-5 text-slate-800 outline-none transition
    placeholder:text-[13px] placeholder:font-normal placeholder:text-slate-400
    focus:border-[#087f8c] focus:ring-4 focus:ring-[#087f8c]/10
    ${
      props["aria-invalid"]
        ? "border-red-400"
        : "border-slate-200 hover:border-slate-300"
    } ${className}`}
  />
);

/* =========================================================
   NORMAL SELECT
========================================================= */

const Select = ({ children, ...props }) => (
  <div className="relative">
    <select
      {...props}
      className={`h-11 w-full appearance-none rounded-xl border bg-white px-3.5 pr-10
      text-[13px] font-medium text-slate-800 outline-none transition
      focus:border-[#087f8c] focus:ring-4 focus:ring-[#087f8c]/10
      ${
        props["aria-invalid"]
          ? "border-red-400"
          : "border-slate-200 hover:border-slate-300"
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

/* =========================================================
   SEARCHABLE DEPARTMENT DROPDOWN
========================================================= */

function DepartmentSelect({
  departments = [],
  value,
  onChange,
  loading,
  error,
  invalid,
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);

  const selectedDepartment = departments.find(
    (department) => String(department.id) === String(value)
  );

  const filteredDepartments = departments.filter((department) =>
    String(department.name ?? "")
      .toLowerCase()
      .includes(search.trim().toLowerCase())
  );

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-invalid={invalid}
        disabled={loading || Boolean(error)}
        onClick={() => {
          setOpen((previous) => !previous);
          setSearch("");
        }}
        className={`flex h-11 w-full items-center justify-between gap-3 rounded-xl border bg-white px-3.5 text-left text-[13px] font-medium outline-none transition focus:ring-4 focus:ring-[#087f8c]/10 disabled:cursor-not-allowed disabled:bg-slate-50 ${
          invalid
            ? "border-red-400"
            : open
              ? "border-[#087f8c]"
              : "border-slate-200 hover:border-slate-300"
        }`}
      >
        <span
          className={`truncate ${
            selectedDepartment ? "text-slate-800" : "text-slate-400"
          }`}
        >
          {loading
            ? "Loading departments..."
            : error
              ? "Unable to load departments"
              : selectedDepartment?.name || "Select Department"}
        </span>

        <FiChevronDown
          size={16}
          className={`shrink-0 text-slate-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-[99999] mt-2 w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
          <div className="border-b border-slate-100 p-2">
            <div className="relative">
              <FiSearch
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                autoFocus
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search department..."
                className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-[12px] outline-none focus:border-[#087f8c] focus:bg-white"
              />
            </div>
          </div>

          <div className="max-h-56 overflow-y-auto overscroll-contain py-1">
            {filteredDepartments.length === 0 ? (
              <p className="px-3 py-4 text-center text-xs text-slate-400">
                No departments found
              </p>
            ) : (
              filteredDepartments.map((department) => {
                const selected =
                  String(department.id) === String(value);

                return (
                  <button
                    key={department.id}
                    type="button"
                    role="option"
                    aria-selected={selected}
                    onClick={() => {
                      onChange(String(department.id));
                      setOpen(false);
                      setSearch("");
                    }}
                    className={`flex w-full items-center justify-between gap-2 px-3.5 py-2.5 text-left text-[13px] transition ${
                      selected
                        ? "bg-teal-50 font-semibold text-[#087f8c]"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span className="truncate">{department.name}</span>
                    {selected && <FiCheck size={15} />}
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================
   TOGGLE
========================================================= */

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

/* =========================================================
   SUMMARY ITEM
========================================================= */

function SummaryItem({ label, value }) {
  return (
    <div className="rounded-lg bg-slate-50 px-3 py-2">
      <span className="text-[10px] font-medium text-slate-400">
        {label}
      </span>

      <p className="mt-0.5 truncate text-[12px] font-bold text-slate-800">
        {value === null || value === undefined || value === ""
          ? "—"
          : value}
      </p>
    </div>
  );
}

/* =========================================================
   MAIN CAREER ROLE FORM
========================================================= */

export default function CareerRoleForm({
  onSubmit,
  onClose,
  userId,
  initialData = null,
}) {
  const {
    data: deptData,
    isLoading: deptLoading,
    error: deptError,
    mutate: reloadDepartments,
  } = useSWR("departments", ApiService.get, {
    revalidateOnFocus: false,
  });

  const departments = Array.isArray(deptData)
    ? deptData
    : Array.isArray(deptData?.data)
      ? deptData.data
      : Array.isArray(deptData?.departments)
        ? deptData.departments
        : [];

  const [formData, setFormData] = useState(() =>
    buildFormData(initialData, userId)
  );

  const [errors, setErrors] = useState({});
  const [responsibilityInput, setResponsibilityInput] = useState("");
  const [skillInput, setSkillInput] = useState("");
  const [saving, setSaving] = useState(false);

  /*
   * FIX:
   * Reload fields when selected edit record changes.
   * JSON string fields are converted to arrays.
   * Dates are normalized for type="date".
   */
  useEffect(() => {
    setFormData(buildFormData(initialData, userId));
    setErrors({});
    setResponsibilityInput("");
    setSkillInput("");
  }, [initialData, userId]);

  const clearFieldError = (name) => {
    setErrors((previous) => {
      if (!previous[name]) return previous;

      const updated = { ...previous };
      delete updated[name];

      return updated;
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    clearFieldError(name);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!String(formData.title ?? "").trim()) {
      newErrors.title = "Job title is required.";
    }

    if (!formData.department_id) {
      newErrors.department_id = "Please select a department.";
    }

    if (
      formData.department_id &&
      !departments.some(
        (department) =>
          String(department.id) === String(formData.department_id)
      )
    ) {
      newErrors.department_id =
        "Selected department is invalid. Please select it again.";
    }

    if (!String(formData.location ?? "").trim()) {
      newErrors.location = "Location is required.";
    }

    if (!String(formData.experience ?? "").trim()) {
      newErrors.experience = "Experience is required.";
    }

    if (!String(formData.qualification ?? "").trim()) {
      newErrors.qualification = "Qualification is required.";
    }

    if (!String(formData.vacancy_code ?? "").trim()) {
      newErrors.vacancy_code = "Vacancy code is required.";
    }

    const vacancies = Number(formData.vacancies);

    if (
      formData.vacancies === "" ||
      !Number.isInteger(vacancies) ||
      vacancies < 1
    ) {
      newErrors.vacancies = "Enter at least one vacancy.";
    }

    const displayOrder = Number(formData.display_order);

    if (
      formData.display_order === "" ||
      !Number.isInteger(displayOrder) ||
      displayOrder < 0
    ) {
      newErrors.display_order =
        "Display order must be 0 or greater.";
    }

    if (formData.application_deadline) {
      const deadline = new Date(
        `${formData.application_deadline}T00:00:00`
      );

      if (Number.isNaN(deadline.getTime())) {
        newErrors.application_deadline =
          "Enter a valid application deadline.";
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast.error(Object.values(newErrors)[0]);
      return false;
    }

    return true;
  };

  /* RESPONSIBILITIES */

  const addResponsibility = () => {
    const value = responsibilityInput.trim();

    if (!value) {
      toast.error("Enter a responsibility first.");
      return;
    }

    if (
      formData.responsibilities.some(
        (item) => item.toLowerCase() === value.toLowerCase()
      )
    ) {
      toast.error("This responsibility has already been added.");
      return;
    }

    setFormData((previous) => ({
      ...previous,
      responsibilities: [...previous.responsibilities, value],
    }));

    setResponsibilityInput("");
  };

  const removeResponsibility = (index) => {
    setFormData((previous) => ({
      ...previous,
      responsibilities: previous.responsibilities.filter(
        (_, itemIndex) => itemIndex !== index
      ),
    }));
  };

  /* SKILLS */

  const addSkill = () => {
    const value = skillInput.trim();

    if (!value) {
      toast.error("Enter a skill first.");
      return;
    }

    if (
      formData.skills.some(
        (item) => item.toLowerCase() === value.toLowerCase()
      )
    ) {
      toast.error("This skill has already been added.");
      return;
    }

    setFormData((previous) => ({
      ...previous,
      skills: [...previous.skills, value],
    }));

    setSkillInput("");
  };

  const removeSkill = (index) => {
    setFormData((previous) => ({
      ...previous,
      skills: previous.skills.filter(
        (_, itemIndex) => itemIndex !== index
      ),
    }));
  };

  /* SUBMIT */

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (saving) return;

    if (deptLoading) {
      toast.error("Please wait until departments finish loading.");
      return;
    }

    if (deptError) {
      toast.error("Departments could not be loaded. Please retry.");
      return;
    }

    if (!validateForm()) return;

    if (typeof onSubmit !== "function") {
      toast.error("Submit handler is not configured.");
      return;
    }

    try {
      setSaving(true);

      const payload = {
        ...formData,

        title: String(formData.title).trim(),
        location: String(formData.location).trim(),
        experience: String(formData.experience).trim(),
        qualification: String(formData.qualification).trim(),
        vacancy_code: String(formData.vacancy_code).trim(),

        department_id: Number(formData.department_id),
        vacancies: Number(formData.vacancies),
        display_order: Number(formData.display_order),

        responsibilities: formData.responsibilities
          .map((item) => String(item).trim())
          .filter(Boolean),

        skills: formData.skills
          .map((item) => String(item).trim())
          .filter(Boolean),

        is_active: formData.is_active ? 1 : 0,

        created_by: formData.created_by
          ? Number(formData.created_by)
          : null,
      };

      await onSubmit(payload);

      toast.success(
        initialData?.id
          ? "Career role updated successfully."
          : "Career role saved successfully."
      );
    } catch (error) {
      console.error("Career role submit error:", error);

      toast.error(
        error?.message || "Failed to save career role."
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
      transition: { duration: 0.3, staggerChildren: 0.04 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      noValidate
      className="w-full"
    >
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-4">
          {/* BASIC INFORMATION */}
          <motion.section
            variants={itemVariants}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
          >
            <SectionTitle
              icon={FiBriefcase}
              title="Basic Job Information"
              description="Enter the basic information for this career opportunity."
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="md:col-span-2">
                <FieldLabel required>Job Title</FieldLabel>
                <Input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. Staff Nurse"
                  icon={FiBriefcase}
                  maxLength={150}
                  aria-invalid={Boolean(errors.title)}
                />
                <FieldError>{errors.title}</FieldError>
              </div>

              <div>
                <FieldLabel required>Department</FieldLabel>
                <DepartmentSelect
                  departments={departments}
                  value={formData.department_id}
                  loading={deptLoading}
                  error={deptError}
                  invalid={Boolean(errors.department_id)}
                  onChange={(value) => {
                    setFormData((previous) => ({
                      ...previous,
                      department_id: value,
                    }));

                    clearFieldError("department_id");
                  }}
                />
                <FieldError>{errors.department_id}</FieldError>

                {deptError && (
                  <button
                    type="button"
                    onClick={() => reloadDepartments()}
                    className="mt-1.5 text-xs font-semibold text-[#087f8c] underline"
                  >
                    Retry loading departments
                  </button>
                )}
              </div>

              <div>
                <FieldLabel required>Location</FieldLabel>
                <Input
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Metro Hospital"
                  icon={FiMapPin}
                  maxLength={150}
                  aria-invalid={Boolean(errors.location)}
                />
                <FieldError>{errors.location}</FieldError>
              </div>

              <div>
                <FieldLabel required>Employment Type</FieldLabel>
                <Select
                  name="employment_type"
                  value={formData.employment_type}
                  onChange={handleChange}
                >
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                  <option value="Temporary">Temporary</option>
                </Select>
              </div>

              <div>
                <FieldLabel required>Experience</FieldLabel>
                <Input
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="e.g. 2-5 Years"
                  maxLength={100}
                  aria-invalid={Boolean(errors.experience)}
                />
                <FieldError>{errors.experience}</FieldError>
              </div>

              <div className="md:col-span-2">
                <FieldLabel required>Qualification</FieldLabel>
                <Input
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  placeholder="e.g. B.Sc Nursing / GNM"
                  maxLength={255}
                  aria-invalid={Boolean(errors.qualification)}
                />
                <FieldError>{errors.qualification}</FieldError>
              </div>
            </div>
          </motion.section>

          {/* VACANCY INFORMATION */}
          <motion.section
            variants={itemVariants}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
          >
            <SectionTitle
              icon={FiClipboard}
              title="Vacancy Information"
              description="Configure vacancy reference, openings and application deadline."
              iconClass="bg-blue-50 text-blue-600"
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <FieldLabel required>Vacancy Code</FieldLabel>
                <Input
                  name="vacancy_code"
                  value={formData.vacancy_code}
                  onChange={handleChange}
                  placeholder="e.g. NUR-2026-001"
                  maxLength={50}
                  aria-invalid={Boolean(errors.vacancy_code)}
                />
                <FieldError>{errors.vacancy_code}</FieldError>
              </div>

              <div>
                <FieldLabel required>Number of Vacancies</FieldLabel>
                <Input
                  name="vacancies"
                  type="number"
                  min="1"
                  step="1"
                  value={formData.vacancies}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.vacancies)}
                />
                <FieldError>{errors.vacancies}</FieldError>
              </div>

              {/* FIXED APPLICATION DEADLINE */}
              <div>
                <FieldLabel>Application Deadline</FieldLabel>
                <Input
                  name="application_deadline"
                  type="date"
                  value={formData.application_deadline}
                  onChange={handleChange}
                  icon={FiCalendar}
                  aria-invalid={Boolean(errors.application_deadline)}
                />
                <FieldError>
                  {errors.application_deadline}
                </FieldError>
              </div>

              <div>
                <FieldLabel>Display Order</FieldLabel>
                <Input
                  name="display_order"
                  type="number"
                  min="0"
                  step="1"
                  value={formData.display_order}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.display_order)}
                />
                <FieldError>{errors.display_order}</FieldError>
              </div>
            </div>
          </motion.section>

          {/* DESCRIPTION */}
          <motion.section
            variants={itemVariants}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
          >
            <SectionTitle
              icon={FiFileText}
              title="Job Description"
              description="Provide a clear overview of this position."
              iconClass="bg-purple-50 text-purple-600"
            />

            <div className="space-y-4">
              <div>
                <FieldLabel>Summary</FieldLabel>
                <Textarea
                  name="summary"
                  value={formData.summary}
                  onChange={handleChange}
                  placeholder="Write a short summary of this position..."
                  maxLength={1000}
                  className="min-h-[90px]"
                  aria-invalid={Boolean(errors.summary)}
                />
                <FieldError>{errors.summary}</FieldError>
              </div>

              <div>
                <FieldLabel>Detailed Description</FieldLabel>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Write detailed information about the job..."
                  maxLength={10000}
                  className="min-h-[150px]"
                  aria-invalid={Boolean(errors.description)}
                />
                <FieldError>{errors.description}</FieldError>
              </div>
            </div>
          </motion.section>

          {/* RESPONSIBILITIES */}
          <motion.section
            variants={itemVariants}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
          >
            <SectionTitle
              icon={FiCheck}
              title="Responsibilities"
              description="Add the key responsibilities for this position."
              iconClass="bg-emerald-50 text-emerald-600"
            />

            <FieldLabel>Job Responsibilities</FieldLabel>

            <div className="flex gap-2">
              <input
                value={responsibilityInput}
                onChange={(event) =>
                  setResponsibilityInput(event.target.value)
                }
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === ",") {
                    event.preventDefault();
                    addResponsibility();
                  }
                }}
                placeholder="e.g. Provide patient care"
                className="h-11 min-w-0 flex-1 rounded-xl border border-slate-200 px-3.5 text-[13px] outline-none focus:border-[#087f8c] focus:ring-4 focus:ring-[#087f8c]/10"
              />

              <button
                type="button"
                onClick={addResponsibility}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#087f8c] text-white transition hover:bg-[#066c77]"
              >
                <FiPlus size={18} />
              </button>
            </div>

            <p className="mt-1.5 text-[11px] text-slate-400">
              Press Enter or click + to add.
            </p>

            <div className="mt-3 space-y-2">
              {formData.responsibilities.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5"
                >
                  <div className="flex min-w-0 items-center gap-2">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <FiCheck size={12} />
                    </span>

                    <span className="break-words text-[12px] font-medium text-slate-700">
                      {item}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeResponsibility(index)}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500 hover:bg-red-100"
                    aria-label="Remove responsibility"
                  >
                    <FiTrash2 size={13} />
                  </button>
                </div>
              ))}

              {formData.responsibilities.length === 0 && (
                <p className="rounded-xl border border-dashed border-slate-200 px-3 py-4 text-center text-xs text-slate-400">
                  No responsibilities added yet.
                </p>
              )}
            </div>
          </motion.section>

          {/* REQUIRED SKILLS */}
          <motion.section
            variants={itemVariants}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
          >
            <SectionTitle
              icon={FiActivity}
              title="Required Skills"
              description="Add skills required for this position."
              iconClass="bg-cyan-50 text-cyan-600"
            />

            <FieldLabel>Skills</FieldLabel>

            <div className="flex gap-2">
              <input
                value={skillInput}
                onChange={(event) => setSkillInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === ",") {
                    event.preventDefault();
                    addSkill();
                  }
                }}
                placeholder="e.g. Patient Care"
                className="h-11 min-w-0 flex-1 rounded-xl border border-slate-200 px-3.5 text-[13px] outline-none focus:border-[#087f8c] focus:ring-4 focus:ring-[#087f8c]/10"
              />

              <button
                type="button"
                onClick={addSkill}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#087f8c] text-white transition hover:bg-[#066c77]"
              >
                <FiPlus size={18} />
              </button>
            </div>

            <p className="mt-1.5 text-[11px] text-slate-400">
              Press Enter or click + to add.
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {formData.skills.map((skill, index) => (
                <span
                  key={`${skill}-${index}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-cyan-100 bg-cyan-50 px-2.5 py-1.5 text-[12px] font-semibold text-cyan-700"
                >
                  <FiCheck size={12} />
                  {skill}

                  <button
                    type="button"
                    onClick={() => removeSkill(index)}
                    className="rounded-full p-0.5 hover:bg-white"
                    aria-label={`Remove ${skill}`}
                  >
                    <FiX size={12} />
                  </button>
                </span>
              ))}

              {formData.skills.length === 0 && (
                <p className="w-full rounded-xl border border-dashed border-slate-200 px-3 py-4 text-center text-xs text-slate-400">
                  No skills added yet.
                </p>
              )}
            </div>
          </motion.section>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-4 xl:sticky xl:top-4 xl:self-start">
          <motion.section
            variants={itemVariants}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="border-b border-slate-100 p-4 sm:p-5">
              <SectionTitle
                icon={FiBriefcase}
                title="Job Status"
                description="Control visibility of this career opportunity."
              />

              <Toggle
                enabled={formData.is_active}
                onChange={(value) =>
                  setFormData((previous) => ({
                    ...previous,
                    is_active: value,
                  }))
                }
                label="Active Job"
                description="This job will be visible on the career page."
              />
            </div>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="mb-3 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
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
              <SummaryItem label="Job Title" value={formData.title} />

              <SummaryItem
                label="Department"
                value={
                  departments.find(
                    (department) =>
                      String(department.id) ===
                      String(formData.department_id)
                  )?.name
                }
              />

              <SummaryItem label="Location" value={formData.location} />
              <SummaryItem label="Experience" value={formData.experience} />
              <SummaryItem label="Employment" value={formData.employment_type} />
              <SummaryItem label="Vacancies" value={formData.vacancies} />

              <SummaryItem
                label="Application Deadline"
                value={formData.application_deadline}
              />

              <SummaryItem
                label="Responsibilities"
                value={formData.responsibilities.length}
              />

              <SummaryItem
                label="Skills"
                value={formData.skills.length}
              />
            </div>
          </motion.section>
        </div>
      </div>

      {/* FOOTER: separate from scrolling content */}
      <motion.div
        variants={itemVariants}
        className="mt-4 flex flex-col-reverse gap-3 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-4"
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
              className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 text-[12px] font-semibold text-slate-600 transition hover:bg-slate-50 disabled:opacity-50 sm:flex-none"
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
                Save Job
              </>
            )}
          </button>
        </div>
      </motion.div>
    </motion.form>
  );
}
