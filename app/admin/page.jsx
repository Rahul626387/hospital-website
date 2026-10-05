// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Activity,
//   ArrowDownRight,
//   ArrowUpRight,
//   CalendarDays,
//   ChevronRight,
//   Clock3,
//   FileText,
//   HeartPulse,
//   Hospital,
//   Mail,
//   MoreHorizontal,
//   Stethoscope,
//   UserRound,
//   Users,
// } from "lucide-react";
// import {
//   Area,
//   AreaChart,
//   CartesianGrid,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";

// const appointmentData = [
//   { name: "Mon", appointments: 38 },
//   { name: "Tue", appointments: 52 },
//   { name: "Wed", appointments: 45 },
//   { name: "Thu", appointments: 68 },
//   { name: "Fri", appointments: 58 },
//   { name: "Sat", appointments: 76 },
//   { name: "Sun", appointments: 64 },
// ];

// const stats = [
//   {
//     title: "Total Doctors",
//     value: "128",
//     change: "+8.2%",
//     text: "vs last month",
//     icon: Stethoscope,
//     positive: true,
//   },
//   {
//     title: "Appointments",
//     value: "42",
//     change: "+12.5%",
//     text: "vs yesterday",
//     icon: CalendarDays,
//     positive: true,
//   },
//   {
//     title: "Total Patients",
//     value: "1,284",
//     change: "+6.4%",
//     text: "vs last month",
//     icon: Users,
//     positive: true,
//   },
//   {
//     title: "New Enquiries",
//     value: "18",
//     change: "-3.2%",
//     text: "vs yesterday",
//     icon: Mail,
//     positive: false,
//   },
// ];

// const todayAppointments = [
//   {
//     time: "10:00 AM",
//     patient: "Rahul Sharma",
//     doctor: "Dr. Ankit Sharma",
//     department: "Cardiology",
//     type: "Consultation",
//     status: "Confirmed",
//   },
//   {
//     time: "11:30 AM",
//     patient: "Priya Verma",
//     doctor: "Dr. Neha Verma",
//     department: "Neurology",
//     type: "Follow-up",
//     status: "Pending",
//   },
//   {
//     time: "01:00 PM",
//     patient: "Amit Singh",
//     doctor: "Dr. Raj Singh",
//     department: "Orthopedics",
//     type: "Consultation",
//     status: "Confirmed",
//   },
//   {
//     time: "03:30 PM",
//     patient: "Sneha Gupta",
//     doctor: "Dr. Pooja Gupta",
//     department: "Pediatrics",
//     type: "Check-up",
//     status: "Confirmed",
//   },
// ];

// const departments = [
//   {
//     name: "Cardiology",
//     appointments: 184,
//     percentage: 34,
//   },
//   {
//     name: "Orthopedics",
//     appointments: 136,
//     percentage: 25,
//   },
//   {
//     name: "Neurology",
//     appointments: 97,
//     percentage: 18,
//   },
//   {
//     name: "Pediatrics",
//     appointments: 72,
//     percentage: 13,
//   },
// ];

// const enquiries = [
//   {
//     name: "Rahul Nath",
//     subject: "Appointment enquiry",
//     time: "10 min ago",
//     status: "New",
//   },
//   {
//     name: "Amit Kumar",
//     subject: "Emergency services",
//     time: "35 min ago",
//     status: "Pending",
//   },
//   {
//     name: "Priya Singh",
//     subject: "Doctor availability",
//     time: "1 hour ago",
//     status: "Resolved",
//   },
//   {
//     name: "Neha Sharma",
//     subject: "Health package",
//     time: "2 hours ago",
//     status: "New",
//   },
// ];

// const containerVariants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.06,
//     },
//   },
// };

// const itemVariants = {
//   hidden: {
//     opacity: 0,
//     y: 18,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.45,
//       ease: "easeOut",
//     },
//   },
// };

// const Dashboardpage = () => {
//   return (
//     <div className="min-h-screen bg-[#f5f8fb] text-slate-800">
//       <main className="mx-auto max-w-[1700px] p-4 sm:p-5 lg:p-7">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="mb-7 flex flex-col justify-between gap-5 lg:flex-row lg:items-center"
//         >
//           <div>
//             <div className="mb-1 flex items-center gap-2 text-sm font-medium text-[#063b5c]">
//               <Hospital size={16} />
//               <span>Hospital Administration</span>
//             </div>

//             <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
//               Welcome back, Admin
//             </h1>

//             <p className="mt-1 text-sm text-slate-500">
//               Here&apos;s what&apos;s happening in your hospital today.
//             </p>
//           </div>

//           <div className="flex items-center gap-3">
//             <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-[#063b5c]/20 hover:text-[#063b5c]">
//               <Activity size={19} />

//               <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
//             </button>

//             <button className="flex h-11 items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 shadow-sm transition hover:border-[#063b5c]/20">
//               <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#063b5c] text-sm font-bold text-white">
//                 A
//               </div>

//               <div className="hidden text-left sm:block">
//                 <p className="text-sm font-semibold text-slate-800">
//                   Admin
//                 </p>
//                 <p className="text-[11px] text-slate-400">
//                   Administrator
//                 </p>
//               </div>
//             </button>
//           </div>
//         </motion.div>

//         {/* Stats */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="show"
//           className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
//         >
//           {stats.map((stat) => {
//             const Icon = stat.icon;

//             return (
//               <motion.div
//                 key={stat.title}
//                 variants={itemVariants}
//                 whileHover={{ y: -4 }}
//                 className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-shadow hover:shadow-[0_15px_40px_rgba(15,23,42,0.08)]"
//               >
//                 <div className="flex items-start justify-between">
//                   <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#063b5c]/10 text-[#063b5c] transition group-hover:bg-[#063b5c] group-hover:text-white">
//                     <Icon size={22} />
//                   </div>

//                   <button className="text-slate-300 transition hover:text-slate-600">
//                     <MoreHorizontal size={20} />
//                   </button>
//                 </div>

//                 <div className="mt-5">
//                   <p className="text-sm font-medium text-slate-500">
//                     {stat.title}
//                   </p>

//                   <div className="mt-1 flex items-end justify-between gap-2">
//                     <h2 className="text-2xl font-bold tracking-tight text-slate-900">
//                       {stat.value}
//                     </h2>

//                     <span
//                       className={`mb-1 inline-flex items-center gap-0.5 text-xs font-semibold ${
//                         stat.positive ? "text-emerald-600" : "text-red-500"
//                       }`}
//                     >
//                       {stat.positive ? (
//                         <ArrowUpRight size={14} />
//                       ) : (
//                         <ArrowDownRight size={14} />
//                       )}

//                       {stat.change}
//                     </span>
//                   </div>

//                   <p className="mt-1 text-xs text-slate-400">
//                     {stat.text}
//                   </p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         {/* Main Grid */}
//         <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-3">
//           {/* Appointment Chart */}
//           <motion.div
//             variants={itemVariants}
//             initial="hidden"
//             animate="show"
//             className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.04)] xl:col-span-2"
//           >
//             <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
//               <div>
//                 <div className="flex items-center gap-2">
//                   <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#063b5c]/10 text-[#063b5c]">
//                     <CalendarDays size={18} />
//                   </div>

//                   <div>
//                     <h3 className="font-semibold text-slate-900">
//                       Appointment Analytics
//                     </h3>

//                     <p className="text-xs text-slate-400">
//                       Weekly appointment overview
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <select className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600 outline-none focus:border-[#063b5c]">
//                 <option>This Week</option>
//                 <option>This Month</option>
//                 <option>Last 6 Months</option>
//               </select>
//             </div>

//             <div className="h-[290px] w-full">
//               <ResponsiveContainer width="100%" height="100%">
//                 <AreaChart
//                   data={appointmentData}
//                   margin={{
//                     top: 10,
//                     right: 5,
//                     left: -20,
//                     bottom: 0,
//                   }}
//                 >
//                   <defs>
//                     <linearGradient
//                       id="appointmentGradient"
//                       x1="0"
//                       y1="0"
//                       x2="0"
//                       y2="1"
//                     >
//                       <stop
//                         offset="0%"
//                         stopColor="#063b5c"
//                         stopOpacity={0.22}
//                       />
//                       <stop
//                         offset="100%"
//                         stopColor="#063b5c"
//                         stopOpacity={0.01}
//                       />
//                     </linearGradient>
//                   </defs>

//                   <CartesianGrid
//                     strokeDasharray="4 4"
//                     vertical={false}
//                     stroke="#e9eef3"
//                   />

//                   <XAxis
//                     dataKey="name"
//                     axisLine={false}
//                     tickLine={false}
//                     tick={{
//                       fill: "#94a3b8",
//                       fontSize: 12,
//                     }}
//                   />

//                   <YAxis
//                     axisLine={false}
//                     tickLine={false}
//                     tick={{
//                       fill: "#94a3b8",
//                       fontSize: 12,
//                     }}
//                   />

//                   <Tooltip
//                     contentStyle={{
//                       borderRadius: "12px",
//                       border: "1px solid #e2e8f0",
//                       boxShadow: "0 10px 30px rgba(15,23,42,0.08)",
//                     }}
//                     cursor={{
//                       stroke: "#cbd5e1",
//                       strokeDasharray: "4 4",
//                     }}
//                   />

//                   <Area
//                     type="monotone"
//                     dataKey="appointments"
//                     stroke="#063b5c"
//                     strokeWidth={3}
//                     fill="url(#appointmentGradient)"
//                   />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>
//           </motion.div>

//           {/* Department Statistics */}
//           <motion.div
//             variants={itemVariants}
//             initial="hidden"
//             animate="show"
//             className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.04)]"
//           >
//             <div className="flex items-center justify-between">
//               <div>
//                 <h3 className="font-semibold text-slate-900">
//                   Department Statistics
//                 </h3>

//                 <p className="mt-1 text-xs text-slate-400">
//                   Appointments by department
//                 </p>
//               </div>

//               <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#063b5c]/10 text-[#063b5c]">
//                 <HeartPulse size={18} />
//               </div>
//             </div>

//             <div className="mt-7 space-y-6">
//               {departments.map((department) => (
//                 <div key={department.name}>
//                   <div className="mb-2 flex items-center justify-between">
//                     <span className="text-sm font-medium text-slate-700">
//                       {department.name}
//                     </span>

//                     <span className="text-xs font-semibold text-slate-500">
//                       {department.percentage}%
//                     </span>
//                   </div>

//                   <div className="h-2 overflow-hidden rounded-full bg-slate-100">
//                     <motion.div
//                       initial={{ width: 0 }}
//                       animate={{
//                         width: `${department.percentage}%`,
//                       }}
//                       transition={{
//                         duration: 0.8,
//                         delay: 0.2,
//                       }}
//                       className="h-full rounded-full bg-[#063b5c]"
//                     />
//                   </div>

//                   <p className="mt-1.5 text-[11px] text-slate-400">
//                     {department.appointments} appointments
//                   </p>
//                 </div>
//               ))}
//             </div>

//             <button className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 py-2.5 text-xs font-semibold text-[#063b5c] transition hover:bg-[#063b5c] hover:text-white">
//               View All Departments
//               <ChevronRight size={15} />
//             </button>
//           </motion.div>
//         </div>

//         {/* Bottom Grid */}
//         <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-3">
//           {/* Today's Appointments */}
//           <motion.div
//             variants={itemVariants}
//             initial="hidden"
//             animate="show"
//             className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)] xl:col-span-2"
//           >
//             <div className="flex items-center justify-between border-b border-slate-100 p-5">
//               <div>
//                 <div className="flex items-center gap-2">
//                   <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#063b5c]/10 text-[#063b5c]">
//                     <Clock3 size={18} />
//                   </div>

//                   <div>
//                     <h3 className="font-semibold text-slate-900">
//                       Today&apos;s Appointments
//                     </h3>

//                     <p className="text-xs text-slate-400">
//                       {todayAppointments.length} appointments scheduled
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <button className="hidden items-center gap-1 text-xs font-semibold text-[#063b5c] sm:flex">
//                 View All
//                 <ChevronRight size={15} />
//               </button>
//             </div>

//             {/* Desktop table */}
//             <div className="hidden overflow-x-auto md:block">
//               <table className="w-full">
//                 <thead>
//                   <tr className="border-b border-slate-100 bg-slate-50/60">
//                     <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-400">
//                       Time
//                     </th>
//                     <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-400">
//                       Patient
//                     </th>
//                     <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-400">
//                       Doctor
//                     </th>
//                     <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-400">
//                       Department
//                     </th>
//                     <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-400">
//                       Status
//                     </th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {todayAppointments.map((appointment) => (
//                     <tr
//                       key={`${appointment.time}-${appointment.patient}`}
//                       className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50"
//                     >
//                       <td className="px-5 py-4">
//                         <span className="text-xs font-semibold text-[#063b5c]">
//                           {appointment.time}
//                         </span>
//                       </td>

//                       <td className="px-5 py-4">
//                         <div className="flex items-center gap-3">
//                           <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
//                             {appointment.patient
//                               .split(" ")
//                               .map((n) => n[0])
//                               .join("")
//                               .slice(0, 2)}
//                           </div>

//                           <div>
//                             <p className="text-sm font-semibold text-slate-700">
//                               {appointment.patient}
//                             </p>
//                             <p className="text-[11px] text-slate-400">
//                               {appointment.type}
//                             </p>
//                           </div>
//                         </div>
//                       </td>

//                       <td className="px-5 py-4 text-xs font-medium text-slate-600">
//                         {appointment.doctor}
//                       </td>

//                       <td className="px-5 py-4 text-xs text-slate-500">
//                         {appointment.department}
//                       </td>

//                       <td className="px-5 py-4">
//                         <StatusBadge status={appointment.status} />
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             {/* Mobile cards */}
//             <div className="space-y-3 p-4 md:hidden">
//               {todayAppointments.map((appointment) => (
//                 <div
//                   key={`${appointment.time}-${appointment.patient}`}
//                   className="rounded-xl border border-slate-100 bg-slate-50/50 p-4"
//                 >
//                   <div className="flex items-start justify-between">
//                     <div>
//                       <p className="text-sm font-semibold text-slate-800">
//                         {appointment.patient}
//                       </p>

//                       <p className="mt-1 text-xs text-slate-400">
//                         {appointment.doctor}
//                       </p>
//                     </div>

//                     <StatusBadge status={appointment.status} />
//                   </div>

//                   <div className="mt-3 flex items-center gap-4 text-xs text-slate-500">
//                     <span className="flex items-center gap-1">
//                       <Clock3 size={13} />
//                       {appointment.time}
//                     </span>

//                     <span>{appointment.department}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Recent Enquiries */}
//           <motion.div
//             variants={itemVariants}
//             initial="hidden"
//             animate="show"
//             className="rounded-2xl border border-slate-200/80 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)]"
//           >
//             <div className="flex items-center justify-between border-b border-slate-100 p-5">
//               <div>
//                 <h3 className="font-semibold text-slate-900">
//                   Recent Enquiries
//                 </h3>

//                 <p className="mt-1 text-xs text-slate-400">
//                   Latest website enquiries
//                 </p>
//               </div>

//               <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#063b5c]/10 text-[#063b5c]">
//                 <FileText size={18} />
//               </div>
//             </div>

//             <div className="divide-y divide-slate-100">
//               {enquiries.map((enquiry) => (
//                 <div
//                   key={`${enquiry.name}-${enquiry.subject}`}
//                   className="group flex gap-3 p-4 transition hover:bg-slate-50"
//                 >
//                   <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#063b5c]/10 text-xs font-bold text-[#063b5c]">
//                     {enquiry.name
//                       .split(" ")
//                       .map((n) => n[0])
//                       .join("")
//                       .slice(0, 2)}
//                   </div>

//                   <div className="min-w-0 flex-1">
//                     <div className="flex items-start justify-between gap-2">
//                       <p className="truncate text-sm font-semibold text-slate-700">
//                         {enquiry.name}
//                       </p>

//                       <StatusBadge status={enquiry.status} />
//                     </div>

//                     <p className="mt-1 truncate text-xs text-slate-500">
//                       {enquiry.subject}
//                     </p>

//                     <p className="mt-1 text-[10px] text-slate-400">
//                       {enquiry.time}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="p-4">
//               <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 py-2.5 text-xs font-semibold text-[#063b5c] transition hover:bg-[#063b5c] hover:text-white">
//                 View All Enquiries
//                 <ChevronRight size={15} />
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </main>
//     </div>
//   );
// };

// const StatusBadge = ({ status }) => {
//   const styles = {
//     Confirmed: "bg-emerald-50 text-emerald-600",
//     Pending: "bg-amber-50 text-amber-600",
//     New: "bg-blue-50 text-blue-600",
//     Resolved: "bg-slate-100 text-slate-500",
//   };

//   return (
//     <span
//       className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-semibold ${
//         styles[status] || "bg-slate-100 text-slate-500"
//       }`}
//     >
//       {status}
//     </span>
//   );
// };

// export default Dashboardpage;



"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  CalendarDays,
  ChevronRight,
  Clock3,
  FileText,
  HeartPulse,
  Hospital,
  Mail,
  MoreHorizontal,
  MousePointerClick,
  Stethoscope,
  UserRound,
  Users,
  Eye,
  Globe2,
  TrendingUp,
} from "lucide-react";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

/* ----------------------------------
   DATA
----------------------------------- */

const appointmentData = [
  { name: "Mon", appointments: 38 },
  { name: "Tue", appointments: 52 },
  { name: "Wed", appointments: 45 },
  { name: "Thu", appointments: 68 },
  { name: "Fri", appointments: 58 },
  { name: "Sat", appointments: 76 },
  { name: "Sun", appointments: 64 },
];

const websiteData = [
  { name: "Mon", visitors: 820 },
  { name: "Tue", visitors: 1050 },
  { name: "Wed", visitors: 920 },
  { name: "Thu", visitors: 1380 },
  { name: "Fri", visitors: 1210 },
  { name: "Sat", visitors: 1680 },
  { name: "Sun", visitors: 1510 },
];

const stats = [
  {
    title: "Total Doctors",
    value: "128",
    change: "+8.2%",
    icon: Stethoscope,
    bg: "bg-blue-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    changeColor: "text-emerald-600",
  },
  {
    title: "Appointments",
    value: "42",
    change: "+12.5%",
    icon: CalendarDays,
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    changeColor: "text-emerald-600",
  },
  {
    title: "Total Patients",
    value: "1,284",
    change: "+6.4%",
    icon: Users,
    bg: "bg-violet-50",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    changeColor: "text-emerald-600",
  },
  {
    title: "New Enquiries",
    value: "18",
    change: "+3.2%",
    icon: Mail,
    bg: "bg-orange-50",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    changeColor: "text-emerald-600",
  },
];

const todayAppointments = [
  {
    time: "10:00 AM",
    patient: "Rahul Sharma",
    doctor: "Dr. Ankit Sharma",
    department: "Cardiology",
    status: "Confirmed",
  },
  {
    time: "11:30 AM",
    patient: "Priya Verma",
    doctor: "Dr. Neha Verma",
    department: "Neurology",
    status: "Pending",
  },
  {
    time: "01:00 PM",
    patient: "Amit Singh",
    doctor: "Dr. Raj Singh",
    department: "Orthopedics",
    status: "Confirmed",
  },
  {
    time: "03:30 PM",
    patient: "Sneha Gupta",
    doctor: "Dr. Pooja Gupta",
    department: "Pediatrics",
    status: "Confirmed",
  },
];

const departments = [
  {
    name: "Cardiology",
    value: 34,
    color: "bg-blue-500",
  },
  {
    name: "Orthopedics",
    value: 25,
    color: "bg-emerald-500",
  },
  {
    name: "Neurology",
    value: 18,
    color: "bg-violet-500",
  },
  {
    name: "Pediatrics",
    value: 13,
    color: "bg-orange-500",
  },
];

const enquiries = [
  {
    name: "Rahul Nath",
    subject: "Appointment enquiry",
    time: "10 min ago",
    status: "New",
  },
  {
    name: "Amit Kumar",
    subject: "Emergency services",
    time: "35 min ago",
    status: "Pending",
  },
  {
    name: "Priya Singh",
    subject: "Doctor availability",
    time: "1 hour ago",
    status: "Resolved",
  },
];

/* ----------------------------------
   ANIMATION
----------------------------------- */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

/* ----------------------------------
   DASHBOARD
----------------------------------- */

const Dashboardpage = () => {
  return (
    <div className="min-h-screen bg-[#f6f8fb] text-slate-800">
      <div className="mx-auto max-w-[1700px] p-4 sm:p-5 lg:p-6">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-5 flex flex-col justify-between gap-4 md:flex-row md:items-center"
        >
          <div>
            <div className="mb-1 flex items-center gap-2 text-xs font-semibold text-[#063b5c]">
              <Hospital size={15} />
              Hospital Administration
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Welcome back, Admin
            </h1>

            <p className="mt-1 text-xs text-slate-500">
              Here&apos;s what&apos;s happening in your hospital today.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm">
              <Activity size={17} />

              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-500" />
            </button>

            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-1.5 shadow-sm">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#063b5c] text-xs font-bold text-white">
                A
              </div>

              <div className="hidden sm:block">
                <p className="text-xs font-semibold text-slate-800">
                  Admin
                </p>

                <p className="text-[10px] text-slate-400">
                  Administrator
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= STAT CARDS ================= */}

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 gap-3 xl:grid-cols-4"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.title}
                variants={item}
                whileHover={{ y: -3 }}
                className={`relative min-h-[125px] overflow-hidden rounded-xl border border-white ${stat.bg} p-4 shadow-sm`}
              >
                {/* Watermark Icon */}

                <Icon
                  size={75}
                  strokeWidth={1}
                  className={`absolute -bottom-4 -right-4 opacity-[0.07] ${stat.iconColor}`}
                />

                <div className="relative z-10 flex items-start justify-between">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${stat.iconBg} ${stat.iconColor}`}
                  >
                    <Icon size={18} />
                  </div>

                  <MoreHorizontal
                    size={17}
                    className="text-slate-400"
                  />
                </div>

                <div className="relative z-10 mt-3">
                  <p className="text-[11px] font-medium text-slate-500">
                    {stat.title}
                  </p>

                  <div className="mt-0.5 flex items-center gap-2">
                    <h2 className="text-xl font-bold text-slate-900">
                      {stat.value}
                    </h2>

                    <span
                      className={`flex items-center text-[10px] font-semibold ${stat.changeColor}`}
                    >
                      <ArrowUpRight size={11} />
                      {stat.change}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ================= ANALYTICS ================= */}

        <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-5">

          {/* Appointment Analytics */}

          <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm xl:col-span-3"
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <CalendarDays size={16} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-800">
                    Appointment Analytics
                  </h3>

                  <p className="text-[10px] text-slate-400">
                    Weekly appointment overview
                  </p>
                </div>
              </div>

              <select className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1.5 text-[10px] outline-none">
                <option>This Week</option>
                <option>This Month</option>
              </select>
            </div>

            <div className="h-[245px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={appointmentData}>
                  <defs>
                    <linearGradient
                      id="appointmentArea"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#063b5c"
                        stopOpacity={0.2}
                      />

                      <stop
                        offset="100%"
                        stopColor="#063b5c"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>

                  <CartesianGrid
                    stroke="#edf1f5"
                    vertical={false}
                  />

                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fontSize: 10,
                      fill: "#94a3b8",
                    }}
                  />

                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fontSize: 10,
                      fill: "#94a3b8",
                    }}
                  />

                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="appointments"
                    stroke="#063b5c"
                    strokeWidth={2.5}
                    fill="url(#appointmentArea)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Website Analytics */}

          <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm xl:col-span-2"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                  <Globe2 size={16} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-800">
                    Website Analytics
                  </h3>

                  <p className="text-[10px] text-slate-400">
                    Website visitors this week
                  </p>
                </div>
              </div>

              <TrendingUp
                size={17}
                className="text-emerald-500"
              />
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="rounded-lg bg-violet-50 p-2.5">
                <div className="flex items-center gap-1 text-[10px] text-violet-600">
                  <Eye size={12} />
                  Visitors
                </div>

                <p className="mt-1 text-lg font-bold text-slate-800">
                  8,570
                </p>

                <span className="text-[9px] font-semibold text-emerald-600">
                  +14.8%
                </span>
              </div>

              <div className="rounded-lg bg-blue-50 p-2.5">
                <div className="flex items-center gap-1 text-[10px] text-blue-600">
                  <MousePointerClick size={12} />
                  Clicks
                </div>

                <p className="mt-1 text-lg font-bold text-slate-800">
                  3,246
                </p>

                <span className="text-[9px] font-semibold text-emerald-600">
                  +9.4%
                </span>
              </div>
            </div>

            <div className="mt-3 h-[145px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={websiteData}>
                  <CartesianGrid
                    stroke="#edf1f5"
                    vertical={false}
                  />

                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fontSize: 9,
                      fill: "#94a3b8",
                    }}
                  />

                  <YAxis
                    hide
                  />

                  <Tooltip />

                  <Bar
                    dataKey="visitors"
                    fill="#7c3aed"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* ================= BOTTOM ================= */}

        <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-3">

          {/* Today's Appointments */}

          <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm xl:col-span-2"
          >
            <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Clock3 size={16} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-800">
                    Today&apos;s Appointments
                  </h3>

                  <p className="text-[10px] text-slate-400">
                    4 appointments scheduled
                  </p>
                </div>
              </div>

              <button className="flex items-center gap-1 text-[10px] font-semibold text-[#063b5c]">
                View All
                <ChevronRight size={13} />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[650px]">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="px-4 py-2.5 text-left text-[9px] font-bold uppercase tracking-wide text-slate-400">
                      Time
                    </th>

                    <th className="px-4 py-2.5 text-left text-[9px] font-bold uppercase tracking-wide text-slate-400">
                      Patient
                    </th>

                    <th className="px-4 py-2.5 text-left text-[9px] font-bold uppercase tracking-wide text-slate-400">
                      Doctor
                    </th>

                    <th className="px-4 py-2.5 text-left text-[9px] font-bold uppercase tracking-wide text-slate-400">
                      Department
                    </th>

                    <th className="px-4 py-2.5 text-left text-[9px] font-bold uppercase tracking-wide text-slate-400">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {todayAppointments.map((appointment) => (
                    <tr
                      key={appointment.time}
                      className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                    >
                      <td className="px-4 py-3 text-[11px] font-semibold text-[#063b5c]">
                        {appointment.time}
                      </td>

                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-[9px] font-bold text-blue-600">
                            {appointment.patient
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .slice(0, 2)}
                          </div>

                          <span className="text-[11px] font-semibold text-slate-700">
                            {appointment.patient}
                          </span>
                        </div>
                      </td>

                      <td className="px-4 py-3 text-[10px] text-slate-500">
                        {appointment.doctor}
                      </td>

                      <td className="px-4 py-3 text-[10px] text-slate-500">
                        {appointment.department}
                      </td>

                      <td className="px-4 py-3">
                        <StatusBadge status={appointment.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Recent Enquiries */}

          <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            className="rounded-xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                  <Mail size={16} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-800">
                    Recent Enquiries
                  </h3>

                  <p className="text-[10px] text-slate-400">
                    Latest website enquiries
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-orange-50 px-2 py-1 text-[9px] font-bold text-orange-600">
                18 New
              </span>
            </div>

            <div>
              {enquiries.map((enquiry) => (
                <div
                  key={enquiry.name}
                  className="flex items-center gap-3 border-b border-slate-100 px-4 py-3 last:border-0 hover:bg-slate-50"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#063b5c]/10 text-[9px] font-bold text-[#063b5c]">
                    {enquiry.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-[11px] font-semibold text-slate-700">
                        {enquiry.name}
                      </p>

                      <StatusBadge status={enquiry.status} />
                    </div>

                    <p className="truncate text-[10px] text-slate-400">
                      {enquiry.subject}
                    </p>

                    <p className="mt-0.5 text-[9px] text-slate-300">
                      {enquiry.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3">
              <button className="flex w-full items-center justify-center gap-1 rounded-lg border border-slate-200 py-2 text-[10px] font-semibold text-[#063b5c] hover:bg-[#063b5c] hover:text-white">
                View All Enquiries
                <ChevronRight size={13} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* ================= QUICK ACTIONS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          <QuickAction
            icon={Stethoscope}
            title="Add Doctor"
            color="blue"
          />

          <QuickAction
            icon={CalendarDays}
            title="New Appointment"
            color="emerald"
          />

          <QuickAction
            icon={UserRound}
            title="Add Patient"
            color="violet"
          />

          <QuickAction
            icon={FileText}
            title="Create Content"
            color="orange"
          />
        </motion.div>
      </div>
    </div>
  );
};

/* ----------------------------------
   STATUS BADGE
----------------------------------- */

const StatusBadge = ({ status }) => {
  const styles = {
    Confirmed: "bg-emerald-50 text-emerald-600",
    Pending: "bg-amber-50 text-amber-600",
    New: "bg-blue-50 text-blue-600",
    Resolved: "bg-slate-100 text-slate-500",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2 py-1 text-[8px] font-bold ${styles[status]}`}
    >
      {status}
    </span>
  );
};

/* ----------------------------------
   QUICK ACTION
----------------------------------- */

const QuickAction = ({ icon: Icon, title, color }) => {
  const colors = {
    blue: "bg-blue-50 text-blue-600",
    emerald: "bg-emerald-50 text-emerald-600",
    violet: "bg-violet-50 text-violet-600",
    orange: "bg-orange-50 text-orange-600",
  };

  return (
    <button className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${colors[color]}`}
      >
        <Icon size={17} />
      </div>

      <div>
        <p className="text-[11px] font-semibold text-slate-700">
          {title}
        </p>

        <p className="text-[9px] text-slate-400">
          Quick action
        </p>
      </div>
    </button>
  );
};

export default Dashboardpage;



// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Activity,
//   ArrowUpRight,
//   Baby,
//   BarChart3,
//   Bone,
//   Brain,
//   CalendarDays,
//   ChevronRight,
//   Clock3,
//   FileText,
//   Globe2,
//   HeartPulse,
//   Hospital,
//   Mail,
//   MoreHorizontal,
//   MousePointerClick,
//   Stethoscope,
//   TrendingUp,
//   UserRound,
//   Users,
//   Eye,
// } from "lucide-react";

// import {
//   Area,
//   AreaChart,
//   Bar,
//   BarChart,
//   CartesianGrid,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";

// /* =========================================================
//    APPOINTMENT ANALYTICS DATA
// ========================================================= */

// const appointmentData = [
//   {
//     name: "Mon",
//     appointments: 38,
//   },
//   {
//     name: "Tue",
//     appointments: 52,
//   },
//   {
//     name: "Wed",
//     appointments: 45,
//   },
//   {
//     name: "Thu",
//     appointments: 68,
//   },
//   {
//     name: "Fri",
//     appointments: 58,
//   },
//   {
//     name: "Sat",
//     appointments: 76,
//   },
//   {
//     name: "Sun",
//     appointments: 64,
//   },
// ];

// /* =========================================================
//    WEBSITE ANALYTICS DATA
// ========================================================= */

// const websiteData = [
//   {
//     name: "Mon",
//     visitors: 820,
//   },
//   {
//     name: "Tue",
//     visitors: 1050,
//   },
//   {
//     name: "Wed",
//     visitors: 920,
//   },
//   {
//     name: "Thu",
//     visitors: 1380,
//   },
//   {
//     name: "Fri",
//     visitors: 1210,
//   },
//   {
//     name: "Sat",
//     visitors: 1680,
//   },
//   {
//     name: "Sun",
//     visitors: 1510,
//   },
// ];

// /* =========================================================
//    STAT CARDS
// ========================================================= */

// const stats = [
//   {
//     title: "Total Doctors",
//     value: "128",
//     change: "+8.2%",
//     icon: Stethoscope,

//     bg: "bg-blue-50",
//     iconBg: "bg-blue-100",
//     iconColor: "text-blue-600",
//     changeColor: "text-emerald-600",
//   },

//   {
//     title: "Appointments",
//     value: "42",
//     change: "+12.5%",
//     icon: CalendarDays,

//     bg: "bg-emerald-50",
//     iconBg: "bg-emerald-100",
//     iconColor: "text-emerald-600",
//     changeColor: "text-emerald-600",
//   },

//   {
//     title: "Total Patients",
//     value: "1,284",
//     change: "+6.4%",
//     icon: Users,

//     bg: "bg-violet-50",
//     iconBg: "bg-violet-100",
//     iconColor: "text-violet-600",
//     changeColor: "text-emerald-600",
//   },

//   {
//     title: "New Enquiries",
//     value: "18",
//     change: "+3.2%",
//     icon: Mail,

//     bg: "bg-orange-50",
//     iconBg: "bg-orange-100",
//     iconColor: "text-orange-600",
//     changeColor: "text-emerald-600",
//   },
// ];

// /* =========================================================
//    DEPARTMENT STATISTICS
// ========================================================= */

// const departmentData = [
//   {
//     name: "Cardiology",
//     doctors: 12,
//     patients: 284,
//     percentage: 82,

//     icon: HeartPulse,
//     bg: "bg-red-50",
//     iconBg: "bg-red-100",
//     iconColor: "text-red-600",
//     bar: "bg-red-500",
//   },

//   {
//     name: "Neurology",
//     doctors: 8,
//     patients: 196,
//     percentage: 68,

//     icon: Brain,
//     bg: "bg-violet-50",
//     iconBg: "bg-violet-100",
//     iconColor: "text-violet-600",
//     bar: "bg-violet-500",
//   },

//   {
//     name: "Orthopedics",
//     doctors: 10,
//     patients: 231,
//     percentage: 76,

//     icon: Bone,
//     bg: "bg-blue-50",
//     iconBg: "bg-blue-100",
//     iconColor: "text-blue-600",
//     bar: "bg-blue-500",
//   },

//   {
//     name: "Pediatrics",
//     doctors: 7,
//     patients: 174,
//     percentage: 61,

//     icon: Baby,
//     bg: "bg-pink-50",
//     iconBg: "bg-pink-100",
//     iconColor: "text-pink-600",
//     bar: "bg-pink-500",
//   },
// ];

// /* =========================================================
//    TODAY'S APPOINTMENTS
// ========================================================= */

// const todayAppointments = [
//   {
//     time: "10:00 AM",
//     patient: "Rahul Sharma",
//     doctor: "Dr. Ankit Sharma",
//     department: "Cardiology",
//     status: "Confirmed",
//   },

//   {
//     time: "11:30 AM",
//     patient: "Priya Verma",
//     doctor: "Dr. Neha Verma",
//     department: "Neurology",
//     status: "Pending",
//   },

//   {
//     time: "01:00 PM",
//     patient: "Amit Singh",
//     doctor: "Dr. Raj Singh",
//     department: "Orthopedics",
//     status: "Confirmed",
//   },

//   {
//     time: "03:30 PM",
//     patient: "Sneha Gupta",
//     doctor: "Dr. Pooja Gupta",
//     department: "Pediatrics",
//     status: "Confirmed",
//   },
// ];

// /* =========================================================
//    RECENT ENQUIRIES
// ========================================================= */

// const enquiries = [
//   {
//     name: "Rahul Nath",
//     subject: "Appointment enquiry",
//     time: "10 min ago",
//     status: "New",
//   },

//   {
//     name: "Amit Kumar",
//     subject: "Emergency services",
//     time: "35 min ago",
//     status: "Pending",
//   },

//   {
//     name: "Priya Singh",
//     subject: "Doctor availability",
//     time: "1 hour ago",
//     status: "Resolved",
//   },

//   {
//     name: "Neha Sharma",
//     subject: "Health package",
//     time: "2 hours ago",
//     status: "New",
//   },
// ];

// /* =========================================================
//    ANIMATIONS
// ========================================================= */

// const container = {
//   hidden: {},

//   show: {
//     transition: {
//       staggerChildren: 0.06,
//     },
//   },
// };

// const item = {
//   hidden: {
//     opacity: 0,
//     y: 15,
//   },

//   show: {
//     opacity: 1,
//     y: 0,

//     transition: {
//       duration: 0.4,
//       ease: "easeOut",
//     },
//   },
// };

// /* =========================================================
//    DASHBOARD PAGE
// ========================================================= */

// const Dashboardpage = () => {
//   return (
//     <div className="min-h-screen bg-[#f6f8fb] text-slate-800">

//       <main className="mx-auto max-w-[1700px] p-4 sm:p-5 lg:p-6">

//         {/* =================================================
//             HEADER
//         ================================================= */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: -10,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 0.5,
//           }}
//           className="
//             mb-5
//             flex
//             flex-col
//             justify-between
//             gap-4
//             md:flex-row
//             md:items-center
//           "
//         >

//           {/* LEFT */}

//           <div>

//             <div
//               className="
//                 mb-1
//                 flex
//                 items-center
//                 gap-2
//                 text-xs
//                 font-semibold
//                 text-[#063b5c]
//               "
//             >
//               <Hospital size={15} />

//               <span>
//                 Hospital Administration
//               </span>
//             </div>

//             <h1
//               className="
//                 text-2xl
//                 font-bold
//                 tracking-tight
//                 text-slate-900
//                 sm:text-3xl
//               "
//             >
//               Welcome back, Admin
//             </h1>

//             <p className="mt-1 text-xs text-slate-500">
//               Here&apos;s what&apos;s happening in your hospital today.
//             </p>

//           </div>

//           {/* RIGHT */}

//           <div className="flex items-center gap-2">

//             {/* NOTIFICATION */}

//             <button
//               className="
//                 relative
//                 flex
//                 h-10
//                 w-10
//                 items-center
//                 justify-center
//                 rounded-xl
//                 border
//                 border-slate-200
//                 bg-white
//                 text-slate-500
//                 shadow-sm
//                 transition
//                 duration-300
//                 hover:-translate-y-0.5
//                 hover:text-[#063b5c]
//               "
//             >

//               <Activity size={17} />

//               <span
//                 className="
//                   absolute
//                   right-2
//                   top-2
//                   h-1.5
//                   w-1.5
//                   rounded-full
//                   bg-red-500
//                 "
//               />

//             </button>

//             {/* ADMIN */}

//             <div
//               className="
//                 flex
//                 items-center
//                 gap-2
//                 rounded-xl
//                 border
//                 border-slate-200
//                 bg-white
//                 px-3
//                 py-1.5
//                 shadow-sm
//               "
//             >

//               <div
//                 className="
//                   flex
//                   h-8
//                   w-8
//                   items-center
//                   justify-center
//                   rounded-lg
//                   bg-[#063b5c]
//                   text-xs
//                   font-bold
//                   text-white
//                 "
//               >
//                 A
//               </div>

//               <div className="hidden sm:block">

//                 <p className="text-xs font-semibold text-slate-800">
//                   Admin
//                 </p>

//                 <p className="text-[10px] text-slate-400">
//                   Administrator
//                 </p>

//               </div>

//             </div>

//           </div>

//         </motion.div>

//         {/* =================================================
//             STAT CARDS
//         ================================================= */}

//         <motion.div
//           variants={container}
//           initial="hidden"
//           animate="show"
//           className="
//             grid
//             grid-cols-2
//             gap-3
//             xl:grid-cols-4
//           "
//         >

//           {stats.map((stat) => {

//             const Icon = stat.icon;

//             return (
//               <motion.div
//                 key={stat.title}
//                 variants={item}
//                 whileHover={{
//                   y: -5,
//                   scale: 1.015,
//                 }}
//                 transition={{
//                   type: "spring",
//                   stiffness: 280,
//                   damping: 20,
//                 }}
//                 className={`
//                   group
//                   relative
//                   min-h-[125px]
//                   overflow-hidden
//                   rounded-xl
//                   border
//                   border-white
//                   ${stat.bg}
//                   p-4
//                   shadow-sm
//                   transition-all
//                   duration-500
//                   hover:shadow-[0_15px_35px_rgba(15,23,42,0.10)]
//                 `}
//               >

//                 {/* WATERMARK ICON */}

//                 <Icon
//                   size={105}
//                   strokeWidth={1}
//                   className={`
//                     pointer-events-none
//                     absolute
//                     -bottom-8
//                     -right-7
//                     ${stat.iconColor}
//                     scale-75
//                     rotate-[-12deg]
//                     opacity-0
//                     transition-all
//                     duration-700
//                     ease-out
//                     group-hover:scale-100
//                     group-hover:rotate-0
//                     group-hover:opacity-[0.12]
//                   `}
//                 />

//                 {/* GLOW */}

//                 <div
//                   className="
//                     pointer-events-none
//                     absolute
//                     -right-12
//                     -top-12
//                     h-28
//                     w-28
//                     rounded-full
//                     bg-white
//                     opacity-0
//                     blur-2xl
//                     transition-all
//                     duration-700
//                     group-hover:opacity-40
//                   "
//                 />

//                 {/* ICON */}

//                 <motion.div
//                   whileHover={{
//                     scale: 1.08,
//                     rotate: -5,
//                   }}
//                   transition={{
//                     type: "spring",
//                     stiffness: 300,
//                     damping: 15,
//                   }}
//                   className={`
//                     relative
//                     z-10
//                     flex
//                     h-9
//                     w-9
//                     items-center
//                     justify-center
//                     rounded-lg
//                     ${stat.iconBg}
//                     ${stat.iconColor}
//                     transition-all
//                     duration-500
//                   `}
//                 >
//                   <Icon size={18} />
//                 </motion.div>

//                 {/* MORE */}

//                 <MoreHorizontal
//                   size={17}
//                   className="
//                     absolute
//                     right-3
//                     top-3
//                     z-10
//                     text-slate-400
//                     transition-all
//                     duration-300
//                     group-hover:text-slate-600
//                   "
//                 />

//                 {/* CONTENT */}

//                 <div className="relative z-10 mt-3">

//                   <p
//                     className="
//                       text-[11px]
//                       font-medium
//                       text-slate-500
//                       transition-colors
//                       duration-300
//                       group-hover:text-slate-600
//                     "
//                   >
//                     {stat.title}
//                   </p>

//                   <div className="mt-0.5 flex items-center gap-2">

//                     <h2
//                       className="
//                         text-xl
//                         font-bold
//                         tracking-tight
//                         text-slate-900
//                       "
//                     >
//                       {stat.value}
//                     </h2>

//                     <span
//                       className={`
//                         flex
//                         items-center
//                         text-[10px]
//                         font-semibold
//                         ${stat.changeColor}
//                       `}
//                     >
//                       <ArrowUpRight size={11} />

//                       {stat.change}
//                     </span>

//                   </div>

//                 </div>

//                 {/* BOTTOM LINE */}

//                 <div
//                   className={`
//                     absolute
//                     bottom-0
//                     left-0
//                     h-[2px]
//                     w-0
//                     ${stat.iconColor.replace(
//                       "text-",
//                       "bg-"
//                     )}
//                     opacity-30
//                     transition-all
//                     duration-500
//                     group-hover:w-full
//                   `}
//                 />

//               </motion.div>
//             );
//           })}

//         </motion.div>

//         {/* =================================================
//             ANALYTICS
//         ================================================= */}

//         <div
//           className="
//             mt-4
//             grid
//             grid-cols-1
//             gap-4
//             xl:grid-cols-5
//           "
//         >

//           {/* =================================================
//               APPOINTMENT ANALYTICS
//           ================================================= */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 15,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.5,
//               delay: 0.1,
//             }}
//             className="
//               rounded-xl
//               border
//               border-slate-200
//               bg-white
//               p-4
//               shadow-sm
//               xl:col-span-3
//             "
//           >

//             {/* HEADER */}

//             <div
//               className="
//                 mb-3
//                 flex
//                 items-center
//                 justify-between
//               "
//             >

//               <div className="flex items-center gap-2">

//                 <div
//                   className="
//                     flex
//                     h-8
//                     w-8
//                     items-center
//                     justify-center
//                     rounded-lg
//                     bg-blue-50
//                     text-blue-600
//                   "
//                 >
//                   <CalendarDays size={16} />
//                 </div>

//                 <div>

//                   <h3 className="text-sm font-bold text-slate-800">
//                     Appointment Analytics
//                   </h3>

//                   <p className="text-[10px] text-slate-400">
//                     Weekly appointment overview
//                   </p>

//                 </div>

//               </div>

//               <select
//                 className="
//                   rounded-lg
//                   border
//                   border-slate-200
//                   bg-slate-50
//                   px-2
//                   py-1.5
//                   text-[10px]
//                   text-slate-600
//                   outline-none
//                   focus:border-[#063b5c]
//                 "
//               >
//                 <option>This Week</option>
//                 <option>This Month</option>
//                 <option>Last 6 Months</option>
//               </select>

//             </div>

//             {/* CHART */}

//             <div className="h-[245px] w-full">

//               <ResponsiveContainer
//                 width="100%"
//                 height="100%"
//               >

//                 <AreaChart
//                   data={appointmentData}
//                   margin={{
//                     top: 10,
//                     right: 5,
//                     left: -20,
//                     bottom: 0,
//                   }}
//                 >

//                   <defs>

//                     <linearGradient
//                       id="appointmentArea"
//                       x1="0"
//                       y1="0"
//                       x2="0"
//                       y2="1"
//                     >

//                       <stop
//                         offset="0%"
//                         stopColor="#063b5c"
//                         stopOpacity={0.22}
//                       />

//                       <stop
//                         offset="100%"
//                         stopColor="#063b5c"
//                         stopOpacity={0}
//                       />

//                     </linearGradient>

//                   </defs>

//                   <CartesianGrid
//                     stroke="#edf1f5"
//                     vertical={false}
//                   />

//                   <XAxis
//                     dataKey="name"
//                     axisLine={false}
//                     tickLine={false}
//                     tick={{
//                       fontSize: 10,
//                       fill: "#94a3b8",
//                     }}
//                   />

//                   <YAxis
//                     axisLine={false}
//                     tickLine={false}
//                     tick={{
//                       fontSize: 10,
//                       fill: "#94a3b8",
//                     }}
//                   />

//                   <Tooltip
//                     contentStyle={{
//                       borderRadius: "10px",
//                       border: "1px solid #e2e8f0",
//                       fontSize: "11px",
//                     }}
//                   />

//                   <Area
//                     type="monotone"
//                     dataKey="appointments"
//                     stroke="#063b5c"
//                     strokeWidth={2.5}
//                     fill="url(#appointmentArea)"
//                   />

//                 </AreaChart>

//               </ResponsiveContainer>

//             </div>

//           </motion.div>

//           {/* =================================================
//               WEBSITE ANALYTICS
//           ================================================= */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 15,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.5,
//               delay: 0.2,
//             }}
//             className="
//               rounded-xl
//               border
//               border-slate-200
//               bg-white
//               p-4
//               shadow-sm
//               xl:col-span-2
//             "
//           >

//             {/* HEADER */}

//             <div className="flex items-center justify-between">

//               <div className="flex items-center gap-2">

//                 <div
//                   className="
//                     flex
//                     h-8
//                     w-8
//                     items-center
//                     justify-center
//                     rounded-lg
//                     bg-violet-50
//                     text-violet-600
//                   "
//                 >
//                   <Globe2 size={16} />
//                 </div>

//                 <div>

//                   <h3 className="text-sm font-bold text-slate-800">
//                     Website Analytics
//                   </h3>

//                   <p className="text-[10px] text-slate-400">
//                     Website performance
//                   </p>

//                 </div>

//               </div>

//               <TrendingUp
//                 size={17}
//                 className="text-emerald-500"
//               />

//             </div>

//             {/* WEBSITE STATS */}

//             <div className="mt-3 grid grid-cols-2 gap-2">

//               {/* VISITORS */}

//               <div
//                 className="
//                   rounded-lg
//                   bg-violet-50
//                   p-2.5
//                 "
//               >

//                 <div
//                   className="
//                     flex
//                     items-center
//                     gap-1
//                     text-[10px]
//                     text-violet-600
//                   "
//                 >
//                   <Eye size={12} />

//                   Visitors
//                 </div>

//                 <p className="mt-1 text-lg font-bold text-slate-800">
//                   8,570
//                 </p>

//                 <span className="text-[9px] font-semibold text-emerald-600">
//                   +14.8%
//                 </span>

//               </div>

//               {/* CLICKS */}

//               <div
//                 className="
//                   rounded-lg
//                   bg-blue-50
//                   p-2.5
//                 "
//               >

//                 <div
//                   className="
//                     flex
//                     items-center
//                     gap-1
//                     text-[10px]
//                     text-blue-600
//                   "
//                 >
//                   <MousePointerClick size={12} />

//                   Clicks
//                 </div>

//                 <p className="mt-1 text-lg font-bold text-slate-800">
//                   3,246
//                 </p>

//                 <span className="text-[9px] font-semibold text-emerald-600">
//                   +9.4%
//                 </span>

//               </div>

//             </div>

//             {/* WEBSITE CHART */}

//             <div className="mt-3 h-[145px]">

//               <ResponsiveContainer
//                 width="100%"
//                 height="100%"
//               >

//                 <BarChart
//                   data={websiteData}
//                   margin={{
//                     top: 5,
//                     right: 0,
//                     left: -25,
//                     bottom: 0,
//                   }}
//                 >

//                   <CartesianGrid
//                     stroke="#edf1f5"
//                     vertical={false}
//                   />

//                   <XAxis
//                     dataKey="name"
//                     axisLine={false}
//                     tickLine={false}
//                     tick={{
//                       fontSize: 9,
//                       fill: "#94a3b8",
//                     }}
//                   />

//                   <YAxis hide />

//                   <Tooltip
//                     contentStyle={{
//                       borderRadius: "10px",
//                       border: "1px solid #e2e8f0",
//                       fontSize: "10px",
//                     }}
//                   />

//                   <Bar
//                     dataKey="visitors"
//                     fill="#7c3aed"
//                     radius={[4, 4, 0, 0]}
//                   />

//                 </BarChart>

//               </ResponsiveContainer>

//             </div>

//           </motion.div>

//         </div>

//         {/* =================================================
//             DEPARTMENT STATISTICS
//         ================================================= */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 15,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 0.5,
//             delay: 0.3,
//           }}
//           className="
//             mt-4
//             overflow-hidden
//             rounded-xl
//             border
//             border-slate-200
//             bg-white
//             p-4
//             shadow-sm
//           "
//         >

//           {/* HEADER */}

//           <div
//             className="
//               mb-4
//               flex
//               items-center
//               justify-between
//             "
//           >

//             <div className="flex items-center gap-2">

//               <div
//                 className="
//                   flex
//                   h-8
//                   w-8
//                   items-center
//                   justify-center
//                   rounded-lg
//                   bg-[#063b5c]/10
//                   text-[#063b5c]
//                 "
//               >
//                 <BarChart3 size={16} />
//               </div>

//               <div>

//                 <h3 className="text-sm font-bold text-slate-800">
//                   Department Statistics
//                 </h3>

//                 <p className="text-[10px] text-slate-400">
//                   Department performance overview
//                 </p>

//               </div>

//             </div>

//             <button
//               className="
//                 flex
//                 items-center
//                 gap-1
//                 text-[10px]
//                 font-semibold
//                 text-[#063b5c]
//                 transition-all
//                 duration-300
//                 hover:gap-2
//               "
//             >
//               View All

//               <ChevronRight size={13} />
//             </button>

//           </div>

//           {/* DEPARTMENT CARDS */}

//           <div
//             className="
//               grid
//               grid-cols-1
//               gap-3
//               sm:grid-cols-2
//               lg:grid-cols-4
//             "
//           >

//             {departmentData.map(
//               (department, index) => {

//                 const Icon = department.icon;

//                 return (
//                   <motion.div
//                     key={department.name}
//                     initial={{
//                       opacity: 0,
//                       y: 15,
//                     }}
//                     animate={{
//                       opacity: 1,
//                       y: 0,
//                     }}
//                     transition={{
//                       duration: 0.4,
//                       delay: 0.35 + index * 0.08,
//                     }}
//                     whileHover={{
//                       y: -5,
//                       scale: 1.015,
//                     }}
//                     className={`
//                       group
//                       relative
//                       overflow-hidden
//                       rounded-xl
//                       border
//                       border-slate-100
//                       ${department.bg}
//                       p-4
//                       transition-all
//                       duration-500
//                       hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]
//                     `}
//                   >

//                     {/* WATERMARK */}

//                     <Icon
//                       size={100}
//                       strokeWidth={1}
//                       className={`
//                         pointer-events-none
//                         absolute
//                         -bottom-8
//                         -right-7
//                         ${department.iconColor}
//                         scale-75
//                         rotate-[-15deg]
//                         opacity-0
//                         transition-all
//                         duration-700
//                         ease-out
//                         group-hover:scale-100
//                         group-hover:rotate-0
//                         group-hover:opacity-[0.10]
//                       `}
//                     />

//                     {/* GLOW */}

//                     <div
//                       className="
//                         pointer-events-none
//                         absolute
//                         -right-12
//                         -top-12
//                         h-24
//                         w-24
//                         rounded-full
//                         bg-white
//                         opacity-0
//                         blur-2xl
//                         transition-all
//                         duration-700
//                         group-hover:opacity-40
//                       "
//                     />

//                     {/* TOP */}

//                     <div
//                       className="
//                         relative
//                         z-10
//                         flex
//                         items-center
//                         justify-between
//                       "
//                     >

//                       <motion.div
//                         whileHover={{
//                           scale: 1.1,
//                           rotate: -5,
//                         }}
//                         transition={{
//                           type: "spring",
//                           stiffness: 300,
//                           damping: 15,
//                         }}
//                         className={`
//                           flex
//                           h-9
//                           w-9
//                           items-center
//                           justify-center
//                           rounded-lg
//                           ${department.iconBg}
//                           ${department.iconColor}
//                           transition-all
//                           duration-300
//                         `}
//                       >
//                         <Icon size={18} />
//                       </motion.div>

//                       <MoreHorizontal
//                         size={16}
//                         className="
//                           text-slate-400
//                           transition
//                           duration-300
//                           group-hover:text-slate-600
//                         "
//                       />

//                     </div>

//                     {/* CONTENT */}

//                     <div className="relative z-10 mt-3">

//                       <h4
//                         className="
//                           text-xs
//                           font-bold
//                           text-slate-800
//                         "
//                       >
//                         {department.name}
//                       </h4>

//                       <div
//                         className="
//                           mt-1
//                           flex
//                           items-center
//                           gap-3
//                         "
//                       >

//                         <span className="text-[10px] text-slate-500">
//                           {department.doctors} Doctors
//                         </span>

//                         <span className="h-1 w-1 rounded-full bg-slate-300" />

//                         <span className="text-[10px] text-slate-500">
//                           {department.patients} Patients
//                         </span>

//                       </div>

//                     </div>

//                     {/* PROGRESS */}

//                     <div className="relative z-10 mt-4">

//                       <div
//                         className="
//                           mb-1
//                           flex
//                           items-center
//                           justify-between
//                         "
//                       >

//                         <span className="text-[9px] font-medium text-slate-400">
//                           Patient Activity
//                         </span>

//                         <span
//                           className={`
//                             text-[9px]
//                             font-bold
//                             ${department.iconColor}
//                           `}
//                         >
//                           {department.percentage}%
//                         </span>

//                       </div>

//                       <div
//                         className="
//                           h-1.5
//                           overflow-hidden
//                           rounded-full
//                           bg-white/70
//                         "
//                       >

//                         <motion.div
//                           initial={{
//                             width: 0,
//                           }}
//                           animate={{
//                             width: `${department.percentage}%`,
//                           }}
//                           transition={{
//                             duration: 1,
//                             delay:
//                               0.6 + index * 0.1,
//                             ease: "easeOut",
//                           }}
//                           className={`
//                             h-full
//                             rounded-full
//                             ${department.bar}
//                           `}
//                         />

//                       </div>

//                     </div>

//                     {/* BOTTOM LINE */}

//                     <div
//                       className={`
//                         absolute
//                         bottom-0
//                         left-0
//                         h-[2px]
//                         w-0
//                         ${department.bar}
//                         opacity-30
//                         transition-all
//                         duration-500
//                         group-hover:w-full
//                       `}
//                     />

//                   </motion.div>
//                 );
//               }
//             )}

//           </div>

//         </motion.div>

//         {/* =================================================
//             TODAY'S APPOINTMENTS + ENQUIRIES
//         ================================================= */}

//         <div
//           className="
//             mt-4
//             grid
//             grid-cols-1
//             gap-4
//             xl:grid-cols-3
//           "
//         >

//           {/* =================================================
//               TODAY'S APPOINTMENTS
//           ================================================= */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 15,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.5,
//               delay: 0.4,
//             }}
//             className="
//               overflow-hidden
//               rounded-xl
//               border
//               border-slate-200
//               bg-white
//               shadow-sm
//               xl:col-span-2
//             "
//           >

//             {/* HEADER */}

//             <div
//               className="
//                 flex
//                 items-center
//                 justify-between
//                 border-b
//                 border-slate-100
//                 px-4
//                 py-3
//               "
//             >

//               <div className="flex items-center gap-2">

//                 <div
//                   className="
//                     flex
//                     h-8
//                     w-8
//                     items-center
//                     justify-center
//                     rounded-lg
//                     bg-emerald-50
//                     text-emerald-600
//                   "
//                 >
//                   <Clock3 size={16} />
//                 </div>

//                 <div>

//                   <h3 className="text-sm font-bold text-slate-800">
//                     Today&apos;s Appointments
//                   </h3>

//                   <p className="text-[10px] text-slate-400">
//                     4 appointments scheduled
//                   </p>

//                 </div>

//               </div>

//               <button
//                 className="
//                   flex
//                   items-center
//                   gap-1
//                   text-[10px]
//                   font-semibold
//                   text-[#063b5c]
//                   transition
//                   hover:gap-2
//                 "
//               >
//                 View All

//                 <ChevronRight size={13} />
//               </button>

//             </div>

//             {/* DESKTOP TABLE */}

//             <div className="hidden overflow-x-auto md:block">

//               <table className="w-full min-w-[650px]">

//                 <thead>

//                   <tr className="bg-slate-50">

//                     <th className="px-4 py-2.5 text-left text-[9px] font-bold uppercase tracking-wide text-slate-400">
//                       Time
//                     </th>

//                     <th className="px-4 py-2.5 text-left text-[9px] font-bold uppercase tracking-wide text-slate-400">
//                       Patient
//                     </th>

//                     <th className="px-4 py-2.5 text-left text-[9px] font-bold uppercase tracking-wide text-slate-400">
//                       Doctor
//                     </th>

//                     <th className="px-4 py-2.5 text-left text-[9px] font-bold uppercase tracking-wide text-slate-400">
//                       Department
//                     </th>

//                     <th className="px-4 py-2.5 text-left text-[9px] font-bold uppercase tracking-wide text-slate-400">
//                       Status
//                     </th>

//                   </tr>

//                 </thead>

//                 <tbody>

//                   {todayAppointments.map(
//                     (appointment) => (
//                       <tr
//                         key={appointment.time}
//                         className="
//                           border-b
//                           border-slate-100
//                           last:border-0
//                           transition
//                           hover:bg-slate-50
//                         "
//                       >

//                         <td
//                           className="
//                             px-4
//                             py-3
//                             text-[11px]
//                             font-semibold
//                             text-[#063b5c]
//                           "
//                         >
//                           {appointment.time}
//                         </td>

//                         <td className="px-4 py-3">

//                           <div className="flex items-center gap-2">

//                             <div
//                               className="
//                                 flex
//                                 h-7
//                                 w-7
//                                 items-center
//                                 justify-center
//                                 rounded-full
//                                 bg-blue-50
//                                 text-[9px]
//                                 font-bold
//                                 text-blue-600
//                               "
//                             >
//                               {appointment.patient
//                                 .split(" ")
//                                 .map(
//                                   (n) => n[0]
//                                 )
//                                 .join("")
//                                 .slice(0, 2)}
//                             </div>

//                             <span
//                               className="
//                                 text-[11px]
//                                 font-semibold
//                                 text-slate-700
//                               "
//                             >
//                               {appointment.patient}
//                             </span>

//                           </div>

//                         </td>

//                         <td className="px-4 py-3 text-[10px] text-slate-500">
//                           {appointment.doctor}
//                         </td>

//                         <td className="px-4 py-3 text-[10px] text-slate-500">
//                           {appointment.department}
//                         </td>

//                         <td className="px-4 py-3">

//                           <StatusBadge
//                             status={appointment.status}
//                           />

//                         </td>

//                       </tr>
//                     )
//                   )}

//                 </tbody>

//               </table>

//             </div>

//             {/* MOBILE */}

//             <div className="space-y-2 p-3 md:hidden">

//               {todayAppointments.map(
//                 (appointment) => (
//                   <div
//                     key={appointment.time}
//                     className="
//                       rounded-lg
//                       border
//                       border-slate-100
//                       bg-slate-50/60
//                       p-3
//                     "
//                   >

//                     <div
//                       className="
//                         flex
//                         items-start
//                         justify-between
//                       "
//                     >

//                       <div>

//                         <p className="text-xs font-semibold text-slate-800">
//                           {appointment.patient}
//                         </p>

//                         <p className="mt-1 text-[10px] text-slate-400">
//                           {appointment.doctor}
//                         </p>

//                       </div>

//                       <StatusBadge
//                         status={appointment.status}
//                       />

//                     </div>

//                     <div
//                       className="
//                         mt-2
//                         flex
//                         items-center
//                         gap-3
//                         text-[10px]
//                         text-slate-500
//                       "
//                     >

//                       <span className="flex items-center gap-1">
//                         <Clock3 size={11} />
//                         {appointment.time}
//                       </span>

//                       <span>
//                         {appointment.department}
//                       </span>

//                     </div>

//                   </div>
//                 )
//               )}

//             </div>

//           </motion.div>

//           {/* =================================================
//               RECENT ENQUIRIES
//           ================================================= */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 15,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.5,
//               delay: 0.5,
//             }}
//             className="
//               rounded-xl
//               border
//               border-slate-200
//               bg-white
//               shadow-sm
//             "
//           >

//             {/* HEADER */}

//             <div
//               className="
//                 flex
//                 items-center
//                 justify-between
//                 border-b
//                 border-slate-100
//                 px-4
//                 py-3
//               "
//             >

//               <div className="flex items-center gap-2">

//                 <div
//                   className="
//                     flex
//                     h-8
//                     w-8
//                     items-center
//                     justify-center
//                     rounded-lg
//                     bg-orange-50
//                     text-orange-600
//                   "
//                 >
//                   <Mail size={16} />
//                 </div>

//                 <div>

//                   <h3 className="text-sm font-bold text-slate-800">
//                     Recent Enquiries
//                   </h3>

//                   <p className="text-[10px] text-slate-400">
//                     Latest website enquiries
//                   </p>

//                 </div>

//               </div>

//               <span
//                 className="
//                   rounded-full
//                   bg-orange-50
//                   px-2
//                   py-1
//                   text-[9px]
//                   font-bold
//                   text-orange-600
//                 "
//               >
//                 18 New
//               </span>

//             </div>

//             {/* ENQUIRIES */}

//             <div>

//               {enquiries.map(
//                 (enquiry) => (
//                   <div
//                     key={enquiry.name}
//                     className="
//                       flex
//                       items-center
//                       gap-3
//                       border-b
//                       border-slate-100
//                       px-4
//                       py-3
//                       transition
//                       hover:bg-slate-50
//                     "
//                   >

//                     <div
//                       className="
//                         flex
//                         h-8
//                         w-8
//                         shrink-0
//                         items-center
//                         justify-center
//                         rounded-full
//                         bg-[#063b5c]/10
//                         text-[9px]
//                         font-bold
//                         text-[#063b5c]
//                       "
//                     >
//                       {enquiry.name
//                         .split(" ")
//                         .map(
//                           (n) => n[0]
//                         )
//                         .join("")
//                         .slice(0, 2)}
//                     </div>

//                     <div className="min-w-0 flex-1">

//                       <div
//                         className="
//                           flex
//                           items-center
//                           justify-between
//                           gap-2
//                         "
//                       >

//                         <p
//                           className="
//                             truncate
//                             text-[11px]
//                             font-semibold
//                             text-slate-700
//                           "
//                         >
//                           {enquiry.name}
//                         </p>

//                         <StatusBadge
//                           status={enquiry.status}
//                         />

//                       </div>

//                       <p className="truncate text-[10px] text-slate-400">
//                         {enquiry.subject}
//                       </p>

//                       <p className="mt-0.5 text-[9px] text-slate-300">
//                         {enquiry.time}
//                       </p>

//                     </div>

//                   </div>
//                 )
//               )}

//             </div>

//             {/* VIEW ALL */}

//             <div className="p-3">

//               <button
//                 className="
//                   flex
//                   w-full
//                   items-center
//                   justify-center
//                   gap-1
//                   rounded-lg
//                   border
//                   border-slate-200
//                   py-2
//                   text-[10px]
//                   font-semibold
//                   text-[#063b5c]
//                   transition
//                   duration-300
//                   hover:bg-[#063b5c]
//                   hover:text-white
//                 "
//               >
//                 View All Enquiries

//                 <ChevronRight size={13} />
//               </button>

//             </div>

//           </motion.div>

//         </div>

//         {/* =================================================
//             QUICK ACTIONS
//         ================================================= */}

//         <motion.div
//           variants={container}
//           initial="hidden"
//           animate="show"
//           className="
//             mt-4
//             grid
//             grid-cols-2
//             gap-3
//             sm:grid-cols-4
//           "
//         >

//           <QuickAction
//             icon={Stethoscope}
//             title="Add Doctor"
//             subtitle="Create doctor profile"
//             color="blue"
//           />

//           <QuickAction
//             icon={CalendarDays}
//             title="New Appointment"
//             subtitle="Schedule appointment"
//             color="emerald"
//           />

//           <QuickAction
//             icon={UserRound}
//             title="Add Patient"
//             subtitle="Register patient"
//             color="violet"
//           />

//           <QuickAction
//             icon={FileText}
//             title="Create Content"
//             subtitle="Update website"
//             color="orange"
//           />

//         </motion.div>

//       </main>

//     </div>
//   );
// };

// /* =========================================================
//    STATUS BADGE
// ========================================================= */

// const StatusBadge = ({ status }) => {

//   const styles = {
//     Confirmed:
//       "bg-emerald-50 text-emerald-600",

//     Pending:
//       "bg-amber-50 text-amber-600",

//     New:
//       "bg-blue-50 text-blue-600",

//     Resolved:
//       "bg-slate-100 text-slate-500",
//   };

//   return (
//     <span
//       className={`
//         inline-flex
//         whitespace-nowrap
//         rounded-full
//         px-2
//         py-1
//         text-[8px]
//         font-bold
//         ${styles[status] || "bg-slate-100 text-slate-500"}
//       `}
//     >
//       {status}
//     </span>
//   );
// };

// /* =========================================================
//    QUICK ACTION COMPONENT
// ========================================================= */

// const QuickAction = ({
//   icon: Icon,
//   title,
//   subtitle,
//   color,
// }) => {

//   const colors = {

//     blue:
//       "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",

//     emerald:
//       "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",

//     violet:
//       "bg-violet-50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white",

//     orange:
//       "bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
//   };

//   return (
//     <motion.button
//       variants={item}
//       whileHover={{
//         y: -3,
//       }}
//       transition={{
//         type: "spring",
//         stiffness: 300,
//         damping: 20,
//       }}
//       className="
//         group
//         flex
//         items-center
//         gap-3
//         rounded-xl
//         border
//         border-slate-200
//         bg-white
//         p-3
//         text-left
//         shadow-sm
//         transition-all
//         duration-300
//         hover:shadow-md
//       "
//     >

//       <div
//         className={`
//           flex
//           h-9
//           w-9
//           shrink-0
//           items-center
//           justify-center
//           rounded-lg
//           transition-all
//           duration-300
//           ${colors[color]}
//         `}
//       >
//         <Icon size={17} />
//       </div>

//       <div>

//         <p className="text-[11px] font-semibold text-slate-700">
//           {title}
//         </p>

//         <p className="mt-0.5 text-[9px] text-slate-400">
//           {subtitle}
//         </p>

//       </div>

//       <ChevronRight
//         size={14}
//         className="
//           ml-auto
//           text-slate-300
//           transition-all
//           duration-300
//           group-hover:translate-x-1
//           group-hover:text-slate-500
//         "
//       />

//     </motion.button>
//   );
// };

// export default Dashboardpage;