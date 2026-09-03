// import AdminNavbar from "../components/admin/AdminNavbar";
// import AdminSidebar from "../components/admin/AdminSidebar";


// const AdminLayout = ({ children }) => {
//   return (
//     <div className="min-h-screen bg-[#f4f8fb]">
      
//       {/* Sidebar */}
//       <AdminSidebar />

//       {/* Main Content */}
//       <div className="lg:ml-64 min-h-screen">
        
//         {/* Navbar */}
//         <AdminNavbar />

//         {/* Page Content */}
//         <main className="p-4 sm:p-6">
//           {children}
//         </main>

//       </div>
//     </div>
//   );
// };

// export default AdminLayout;

// "use client";

// import React from "react";
// import AdminNavbar from "../components/admin/AdminNavbar";
// import AdminSidebar from "../components/admin/AdminSidebar";


// const AdminLayout = ({ children }) => {
//   return (
//     <div className="min-h-screen bg-[#f5f6f8] flex">
      
//       <AdminSidebar />

//       <main className="flex-1 min-w-0">
//         {children}
//       </main>

//     </div>
//   );
// };

// export default AdminLayout;

"use client";

import React from "react";
import AdminNavbar from "../components/admin/AdminNavbar";
import AdminSidebar from "../components/admin/AdminSidebar";
import { motion } from "framer-motion";
import Breadcrumb from "../components/admin/Breadcrumb";
const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#f5f6f8] flex">

      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Area */}
      <main className="flex-1 min-w-0">

        {/* Navbar */}
        <AdminNavbar />

        {/* Page Content */}
        <div className="p-4 sm:p-3">
           <Breadcrumb/>
          {children}
        </div>
      </main>

    </div>
  );
};

export default AdminLayout;