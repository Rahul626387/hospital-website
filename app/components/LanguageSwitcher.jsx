// "use client";

// import { useState } from "react";
// import { ChevronDown, Languages } from "lucide-react";

// export default function LanguageSwitcher() {
//   const [language, setLanguage] = useState("EN");
//   const [open, setOpen] = useState(false);

//   const changeLanguage = (lang) => {
//     setLanguage(lang);
//     setOpen(false);

//     // Future i18n integration ke liye
//     // yahin par locale change kar sakte hain
//     console.log("Selected language:", lang);
//   };

//   return (
//     <div className="relative">
//       <button
//         type="button"
//         onClick={() => setOpen(!open)}
//         className="group flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-2.5 text-[12px] font-semibold text-[#063B5C] transition-all duration-300 hover:border-[#0A7A78] hover:bg-teal-50 hover:text-[#0A7A78]"
//       >
//         <Languages className="h-3.5 w-3.5" />

//         <span>{language}</span>

//         <ChevronDown
//           className={`h-3.5 w-3.5 transition-transform duration-300 ${
//             open ? "rotate-180" : ""
//           }`}
//         />
//       </button>

//       {open && (
//         <div className="absolute right-0 top-full z-50 mt-2 w-28 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl">
//           <button
//             onClick={() => changeLanguage("EN")}
//             className={`flex w-full items-center rounded-lg px-3 py-2 text-left text-[12px] font-medium transition ${
//               language === "EN"
//                 ? "bg-teal-50 text-[#0A7A78]"
//                 : "text-slate-600 hover:bg-slate-50"
//             }`}
//           >
//             English
//           </button>

//           <button
//             onClick={() => changeLanguage("HI")}
//             className={`flex w-full items-center rounded-lg px-3 py-2 text-left text-[12px] font-medium transition ${
//               language === "HI"
//                 ? "bg-teal-50 text-[#0A7A78]"
//                 : "text-slate-600 hover:bg-slate-50"
//             }`}
//           >
//             हिंदी
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Languages } from "lucide-react";

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState("EN");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Google Translate script load
    if (document.getElementById("google-translate-script")) return;

    window.googleTranslateElementInit = () => {
      if (
        !document.querySelector(
          ".goog-te-combo"
        )
      ) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setOpen(false);

    const googleSelect = document.querySelector(".goog-te-combo");

    if (googleSelect) {
      googleSelect.value = lang === "HI" ? "hi" : "en";

      googleSelect.dispatchEvent(
        new Event("change", {
          bubbles: true,
        })
      );
    }
  };

  return (
    <>
      {/* Hidden Google Translate Widget */}
      <div
        id="google_translate_element"
        className="absolute -left-[9999px] -top-[9999px]"
      />

      {/* Custom Language Switcher */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="group flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-2.5 text-[12px] font-semibold text-[#063B5C] transition-all duration-300 hover:border-[#0A7A78] hover:bg-teal-50 hover:text-[#0A7A78]"
        >
          <Languages className="h-3.5 w-3.5" />

          <span>{language}</span>

          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {open && (
          <div className="absolute right-0 top-full z-[9999] mt-2 w-32 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl">
            {/* English */}
            <button
              type="button"
              onClick={() => changeLanguage("EN")}
              className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-[12px] font-medium transition-all ${
                language === "EN"
                  ? "bg-teal-50 text-[#0A7A78]"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <span>English</span>

              {language === "EN" && (
                <span className="text-[10px]">✓</span>
              )}
            </button>

            {/* Hindi */}
            <button
              type="button"
              onClick={() => changeLanguage("HI")}
              className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-[12px] font-medium transition-all ${
                language === "HI"
                  ? "bg-teal-50 text-[#0A7A78]"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <span>हिंदी</span>

              {language === "HI" && (
                <span className="text-[10px]">✓</span>
              )}
            </button>
          </div>
        )}
      </div>
    </>
  );
}



// "use client";

// import { useEffect, useState } from "react";
// import { ChevronDown, Languages } from "lucide-react";

// export default function LanguageSwitcher() {
//   const [language, setLanguage] = useState("EN");
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const hideGoogleTranslate = () => {
//       const selectors = [
//         ".goog-te-banner-frame",
//         ".goog-te-balloon-frame",
//         ".goog-te-menu-frame",
//         ".goog-tooltip",
//         ".goog-tooltip:hover",
//         ".goog-text-highlight",
//         ".goog-te-gadget",
//         ".skiptranslate iframe",
//         "iframe.goog-te-banner-frame",
//         "iframe.goog-te-menu-frame",
//       ];

//       selectors.forEach((selector) => {
//         document.querySelectorAll(selector).forEach((el) => {
//           el.style.setProperty("display", "none", "important");
//           el.style.setProperty("visibility", "hidden", "important");
//           el.style.setProperty("opacity", "0", "important");
//           el.style.setProperty("height", "0", "important");
//           el.style.setProperty("width", "0", "important");
//         });
//       });

//       // Google Translate body top offset remove
//       document.body.style.setProperty("top", "0px", "important");
//       document.body.style.setProperty("position", "static", "important");
//     };

//     // Immediately
//     hideGoogleTranslate();

//     // Google Translate DOM inject hone ke baad bhi hide karega
//     const observer = new MutationObserver(() => {
//       hideGoogleTranslate();
//     });

//     observer.observe(document.body, {
//       childList: true,
//       subtree: true,
//       attributes: true,
//     });

//     // Google translate load hone mein delay ho sakta hai
//     const timers = [
//       setTimeout(hideGoogleTranslate, 100),
//       setTimeout(hideGoogleTranslate, 500),
//       setTimeout(hideGoogleTranslate, 1000),
//       setTimeout(hideGoogleTranslate, 2000),
//     ];

//     return () => {
//       observer.disconnect();
//       timers.forEach(clearTimeout);
//     };
//   }, []);

//   const changeLanguage = (lang) => {
//     setLanguage(lang);
//     setOpen(false);

//     const googleSelect = document.querySelector(".goog-te-combo");

//     if (googleSelect) {
//       googleSelect.value = lang === "EN" ? "en" : "hi";

//       googleSelect.dispatchEvent(
//         new Event("change", {
//           bubbles: true,
//         })
//       );
//     }
//   };

//   return (
//     <div className="relative">
//       <button
//         type="button"
//         onClick={() => setOpen(!open)}
//         className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium shadow-sm transition hover:bg-gray-50"
//       >
//         <Languages size={17} />

//         <span>{language}</span>

//         <ChevronDown
//           size={16}
//           className={`transition-transform ${
//             open ? "rotate-180" : ""
//           }`}
//         />
//       </button>

//       {open && (
//         <div className="absolute right-0 z-[9999] mt-2 w-32 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
//           <button
//             onClick={() => changeLanguage("EN")}
//             className="block w-full px-4 py-2.5 text-left text-sm hover:bg-gray-50"
//           >
//             English
//           </button>

//           <button
//             onClick={() => changeLanguage("HI")}
//             className="block w-full px-4 py-2.5 text-left text-sm hover:bg-gray-50"
//           >
//             हिन्दी
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

