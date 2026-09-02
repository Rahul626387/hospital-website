
// "use client";

// import React, { useState } from "react";
// import { Eye, EyeOff, LockKeyhole, Mail, ShieldCheck } from "lucide-react";

// const Loginpage = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
//       <div className="w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl shadow-slate-200/80 lg:grid lg:grid-cols-2">

//         {/* Left Side */}
//         <div className="relative hidden overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-10 text-white lg:flex lg:flex-col lg:justify-between">
          
//           {/* Background shapes */}
//           <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10" />
//           <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/10" />

//           <div className="relative z-10">
//             {/* Logo */}
//             <div className="flex items-center gap-3">
//               <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-lg">
//                 🏥
//               </div>

//               <div>
//                 <h2 className="text-xl font-bold">MetroPrime</h2>
//                 <p className="text-xs text-blue-100">
//                   Hospital Management System
//                 </p>
//               </div>
//             </div>

//             <div className="mt-20 max-w-md">
//               <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-blue-100">
//                 Welcome Back
//               </p>

//               <h1 className="text-4xl font-bold leading-tight">
//                 Smarter Healthcare.
//                 <br />
//                 Better Management.
//               </h1>

//               <p className="mt-5 text-sm leading-7 text-blue-100">
//                 Manage patients, doctors, departments, feedback and hospital
//                 operations from one secure platform.
//               </p>
//             </div>
//           </div>

//           {/* Bottom Card */}
//           <div className="relative z-10 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
//             <div className="flex items-center gap-3">
//               <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
//                 <ShieldCheck size={21} />
//               </div>

//               <div>
//                 <p className="text-sm font-semibold">
//                   Secure Healthcare Portal
//                 </p>
//                 <p className="text-xs text-blue-100">
//                   Your data is protected
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Side */}
//         <div className="flex items-center justify-center p-6 sm:p-10 lg:p-14">
//           <div className="w-full max-w-md">

//             {/* Mobile Logo */}
//             <div className="mb-8 flex items-center gap-3 lg:hidden">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl text-white shadow-lg shadow-blue-200">
//                 🏥
//               </div>

//               <div>
//                 <h2 className="font-bold text-slate-800">
//                   MetroPrime
//                 </h2>
//                 <p className="text-xs text-slate-400">
//                   Hospital Management
//                 </p>
//               </div>
//             </div>

//             {/* Heading */}
//             <div className="mb-8">
//               <p className="mb-2 text-sm font-semibold text-blue-600">
//                 ADMIN PORTAL
//               </p>

//               <h1 className="text-3xl font-bold tracking-tight text-slate-900">
//                 Welcome back 👋
//               </h1>

//               <p className="mt-2 text-sm text-slate-500">
//                 Sign in to continue to your dashboard.
//               </p>
//             </div>

//             <form className="space-y-5">

//               {/* Email */}
//               <div>
//                 <label className="mb-2 block text-sm font-semibold text-slate-700">
//                   Email Address
//                 </label>

//                 <div className="relative">
//                   <Mail
//                     size={19}
//                     className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
//                   />

//                   <input
//                     type="email"
//                     placeholder="admin@hospital.com"
//                     className="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
//                   />
//                 </div>
//               </div>

//               {/* Password */}
//               <div>
//                 <div className="mb-2 flex items-center justify-between">
//                   <label className="text-sm font-semibold text-slate-700">
//                     Password
//                   </label>

//                   <button
//                     type="button"
//                     className="text-xs font-semibold text-blue-600 hover:text-blue-700"
//                   >
//                     Forgot password?
//                   </button>
//                 </div>

//                 <div className="relative">
//                   <LockKeyhole
//                     size={19}
//                     className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
//                   />

//                   <input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Enter your password"
//                     className="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-12 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
//                   />

//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-600"
//                   >
//                     {showPassword ? (
//                       <EyeOff size={19} />
//                     ) : (
//                       <Eye size={19} />
//                     )}
//                   </button>
//                 </div>
//               </div>

//               {/* Remember */}
//               <div className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   id="remember"
//                   className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
//                 />

//                 <label
//                   htmlFor="remember"
//                   className="text-sm text-slate-500"
//                 >
//                   Remember me
//                 </label>
//               </div>

//               {/* Login Button */}
//               <button
//                 type="submit"
//                 className="group flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 hover:shadow-blue-300 active:scale-[0.99]"
//               >
//                 Sign In
//                 <span className="transition-transform group-hover:translate-x-1">
//                   →
//                 </span>
//               </button>
//             </form>

//             {/* Footer */}
//             <div className="mt-8 border-t border-slate-100 pt-6 text-center">
//               <p className="text-xs text-slate-400">
//                 © 2026 MetroPrime Hospital Management System
//               </p>

//               <p className="mt-1 text-xs text-slate-400">
//                 Secure · Reliable · Healthcare
//               </p>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Loginpage;


// "use client";

// import { useState } from "react";
// import {
//   FiMail,
//   FiLock,
//   FiEye,
//   FiEyeOff,
//   FiShield,
//   FiArrowRight,
//   FiActivity,
//   FiHeart,
//   FiPlus,
// } from "react-icons/fi";

// export default function LoginPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [remember, setRemember] = useState(false);

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log({
//       ...formData,
//       remember,
//     });
//   };

//   return (
//     <main className="min-h-screen bg-[#f5f9fc] flex items-center justify-center p-4 sm:p-6">

//       {/* Main Container */}
//       <div className="w-full max-w-6xl min-h-[680px] bg-white rounded-[30px] shadow-[0_25px_80px_rgba(15,23,42,0.12)] overflow-hidden grid lg:grid-cols-[1.05fr_0.95fr]">

//         {/* =====================================================
//             LEFT SIDE
//         ====================================================== */}
//         <section className="relative hidden lg:flex overflow-hidden bg-gradient-to-br from-[#087f8c] via-[#087f8c] to-[#075985] p-12 text-white">

//           {/* Decorative circles */}
//           <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-white/10" />

//           <div className="absolute -bottom-40 -right-20 w-96 h-96 rounded-full bg-white/10" />

//           <div className="absolute top-1/3 right-[-80px] w-52 h-52 rounded-full border-[35px] border-white/5" />

//           <div className="relative z-10 flex flex-col w-full">

//             {/* Logo */}
//             <div className="flex items-center gap-3">

//               <div className="relative w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#087f8c] shadow-lg">

//                 <FiHeart size={24} strokeWidth={2.5} />

//                 <span className="absolute -right-1 -top-1 w-5 h-5 bg-[#ef4444] rounded-full flex items-center justify-center">
//                   <FiPlus size={13} />
//                 </span>

//               </div>

//               <div>
//                 <h2 className="text-xl font-bold">
//                   MediCare
//                 </h2>

//                 <p className="text-xs text-white/70">
//                   Healthcare Management
//                 </p>
//               </div>

//             </div>

//             {/* Hero */}
//             <div className="flex-1 flex flex-col justify-center max-w-lg">

//               <div className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm text-white/90 mb-6">
//                 <FiActivity size={15} />
//                 Smart Healthcare Platform
//               </div>

//               <h1 className="text-5xl font-bold leading-[1.1] tracking-tight">
//                 Healthcare
//                 <br />
//                 <span className="text-cyan-200">
//                   made smarter.
//                 </span>
//               </h1>

//               <p className="mt-6 text-white/75 leading-7 max-w-md">
//                 A secure and intelligent platform designed to help
//                 healthcare teams manage patients, doctors, departments
//                 and hospital operations efficiently.
//               </p>

//               {/* Features */}
//               <div className="grid grid-cols-2 gap-4 mt-10">

//                 <div className="rounded-2xl bg-white/10 border border-white/10 p-4 backdrop-blur-sm">
//                   <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center mb-3">
//                     <FiShield size={18} />
//                   </div>

//                   <p className="font-semibold text-sm">
//                     Secure Access
//                   </p>

//                   <p className="text-xs text-white/60 mt-1">
//                     Protected healthcare data
//                   </p>
//                 </div>

//                 <div className="rounded-2xl bg-white/10 border border-white/10 p-4 backdrop-blur-sm">
//                   <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center mb-3">
//                     <FiActivity size={18} />
//                   </div>

//                   <p className="font-semibold text-sm">
//                     Real-time Care
//                   </p>

//                   <p className="text-xs text-white/60 mt-1">
//                     Connected hospital system
//                   </p>
//                 </div>

//               </div>

//             </div>

//             {/* Bottom */}
//             <div className="flex items-center justify-between text-xs text-white/50">
//               <span>Trusted Healthcare Technology</span>
//               <span>© 2026 MediCare</span>
//             </div>

//           </div>
//         </section>

//         {/* =====================================================
//             RIGHT SIDE
//         ====================================================== */}
//         <section className="flex items-center justify-center p-6 sm:p-10 lg:p-14">

//           <div className="w-full max-w-md">

//             {/* Mobile Logo */}
//             <div className="lg:hidden flex items-center gap-3 mb-10">

//               <div className="w-11 h-11 rounded-2xl bg-[#087f8c] text-white flex items-center justify-center">
//                 <FiHeart size={22} />
//               </div>

//               <div>
//                 <h2 className="font-bold text-slate-800">
//                   MediCare
//                 </h2>

//                 <p className="text-xs text-slate-400">
//                   Healthcare Management
//                 </p>
//               </div>

//             </div>

//             {/* Heading */}
//             <div className="mb-8">

//               <p className="text-sm font-semibold text-[#087f8c] mb-2">
//                 Welcome back
//               </p>

//               <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
//                 Sign in to your account
//               </h2>

//               <p className="text-slate-500 mt-3 text-sm leading-6">
//                 Enter your credentials to securely access your
//                 healthcare dashboard.
//               </p>

//             </div>

//             {/* Form */}
//             <form onSubmit={handleSubmit} className="space-y-5">

//               {/* Email */}
//               <div>

//                 <label className="block text-sm font-semibold text-slate-700 mb-2">
//                   Email address
//                 </label>

//                 <div className="relative">

//                   <FiMail
//                     size={18}
//                     className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
//                   />

//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="doctor@hospital.com"
//                     required
//                     className="w-full h-14 pl-11 pr-4 rounded-2xl border border-slate-200 bg-slate-50/70 text-slate-800 placeholder:text-slate-400 outline-none transition-all focus:bg-white focus:border-[#087f8c] focus:ring-4 focus:ring-[#087f8c]/10"
//                   />

//                 </div>

//               </div>

//               {/* Password */}
//               <div>

//                 <div className="flex items-center justify-between mb-2">

//                   <label className="text-sm font-semibold text-slate-700">
//                     Password
//                   </label>

//                   <button
//                     type="button"
//                     className="text-xs font-semibold text-[#087f8c] hover:text-[#075985]"
//                   >
//                     Forgot password?
//                   </button>

//                 </div>

//                 <div className="relative">

//                   <FiLock
//                     size={18}
//                     className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
//                   />

//                   <input
//                     type={showPassword ? "text" : "password"}
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     placeholder="Enter your password"
//                     required
//                     className="w-full h-14 pl-11 pr-12 rounded-2xl border border-slate-200 bg-slate-50/70 text-slate-800 placeholder:text-slate-400 outline-none transition-all focus:bg-white focus:border-[#087f8c] focus:ring-4 focus:ring-[#087f8c]/10"
//                   />

//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#087f8c] transition"
//                   >
//                     {showPassword ? (
//                       <FiEyeOff size={19} />
//                     ) : (
//                       <FiEye size={19} />
//                     )}
//                   </button>

//                 </div>

//               </div>

//               {/* Remember */}
//               <div className="flex items-center justify-between pt-1">

//                 <label className="flex items-center gap-2.5 cursor-pointer select-none">

//                   <input
//                     type="checkbox"
//                     checked={remember}
//                     onChange={(e) => setRemember(e.target.checked)}
//                     className="w-4 h-4 rounded accent-[#087f8c]"
//                   />

//                   <span className="text-sm text-slate-500">
//                     Remember me
//                   </span>

//                 </label>

//                 <div className="flex items-center gap-1.5 text-xs text-slate-400">
//                   <FiShield size={14} />
//                   Secure login
//                 </div>

//               </div>

//               {/* Login Button */}
//               <button
//                 type="submit"
//                 className="group w-full h-14 rounded-2xl bg-[#087f8c] hover:bg-[#076b76] text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[#087f8c]/20 transition-all duration-200 hover:shadow-xl hover:shadow-[#087f8c]/25"
//               >
//                 Sign in

//                 <FiArrowRight
//                   size={19}
//                   className="group-hover:translate-x-1 transition-transform"
//                 />
//               </button>

//             </form>

//             {/* Divider */}
//             <div className="flex items-center gap-4 my-7">

//               <div className="h-px flex-1 bg-slate-200" />

//               <span className="text-xs text-slate-400">
//                 Authorized personnel only
//               </span>

//               <div className="h-px flex-1 bg-slate-200" />

//             </div>

//             {/* Security Notice */}
//             <div className="flex gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">

//               <div className="shrink-0 w-9 h-9 rounded-xl bg-[#087f8c]/10 text-[#087f8c] flex items-center justify-center">
//                 <FiShield size={17} />
//               </div>

//               <div>
//                 <p className="text-xs font-semibold text-slate-700">
//                   Your privacy matters
//                 </p>

//                 <p className="text-[11px] text-slate-400 mt-1 leading-5">
//                   Your login information and healthcare data are
//                   protected using secure authentication.
//                 </p>
//               </div>

//             </div>

//           </div>

//         </section>

//       </div>

//     </main>
//   );
// }

// "use client";

// import { useState } from "react";
// import {
//   FiMail,
//   FiLock,
//   FiEye,
//   FiEyeOff,
//   FiShield,
//   FiArrowRight,
//   FiHeart,
//   FiPlus,
// } from "react-icons/fi";

// export default function LoginPage() {
//   const [showPassword, setShowPassword] = useState(false);

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log(formData);
//   };

//   return (
//     <main className="h-screen w-full overflow-hidden bg-slate-50 flex items-center justify-center p-4">

//       {/* LOGIN CARD */}
//       <div className="w-full max-w-4xl h-[560px] bg-white rounded-3xl shadow-[0_20px_60px_rgba(15,23,42,0.12)] overflow-hidden grid lg:grid-cols-2">

//         {/* =================================
//             LEFT SIDE
//         ================================= */}
//         <div className="hidden lg:flex relative overflow-hidden bg-gradient-to-br from-[#087f8c] to-[#075985] p-9 text-white">

//           {/* Background circles */}
//           <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-white/10" />

//           <div className="absolute -bottom-28 -right-20 w-72 h-72 rounded-full bg-white/10" />

//           <div className="relative z-10 flex flex-col w-full">

//             {/* Logo */}
//             <div className="flex items-center gap-3">

//               <div className="relative w-11 h-11 rounded-xl bg-white flex items-center justify-center text-[#087f8c]">

//                 <FiHeart size={22} />

//                 <span className="absolute -right-1 -top-1 w-4 h-4 rounded-full bg-red-500 flex items-center justify-center">
//                   <FiPlus size={10} />
//                 </span>

//               </div>

//               <div>
//                 <h2 className="font-bold text-lg">
//                   MediCare
//                 </h2>

//                 <p className="text-[10px] text-white/60">
//                   Healthcare Management
//                 </p>
//               </div>

//             </div>

//             {/* Center Content */}
//             <div className="flex-1 flex flex-col justify-center">

//               <p className="text-xs font-semibold text-cyan-200 mb-3">
//                 SMART HEALTHCARE
//               </p>

//               <h1 className="text-4xl font-bold leading-tight">
//                 Better care.
//                 <br />
//                 <span className="text-cyan-200">
//                   Better health.
//                 </span>
//               </h1>

//               <p className="text-sm text-white/70 mt-4 leading-6 max-w-sm">
//                 Manage patients, doctors and hospital operations
//                 from one secure platform.
//               </p>

//               {/* Small Stats */}
//               <div className="flex gap-3 mt-7">

//                 <div className="px-4 py-3 rounded-xl bg-white/10 border border-white/10">
//                   <p className="text-lg font-bold">24/7</p>
//                   <p className="text-[10px] text-white/60">
//                     Availability
//                   </p>
//                 </div>

//                 <div className="px-4 py-3 rounded-xl bg-white/10 border border-white/10">
//                   <p className="text-lg font-bold">100%</p>
//                   <p className="text-[10px] text-white/60">
//                     Secure
//                   </p>
//                 </div>

//               </div>

//             </div>

//             <p className="text-[10px] text-white/40">
//               © 2026 MediCare Healthcare Management
//             </p>

//           </div>
//         </div>

//         {/* =================================
//             RIGHT SIDE
//         ================================= */}
//         <div className="flex items-center justify-center px-7 sm:px-10">

//           <div className="w-full max-w-sm">

//             {/* Mobile Logo */}
//             <div className="lg:hidden flex items-center gap-2.5 mb-6">

//               <div className="w-10 h-10 rounded-xl bg-[#087f8c] text-white flex items-center justify-center">
//                 <FiHeart size={20} />
//               </div>

//               <div>
//                 <h2 className="font-bold text-slate-800">
//                   MediCare
//                 </h2>

//                 <p className="text-[10px] text-slate-400">
//                   Healthcare Management
//                 </p>
//               </div>

//             </div>

//             {/* Heading */}
//             <div className="mb-6">

//               <p className="text-xs font-semibold text-[#087f8c] mb-1.5">
//                 WELCOME BACK
//               </p>

//               <h2 className="text-2xl font-bold text-slate-900">
//                 Sign in to your account
//               </h2>

//               <p className="text-xs text-slate-400 mt-2">
//                 Enter your credentials to continue.
//               </p>

//             </div>

//             {/* Form */}
//             <form onSubmit={handleSubmit} className="space-y-4">

//               {/* Email */}
//               <div>

//                 <label className="block text-xs font-semibold text-slate-600 mb-1.5">
//                   Email address
//                 </label>

//                 <div className="relative">

//                   <FiMail
//                     size={17}
//                     className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
//                   />

//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="doctor@hospital.com"
//                     required
//                     className="w-full h-12 pl-10 pr-3 rounded-xl border border-slate-200 bg-slate-50 text-sm outline-none transition focus:bg-white focus:border-[#087f8c] focus:ring-4 focus:ring-[#087f8c]/10"
//                   />

//                 </div>

//               </div>

//               {/* Password */}
//               <div>

//                 <div className="flex justify-between mb-1.5">

//                   <label className="text-xs font-semibold text-slate-600">
//                     Password
//                   </label>

//                   <button
//                     type="button"
//                     className="text-[11px] font-semibold text-[#087f8c]"
//                   >
//                     Forgot password?
//                   </button>

//                 </div>

//                 <div className="relative">

//                   <FiLock
//                     size={17}
//                     className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
//                   />

//                   <input
//                     type={showPassword ? "text" : "password"}
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     placeholder="Enter your password"
//                     required
//                     className="w-full h-12 pl-10 pr-11 rounded-xl border border-slate-200 bg-slate-50 text-sm outline-none transition focus:bg-white focus:border-[#087f8c] focus:ring-4 focus:ring-[#087f8c]/10"
//                   />

//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#087f8c]"
//                   >
//                     {showPassword ? (
//                       <FiEyeOff size={17} />
//                     ) : (
//                       <FiEye size={17} />
//                     )}
//                   </button>

//                 </div>

//               </div>

//               {/* Remember */}
//               <div className="flex items-center justify-between">

//                 <label className="flex items-center gap-2 text-xs text-slate-500 cursor-pointer">

//                   <input
//                     type="checkbox"
//                     className="w-3.5 h-3.5 accent-[#087f8c]"
//                   />

//                   Remember me

//                 </label>

//                 <div className="flex items-center gap-1 text-[10px] text-slate-400">
//                   <FiShield size={12} />
//                   Secure
//                 </div>

//               </div>

//               {/* Button */}
//               <button
//                 type="submit"
//                 className="group w-full h-12 rounded-xl bg-[#087f8c] hover:bg-[#076b76] text-white text-sm font-semibold flex items-center justify-center gap-2 transition shadow-lg shadow-[#087f8c]/20"
//               >
//                 Sign in

//                 <FiArrowRight
//                   size={17}
//                   className="group-hover:translate-x-1 transition"
//                 />
//               </button>

//             </form>

//             {/* Security */}
//             <div className="mt-6 flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">

//               <div className="w-8 h-8 shrink-0 rounded-lg bg-[#087f8c]/10 text-[#087f8c] flex items-center justify-center">
//                 <FiShield size={15} />
//               </div>

//               <div>
//                 <p className="text-[10px] font-semibold text-slate-600">
//                   Protected & Secure
//                 </p>

//                 <p className="text-[9px] text-slate-400 mt-0.5">
//                   Your healthcare data is securely protected.
//                 </p>
//               </div>

//             </div>

//             <p className="text-center text-[9px] text-slate-300 mt-5">
//               Authorized personnel only
//             </p>

//           </div>
//         </div>

//       </div>
//     </main>
//   );
// }



"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiShield,
  FiArrowRight,
  FiHeart,
  FiPlus,
  FiActivity,
} from "react-icons/fi";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.96,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  };

  return (
    // <main className="h-screen w-full overflow-hidden bg-[#f4f8fb] flex items-center justify-center p-4">

    <main
        className="h-screen w-full overflow-hidden flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat"
        style={{
            backgroundImage: "url('/assets/images/HospitalBuilding.png')",
        }}
        >
      {/* ============================================
          BACKGROUND DECORATION
      ============================================ */}

      <motion.div
        animate={{
          y: [0, -18, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed top-10 left-10 w-32 h-32 rounded-full bg-[#087f8c]/5 blur-2xl"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed bottom-10 right-10 w-40 h-40 rounded-full bg-blue-500/5 blur-3xl"
      />

      {/* ============================================
          MAIN CARD
      ============================================ */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-4xl h-[560px] bg-white rounded-3xl shadow-[0_20px_60px_rgba(15,23,42,0.12)] overflow-hidden grid lg:grid-cols-2"
      >

        {/* ============================================
            LEFT BRANDING
        ============================================ */}

        <section className="relative hidden lg:flex overflow-hidden bg-gradient-to-br from-[#006f7a] via-[#087f8c] to-[#075985] p-9 text-white">

          {/* Floating Circle */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-28 -left-28 w-72 h-72 rounded-full bg-white/10"
          />

          <motion.div
            animate={{
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-32 -right-20 w-80 h-80 rounded-full bg-white/10"
          />

          <div className="relative z-10 flex flex-col w-full">

            {/* LOGO */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3"
            >

              <motion.div
                whileHover={{
                  rotate: -5,
                  scale: 1.05,
                }}
                className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm overflow-hidden"
              >

                {/* Actual logo ke liye */}
                {/*
                <Image
                  src="/images/baderia-logo.png"
                  alt="Baderia Metroprime"
                  width={42}
                  height={42}
                  className="object-contain"
                />
                */}

                <div className="relative text-[#087f8c]">
                  <FiHeart size={25} />

                  <span className="absolute -right-1 -top-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white">
                    <FiPlus size={9} />
                  </span>
                </div>

              </motion.div>

              <div>

                <h2 className="text-[17px] font-bold">
                  Baderia Metroprime
                </h2>

                <p className="text-[10px] text-white/70">
                  Multi Speciality Hospital
                </p>

              </div>

            </motion.div>

            {/* CENTER CONTENT */}
            <motion.div
              variants={itemVariants}
              className="flex-1 flex flex-col justify-center"
            >

              <div className="flex items-center gap-2 mb-3">

                <FiActivity
                  size={14}
                  className="text-cyan-200"
                />

                <span className="text-[10px] font-semibold tracking-widest text-cyan-200">
                  SMART HEALTHCARE
                </span>

              </div>

              <h1 className="text-[38px] font-bold leading-[1.1]">
                Better care.
                <br />

                <span className="text-cyan-200">
                  Better health.
                </span>
              </h1>

              <p className="text-sm text-white/70 mt-4 leading-6 max-w-sm">
                Advanced healthcare management designed to
                connect patients, doctors and hospital teams
                in one secure platform.
              </p>

              {/* STATS */}
              <div className="flex gap-3 mt-7">

                {[
                  ["24/7", "Healthcare"],
                  ["100%", "Secure"],
                  ["Smart", "Management"],
                ].map(([number, label], index) => (
                  <motion.div
                    key={label}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.6 + index * 0.1,
                      duration: 0.4,
                    }}
                    whileHover={{
                      y: -3,
                    }}
                    className="px-4 py-3 rounded-xl bg-white/10 border border-white/10"
                  >

                    <p className="text-base font-bold">
                      {number}
                    </p>

                    <p className="text-[9px] text-white/60">
                      {label}
                    </p>

                  </motion.div>
                ))}

              </div>

            </motion.div>

            <p className="text-[9px] text-white/40">
              © 2026 Baderia Metroprime Multi Speciality Hospital
            </p>

          </div>
        </section>

        {/* ============================================
            RIGHT LOGIN
        ============================================ */}

        <section className="flex items-center justify-center px-7 sm:px-10">

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.25,
              duration: 0.55,
              ease: "easeOut",
            }}
            className="w-full max-w-sm"
          >

            {/* MOBILE LOGO */}

            <motion.div
              variants={itemVariants}
              className="lg:hidden flex items-center gap-3 mb-7"
            >

              <div className="w-11 h-11 rounded-xl bg-[#087f8c] text-white flex items-center justify-center">
                <FiHeart size={21} />
              </div>

              <div>

                <h2 className="font-bold text-slate-800">
                  Baderia Metroprime
                </h2>

                <p className="text-[10px] text-slate-400">
                  Multi Speciality Hospital
                </p>

              </div>

            </motion.div>

            {/* HEADING */}

            <motion.div
              variants={itemVariants}
              className="mb-6"
            >

              <p className="text-xs font-semibold text-[#087f8c] mb-1.5">
                STAFF PORTAL
              </p>

              <h2 className="text-2xl font-bold text-slate-900">
                Welcome back
              </h2>

              <p className="text-xs text-slate-400 mt-2">
                Sign in to access your hospital dashboard.
              </p>

            </motion.div>

            {/* FORM */}

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              {/* EMAIL */}

              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  delay: 0.35,
                }}
              >

                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  Email address
                </label>

                <div className="relative">

                  <FiMail
                    size={17}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full h-12 pl-10 pr-3 rounded-xl border border-slate-200 bg-slate-50 text-sm outline-none transition-all duration-200 focus:bg-white focus:border-[#087f8c] focus:ring-4 focus:ring-[#087f8c]/10"
                  />

                </div>

              </motion.div>

              {/* PASSWORD */}

              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  delay: 0.45,
                }}
              >

                <div className="flex items-center justify-between mb-1.5">

                  <label className="text-xs font-semibold text-slate-600">
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-[11px] font-semibold text-[#087f8c] hover:text-[#075985]"
                  >
                    Forgot password?
                  </button>

                </div>

                <div className="relative">

                  <FiLock
                    size={17}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    className="w-full h-12 pl-10 pr-11 rounded-xl border border-slate-200 bg-slate-50 text-sm outline-none transition-all duration-200 focus:bg-white focus:border-[#087f8c] focus:ring-4 focus:ring-[#087f8c]/10"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#087f8c]"
                  >
                    {showPassword ? (
                      <FiEyeOff size={17} />
                    ) : (
                      <FiEye size={17} />
                    )}
                  </button>

                </div>

              </motion.div>

              {/* REMEMBER */}

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.55,
                }}
                className="flex items-center justify-between"
              >

                <label className="flex items-center gap-2 text-xs text-slate-500 cursor-pointer">

                  <input
                    type="checkbox"
                    className="w-3.5 h-3.5 accent-[#087f8c]"
                  />

                  Remember me

                </label>

                <div className="flex items-center gap-1 text-[10px] text-slate-400">
                  <FiShield size={12} />
                  Secure login
                </div>

              </motion.div>

              {/* LOGIN BUTTON */}

              <motion.button
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.65,
                }}
                whileHover={{
                  scale: 1.015,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                type="submit"
                className="group w-full h-12 rounded-xl bg-[#087f8c] hover:bg-[#076b76] text-white text-sm font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#087f8c]/20"
              >

                Sign in

                <FiArrowRight
                  size={17}
                  className="group-hover:translate-x-1 transition-transform"
                />

              </motion.button>

            </form>

            {/* SECURITY CARD */}

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
              }}
              className="mt-6 flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100"
            >

              <div className="w-8 h-8 shrink-0 rounded-lg bg-[#087f8c]/10 text-[#087f8c] flex items-center justify-center">
                <FiShield size={15} />
              </div>

              <div>

                <p className="text-[10px] font-semibold text-slate-600">
                  Secure Hospital Portal
                </p>

                <p className="text-[9px] text-slate-400 mt-0.5">
                  Authorized hospital staff only.
                </p>

              </div>

            </motion.div>

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.9,
              }}
              className="text-center text-[9px] text-slate-300 mt-5"
            >
              Baderia Metroprime Multi Speciality Hospital
            </motion.p>

          </motion.div>

        </section>

      </motion.div>
    </main>
  );
}




