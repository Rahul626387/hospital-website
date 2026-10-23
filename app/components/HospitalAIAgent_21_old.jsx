// "use client";

// import { useEffect, useRef, useState } from "react";
// import { useRouter } from "next/navigation";
// import {
//   Bot,
//   X,
//   Send,
//   Mic,
//   ShieldCheck,
//   ChevronRight,
//   ExternalLink,
//   CalendarDays,
//   Stethoscope,
//   Building2,
//   Clock,
//   MapPin,
//   Phone,
//   Ambulance,
// } from "lucide-react";

// /* 🔌 Import your existing hooks */
// import { useDoctors } from "./../api/hooks/useDoctors";
// import { useDepartments } from "./../api/hooks/useDepartments";

// /* ---------- Safe UUID ---------- */
// function safeUUID() {
//   if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
//     return crypto.randomUUID();
//   }
//   return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
//     const r = (Math.random() * 16) | 0;
//     return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
//   });
// }

// /* ---------- Get initials (fallback) ---------- */
// function getInitials(name) {
//   return name
//     .replace(/^Dr\.?\s*/i, "")
//     .split(" ")
//     .filter(Boolean)
//     .map((w) => w[0])
//     .slice(0, 2)
//     .join("")
//     .toUpperCase();
// }

// /* ---------- Resolve image URL ---------- */
// function resolveImageUrl(url) {
//   if (!url) return "";
//   // Absolute URL → as-is
//   if (url.startsWith("http://") || url.startsWith("https://")) return url;
//   // Relative → prepend API base
//   // Agar aapke project me API_BASE env var hai to use karo
//   const API_BASE =
//     process.env.NEXT_PUBLIC_API_BASE_URL || "http://10.10.34.67:3000";
//   return `${API_BASE}${url.startsWith("/") ? "" : "/"}${url}`;
// }

// /* ---------- Smart search ---------- */
// function searchDoctors(doctors, query) {
//   const q = query.trim().toLowerCase();
//   if (!q) return doctors;

//   const byName = doctors.filter((d) => d.name.toLowerCase().includes(q));
//   if (byName.length > 0) return byName;

//   const byDept = doctors.filter((d) =>
//     d.department_name?.toLowerCase().includes(q)
//   );
//   if (byDept.length > 0) return byDept;

//   const bySpec = doctors.filter((d) =>
//     d.specialty_name?.toLowerCase().includes(q)
//   );
//   if (bySpec.length > 0) return bySpec;

//   const words = q.split(/\s+/).filter((w) => w.length > 2);
//   if (words.length > 0) {
//     return doctors.filter((d) => {
//       const hay = `${d.name} ${d.department_name} ${d.specialty_name} ${d.qualification}`.toLowerCase();
//       return words.some((w) => hay.includes(w));
//     });
//   }
//   return [];
// }

// /* ---------- Format single doctor ---------- */
// function formatDoctor(d) {
//   const exp =
//     d.web_experience ||
//     (d.experience_years ? `${d.experience_years}+ years experience` : "—");
//   return (
//     `👨‍⚕️ **${d.name}**\n` +
//     `🏥 ${d.department_name} — ${d.specialty_name}\n` +
//     `🎓 ${d.web_heading || "Consultant"}\n` +
//     `📚 ${d.qualification}\n` +
//     `⏳ ${exp}\n` +
//     `📞 ${d.contact_no}\n` +
//     `✉️ ${d.email}`
//   );
// }

// /* ---------- System Prompt ---------- */
// const SYSTEM_PROMPT = `You are the virtual assistant for Baderia Metroprime Multi Speciality Hospital, Jabalpur.
// Rules:
// 1. NEVER diagnose, prescribe, or suggest medicines.
// 2. Help with: appointments, doctors, departments, OPD timings, location, contact.
// 3. If user describes symptoms, politely suggest the relevant department and offer to book an appointment.
// 4. Emergency signs → tell them to call 112 / go to Emergency Ward immediately.
// 5. Reply in the user's language (Hindi/English/Hinglish).
// 6. Keep replies short (2-3 sentences), warm and helpful.
// 7. If the user wants to book an appointment, tell them to use the "Book Appointment" button.
// 8. Do NOT invent doctor names, phone numbers or timings — say you'll connect them to reception.`;

// /* ---------- Emergency ---------- */
// const EMERGENCY_REGEX =
//   /(chest pain|heart attack|can'?t breathe|unconscious|heavy bleeding|stroke|ambulance|सीने में दर्द|सांस नहीं|बेहोश|खून बह|एम्बुलेंस)/i;

// const EMERGENCY_REPLY =
//   "🚨 यह आपातकाल लग सकता है। कृपया तुरंत Emergency Ward जाएं या **112** पर कॉल करें।\n\nPlease call 112 or visit the Emergency Ward immediately.";

// /* ---------- Hospital info ---------- */
// const HOSPITAL = {
//   name: "Baderia Metroprime Multi Speciality Hospital, Jabalpur",
//   phone: "+91 761 000 0000",
//   address: "Jabalpur, Madhya Pradesh",
//   emergency: "112",
// };

// /* ---------- Quick Actions ---------- */
// const QUICK_ACTIONS = [
//   {
//     id: "appointment",
//     label: "Book Appointment",
//     icon: <CalendarDays size={13} />,
//     type: "chat",
//     route: "/appointment",
//     linkLabel: "Book Appointment",
//   },
//   {
//     id: "doctors",
//     label: "Our Doctors",
//     icon: <Stethoscope size={13} />,
//     type: "chat",
//     route: "/doctors",
//     linkLabel: "View Doctors",
//   },
//   {
//     id: "departments",
//     label: "Departments",
//     icon: <Building2 size={13} />,
//     type: "chat",
//     route: "/department",
//     linkLabel: "View Departments",
//   },
//   {
//     id: "timings",
//     label: "OPD Timings",
//     icon: <Clock size={13} />,
//     type: "chat",
//     route: "/contact",
//     linkLabel: "Contact & Timings",
//   },
//   {
//     id: "location",
//     label: "Location",
//     icon: <MapPin size={13} />,
//     type: "chat",
//     route: "/contact",
//     linkLabel: "Hospital Location",
//   },
//   {
//     id: "contact",
//     label: "Contact Us",
//     icon: <Phone size={13} />,
//     type: "chat",
//     route: "/contact",
//     linkLabel: "Contact Us",
//   },
//   {
//     id: "ambulance",
//     label: "Ambulance",
//     icon: <Ambulance size={13} />,
//     type: "emergency",
//     route: "/emergency",
//     linkLabel: "Emergency Page",
//     reply:
//       "🚑 Ambulance चाहिए? तुरंत **112** पर call करें या Emergency Ward जाएं।",
//     danger: true,
//   },
// ];

// /* ---------- Conversational replies ---------- */
// const CONVERSATIONAL_REPLIES = {
//   appointment:
//     "बिल्कुल! Appointment book करना बहुत आसान है। 📅\n\nबस नीचे 'Book Appointment' पर click करें — form में नाम, phone, department और preferred date भर दें। हमारी team 24 घंटे के अंदर confirm करने के लिए call करेगी।",
//   timings:
//     "🕐 हमारी OPD timings:\n• Mon–Sat: 9:00 AM – 8:00 PM\n• Sunday: 10:00 AM – 2:00 PM\n• Emergency: 24×7 open\n\nकिसी specific doctor की timing चाहिए तो बताइए, मैं check कर देता हूँ।",
//   location:
//     "📍 हम Jabalpur, Madhya Pradesh में हैं — Baderia Metroprime Multi Speciality Hospital.\n\nExact address, map और directions नीचे link पर मिलेंगे।",
//   contact:
//     "📞 Reception: +91 761 000 0000\n🚨 Emergency: 112 (24×7)\n\nCall, WhatsApp या visit — किसी भी तरह हमसे संपर्क कर सकते हैं।",
//   symptoms:
//     "🩺 कोई बात नहीं, health concern होना common है।\n\nकृपया अपने symptoms थोड़ा detail में बताइए, जैसे 'बुखार 2 दिन से', 'सिरदर्द और चक्कर'। मैं सही department suggest करूँगा।\n\n⚠️ Emergency लगे तो तुरंत 112 पर call करें।",
//   packages:
//     "💊 हमारे preventive health checkup packages:\n• Basic Health Check\n• Advanced Full Body\n• Cardiac Package\n• Women's Wellness\n\nDetails और price नीचे देख सकते हैं।",
//   insurance:
//     "🛡️ हाँ, हम cashless treatment support करते हैं — CGHS, Ayushman Bharat, Star Health, HDFC Ergo और कई insurers के साथ।\n\nExact coverage confirm करने के लिए reception से call करें।",
//   lab:
//     "🧪 Lab tests, blood reports और online report download — सब available है।\n\nReports 24-48 घंटे में ready होती हैं, WhatsApp/email पर भी मिल सकती हैं।",
//   feedback:
//     "⭐ आपका feedback हमारे लिए बहुत important है।\n\nकृपया नीचे click करके अपना experience share करें। 🙏",
// };

// /* ========== SUB-COMPONENTS ========== */

// /* 🎨 Doctor Card — with image, view details, book */
// function DoctorCard({ doctor, onView, onBook }) {
//   const imageUrl = resolveImageUrl(doctor.image_url);

//   return (
//     <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white p-2 shadow-sm transition hover:border-[#0A7A78]/40 hover:shadow-md">
//       {/* Clickable avatar + info */}
//       <button
//         type="button"
//         onClick={() => onView(doctor.id)}
//         className="flex min-w-0 flex-1 items-center gap-2.5 text-left"
//       >
//         {/* 🖼 Real image or initials fallback */}
//         <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#063B5C] to-[#0A7A78] text-[11px] font-bold text-white shadow ring-2 ring-white">
//           {imageUrl ? (
//             <img
//               src={imageUrl}
//               alt={doctor.name}
//               className="h-full w-full object-cover"
//               onError={(e) => {
//                 e.currentTarget.onerror = null;
//                 e.currentTarget.style.display = "none";
//                 e.currentTarget.parentElement.innerText = getInitials(
//                   doctor.name
//                 );
//               }}
//             />
//           ) : (
//             getInitials(doctor.name)
//           )}
//         </div>

//         {/* Info */}
//         <div className="min-w-0 flex-1">
//           <p className="truncate text-[12px] font-semibold text-slate-800">
//             {doctor.name}
//           </p>
//           <div className="mt-0.5 flex items-center gap-1.5">
//             <span className="inline-block rounded-full bg-[#0A7A78]/10 px-1.5 py-0.5 text-[9px] font-semibold text-[#063B5C]">
//               {doctor.department_name}
//             </span>
//           </div>
//           <p className="mt-0.5 truncate text-[10px] text-slate-500">
//             {doctor.specialty_name}
//             {doctor.web_experience
//               ? ` · ${doctor.web_experience}`
//               : doctor.experience_years
//               ? ` · ${doctor.experience_years}+ yrs`
//               : ""}
//           </p>
//         </div>
//       </button>

//       {/* Book button */}
//       <button
//         type="button"
//         onClick={() => onBook(doctor.id)}
//         className="shrink-0 rounded-full bg-gradient-to-r from-[#063B5C] to-[#0A7A78] px-2.5 py-1 text-[10px] font-semibold text-white transition hover:opacity-90 active:scale-95"
//       >
//         Book
//       </button>
//     </div>
//   );
// }

// /* 🎨 Department Card — with icon + click to detail */
// function DepartmentCard({ dept, onClick }) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       className="group flex items-center gap-2 rounded-xl border border-[#0A7A78]/20 bg-gradient-to-br from-[#0A7A78]/5 to-white p-2 text-left transition hover:border-[#0A7A78]/50 hover:shadow-sm active:scale-95"
//     >
//       <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#063B5C] to-[#0A7A78] text-white">
//         <Building2 size={14} />
//       </div>
//       <div className="min-w-0 flex-1">
//         <p className="line-clamp-1 text-[11px] font-semibold text-[#063B5C]">
//           {dept.name}
//         </p>
//         <p className="mt-0.5 text-[9px] text-slate-500">
//           {dept.count} doctor{dept.count !== 1 ? "s" : ""}
//         </p>
//       </div>
//     </button>
//   );
// }

// /* ========== MAIN COMPONENT ========== */
// export default function HospitalAIAgent() {
//   const router = useRouter();

//   const { doctors, error: doctorError, isLoading: doctorsLoading } = useDoctors();
//   const {
//     departments,
//     error: departmentError,
//     isLoading: departmentsLoading,
//   } = useDepartments();

//   const [open, setOpen] = useState(false);
//   const [input, setInput] = useState("");
//   const [typing, setTyping] = useState(false);
//   const [listening, setListening] = useState(false);
//   const [messages, setMessages] = useState([
//     {
//       id: "welcome",
//       role: "assistant",
//       text: "नमस्ते! 👋 Welcome to Baderia Metroprime Multi Speciality Hospital, Jabalpur. I'm your virtual assistant. आप मुझसे doctors, departments, appointments, timings या emergency के बारे में पूछ सकते हैं।",
//     },
//   ]);

//   const messagesEndRef = useRef(null);
//   const inputRef = useRef(null);
//   const recognitionRef = useRef(null);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
//   }, [messages, typing, open]);

//   useEffect(() => {
//     return () => recognitionRef.current?.abort();
//   }, []);

//   const addMessage = (msg) =>
//     setMessages((p) => [...p, { id: safeUUID(), ...msg }]);

//   /* ========== Quick Action handler ========== */
//   const handleQuickAction = (action) => {
//     if (typing) return;
//     addMessage({ role: "user", text: action.label });

//     if (action.type === "emergency") {
//       addMessage({
//         role: "assistant",
//         text: action.reply,
//         isEmergency: true,
//         link: { label: action.linkLabel, route: action.route },
//       });
//       return;
//     }

//     // ✅ Doctors chip → cards
//     if (action.id === "doctors") {
//       if (doctorsLoading) {
//         addMessage({
//           role: "assistant",
//           text: "⏳ Doctors की list load हो रही है, एक moment...",
//         });
//         return;
//       }
//       if (doctorError || !doctors || doctors.length === 0) {
//         addMessage({
//           role: "assistant",
//           text: "Doctor data load नहीं हो पाया। कृपया reception: +91 761 000 0000",
//         });
//         return;
//       }
//       addMessage({
//         role: "assistant",
//         text: `👨‍⚕️ हमारे पास कुल **${doctors.length} doctors** हैं 👇`,
//         doctors: doctors.slice(0, 5),
//         link: { label: "View All Doctors", route: "/doctors" },
//       });
//       return;
//     }

//     // ✅ Departments chip → cards with `id`
//     if (action.id === "departments") {
//       if (departmentsLoading) {
//         addMessage({
//           role: "assistant",
//           text: "⏳ Departments load हो रहे हैं, एक moment...",
//         });
//         return;
//       }
//       if (departmentError || !departments || departments.length === 0) {
//         addMessage({
//           role: "assistant",
//           text: "Departments data load नहीं हो पाया। कृपया reception: +91 761 000 0000",
//         });
//         return;
//       }

//       const deptWithCount = departments.map((d) => {
//         const name = d.name || d.department_name || d.title;
//         const count =
//           doctors?.filter(
//             (doc) =>
//               doc.department_name?.toLowerCase() === name?.toLowerCase()
//           ).length || 0;
//         return { id: d.id, name, count }; // ✅ id included
//       });

//       addMessage({
//         role: "assistant",
//         text: `🏥 हमारे hospital में कुल **${departments.length} departments** हैं 👇`,
//         departments: deptWithCount,
//         link: { label: "View Departments", route: "/department" },
//       });
//       return;
//     }

//     // ✅ Baaki chips → conversational
//     setTyping(true);
//     setTimeout(() => {
//       setTyping(false);
//       const replyText =
//         CONVERSATIONAL_REPLIES[action.id] ??
//         action.reply ??
//         "मैं आपकी कैसे मदद कर सकता हूँ?";

//       addMessage({
//         role: "assistant",
//         text: replyText,
//         link:
//           action.route && action.linkLabel
//             ? { label: action.linkLabel, route: action.route }
//             : undefined,
//       });
//     }, 700);
//   };

//   /* ========== Send message ========== */
//   const sendMessage = async (customText) => {
//     const text = (customText ?? input).trim();
//     if (!text || typing) return;
//     setInput("");

//     addMessage({ role: "user", text });

//     if (EMERGENCY_REGEX.test(text)) {
//       addMessage({
//         role: "assistant",
//         text: EMERGENCY_REPLY,
//         isEmergency: true,
//         link: { label: "Open Emergency page", route: "/emergency" },
//       });
//       return;
//     }

//     /* Doctor intent */
//     const doctorCountQuery = /(kitne|how many|total).*(doctor|डॉक्टर)/i.test(
//       text
//     );
//     const doctorQuery =
//       /(doctor|dr\.?|डॉक्टर|specialist|physician|surgeon|cardiolog|neurolog|orthoped|pediatric|gynec|gastroenterolog|ophthalmolog|oncolog|pulmonolog|dermatolog)/i.test(
//         text
//       );

//     if (doctorCountQuery) {
//       if (doctorsLoading) {
//         addMessage({
//           role: "assistant",
//           text: "⏳ Doctors की list load हो रही है, एक moment...",
//         });
//         return;
//       }
//       if (doctorError || !doctors || doctors.length === 0) {
//         addMessage({
//           role: "assistant",
//           text: "Doctor data load नहीं हो पाया। कृपया reception: +91 761 000 0000",
//         });
//         return;
//       }
//       const depts = Array.from(
//         new Set(doctors.map((d) => d.department_name).filter(Boolean))
//       );
//       addMessage({
//         role: "assistant",
//         text:
//           `हमारे hospital में कुल **${doctors.length} doctors** हैं।\n\n` +
//           `Departments: ${depts.join(", ")}\n\n` +
//           `किस department का doctor देखना चाहेंगे?`,
//         link: { label: "View All Doctors", route: "/doctors" },
//       });
//       return;
//     }

//     if (doctorQuery) {
//       if (doctorsLoading) {
//         addMessage({
//           role: "assistant",
//           text: "⏳ Doctors की list load हो रही है, एक moment...",
//         });
//         return;
//       }
//       if (doctorError || !doctors || doctors.length === 0) {
//         addMessage({
//           role: "assistant",
//           text: "Doctor data load नहीं हो पाया। कृपया reception: +91 761 000 0000",
//         });
//         return;
//       }

//       const cleaned = text
//         .replace(
//           /(doctor|dr\.?|डॉक्टर|specialist|physician|surgeon|chahiye|batao|bata|please|which|who|is|kaun|kaha|ka|ke|ki|me|mein|about|details?|info|kitne|how many|total)/gi,
//           " "
//         )
//         .replace(/\s+/g, " ")
//         .trim();

//       const matches = cleaned ? searchDoctors(doctors, cleaned) : doctors;

//       if (matches.length === 0) {
//         addMessage({
//           role: "assistant",
//           text: `😔 आपके query से कोई doctor नहीं मिला। कृपया department बताएं (जैसे Cardiology, Gynecology) या reception: +91 761 000 0000`,
//           link: { label: "View All Doctors", route: "/doctors" },
//         });
//         return;
//       }

//       if (matches.length === 1) {
//         addMessage({
//           role: "assistant",
//           text:
//             formatDoctor(matches[0]) +
//             `\n\nAppointment book करने के लिए नीचे click करें 👇`,
//           doctors: [matches[0]],
//           link: {
//             label: "Book Appointment",
//             route: `/appointment?doctor=${matches[0].id}`,
//           },
//         });
//         return;
//       }

//       addMessage({
//         role: "assistant",
//         text: `मुझे **${matches.length} doctors** मिले 👇`,
//         doctors: matches.slice(0, 5),
//         link: { label: "View All Doctors", route: "/doctors" },
//       });
//       return;
//     }

//     /* Booking */
//     const wantsBooking =
//       /(book|appointment|अपॉइंटमेंट|milna|consult|doctor se milna)/i.test(text);
//     if (wantsBooking && !/cancel/i.test(text)) {
//       setTyping(true);
//       setTimeout(() => {
//         setTyping(false);
//         addMessage({
//           role: "assistant",
//           text: "बिल्कुल! Appointment book करने के लिए नीचे button पर click करें। 📅 हमारी team आपको confirm करने के लिए call करेगी।",
//           link: { label: "Book Appointment", route: "/appointment" },
//         });
//       }, 600);
//       return;
//     }

//     /* LLM */
//     setTyping(true);
//     try {
//       const history = messages
//         .filter((m) => !m.isEmergency)
//         .slice(-6)
//         .map((m) => ({ role: m.role, content: m.text }));

//       const res = await fetch("https://text.pollinations.ai/openai", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           model: "openai",
//           messages: [
//             { role: "system", content: SYSTEM_PROMPT },
//             ...history,
//             { role: "user", content: text },
//           ],
//         }),
//       });

//       if (!res.ok) throw new Error("API error");
//       const data = await res.json();
//       const reply =
//         data?.choices?.[0]?.message?.content ??
//         "क्षमा करें, मैं समझ नहीं पाया। कृपया reception से संपर्क करें।";

//       const lower = text.toLowerCase();
//       let link;
//       if (/doctor|डॉक्टर|specialist|physician/.test(lower))
//         link = { label: "View Doctors", route: "/doctors" };
//       else if (/department|विभाग|cardiology|neurology|orthopedic/.test(lower))
//         link = { label: "View Departments", route: "/department" };
//       else if (/timing|opd|समय|hours/.test(lower))
//         link = { label: "OPD Timings & Contact", route: "/contact" };
//       else if (/location|address|पता|direction|map/.test(lower))
//         link = { label: "Hospital Location", route: "/contact" };
//       else if (/contact|phone|call|number|संपर्क/.test(lower))
//         link = { label: "Contact Us", route: "/contact" };

//       addMessage({ role: "assistant", text: reply, link });
//     } catch {
//       addMessage({
//         role: "assistant",
//         text: "कुछ गड़बड़ हुई। कृपया बाद में प्रयास करें या reception से संपर्क करें।",
//       });
//     } finally {
//       setTyping(false);
//     }
//   };

//   /* ========== Voice ========== */
//   const startVoice = () => {
//     if (typeof window === "undefined") return;
//     const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (!SR) {
//       addMessage({
//         role: "assistant",
//         text: "Voice input इस browser में supported नहीं है। कृपया Chrome use करें या type करें।",
//       });
//       return;
//     }
//     if (listening) {
//       recognitionRef.current?.stop();
//       setListening(false);
//       return;
//     }
//     recognitionRef.current?.abort();
//     const rec = new SR();
//     rec.lang = "hi-IN";
//     rec.interimResults = false;
//     rec.continuous = false;
//     rec.onstart = () => setListening(true);
//     rec.onend = () => setListening(false);
//     rec.onerror = () => setListening(false);
//     rec.onresult = (e) => setInput(e.results[0][0].transcript);
//     recognitionRef.current = rec;
//     try {
//       rec.start();
//     } catch {
//       setListening(false);
//     }
//   };

//   return (
//     <>
//       {!open && (
//         <button
//           type="button"
//           onClick={() => setOpen(true)}
//           aria-label="Open Hospital AI Assistant"
//           className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#063B5C] to-[#0A7A78] text-white shadow-[0_10px_30px_-5px_rgba(10,122,120,0.6)] transition hover:scale-105 active:scale-95"
//         >
//           <span className="absolute inset-0 animate-ping rounded-full bg-[#0A7A78]/40" />
//           <Bot size={28} strokeWidth={1.8} className="relative z-10" />
//           <span className="absolute right-1 top-1 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
//         </button>
//       )}

//       {open && (
//         <section
//           role="dialog"
//           aria-label="Baderia Metroprime Hospital Assistant"
//           className="fixed bottom-4 right-4 z-50 flex h-[640px] max-h-[calc(100vh-2rem)] w-[400px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl"
//         >
//           <header className="flex items-center gap-3 bg-gradient-to-r from-[#063B5C] to-[#0A7A78] px-4 py-4 text-white">
//             <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur">
//               <Bot size={24} />
//               <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#0A7A78] bg-green-400" />
//             </div>
//             <div className="flex-1 min-w-0">
//               <h3 className="text-[13px] font-semibold leading-tight">
//                 Baderia Metroprime Multi Speciality Hospital
//               </h3>
//               <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-teal-100">
//                 <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
//                 Jabalpur · AI help desk · Online
//               </div>
//             </div>
//             <button
//               type="button"
//               onClick={() => {
//                 recognitionRef.current?.abort();
//                 setListening(false);
//                 setOpen(false);
//               }}
//               aria-label="Close chat"
//               className="rounded-full p-1.5 transition hover:bg-white/20"
//             >
//               <X size={20} />
//             </button>
//           </header>

//           <div className="flex-1 space-y-3 overflow-y-auto px-3 py-3">
//             {messages.map((m) => (
//               <div key={m.id}>
//                 <div
//                   className={`flex items-end gap-2 ${
//                     m.role === "user" ? "justify-end" : "justify-start"
//                   }`}
//                 >
//                   {m.role === "assistant" && (
//                     <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0A7A78]/10 text-[#063B5C]">
//                       <Bot size={14} />
//                     </div>
//                   )}
//                   <div
//                     className={`max-w-[78%] whitespace-pre-wrap rounded-2xl px-3.5 py-2 text-[13px] leading-relaxed ${
//                       m.role === "user"
//                         ? "rounded-br-md bg-gradient-to-r from-[#063B5C] to-[#0A7A78] text-white"
//                         : m.isEmergency
//                         ? "rounded-bl-md border border-red-200 bg-red-50 text-red-800"
//                         : "rounded-bl-md bg-slate-100 text-slate-800"
//                     }`}
//                   >
//                     {m.isEmergency && (
//                       <div className="mb-1 font-bold">⚠️ Emergency</div>
//                     )}
//                     {m.text}
//                   </div>
//                 </div>

//                 {/* 🎨 Doctor Cards with image + click to /doctors/[id] */}
//                 {m.doctors && m.doctors.length > 0 && (
//                   <div className="ml-9 mt-2 space-y-2">
//                     {m.doctors.map((d) => (
//                       <DoctorCard
//                         key={d.id}
//                         doctor={d}
//                         onView={(id) => router.push(`/doctors/${id}`)}
//                         onBook={(id) =>
//                           router.push(`/appointment?doctor=${id}`)
//                         }
//                       />
//                     ))}
//                   </div>
//                 )}

//                 {/* 🎨 Department Cards with click to /department/[id] */}
//                 {m.departments && m.departments.length > 0 && (
//                   <div className="ml-9 mt-2 grid grid-cols-2 gap-2">
//                     {m.departments.map((dept, i) => (
//                       <DepartmentCard
//                         key={dept.id || i}
//                         dept={dept}
//                         onClick={() =>
//                           dept.id
//                             ? router.push(`/department/${dept.id}`)
//                             : router.push("/department")
//                         }
//                       />
//                     ))}
//                   </div>
//                 )}

//                 {m.link && (
//                   <div className="ml-9 mt-2">
//                     <button
//                       type="button"
//                       onClick={() => router.push(m.link.route)}
//                       className="inline-flex items-center gap-1.5 rounded-full border border-[#0A7A78]/30 bg-[#0A7A78]/10 px-3 py-1.5 text-[11px] font-medium text-[#063B5C] transition hover:bg-[#0A7A78]/20"
//                     >
//                       <ExternalLink size={12} />
//                       {m.link.label}
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ))}

//             {typing && (
//               <div className="flex items-end gap-2">
//                 <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0A7A78]/10 text-[#063B5C]">
//                   <Bot size={14} />
//                 </div>
//                 <div className="flex gap-1 rounded-2xl rounded-bl-md bg-slate-100 px-3 py-2.5">
//                   <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.3s]" />
//                   <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.15s]" />
//                   <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" />
//                 </div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           {messages.length > 1 && !typing && (
//             <div className="border-t border-slate-100 bg-white px-2 pt-1.5">
//               <p className="mb-1 px-1 text-[10px] font-medium text-slate-400">
//                 You can also ask:
//               </p>
//               <div className="flex gap-1.5 overflow-x-auto pb-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//                 {[
//                   { label: "OPD Timings", id: "timings" },
//                   { label: "Location", id: "location" },
//                   { label: "Contact Us", id: "contact" },
//                   { label: "Our Doctors", id: "doctors" },
//                 ].map((s) => {
//                   const action = QUICK_ACTIONS.find((a) => a.id === s.id);
//                   if (!action) return null;
//                   return (
//                     <button
//                       key={s.id}
//                       type="button"
//                       onClick={() => handleQuickAction(action)}
//                       className="shrink-0 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10px] text-slate-600 transition hover:border-[#0A7A78]/40 hover:text-[#063B5C]"
//                     >
//                       {s.label}
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           )}

//           <div className="border-t border-slate-100 bg-white px-2 pt-2">
//             <p className="mb-1.5 px-1 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
//               Quick Help
//             </p>
//             <div className="flex gap-1.5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//               {QUICK_ACTIONS.map((a) => (
//                 <button
//                   key={a.id}
//                   type="button"
//                   disabled={typing}
//                   onClick={() => handleQuickAction(a)}
//                   className={`flex shrink-0 items-center gap-1 rounded-full border px-2.5 py-1.5 text-[11px] font-medium transition disabled:opacity-50 ${
//                     a.danger || a.type === "emergency"
//                       ? "border-red-200 bg-red-50 text-red-700 hover:bg-red-100"
//                       : "border-[#0A7A78]/30 bg-[#0A7A78]/5 text-[#063B5C] hover:bg-[#0A7A78]/15"
//                   }`}
//                 >
//                   {a.icon}
//                   {a.label}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="mx-3 mb-2 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-[11px] text-red-700">
//             <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
//               !
//             </span>
//             <span className="flex-1">
//               <strong className="font-semibold">Medical emergency?</strong> Call{" "}
//               {HOSPITAL.emergency} now.
//             </span>
//             <button
//               type="button"
//               onClick={() => router.push("/emergency")}
//               aria-label="Open emergency page"
//               className="rounded-full p-1 transition hover:bg-red-100"
//             >
//               <ChevronRight size={16} />
//             </button>
//           </div>

//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               sendMessage();
//             }}
//             className="flex items-center gap-2 border-t border-slate-100 bg-white px-3 py-2.5"
//           >
//             <button
//               type="button"
//               onClick={startVoice}
//               title="Voice input"
//               aria-label="Use voice input"
//               className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
//                 listening
//                   ? "animate-pulse bg-red-100 text-red-600"
//                   : "bg-slate-100 text-slate-600 hover:bg-slate-200"
//               }`}
//             >
//               <Mic size={16} />
//             </button>
//             <input
//               ref={inputRef}
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder={listening ? "Listening..." : "Ask me anything..."}
//               aria-label="Type your message"
//               autoComplete="off"
//               className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-[13px] text-slate-700 placeholder:text-slate-400 focus:border-[#0A7A78] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0A7A78]/20"
//             />
//             <button
//               type="submit"
//               disabled={!input.trim() || typing}
//               aria-label="Send message"
//               className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#063B5C] to-[#0A7A78] text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
//             >
//               <Send size={15} />
//             </button>
//           </form>

//           <div className="flex items-center justify-center gap-1.5 border-t border-slate-100 bg-slate-50 px-3 py-1.5 text-[10px] text-slate-400">
//             <ShieldCheck size={12} />
//             AI assistant · Not a substitute for medical advice
//           </div>
//         </section>
//       )}
//     </>
//   );
// }





"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Bot,
  X,
  Send,
  Mic,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  CalendarDays,
  Stethoscope,
  Building2,
  Clock,
  MapPin,
  Phone,
  Ambulance,
  Sparkles,
  ArrowUpRight,
  MessageCircle,
  HeartPulse,
  Search,
  UserRound,
  RotateCcw,
  Zap,
  Check,
} from "lucide-react";

import { useDoctors } from "./../api/hooks/useDoctors";
import { useDepartments } from "./../api/hooks/useDepartments";
import { AnimatePresence, motion } from "framer-motion";

/* ================= CONFIG ================= */

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://10.10.34.67:3000";

const HOSPITAL = {
  name: "Baderia Metroprime",
  fullName: "Baderia Metroprime Multi Speciality Hospital",
  phone: "+91 761 000 0000",
  emergency: "112",
};

const SYSTEM_PROMPT = `
You are the virtual assistant for Baderia Metroprime Multi Speciality Hospital, Jabalpur.

Rules:
1. Never diagnose, prescribe or recommend medicines.
2. Help with doctors, departments, appointments, OPD timings, location and contact.
3. For symptoms, provide general department guidance without diagnosing.
4. For possible emergencies, advise immediate emergency care and calling 112.
5. Reply in the user's language: Hindi, English or Hinglish.
6. Keep replies concise, warm and professional.
7. Direct appointment booking to the hospital's appointment page.
8. Never invent doctor names, contact numbers, timings, prices or services.
9. If verified hospital information is unavailable, recommend contacting reception.
10. Do not claim real-time availability unless verified by hospital data.
`;

const EMERGENCY_REGEX =
  /(chest pain|heart attack|can't breathe|cannot breathe|difficulty breathing|unconscious|heavy bleeding|stroke|severe allergic reaction|सीने में दर्द|सांस नहीं|साँस नहीं|सांस लेने में परेशानी|बेहोश|खून बह|एम्बुलेंस)/i;

const EMERGENCY_REPLY =
  "यह medical emergency हो सकती है। कृपया तुरंत नज़दीकी Emergency Department जाएँ या भारत में 112 पर कॉल करें। अगर सांस लेने में परेशानी, बेहोशी या सीने में तेज दर्द है, तो AI reply का इंतज़ार न करें।";

const QUICK_ACTIONS = [
  {
    id: "doctors",
    label: "Find a Doctor",
    icon: Stethoscope,
    prompt: "Show me the available doctors",
  },
  {
    id: "appointment",
    label: "Book Appointment",
    icon: CalendarDays,
    prompt: "I want to book an appointment",
  },
  {
    id: "departments",
    label: "Departments",
    icon: Building2,
    prompt: "Show me hospital departments",
  },
  {
    id: "timings",
    label: "OPD Timings",
    icon: Clock,
    prompt: "Tell me about OPD timings",
  },
  {
    id: "location",
    label: "Location",
    icon: MapPin,
    prompt: "Where is the hospital located?",
  },
  {
    id: "contact",
    label: "Contact Reception",
    icon: Phone,
    prompt: "How can I contact the hospital?",
  },
  {
    id: "emergency",
    label: "Emergency",
    icon: Ambulance,
    prompt: "How do I contact emergency services?",
    danger: true,
  },
];

const SUGGESTIONS = [
  {
    icon: Stethoscope,
    title: "Find a specialist",
    subtitle: "Explore our doctors",
    prompt: "Show me the available doctors",
  },
  {
    icon: CalendarDays,
    title: "Book an appointment",
    subtitle: "Schedule a consultation",
    prompt: "I want to book an appointment",
  },
  {
    icon: Building2,
    title: "Explore departments",
    subtitle: "Find the right department",
    prompt: "Show me hospital departments",
  },
  {
    icon: Clock,
    title: "OPD timings",
    subtitle: "Plan your hospital visit",
    prompt: "Tell me about OPD timings",
  },
];

function safeUUID() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function resolveImageUrl(url) {
  if (!url) return "";
  if (/^https?:\/\//i.test(url)) return url;
  return `${API_BASE}${url.startsWith("/") ? "" : "/"}${url}`;
}

function getInitials(name = "") {
  return name
    .replace(/^Dr\.?\s*/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

function searchDoctors(doctors = [], query = "") {
  const q = query.trim().toLowerCase();
  if (!q) return doctors;

  const exactMatches = doctors.filter((doctor) =>
    [
      doctor.name,
      doctor.department_name,
      doctor.specialty_name,
      doctor.qualification,
    ].some((value) => value?.toLowerCase().includes(q))
  );

  if (exactMatches.length) return exactMatches;

  const words = q.split(/\s+/).filter((word) => word.length > 2);

  return doctors.filter((doctor) => {
    const haystack = [
      doctor.name,
      doctor.department_name,
      doctor.specialty_name,
      doctor.qualification,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return words.some((word) => haystack.includes(word));
  });
}

/* ================= DOCTOR CARD ================= */

function DoctorCard({ doctor, onView, onBook }) {
  const [imageFailed, setImageFailed] = useState(false);
  const image = resolveImageUrl(doctor.image_url);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="group rounded-2xl border border-slate-200/80 bg-white p-3 transition-all duration-300 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-900/5"
    >
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onView(doctor.id)}
          className="flex min-w-0 flex-1 items-center gap-3 text-left"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#063B5C] to-[#0A7A78] text-sm font-bold text-white">
            {image && !imageFailed ? (
              <img
                src={image}
                alt={doctor.name}
                loading="lazy"
                className="h-full w-full object-cover"
                onError={() => setImageFailed(true)}
              />
            ) : (
              getInitials(doctor.name)
            )}
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-[13px] font-bold text-slate-800">
              {doctor.name}
            </p>
            <p className="mt-1 truncate text-[11px] font-medium text-teal-700">
              {doctor.department_name || "Medical Specialist"}
            </p>
            <p className="mt-1 truncate text-[10px] text-slate-500">
              {doctor.specialty_name || doctor.qualification || "Consultant"}
            </p>
          </div>

          <ChevronRight
            size={16}
            className="shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-teal-600"
          />
        </button>

        <button
          type="button"
          onClick={() => onBook(doctor.id)}
          className="shrink-0 rounded-xl bg-[#063B5C] px-3 py-2 text-[10px] font-bold text-white transition hover:bg-[#0A7A78]"
        >
          Book
        </button>
      </div>
    </motion.div>
  );
}

/* ================= DEPARTMENT CARD ================= */

function DepartmentCard({ dept, onClick }) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      onClick={onClick}
      className="rounded-2xl border border-slate-200 bg-white p-3 text-left transition hover:border-teal-300 hover:shadow-md"
    >
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
        <Building2 size={17} />
      </div>

      <p className="line-clamp-2 text-xs font-bold text-slate-800">
        {dept.name}
      </p>

      <p className="mt-1.5 text-[10px] text-slate-500">
        {dept.count} {dept.count === 1 ? "doctor" : "doctors"}
      </p>
    </motion.button>
  );
}

/* ================= MESSAGE BUBBLE ================= */

function MessageBubble({ message, router, doctorsLoading = false }) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex gap-2.5 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#063B5C] to-[#0A7A78] text-white shadow-sm">
          <Bot size={16} />
        </div>
      )}

      <div
        className={`min-w-0 max-w-[86%] sm:max-w-[83%] ${
          isUser ? "items-end" : "items-start"
        } flex flex-col`}
      >
        {!isUser && (
          <span className="mb-1 ml-1 text-[10px] font-bold text-slate-500">
            Metro AI
          </span>
        )}

        <div
          className={`whitespace-pre-wrap break-words rounded-2xl px-3.5 py-3 text-[12px] leading-[1.8] ${
            isUser
              ? "rounded-br-md bg-gradient-to-br from-[#063B5C] to-[#0A7A78] text-white shadow-sm"
              : message.isEmergency
              ? "rounded-bl-md border border-red-200 bg-red-50 text-red-800"
              : "rounded-bl-md border border-slate-100 bg-white text-slate-700 shadow-sm"
          }`}
        >
          {message.isEmergency && (
            <p className="mb-1 font-bold text-red-700">
              Emergency assistance
            </p>
          )}

          {message.text}

          {message.isEmergency && (
            <button
              type="button"
              onClick={() => router.push("/emergency")}
              className="mt-2 flex items-center gap-1 rounded-lg bg-red-600 px-3 py-2 text-[11px] font-bold text-white"
            >
              Emergency Information <ArrowUpRight size={13} />
            </button>
          )}
        </div>

        {message.doctors?.length > 0 && (
          <div className="mt-2 w-full space-y-2">
            {message.doctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                onView={(id) => router.push(`/doctors/${id}`)}
                onBook={(id) => router.push(`/appointment?doctor=${id}`)}
              />
            ))}
          </div>
        )}

        {message.departments?.length > 0 && (
          <div className="mt-2 grid w-full grid-cols-2 gap-2">
            {message.departments.map((dept, index) => (
              <DepartmentCard
                key={dept.id || index}
                dept={dept}
                onClick={() =>
                  dept.id
                    ? router.push(`/department/${dept.id}`)
                    : router.push("/department")
                }
              />
            ))}
          </div>
        )}

        {message.link && (
          <button
            type="button"
            onClick={() => router.push(message.link.route)}
            className="mt-2 inline-flex items-center gap-2 rounded-xl border border-teal-200 bg-teal-50 px-3.5 py-2 text-[11px] font-bold text-[#063B5C] transition hover:bg-teal-100"
          >
            {message.link.label}
            <ArrowUpRight size={13} />
          </button>
        )}

        {message.time && (
          <span className="mt-1 px-1 text-[9px] text-slate-400">
            {message.time}
          </span>
        )}
      </div>
    </motion.div>
  );
}

/* ================= MAIN COMPONENT ================= */

export default function HospitalAIAgent() {
  const router = useRouter();

  const {
    doctors = [],
    error: doctorError,
    isLoading: doctorsLoading,
  } = useDoctors();

  const {
    departments = [],
    error: departmentError,
    isLoading: departmentsLoading,
  } = useDepartments();

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [listening, setListening] = useState(false);
  const [greeting, setGreeting] = useState("Hello");
  const [showSuggestions, setShowSuggestions] = useState(true);

  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const recognitionRef = useRef(null);
  const typingRef = useRef(false);
  const messagesRef = useRef([]);

  useEffect(() => {
    setGreeting(getGreeting());

    setMessages([
      {
        id: "welcome",
        role: "assistant",
        text: "Welcome to Baderia Metroprime Multi Speciality Hospital! मैं आपकी doctors खोजने, appointments और hospital information में मदद कर सकता हूँ। आज आपको किस तरह की सहायता चाहिए?",
        time: new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
  }, []);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    typingRef.current = typing;
  }, [typing]);

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages, typing, open]);

  useEffect(() => {
    return () => recognitionRef.current?.abort();
  }, []);

  const addMessage = useCallback((message) => {
    const newMessage = {
      id: safeUUID(),
      time: new Date().toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      ...message,
    };

    setMessages((previous) => [...previous, newMessage]);
    return newMessage;
  }, []);

  const setBusy = (value) => {
    typingRef.current = value;
    setTyping(value);
  };

  /* ================= QUICK ACTIONS ================= */

  const handleQuickAction = (action) => {
    if (typingRef.current) return;

    if (action.id === "emergency") {
      addMessage({ role: "user", text: action.label });
      addMessage({
        role: "assistant",
        text: EMERGENCY_REPLY,
        isEmergency: true,
      });
      return;
    }

    if (action.id === "doctors") {
      addMessage({ role: "user", text: action.label });

      if (doctorsLoading) {
        addMessage({
          role: "assistant",
          text: "Doctors की list load हो रही है। कृपया कुछ देर प्रतीक्षा करें।",
        });
        return;
      }

      if (doctorError || !doctors.length) {
        addMessage({
          role: "assistant",
          text: "Doctors की list अभी उपलब्ध नहीं है। कृपया hospital reception से संपर्क करें।",
          link: { label: "View Doctors", route: "/doctors" },
        });
        return;
      }

      addMessage({
        role: "assistant",
        text: `आपके लिए हमारे ${doctors.length} doctors की list में से कुछ विकल्प यहाँ हैं।`,
        doctors: doctors.slice(0, 5),
        link: { label: "View All Doctors", route: "/doctors" },
      });
      return;
    }

    if (action.id === "departments") {
      addMessage({ role: "user", text: action.label });

      if (departmentsLoading) {
        addMessage({
          role: "assistant",
          text: "Departments की list load हो रही है। कृपया कुछ देर प्रतीक्षा करें।",
        });
        return;
      }

      if (departmentError || !departments.length) {
        addMessage({
          role: "assistant",
          text: "Departments की list अभी उपलब्ध नहीं है।",
          link: { label: "View Departments", route: "/department" },
        });
        return;
      }

      const items = departments.map((dept) => {
        const name = dept.name || dept.department_name || dept.title;

        const count = doctors.filter(
          (doctor) =>
            doctor.department_name?.toLowerCase() === name?.toLowerCase()
        ).length;

        return { id: dept.id, name, count };
      });

      addMessage({
        role: "assistant",
        text: `हमारे hospital में ${items.length} departments हैं। अपना department चुनें।`,
        departments: items,
        link: { label: "View All Departments", route: "/department" },
      });
      return;
    }

    sendMessage(action.prompt);
  };

  /* ================= SEND MESSAGE ================= */

  const sendMessage = async (customText) => {
    const text = (customText ?? input).trim();

    if (!text || typingRef.current) return;

    setInput("");
    setShowSuggestions(false);

    const userMessage = {
      id: safeUUID(),
      role: "user",
      text,
      time: new Date().toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const currentHistory = [...messagesRef.current, userMessage];

    setMessages(currentHistory);
    messagesRef.current = currentHistory;

    if (EMERGENCY_REGEX.test(text)) {
      addMessage({
        role: "assistant",
        text: EMERGENCY_REPLY,
        isEmergency: true,
      });
      return;
    }

    const normalized = text.toLowerCase();

    /* Doctor count */

    const countQuery =
      /(how many|total|kitne|कितने|कितनी).{0,35}(doctor|डॉक्टर)/i.test(
        text
      );

    const doctorQuery =
      /(doctor|dr\.?|डॉक्टर|specialist|physician|surgeon|cardiolog|neurolog|orthoped|pediatric|gynec|gastro|ophthalm|oncolog|pulmonolog|dermatolog|हृदय रोग|हड्डी|त्वचा रोग)/i.test(
        text
      );

    if (countQuery || doctorQuery) {
      if (doctorsLoading) {
        addMessage({
          role: "assistant",
          text: "Doctors की list load हो रही है। कृपया कुछ देर प्रतीक्षा करें।",
        });
        return;
      }

      if (doctorError || !doctors.length) {
        addMessage({
          role: "assistant",
          text: "Doctor information अभी उपलब्ध नहीं है। कृपया reception से संपर्क करें।",
        });
        return;
      }

      if (countQuery) {
        const departmentNames = [
          ...new Set(
            doctors.map((doctor) => doctor.department_name).filter(Boolean)
          ),
        ];

        addMessage({
          role: "assistant",
          text: `हमारे उपलब्ध doctor records की कुल संख्या ${doctors.length} है। Departments: ${departmentNames.join(", ") || "अभी उपलब्ध नहीं"}।`,
          link: { label: "View All Doctors", route: "/doctors" },
        });
        return;
      }

      const cleaned = text
        .replace(
          /\b(show|find|list|doctor|doctors|dr\.?|specialist|physician|surgeon|please|which|who|is|are|the|for|me|in|of|available|details|about|chahiye|batao|bata|dikhao|koi|kaun|se|hai|hain|mujhe)\b/gi,
          " "
        )
        .replace(/डॉक्टर|दिखाओ|बताओ|चाहिए/g, " ")
        .replace(/\s+/g, " ")
        .trim();

      const matches = cleaned
        ? searchDoctors(doctors, cleaned)
        : doctors;

      if (!matches.length) {
        addMessage({
          role: "assistant",
          text: "इस query से matching doctor नहीं मिला। आप किसी दूसरे नाम या department से खोज सकते हैं।",
          link: { label: "View All Doctors", route: "/doctors" },
        });
        return;
      }

      addMessage({
        role: "assistant",
        text:
          matches.length === 1
            ? "यह doctor आपके लिए मिला है। Appointment के लिए Book पर click करें।"
            : `${matches.length} matching doctors मिले। अपनी पसंद चुनें।`,
        doctors: matches.slice(0, 5),
        link: { label: "View All Doctors", route: "/doctors" },
      });
      return;
    }

    /* Booking */

    if (
      /(book|appointment|अपॉइंटमेंट|अपॉइंटमेन्ट|मिलना है|consultation|schedule a visit)/i.test(
        text
      ) &&
      !/(cancel|रद्द)/i.test(text)
    ) {
      addMessage({
        role: "assistant",
        text: "बिल्कुल! Appointment request शुरू करने के लिए नीचे button पर click करें। अपनी details और preferred date भरें।",
        link: { label: "Book Appointment", route: "/appointment" },
      });
      return;
    }

    /* Local information */

    if (/(department|विभाग|departments)/i.test(text)) {
      handleQuickAction(QUICK_ACTIONS.find((item) => item.id === "departments"));
      return;
    }

    if (/(timing|opd|समय|कब खुल|कब तक खुल)/i.test(text)) {
      addMessage({
        role: "assistant",
        text: "OPD timings doctor और department के अनुसार अलग हो सकती हैं। सही और updated schedule के लिए कृपया hospital reception से पुष्टि करें।",
        link: { label: "Contact & Timings", route: "/contact" },
      });
      return;
    }

    if (/(location|address|पता|direction|map|कहाँ है|कहां है)/i.test(text)) {
      addMessage({
        role: "assistant",
        text: "Baderia Metroprime Multi Speciality Hospital, Jabalpur में स्थित है। Exact address और directions के लिए contact page देखें।",
        link: { label: "Hospital Location", route: "/contact" },
      });
      return;
    }

    if (/(contact|phone|call|number|संपर्क|फोन)/i.test(text)) {
      addMessage({
        role: "assistant",
        text: "Hospital reception से संपर्क करने के लिए contact page पर verified contact details देखें। Emergency में 112 पर call करें।",
        link: { label: "Contact Reception", route: "/contact" },
      });
      return;
    }

    /* AI API */

    setBusy(true);

    try {
      const history = currentHistory
        .slice(-8)
        .map((message) => ({
          role: message.role,
          content: message.text,
        }));

      const response = await fetch("https://text.pollinations.ai/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "openai",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...history,
          ],
        }),
      });

      if (!response.ok) throw new Error("AI request failed");

      const data = await response.json();

      const reply =
        data?.choices?.[0]?.message?.content ||
        "क्षमा करें, मैं अभी उत्तर नहीं दे पाया। कृपया reception से संपर्क करें।";

      const replyIsEmergency = EMERGENCY_REGEX.test(reply);

      let link;

      if (/(doctor|डॉक्टर|specialist)/i.test(normalized)) {
        link = { label: "View Doctors", route: "/doctors" };
      } else if (/(appointment|अपॉइंटमेंट)/i.test(normalized)) {
        link = { label: "Book Appointment", route: "/appointment" };
      } else if (/(department|विभाग)/i.test(normalized)) {
        link = { label: "View Departments", route: "/department" };
      } else if (/(contact|phone|call|संपर्क)/i.test(normalized)) {
        link = { label: "Contact Us", route: "/contact" };
      }

      addMessage({
        role: "assistant",
        text: replyIsEmergency ? EMERGENCY_REPLY : reply,
        isEmergency: replyIsEmergency,
        link: replyIsEmergency ? undefined : link,
      });
    } catch (error) {
      addMessage({
        role: "assistant",
        text: "माफ़ कीजिए, AI service अभी उपलब्ध नहीं है। आप नीचे दिए गए quick actions से doctors, appointments या hospital contact information देख सकते हैं।",
        link: { label: "Contact Hospital", route: "/contact" },
      });
    } finally {
      setBusy(false);
    }
  };

  /* ================= VOICE ================= */

  const startVoice = () => {
    if (typeof window === "undefined") return;

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      addMessage({
        role: "assistant",
        text: "Voice input इस browser में supported नहीं है। कृपया Chrome में प्रयास करें या अपना सवाल type करें।",
      });
      return;
    }

    if (listening) {
      recognitionRef.current?.stop();
      setListening(false);
      return;
    }

    recognitionRef.current?.abort();

    const recognition = new SpeechRecognition();

    recognition.lang = "hi-IN";
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    recognition.onerror = () => setListening(false);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      inputRef.current?.focus();
    };

    recognitionRef.current = recognition;

    try {
      recognition.start();
    } catch {
      setListening(false);
    }
  };

  /* ================= UI ================= */

  return (
    <>
      {/* FLOATING AI BUTTON */}

      {/* <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ opacity: 0, scale: 0.65, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            type="button"
            onClick={() => {
              setOpen(true);
              setTimeout(() => inputRef.current?.focus(), 250);
            }}
            aria-label="Open hospital AI assistant"
            className="fixed bottom-5 right-5 z-50 flex h-[62px] w-[62px] items-center justify-center rounded-[22px] bg-gradient-to-br from-[#063B5C] via-[#07566B] to-[#0A7A78] text-white shadow-[0_12px_35px_-8px_rgba(6,59,92,0.65)] sm:bottom-7 sm:right-7"
          >
            <span className="absolute inset-0 rounded-[22px] bg-teal-300/20 animate-pulse" />
            <Bot size={29} className="relative z-10" />
            <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full border-[3px] border-white bg-emerald-500" />
          </motion.button>
        )}
      </AnimatePresence> */}

      <AnimatePresence>
  {!open && (
    <motion.button
      initial={{ opacity: 0, scale: 0.65, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.7 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      type="button"
      onClick={() => {
        setOpen(true);
        setTimeout(() => inputRef.current?.focus(), 250);
      }}
      aria-label="Open hospital AI assistant"
      className="fixed bottom-5 right-5 z-50 flex h-[62px] w-[62px] items-center justify-center rounded-full bg-gradient-to-br from-[#063B5C] via-[#07566B] to-[#0A7A78] text-white shadow-[0_12px_35px_-8px_rgba(6,59,92,0.65)] sm:bottom-7 sm:right-7"
    >
      <span className="absolute inset-0 animate-pulse rounded-full bg-teal-300/20" />

      <Bot size={29} className="relative z-10" />

      <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full border-[3px] border-white bg-emerald-500" />
    </motion.button>
  )}
</AnimatePresence>s

      {/* CHAT WINDOW */}

      <AnimatePresence>
        {open && (
          <motion.section
            initial={{ opacity: 0, y: 25, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.22 }}
            role="dialog"
            aria-modal="false"
            aria-label="Hospital AI Assistant"
            className="fixed inset-0 z-[100] flex h-[100dvh] w-full flex-col overflow-hidden bg-[#F7FAFC] sm:inset-auto sm:bottom-5 sm:right-5 sm:h-[min(720px,calc(100dvh-40px))] sm:w-[420px] sm:rounded-[28px] sm:border sm:border-slate-200/80 sm:shadow-[0_25px_100px_-20px_rgba(6,59,92,0.35)]"
          >
            {/* HEADER */}

            <header className="relative shrink-0 overflow-hidden bg-gradient-to-br from-[#052D49] via-[#063B5C] to-[#087A78] px-4 pb-5 pt-4 text-white">
              <div className="pointer-events-none absolute -right-12 -top-20 h-48 w-48 rounded-full border border-white/10" />
              <div className="pointer-events-none absolute -right-5 -top-12 h-32 w-32 rounded-full border border-white/10" />

              <div className="relative flex items-center gap-3">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-inner">
                  <Bot size={26} />
                  <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-[3px] border-[#087A78] bg-emerald-400" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <h2 className="truncate text-[14px] font-bold tracking-tight">
                      Metro AI Assistant
                    </h2>
                    <Sparkles size={13} className="shrink-0 text-teal-200" />
                  </div>
                  <p className="mt-1 truncate text-[10px] text-teal-50/80">
                    {HOSPITAL.fullName}
                  </p>
                  <div className="mt-1.5 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="text-[10px] text-emerald-100">
                      Virtual help desk
                    </span>
                    <span className="text-white/30">·</span>
                    <ShieldCheck size={11} className="text-teal-200" />
                    <span className="text-[10px] text-teal-100">
                      Medical guidance
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    recognitionRef.current?.abort();
                    setListening(false);
                    setOpen(false);
                  }}
                  aria-label="Close assistant"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 transition hover:bg-white/20"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="relative mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.08] px-3 py-2">
                <div className="flex items-center gap-2">
                  <HeartPulse size={15} className="text-teal-200" />
                  <span className="text-[10px] font-medium text-white/90">
                    Here to help you feel better
                  </span>
                </div>
                <span className="rounded-md bg-emerald-400/15 px-2 py-1 text-[9px] font-bold text-emerald-200">
                  AI HELP
                </span>
              </div>
            </header>

            {/* MESSAGES */}

            <main className="flex-1 space-y-4 overflow-y-auto overscroll-contain px-3.5 py-4 sm:px-4">
              {messages.length === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="pb-1"
                >
                  <div className="mb-4">
                    <p className="text-[11px] font-semibold text-teal-700">
                      {greeting} 👋
                    </p>
                    <h3 className="mt-1 text-[22px] font-extrabold leading-tight tracking-tight text-[#063B5C]">
                      How can I help
                      <br />
                      you today?
                    </h3>
                    <p className="mt-2 max-w-[300px] text-[11px] leading-relaxed text-slate-500">
                      Ask me about our doctors, appointments or hospital
                      services. मैं आपकी मदद के लिए यहाँ हूँ।
                    </p>
                  </div>

                  <div className="mb-3 flex items-center gap-2">
                    <div className="h-px flex-1 bg-slate-200" />
                    <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
                      Suggested for you
                    </span>
                    <div className="h-px flex-1 bg-slate-200" />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {SUGGESTIONS.map((item) => {
                      const Icon = item.icon;

                      return (
                        <motion.button
                          key={item.title}
                          whileTap={{ scale: 0.97 }}
                          type="button"
                          onClick={() => sendMessage(item.prompt)}
                          className="group rounded-2xl border border-slate-200/80 bg-white p-3 text-left shadow-sm transition hover:border-teal-300 hover:shadow-md"
                        >
                          <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 text-teal-700 transition group-hover:from-teal-100 group-hover:to-cyan-100">
                            <Icon size={18} />
                          </div>
                          <p className="text-[11px] font-bold text-slate-800">
                            {item.title}
                          </p>
                          <p className="mt-1 text-[9px] leading-relaxed text-slate-500">
                            {item.subtitle}
                          </p>
                          <ArrowUpRight
                            size={13}
                            className="ml-auto mt-1 text-slate-400 transition group-hover:text-teal-700"
                          />
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {messages.map((message) => (
                <MessageBubble
                  key={message.id}
                  message={message}
                  router={router}
                  doctorsLoading={doctorsLoading}
                />
              ))}

              {typing && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-end gap-2.5"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#063B5C] to-[#0A7A78] text-white">
                    <Bot size={16} />
                  </div>
                  <div className="rounded-2xl rounded-bl-md border border-slate-100 bg-white px-4 py-3 shadow-sm">
                    <div className="flex items-center gap-1.5">
                      {[0, 1, 2].map((item) => (
                        <motion.span
                          key={item}
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            repeat: Infinity,
                            duration: 0.6,
                            delay: item * 0.12,
                          }}
                          className="h-1.5 w-1.5 rounded-full bg-teal-600"
                        />
                      ))}
                      <span className="ml-1 text-[10px] text-slate-400">
                        Preparing response...
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </main>

            {/* FOLLOW-UP SUGGESTIONS */}

            {messages.length > 1 && !typing && (
              <div className="shrink-0 border-t border-slate-100 bg-white px-3 pt-2">
                <div className="mb-1.5 flex items-center gap-1.5">
                  <Sparkles size={11} className="text-teal-700" />
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                    Explore more
                  </span>
                </div>
                <div className="flex gap-1.5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {QUICK_ACTIONS.filter(
                    (action) => action.id !== "emergency"
                  ).map((action) => (
                    <button
                      key={action.id}
                      type="button"
                      onClick={() => handleQuickAction(action)}
                      className="shrink-0 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-semibold text-slate-600 transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-800"
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* EMERGENCY STRIP */}

            <div className="mx-3 mt-2 flex shrink-0 items-center gap-2.5 rounded-2xl border border-red-100 bg-red-50 px-3 py-2.5 sm:mx-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
                <Ambulance size={17} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold text-red-800">
                  Medical emergency?
                </p>
                <p className="mt-0.5 text-[9px] text-red-600">
                  Call 112 for emergency assistance
                </p>
              </div>
              <button
                type="button"
                onClick={() => router.push("/emergency")}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-red-600 text-white transition hover:bg-red-700"
                aria-label="Open emergency information"
              >
                <ChevronRight size={17} />
              </button>
            </div>

            {/* INPUT */}

            <form
              onSubmit={(event) => {
                event.preventDefault();
                sendMessage();
              }}
              className="shrink-0 border-t border-slate-100 bg-white px-3 pb-2 pt-3 sm:px-4"
            >
              <div
                className={`flex items-center gap-2 rounded-2xl border bg-slate-50 p-1.5 transition-all ${
                  listening
                    ? "border-red-300 ring-2 ring-red-100"
                    : "border-slate-200 focus-within:border-teal-400 focus-within:ring-2 focus-within:ring-teal-100"
                }`}
              >
                <button
                  type="button"
                  onClick={startVoice}
                  title="Voice input"
                  aria-label="Use voice input"
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition ${
                    listening
                      ? "animate-pulse bg-red-100 text-red-600"
                      : "text-slate-500 hover:bg-white hover:text-teal-700"
                  }`}
                >
                  <Mic size={17} />
                </button>

                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder={
                    listening
                      ? "Listening to your voice..."
                      : "Ask anything about our hospital..."
                  }
                  aria-label="Type your message"
                  autoComplete="off"
                  className="min-w-0 flex-1 bg-transparent px-1 py-2 text-[12px] text-slate-700 outline-none placeholder:text-slate-400"
                />

                <button
                  type="submit"
                  disabled={!input.trim() || typing}
                  aria-label="Send message"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#063B5C] to-[#0A7A78] text-white shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Send size={15} />
                </button>
              </div>

              <div className="mt-2 flex items-center justify-center gap-1.5">
                <ShieldCheck size={11} className="text-teal-700" />
                <p className="text-center text-[9px] text-slate-400">
                  AI assistance only · Not a substitute for medical advice
                </p>
              </div>
            </form>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}
