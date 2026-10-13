
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



"use client";

import { useEffect, useRef, useState } from "react";
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
} from "lucide-react";

import "./HospitalAIAgent.css";

const suggestions = [
  { icon: CalendarDays, text: "Book an Appointment" },
  { icon: UserRound, text: "Find a Doctor" },
  { icon: Hospital, text: "Departments" },
  { icon: Clock3, text: "OPD Timings" },
  { icon: MapPin, text: "Hospital Location" },
  { icon: Phone, text: "Contact Hospital" },
];

const initialMessage = {
  role: "assistant",
  text: "Hello! 👋 Welcome to Baderia Metroprime Multi Speciality Hospital, Jabalpur.\n\nI'm your virtual hospital assistant. How can I help you today?",
};

export default function HospitalAIAgent() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [listening, setListening] = useState(false);
  const [messages, setMessages] = useState([initialMessage]);

  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, typing, open]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      recognitionRef.current?.abort();
    };
  }, []);

  const addMessage = (role, text) => {
    setMessages((previous) => [
      ...previous,
      { role, text },
    ]);
  };

  const getReply = (message) => {
    const text = message.toLowerCase();

    if (
      /emergency|urgent|chest pain|सांस नहीं|बेहोश/.test(text)
    ) {
      return (
        "🚨 If this is a medical emergency, please visit the nearest emergency department or contact local emergency services immediately.\n\nDo not wait for an AI response in an emergency."
      );
    }

    if (
      /appointment|book|booking|अपॉइंटमेंट/.test(text)
    ) {
      return (
        "📅 I'd be happy to help you with an appointment!\n\n" +
        "Please tell me your preferred department or doctor's name. " +
        "For confirmed appointment slots, please contact the hospital reception."
      );
    }

    if (
      /doctor|specialist|physician|surgeon|डॉक्टर/.test(text)
    ) {
      return (
        "👨‍⚕️ I can help you find the right specialist.\n\n" +
        "Please tell me which department you need, or briefly describe the type of consultation you are looking for."
      );
    }

    if (
      /department|specialt|cardiology|neurology|orthopedic/.test(text)
    ) {
      return (
        "🏥 I can help you with hospital department information.\n\n" +
        "Please tell me which department you want to know about. " +
        "For the latest department list and doctor availability, contact hospital reception."
      );
    }

    if (
      /timing|opd|opening hours|working hours/.test(text)
    ) {
      return (
        "🕐 OPD timings may vary by doctor and department.\n\n" +
        "Please confirm the current consultation timings with the hospital reception before visiting."
      );
    }

    if (
      /location|address|direction|map|where/.test(text)
    ) {
      return (
        "📍 Baderia Metroprime Multi Speciality Hospital is in Jabalpur, Madhya Pradesh.\n\n" +
        "Please use the hospital's official location or map section for directions."
      );
    }

    if (
      /contact|phone|call|number/.test(text)
    ) {
      return (
        "📞 For appointments, doctor availability and other hospital information, please contact the hospital reception using the official contact details on the hospital website."
      );
    }

    if (
      /hindi|हिंदी|नमस्ते/.test(text)
    ) {
      return (
        "नमस्ते! 🙏\n\n" +
        "मैं Baderia Metroprime Hospital का वर्चुअल असिस्टेंट हूँ। " +
        "मैं आपको अपॉइंटमेंट, डॉक्टर, विभाग, OPD टाइमिंग और अस्पताल की सामान्य जानकारी में मदद कर सकता हूँ।\n\n" +
        "बताइए, आपको क्या जानना है?"
      );
    }

    if (/hello|^hi\b|^hey\b|नमस्ते/.test(text)) {
      return (
        "Hello! 👋 Welcome to MetroPrime Hospital.\n\n" +
        "How can I assist you today?"
      );
    }

    return (
      "I'm here to help you with hospital information. 🏥\n\n" +
      "You can ask me about:\n\n" +
      "📅 Appointments\n" +
      "👨‍⚕️ Doctors and specialists\n" +
      "🏥 Hospital departments\n" +
      "🕐 OPD timings\n" +
      "📍 Hospital location\n" +
      "📞 Contact information\n\n" +
      "What would you like to know?"
    );
  };

  const sendMessage = (customText) => {
    const message = (customText ?? input).trim();

    if (!message || typing) return;

    addMessage("user", message);
    setInput("");
    setTyping(true);

    timerRef.current = setTimeout(() => {
      addMessage("assistant", getReply(message));
      setTyping(false);
      timerRef.current = null;
    }, 650);
  };

  const startVoice = () => {
    if (typeof window === "undefined") return;

    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      window.alert(
        "Voice input is not supported in this browser. Please try Google Chrome."
      );
      return;
    }

    if (listening) {
      recognitionRef.current?.stop();
      setListening(false);
      return;
    }

    recognitionRef.current?.abort();

    const recognition = new SpeechRecognition();

    recognition.lang = "en-IN";
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onstart = () => setListening(true);

    recognition.onend = () => setListening(false);

    recognition.onerror = () => setListening(false);

    recognition.onresult = (event) => {
      setInput(event.results[0][0].transcript);
    };

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
      {/* Floating Robot AI Agent Icon */}

      {!open && (
        <button
          type="button"
          className="bma-floating"
          onClick={() => setOpen(true)}
          aria-label="Open Hospital AI Agent"
          title="Hospital AI Agent"
        >
          <span className="bma-orbit bma-orbit-one" />
          <span className="bma-orbit bma-orbit-two" />

          <span className="bma-floating-icon">
            <Bot size={31} strokeWidth={1.8} />
          </span>

          <span className="bma-online-dot" />
        </button>
      )}

      {/* Chat Window */}

      {open && (
        <section
          className="bma-chat"
          role="dialog"
          aria-label="MetroPrime AI Assistant"
        >
          {/* Header */}

          <header className="bma-header">
            <div className="bma-header-left">
              <div className="bma-avatar">
                <Bot size={26} />

                <span className="bma-avatar-status" />
              </div>

              <div className="bma-header-info">
                <h3 className="bma-title">
                  MetroPrime AI
                </h3>

                <div className="bma-status">
                  <span />
                  AI Hospital Assistant
                </div>
              </div>
            </div>

            <button
              type="button"
              className="bma-close"
              onClick={closeChat}
              aria-label="Close chat"
            >
              <X size={21} />
            </button>
          </header>

          {/* Hospital Name */}

          <div className="bma-hospital">
            <Hospital size={16} />

            <span>
              Baderia Metroprime Multi Speciality Hospital, Jabalpur
            </span>
          </div>

          {/* Welcome */}

          <div className="bma-welcome-strip">
            <div className="bma-welcome-icon">
              <ShieldCheck size={18} />
            </div>

            <div>
              <strong>How can we help you?</strong>
              <p>Your hospital information assistant</p>
            </div>
          </div>

          {/* Messages */}

          <div className="bma-messages">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`bma-message-row ${
                  message.role === "user"
                    ? "bma-user"
                    : ""
                }`}
              >
                {message.role === "assistant" && (
                  <div className="bma-small-avatar">
                    <Bot size={16} />
                  </div>
                )}

                <div
                  className={`bma-message ${
                    message.role === "user"
                      ? "bma-user-message"
                      : "bma-ai-message"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {/* Quick Suggestions */}

            {messages.length === 1 && (
              <div className="bma-suggestions">
                <p className="bma-suggestions-title">
                  QUICK ASSISTANCE
                </p>

                {suggestions.map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      type="button"
                      key={item.text}
                      onClick={() => sendMessage(item.text)}
                      disabled={typing}
                    >
                      <span className="bma-suggestion-icon">
                        <Icon size={16} />
                      </span>

                      <span>{item.text}</span>

                      <ChevronRight
                        size={16}
                        className="bma-suggestion-arrow"
                      />
                    </button>
                  );
                })}
              </div>
            )}

            {/* Typing Animation */}

            {typing && (
              <div className="bma-message-row">
                <div className="bma-small-avatar">
                  <Bot size={16} />
                </div>

                <div
                  className="bma-typing"
                  aria-label="Assistant is typing"
                >
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Emergency Notice */}

          <div className="bma-emergency">
            <span className="bma-emergency-icon">!</span>

            <span>
              Medical emergency? Contact emergency services immediately.
            </span>
          </div>

          {/* Input */}

          <form
            className="bma-input-wrapper"
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage();
            }}
          >
            <button
              type="button"
              className={`bma-mic ${
                listening ? "bma-listening" : ""
              }`}
              onClick={startVoice}
              title="Voice input"
              aria-label="Use voice input"
            >
              <Mic size={18} />
            </button>

            <input
              type="text"
              value={input}
              onChange={(event) =>
                setInput(event.target.value)
              }
              placeholder={
                listening
                  ? "Listening..."
                  : "Ask anything..."
              }
              aria-label="Type your message"
              autoComplete="off"
            />

            <button
              type="submit"
              className="bma-send"
              disabled={!input.trim() || typing}
              aria-label="Send message"
            >
              <Send size={17} />
            </button>
          </form>

          {/* Disclaimer */}

          <div className="bma-disclaimer">
            <ShieldCheck size={13} />

            <span>
              AI can make mistakes. Not a substitute for medical advice.
            </span>
          </div>
        </section>
      )}
    </>
  );
}
