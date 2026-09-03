// "use client";

// import { usePathname } from "next/navigation";
// import Navbar from './../components/Navbar'
// import Footer from './../components/Footer'


// export default function ConditionalLayout({ children }) {
//   const pathname = usePathname();

//   const isLoginPage = pathname === "/login";

//   return (
//     <>
//       {!isLoginPage && <Navbar />}

//       {children}

//       {!isLoginPage && <Footer />}
//     </>
//   );
// }


"use client";

import { usePathname } from "next/navigation";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "./../components/admin/Breadcrumb";

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();

  // Login page
  const isLoginPage = pathname === "/login";

  // Admin pages
  const isAdminPage = pathname.startsWith("/admin");

  // Login → No Navbar / Footer
  if (isLoginPage) {
    return <>{children}</>;
  }

  // Admin → Admin Layout
  if (isAdminPage) {
    return (
      <div className="min-h-screen">
        {children}
      </div>
    );
  }

  // Website → Navbar + Footer
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main className="flex-1 pt-[76px] lg:pt-[116px]">
        {children}
      </main>

      <Footer />

    </div>
  );
}