
// "use client";

// import React, { useState } from "react";
// import { FiUpload, FiX, FiSend, FiCheckCircle } from "react-icons/fi";
// import toast from "react-hot-toast";
// import ApiService from "../../src/services/Apiservices";


// const ApplyApplicationForm = ({
//   careerRoleId,
//   jobTitle = "",
//   onSuccess,
//   onClose,
// }) => {
//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     full_name: "",
//     phone: "",
//     email: "",
//     experience: "",
//     current_position: "",
//     additional_information: "",
//     resume: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files?.[0];

//     if (!file) return;

//     // PDF only
//     if (file.type !== "application/pdf") {
//       toast.error("Please upload PDF resume only.");
//       e.target.value = "";
//       return;
//     }

//     // 5 MB
//     if (file.size > 5 * 1024 * 1024) {
//       toast.error("Resume size must be less than 5 MB.");
//       e.target.value = "";
//       return;
//     }

//     setFormData((prev) => ({
//       ...prev,
//       resume: file,
//     }));
//   };

//   const removeResume = () => {
//     setFormData((prev) => ({
//       ...prev,
//       resume: null,
//     }));
//   };

//   const validateForm = () => {
//     if (!careerRoleId) {
//       toast.error("Career role is missing.");
//       return false;
//     }

//     if (!formData.full_name.trim()) {
//       toast.error("Please enter your full name.");
//       return false;
//     }

//     if (!formData.phone.trim()) {
//       toast.error("Please enter your phone number.");
//       return false;
//     }

//     if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
//       toast.error("Please enter a valid 10 digit phone number.");
//       return false;
//     }

//     if (!formData.email.trim()) {
//       toast.error("Please enter your email.");
//       return false;
//     }

//     if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
//       toast.error("Please enter a valid email address.");
//       return false;
//     }

//     if (!formData.resume) {
//       toast.error("Please upload your resume.");
//       return false;
//     }

//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     try {
//       setLoading(true);

//       const data = new FormData();

//       data.append("career_role_id", careerRoleId);
//       data.append("full_name", formData.full_name.trim());
//       data.append("phone", formData.phone.trim());
//       data.append("email", formData.email.trim());
//       data.append("experience", formData.experience.trim());
//       data.append(
//         "current_position",
//         formData.current_position.trim()
//       );
//       data.append(
//         "additional_information",
//         formData.additional_information.trim()
//       );

//       data.append("resume", formData.resume);

//       const response = await ApiService.post(
//         "career-applications",
//         data
//       );

//       console.log("Application response:", response);

//       toast.success(
//         response?.message ||
//           "Application submitted successfully!"
//       );

//       // Reset form
//       setFormData({
//         full_name: "",
//         phone: "",
//         email: "",
//         experience: "",
//         current_position: "",
//         additional_information: "",
//         resume: null,
//       });

//       onSuccess?.(response);
//       onClose?.();

//     } catch (error) {
//       console.error("Application submit error:", error);

//       toast.error(
//         error?.response?.data?.message ||
//           error?.message ||
//           "Failed to submit application."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

//       {/* Header */}
//       <div className="px-6 py-5 bg-[#073b48] text-white">

//         <div className="flex items-start justify-between gap-4">

//           <div>
//             <h2 className="text-xl font-bold">
//               Apply for Position
//             </h2>

//             {jobTitle && (
//               <p className="text-white/70 text-sm mt-1">
//                 {jobTitle}
//               </p>
//             )}
//           </div>

//           {onClose && (
//             <button
//               type="button"
//               onClick={onClose}
//               className="p-2 rounded-lg hover:bg-white/10"
//             >
//               <FiX size={20} />
//             </button>
//           )}

//         </div>
//       </div>

//       {/* Form */}
//       <form
//         onSubmit={handleSubmit}
//         className="p-6 space-y-6"
//       >

//         {/* Personal Details */}
//         <div>
//           <h3 className="font-semibold text-gray-800 mb-4">
//             Personal Information
//           </h3>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//             {/* Full Name */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1.5">
//                 Full Name <span className="text-red-500">*</span>
//               </label>

//               <input
//                 type="text"
//                 name="full_name"
//                 value={formData.full_name}
//                 onChange={handleChange}
//                 placeholder="Enter your full name"
//                 className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#073b48]/20 focus:border-[#073b48]"
//               />
//             </div>

//             {/* Phone */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1.5">
//                 Phone Number <span className="text-red-500">*</span>
//               </label>

//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 maxLength={10}
//                 placeholder="10 digit mobile number"
//                 className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#073b48]/20 focus:border-[#073b48]"
//               />
//             </div>

//             {/* Email */}
//             <div className="md:col-span-2">
//               <label className="block text-sm font-medium text-gray-700 mb-1.5">
//                 Email Address <span className="text-red-500">*</span>
//               </label>

//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="example@gmail.com"
//                 className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#073b48]/20 focus:border-[#073b48]"
//               />
//             </div>

//           </div>
//         </div>

//         {/* Professional Details */}
//         <div>
//           <h3 className="font-semibold text-gray-800 mb-4">
//             Professional Information
//           </h3>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//             {/* Experience */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1.5">
//                 Experience
//               </label>

//               <input
//                 type="text"
//                 name="experience"
//                 value={formData.experience}
//                 onChange={handleChange}
//                 placeholder="e.g. 3 Years"
//                 className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#073b48]/20 focus:border-[#073b48]"
//               />
//             </div>

//             {/* Current Position */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1.5">
//                 Current Position
//               </label>

//               <input
//                 type="text"
//                 name="current_position"
//                 value={formData.current_position}
//                 onChange={handleChange}
//                 placeholder="e.g. Staff Nurse"
//                 className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#073b48]/20 focus:border-[#073b48]"
//               />
//             </div>

//           </div>
//         </div>

//         {/* Additional Information */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1.5">
//             Additional Information
//           </label>

//           <textarea
//             name="additional_information"
//             value={formData.additional_information}
//             onChange={handleChange}
//             rows={4}
//             placeholder="Tell us anything else you would like us to know..."
//             className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none resize-none focus:ring-2 focus:ring-[#073b48]/20 focus:border-[#073b48]"
//           />
//         </div>

//         {/* Resume */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Resume <span className="text-red-500">*</span>
//           </label>

//           {!formData.resume ? (

//             <label className="block cursor-pointer">

//               <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center hover:border-[#073b48] hover:bg-gray-50 transition">

//                 <FiUpload
//                   size={28}
//                   className="mx-auto text-gray-400 mb-2"
//                 />

//                 <p className="font-medium text-gray-700">
//                   Upload your resume
//                 </p>

//                 <p className="text-xs text-gray-500 mt-1">
//                   PDF only • Maximum 5 MB
//                 </p>

//               </div>

//               <input
//                 type="file"
//                 accept=".pdf,application/pdf"
//                 onChange={handleFileChange}
//                 className="hidden"
//               />

//             </label>

//           ) : (

//             <div className="flex items-center justify-between gap-3 border border-green-200 bg-green-50 rounded-xl p-4">

//               <div className="flex items-center gap-3 min-w-0">

//                 <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-green-600">
//                   <FiCheckCircle size={20} />
//                 </div>

//                 <div className="min-w-0">
//                   <p className="font-medium text-gray-800 truncate">
//                     {formData.resume.name}
//                   </p>

//                   <p className="text-xs text-gray-500">
//                     {(
//                       formData.resume.size /
//                       1024 /
//                       1024
//                     ).toFixed(2)}{" "}
//                     MB
//                   </p>
//                 </div>

//               </div>

//               <button
//                 type="button"
//                 onClick={removeResume}
//                 className="p-2 text-red-500 hover:bg-red-100 rounded-lg"
//               >
//                 <FiX size={18} />
//               </button>

//             </div>

//           )}
//         </div>

//         {/* Submit */}
//         <div className="pt-2">

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#073b48] text-white font-semibold hover:bg-[#052f3a] disabled:opacity-60 disabled:cursor-not-allowed transition"
//           >

//             {loading ? (
//               <>
//                 <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                 Submitting...
//               </>
//             ) : (
//               <>
//                 <FiSend size={18} />
//                 Submit Application
//               </>
//             )}

//           </button>

//         </div>

//       </form>
//     </div>
//   );
// };

// export default ApplyApplicationForm;




"use client";

import React, { useState,useEffect } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiMail,
  FiPhone,
  FiUpload,
  FiUser,
  FiBriefcase,
  FiFileText,
  FiX,
  FiSend,
} from "react-icons/fi";
import toast from "react-hot-toast";
import ApiService from "../../src/services/Apiservices";

// const ApplyApplicationForm  = ({
//   open,
//   onClose,
//   careerRoleId,
//   jobTitle = "",
//   onSuccess,
// }) => {
//   const [step, setStep] = useState(1);
//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     full_name: "",
//     phone: "",
//     email: "",
//     experience: "",
//     current_position: "",
//     additional_information: "",
//     resume: null,
//   });

const ApplyApplicationForm = ({
  open,
  onClose,
  careerRoleId,
  jobTitle = "",
  onSuccess,
}) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    email: "",
    experience: "",
    current_position: "",
    additional_information: "",
    resume: null,
  });

  // ==========================================
  // ESCAPE KEY + BODY SCROLL LOCK
  // ==========================================

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;

    // Prevent background page scrolling
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape" && !loading) {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, loading, onClose]);

  // ==========================================
  // HANDLE INPUT
  // ==========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ==========================================
  // RESUME
  // ==========================================

  const handleResume = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      toast.error("Please upload PDF resume only.");
      e.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Resume must be less than 5 MB.");
      e.target.value = "";
      return;
    }

    setFormData((prev) => ({
      ...prev,
      resume: file,
    }));
  };

  const removeResume = () => {
    setFormData((prev) => ({
      ...prev,
      resume: null,
    }));
  };

  // ==========================================
  // VALIDATION
  // ==========================================

  const validateStep = () => {
    // STEP 1
    if (step === 1) {
      if (!formData.full_name.trim()) {
        toast.error("Please enter your full name.");
        return false;
      }

      if (!formData.phone.trim()) {
        toast.error("Please enter your phone number.");
        return false;
      }

      if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
        toast.error("Please enter a valid 10 digit phone number.");
        return false;
      }

      if (!formData.email.trim()) {
        toast.error("Please enter your email.");
        return false;
      }

      if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
        toast.error("Please enter a valid email.");
        return false;
      }
    }

    // STEP 2
    if (step === 2) {
      if (!formData.experience.trim()) {
        toast.error("Please enter your experience.");
        return false;
      }

      if (!formData.current_position.trim()) {
        toast.error("Please enter your current position.");
        return false;
      }
    }

    // STEP 3
    if (step === 3) {
      if (!formData.resume) {
        toast.error("Please upload your resume.");
        return false;
      }
    }

    return true;
  };

  // ==========================================
  // NEXT
  // ==========================================

  const handleNext = () => {
    if (!validateStep()) return;

    setStep((prev) => Math.min(prev + 1, 3));
  };

  // ==========================================
  // BACK
  // ==========================================

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  // ==========================================
  // SUBMIT
  // ==========================================

  const handleSubmit = async () => {
    if (!validateStep()) return;

    if (!careerRoleId) {
      toast.error("Career role not found.");
      return;
    }

    try {
      setLoading(true);

      const data = new FormData();

      data.append("career_role_id", careerRoleId);
      data.append("full_name", formData.full_name.trim());
      data.append("phone", formData.phone.trim());
      data.append("email", formData.email.trim());
      data.append("experience", formData.experience.trim());
      data.append(
        "current_position",
        formData.current_position.trim()
      );
      data.append(
        "additional_information",
        formData.additional_information.trim()
      );

      data.append("resume", formData.resume);

      const response = await ApiService.post(
        "career-applications",
        data
      );

      toast.success(
        response?.message ||
          "Application submitted successfully!"
      );

      // Reset
      setFormData({
        full_name: "",
        phone: "",
        email: "",
        experience: "",
        current_position: "",
        additional_information: "",
        resume: null,
      });

      setStep(1);

      onSuccess?.(response);

      onClose?.();

    } catch (error) {
      console.error(error);

      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to submit application."
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // IF CLOSED
  // ==========================================

  if (!open) return null;

  const steps = [
    {
      id: 1,
      title: "Personal",
      icon: FiUser,
    },
    {
      id: 2,
      title: "Professional",
      icon: FiBriefcase,
    },
    {
      id: 3,
      title: "Resume",
      icon: FiFileText,
    },
  ];

  return (
    <div className="fixed inset-0 z-[100]">

      {/* ======================================
          BACKDROP
      ====================================== */}

      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* ======================================
          DRAWER
      ====================================== */}

      <div className="absolute right-0 top-0 h-full w-full sm:max-w-xl bg-white shadow-2xl flex flex-col">

        {/* ====================================
            HEADER
        ==================================== */}

        <div className="bg-[#073b48] text-white px-5 sm:px-6 py-5">

          <div className="flex items-start justify-between">

            <div className="pr-4">

              <p className="text-xs uppercase tracking-wider text-white/60">
                Career Application
              </p>

              <h2 className="text-xl sm:text-2xl font-bold mt-1">
                Apply Now
              </h2>

              {jobTitle && (
                <p className="text-sm text-white/70 mt-1">
                  {jobTitle}
                </p>
              )}

            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-white/10 transition"
            >
              <FiX size={21} />
            </button>

          </div>

          {/* ==================================
              STEPPER
          ================================== */}

          <div className="flex items-center mt-6">

            {steps.map((item, index) => {

              const Icon = item.icon;

              const active = step === item.id;
              const completed = step > item.id;

              return (
                <React.Fragment key={item.id}>

                  <div className="flex items-center gap-2">

                    <div
                      className={`
                        w-9 h-9 rounded-full flex items-center justify-center
                        border transition
                        ${
                          active || completed
                            ? "bg-white text-[#073b48] border-white"
                            : "border-white/30 text-white/50"
                        }
                      `}
                    >
                      {completed ? (
                        <FiCheck size={17} />
                      ) : (
                        <Icon size={17} />
                      )}
                    </div>

                    <span
                      className={`
                        hidden sm:block text-xs font-medium
                        ${
                          active || completed
                            ? "text-white"
                            : "text-white/50"
                        }
                      `}
                    >
                      {item.title}
                    </span>

                  </div>

                  {index < steps.length - 1 && (
                    <div
                      className={`
                        flex-1 h-px mx-2 sm:mx-4
                        ${
                          step > item.id
                            ? "bg-white"
                            : "bg-white/20"
                        }
                      `}
                    />
                  )}

                </React.Fragment>
              );
            })}

          </div>

        </div>

        {/* ====================================
            BODY
        ==================================== */}

        <div className="flex-1 overflow-y-auto">

          <div className="p-5 sm:p-6">

            {/* ==================================
                STEP 1
            ================================== */}

            {step === 1 && (
              <div className="space-y-5">

                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Personal Information
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Tell us a little about yourself.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label className="label">
                    Full Name
                    <Required />
                  </label>

                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="input"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="label">
                    Phone Number
                    <Required />
                  </label>

                  <div className="relative">
                    <FiPhone className="field-icon" />

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      maxLength={10}
                      placeholder="10 digit mobile number"
                      className="input pl-10"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="label">
                    Email Address
                    <Required />
                  </label>

                  <div className="relative">
                    <FiMail className="field-icon" />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@gmail.com"
                      className="input pl-10"
                    />
                  </div>
                </div>

              </div>
            )}

            {/* ==================================
                STEP 2
            ================================== */}

            {step === 2 && (
              <div className="space-y-5">

                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Professional Information
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Share your professional background.
                  </p>
                </div>

                {/* Experience */}
                <div>
                  <label className="label">
                    Experience
                    <Required />
                  </label>

                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="e.g. 3 Years"
                    className="input"
                  />
                </div>

                {/* Current Position */}
                <div>
                  <label className="label">
                    Current Position
                    <Required />
                  </label>

                  <input
                    type="text"
                    name="current_position"
                    value={formData.current_position}
                    onChange={handleChange}
                    placeholder="e.g. Staff Nurse"
                    className="input"
                  />
                </div>

                {/* Additional */}
                <div>
                  <label className="label">
                    Additional Information
                  </label>

                  <textarea
                    name="additional_information"
                    value={formData.additional_information}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us anything else you would like us to know..."
                    className="input resize-none"
                  />
                </div>

              </div>
            )}

            {/* ==================================
                STEP 3
            ================================== */}

            {step === 3 && (
              <div className="space-y-5">

                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Resume & Submission
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Upload your latest resume before submitting.
                  </p>
                </div>

                {/* Summary */}
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">

                  <p className="text-xs uppercase tracking-wide text-gray-400">
                    Applying For
                  </p>

                  <p className="font-semibold text-gray-800 mt-1">
                    {jobTitle || "Selected Position"}
                  </p>

                </div>

                {/* Resume */}
                <div>

                  <label className="label">
                    Resume
                    <Required />
                  </label>

                  {!formData.resume ? (

                    <label className="block cursor-pointer">

                      <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-[#073b48] hover:bg-gray-50 transition">

                        <div className="w-14 h-14 mx-auto rounded-full bg-[#073b48]/10 text-[#073b48] flex items-center justify-center mb-3">

                          <FiUpload size={25} />

                        </div>

                        <p className="font-semibold text-gray-700">
                          Upload Resume
                        </p>

                        <p className="text-xs text-gray-500 mt-1">
                          PDF only • Maximum 5 MB
                        </p>

                      </div>

                      <input
                        type="file"
                        accept=".pdf,application/pdf"
                        onChange={handleResume}
                        className="hidden"
                      />

                    </label>

                  ) : (

                    <div className="flex items-center justify-between gap-3 p-4 rounded-2xl bg-green-50 border border-green-200">

                      <div className="flex items-center gap-3 min-w-0">

                        <div className="w-11 h-11 shrink-0 rounded-xl bg-white flex items-center justify-center text-green-600">
                          <FiFileText size={20} />
                        </div>

                        <div className="min-w-0">

                          <p className="font-medium text-gray-800 truncate">
                            {formData.resume.name}
                          </p>

                          <p className="text-xs text-gray-500">
                            {(
                              formData.resume.size /
                              1024 /
                              1024
                            ).toFixed(2)}{" "}
                            MB
                          </p>

                        </div>

                      </div>

                      <button
                        type="button"
                        onClick={removeResume}
                        className="p-2 rounded-lg text-red-500 hover:bg-red-100"
                      >
                        <FiX size={18} />
                      </button>

                    </div>

                  )}

                </div>

                {/* Information */}
                <div className="rounded-2xl bg-blue-50 border border-blue-100 p-4">

                  <p className="text-sm text-blue-800">
                    Please make sure your resume contains your latest
                    education, experience and contact information.
                  </p>

                </div>

              </div>
            )}

          </div>

        </div>

        {/* ====================================
            FOOTER
        ==================================== */}

        <div className="border-t border-gray-200 bg-white px-5 sm:px-6 py-4">

          <div className="flex items-center justify-between gap-3">

            {/* Back */}
            <button
              type="button"
              onClick={handleBack}
              disabled={step === 1 || loading}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <FiArrowLeft size={17} />
              Back
            </button>

            {/* Next / Submit */}
            {step < 3 ? (

              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#073b48] text-white font-semibold hover:bg-[#052f3a]"
              >
                Continue
                <FiArrowRight size={17} />
              </button>

            ) : (

              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#073b48] text-white font-semibold hover:bg-[#052f3a] disabled:opacity-60"
              >

                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <FiSend size={17} />
                    Submit Application
                  </>
                )}

              </button>

            )}

          </div>

        </div>

      </div>

      {/* ======================================
          LOCAL STYLES
      ====================================== */}

      <style jsx>{`
        .label {
          display: block;
          font-size: 0.875rem;
          font-weight: 500;
          color: #374151;
          margin-bottom: 0.375rem;
        }

        .input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #e5e7eb;
          border-radius: 0.75rem;
          outline: none;
          color: #1f2937;
          background: white;
          transition: all 0.2s;
        }

        .input:focus {
          border-color: #073b48;
          box-shadow: 0 0 0 3px rgba(7, 59, 72, 0.08);
        }

        .field-icon {
          position: absolute;
          left: 0.875rem;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
        }
      `}</style>
    </div>
  );
};

const Required = () => ( 
    <span className="text-red-500 ml-1">*</span> 
); 
export default ApplyApplicationForm

