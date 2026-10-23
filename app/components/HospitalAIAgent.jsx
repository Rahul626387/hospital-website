
// "use client";

// import { useEffect, useRef, useState } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import {
//   Bot,
//   X,
//   Send,
//   Mic,
//   MicOff,
//   RotateCcw,
//   CalendarDays,
//   Stethoscope,
//   Building2,
//   Phone,
//   Ambulance,
//   MapPin,
//   Clock,
//   ChevronRight,
//   UserRound,
//   MessageCircle,
//   Volume2,
//   ExternalLink,
//   HeartPulse,
//   Languages,
// } from "lucide-react";
// import "./HospitalAIAgent.css";

// const quickActions = [
//   {
//     label: "Find a Doctor",
//     icon: Stethoscope,
//     message: "I want to find a doctor",
//   },
//   {
//     label: "Book Appointment",
//     icon: CalendarDays,
//     message: "I want to book an appointment",
//   },
//   {
//     label: "Departments",
//     icon: Building2,
//     message: "Show hospital departments",
//   },
//   {
//     label: "Hospital Timings",
//     icon: Clock,
//     message: "Tell me hospital timings",
//   },
//   {
//     label: "Location",
//     icon: MapPin,
//     message: "Show hospital location",
//   },
//   {
//     label: "Emergency Help",
//     icon: Ambulance,
//     message: "I need emergency help",
//   },
// ];

// const websiteRoutes = [
//   { name: "Home", path: "/" },
//   { name: "About", path: "/about" },
//   { name: "Doctors", path: "/doctors" },
//   { name: "Departments", path: "/department" },
//   { name: "Appointment", path: "/appointment" },
//   { name: "Contact", path: "/contact" },
//   { name: "Emergency", path: "/emergency" },
// ];

// const initialMessage = {
//   id: 1,
//   role: "assistant",
//   text: "Hello! Welcome to Baderia Metroprime Multi Speciality Hospital. 🏥",
//   subtext:
//     "I am your virtual hospital assistant. How can I help you today?",
// };

// function getDemoReply(message, language) {
//   const query = message.toLowerCase();

//   const isHindi =
//     language === "hi" ||
//     /हिंदी|डॉक्टर|डाक्टर|अपॉइंटमेंट|समय|पता|इमरजेंसी|एम्बुलेंस|विभाग/.test(
//       query
//     );

//   const answer = (en, hi) => (isHindi ? hi : en);

//   if (
//     /emergency|ambulance|chest pain|breathing|unconscious|सीने में दर्द|सांस|इमरजेंसी|एम्बुलेंस/.test(
//       query
//     )
//   ) {
//     return {
//       text: answer(
//         "If this is a medical emergency, please call India's emergency number 112 or contact the hospital emergency team immediately. Do not wait for a chatbot response.",
//         "अगर यह मेडिकल इमरजेंसी है, तो भारत के आपातकालीन नंबर 112 पर कॉल करें या तुरंत अस्पताल की इमरजेंसी टीम से संपर्क करें। चैटबॉट के जवाब का इंतजार न करें।"
//       ),
//       actions: [
//         {
//           label: answer("Emergency Information", "इमरजेंसी जानकारी"),
//           route: "/emergency",
//         },
//         {
//           label: answer("Contact Hospital", "अस्पताल से संपर्क"),
//           route: "/contact",
//         },
//       ],
//     };
//   }

//   if (/appointment|book|booking|अपॉइंटमेंट|बुक/.test(query)) {
//     return {
//       text: answer(
//         "Let's help you book an appointment. Open the appointment page to check the available booking options. Your appointment is not confirmed until the hospital system confirms it.",
//         "आइए अपॉइंटमेंट बुक करने में मदद करते हैं। उपलब्ध बुकिंग विकल्प देखने के लिए अपॉइंटमेंट पेज खोलें। अस्पताल से पुष्टि मिलने पर ही बुकिंग कन्फर्म होगी।"
//       ),
//       actions: [
//         { label: "Book Appointment", route: "/appointment" },
//         { label: "Find a Doctor", route: "/doctors" },
//       ],
//     };
//   }

//   if (/doctor|specialist|physician|surgeon|डॉक्टर|डाक्टर/.test(query)) {
//     return {
//       text: answer(
//         "You can explore doctors by visiting our Doctors page. Select the relevant speciality and check the doctor's profile and availability.",
//         "आप हमारे डॉक्टर्स पेज पर जाकर डॉक्टर खोज सकते हैं। अपनी जरूरत के अनुसार स्पेशलिटी चुनें और डॉक्टर की प्रोफाइल तथा उपलब्धता देखें।"
//       ),
//       actions: [{ label: "Explore Doctors", route: "/doctors" }],
//     };
//   }

//   if (
//     /department|cardiology|neurology|orthopedic|orthopaedic|hospital service|विभाग/.test(
//       query
//     )
//   ) {
//     return {
//       text: answer(
//         "Explore the hospital departments and available services on our Departments page. Please confirm the required service with the hospital.",
//         "अस्पताल के विभागों और उपलब्ध सेवाओं की जानकारी के लिए डिपार्टमेंट पेज देखें। संबंधित सेवा की उपलब्धता अस्पताल से कन्फर्म करें।"
//       ),
//       actions: [{ label: "View Departments", route: "/department" }],
//     };
//   }

//   if (/timing|hours|opd|schedule|समय|टाइमिंग/.test(query)) {
//     return {
//       text: answer(
//         "Please check the hospital's OPD schedule for current timings. Doctor-specific schedules may differ.",
//         "अस्पताल के वर्तमान समय के लिए OPD शेड्यूल देखें। अलग-अलग डॉक्टरों का समय अलग हो सकता है।"
//       ),
//       actions: [
//         { label: "OPD Schedule", route: "/opd-schedule" },
//         { label: "Contact Hospital", route: "/contact" },
//       ],
//     };
//   }

//   if (/location|address|direction|map|पता|लोकेशन|रास्ता/.test(query)) {
//     return {
//       text: answer(
//         "Open the Contact page to view the hospital's verified address and directions.",
//         "अस्पताल का सही पता और रास्ता देखने के लिए कॉन्टैक्ट पेज खोलें।"
//       ),
//       actions: [{ label: "View Location", route: "/contact" }],
//     };
//   }

//   if (/contact|phone|call|reception|संपर्क|फोन|कॉल/.test(query)) {
//     return {
//       text: answer(
//         "Visit the Contact page to find the hospital's verified phone number and contact details.",
//         "अस्पताल का सही फोन नंबर और संपर्क विवरण पाने के लिए कॉन्टैक्ट पेज देखें।"
//       ),
//       actions: [{ label: "Contact Hospital", route: "/contact" }],
//     };
//   }

//   if (/about|hospital|बारे में|अस्पताल/.test(query)) {
//     return {
//       text: answer(
//         "You can learn more about our hospital, facilities and services on the About page.",
//         "अस्पताल, सुविधाओं और सेवाओं के बारे में अधिक जानने के लिए About पेज देखें।"
//       ),
//       actions: [{ label: "About Hospital", route: "/about" }],
//     };
//   }

//   if (/report|lab test|test result|रिपोर्ट|जांच/.test(query)) {
//     return {
//       text: answer(
//         "For lab reports and test results, please use the hospital's authorized patient portal, if available, or contact the hospital directly. Do not share personal medical information in this demo chat.",
//         "लैब रिपोर्ट और जांच के नतीजों के लिए अस्पताल के अधिकृत पेशेंट पोर्टल का उपयोग करें, यदि उपलब्ध हो, या अस्पताल से संपर्क करें। इस डेमो चैट में निजी मेडिकल जानकारी साझा न करें।"
//       ),
//       actions: [{ label: "Contact Hospital", route: "/contact" }],
//     };
//   }

//   if (/hi|hello|hey|namaste|नमस्ते|हेलो/.test(query)) {
//     return {
//       text: answer(
//         "Hello! I can help you find doctors, explore departments, open website pages and get appointment information. What would you like to do?",
//         "नमस्ते! मैं डॉक्टर खोजने, विभागों की जानकारी देने, वेबसाइट पेज खोलने और अपॉइंटमेंट की जानकारी में मदद कर सकता हूँ। आप क्या करना चाहेंगे?"
//       ),
//       actions: quickActions.slice(0, 3).map((item) => ({
//         label: item.label,
//         message: item.message,
//       })),
//     };
//   }

//   const routeMatch = websiteRoutes.find(
//     (item) =>
//       query.includes(item.name.toLowerCase()) &&
//       !["home"].includes(item.name.toLowerCase())
//   );

//   if (routeMatch) {
//     return {
//       text: answer(
//         `I can open the ${routeMatch.name} page for you.`,
//         `मैं आपके लिए ${routeMatch.name} पेज खोल सकता हूँ।`
//       ),
//       actions: [{ label: `Open ${routeMatch.name}`, route: routeMatch.path }],
//     };
//   }

//   return {
//     text: answer(
//       "I can help with doctor search, appointments, hospital departments, timings, location and emergency information. Please choose an option below or contact the hospital for information I cannot verify.",
//       "मैं डॉक्टर खोजने, अपॉइंटमेंट, अस्पताल के विभागों, समय, लोकेशन और इमरजेंसी जानकारी में मदद कर सकता हूँ। नीचे कोई विकल्प चुनें या अन्य जानकारी के लिए अस्पताल से संपर्क करें।"
//     ),
//     actions: quickActions.slice(0, 4).map((item) => ({
//       label: item.label,
//       message: item.message,
//     })),
//   };
// }

// export default function HospitalAIAgent() {
//   const router = useRouter();
//   const pathname = usePathname();

//   const [isOpen, setIsOpen] = useState(false);
//   const [language, setLanguage] = useState("en");
//   const [input, setInput] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const [isListening, setIsListening] = useState(false);
//   const [messages, setMessages] = useState([initialMessage]);

//   const listRef = useRef(null);
//   const inputRef = useRef(null);
//   const recognitionRef = useRef(null);
//   const typingRef = useRef(null);

//   const isHindi = language === "hi";

//   useEffect(() => {
//     if (listRef.current) {
//       listRef.current.scrollTop = listRef.current.scrollHeight;
//     }
//   }, [messages, isTyping, isOpen]);

//   useEffect(() => {
//     return () => {
//       if (typingRef.current) clearTimeout(typingRef.current);
//       if (recognitionRef.current) {
//         recognitionRef.current.onresult = null;
//         recognitionRef.current.onerror = null;
//         recognitionRef.current.onend = null;
//         recognitionRef.current.stop();
//       }
//     };
//   }, []);

//   function addAssistantMessage(reply) {
//     const message = {
//       id: Date.now() + Math.random(),
//       role: "assistant",
//       text: reply.text,
//       actions: reply.actions || [],
//     };

//     setMessages((prev) => [...prev, message]);
//   }

//   function sendMessage(customMessage) {
//     const text = (customMessage ?? input).trim();
//     if (!text || isTyping) return;

//     setMessages((prev) => [
//       ...prev,
//       {
//         id: Date.now(),
//         role: "user",
//         text,
//       },
//     ]);

//     setInput("");
//     setIsTyping(true);

//     typingRef.current = setTimeout(() => {
//       const reply = getDemoReply(text, language);
//       addAssistantMessage(reply);
//       setIsTyping(false);
//     }, 550);
//   }

//   function handleAction(action) {
//     if (action.route) {
//       setIsOpen(false);
//       router.push(action.route);
//       return;
//     }

//     if (action.message) {
//       sendMessage(action.message);
//     }
//   }

//   function resetChat() {
//     if (typingRef.current) clearTimeout(typingRef.current);
//     setIsTyping(false);
//     setMessages([
//       {
//         ...initialMessage,
//         id: Date.now(),
//         text: isHindi
//           ? "नमस्ते! Baderia Metroprime Multi Speciality Hospital में आपका स्वागत है।"
//           : initialMessage.text,
//         subtext: isHindi
//           ? "मैं आपका वर्चुअल हॉस्पिटल असिस्टेंट हूँ। मैं आपकी क्या मदद कर सकता हूँ?"
//           : initialMessage.subtext,
//       },
//     ]);
//     setInput("");
//   }

//   function toggleVoice() {
//     if (isListening && recognitionRef.current) {
//       recognitionRef.current.stop();
//       return;
//     }

//     if (typeof window === "undefined") return;

//     const SpeechRecognition =
//       window.SpeechRecognition || window.webkitSpeechRecognition;

//     if (!SpeechRecognition) {
//       addAssistantMessage({
//         text: isHindi
//           ? "आपके ब्राउज़र में वॉइस इनपुट सपोर्ट नहीं है। कृपया Chrome में प्रयास करें या टाइप करें।"
//           : "Voice input is not supported by this browser. Please try Chrome or type your message.",
//       });
//       return;
//     }

//     const recognition = new SpeechRecognition();
//     recognition.lang = isHindi ? "hi-IN" : "en-IN";
//     recognition.interimResults = false;
//     recognition.maxAlternatives = 1;

//     recognition.onstart = () => setIsListening(true);

//     recognition.onresult = (event) => {
//       const transcript = event.results[0][0].transcript;
//       setInput(transcript);
//     };

//     recognition.onerror = () => {
//       setIsListening(false);
//     };

//     recognition.onend = () => {
//       setIsListening(false);
//     };

//     recognitionRef.current = recognition;
//     recognition.start();
//   }

//   function speakMessage(text) {
//     if (typeof window === "undefined" || !("speechSynthesis" in window)) {
//       return;
//     }

//     window.speechSynthesis.cancel();
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = isHindi ? "hi-IN" : "en-IN";
//     window.speechSynthesis.speak(utterance);
//   }

//   return (
//     <>
//       {!isOpen && (
//         <button
//           type="button"
//           className="hospital-ai-launcher"
//           onClick={() => setIsOpen(true)}
//           aria-label="Open hospital AI assistant"
//         >
//           <span className="hospital-ai-launcher-ring" />
//           <Bot size={29} strokeWidth={1.8} />
//           <span className="hospital-ai-launcher-status" />
//           <span className="hospital-ai-launcher-tooltip">
//             {isHindi ? "AI से पूछें" : "Ask Hospital AI"}
//           </span>
//         </button>
//       )}

//       {isOpen && (
//         <section
//           className="hospital-ai-window"
//           aria-label="Hospital AI assistant"
//         >
//           <header className="hospital-ai-header">
//             <div className="hospital-ai-brand">
//               <div className="hospital-ai-avatar">
//                 <Bot size={25} />
//                 <span className="hospital-ai-avatar-status" />
//               </div>

//               <div className="hospital-ai-brand-copy">
//                 <h2>Hospital AI</h2>
//                 <p>
//                   <span className="hospital-ai-online-dot" />
//                   {isHindi ? "ऑनलाइन असिस्टेंट" : "Virtual Assistant"}
//                 </p>
//               </div>
//             </div>

//             <div className="hospital-ai-header-actions">
//               <button
//                 type="button"
//                 title="Switch language"
//                 aria-label="Switch language"
//                 onClick={() =>
//                   setLanguage((prev) => (prev === "en" ? "hi" : "en"))
//                 }
//               >
//                 <Languages size={18} />
//                 <span>{isHindi ? "HI" : "EN"}</span>
//               </button>

//               <button
//                 type="button"
//                 title="New chat"
//                 aria-label="Start a new chat"
//                 onClick={resetChat}
//               >
//                 <RotateCcw size={17} />
//               </button>

//               <button
//                 type="button"
//                 title="Close chat"
//                 aria-label="Close chat"
//                 onClick={() => setIsOpen(false)}
//               >
//                 <X size={21} />
//               </button>
//             </div>
//           </header>

//           <div className="hospital-ai-trust-strip">
//             <HeartPulse size={15} />
//             <span>
//               {isHindi
//                 ? "आपकी बेहतर स्वास्थ्य सेवा के लिए"
//                 : "Here to help with your hospital visit"}
//             </span>
//           </div>

//           <div className="hospital-ai-messages" ref={listRef}>
//             <div className="hospital-ai-date-label">
//               <span>{isHindi ? "आज" : "TODAY"}</span>
//             </div>

//             {messages.map((message) => (
//               <div
//                 key={message.id}
//                 className={`hospital-ai-message-row ${
//                   message.role === "user" ? "is-user" : "is-assistant"
//                 }`}
//               >
//                 {message.role === "assistant" && (
//                   <div className="hospital-ai-small-avatar">
//                     <Bot size={17} />
//                   </div>
//                 )}

//                 <div className="hospital-ai-message-content">
//                   <div className="hospital-ai-bubble">
//                     <p>{message.text}</p>
//                     {message.subtext && <p>{message.subtext}</p>}
//                   </div>

//                   {message.role === "assistant" && (
//                     <button
//                       type="button"
//                       className="hospital-ai-speak"
//                       onClick={() => speakMessage(message.text)}
//                       title="Read message aloud"
//                     >
//                       <Volume2 size={14} />
//                       <span>{isHindi ? "सुनें" : "Listen"}</span>
//                     </button>
//                   )}

//                   {message.actions?.length > 0 && (
//                     <div className="hospital-ai-action-list">
//                       {message.actions.map((action, index) => (
//                         <button
//                           type="button"
//                           key={`${message.id}-${index}`}
//                           className="hospital-ai-action-button"
//                           onClick={() => handleAction(action)}
//                         >
//                           <span>{action.label}</span>
//                           {action.route ? (
//                             <ExternalLink size={14} />
//                           ) : (
//                             <ChevronRight size={15} />
//                           )}
//                         </button>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}

//             {messages.length === 1 && (
//               <div className="hospital-ai-welcome">
//                 <p className="hospital-ai-section-title">
//                   {isHindi ? "मैं आपकी कैसे मदद करूँ?" : "How can I help you?"}
//                 </p>

//                 <div className="hospital-ai-quick-grid">
//                   {quickActions.map((action) => {
//                     const Icon = action.icon;

//                     return (
//                       <button
//                         type="button"
//                         className="hospital-ai-quick-card"
//                         key={action.label}
//                         onClick={() => sendMessage(action.message)}
//                       >
//                         <span className="hospital-ai-quick-icon">
//                           <Icon size={19} />
//                         </span>
//                         <span>{action.label}</span>
//                         <ChevronRight size={14} />
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>
//             )}

//             {isTyping && (
//               <div className="hospital-ai-message-row is-assistant">
//                 <div className="hospital-ai-small-avatar">
//                   <Bot size={17} />
//                 </div>
//                 <div className="hospital-ai-typing" aria-label="AI is typing">
//                   <span />
//                   <span />
//                   <span />
//                 </div>
//               </div>
//             )}
//           </div>

//           <div className="hospital-ai-input-area">
//             <div className="hospital-ai-input-box">
//               <input
//                 ref={inputRef}
//                 type="text"
//                 value={input}
//                 onChange={(event) => setInput(event.target.value)}
//                 onKeyDown={(event) => {
//                   if (event.key === "Enter" && !event.shiftKey) {
//                     event.preventDefault();
//                     sendMessage();
//                   }
//                 }}
//                 placeholder={
//                   isHindi
//                     ? "अपना सवाल यहाँ लिखें..."
//                     : "Ask about doctors, appointments..."
//                 }
//                 aria-label="Type your message"
//                 disabled={isTyping}
//               />

//               <button
//                 type="button"
//                 className={`hospital-ai-mic ${
//                   isListening ? "is-listening" : ""
//                 }`}
//                 onClick={toggleVoice}
//                 aria-label={isListening ? "Stop voice input" : "Voice input"}
//                 title={isListening ? "Stop listening" : "Speak"}
//               >
//                 {isListening ? <MicOff size={19} /> : <Mic size={19} />}
//               </button>

//               <button
//                 type="button"
//                 className="hospital-ai-send"
//                 onClick={() => sendMessage()}
//                 disabled={!input.trim() || isTyping}
//                 aria-label="Send message"
//               >
//                 <Send size={17} />
//               </button>
//             </div>

//             {isListening && (
//               <p className="hospital-ai-listening-text">
//                 {isHindi ? "सुन रहा हूँ..." : "Listening..."}
//               </p>
//             )}

//             <p className="hospital-ai-disclaimer">
//               {isHindi
//                 ? "डेमो असिस्टेंट · मेडिकल सलाह के लिए डॉक्टर से संपर्क करें"
//                 : "Demo assistant · Not a substitute for medical advice"}
//             </p>
//           </div>
//         </section>
//       )}
//     </>
//   );
// }





// "use client";

// import { useCallback, useEffect, useRef, useState } from "react";
// import { useRouter } from "next/navigation";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   Activity,
//   ArrowRight,
//   Bot,
//   CalendarDays,
//   Check,
//   ChevronDown,
//   Clock3,
//   HeartPulse,
//   Hospital,
//   MapPin,
//   MessageCircle,
//   Mic,
//   MicOff,
//   Phone,
//   Send,
//   ShieldCheck,
//   Stethoscope,
//   Volume2,
//   VolumeX,
//   X,
// } from "lucide-react";

// import {useDoctors} from "./../api/hooks/useDoctors";
// import {useDepartments} from "./../api/hooks/useDepartments";
// import "./HospitalAIAgent.css";

// /* -------------------------------------------------------
//    WEBSITE ROUTES
//    Apne project ke actual routes ke according change karein.
// ------------------------------------------------------- */

// const ROUTES = {
//   doctors: "/doctors",
//   departments: "/department",
//   appointment: "/appointment",
//   contact: "/contact",
//   emergency: "/emergency",
//   opd: "/opd-schedule",
// };

// /* -------------------------------------------------------
//    DATA HELPERS
// ------------------------------------------------------- */

// function firstValue(...values) {
//   return values.find(
//     (value) => value !== undefined && value !== null && value !== ""
//   );
// }

// function getDoctorName(doctor) {
//   return firstValue(
//     doctor?.name,
//     doctor?.doctorName,
//     doctor?.fullName,
//     doctor?.doctor_name,
//     doctor?.displayName,
//     doctor?.title
//   ) || "Doctor";
// }

// function getDoctorSpecialty(doctor) {
//   const department = doctor?.department;

//   return firstValue(
//     doctor?.specialization,
//     doctor?.speciality,
//     doctor?.specialty,
//     doctor?.departmentName,
//     doctor?.department_name,
//     typeof department === "string" ? department : department?.name
//   ) || "Specialization not available";
// }

// function getDepartmentName(department) {
//   return firstValue(
//     department?.name,
//     department?.departmentName,
//     department?.title,
//     department?.department_name,
//     department?.speciality
//   ) || "Department";
// }

// function getArray(data) {
//   if (Array.isArray(data)) return data;
//   if (Array.isArray(data?.data)) return data.data;
//   if (Array.isArray(data?.doctors)) return data.doctors;
//   if (Array.isArray(data?.departments)) return data.departments;
//   if (Array.isArray(data?.results)) return data.results;
//   if (Array.isArray(data?.items)) return data.items;
//   return [];
// }

// function normalise(value) {
//   return String(value || "").toLowerCase().trim();
// }

// function isHindi(language) {
//   return language === "hi";
// }

// /* -------------------------------------------------------
//    COMPONENT
// ------------------------------------------------------- */

// export default function HospitalAIAgent() {
//   const router = useRouter();

//   // Live data from your existing API hooks
//   const {
//     doctors: doctorsResponse = [],
//     error: doctorError,
//     isLoading: doctorsLoading,
//   } = useDoctors();

//   const {
//     departments: departmentsResponse = [],
//     error: departmentError,
//     isLoading: departmentsLoading,
//   } = useDepartments();

//   const doctors = getArray(doctorsResponse);
//   const departments = getArray(departmentsResponse);

//   const [isOpen, setIsOpen] = useState(false);
//   const [language, setLanguage] = useState("en");
//   const [input, setInput] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [isTyping, setIsTyping] = useState(false);
//   const [isListening, setIsListening] = useState(false);
//   const [voiceEnabled, setVoiceEnabled] = useState(false);

//   const listRef = useRef(null);
//   const inputRef = useRef(null);
//   const recognitionRef = useRef(null);

//   const hindi = isHindi(language);

//   const t = {
//     title: hindi ? "Hospital AI Assistant" : "Hospital AI Assistant",
//     subtitle: hindi ? "आपकी सहायता के लिए हमेशा तैयार" : "Here to help you",
//     welcome: hindi
//       ? "नमस्ते! मैं आपका हॉस्पिटल AI असिस्टेंट हूँ। डॉक्टर, विभाग, अपॉइंटमेंट और हॉस्पिटल की जानकारी के लिए पूछें।"
//       : "Hello! I'm your hospital AI assistant. Ask me about doctors, departments, appointments, OPD timings, or hospital information.",
//     placeholder: hindi ? "यहाँ अपना सवाल लिखें..." : "Type your question here...",
//     online: hindi ? "ऑनलाइन सहायता" : "Online assistance",
//     doctors: hindi ? "डॉक्टर खोजें" : "Find Doctors",
//     departments: hindi ? "विभाग देखें" : "Departments",
//     appointment: hindi ? "अपॉइंटमेंट" : "Appointment",
//     contact: hindi ? "संपर्क करें" : "Contact Us",
//     emergency: hindi ? "इमरजेंसी" : "Emergency",
//     opd: hindi ? "OPD समय" : "OPD Schedule",
//     send: hindi ? "भेजें" : "Send",
//     listening: hindi ? "सुन रहा हूँ..." : "Listening...",
//     disclaimer: hindi
//       ? "यह असिस्टेंट सामान्य जानकारी देता है, मेडिकल डायग्नोसिस नहीं। आपात स्थिति में तुरंत इमरजेंसी सेवा से संपर्क करें।"
//       : "This assistant provides general information, not a medical diagnosis. Contact emergency services immediately in an emergency.",
//     loading: hindi ? "जानकारी लोड हो रही है..." : "Loading information...",
//     noDoctors: hindi
//       ? "फिलहाल डॉक्टरों की जानकारी उपलब्ध नहीं है।"
//       : "Doctor information is currently unavailable.",
//     noDepartments: hindi
//       ? "फिलहाल विभागों की जानकारी उपलब्ध नहीं है।"
//       : "Department information is currently unavailable.",
//   };

//   useEffect(() => {
//     if (messages.length === 0) {
//       setMessages([
//         {
//           id: "welcome",
//           role: "assistant",
//           text: t.welcome,
//           time: new Date(),
//         },
//       ]);
//     }
//     // Initial greeting only
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   useEffect(() => {
//     if (!isOpen) return;
//     listRef.current?.scrollTo({
//       top: listRef.current.scrollHeight,
//       behavior: "smooth",
//     });
//   }, [messages, isTyping, isOpen]);

//   useEffect(() => {
//     return () => {
//       recognitionRef.current?.stop?.();
//       if (typeof window !== "undefined" && window.speechSynthesis) {
//         window.speechSynthesis.cancel();
//       }
//     };
//   }, []);

//   const navigateTo = useCallback(
//     (path) => {
//       if (path) {
//         setIsOpen(false);
//         router.push(path);
//       }
//     },
//     [router]
//   );

//   const speak = useCallback(
//     (text) => {
//       if (!voiceEnabled || typeof window === "undefined") return;
//       if (!("speechSynthesis" in window)) return;

//       window.speechSynthesis.cancel();

//       const utterance = new SpeechSynthesisUtterance(text);
//       utterance.lang = language === "hi" ? "hi-IN" : "en-IN";
//       utterance.rate = 1;
//       window.speechSynthesis.speak(utterance);
//     },
//     [language, voiceEnabled]
//   );

//   const addAssistantMessage = useCallback(
//     (text, actions = []) => {
//       setMessages((previous) => [
//         ...previous,
//         {
//           id: `${Date.now()}-${Math.random()}`,
//           role: "assistant",
//           text,
//           actions,
//           time: new Date(),
//         },
//       ]);
//       speak(text);
//     },
//     [speak]
//   );

//   /* -----------------------------------------------------
//      REPLY ENGINE
//      Doctors/departments use real API data.
//      Other answers are navigation assistance, not live data.
//   ----------------------------------------------------- */

//   const getReply = useCallback(
//     (rawMessage) => {
//       const message = normalise(rawMessage);
//       const hi = language === "hi";

//       const doctorWords = [
//         "doctor", "doctors", "physician", "surgeon",
//         "specialist", "डॉक्टर", "डाक्टर", "चिकित्सक",
//         "डॉक्टरों", "डॉक्टर का नाम",
//       ];

//       const departmentWords = [
//         "department", "departments", "specialty", "speciality",
//         "विभाग", "डिपार्टमेंट", "विशेषता", "स्पेशलिटी",
//       ];

//       const appointmentWords = [
//         "appointment", "book", "booking", "अपॉइंटमेंट",
//         "बुकिंग", "मुलाकात", "अपॉइंटमेंट बुक",
//       ];

//       const emergencyWords = [
//         "emergency", "ambulance", "urgent", "इमरजेंसी",
//         "आपातकाल", "एम्बुलेंस", "तुरंत", "सीरियस",
//       ];

//       const contactWords = [
//         "contact", "phone", "number", "address",
//         "location", "map", "संपर्क", "फोन", "नंबर",
//         "पता", "लोकेशन", "कहाँ", "कहां",
//       ];

//       const opdWords = [
//         "opd", "timing", "timings", "schedule", "time",
//         "समय", "ओपीडी", "टाइमिंग", "कब खुलता",
//       ];

//       const hasAny = (words) =>
//         words.some((word) => message.includes(normalise(word)));

//       const actions = (items) =>
//         items.map((item) => ({
//           label: item.label,
//           path: item.path,
//         }));

//       // Emergency: do not invent hospital phone numbers.
//       if (hasAny(emergencyWords)) {
//         return {
//           text: hi
//             ? "यदि यह मेडिकल इमरजेंसी है, तो तुरंत नजदीकी इमरजेंसी विभाग से संपर्क करें। भारत में 112 एकीकृत आपातकालीन नंबर है। अस्पताल की सत्यापित एम्बुलेंस या इमरजेंसी नंबर उपलब्ध हो तो उसका उपयोग करें।"
//             : "If this is a medical emergency, contact the nearest emergency department immediately. In India, 112 is the integrated emergency number. Use the hospital's verified emergency or ambulance number if available.",
//           actions: actions([
//             { label: hi ? "Emergency Page" : "Emergency Page", path: ROUTES.emergency },
//             { label: hi ? "Contact Hospital" : "Contact Hospital", path: ROUTES.contact },
//           ]),
//         };
//       }

//       if (hasAny(doctorWords)) {
//         if (doctorsLoading) {
//           return {
//             text: hi
//               ? "डॉक्टरों की जानकारी लोड हो रही है। कृपया कुछ देर बाद दोबारा पूछें।"
//               : "Doctor information is loading. Please ask again in a moment.",
//             actions: actions([
//               { label: hi ? "सभी डॉक्टर" : "All Doctors", path: ROUTES.doctors },
//             ]),
//           };
//         }

//         if (doctorError || doctors.length === 0) {
//           return {
//             text: doctorError
//               ? hi
//                 ? "डॉक्टरों की जानकारी अभी प्राप्त नहीं हो पाई। कृपया Doctors पेज देखें या अस्पताल से संपर्क करें।"
//                 : "I couldn't retrieve the doctor list right now. Please check the Doctors page or contact the hospital."
//               : t.noDoctors,
//             actions: actions([
//               { label: hi ? "डॉक्टर देखें" : "View Doctors", path: ROUTES.doctors },
//             ]),
//           };
//         }

//         // If a specialty or name is mentioned, filter the API results.
//         const matched = doctors.filter((doctor) => {
//           const searchable = normalise(
//             `${getDoctorName(doctor)} ${getDoctorSpecialty(doctor)} ${
//               doctor?.qualification || ""
//             } ${doctor?.departmentName || ""}`
//           );
//           const queryWords = message
//             .split(/[\s,?.!]+/)
//             .filter((word) => word.length > 2 && !doctorWords.includes(word));

//           return (
//             searchable.includes(message) ||
//             queryWords.some((word) => searchable.includes(word))
//           );
//         });

//         const results = matched.length > 0 ? matched : doctors;
//         const heading = matched.length > 0
//           ? (hi ? "आपके सवाल से मिलते-जुलते डॉक्टर:" : "Doctors matching your question:")
//           : (hi ? "हमारे उपलब्ध डॉक्टर:" : "Available doctors:");

//         const list = results.slice(0, 6).map((doctor, index) => {
//           const name = getDoctorName(doctor);
//           const specialty = getDoctorSpecialty(doctor);
//           return `${index + 1}. ${name} — ${specialty}`;
//         });

//         return {
//           text: `${heading}\n\n${list.join("\n")}${
//             results.length > 6
//               ? hi
//                 ? `\n\nऔर ${results.length - 6} डॉक्टर उपलब्ध हैं।`
//                 : `\n\nAnd ${results.length - 6} more doctors are available.`
//               : ""
//           }`,
//           actions: actions([
//             { label: hi ? "सभी डॉक्टर देखें" : "View All Doctors", path: ROUTES.doctors },
//             { label: hi ? "अपॉइंटमेंट" : "Book Appointment", path: ROUTES.appointment },
//           ]),
//         };
//       }

//       if (hasAny(departmentWords)) {
//         if (departmentsLoading) {
//           return {
//             text: hi
//               ? "विभागों की जानकारी लोड हो रही है। कृपया थोड़ी देर बाद पूछें।"
//               : "Department information is loading. Please ask again shortly.",
//             actions: actions([
//               { label: hi ? "विभाग देखें" : "View Departments", path: ROUTES.departments },
//             ]),
//           };
//         }

//         if (departmentError || departments.length === 0) {
//           return {
//             text: departmentError
//               ? hi
//                 ? "विभागों की जानकारी अभी प्राप्त नहीं हो पाई। कृपया विभाग पेज देखें।"
//                 : "I couldn't retrieve departments right now. Please visit the Departments page."
//               : t.noDepartments,
//             actions: actions([
//               { label: hi ? "विभाग देखें" : "View Departments", path: ROUTES.departments },
//             ]),
//           };
//         }

//         const names = departments
//           .map(getDepartmentName)
//           .filter(Boolean)
//           .slice(0, 12);

//         return {
//           text: `${
//             hi ? "हमारे उपलब्ध विभाग:" : "Available departments:"
//           }\n\n${names.map((name, index) => `${index + 1}. ${name}`).join("\n")}${
//             departments.length > 12
//               ? hi
//                 ? `\n\nऔर ${departments.length - 12} विभाग उपलब्ध हैं।`
//                 : `\n\nAnd ${departments.length - 12} more departments are available.`
//               : ""
//           }`,
//           actions: actions([
//             { label: hi ? "सभी विभाग देखें" : "View All Departments", path: ROUTES.departments },
//             { label: hi ? "डॉक्टर देखें" : "Find Doctors", path: ROUTES.doctors },
//           ]),
//         };
//       }

//       if (hasAny(appointmentWords)) {
//         return {
//           text: hi
//             ? "अपॉइंटमेंट के लिए नीचे दिए गए बटन से Appointment पेज खोलें। उपलब्ध स्लॉट और बुकिंग की पुष्टि वहीं करें।"
//             : "Open the Appointment page below to request a booking. Check available slots and confirm your appointment there.",
//           actions: actions([
//             { label: hi ? "अपॉइंटमेंट बुक करें" : "Book Appointment", path: ROUTES.appointment },
//             { label: hi ? "डॉक्टर देखें" : "Find Doctors", path: ROUTES.doctors },
//           ]),
//         };
//       }

//       if (hasAny(opdWords)) {
//         return {
//           text: hi
//             ? "OPD के सही दिन और समय के लिए अस्पताल के OPD Schedule पेज पर जाएँ। मेरे पास अभी सत्यापित समय की जानकारी उपलब्ध नहीं है।"
//             : "Please check the hospital's OPD Schedule page for verified days and timings. I don't have confirmed timing details in this chat.",
//           actions: actions([
//             { label: hi ? "OPD Schedule देखें" : "View OPD Schedule", path: ROUTES.opd },
//             { label: hi ? "संपर्क करें" : "Contact Hospital", path: ROUTES.contact },
//           ]),
//         };
//       }

//       if (hasAny(contactWords)) {
//         return {
//           text: hi
//             ? "हॉस्पिटल का सही पता, संपर्क नंबर और दिशा-निर्देश देखने के लिए Contact पेज खोलें। मैं कोई अप्रमाणित फोन नंबर या पता नहीं बताऊँगा।"
//             : "Open the Contact page for the hospital's verified address, phone number, and directions. I won't guess a phone number or address.",
//           actions: actions([
//             { label: hi ? "Contact पेज" : "Contact Page", path: ROUTES.contact },
//           ]),
//         };
//       }

//       if (
//         message.includes("hello") ||
//         message.includes("hi") ||
//         message.includes("hey") ||
//         message.includes("नमस्ते") ||
//         message.includes("हेलो")
//       ) {
//         return {
//           text: hi
//             ? "नमस्ते! मैं आपकी कैसे मदद कर सकता हूँ? आप डॉक्टर, विभाग, अपॉइंटमेंट या OPD समय के बारे में पूछ सकते हैं।"
//             : "Hello! How can I help you? You can ask about doctors, departments, appointments, or OPD schedules.",
//           actions: actions([
//             { label: hi ? "डॉक्टर खोजें" : "Find Doctors", path: ROUTES.doctors },
//             { label: hi ? "विभाग देखें" : "Departments", path: ROUTES.departments },
//             { label: hi ? "अपॉइंटमेंट" : "Appointment", path: ROUTES.appointment },
//           ]),
//         };
//       }

//       return {
//         text: hi
//           ? "मैं डॉक्टरों, विभागों, अपॉइंटमेंट, OPD समय और हॉस्पिटल संपर्क में मदद कर सकता हूँ। कृपया अपना सवाल थोड़ा स्पष्ट लिखें।"
//           : "I can help with doctors, departments, appointments, OPD schedules, and hospital contact information. Please try asking your question more specifically.",
//         actions: actions([
//           { label: hi ? "डॉक्टर खोजें" : "Find Doctors", path: ROUTES.doctors },
//           { label: hi ? "विभाग देखें" : "Departments", path: ROUTES.departments },
//           { label: hi ? "अपॉइंटमेंट" : "Appointment", path: ROUTES.appointment },
//         ]),
//       };
//     },
//     [
//       language,
//       doctors,
//       departments,
//       doctorsLoading,
//       departmentsLoading,
//       doctorError,
//       departmentError,
//       t.noDoctors,
//       t.noDepartments,
//     ]
//   );

//   const sendMessage = useCallback(
//     (value) => {
//       const text = String(value || "").trim();
//       if (!text || isTyping) return;

//       setMessages((previous) => [
//         ...previous,
//         {
//           id: `${Date.now()}-user`,
//           role: "user",
//           text,
//           time: new Date(),
//         },
//       ]);

//       setInput("");
//       setIsTyping(true);

//       // Small delay for natural chat behaviour.
//       window.setTimeout(() => {
//         const reply = getReply(text);
//         setMessages((previous) => [
//           ...previous,
//           {
//             id: `${Date.now()}-assistant`,
//             role: "assistant",
//             text: reply.text,
//             actions: reply.actions || [],
//             time: new Date(),
//           },
//         ]);
//         setIsTyping(false);
//         speak(reply.text);
//       }, 350);
//     },
//     [getReply, isTyping, speak]
//   );

//   const startVoiceInput = useCallback(() => {
//     if (typeof window === "undefined") return;

//     const SpeechRecognition =
//       window.SpeechRecognition || window.webkitSpeechRecognition;

//     if (!SpeechRecognition) {
//       addAssistantMessage(
//         language === "hi"
//           ? "आपके ब्राउज़र में voice input उपलब्ध नहीं है। कृपया Chrome के नवीनतम संस्करण में कोशिश करें या टाइप करें।"
//           : "Voice input is not supported by this browser. Try the latest version of Chrome or type your message."
//       );
//       return;
//     }

//     if (isListening) {
//       recognitionRef.current?.stop();
//       setIsListening(false);
//       return;
//     }

//     const recognition = new SpeechRecognition();
//     recognition.lang = language === "hi" ? "hi-IN" : "en-IN";
//     recognition.interimResults = false;
//     recognition.maxAlternatives = 1;

//     recognition.onstart = () => setIsListening(true);
//     recognition.onend = () => setIsListening(false);

//     recognition.onerror = () => {
//       setIsListening(false);
//     };

//     recognition.onresult = (event) => {
//       const transcript = event.results?.[0]?.[0]?.transcript || "";
//       if (transcript) {
//         setInput(transcript);
//         inputRef.current?.focus();
//       }
//     };

//     recognitionRef.current = recognition;
//     recognition.start();
//   }, [addAssistantMessage, isListening, language]);

//   const quickActions = [
//     { label: t.doctors, icon: Stethoscope, message: "Show doctors" },
//     { label: t.departments, icon: Hospital, message: "Show departments" },
//     { label: t.appointment, icon: CalendarDays, message: "Book appointment" },
//     { label: t.opd, icon: Clock3, message: "OPD timings" },
//     { label: t.contact, icon: MapPin, message: "Hospital contact and location" },
//     { label: t.emergency, icon: HeartPulse, message: "Emergency help" },
//   ];

//   const handleQuickAction = (message) => {
//     if (!isOpen) setIsOpen(true);
//     sendMessage(message);
//   };

//   return (
//     <div className="hospital-ai-root">
//       {/* Floating assistant button */}
//       <AnimatePresence>
//         {!isOpen && (
//           <motion.button
//             type="button"
//             className="hospital-ai-launcher"
//             aria-label="Open hospital AI assistant"
//             title={t.title}
//             initial={{ opacity: 0, scale: 0.7, y: 18 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.7 }}
//             whileHover={{ scale: 1.04 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setIsOpen(true)}
//           >
//             <span className="hospital-ai-launcher-icon">
//               <Bot size={27} />
//             </span>
//             <span className="hospital-ai-launcher-label">
//               {hindi ? "AI सहायता" : "Ask AI"}
//             </span>
//             <span className="hospital-ai-online-dot" />
//           </motion.button>
//         )}
//       </AnimatePresence>

//       {/* Chat window */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.section
//             className="hospital-ai-window"
//             role="dialog"
//             aria-label={t.title}
//             aria-modal="false"
//             initial={{ opacity: 0, y: 25, scale: 0.96 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 20, scale: 0.97 }}
//             transition={{ duration: 0.22 }}
//           >
//             {/* Header */}
//             <header className="hospital-ai-header">
//               <div className="hospital-ai-brand">
//                 <div className="hospital-ai-brand-icon">
//                   <Bot size={25} />
//                 </div>

//                 <div className="hospital-ai-brand-copy">
//                   <h2>{t.title}</h2>
//                   <p>
//                     <span className="hospital-ai-status-dot" />
//                     {t.online}
//                   </p>
//                 </div>
//               </div>

//               <div className="hospital-ai-header-actions">
//                 <button
//                   type="button"
//                   className="hospital-ai-icon-button"
//                   title={voiceEnabled ? "Mute replies" : "Enable voice replies"}
//                   aria-label={voiceEnabled ? "Mute voice replies" : "Enable voice replies"}
//                   onClick={() => {
//                     setVoiceEnabled((enabled) => {
//                       if (enabled && window.speechSynthesis) {
//                         window.speechSynthesis.cancel();
//                       }
//                       return !enabled;
//                     });
//                   }}
//                 >
//                   {voiceEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
//                 </button>

//                 <button
//                   type="button"
//                   className="hospital-ai-icon-button"
//                   title={hindi ? "Switch language" : "भाषा बदलें"}
//                   aria-label="Switch language"
//                   onClick={() => setLanguage((current) => current === "en" ? "hi" : "en")}
//                 >
//                   <span className="hospital-ai-lang-label">
//                     {hindi ? "हि" : "EN"}
//                   </span>
//                 </button>

//                 <button
//                   type="button"
//                   className="hospital-ai-icon-button"
//                   aria-label="Minimize assistant"
//                   title="Minimize"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   <ChevronDown size={21} />
//                 </button>

//                 <button
//                   type="button"
//                   className="hospital-ai-icon-button hospital-ai-close"
//                   aria-label="Close assistant"
//                   title="Close"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   <X size={19} />
//                 </button>
//               </div>
//             </header>

//             {/* Intro strip */}
//             <div className="hospital-ai-intro">
//               <div className="hospital-ai-intro-symbol">
//                 <ShieldCheck size={17} />
//               </div>
//               <div>
//                 <strong>{t.subtitle}</strong>
//                 <span>
//                   {hindi
//                     ? "हॉस्पिटल की जानकारी एक ही जगह"
//                     : "Hospital information, all in one place"}
//                 </span>
//               </div>
//             </div>

//             {/* Messages */}
//             <div className="hospital-ai-messages" ref={listRef}>
//               <div className="hospital-ai-date-label">
//                 <span>{hindi ? "आज" : "Today"}</span>
//               </div>

//               {messages.map((message) => (
//                 <motion.div
//                   key={message.id}
//                   className={`hospital-ai-message-row ${
//                     message.role === "user" ? "is-user" : "is-assistant"
//                   }`}
//                   initial={{ opacity: 0, y: 7 }}
//                   animate={{ opacity: 1, y: 0 }}
//                 >
//                   {message.role === "assistant" && (
//                     <div className="hospital-ai-avatar">
//                       <Bot size={17} />
//                     </div>
//                   )}

//                   <div className="hospital-ai-message-content">
//                     <div className="hospital-ai-bubble">
//                       <p>{message.text}</p>
//                     </div>

//                     {message.actions?.length > 0 && (
//                       <div className="hospital-ai-action-list">
//                         {message.actions.map((action, index) => (
//                           <button
//                             key={`${action.label}-${index}`}
//                             type="button"
//                             className="hospital-ai-action-link"
//                             onClick={() => navigateTo(action.path)}
//                           >
//                             {action.label}
//                             <ArrowRight size={14} />
//                           </button>
//                         ))}
//                       </div>
//                     )}

//                     <span className="hospital-ai-message-time">
//                       {message.time instanceof Date
//                         ? message.time.toLocaleTimeString(
//                             language === "hi" ? "hi-IN" : "en-IN",
//                             { hour: "2-digit", minute: "2-digit" }
//                           )
//                         : ""}
//                       {message.role === "user" && (
//                         <Check size={13} className="hospital-ai-read-icon" />
//                       )}
//                     </span>
//                   </div>
//                 </motion.div>
//               ))}

//               {isTyping && (
//                 <div className="hospital-ai-message-row is-assistant">
//                   <div className="hospital-ai-avatar">
//                     <Bot size={17} />
//                   </div>
//                   <div className="hospital-ai-typing" aria-label="Assistant is typing">
//                     <span />
//                     <span />
//                     <span />
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Quick actions */}
//             <div className="hospital-ai-quick-section">
//               <div className="hospital-ai-quick-heading">
//                 <span>{hindi ? "त्वरित सहायता" : "QUICK ASSISTANCE"}</span>
//                 <Activity size={14} />
//               </div>

//               <div className="hospital-ai-quick-actions">
//                 {quickActions.map((action) => {
//                   const Icon = action.icon;

//                   return (
//                     <button
//                       type="button"
//                       key={action.label}
//                       className="hospital-ai-quick-action"
//                       onClick={() => handleQuickAction(action.message)}
//                       disabled={isTyping}
//                     >
//                       <Icon size={16} />
//                       <span>{action.label}</span>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Input */}
//             <form
//               className="hospital-ai-composer"
//               onSubmit={(event) => {
//                 event.preventDefault();
//                 sendMessage(input);
//               }}
//             >
//               <button
//                 type="button"
//                 className={`hospital-ai-mic-button ${isListening ? "is-listening" : ""}`}
//                 onClick={startVoiceInput}
//                 aria-label={isListening ? "Stop listening" : "Start voice input"}
//                 title={isListening ? "Stop listening" : "Speak"}
//               >
//                 {isListening ? <MicOff size={19} /> : <Mic size={19} />}
//               </button>

//               <input
//                 ref={inputRef}
//                 value={input}
//                 onChange={(event) => setInput(event.target.value)}
//                 placeholder={isListening ? t.listening : t.placeholder}
//                 aria-label={t.placeholder}
//                 maxLength={1000}
//               />

//               <button
//                 type="submit"
//                 className="hospital-ai-send-button"
//                 disabled={!input.trim() || isTyping}
//                 aria-label={t.send}
//                 title={t.send}
//               >
//                 <Send size={18} />
//               </button>
//             </form>

//             {/* Disclaimer */}
//             <footer className="hospital-ai-footer">
//               <ShieldCheck size={13} />
//               <span>{t.disclaimer}</span>
//             </footer>
//           </motion.section>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }




"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bot,
  X,
  Send,
  Mic,
  MicOff,
  RotateCcw,
  CalendarDays,
  Stethoscope,
  Building2,
  Phone,
  MapPin,
  Clock3,
  ChevronRight,
  ArrowRight,
  HeartPulse,
  UserRound,
  ShieldCheck,
  Languages,
} from "lucide-react";

import {useDoctors} from "./../api/hooks/useDoctors";
import {useDepartments} from "./../api/hooks/useDepartments";
import "./HospitalAIAgent.css";

const ROUTES = {
  doctors: "/doctors",
  departments: "/department",
  appointment: "/appointment",
  contact: "/contact",
  emergency: "/emergency",
  opd: "/opd-schedule",
};

const QUICK_ACTIONS = [
  { label: "Find a Doctor", hi: "डॉक्टर खोजें", icon: Stethoscope, message: "Show doctors" },
  { label: "Departments", hi: "विभाग देखें", icon: Building2, message: "Show departments" },
  { label: "Appointment", hi: "अपॉइंटमेंट", icon: CalendarDays, message: "Book appointment" },
  { label: "OPD Timings", hi: "OPD समय", icon: Clock3, message: "OPD timings" },
  { label: "Hospital Location", hi: "अस्पताल का पता", icon: MapPin, message: "Hospital location" },
  { label: "Emergency Help", hi: "इमरजेंसी सहायता", icon: HeartPulse, message: "Emergency help" },
];

const SPECIALTY_MAP = [
  {
    keywords: ["skin", "acne", "pimple", "rash", "hair fall", "त्वचा", "मुंहासे", "बाल झड़", "खुजली"],
    specialties: ["dermatology", "dermatologist", "skin"],
    department: "dermatology",
    label: "Dermatology",
  },
  {
    keywords: ["heart", "cardiac", "chest pain", "दिल", "हृदय", "सीने में दर्द"],
    specialties: ["cardiology", "cardiologist"],
    department: "cardiology",
    label: "Cardiology",
  },
  {
    keywords: ["brain", "nerve", "neurology", "headache", "migraine", "दिमाग", "नस", "माइग्रेन", "सिरदर्द"],
    specialties: ["neurology", "neurologist", "neuro surgeon", "neurosurgery"],
    department: "neurology",
    label: "Neurology",
  },
  {
    keywords: ["bone", "joint", "knee", "back pain", "fracture", "हड्डी", "जोड़", "घुटना", "कमर दर्द"],
    specialties: ["orthopedic", "orthopaedic", "orthopedics", "orthopedic surgeon"],
    department: "orthopedics",
    label: "Orthopedics",
  },
  {
    keywords: ["child", "baby", "kid", "pediatric", "बच्चा", "बच्चे", "शिशु"],
    specialties: ["pediatric", "paediatric", "pediatrics"],
    department: "pediatrics",
    label: "Pediatrics",
  },
  {
    keywords: ["pregnancy", "period", "women health", "gynecologist", "pregnant", "गर्भावस्था", "मासिक धर्म", "महिला डॉक्टर"],
    specialties: ["gynecology", "gynaecologist", "gynecologist", "obstetrics"],
    department: "gynecology",
    label: "Gynecology",
  },
  {
    keywords: ["eye", "eyesight", "vision", "आंख", "आँख", "नज़र", "नजर"],
    specialties: ["ophthalmology", "ophthalmologist", "eye"],
    department: "ophthalmology",
    label: "Ophthalmology",
  },
  {
    keywords: ["ear", "nose", "throat", "hearing", "कान", "नाक", "गला"],
    specialties: ["ent", "otolaryngology"],
    department: "ent",
    label: "ENT",
  },
  {
    keywords: ["stomach", "digestion", "gastric", "liver", "पेट", "पाचन", "लीवर", "लिवर"],
    specialties: ["gastroenterology", "gastroenterologist"],
    department: "gastroenterology",
    label: "Gastroenterology",
  },
  {
    keywords: ["cancer", "tumor", "tumour", "कैंसर", "ट्यूमर"],
    specialties: ["oncology", "oncologist", "onco surgeon"],
    department: "oncology",
    label: "Oncology",
  },
  {
    keywords: ["lung", "breathing problem", "asthma", "फेफड़े", "सांस लेने"],
    specialties: ["pulmonology", "pulmonologist"],
    department: "pulmonology",
    label: "Pulmonology",
  },
  {
    keywords: ["fever", "weakness", "general physician", "बुखार", "कमजोरी"],
    specialties: ["general medicine", "physician", "internal medicine", "medicine"],
    department: "medicine",
    label: "General Medicine",
  },
];

function normalise(value) {
  return String(value ?? "").toLowerCase().trim();
}

function getArray(response) {
  if (Array.isArray(response)) return response;
  if (Array.isArray(response?.data)) return response.data;
  if (Array.isArray(response?.data?.data)) return response.data.data;
  if (Array.isArray(response?.doctors)) return response.doctors;
  if (Array.isArray(response?.departments)) return response.departments;
  return [];
}

function getDoctorName(doctor) {
  return doctor?.name || doctor?.doctor_name || doctor?.doctorName || "Doctor";
}

function getDoctorSpecialty(doctor) {
  return doctor?.specialty_name ||
    doctor?.speciality_name ||
    doctor?.specialization ||
    doctor?.department_name ||
    "Specialist";
}

function getDepartmentName(department) {
  return department?.name || department?.departmentName || "Department";
}

function getDoctorImage(doctor) {
  const image = doctor?.image_url || doctor?.image || doctor?.profile_image;

  if (!image) return "";

  if (/^https?:\/\//i.test(image)) return image;

  const apiBase = process.env.NEXT_PUBLIC_API_URL;

  if (apiBase) {
    try {
      return new URL(image, apiBase).toString();
    } catch {
      return image;
    }
  }

  return image;
}

function getActiveDoctors(list) {
  return list.filter((doctor) => {
    const active = doctor?.status;
    return active === undefined ||
      active === null ||
      active === 1 ||
      active === "1" ||
      active === true ||
      active === "active";
  });
}

function getActiveDepartments(list) {
  return list.filter((department) => {
    const status = department?.status;
    const notDeleted =
      department?.delete_status === undefined ||
      department?.delete_status === null ||
      Number(department.delete_status) === 0;

    const active =
      status === undefined ||
      status === null ||
      status === 1 ||
      status === "1" ||
      status === true ||
      status === "active";

    return active && notDeleted;
  });
}

function getSuggestionForQuery(query) {
  const q = normalise(query);

  return SPECIALTY_MAP.find((item) =>
    item.keywords.some((word) => q.includes(normalise(word)))
  );
}

function isGreeting(query) {
  return /^(hi|hello|hey|namaste|namaskar|नमस्ते|नमस्कार|हेलो|हाय|good morning|good afternoon|good evening)[!. ]*$/i
    .test(query.trim());
}

function isEmergency(query) {
  return /emergency|ambulance|chest pain|severe bleeding|can't breathe|cannot breathe|unconscious|stroke|सीने में तेज दर्द|सांस नहीं|बेहोश|बहुत खून|इमरजेंसी|एम्बुलेंस/i
    .test(query);
}

export default function HospitalAIAgent() {
  const router = useRouter();

  const {
    doctors: doctorsResponse = [],
    error: doctorError,
    isLoading: doctorsLoading,
  } = useDoctors();

  const {
    departments: departmentsResponse = [],
    error: departmentError,
    isLoading: departmentsLoading,
  } = useDepartments();

  const doctors = useMemo(
    () => getActiveDoctors(getArray(doctorsResponse)),
    [doctorsResponse]
  );

  const departments = useMemo(
    () => getActiveDepartments(getArray(departmentsResponse)),
    [departmentsResponse]
  );

  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState([]);
  const [expandedDoctors, setExpandedDoctors] = useState({});
  const listRef = useRef(null);
  const inputRef = useRef(null);
  const recognitionRef = useRef(null);
  const typingRef = useRef(null);

  const hi = language === "hi";

  const text = useMemo(() => ({
    title: "Hospital AI Assistant",
    subtitle: hi ? "आपकी सहायता के लिए हमेशा तैयार" : "Here to help you",
    placeholder: hi ? "अपना सवाल यहाँ लिखें..." : "Ask about doctors, symptoms or services...",
    welcome: hi
      ? "नमस्ते! Baderia Metroprime Multi Speciality Hospital में आपका स्वागत है। 😊 मैं डॉक्टर खोजने, विभागों की जानकारी और अपॉइंटमेंट में मदद कर सकता हूँ। आज मैं आपकी क्या मदद करूँ?"
      : "Hello! Welcome to Baderia Metroprime Multi Speciality Hospital. 😊 I can help you find doctors, explore departments, and learn about appointments. How can I help you today?",
    doctorLoading: hi ? "डॉक्टरों की जानकारी लोड हो रही है..." : "Loading doctor information...",
    noDoctors: hi ? "अभी डॉक्टरों की सूची उपलब्ध नहीं है। कृपया बाद में प्रयास करें या अस्पताल से संपर्क करें।" : "The doctor list is not available right now. Please try again later or contact the hospital.",
    departmentLoading: hi ? "विभागों की जानकारी लोड हो रही है..." : "Loading department information...",
    noDepartments: hi ? "अभी विभागों की सूची उपलब्ध नहीं है।" : "The department list is not available right now.",
    viewDoctors: hi ? "सभी डॉक्टर देखें" : "View All Doctors",
    appointment: hi ? "अपॉइंटमेंट लें" : "Book Appointment",
    viewDepartments: hi ? "सभी विभाग देखें" : "View All Departments",
    listen: hi ? "सुनें" : "Listen",
    today: hi ? "आज" : "TODAY",
    typing: hi ? "जवाब तैयार हो रहा है..." : "Preparing a response...",
  }), [hi]);

  useEffect(() => {
    setMessages((previous) => {
      if (previous.length) return previous;
      return [{
        id: "welcome",
        role: "assistant",
        text: text.welcome,
        actions: QUICK_ACTIONS.slice(0, 3).map((action) => ({
          label: hi ? action.hi : action.label,
          message: action.message,
        })),
        time: new Date(),
      }];
    });
  }, [text.welcome, hi]);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTo({
        top: listRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isTyping, isOpen]);

  useEffect(() => {
    return () => {
      if (typingRef.current) clearTimeout(typingRef.current);
      recognitionRef.current?.stop?.();
    };
  }, []);

  const navigateTo = useCallback((path) => {
    if (!path) return;
    setIsOpen(false);
    router.push(path);
  }, [router]);

  const findDoctors = useCallback((query, suggestion) => {
    const q = normalise(query);

    if (suggestion) {
      const matches = doctors.filter((doctor) => {
        const searchable = normalise(
          `${getDoctorName(doctor)} ${getDoctorSpecialty(doctor)} ${
            doctor?.department_name || ""
          } ${doctor?.qualification || ""}`
        );

        return suggestion.specialties.some((specialty) =>
          searchable.includes(normalise(specialty))
        ) || searchable.includes(normalise(suggestion.department));
      });

      if (matches.length) return matches;
    }

    const directMatches = doctors.filter((doctor) => {
      const searchable = normalise(
        `${getDoctorName(doctor)} ${getDoctorSpecialty(doctor)} ${
          doctor?.department_name || ""
        } ${doctor?.qualification || ""}`
      );

      const words = q.split(/[\s,?.!]+/).filter((word) => word.length > 2);
      return searchable.includes(q) ||
        words.some((word) => searchable.includes(word));
    });

    return directMatches.length ? directMatches : doctors;
  }, [doctors]);

  const createReply = useCallback((query) => {
    const q = normalise(query);
    const actions = (...items) => items.filter(Boolean);

    if (isEmergency(q)) {
      return {
        text: hi
          ? "यह इमरजेंसी हो सकती है। कृपया चैट के जवाब का इंतजार न करें—तुरंत नजदीकी इमरजेंसी सेवा से संपर्क करें। भारत में 112 एकीकृत आपातकालीन नंबर है। मैं यहाँ से मेडिकल इमरजेंसी का आकलन नहीं कर सकता।"
          : "This may be an emergency. Please do not wait for a chat response—contact emergency services immediately. In India, 112 is the integrated emergency number. I cannot assess a medical emergency through this chat.",
        actions: actions(
          { label: hi ? "इमरजेंसी जानकारी" : "Emergency Information", path: ROUTES.emergency },
          { label: hi ? "अस्पताल से संपर्क" : "Contact Hospital", path: ROUTES.contact }
        ),
      };
    }

    // if (isGreeting(q)) {
    //   return {
    //     text: hi
    //       ? "नमस्ते! 😊 आप मुझसे सामान्य सवाल पूछ सकते हैं। मैं डॉक्टरों के नाम और फोटो दिखा सकता हूँ, विभागों की सूची दे सकता हूँ और सही विभाग खोजने में मदद कर सकता हूँ। आपको किस तरह की मदद चाहिए?"
    //       : "Hello! 😊 Feel free to ask me questions. I can show doctor names and photos, list hospital departments, and help you find a relevant specialty. What would you like help with?",
    //     actions: QUICK_ACTIONS.slice(0, 4).map((item) => ({
    //       label: hi ? item.hi : item.label,
    //       message: item.message,
    //     })),
    //   };
    // }

    
if (isGreeting(q)) {
  const hour = new Date().getHours();

  const greeting =
    hour >= 5 && hour < 12
      ? "Good Morning"
      : hour >= 12 && hour < 17
      ? "Good Afternoon"
      : "Good Evening";

  return {
    text: hi
      ? `नमस्ते! 😊 Baderia Metroprime Multi Speciality Hospital में आपका स्वागत है। मैं आपकी कैसे मदद कर सकता हूँ? आप डॉक्टर, विभाग, अपॉइंटमेंट या OPD समय के बारे में पूछ सकते हैं।`
      : `Hello! 😊 ${greeting} and welcome to Baderia Metroprime Multi Speciality Hospital. How can I help you today? You can ask me about doctors, departments, appointments, or OPD timings.`,
    actions: QUICK_ACTIONS.slice(0, 4).map((item) => ({
      label: hi ? item.hi : item.label,
      message: item.message,
    })),
  };
}


    const departmentIntent = /department|departments|specialties|specialities|विभाग|डिपार्टमेंट|कौन से विभाग/i.test(q);
    const doctorIntent = /doctor|doctors|specialist|physician|surgeon|डॉक्टर|डाक्टर|चिकित्सक/i.test(q);
    const appointmentIntent = /appointment|book|booking|अपॉइंटमेंट|बुकिंग|मुलाकात/i.test(q);
    const contactIntent = /contact|phone number|address|location|directions|संपर्क|फोन नंबर|पता|लोकेशन|रास्ता/i.test(q);
    const timingIntent = /opd|timing|timings|schedule|opening hours|समय|टाइमिंग|ओपीडी/i.test(q);

    if (departmentIntent) {
      if (departmentsLoading) {
        return { text: text.departmentLoading };
      }

      if (departmentError || !departments.length) {
        return {
          text: text.noDepartments,
          actions: [{ label: hi ? "विभाग पेज खोलें" : "Open Departments", path: ROUTES.departments }],
        };
      }

      return {
        text: hi
          ? `हमारे उपलब्ध विभाग (${departments.length}) नीचे दिए गए हैं। आप किसी विभाग का नाम पूछकर उससे संबंधित डॉक्टर भी खोज सकते हैं।`
          : `Here are our available departments (${departments.length}). Ask for any department to find relevant doctors.`,
        departments,
        actions: [{ label: text.viewDepartments, path: ROUTES.departments }],
      };
    }

    const suggestion = getSuggestionForQuery(q);

    // Recommend matching doctors when the user mentions a symptom,
    // a specialty, or asks to find a doctor.
    if (suggestion || doctorIntent) {
      if (doctorsLoading) {
        return { text: text.doctorLoading };
      }

      if (doctorError || !doctors.length) {
        return {
          text: text.noDoctors,
          actions: [{ label: text.viewDoctors, path: ROUTES.doctors }],
        };
      }

      const results = findDoctors(q, suggestion).slice(0, 5);

      let intro;

      if (suggestion) {
        intro = hi
          ? `आपके सवाल के आधार पर **${suggestion.label}** विभाग के डॉक्टर देखना उपयोगी हो सकता है। यह केवल सामान्य दिशा-निर्देश है, diagnosis नहीं। नीचे उपलब्ध डॉक्टरों की सूची है:`
          : `Based on your question, doctors in **${suggestion.label}** may be a relevant place to start. This is general guidance, not a diagnosis. Here are the available doctors:`;
      } else {
        intro = hi
          ? "यहाँ उपलब्ध डॉक्टरों में से कुछ हैं। आप किसी विशेषता या डॉक्टर के नाम से भी पूछ सकते हैं:"
          : "Here are some available doctors. You can also ask for a particular specialty or doctor by name:";
      }

      return {
        text: intro,
        doctors: results,
        actions: actions(
          { label: text.viewDoctors, path: ROUTES.doctors },
          { label: text.appointment, path: ROUTES.appointment }
        ),
      };
    }

    if (appointmentIntent) {
      return {
        text: hi
          ? "अपॉइंटमेंट के लिए Appointment पेज खोलें। वहाँ उपलब्ध विकल्प देखें। अस्पताल की पुष्टि मिलने तक अपॉइंटमेंट कन्फर्म नहीं माना जाएगा।"
          : "Open the Appointment page to check booking options. Your appointment is not confirmed until the hospital confirms it.",
        actions: [{ label: text.appointment, path: ROUTES.appointment }],
      };
    }

    if (timingIntent) {
      return {
        text: hi
          ? "OPD के सही समय और डॉक्टर की उपलब्धता के लिए अस्पताल का schedule देखें। डॉक्टरों के समय अलग-अलग हो सकते हैं।"
          : "Please check the hospital's schedule for current OPD timings and doctor availability. Individual doctor schedules may differ.",
        actions: [
          { label: hi ? "OPD Schedule" : "OPD Schedule", path: ROUTES.opd },
          { label: hi ? "अस्पताल से संपर्क" : "Contact Hospital", path: ROUTES.contact },
        ],
      };
    }

    if (contactIntent) {
      return {
        text: hi
          ? "अस्पताल का सत्यापित पता और संपर्क विवरण देखने के लिए Contact पेज खोलें।"
          : "Open the Contact page for the hospital's verified address and contact details.",
        actions: [{ label: hi ? "Contact पेज" : "Contact Page", path: ROUTES.contact }],
      };
    }

    if (/thank|thanks|धन्यवाद|शुक्रिया/i.test(q)) {
      return {
        text: hi
          ? "आपका स्वागत है! 😊 अगर आपको किसी डॉक्टर या विभाग की जानकारी चाहिए तो पूछिए।"
          : "You're welcome! 😊 Feel free to ask if you need information about a doctor or department.",
        actions: QUICK_ACTIONS.slice(0, 3).map((item) => ({
          label: hi ? item.hi : item.label,
          message: item.message,
        })),
      };
    }

    return {
      text: hi
        ? "मैं आपकी मदद करने की कोशिश करूँगा। आप डॉक्टर के नाम, विशेषज्ञता, अस्पताल के विभाग, अपॉइंटमेंट या OPD समय के बारे में पूछ सकते हैं। अगर आप लक्षण बता रहे हैं, तो मैं संबंधित विभाग खोजने में मदद कर सकता हूँ, लेकिन बीमारी का diagnosis नहीं कर सकता।"
        : "I'll do my best to help. You can ask about a doctor's name, specialty, hospital departments, appointments, or OPD timings. If you describe symptoms, I can suggest a relevant department to explore, but I cannot diagnose a condition.",
      actions: QUICK_ACTIONS.slice(0, 4).map((item) => ({
        label: hi ? item.hi : item.label,
        message: item.message,
      })),
    };
  }, [
    hi,
    doctors,
    departments,
    doctorsLoading,
    departmentsLoading,
    doctorError,
    departmentError,
    text,
    findDoctors,
  ]);

  const sendMessage = useCallback((value) => {
    const query = String(value ?? input).trim();
    if (!query || isTyping) return;

    setMessages((previous) => [
      ...previous,
      {
        id: `${Date.now()}-user`,
        role: "user",
        text: query,
        time: new Date(),
      },
    ]);

    setInput("");
    setIsTyping(true);

    typingRef.current = setTimeout(() => {
      const reply = createReply(query);

      setMessages((previous) => [
        ...previous,
        {
          id: `${Date.now()}-assistant`,
          role: "assistant",
          ...reply,
          time: new Date(),
        },
      ]);

      setIsTyping(false);
    }, 350);
  }, [input, isTyping, createReply]);

  const handleAction = (action) => {
    if (action.path) {
      navigateTo(action.path);
    } else if (action.message) {
      sendMessage(action.message);
    }
  };

  const resetChat = () => {
    if (typingRef.current) clearTimeout(typingRef.current);
    setIsTyping(false);
    setMessages([{
      id: `welcome-${Date.now()}`,
      role: "assistant",
      text: text.welcome,
      actions: QUICK_ACTIONS.slice(0, 3).map((action) => ({
        label: hi ? action.hi : action.label,
        message: action.message,
      })),
      time: new Date(),
    }]);
    setInput("");
    setExpandedDoctors({});
  };

  const toggleVoice = () => {
    if (isListening) {
      recognitionRef.current?.stop?.();
      setIsListening(false);
      return;
    }

    if (typeof window === "undefined") return;

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setMessages((previous) => [
        ...previous,
        {
          id: Date.now(),
          role: "assistant",
          text: hi
            ? "आपके ब्राउज़र में voice input उपलब्ध नहीं है। कृपया टाइप करके पूछें।"
            : "Voice input is not supported by this browser. Please type your question.",
          time: new Date(),
        },
      ]);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = hi ? "hi-IN" : "en-IN";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onerror = () => setIsListening(false);
    recognition.onresult = (event) => {
      const transcript = event.results?.[0]?.[0]?.transcript || "";
      setInput(transcript);
      inputRef.current?.focus();
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const speak = (message) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = hi ? "hi-IN" : "en-IN";
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="hospital-ai-root">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            type="button"
            className="hospital-ai-launcher"
            onClick={() => setIsOpen(true)}
            aria-label="Open hospital AI assistant"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <Bot size={25} />
            <span>{hi ? "AI सहायता" : "Ask AI"}</span>
            <span className="hospital-ai-launcher-dot" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.section
            className="hospital-ai-window"
            role="dialog"
            aria-label={text.title}
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            <header className="hospital-ai-header">
              <div className="hospital-ai-header-brand">
                <div className="hospital-ai-logo"><Bot size={24} /></div>
                <div>
                  <h2>{text.title}</h2>
                  <p><span className="hospital-ai-status" />{text.subtitle}</p>
                </div>
              </div>

              <div className="hospital-ai-header-buttons">
                <button type="button" title="Change language" onClick={() => setLanguage((current) => current === "en" ? "hi" : "en")}>
                  <Languages size={17} /><span>{hi ? "HI" : "EN"}</span>
                </button>
                <button type="button" title="New chat" onClick={resetChat}><RotateCcw size={17} /></button>
                <button type="button" title="Minimize" onClick={() => setIsOpen(false)}><X size={20} /></button>
              </div>
            </header>

            <div className="hospital-ai-trust">
              <ShieldCheck size={15} />
              <span>{hi ? "डॉक्टर, विभाग और अस्पताल की जानकारी" : "Doctor, department and hospital information"}</span>
            </div>

            <div className="hospital-ai-messages" ref={listRef}>
              <div className="hospital-ai-date"><span>{text.today}</span></div>

              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`hospital-ai-message-row ${message.role === "user" ? "is-user" : "is-assistant"}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {message.role === "assistant" && (
                    <div className="hospital-ai-message-avatar"><Bot size={16} /></div>
                  )}

                  <div className="hospital-ai-message-content">
                    <div className="hospital-ai-bubble">
                      <p>{message.text}</p>
                    </div>

                    {/* DOCTOR CARDS: images + names */}
                    {message.doctors?.length > 0 && (
                      <div className="hospital-ai-doctor-list">
                        {message.doctors.map((doctor) => {
                          const doctorId = doctor.id;
                          const doctorName = getDoctorName(doctor);
                          const imageUrl = getDoctorImage(doctor);
                          const expanded = Boolean(expandedDoctors[doctorId]);

                          return (
                            <article className="hospital-ai-doctor-card" key={doctorId ?? doctorName}>
                              <div className="hospital-ai-doctor-photo">
                                {imageUrl ? (
                                  <img
                                    src={imageUrl}
                                    alt={doctorName}
                                    loading="lazy"
                                    onError={(event) => {
                                      event.currentTarget.style.display = "none";
                                    }}
                                  />
                                ) : (
                                  <UserRound size={28} />
                                )}
                              </div>

                              <div className="hospital-ai-doctor-info">
                                <h3>{doctorName}</h3>
                                <p className="hospital-ai-doctor-specialty">
                                  {getDoctorSpecialty(doctor)}
                                </p>
                                {doctor.department_name && (
                                  <p className="hospital-ai-doctor-department">
                                    {doctor.department_name}
                                  </p>
                                )}
                                {(doctor.web_experience || Number(doctor.experience_years) > 0) && (
                                  <p className="hospital-ai-doctor-experience">
                                    {doctor.web_experience ||
                                      `${doctor.experience_years} ${hi ? "वर्ष का अनुभव" : "years experience"}`}
                                  </p>
                                )}

                                {expanded && (
                                  <p className="hospital-ai-doctor-qualification">
                                    <strong>{hi ? "योग्यता: " : "Qualification: "}</strong>
                                    {doctor.qualification || (hi ? "उपलब्ध नहीं" : "Not provided")}
                                  </p>
                                )}

                                <button
                                  type="button"
                                  className="hospital-ai-doctor-details"
                                  onClick={() => setExpandedDoctors((previous) => ({
                                    ...previous,
                                    [doctorId]: !previous[doctorId],
                                  }))}
                                >
                                  {expanded
                                    ? (hi ? "कम जानकारी" : "Less details")
                                    : (hi ? "योग्यता देखें" : "View qualification")}
                                  <ChevronRight size={13} />
                                </button>

                                <button
                                  type="button"
                                  className="hospital-ai-doctor-book"
                                  onClick={() => navigateTo(ROUTES.appointment)}
                                >
                                  {hi ? "अपॉइंटमेंट" : "Appointment"}
                                  <ArrowRight size={13} />
                                </button>
                              </div>
                            </article>
                          );
                        })}
                      </div>
                    )}

                    {/* DEPARTMENT LIST: text only, no images */}
                    {message.departments?.length > 0 && (
                      <div className="hospital-ai-department-list">
                        {message.departments.map((department) => (
                          <button
                            type="button"
                            key={department.id ?? department.slug ?? getDepartmentName(department)}
                            className="hospital-ai-department-item"
                            onClick={() => sendMessage(`Show doctors in ${getDepartmentName(department)}`)}
                          >
                            <span className="hospital-ai-department-icon"><Building2 size={17} /></span>
                            <span className="hospital-ai-department-name">
                              <strong>{getDepartmentName(department)}</strong>
                              {department.short_description && (
                                <small>{department.short_description}</small>
                              )}
                            </span>
                            <ChevronRight size={16} />
                          </button>
                        ))}
                      </div>
                    )}

                    {message.actions?.length > 0 && (
                      <div className="hospital-ai-message-actions">
                        {message.actions.map((action, index) => (
                          <button
                            type="button"
                            key={`${message.id}-action-${index}`}
                            onClick={() => handleAction(action)}
                          >
                            {action.label}
                            <ArrowRight size={13} />
                          </button>
                        ))}
                      </div>
                    )}

                    {message.role === "assistant" && (
                      <button
                        type="button"
                        className="hospital-ai-listen"
                        onClick={() => speak(message.text)}
                      >
                        <span>▶</span> {hi ? "जवाब सुनें" : "Listen"}
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="hospital-ai-message-row is-assistant">
                  <div className="hospital-ai-message-avatar"><Bot size={16} /></div>
                  <div className="hospital-ai-typing" aria-label={text.typing}>
                    <span /><span /><span />
                  </div>
                </div>
              )}
            </div>

            <div className="hospital-ai-quick-section">
              <p>{hi ? "त्वरित सहायता" : "QUICK ASSISTANCE"}</p>
              <div className="hospital-ai-quick-grid">
                {QUICK_ACTIONS.map((action) => {
                  const Icon = action.icon;
                  return (
                    <button
                      type="button"
                      key={action.message}
                      onClick={() => sendMessage(action.message)}
                      disabled={isTyping}
                    >
                      <Icon size={15} />
                      <span>{hi ? action.hi : action.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <form
              className="hospital-ai-composer"
              onSubmit={(event) => {
                event.preventDefault();
                sendMessage();
              }}
            >
              <button
                type="button"
                className={`hospital-ai-mic ${isListening ? "is-listening" : ""}`}
                onClick={toggleVoice}
                title={hi ? "आवाज़ से पूछें" : "Speak"}
                aria-label="Voice input"
              >
                {isListening ? <MicOff size={18} /> : <Mic size={18} />}
              </button>

              <input
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder={text.placeholder}
                aria-label={text.placeholder}
                maxLength={1000}
              />

              <button
                type="submit"
                className="hospital-ai-send"
                disabled={!input.trim() || isTyping}
                aria-label="Send message"
              >
                <Send size={17} />
              </button>
            </form>

            <footer className="hospital-ai-footer">
              <ShieldCheck size={13} />
              <span>
                {hi
                  ? "सामान्य जानकारी בלבד। यह मेडिकल diagnosis नहीं है।"
                  : "General information only. Not a medical diagnosis."}
              </span>
            </footer>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
