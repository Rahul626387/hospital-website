// // "use client";

// // import { usePathname } from "next/navigation";
// // import Navbar from './../components/Navbar'
// // import Footer from './../components/Footer'


// // export default function ConditionalLayout({ children }) {
// //   const pathname = usePathname();

// //   const isLoginPage = pathname === "/login";

// //   return (
// //     <>
// //       {!isLoginPage && <Navbar />}

// //       {children}

// //       {!isLoginPage && <Footer />}
// //     </>
// //   );
// // }


// "use client";

// import { usePathname } from "next/navigation";

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Breadcrumb from "./../components/admin/Breadcrumb";
// import SocialMediaLine from "../components/SocialMediaLine";

// export default function ConditionalLayout({ children }) {
//   const pathname = usePathname();

//   // Login page
//   const isLoginPage = pathname === "/login";

//   // Admin pages
//   const isAdminPage = pathname.startsWith("/admin");

//   // Login → No Navbar / Footer
//   if (isLoginPage) {
//     return <>{children}</>;
//   }

//   // Admin → Admin Layout
//   if (isAdminPage) {
//     return (
//       <div className="min-h-screen">
//         {children}
//       </div>
//     );
//   }

//   // Website → Navbar + Footer
//   return (
//     <div className="min-h-screen flex flex-col">

//       <Navbar />

//       {/* <main className="flex-1 pt-[76px] lg:pt-[116px]"> */}
//         <main className="flex-1 pt-[60px] lg:pt-[90px]">
//            <SocialMediaLine/>
//         {children}
//       </main>

//       <Footer />

//     </div>
//   );
// }


// "use client";

// import { useEffect } from "react";
// import { usePathname, useRouter } from "next/navigation";

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import SocialMediaLine from "../components/SocialMediaLine";

// export default function ConditionalLayout({ children }) {
//   const pathname = usePathname();
//   const router = useRouter();

//   // Login page
//   const isLoginPage = pathname === "/login";

//   // Admin pages
//   const isAdminPage = pathname.startsWith("/admin");

//   // Admin authentication check
//   useEffect(() => {
//     if (!isAdminPage) return;

//     const adminUser = localStorage.getItem("adminUser");
//     // const adminToken = localStorage.getItem("adminToken");

//     // Admin data/token nahi hai
//     if (!adminUser) {
//     // if (!adminUser || !adminToken) {
//       router.replace("/login");
//     }
//   }, [isAdminPage, router]);

//   // Login → No Navbar / Footer
//   if (isLoginPage) {
//     return <>{children}</>;
//   }

//   // Admin → Admin Layout
//   if (isAdminPage) {
//     return (
//       <div className="min-h-screen">
//         {children}
//       </div>
//     );
//   }

//   // Website → Navbar + Footer
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />

//       <main className="flex-1 pt-[60px] lg:pt-[90px]">
//         <SocialMediaLine />
//         {children}
//       </main>

//       <Footer />
//     </div>
//   );
// }



// "use client";

// import { useEffect, useState } from "react";
// import { usePathname, useRouter } from "next/navigation";

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import SocialMediaLine from "../components/SocialMediaLine";

// export default function ConditionalLayout({ children }) {
//   const pathname = usePathname();
//   const router = useRouter();

//   const [loading, setLoading] = useState(true);
//   const [authenticated, setAuthenticated] = useState(false);

//   const isLoginPage = pathname === "/login";
//   const isAdminPage =
//     pathname === "/admin" || pathname.startsWith("/admin/");

//   useEffect(() => {
//     console.log("PATH:", pathname);

//     // Login page
//     if (isLoginPage) {
//       setLoading(false);
//       return;
//     }

//     // Normal website page
//     if (!isAdminPage) {
//       setLoading(false);
//       return;
//     }

//     // Get localStorage
//     const storedAdmin = window.localStorage.getItem("adminUser");

//     console.log("LOCAL STORAGE adminUser:", storedAdmin);

//     if (storedAdmin) {
//       console.log("✅ ADMIN USER EXISTS");

//       setAuthenticated(true);
//       setLoading(false);

//       return;
//     }

//     console.log("❌ ADMIN USER DOES NOT EXIST");

//     setAuthenticated(false);
//     setLoading(false);

//     router.replace("/login");
//   }, [pathname, isLoginPage, isAdminPage, router]);

//   // Login page
//   if (isLoginPage) {
//     return children;
//   }

//   // Admin checking
//   if (isAdminPage && loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin mx-auto" />

//           <p className="mt-3 text-gray-600">
//             Checking authentication...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   // Admin but not authenticated
//   if (isAdminPage && !authenticated) {
//     return null;
//   }

//   // Admin
//   if (isAdminPage && authenticated) {
//     return (
//       <div className="min-h-screen">
//         {children}
//       </div>
//     );
//   }

//   // Website
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />

//       <main className="flex-1 pt-[60px] lg:pt-[90px]">
//         <SocialMediaLine />
//         {children}
//       </main>

//       <Footer />
//     </div>
//   );
// }



// "use client";

// import { useEffect, useState } from "react";
// import { usePathname, useRouter } from "next/navigation";

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import SocialMediaLine from "../components/SocialMediaLine";

// export default function ConditionalLayout({ children }) {
//   const pathname = usePathname();
//   const router = useRouter();

//   const [checking, setChecking] = useState(true);
//   const [authenticated, setAuthenticated] = useState(false);

//   const isLoginPage = pathname === "/login";

//   const isAdminPage =
//     pathname === "/admin" || pathname.startsWith("/admin/");

//   useEffect(() => {
//     console.log("================================");
//     console.log("CURRENT PATH:", pathname);
//     console.log("IS ADMIN:", isAdminPage);
//     console.log("IS LOGIN:", isLoginPage);

//     // Login page ko authentication ki zarurat nahi
//     if (isLoginPage) {
//       setChecking(false);
//       setAuthenticated(false);
//       return;
//     }

//     // Normal website pages
//     if (!isAdminPage) {
//       setChecking(false);
//       setAuthenticated(false);
//       return;
//     }

//     // Admin authentication check
//     const adminUser = window.localStorage.getItem("adminUser");

//     console.log("ADMIN USER:", adminUser);

//     if (!adminUser) {
//       console.log("NO ADMIN USER → REDIRECT LOGIN");

//       setAuthenticated(false);
//       setChecking(false);

//       router.replace("/login");
//       return;
//     }

//     try {
//       const parsedUser = JSON.parse(adminUser);

//       console.log("PARSED ADMIN USER:", parsedUser);

//       if (
//         !parsedUser ||
//         parsedUser.role !== "admin" ||
//         parsedUser.status !== 1
//       ) {
//         console.log("INVALID ADMIN USER → REDIRECT LOGIN");

//         localStorage.removeItem("adminUser");
//         localStorage.removeItem("isLoggedIn");

//         setAuthenticated(false);
//         setChecking(false);

//         router.replace("/login");
//         return;
//       }

//       console.log("ADMIN USER FOUND → ADMIN ACCESS");

//       setAuthenticated(true);
//       setChecking(false);
//     } catch (error) {
//       console.error("Invalid adminUser JSON:", error);

//       localStorage.removeItem("adminUser");
//       localStorage.removeItem("isLoggedIn");

//       setAuthenticated(false);
//       setChecking(false);

//       router.replace("/login");
//     }
//   }, [pathname, isAdminPage, isLoginPage, router]);

//   // Login page
//   if (isLoginPage) {
//     return <>{children}</>;
//   }

//   // Admin page authentication checking
//   if (isAdminPage && checking) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center">
//           <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin mx-auto" />

//           <p className="mt-4 text-gray-600">
//             Checking authentication...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   // Admin user invalid
//   if (isAdminPage && !authenticated) {
//     return null;
//   }

//   // Admin layout
//   if (isAdminPage) {
//     return (
//       <div className="min-h-screen">
//         {children}
//       </div>
//     );
//   }

//   // Public website layout
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />

//       <main className="flex-1 pt-[60px] lg:pt-[90px]">
//         <SocialMediaLine />

//         {children}
//       </main>

//       <Footer />
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SocialMediaLine from "../components/SocialMediaLine";

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const [checking, setChecking] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  const isLoginPage = pathname === "/login";

  const isAdminPage =
    pathname === "/admin" || pathname.startsWith("/admin/");

  useEffect(() => {
    // Login page
    if (isLoginPage) {
      setChecking(false);
      setAuthenticated(false);
      return;
    }

    // Normal public pages
    if (!isAdminPage) {
      setChecking(false);
      setAuthenticated(false);
      return;
    }

    const checkAdminUser = () => {
      const adminUser = window.localStorage.getItem("adminUser");

      console.log("ADMIN AUTH CHECK:", adminUser);

      // adminUser remove/delete ho gaya
      if (!adminUser) {
        console.log(
          "ADMIN USER NOT FOUND → REDIRECTING TO LOGIN"
        );

        setAuthenticated(false);

        router.replace("/login");

        return;
      }

      try {
        const user = JSON.parse(adminUser);

        // Admin validation
        if (
          !user ||
          user.role !== "admin" ||
          Number(user.status) !== 1
        ) {
          console.log(
            "INVALID ADMIN USER → REDIRECTING TO LOGIN"
          );

          localStorage.removeItem("adminUser");
          localStorage.removeItem("isLoggedIn");

          setAuthenticated(false);

          router.replace("/login");

          return;
        }

        // Valid admin
        setAuthenticated(true);
        setChecking(false);

        // console.log("ADMIN AUTHENTICATED:", user);
      } catch (error) {
        console.error(
          "INVALID adminUser JSON:",
          error
        );

        localStorage.removeItem("adminUser");
        localStorage.removeItem("isLoggedIn");

        setAuthenticated(false);

        router.replace("/login");
      }
    };

    // First check
    checkAdminUser();

    // Har 1 second mein check karega
    const interval = setInterval(() => {
      checkAdminUser();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [
    pathname,
    isAdminPage,
    isLoginPage,
    router,
  ]);

  // Login page
  if (isLoginPage) {
    return <>{children}</>;
  }

  // Authentication checking
  if (isAdminPage && checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin mx-auto" />

          <p className="mt-4 text-gray-600">
            Checking authentication...
          </p>
        </div>
      </div>
    );
  }

  // Not authenticated
  if (isAdminPage && !authenticated) {
    return null;
  }

  // Admin pages
  if (isAdminPage) {
    return (
      <div className="min-h-screen">
        {children}
      </div>
    );
  }

  // Public website
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-[60px] lg:pt-[90px]">
        <SocialMediaLine />

        {children}
      </main>

      <Footer />
    </div>
  );
}