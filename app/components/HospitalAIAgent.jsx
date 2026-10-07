
"use client";

import { useEffect, useRef, useState } from "react";
import {
  Bot,
  X,
  Send,
  Mic,
  Sparkles,
  CalendarDays,
  UserRound,
  Hospital,
  MapPin,
  Phone,
  Clock3,
} from "lucide-react";
import "./HospitalAIAgent.css";

const suggestions = [
  {
    icon: CalendarDays,
    text: "Book an Appointment",
  },
  {
    icon: UserRound,
    text: "Find a Doctor",
  },
  {
    icon: Hospital,
    text: "Departments",
  },
  {
    icon: Clock3,
    text: "OPD Timings",
  },
  {
    icon: MapPin,
    text: "Hospital Location",
  },
  {
    icon: Phone,
    text: "Contact Hospital",
  },
];

export default function HospitalAIAgent() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text:
        "Hello! 👋 Welcome to Baderia Metroprime Multi Speciality Hospital, Jabalpur.\n\nHow can I help you today?",
    },
  ]);

  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  const addMessage = (role, text) => {
    setMessages((prev) => [
      ...prev,
      {
        role,
        text,
      },
    ]);
  };

  const getReply = (message) => {
    const text = message.toLowerCase();

    if (
      text.includes("appointment") ||
      text.includes("book") ||
      text.includes("appointment book")
    ) {
      return (
        "Sure! I can help you with an appointment. 📅\n\n" +
        "Please select your preferred department or doctor. " +
        "Our reception team can confirm the available slot."
      );
    }

    if (
      text.includes("doctor") ||
      text.includes("specialist")
    ) {
      return (
        "Sure. 👨‍⚕️\n\n" +
        "I can help you find the right specialist. " +
        "Please tell me the department or the health concern you want to consult about."
      );
    }

    if (
      text.includes("department") ||
      text.includes("departments")
    ) {
      return (
        "🏥 You can ask about hospital departments and specialties.\n\n" +
        "For the most accurate doctor availability and department information, please contact the hospital reception."
      );
    }

    if (
      text.includes("timing") ||
      text.includes("opd") ||
      text.includes("time")
    ) {
      return (
        "🕐 OPD timings can vary depending on the doctor and department.\n\n" +
        "I recommend confirming the current timing with the hospital reception before visiting."
      );
    }

    if (
      text.includes("location") ||
      text.includes("address") ||
      text.includes("where")
    ) {
      return (
        "📍 Baderia Metroprime Multi Speciality Hospital is located in Jabalpur, Madhya Pradesh.\n\n" +
        "You can use the hospital's location/map section for directions."
      );
    }

    if (
      text.includes("contact") ||
      text.includes("phone") ||
      text.includes("call")
    ) {
      return (
        "📞 You can contact the hospital reception for appointments, doctor availability and other hospital information."
      );
    }

    if (
      text.includes("emergency") ||
      text.includes("urgent")
    ) {
      return (
        "🚨 If this is a medical emergency, please contact emergency services or visit the nearest emergency department immediately.\n\n" +
        "Do not wait for an AI response in an emergency."
      );
    }

    if (
      text.includes("hello") ||
      text.includes("hi") ||
      text.includes("hey")
    ) {
      return (
        "Hello! 👋\n\n" +
        "I'm the Baderia Metroprime Hospital AI Assistant. How can I help you?"
      );
    }

    if (
      text.includes("hindi") ||
      text.includes("हिंदी")
    ) {
      return (
        "नमस्ते! 🙏\n\n" +
        "मैं आपकी हिंदी में भी सहायता कर सकता हूँ। आप अपॉइंटमेंट, डॉक्टर, OPD टाइमिंग, विभाग या अस्पताल की जानकारी पूछ सकते हैं।"
      );
    }

    return (
      "I can help you with:\n\n" +
      "• Appointments 📅\n" +
      "• Doctors 👨‍⚕️\n" +
      "• Departments 🏥\n" +
      "• OPD timings 🕐\n" +
      "• Hospital location 📍\n" +
      "• Contact information 📞"
    );
  };

  const sendMessage = (customText) => {
    const message = customText || input.trim();

    if (!message) return;

    addMessage("user", message);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const reply = getReply(message);

      setTyping(false);
      addMessage("assistant", reply);
    }, 700);
  };

  const startVoice = () => {
    if (typeof window === "undefined") return;

    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(
        "Voice input is not supported in this browser. Please use Google Chrome."
      );
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-IN";
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onresult = (event) => {
      const text =
        event.results[0][0].transcript;

      setInput(text);
    };

    recognition.start();

    recognitionRef.current = recognition;
  };

  return (
    <>
      {/* Floating Button */}

      {!open && (
        <button
          className="bma-floating"
          onClick={() => setOpen(true)}
          aria-label="Open AI Assistant"
        >
          <span className="bma-floating-icon">
            <Sparkles size={20} />
          </span>

          <span className="bma-floating-text">
            AI Assistant
          </span>
        </button>
      )}

      {/* Chat */}

      {open && (
        <div className="bma-chat">

          {/* Header */}

          <div className="bma-header">
            <div className="bma-header-left">

              <div className="bma-avatar">
                <Bot size={21} />
              </div>

              <div>
                <div className="bma-title">
                  MetroPrime AI
                </div>

                <div className="bma-status">
                  <span />
                  Online
                </div>
              </div>

            </div>

            <button
              className="bma-close"
              onClick={() => setOpen(false)}
            >
              <X size={20} />
            </button>
          </div>

          {/* Hospital name */}

          <div className="bma-hospital">
            <Hospital size={15} />

            <span>
              Baderia Metroprime Multi Speciality
              Hospital, Jabalpur
            </span>
          </div>

          {/* Messages */}

          <div className="bma-messages">

            {messages.map((message, index) => (
              <div
                key={index}
                className={`bma-message-row ${
                  message.role === "user"
                    ? "bma-user"
                    : ""
                }`}
              >

                {message.role === "assistant" && (
                  <div className="bma-small-avatar">
                    <Bot size={14} />
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

            {messages.length === 1 && (
              <div className="bma-suggestions">

                {suggestions.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={index}
                      onClick={() =>
                        sendMessage(item.text)
                      }
                    >
                      <Icon size={15} />

                      <span>
                        {item.text}
                      </span>
                    </button>
                  );
                })}

              </div>
            )}

            {typing && (
              <div className="bma-message-row">

                <div className="bma-small-avatar">
                  <Bot size={14} />
                </div>

                <div className="bma-typing">
                  <span />
                  <span />
                  <span />
                </div>

              </div>
            )}

            <div ref={messagesEndRef} />

          </div>

          {/* Emergency */}

          <div className="bma-emergency">
            🚨
            <span>
              For medical emergencies, contact
              emergency services immediately.
            </span>
          </div>

          {/* Input */}

          <div className="bma-input-wrapper">

            <button
              className="bma-mic"
              onClick={startVoice}
              title="Voice input"
            >
              <Mic size={18} />
            </button>

            <input
              type="text"
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              placeholder="Ask anything..."
            />

            <button
              className="bma-send"
              onClick={() => sendMessage()}
              disabled={!input.trim()}
            >
              <Send size={17} />
            </button>

          </div>

          <div className="bma-disclaimer">
            AI assistant provides general information
            and does not replace medical advice.
          </div>

        </div>
      )}
    </>
  );
}

