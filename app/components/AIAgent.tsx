// "use client";

// import { useState, useRef, useEffect, FormEvent } from "react";

// interface Msg {
//   id: string;
//   role: "user" | "assistant";
//   content: string;
//   isEmergency?: boolean;
// }

// const SYSTEM_PROMPT = `You are a hospital website assistant (NOT a doctor). 
// Rules:
// 1. NEVER diagnose, prescribe, or suggest medicines.
// 2. Only help with: appointments, department info, doctor availability, hospital hours, directions.
// 3. If user describes symptoms, ask them to book an appointment with the relevant department.
// 4. Reply in the user's language (Hindi/English/Hinglish).
// 5. Keep replies short (max 3 sentences) and friendly.`;

// const EMERGENCY_REGEX =
//   /(chest pain|heart attack|can'?t breathe|unconscious|heavy bleeding|stroke|सीने में दर्द|सांस नहीं|बेहोश)/i;

// export default function AIAgent() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState<Msg[]>([
//     {
//       id: "welcome",
//       role: "assistant",
//       content:
//         "नमस्ते! 🙏 मैं अस्पताल का AI सहायक हूँ। अपॉइंटमेंट, डॉक्टर या विभाग की जानकारी पूछ सकते हैं।\n\n⚠️ मैं डॉक्टर नहीं हूँ, कोई निदान/दवा नहीं बता सकता।",
//     },
//   ]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const bottomRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, isOpen]);

//   const send = async (e: FormEvent) => {
//     e.preventDefault();
//     const text = input.trim();
//     if (!text || loading) return;
//     setInput("");

//     const userMsg: Msg = { id: crypto.randomUUID(), role: "user", content: text };
//     setMessages((p) => [...p, userMsg]);

//     // 🚨 Emergency check (instant, client-side)
//     if (EMERGENCY_REGEX.test(text)) {
//       setMessages((p) => [
//         ...p,
//         {
//           id: crypto.randomUUID(),
//           role: "assistant",
//           content:
//             "🚨 यह आपातकाल लग सकता है। कृपया तुरंत Emergency Ward जाएं या 112 पर कॉल करें।\n\nCall 112 immediately.",
//           isEmergency: true,
//         },
//       ]);
//       return;
//     }

//     setLoading(true);
//     try {
//       // 🔑 No API key needed — free public endpoint
//       const res = await fetch("https://text.pollinations.ai/openai", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           model: "openai",
//           messages: [
//             { role: "system", content: SYSTEM_PROMPT },
//             ...messages.slice(-6).map((m) => ({
//               role: m.role,
//               content: m.content,
//             })),
//             { role: "user", content: text },
//           ],
//         }),
//       });

//       const data = await res.json();
//       const reply =
//         data?.choices?.[0]?.message?.content ??
//         "क्षमा करें, उत्तर नहीं मिला। कृपया reception से संपर्क करें।";

//       setMessages((p) => [
//         ...p,
//         { id: crypto.randomUUID(), role: "assistant", content: reply },
//       ]);
//     } catch {
//       setMessages((p) => [
//         ...p,
//         {
//           id: crypto.randomUUID(),
//           role: "assistant",
//           content: "कुछ गड़बड़ हुई। कृपया बाद में प्रयास करें।",
//         },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {/* Floating button */}
//       <button
//         onClick={() => setIsOpen((v) => !v)}
//         className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-blue-600 text-white text-2xl shadow-lg hover:bg-blue-700"
//         aria-label="AI Assistant"
//       >
//         {isOpen ? "✕" : "💬"}
//       </button>

//       {/* Chat panel */}
//       {isOpen && (
//         <div className="fixed bottom-24 right-6 z-50 flex h-[550px] w-[380px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border bg-white shadow-2xl">
//           {/* Header */}
//           <div className="bg-blue-600 px-4 py-3 text-white">
//             <h3 className="font-semibold">Hospital AI Assistant</h3>
//             <p className="text-xs opacity-80">Appointment • Doctors • Info</p>
//           </div>

//           {/* Messages */}
//           <div className="flex-1 space-y-3 overflow-y-auto bg-gray-50 p-4">
//             {messages.map((m) => (
//               <div
//                 key={m.id}
//                 className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
//               >
//                 <div
//                   className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-4 py-2 text-sm ${
//                     m.role === "user"
//                       ? "rounded-br-sm bg-blue-600 text-white"
//                       : m.isEmergency
//                       ? "rounded-bl-sm border border-red-300 bg-red-50 text-red-800"
//                       : "rounded-bl-sm bg-gray-100 text-gray-800"
//                   }`}
//                 >
//                   {m.isEmergency && <div className="mb-1 font-bold">⚠️ Emergency</div>}
//                   {m.content}
//                 </div>
//               </div>
//             ))}
//             {loading && (
//               <div className="text-sm italic text-gray-500">typing…</div>
//             )}
//             <div ref={bottomRef} />
//           </div>

//           {/* Disclaimer */}
//           <div className="border-t bg-yellow-50 px-3 py-1 text-center text-[10px] text-gray-500">
//             AI assistant — not a substitute for medical advice
//           </div>

//           {/* Input */}
//           <form onSubmit={send} className="flex gap-2 border-t bg-white p-3">
//             <input
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="अपना सवाल लिखें..."
//               className="flex-1 rounded-full border px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               disabled={loading}
//             />
//             <button
//               type="submit"
//               disabled={loading || !input.trim()}
//               className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       )}
//     </>
//   );
// }



"use client";

import { useState, useRef, useEffect, FormEvent } from "react";

/* ---------- Types ---------- */
interface Msg {
  id: string;
  role: "user" | "assistant";
  content: string;
  isEmergency?: boolean;
}

/* ---------- Safe UUID (HTTP / mobile IP fallback) ---------- */
function safeUUID(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/* ---------- System prompt ---------- */
const SYSTEM_PROMPT = `You are a hospital website assistant (NOT a doctor).
Rules:
1. NEVER diagnose, prescribe, or suggest medicines.
2. Only help with: appointments, department info, doctor availability, hospital hours, directions.
3. If user describes symptoms, ask them to book an appointment with the relevant department.
4. Reply in the user's language (Hindi/English/Hinglish).
5. Keep replies short (max 3 sentences) and friendly.`;

/* ---------- Emergency detector ---------- */
const EMERGENCY_REGEX =
  /(chest pain|heart attack|can'?t breathe|unconscious|heavy bleeding|stroke|सीने में दर्द|सांस नहीं|बेहोश|खून बह)/i;

/* ---------- Component ---------- */
export default function AIAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "नमस्ते! 🙏 मैं अस्पताल का AI सहायक हूँ। अपॉइंटमेंट, डॉक्टर या विभाग की जानकारी पूछ सकते हैं।\n\n⚠️ मैं डॉक्टर नहीं हूँ, कोई निदान/दवा नहीं बता सकता।",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const send = async (e: FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;
    setInput("");

    const userMsg: Msg = { id: safeUUID(), role: "user", content: text };
    setMessages((p) => [...p, userMsg]);

    /* 🚨 Emergency check — instant, no network */
    if (EMERGENCY_REGEX.test(text)) {
      setMessages((p) => [
        ...p,
        {
          id: safeUUID(),
          role: "assistant",
          content:
            "🚨 यह आपातकाल लग सकता है। कृपया तुरंत Emergency Ward जाएं या 112 पर कॉल करें।\n\nCall 112 immediately.",
          isEmergency: true,
        },
      ]);
      return;
    }

    setLoading(true);
    try {
      /* 🔑 No API key — free public endpoint */
      const res = await fetch("https://text.pollinations.ai/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "openai",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages.slice(-6).map((m) => ({
              role: m.role,
              content: m.content,
            })),
            { role: "user", content: text },
          ],
        }),
      });

      if (!res.ok) throw new Error("API error");

      const data = await res.json();
      const reply =
        data?.choices?.[0]?.message?.content ??
        "क्षमा करें, उत्तर नहीं मिला। कृपया reception से संपर्क करें।";

      setMessages((p) => [
        ...p,
        { id: safeUUID(), role: "assistant", content: reply },
      ]);
    } catch {
      setMessages((p) => [
        ...p,
        {
          id: safeUUID(),
          role: "assistant",
          content:
            "कुछ गड़बड़ हुई। कृपया बाद में प्रयास करें या reception से संपर्क करें।",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-2xl text-white shadow-lg transition hover:bg-blue-700"
        aria-label="AI Assistant"
      >
        {isOpen ? "✕" : "💬"}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[550px] w-[380px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border bg-white shadow-2xl">
          {/* Header */}
          <div className="bg-blue-600 px-4 py-3 text-white">
            <h3 className="font-semibold">Hospital AI Assistant</h3>
            <p className="text-xs opacity-80">Appointment • Doctors • Info</p>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto bg-gray-50 p-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-4 py-2 text-sm ${
                    m.role === "user"
                      ? "rounded-br-sm bg-blue-600 text-white"
                      : m.isEmergency
                      ? "rounded-bl-sm border border-red-300 bg-red-50 text-red-800"
                      : "rounded-bl-sm bg-gray-100 text-gray-800"
                  }`}
                >
                  {m.isEmergency && (
                    <div className="mb-1 font-bold">⚠️ Emergency</div>
                  )}
                  {m.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-sm bg-gray-100 px-4 py-2 text-sm italic text-gray-500">
                  typing…
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Disclaimer */}
          <div className="border-t bg-yellow-50 px-3 py-1 text-center text-[10px] text-gray-500">
            AI assistant — not a substitute for medical advice
          </div>

          {/* Input */}
          <form onSubmit={send} className="flex gap-2 border-t bg-white p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="अपना सवाल लिखें..."
              className="flex-1 rounded-full border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}