
// "use client";

// import { useEffect, useRef, useState } from "react";
// import {
//   Bot,
//   X,
//   Send,
//   Mic,
//   Sparkles,
//   CalendarDays,
//   UserRound,
//   Hospital,
//   MapPin,
//   Phone,
//   Clock3,
// } from "lucide-react";
// import "./HospitalAIAgent.css";

// const suggestions = [
//   {
//     icon: CalendarDays,
//     text: "Book an Appointment",
//   },
//   {
//     icon: UserRound,
//     text: "Find a Doctor",
//   },
//   {
//     icon: Hospital,
//     text: "Departments",
//   },
//   {
//     icon: Clock3,
//     text: "OPD Timings",
//   },
//   {
//     icon: MapPin,
//     text: "Hospital Location",
//   },
//   {
//     icon: Phone,
//     text: "Contact Hospital",
//   },
// ];

// export default function HospitalAIAgent() {
//   const [open, setOpen] = useState(false);
//   const [input, setInput] = useState("");
//   const [typing, setTyping] = useState(false);

//   const [messages, setMessages] = useState([
//     {
//       role: "assistant",
//       text:
//         "Hello! 👋 Welcome to Baderia Metroprime Multi Speciality Hospital, Jabalpur.\n\nHow can I help you today?",
//     },
//   ]);

//   const messagesEndRef = useRef(null);
//   const recognitionRef = useRef(null);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({
//       behavior: "smooth",
//     });
//   }, [messages, typing]);

//   const addMessage = (role, text) => {
//     setMessages((prev) => [
//       ...prev,
//       {
//         role,
//         text,
//       },
//     ]);
//   };

//   const getReply = (message) => {
//     const text = message.toLowerCase();

//     if (
//       text.includes("appointment") ||
//       text.includes("book") ||
//       text.includes("appointment book")
//     ) {
//       return (
//         "Sure! I can help you with an appointment. 📅\n\n" +
//         "Please select your preferred department or doctor. " +
//         "Our reception team can confirm the available slot."
//       );
//     }

//     if (
//       text.includes("doctor") ||
//       text.includes("specialist")
//     ) {
//       return (
//         "Sure. 👨‍⚕️\n\n" +
//         "I can help you find the right specialist. " +
//         "Please tell me the department or the health concern you want to consult about."
//       );
//     }

//     if (
//       text.includes("department") ||
//       text.includes("departments")
//     ) {
//       return (
//         "🏥 You can ask about hospital departments and specialties.\n\n" +
//         "For the most accurate doctor availability and department information, please contact the hospital reception."
//       );
//     }

//     if (
//       text.includes("timing") ||
//       text.includes("opd") ||
//       text.includes("time")
//     ) {
//       return (
//         "🕐 OPD timings can vary depending on the doctor and department.\n\n" +
//         "I recommend confirming the current timing with the hospital reception before visiting."
//       );
//     }

//     if (
//       text.includes("location") ||
//       text.includes("address") ||
//       text.includes("where")
//     ) {
//       return (
//         "📍 Baderia Metroprime Multi Speciality Hospital is located in Jabalpur, Madhya Pradesh.\n\n" +
//         "You can use the hospital's location/map section for directions."
//       );
//     }

//     if (
//       text.includes("contact") ||
//       text.includes("phone") ||
//       text.includes("call")
//     ) {
//       return (
//         "📞 You can contact the hospital reception for appointments, doctor availability and other hospital information."
//       );
//     }

//     if (
//       text.includes("emergency") ||
//       text.includes("urgent")
//     ) {
//       return (
//         "🚨 If this is a medical emergency, please contact emergency services or visit the nearest emergency department immediately.\n\n" +
//         "Do not wait for an AI response in an emergency."
//       );
//     }

//     if (
//       text.includes("hello") ||
//       text.includes("hi") ||
//       text.includes("hey")
//     ) {
//       return (
//         "Hello! 👋\n\n" +
//         "I'm the Baderia Metroprime Hospital AI Assistant. How can I help you?"
//       );
//     }

//     if (
//       text.includes("hindi") ||
//       text.includes("हिंदी")
//     ) {
//       return (
//         "नमस्ते! 🙏\n\n" +
//         "मैं आपकी हिंदी में भी सहायता कर सकता हूँ। आप अपॉइंटमेंट, डॉक्टर, OPD टाइमिंग, विभाग या अस्पताल की जानकारी पूछ सकते हैं।"
//       );
//     }

//     return (
//       "I can help you with:\n\n" +
//       "• Appointments 📅\n" +
//       "• Doctors 👨‍⚕️\n" +
//       "• Departments 🏥\n" +
//       "• OPD timings 🕐\n" +
//       "• Hospital location 📍\n" +
//       "• Contact information 📞"
//     );
//   };

//   const sendMessage = (customText) => {
//     const message = customText || input.trim();

//     if (!message) return;

//     addMessage("user", message);
//     setInput("");
//     setTyping(true);

//     setTimeout(() => {
//       const reply = getReply(message);

//       setTyping(false);
//       addMessage("assistant", reply);
//     }, 700);
//   };

//   const startVoice = () => {
//     if (typeof window === "undefined") return;

//     const SpeechRecognition =
//       window.SpeechRecognition ||
//       window.webkitSpeechRecognition;

//     if (!SpeechRecognition) {
//       alert(
//         "Voice input is not supported in this browser. Please use Google Chrome."
//       );
//       return;
//     }

//     const recognition = new SpeechRecognition();

//     recognition.lang = "en-IN";
//     recognition.interimResults = false;
//     recognition.continuous = false;

//     recognition.onresult = (event) => {
//       const text =
//         event.results[0][0].transcript;

//       setInput(text);
//     };

//     recognition.start();

//     recognitionRef.current = recognition;
//   };

//   return (
//     <>
//       {/* Floating Button */}

//       {!open && (
//         <button
//           className="bma-floating"
//           onClick={() => setOpen(true)}
//           aria-label="Open AI Assistant"
//         >
//           <span className="bma-floating-icon">
//             <Sparkles size={20} />
//           </span>

//           <span className="bma-floating-text">
//             AI Assistant
//           </span>
//         </button>
//       )}

//       {/* Chat */}

//       {open && (
//         <div className="bma-chat">

//           {/* Header */}

//           <div className="bma-header">
//             <div className="bma-header-left">

//               <div className="bma-avatar">
//                 <Bot size={21} />
//               </div>

//               <div>
//                 <div className="bma-title">
//                   MetroPrime AI
//                 </div>

//                 <div className="bma-status">
//                   <span />
//                   Online
//                 </div>
//               </div>

//             </div>

//             <button
//               className="bma-close"
//               onClick={() => setOpen(false)}
//             >
//               <X size={20} />
//             </button>
//           </div>

//           {/* Hospital name */}

//           <div className="bma-hospital">
//             <Hospital size={15} />

//             <span>
//               Baderia Metroprime Multi Speciality
//               Hospital, Jabalpur
//             </span>
//           </div>

//           {/* Messages */}

//           <div className="bma-messages">

//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 className={`bma-message-row ${
//                   message.role === "user"
//                     ? "bma-user"
//                     : ""
//                 }`}
//               >

//                 {message.role === "assistant" && (
//                   <div className="bma-small-avatar">
//                     <Bot size={14} />
//                   </div>
//                 )}

//                 <div
//                   className={`bma-message ${
//                     message.role === "user"
//                       ? "bma-user-message"
//                       : "bma-ai-message"
//                   }`}
//                 >
//                   {message.text}
//                 </div>

//               </div>
//             ))}

//             {messages.length === 1 && (
//               <div className="bma-suggestions">

//                 {suggestions.map((item, index) => {
//                   const Icon = item.icon;

//                   return (
//                     <button
//                       key={index}
//                       onClick={() =>
//                         sendMessage(item.text)
//                       }
//                     >
//                       <Icon size={15} />

//                       <span>
//                         {item.text}
//                       </span>
//                     </button>
//                   );
//                 })}

//               </div>
//             )}

//             {typing && (
//               <div className="bma-message-row">

//                 <div className="bma-small-avatar">
//                   <Bot size={14} />
//                 </div>

//                 <div className="bma-typing">
//                   <span />
//                   <span />
//                   <span />
//                 </div>

//               </div>
//             )}

//             <div ref={messagesEndRef} />

//           </div>

//           {/* Emergency */}

//           <div className="bma-emergency">
//             🚨
//             <span>
//               For medical emergencies, contact
//               emergency services immediately.
//             </span>
//           </div>

//           {/* Input */}

//           <div className="bma-input-wrapper">

//             <button
//               className="bma-mic"
//               onClick={startVoice}
//               title="Voice input"
//             >
//               <Mic size={18} />
//             </button>

//             <input
//               type="text"
//               value={input}
//               onChange={(e) =>
//                 setInput(e.target.value)
//               }
//               onKeyDown={(e) => {
//                 if (e.key === "Enter") {
//                   sendMessage();
//                 }
//               }}
//               placeholder="Ask anything..."
//             />

//             <button
//               className="bma-send"
//               onClick={() => sendMessage()}
//               disabled={!input.trim()}
//             >
//               <Send size={17} />
//             </button>

//           </div>

//           <div className="bma-disclaimer">
//             AI assistant provides general information
//             and does not replace medical advice.
//           </div>

//         </div>
//       )}
//     </>
//   );
// }


// "use client";

// import { useEffect, useRef, useState } from "react";
// import {
//   Bot,
//   X,
//   Send,
//   Mic,
//   Sparkles,
//   CalendarDays,
//   UserRound,
//   Hospital,
//   MapPin,
//   Phone,
//   Clock3,
//   ShieldCheck,
//   MessageCircle,
// } from "lucide-react";
// import "./HospitalAIAgent.css";

// const suggestions = [
//   { icon: CalendarDays, text: "Book an Appointment" },
//   { icon: UserRound, text: "Find a Doctor" },
//   { icon: Hospital, text: "Departments" },
//   { icon: Clock3, text: "OPD Timings" },
//   { icon: MapPin, text: "Hospital Location" },
//   { icon: Phone, text: "Contact Hospital" },
// ];

// const initialMessage = {
//   role: "assistant",
//   text: "Hello! 👋 Welcome to Baderia Metroprime Multi Speciality Hospital, Jabalpur.\n\nI'm your virtual hospital assistant. How can I help you today?",
// };

// export default function HospitalAIAgent() {
//   const [open, setOpen] = useState(false);
//   const [input, setInput] = useState("");
//   const [typing, setTyping] = useState(false);
//   const [listening, setListening] = useState(false);
//   const [messages, setMessages] = useState([initialMessage]);

//   const messagesEndRef = useRef(null);
//   const recognitionRef = useRef(null);
//   const timerRef = useRef(null);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({
//       behavior: "smooth",
//       block: "end",
//     });
//   }, [messages, typing, open]);

//   useEffect(() => {
//     return () => {
//       if (timerRef.current) clearTimeout(timerRef.current);
//       recognitionRef.current?.abort();
//     };
//   }, []);

//   const addMessage = (role, text) => {
//     setMessages((previous) => [...previous, { role, text }]);
//   };

//   const getReply = (message) => {
//     const text = message.toLowerCase();

//     if (/emergency|urgent|chest pain|सांस नहीं|बेहोश/.test(text)) {
//       return "🚨 If this is a medical emergency, please visit the nearest emergency department or contact local emergency services immediately. Do not wait for an AI response.";
//     }

//     if (/appointment|book|booking|अपॉइंटमेंट/.test(text)) {
//       return "📅 I'd be happy to help you with an appointment!\n\nPlease tell me your preferred department or doctor's name. For confirmed appointment slots, please contact the hospital reception.";
//     }

//     if (/doctor|specialist|physician|surgeon|डॉक्टर/.test(text)) {
//       return "👨‍⚕️ I can help you find the right specialist.\n\nPlease tell me which department you need, or briefly describe the type of consultation you are looking for.";
//     }

//     if (/department|specialt|cardiology|neurology|orthopedic|departments/.test(text)) {
//       return "🏥 We can help you with department and specialty information.\n\nPlease tell me which department you want to know about. For the latest department list and doctor availability, contact hospital reception.";
//     }

//     if (/timing|opd|opening hours|working hours|time/.test(text)) {
//       return "🕐 OPD timings may vary by doctor and department.\n\nPlease confirm the current consultation timings with the hospital reception before visiting.";
//     }

//     if (/location|address|direction|map|where/.test(text)) {
//       return "📍 Baderia Metroprime Multi Speciality Hospital is in Jabalpur, Madhya Pradesh.\n\nPlease use the hospital's official location or map section for directions.";
//     }

//     if (/contact|phone|call|number/.test(text)) {
//       return "📞 For appointments, doctor availability and other hospital information, please contact the hospital reception using the official contact details on the hospital website.";
//     }

//     if (/hindi|हिंदी|नमस्ते/.test(text)) {
//       return "नमस्ते! 🙏\n\nमैं Baderia Metroprime Hospital का वर्चुअल असिस्टेंट हूँ। मैं आपको अपॉइंटमेंट, डॉक्टर, विभाग, OPD टाइमिंग और अस्पताल की सामान्य जानकारी में मदद कर सकता हूँ।\n\nबताइए, आपको क्या जानना है?";
//     }

//     if (/hello|^hi\b|^hey\b|नमस्ते/.test(text)) {
//       return "Hello! 👋 Welcome to MetroPrime Hospital.\n\nHow can I assist you today?";
//     }

//     return "I'm here to help you with hospital information. 🏥\n\nYou can ask me about:\n\n📅 Appointments\n👨‍⚕️ Doctors and specialists\n🏥 Hospital departments\n🕐 OPD timings\n📍 Hospital location\n📞 Contact information\n\nWhat would you like to know?";
//   };

//   const sendMessage = (customText) => {
//     const message = (customText ?? input).trim();

//     if (!message || typing) return;

//     addMessage("user", message);
//     setInput("");
//     setTyping(true);

//     timerRef.current = setTimeout(() => {
//       addMessage("assistant", getReply(message));
//       setTyping(false);
//       timerRef.current = null;
//     }, 650);
//   };

//   const startVoice = () => {
//     if (typeof window === "undefined") return;

//     const SpeechRecognition =
//       window.SpeechRecognition || window.webkitSpeechRecognition;

//     if (!SpeechRecognition) {
//       window.alert(
//         "Voice input is not supported in this browser. Please try Google Chrome."
//       );
//       return;
//     }

//     recognitionRef.current?.abort();

//     const recognition = new SpeechRecognition();
//     recognition.lang = "en-IN";
//     recognition.interimResults = false;
//     recognition.continuous = false;

//     recognition.onstart = () => setListening(true);
//     recognition.onend = () => setListening(false);

//     recognition.onerror = () => {
//       setListening(false);
//     };

//     recognition.onresult = (event) => {
//       setInput(event.results[0][0].transcript);
//     };

//     recognitionRef.current = recognition;
//     recognition.start();
//   };

//   const closeChat = () => {
//     recognitionRef.current?.abort();
//     setListening(false);
//     setOpen(false);
//   };

//   return (
//     <>
//       {/* Animated icon-only floating button */}
//       {!open && (
//         <button
//           type="button"
//           className="bma-floating"
//           onClick={() => setOpen(true)}
//           aria-label="Open MetroPrime AI Assistant"
//           title="Chat with MetroPrime AI"
//         >
//           <span className="bma-orbit bma-orbit-one" />
//           <span className="bma-orbit bma-orbit-two" />

//           <span className="bma-floating-icon">
//             <Sparkles size={27} strokeWidth={1.8} />
//           </span>

//           <span className="bma-online-dot" />
//         </button>
//       )}

//       {/* Chat window */}
//       {open && (
//         <section
//           className="bma-chat"
//           role="dialog"
//           aria-label="MetroPrime AI Assistant"
//         >
//           <header className="bma-header">
//             <div className="bma-header-left">
//               <div className="bma-avatar">
//                 <Bot size={25} />
//                 <span className="bma-avatar-status" />
//               </div>

//               <div className="bma-header-info">
//                 <h3 className="bma-title">MetroPrime AI</h3>
//                 <div className="bma-status">
//                   <span />
//                   Virtual Assistant
//                 </div>
//               </div>
//             </div>

//             <button
//               type="button"
//               className="bma-close"
//               onClick={closeChat}
//               aria-label="Close chat"
//             >
//               <X size={21} />
//             </button>
//           </header>

//           <div className="bma-hospital">
//             <Hospital size={16} />
//             <span>
//               Baderia Metroprime Multi Speciality Hospital, Jabalpur
//             </span>
//           </div>

//           <div className="bma-welcome-strip">
//             <div className="bma-welcome-icon">
//               <ShieldCheck size={17} />
//             </div>
//             <div>
//               <strong>How can we help you?</strong>
//               <p>Your hospital information assistant</p>
//             </div>
//           </div>

//           <div className="bma-messages">
//             {messages.map((message, index) => (
//               <div
//                 key={`${index}-${message.role}`}
//                 className={`bma-message-row ${
//                   message.role === "user" ? "bma-user" : ""
//                 }`}
//               >
//                 {message.role === "assistant" && (
//                   <div className="bma-small-avatar">
//                     <Bot size={15} />
//                   </div>
//                 )}

//                 <div
//                   className={`bma-message ${
//                     message.role === "user"
//                       ? "bma-user-message"
//                       : "bma-ai-message"
//                   }`}
//                 >
//                   {message.text}
//                 </div>
//               </div>
//             ))}

//             {messages.length === 1 && (
//               <div className="bma-suggestions">
//                 <p className="bma-suggestions-title">
//                   QUICK ASSISTANCE
//                 </p>

//                 {suggestions.map((item) => {
//                   const Icon = item.icon;

//                   return (
//                     <button
//                       type="button"
//                       key={item.text}
//                       onClick={() => sendMessage(item.text)}
//                       disabled={typing}
//                     >
//                       <span className="bma-suggestion-icon">
//                         <Icon size={16} />
//                       </span>
//                       <span>{item.text}</span>
//                       <span className="bma-suggestion-arrow">↗</span>
//                     </button>
//                   );
//                 })}
//               </div>
//             )}

//             {typing && (
//               <div className="bma-message-row">
//                 <div className="bma-small-avatar">
//                   <Bot size={15} />
//                 </div>
//                 <div className="bma-typing" aria-label="Assistant is typing">
//                   <span />
//                   <span />
//                   <span />
//                 </div>
//               </div>
//             )}

//             <div ref={messagesEndRef} />
//           </div>

//           <div className="bma-emergency">
//             <span className="bma-emergency-icon">!</span>
//             <span>
//               Medical emergency? Contact emergency services immediately.
//             </span>
//           </div>

//           <form
//             className="bma-input-wrapper"
//             onSubmit={(event) => {
//               event.preventDefault();
//               sendMessage();
//             }}
//           >
//             <button
//               type="button"
//               className={`bma-mic ${listening ? "bma-listening" : ""}`}
//               onClick={startVoice}
//               title="Voice input"
//               aria-label="Use voice input"
//             >
//               <Mic size={18} />
//             </button>

//             <input
//               type="text"
//               value={input}
//               onChange={(event) => setInput(event.target.value)}
//               placeholder={listening ? "Listening..." : "Ask anything..."}
//               aria-label="Type your message"
//               autoComplete="off"
//             />

//             <button
//               type="submit"
//               className="bma-send"
//               disabled={!input.trim() || typing}
//               aria-label="Send message"
//             >
//               <Send size={17} />
//             </button>
//           </form>

//           <div className="bma-disclaimer">
//             <ShieldCheck size={12} />
//             <span>
//               AI can make mistakes. Not a substitute for medical advice.
//             </span>
//           </div>
//         </section>
//       )}
//     </>
//   );
// }



// "use client";

// import { useEffect, useRef, useState } from "react";
// import {
//   Bot,
//   X,
//   Send,
//   Mic,
//   CalendarDays,
//   UserRound,
//   Hospital,
//   MapPin,
//   Phone,
//   Clock3,
//   ShieldCheck,
//   ChevronRight,
// } from "lucide-react";

// import "./HospitalAIAgent.css";

// const suggestions = [
//   { icon: CalendarDays, text: "Book an Appointment" },
//   { icon: UserRound, text: "Find a Doctor" },
//   { icon: Hospital, text: "Departments" },
//   { icon: Clock3, text: "OPD Timings" },
//   { icon: MapPin, text: "Hospital Location" },
//   { icon: Phone, text: "Contact Hospital" },
// ];

// const initialMessage = {
//   role: "assistant",
//   text: "Hello! 👋 Welcome to Baderia Metroprime Multi Speciality Hospital, Jabalpur.\n\nI'm your virtual hospital assistant. How can I help you today?",
// };

// export default function HospitalAIAgent() {
//   const [open, setOpen] = useState(false);
//   const [input, setInput] = useState("");
//   const [typing, setTyping] = useState(false);
//   const [listening, setListening] = useState(false);
//   const [messages, setMessages] = useState([initialMessage]);

//   const messagesEndRef = useRef(null);
//   const recognitionRef = useRef(null);
//   const timerRef = useRef(null);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({
//       behavior: "smooth",
//       block: "end",
//     });
//   }, [messages, typing, open]);

//   useEffect(() => {
//     return () => {
//       if (timerRef.current) {
//         clearTimeout(timerRef.current);
//       }

//       recognitionRef.current?.abort();
//     };
//   }, []);

//   const addMessage = (role, text) => {
//     setMessages((previous) => [
//       ...previous,
//       { role, text },
//     ]);
//   };

//   const getReply = (message) => {
//     const text = message.toLowerCase();

//     if (
//       /emergency|urgent|chest pain|सांस नहीं|बेहोश/.test(text)
//     ) {
//       return (
//         "🚨 If this is a medical emergency, please visit the nearest emergency department or contact local emergency services immediately.\n\nDo not wait for an AI response in an emergency."
//       );
//     }

//     if (
//       /appointment|book|booking|अपॉइंटमेंट/.test(text)
//     ) {
//       return (
//         "📅 I'd be happy to help you with an appointment!\n\n" +
//         "Please tell me your preferred department or doctor's name. " +
//         "For confirmed appointment slots, please contact the hospital reception."
//       );
//     }

//     if (
//       /doctor|specialist|physician|surgeon|डॉक्टर/.test(text)
//     ) {
//       return (
//         "👨‍⚕️ I can help you find the right specialist.\n\n" +
//         "Please tell me which department you need, or briefly describe the type of consultation you are looking for."
//       );
//     }

//     if (
//       /department|specialt|cardiology|neurology|orthopedic/.test(text)
//     ) {
//       return (
//         "🏥 I can help you with hospital department information.\n\n" +
//         "Please tell me which department you want to know about. " +
//         "For the latest department list and doctor availability, contact hospital reception."
//       );
//     }

//     if (
//       /timing|opd|opening hours|working hours/.test(text)
//     ) {
//       return (
//         "🕐 OPD timings may vary by doctor and department.\n\n" +
//         "Please confirm the current consultation timings with the hospital reception before visiting."
//       );
//     }

//     if (
//       /location|address|direction|map|where/.test(text)
//     ) {
//       return (
//         "📍 Baderia Metroprime Multi Speciality Hospital is in Jabalpur, Madhya Pradesh.\n\n" +
//         "Please use the hospital's official location or map section for directions."
//       );
//     }

//     if (
//       /contact|phone|call|number/.test(text)
//     ) {
//       return (
//         "📞 For appointments, doctor availability and other hospital information, please contact the hospital reception using the official contact details on the hospital website."
//       );
//     }

//     if (
//       /hindi|हिंदी|नमस्ते/.test(text)
//     ) {
//       return (
//         "नमस्ते! 🙏\n\n" +
//         "मैं Baderia Metroprime Hospital का वर्चुअल असिस्टेंट हूँ। " +
//         "मैं आपको अपॉइंटमेंट, डॉक्टर, विभाग, OPD टाइमिंग और अस्पताल की सामान्य जानकारी में मदद कर सकता हूँ।\n\n" +
//         "बताइए, आपको क्या जानना है?"
//       );
//     }

//     if (/hello|^hi\b|^hey\b|नमस्ते/.test(text)) {
//       return (
//         "Hello! 👋 Welcome to MetroPrime Hospital.\n\n" +
//         "How can I assist you today?"
//       );
//     }

//     return (
//       "I'm here to help you with hospital information. 🏥\n\n" +
//       "You can ask me about:\n\n" +
//       "📅 Appointments\n" +
//       "👨‍⚕️ Doctors and specialists\n" +
//       "🏥 Hospital departments\n" +
//       "🕐 OPD timings\n" +
//       "📍 Hospital location\n" +
//       "📞 Contact information\n\n" +
//       "What would you like to know?"
//     );
//   };

//   const sendMessage = (customText) => {
//     const message = (customText ?? input).trim();

//     if (!message || typing) return;

//     addMessage("user", message);
//     setInput("");
//     setTyping(true);

//     timerRef.current = setTimeout(() => {
//       addMessage("assistant", getReply(message));
//       setTyping(false);
//       timerRef.current = null;
//     }, 650);
//   };

//   const startVoice = () => {
//     if (typeof window === "undefined") return;

//     const SpeechRecognition =
//       window.SpeechRecognition ||
//       window.webkitSpeechRecognition;

//     if (!SpeechRecognition) {
//       window.alert(
//         "Voice input is not supported in this browser. Please try Google Chrome."
//       );
//       return;
//     }

//     if (listening) {
//       recognitionRef.current?.stop();
//       setListening(false);
//       return;
//     }

//     recognitionRef.current?.abort();

//     const recognition = new SpeechRecognition();

//     recognition.lang = "en-IN";
//     recognition.interimResults = false;
//     recognition.continuous = false;

//     recognition.onstart = () => setListening(true);

//     recognition.onend = () => setListening(false);

//     recognition.onerror = () => setListening(false);

//     recognition.onresult = (event) => {
//       setInput(event.results[0][0].transcript);
//     };

//     recognitionRef.current = recognition;

//     try {
//       recognition.start();
//     } catch {
//       setListening(false);
//     }
//   };

//   const closeChat = () => {
//     recognitionRef.current?.abort();
//     setListening(false);
//     setOpen(false);
//   };

//   return (
//     <>
//       {/* Floating Robot AI Agent Icon */}

//       {!open && (
//         <button
//           type="button"
//           className="bma-floating"
//           onClick={() => setOpen(true)}
//           aria-label="Open Hospital AI Agent"
//           title="Hospital AI Agent"
//         >
//           <span className="bma-orbit bma-orbit-one" />
//           <span className="bma-orbit bma-orbit-two" />

//           <span className="bma-floating-icon">
//             <Bot size={31} strokeWidth={1.8} />
//           </span>

//           <span className="bma-online-dot" />
//         </button>
//       )}

//       {/* Chat Window */}

//       {open && (
//         <section
//           className="bma-chat"
//           role="dialog"
//           aria-label="MetroPrime AI Assistant"
//         >
//           {/* Header */}

//           <header className="bma-header">
//             <div className="bma-header-left">
//               <div className="bma-avatar">
//                 <Bot size={26} />

//                 <span className="bma-avatar-status" />
//               </div>

//               <div className="bma-header-info">
//                 <h3 className="bma-title">
//                   MetroPrime AI
//                 </h3>

//                 <div className="bma-status">
//                   <span />
//                   AI Hospital Assistant
//                 </div>
//               </div>
//             </div>

//             <button
//               type="button"
//               className="bma-close"
//               onClick={closeChat}
//               aria-label="Close chat"
//             >
//               <X size={21} />
//             </button>
//           </header>

//           {/* Hospital Name */}

//           <div className="bma-hospital">
//             <Hospital size={16} />

//             <span>
//               Baderia Metroprime Multi Speciality Hospital, Jabalpur
//             </span>
//           </div>

//           {/* Welcome */}

//           <div className="bma-welcome-strip">
//             <div className="bma-welcome-icon">
//               <ShieldCheck size={18} />
//             </div>

//             <div>
//               <strong>How can we help you?</strong>
//               <p>Your hospital information assistant</p>
//             </div>
//           </div>

//           {/* Messages */}

//           <div className="bma-messages">
//             {messages.map((message, index) => (
//               <div
//                 key={`${message.role}-${index}`}
//                 className={`bma-message-row ${
//                   message.role === "user"
//                     ? "bma-user"
//                     : ""
//                 }`}
//               >
//                 {message.role === "assistant" && (
//                   <div className="bma-small-avatar">
//                     <Bot size={16} />
//                   </div>
//                 )}

//                 <div
//                   className={`bma-message ${
//                     message.role === "user"
//                       ? "bma-user-message"
//                       : "bma-ai-message"
//                   }`}
//                 >
//                   {message.text}
//                 </div>
//               </div>
//             ))}

//             {/* Quick Suggestions */}

//             {messages.length === 1 && (
//               <div className="bma-suggestions">
//                 <p className="bma-suggestions-title">
//                   QUICK ASSISTANCE
//                 </p>

//                 {suggestions.map((item) => {
//                   const Icon = item.icon;

//                   return (
//                     <button
//                       type="button"
//                       key={item.text}
//                       onClick={() => sendMessage(item.text)}
//                       disabled={typing}
//                     >
//                       <span className="bma-suggestion-icon">
//                         <Icon size={16} />
//                       </span>

//                       <span>{item.text}</span>

//                       <ChevronRight
//                         size={16}
//                         className="bma-suggestion-arrow"
//                       />
//                     </button>
//                   );
//                 })}
//               </div>
//             )}

//             {/* Typing Animation */}

//             {typing && (
//               <div className="bma-message-row">
//                 <div className="bma-small-avatar">
//                   <Bot size={16} />
//                 </div>

//                 <div
//                   className="bma-typing"
//                   aria-label="Assistant is typing"
//                 >
//                   <span />
//                   <span />
//                   <span />
//                 </div>
//               </div>
//             )}

//             <div ref={messagesEndRef} />
//           </div>

//           {/* Emergency Notice */}

//           <div className="bma-emergency">
//             <span className="bma-emergency-icon">!</span>

//             <span>
//               Medical emergency? Contact emergency services immediately.
//             </span>
//           </div>

//           {/* Input */}

//           <form
//             className="bma-input-wrapper"
//             onSubmit={(event) => {
//               event.preventDefault();
//               sendMessage();
//             }}
//           >
//             <button
//               type="button"
//               className={`bma-mic ${
//                 listening ? "bma-listening" : ""
//               }`}
//               onClick={startVoice}
//               title="Voice input"
//               aria-label="Use voice input"
//             >
//               <Mic size={18} />
//             </button>

//             <input
//               type="text"
//               value={input}
//               onChange={(event) =>
//                 setInput(event.target.value)
//               }
//               placeholder={
//                 listening
//                   ? "Listening..."
//                   : "Ask anything..."
//               }
//               aria-label="Type your message"
//               autoComplete="off"
//             />

//             <button
//               type="submit"
//               className="bma-send"
//               disabled={!input.trim() || typing}
//               aria-label="Send message"
//             >
//               <Send size={17} />
//             </button>
//           </form>

//           {/* Disclaimer */}

//           <div className="bma-disclaimer">
//             <ShieldCheck size={13} />

//             <span>
//               AI can make mistakes. Not a substitute for medical advice.
//             </span>
//           </div>
//         </section>
//       )}
//     </>
//   );
// }



// "use client";

// import { useEffect, useRef, useState } from "react";
// import { useRouter } from "next/navigation";
// import {
//   Bot,
//   X,
//   Send,
//   Mic,
//   CalendarDays,
//   UserRound,
//   Hospital,
//   MapPin,
//   Phone,
//   Clock3,
//   ShieldCheck,
//   ChevronRight,
//   ArrowUpRight,
//   MessageCircle,
//   Stethoscope,
//   Home,
//   Info,
//   BriefcaseMedical,
// } from "lucide-react";

// import "./HospitalAIAgent.css";

// const actions = [
//   { icon: CalendarDays, text: "Book an Appointment", route: "/appointment", keywords: ["appointment", "book", "booking", "अपॉइंटमेंट"] },
//   { icon: UserRound, text: "Find a Doctor", route: "/doctors", keywords: ["doctor", "doctors", "physician", "specialist", "डॉक्टर"] },
//   { icon: Hospital, text: "Departments", route: "/department", keywords: ["department", "departments", "विभाग"] },
//   { icon: Clock3, text: "OPD Timings", route: "/contact", keywords: ["timing", "timings", "opd", "समय"] },
//   { icon: MapPin, text: "Hospital Location", route: "/contact", keywords: ["location", "address", "direction", "map", "where", "पता"] },
//   { icon: Phone, text: "Contact Hospital", route: "/contact", keywords: ["contact", "phone", "call", "number", "संपर्क"] },
// ];

// const initialMessage = {
//   role: "assistant",
//   text: "Hello! 👋 Welcome to Baderia Metroprime Multi Speciality Hospital, Jabalpur. I'm your virtual hospital assistant. Choose a shortcut below or ask me a question.",
// };

// export default function HospitalAIAgent() {
//   const router = useRouter();
//   const [open, setOpen] = useState(false);
//   const [input, setInput] = useState("");
//   const [typing, setTyping] = useState(false);
//   const [listening, setListening] = useState(false);
//   const [messages, setMessages] = useState([initialMessage]);
//   const messagesEndRef = useRef(null);
//   const recognitionRef = useRef(null);
//   const timerRef = useRef(null);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
//   }, [messages, typing, open]);

//   useEffect(() => {
//     return () => {
//       if (timerRef.current) clearTimeout(timerRef.current);
//       recognitionRef.current?.abort();
//     };
//   }, []);

//   const addMessage = (role, text) => {
//     setMessages((previous) => [...previous, { role, text }]);
//   };

//   const navigateTo = (route, label) => {
//     setOpen(false);
//     setInput("");
//     router.push(route);
//   };

//   const getNavigationAction = (text) => {
//     const value = text.toLowerCase();
//     if (/emergency|ambulance|आपातकाल|इमरजेंसी/.test(value)) {
//       return { label: "Emergency", route: "/emergency" };
//     }
//     if (/appointment|book|booking|अपॉइंटमेंट/.test(value)) {
//       return { label: "Book an Appointment", route: "/appointment" };
//     }
//     if (/doctor|doctors|physician|specialist|डॉक्टर/.test(value)) {
//       return { label: "Find a Doctor", route: "/doctors" };
//     }
//     if (/department|departments|cardiology|neurology|orthopedic|विभाग/.test(value)) {
//       return { label: "Departments", route: "/department" };
//     }
//     if (/contact|phone|call|number|location|address|direction|map|timing|timings|opd|संपर्क|पता|समय/.test(value)) {
//       return { label: "Contact Us", route: "/contact" };
//     }
//     if (/about|hospital information|हमारे बारे/.test(value)) {
//       return { label: "About", route: "/about" };
//     }
//     if (/home|homepage|मुख्य पेज/.test(value)) {
//       return { label: "Home", route: "/" };
//     }
//     return null;
//   };

//   const getReply = (message) => {
//     const text = message.toLowerCase();
//     if (/emergency|urgent|chest pain|सांस नहीं|बेहोश|इमरजेंसी/.test(text)) {
//       return "For a medical emergency, open the Emergency page or contact local emergency services immediately. Please do not wait for a chatbot response during an emergency.";
//     }
//     if (/hello|^hi\b|^hey\b|नमस्ते/.test(text)) {
//       return "Hello! How can I help you today? You can ask me about doctors, departments, appointments, contact details or emergency services.";
//     }
//     return "I can take you directly to the relevant page. Try asking for Doctors, Departments, Appointment, Contact Us or Emergency. This is currently a UI demo; live AI replies will be connected later.";
//   };

//   const sendMessage = (customText) => {
//     const message = (customText ?? input).trim();
//     if (!message || typing) return;

//     addMessage("user", message);
//     setInput("");

//     const navigation = getNavigationAction(message);
//     if (navigation) {
//       setTyping(true);
//       timerRef.current = setTimeout(() => {
//         addMessage("assistant", `Opening ${navigation.label} page for you…`);
//         setTyping(false);
//         timerRef.current = null;
//         navigateTo(navigation.route, navigation.label);
//       }, 350);
//       return;
//     }

//     setTyping(true);
//     timerRef.current = setTimeout(() => {
//       addMessage("assistant", getReply(message));
//       setTyping(false);
//       timerRef.current = null;
//     }, 500);
//   };

//   const startVoice = () => {
//     if (typeof window === "undefined") return;
//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

//     if (!SpeechRecognition) {
//       addMessage("assistant", "Voice input is not supported in this browser. Please try Google Chrome or type your message.");
//       return;
//     }

//     if (listening) {
//       recognitionRef.current?.stop();
//       setListening(false);
//       return;
//     }

//     recognitionRef.current?.abort();
//     const recognition = new SpeechRecognition();
//     recognition.lang = "en-IN";
//     recognition.interimResults = false;
//     recognition.continuous = false;
//     recognition.onstart = () => setListening(true);
//     recognition.onend = () => setListening(false);
//     recognition.onerror = () => setListening(false);
//     recognition.onresult = (event) => setInput(event.results[0][0].transcript);
//     recognitionRef.current = recognition;

//     try {
//       recognition.start();
//     } catch {
//       setListening(false);
//     }
//   };

//   const closeChat = () => {
//     recognitionRef.current?.abort();
//     setListening(false);
//     setOpen(false);
//   };

//   return (
//     <>
//       {!open && (
//         <button
//           type="button"
//           className="bma-floating"
//           onClick={() => setOpen(true)}
//           aria-label="Open Hospital AI Assistant"
//           title="Hospital AI Assistant"
//         >
//           <span className="bma-floating-glow" />
//           <span className="bma-floating-icon"><Bot size={28} strokeWidth={1.8} /></span>
//           <span className="bma-online-dot" />
//         </button>
//       )}

//       {open && (
//         <section className="bma-chat" role="dialog" aria-label="MetroPrime Hospital Assistant">
//           <header className="bma-header">
//             <div className="bma-brand-mark"><Bot size={25} /><span className="bma-avatar-status" /></div>
//             <div className="bma-header-info">
//               <h3>MetroPrime Assistant</h3>
//               <div className="bma-status"><span /> Hospital help desk</div>
//             </div>
//             <button type="button" className="bma-close" onClick={closeChat} aria-label="Close chat"><X size={20} /></button>
//           </header>

//           <div className="bma-hospital">
//             <Hospital size={15} />
//             <span>Baderia Metroprime Multi Speciality Hospital</span>
//             <span className="bma-secure"><ShieldCheck size={14} /></span>
//           </div>

//           <div className="bma-welcome">
//             <div className="bma-welcome-art"><BriefcaseMedical size={22} /></div>
//             <div>
//               <span className="bma-eyebrow">YOUR DIGITAL CARE GUIDE</span>
//               <h4>How can we help you?</h4>
//               <p>Find the right information, quickly.</p>
//             </div>
//           </div>

//           <div className="bma-messages">
//             {messages.map((message, index) => (
//               <div key={`${message.role}-${index}`} className={`bma-message-row ${message.role === "user" ? "bma-user" : ""}`}>
//                 {message.role === "assistant" && <div className="bma-small-avatar"><Bot size={15} /></div>}
//                 <div className={`bma-message ${message.role === "user" ? "bma-user-message" : "bma-ai-message"}`}>
//                   {message.text}
//                 </div>
//               </div>
//             ))}

//             {messages.length === 1 && (
//               <div className="bma-suggestions">
//                 <p className="bma-suggestions-title">QUICK LINKS <span>Choose a service</span></p>
//                 <div className="bma-action-grid">
//                   {actions.map((item) => {
//                     const Icon = item.icon;
//                     return (
//                       <button type="button" className="bma-action-card" key={item.text} onClick={() => navigateTo(item.route, item.text)}>
//                         <span className="bma-action-icon"><Icon size={18} /></span>
//                         <span className="bma-action-label">{item.text}</span>
//                         <ArrowUpRight size={15} className="bma-action-arrow" />
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>
//             )}

//             {typing && (
//               <div className="bma-message-row">
//                 <div className="bma-small-avatar"><Bot size={15} /></div>
//                 <div className="bma-typing" aria-label="Assistant is typing"><span /><span /><span /></div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           <div className="bma-emergency">
//             <span className="bma-emergency-icon">!</span>
//             <span><strong>Medical emergency?</strong> Get immediate help.</span>
//             <button type="button" onClick={() => navigateTo("/emergency", "Emergency")} aria-label="Open emergency page"><ChevronRight size={17} /></button>
//           </div>

//           <form className="bma-input-wrapper" onSubmit={(event) => { event.preventDefault(); sendMessage(); }}>
//             <button type="button" className={`bma-mic ${listening ? "bma-listening" : ""}`} onClick={startVoice} title="Voice input" aria-label="Use voice input"><Mic size={18} /></button>
//             <input
//               type="text"
//               value={input}
//               onChange={(event) => setInput(event.target.value)}
//               placeholder={listening ? "Listening..." : "Ask about doctors, departments..."}
//               aria-label="Type your message"
//               autoComplete="off"
//             />
//             <button type="submit" className="bma-send" disabled={!input.trim() || typing} aria-label="Send message"><Send size={16} /></button>
//           </form>

//           <div className="bma-disclaimer"><ShieldCheck size={13} /><span>Demo assistant · Not a substitute for medical advice</span></div>
//         </section>
//       )}
//     </>
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Bot,
  X,
  Send,
  Mic,
  CalendarDays,
  UserRound,
  Hospital,
  MapPin,
  Phone,
  Clock3,
  ShieldCheck,
  ChevronRight,
  ArrowUpRight,
  BriefcaseMedical,
} from "lucide-react";

const actions = [
  { icon: CalendarDays, text: "Book an Appointment", route: "/appointment" },
  { icon: UserRound, text: "Find a Doctor", route: "/doctors" },
  { icon: Hospital, text: "Departments", route: "/department" },
  { icon: Clock3, text: "OPD Timings", route: "/contact" },
  { icon: MapPin, text: "Hospital Location", route: "/contact" },
  { icon: Phone, text: "Contact Hospital", route: "/contact" },
];

const initialMessage = {
  role: "assistant",
  text: "Hello! 👋 Welcome to Baderia Metroprime Multi Speciality Hospital, Jabalpur. I'm your virtual hospital assistant. Choose a shortcut below or ask me a question.",
};

export default function HospitalAIAgent() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [listening, setListening] = useState(false);
  const [messages, setMessages] = useState([initialMessage]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, typing, open]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      recognitionRef.current?.abort();
    };
  }, []);

  const addMessage = (role: string, text: string) => {
    setMessages((prev) => [...prev, { role, text }]);
  };

  const navigateTo = (route: string) => {
    setOpen(false);
    setInput("");
    router.push(route);
  };

  const getNavigationAction = (text: string) => {
    const value = text.toLowerCase();
    if (/emergency|ambulance|आपातकाल|इमरजेंसी/.test(value))
      return { label: "Emergency", route: "/emergency" };
    if (/appointment|book|booking|अपॉइंटमेंट/.test(value))
      return { label: "Book an Appointment", route: "/appointment" };
    if (/doctor|doctors|physician|specialist|डॉक्टर/.test(value))
      return { label: "Find a Doctor", route: "/doctors" };
    if (/department|cardiology|neurology|orthopedic|विभाग/.test(value))
      return { label: "Departments", route: "/department" };
    if (/contact|phone|call|number|location|address|direction|map|timing|opd|संपर्क|पता|समय/.test(value))
      return { label: "Contact Us", route: "/contact" };
    if (/about|hospital information|हमारे बारे/.test(value))
      return { label: "About", route: "/about" };
    if (/home|homepage|मुख्य पेज/.test(value))
      return { label: "Home", route: "/" };
    return null;
  };

  const getReply = (message: string) => {
    const text = message.toLowerCase();
    if (/emergency|urgent|chest pain|सांस नहीं|बेहोश|इमरजेंसी/.test(text))
      return "For a medical emergency, open the Emergency page or contact local emergency services immediately. Please do not wait for a chatbot response during an emergency.";
    if (/hello|^hi\b|^hey\b|नमस्ते/.test(text))
      return "Hello! How can I help you today? You can ask me about doctors, departments, appointments, contact details or emergency services.";
    return "I can take you directly to the relevant page. Try asking for Doctors, Departments, Appointment, Contact Us or Emergency. This is currently a UI demo; live AI replies will be connected later.";
  };

  const sendMessage = (customText?: string) => {
    const message = (customText ?? input).trim();
    if (!message || typing) return;

    addMessage("user", message);
    setInput("");

    const navigation = getNavigationAction(message);
    if (navigation) {
      setTyping(true);
      timerRef.current = setTimeout(() => {
        addMessage("assistant", `Opening ${navigation.label} page for you…`);
        setTyping(false);
        timerRef.current = null;
        navigateTo(navigation.route);
      }, 350);
      return;
    }

    setTyping(true);
    timerRef.current = setTimeout(() => {
      addMessage("assistant", getReply(message));
      setTyping(false);
      timerRef.current = null;
    }, 500);
  };

  const startVoice = () => {
    if (typeof window === "undefined") return;
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SR) {
      addMessage("assistant", "Voice input is not supported in this browser. Please try Google Chrome or type your message.");
      return;
    }
    if (listening) {
      recognitionRef.current?.stop();
      setListening(false);
      return;
    }
    recognitionRef.current?.abort();
    const recognition = new SR();
    recognition.lang = "en-IN";
    recognition.interimResults = false;
    recognition.continuous = false;
    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    recognition.onerror = () => setListening(false);
    recognition.onresult = (e: any) => setInput(e.results[0][0].transcript);
    recognitionRef.current = recognition;
    try {
      recognition.start();
    } catch {
      setListening(false);
    }
  };

  const closeChat = () => {
    recognitionRef.current?.abort();
    setListening(false);
    setOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open Hospital AI Assistant"
          title="Hospital AI Assistant"
          className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-teal-500 text-white shadow-[0_10px_30px_-5px_rgba(37,99,235,0.6)] transition hover:scale-105 active:scale-95"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-blue-500/40" />
          <Bot size={28} strokeWidth={1.8} className="relative z-10" />
          <span className="absolute right-1 top-1 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
        </button>
      )}

      {/* Chat Panel */}
      {open && (
        <section
          role="dialog"
          aria-label="MetroPrime Hospital Assistant"
          className="fixed bottom-4 right-4 z-50 flex h-[640px] max-h-[calc(100vh-2rem)] w-[400px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl"
        >
          {/* Header */}
          <header className="flex items-center gap-3 bg-gradient-to-r from-blue-700 via-blue-600 to-teal-500 px-4 py-4 text-white">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur">
              <Bot size={24} />
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-blue-600 bg-green-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold leading-tight">MetroPrime Assistant</h3>
              <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-blue-100">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                Hospital help desk
              </div>
            </div>
            <button
              type="button"
              onClick={closeChat}
              aria-label="Close chat"
              className="rounded-full p-1.5 transition hover:bg-white/20"
            >
              <X size={20} />
            </button>
          </header>

          {/* Hospital strip */}
          <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-2 text-[11px] font-medium text-slate-600">
            <Hospital size={14} className="text-blue-600" />
            <span className="flex-1 truncate">Baderia Metroprime Multi Speciality Hospital</span>
            <ShieldCheck size={14} className="text-green-600" />
          </div>

          {/* Welcome card */}
          <div className="mx-3 mt-3 flex items-start gap-3 rounded-2xl bg-gradient-to-br from-blue-50 to-teal-50 p-3 ring-1 ring-blue-100">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
              <BriefcaseMedical size={20} />
            </div>
            <div>
              <span className="text-[9px] font-bold tracking-wider text-blue-600">YOUR DIGITAL CARE GUIDE</span>
              <h4 className="text-sm font-semibold text-slate-800">How can we help you?</h4>
              <p className="text-[11px] text-slate-500">Find the right information, quickly.</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto px-3 py-3">
            {messages.map((m, i) => (
              <div
                key={`${m.role}-${i}`}
                className={`flex items-end gap-2 ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {m.role === "assistant" && (
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <Bot size={14} />
                  </div>
                )}
                <div
                  className={`max-w-[78%] whitespace-pre-wrap rounded-2xl px-3.5 py-2 text-[13px] leading-relaxed ${
                    m.role === "user"
                      ? "rounded-br-md bg-blue-600 text-white"
                      : "rounded-bl-md bg-slate-100 text-slate-800"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {/* Quick action grid — only first render */}
            {messages.length === 1 && (
              <div className="mt-2">
                <p className="mb-2 flex items-center justify-between px-1 text-[10px] font-bold tracking-wider text-slate-400">
                  QUICK LINKS
                  <span className="font-medium normal-case text-slate-400">Choose a service</span>
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {actions.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        type="button"
                        key={item.text}
                        onClick={() => navigateTo(item.route)}
                        className="group flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-2.5 text-left transition hover:border-blue-300 hover:bg-blue-50 hover:shadow-sm"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                          <Icon size={15} />
                        </span>
                        <span className="flex-1 text-[11px] font-medium leading-tight text-slate-700">
                          {item.text}
                        </span>
                        <ArrowUpRight size={13} className="text-slate-300 group-hover:text-blue-500" />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Typing indicator */}
            {typing && (
              <div className="flex items-end gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Bot size={14} />
                </div>
                <div className="flex gap-1 rounded-2xl rounded-bl-md bg-slate-100 px-3 py-2.5">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Emergency bar */}
          <div className="mx-3 mb-2 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-[11px] text-red-700">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">!</span>
            <span className="flex-1">
              <strong className="font-semibold">Medical emergency?</strong> Get immediate help.
            </span>
            <button
              type="button"
              onClick={() => navigateTo("/emergency")}
              aria-label="Open emergency page"
              className="rounded-full p-1 transition hover:bg-red-100"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
            className="flex items-center gap-2 border-t border-slate-100 bg-white px-3 py-2.5"
          >
            <button
              type="button"
              onClick={startVoice}
              title="Voice input"
              aria-label="Use voice input"
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
                listening ? "animate-pulse bg-red-100 text-red-600" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <Mic size={16} />
            </button>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={listening ? "Listening..." : "Ask about doctors, departments..."}
              aria-label="Type your message"
              autoComplete="off"
              className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-[13px] text-slate-700 placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
            <button
              type="submit"
              disabled={!input.trim() || typing}
              aria-label="Send message"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Send size={15} />
            </button>
          </form>

          {/* Disclaimer */}
          <div className="flex items-center justify-center gap-1.5 border-t border-slate-100 bg-slate-50 px-3 py-1.5 text-[10px] text-slate-400">
            <ShieldCheck size={12} />
            Demo assistant · Not a substitute for medical advice
          </div>
        </section>
      )}
    </>
  );
}