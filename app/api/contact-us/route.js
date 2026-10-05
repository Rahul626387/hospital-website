

// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";
// import db from "./../../../lib/db";

// // =====================================================
// // SMTP TRANSPORTER
// // =====================================================

// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: Number(process.env.SMTP_PORT),
//   secure: Number(process.env.SMTP_PORT) === 465,

//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });

// // =====================================================
// // POST - CONTACT FORM
// // =====================================================

// export async function POST(request) {
//   try {
//     // -------------------------------------------------
//     // Get request body
//     // -------------------------------------------------

//     const body = await request.json();

//     const {
//       name,
//       phone,
//       email,
//       department,
//       inquiry_type,
//       message,
//     } = body;

//     // -------------------------------------------------
//     // Validation
//     // -------------------------------------------------

//     if (!name || !phone || !email || !message) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Please fill all required fields.",
//         },
//         { status: 400 }
//       );
//     }

//     // -------------------------------------------------
//     // Check SMTP configuration
//     // -------------------------------------------------

//     if (
//       !process.env.SMTP_USER ||
//       !process.env.SMTP_PASS ||
//       !process.env.MAIL_FROM ||
//       !process.env.MAIL_TO
//     ) {
//       console.error("SMTP environment variables are missing.");

//       return NextResponse.json(
//         {
//           success: false,
//           message: "Email configuration is incomplete.",
//         },
//         { status: 500 }
//       );
//     }

//     // =================================================
//     // OPTIONAL: SAVE CONTACT TO DATABASE
//     // =================================================
//     //
//     // Agar aapki contacts table ready hai to yahan
//     // INSERT query add kar sakte hain.
//     //
//     // Example:
//     //
//     await db.query(
//       `INSERT INTO contacts
//        (name, phone, email, department, inquiry_type, message)
//        VALUES (?, ?, ?, ?, ?, ?)`,
//       [
//         name,
//         phone,
//         email,
//         department || null,
//         inquiry_type || null,
//         message,
//       ]
//     );
//     //
//     // =================================================

//     // -------------------------------------------------
//     // Send Email
//     // -------------------------------------------------

//     await transporter.sendMail({
//       from: `"Hospital Website" <${process.env.MAIL_FROM}>`,

//       // Mail yahan receive hogi
//       to: process.env.MAIL_TO,

//       // Reply karne par user ke email par reply jayega
//       replyTo: email,

//       subject: `New Contact Inquiry - ${
//         inquiry_type || "General Inquiry"
//       }`,

//       html: `
//         <!DOCTYPE html>
//         <html>
//         <head>
//           <meta charset="UTF-8" />
//           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//           <title>New Website Inquiry</title>
//         </head>

//         <body style="
//           margin:0;
//           padding:0;
//           background:#f5f7fa;
//           font-family:Arial, Helvetica, sans-serif;
//         ">

//           <div style="
//             padding:30px 15px;
//           ">

//             <div style="
//               max-width:650px;
//               margin:0 auto;
//               background:#ffffff;
//               border-radius:14px;
//               overflow:hidden;
//               border:1px solid #e5e7eb;
//             ">

//               <!-- HEADER -->

//               <div style="
//                 background:#075579;
//                 color:#ffffff;
//                 padding:25px 30px;
//               ">

//                 <h2 style="
//                   margin:0;
//                   font-size:24px;
//                 ">
//                   New Website Inquiry
//                 </h2>

//                 <p style="
//                   margin:8px 0 0;
//                   font-size:14px;
//                   opacity:0.9;
//                 ">
//                   A new contact request has been submitted.
//                 </p>

//               </div>


//               <!-- CONTENT -->

//               <div style="
//                 padding:30px;
//               ">

//                 <!-- NAME -->

//                 <div style="
//                   margin-bottom:18px;
//                 ">

//                   <div style="
//                     font-size:12px;
//                     color:#64748b;
//                     margin-bottom:5px;
//                     text-transform:uppercase;
//                     letter-spacing:0.5px;
//                   ">
//                     Name
//                   </div>

//                   <div style="
//                     font-size:16px;
//                     color:#0f172a;
//                     font-weight:600;
//                   ">
//                     ${name}
//                   </div>

//                 </div>


//                 <!-- PHONE -->

//                 <div style="
//                   margin-bottom:18px;
//                 ">

//                   <div style="
//                     font-size:12px;
//                     color:#64748b;
//                     margin-bottom:5px;
//                     text-transform:uppercase;
//                     letter-spacing:0.5px;
//                   ">
//                     Phone
//                   </div>

//                   <div style="
//                     font-size:16px;
//                     color:#0f172a;
//                   ">
//                     ${phone}
//                   </div>

//                 </div>


//                 <!-- EMAIL -->

//                 <div style="
//                   margin-bottom:18px;
//                 ">

//                   <div style="
//                     font-size:12px;
//                     color:#64748b;
//                     margin-bottom:5px;
//                     text-transform:uppercase;
//                     letter-spacing:0.5px;
//                   ">
//                     Email
//                   </div>

//                   <div style="
//                     font-size:16px;
//                     color:#0f172a;
//                   ">
//                     ${email}
//                   </div>

//                 </div>


//                 <!-- DEPARTMENT -->

//                 <div style="
//                   margin-bottom:18px;
//                 ">

//                   <div style="
//                     font-size:12px;
//                     color:#64748b;
//                     margin-bottom:5px;
//                     text-transform:uppercase;
//                     letter-spacing:0.5px;
//                   ">
//                     Department
//                   </div>

//                   <div style="
//                     font-size:16px;
//                     color:#0f172a;
//                   ">
//                     ${department || "Not specified"}
//                   </div>

//                 </div>


//                 <!-- INQUIRY TYPE -->

//                 <div style="
//                   margin-bottom:22px;
//                 ">

//                   <div style="
//                     font-size:12px;
//                     color:#64748b;
//                     margin-bottom:5px;
//                     text-transform:uppercase;
//                     letter-spacing:0.5px;
//                   ">
//                     Inquiry Type
//                   </div>

//                   <div style="
//                     font-size:16px;
//                     color:#0f172a;
//                   ">
//                     ${inquiry_type || "General Inquiry"}
//                   </div>

//                 </div>


//                 <!-- MESSAGE -->

//                 <div style="
//                   padding:18px;
//                   background:#f8fafc;
//                   border-radius:10px;
//                   border:1px solid #e2e8f0;
//                 ">

//                   <div style="
//                     font-size:12px;
//                     color:#64748b;
//                     margin-bottom:8px;
//                     text-transform:uppercase;
//                     letter-spacing:0.5px;
//                   ">
//                     Message
//                   </div>

//                   <div style="
//                     font-size:15px;
//                     color:#334155;
//                     line-height:1.7;
//                     white-space:pre-line;
//                   ">
//                     ${message}
//                   </div>

//                 </div>

//               </div>


//               <!-- FOOTER -->

//               <div style="
//                 background:#f8fafc;
//                 padding:16px 30px;
//                 border-top:1px solid #e5e7eb;
//               ">

//                 <p style="
//                   margin:0;
//                   font-size:12px;
//                   color:#64748b;
//                   text-align:center;
//                 ">
//                   This email was generated automatically from your
//                   hospital website contact form.
//                 </p>

//               </div>

//             </div>

//           </div>

//         </body>
//         </html>
//       `,
//     });

//     // -------------------------------------------------
//     // Success Response
//     // -------------------------------------------------

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Your inquiry has been submitted successfully.",
//       },
//       { status: 200 }
//     );

//   } catch (error) {

//     // -------------------------------------------------
//     // Error
//     // -------------------------------------------------

//     console.error("Nodemailer Error:", error);

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to send email.",
//         error:
//           process.env.NODE_ENV === "development"
//             ? error.message
//             : "Internal server error",
//       },
//       { status: 500 }
//     );
//   }
// }

// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// // =====================================================
// // CREATE SMTP TRANSPORTER
// // =====================================================

// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: Number(process.env.SMTP_PORT),

//   secure: Number(process.env.SMTP_PORT) === 465,

//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });

// // =====================================================
// // POST API
// // =====================================================

// export async function POST(request) {
//   try {
//     // -------------------------------------------------
//     // Get form data
//     // -------------------------------------------------

//     const body = await request.json();

//     const {
//       name,
//       phone,
//       email,
//       department,
//       inquiry_type,
//       message,
//     } = body;

//     // -------------------------------------------------
//     // Validate required fields
//     // -------------------------------------------------

//     if (!name || !phone || !email || !message) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Please fill all required fields.",
//         },
//         {
//           status: 400,
//         }
//       );
//     }

//     // -------------------------------------------------
//     // Check environment variables
//     // -------------------------------------------------

//     if (
//       !process.env.SMTP_HOST ||
//       !process.env.SMTP_USER ||
//       !process.env.SMTP_PASS ||
//       !process.env.MAIL_FROM ||
//       !process.env.MAIL_TO
//     ) {
//       console.error("Missing SMTP environment variables");

//       return NextResponse.json(
//         {
//           success: false,
//           message: "Email configuration is incomplete.",
//         },
//         {
//           status: 500,
//         }
//       );
//     }

//     // =================================================
//     // SEND EMAIL
//     // =================================================

//     await transporter.sendMail({
//       from: `"Hospital Website" <${process.env.MAIL_FROM}>`,

//       // Email will be received here
//       to: process.env.MAIL_TO,

//       // Reply will go to visitor
//       replyTo: email,

//       subject: `New Contact Inquiry - ${
//         inquiry_type || "General Inquiry"
//       }`,

//       html: `
//         <!DOCTYPE html>

//         <html>

//         <head>
//           <meta charset="UTF-8" />

//           <meta
//             name="viewport"
//             content="width=device-width, initial-scale=1.0"
//           />

//           <title>New Website Inquiry</title>
//         </head>

//         <body
//           style="
//             margin:0;
//             padding:0;
//             background:#f5f7fa;
//             font-family:Arial, Helvetica, sans-serif;
//           "
//         >

//           <div
//             style="
//               padding:30px 15px;
//             "
//           >

//             <div
//               style="
//                 max-width:650px;
//                 margin:0 auto;
//                 background:#ffffff;
//                 border-radius:14px;
//                 overflow:hidden;
//                 border:1px solid #e5e7eb;
//               "
//             >

//               <!-- HEADER -->

//               <div
//                 style="
//                   background:#075579;
//                   color:#ffffff;
//                   padding:25px 30px;
//                 "
//               >

//                 <h2
//                   style="
//                     margin:0;
//                     font-size:24px;
//                   "
//                 >
//                   New Website Inquiry
//                 </h2>

//                 <p
//                   style="
//                     margin:8px 0 0;
//                     font-size:14px;
//                   "
//                 >
//                   A new contact request has been submitted.
//                 </p>

//               </div>


//               <!-- CONTENT -->

//               <div
//                 style="
//                   padding:30px;
//                 "
//               >

//                 <!-- NAME -->

//                 <div
//                   style="
//                     margin-bottom:18px;
//                   "
//                 >

//                   <div
//                     style="
//                       font-size:12px;
//                       color:#64748b;
//                       margin-bottom:5px;
//                       text-transform:uppercase;
//                     "
//                   >
//                     Name
//                   </div>

//                   <div
//                     style="
//                       font-size:16px;
//                       color:#0f172a;
//                       font-weight:600;
//                     "
//                   >
//                     ${name}
//                   </div>

//                 </div>


//                 <!-- PHONE -->

//                 <div
//                   style="
//                     margin-bottom:18px;
//                   "
//                 >

//                   <div
//                     style="
//                       font-size:12px;
//                       color:#64748b;
//                       margin-bottom:5px;
//                       text-transform:uppercase;
//                     "
//                   >
//                     Phone
//                   </div>

//                   <div
//                     style="
//                       font-size:16px;
//                       color:#0f172a;
//                     "
//                   >
//                     ${phone}
//                   </div>

//                 </div>


//                 <!-- EMAIL -->

//                 <div
//                   style="
//                     margin-bottom:18px;
//                   "
//                 >

//                   <div
//                     style="
//                       font-size:12px;
//                       color:#64748b;
//                       margin-bottom:5px;
//                       text-transform:uppercase;
//                     "
//                   >
//                     Email
//                   </div>

//                   <div
//                     style="
//                       font-size:16px;
//                       color:#0f172a;
//                     "
//                   >
//                     ${email}
//                   </div>

//                 </div>


//                 <!-- DEPARTMENT -->

//                 <div
//                   style="
//                     margin-bottom:18px;
//                   "
//                 >

//                   <div
//                     style="
//                       font-size:12px;
//                       color:#64748b;
//                       margin-bottom:5px;
//                       text-transform:uppercase;
//                     "
//                   >
//                     Department
//                   </div>

//                   <div
//                     style="
//                       font-size:16px;
//                       color:#0f172a;
//                     "
//                   >
//                     ${department || "Not specified"}
//                   </div>

//                 </div>


//                 <!-- INQUIRY TYPE -->

//                 <div
//                   style="
//                     margin-bottom:22px;
//                   "
//                 >

//                   <div
//                     style="
//                       font-size:12px;
//                       color:#64748b;
//                       margin-bottom:5px;
//                       text-transform:uppercase;
//                     "
//                   >
//                     Inquiry Type
//                   </div>

//                   <div
//                     style="
//                       font-size:16px;
//                       color:#0f172a;
//                     "
//                   >
//                     ${inquiry_type || "General Inquiry"}
//                   </div>

//                 </div>


//                 <!-- MESSAGE -->

//                 <div
//                   style="
//                     padding:18px;
//                     background:#f8fafc;
//                     border-radius:10px;
//                     border:1px solid #e2e8f0;
//                   "
//                 >

//                   <div
//                     style="
//                       font-size:12px;
//                       color:#64748b;
//                       margin-bottom:8px;
//                       text-transform:uppercase;
//                     "
//                   >
//                     Message
//                   </div>

//                   <div
//                     style="
//                       font-size:15px;
//                       color:#334155;
//                       line-height:1.7;
//                       white-space:pre-line;
//                     "
//                   >
//                     ${message}
//                   </div>

//                 </div>

//               </div>


//               <!-- FOOTER -->

//               <div
//                 style="
//                   background:#f8fafc;
//                   padding:16px 30px;
//                   border-top:1px solid #e5e7eb;
//                 "
//               >

//                 <p
//                   style="
//                     margin:0;
//                     font-size:12px;
//                     color:#64748b;
//                     text-align:center;
//                   "
//                 >
//                   This email was generated automatically from
//                   your hospital website contact form.
//                 </p>

//               </div>

//             </div>

//           </div>

//         </body>

//         </html>
//       `,
//     });

//     // =================================================
//     // SUCCESS
//     // =================================================

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Your inquiry has been submitted successfully.",
//       },
//       {
//         status: 200,
//       }
//     );

//   } catch (error) {

//     // =================================================
//     // ERROR
//     // =================================================

//     console.error("Nodemailer Error:", error);

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to send email.",
//         error: error.message,
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }


// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";
// import db from "../../../lib/db";

// // =====================================================
// // SMTP TRANSPORTER
// // =====================================================

// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: Number(process.env.SMTP_PORT),
//   secure: Number(process.env.SMTP_PORT) === 465,

//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });

// // =====================================================
// // HTML ESCAPE
// // =====================================================

// const escapeHtml = (value = "") => {
//   return String(value)
//     .replace(/&/g, "&amp;")
//     .replace(/</g, "&lt;")
//     .replace(/>/g, "&gt;")
//     .replace(/"/g, "&quot;")
//     .replace(/'/g, "&#039;");
// };

// // =====================================================
// // POST API
// // =====================================================

// export async function POST(request) {
//   try {
//     const body = await request.json();

//     const {
//       name,
//       phone,
//       email,
//       department,
//       inquiry_type,
//       message,
//     } = body;

//     // =====================================================
//     // VALIDATION
//     // =====================================================

//     if (!name || !phone || !email || !message) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Please fill all required fields.",
//         },
//         { status: 400 }
//       );
//     }

//     // =====================================================
//     // ENV VALIDATION
//     // =====================================================

//     if (
//       !process.env.SMTP_HOST ||
//       !process.env.SMTP_USER ||
//       !process.env.SMTP_PASS ||
//       !process.env.MAIL_FROM ||
//       !process.env.MAIL_TO
//     ) {
//       console.error("Missing SMTP environment variables");

//       return NextResponse.json(
//         {
//           success: false,
//           message: "Email configuration is incomplete.",
//         },
//         { status: 500 }
//       );
//     }

//     // =====================================================
//     // SAVE TO DATABASE
//     // =====================================================

//     const [result] = await db.query(
//       `
//         INSERT INTO contacts
//         (
//           name,
//           phone,
//           email,
//           department_id,
//           inquiry_type,
//           message
//         )
//         VALUES (?, ?, ?, ?, ?, ?)
//       `,
//       [
//         name,
//         phone,
//         email,
//         department || null,
//         inquiry_type || null,
//         message,
//       ]
//     );

//     // =====================================================
//     // SAME DATA FOR EMAIL
//     // =====================================================

//     const safeName = escapeHtml(name);
//     const safePhone = escapeHtml(phone);
//     const safeEmail = escapeHtml(email);
//     const safeDepartment = escapeHtml(department || "Not specified");
//     const safeInquiryType = escapeHtml(
//       inquiry_type || "General Inquiry"
//     );
//     const safeMessage = escapeHtml(message);

//     // =====================================================
//     // SEND EMAIL
//     // =====================================================

//     await transporter.sendMail({
//       from: `"Hospital Website" <${process.env.MAIL_FROM}>`,
//       to: process.env.MAIL_TO,

//       // User ke email par reply karne ke liye
//       replyTo: email,

//       subject: `New Contact Inquiry - ${
//         inquiry_type || "General Inquiry"
//       }`,

//       html: `
//         <!DOCTYPE html>
//         <html>
//         <head>
//           <meta charset="UTF-8" />
//           <title>New Contact Inquiry</title>
//         </head>

//         <body
//           style="
//             margin:0;
//             padding:0;
//             background:#f4f7fb;
//             font-family:Arial,Helvetica,sans-serif;
//           "
//         >

//           <div
//             style="
//               max-width:650px;
//               margin:30px auto;
//               background:#ffffff;
//               border-radius:14px;
//               overflow:hidden;
//               border:1px solid #e5e7eb;
//             "
//           >

//             <!-- HEADER -->
//             <div
//               style="
//                 background:#075579;
//                 padding:25px;
//                 color:#ffffff;
//               "
//             >
//               <h2 style="margin:0 0 6px 0;">
//                 New Contact Inquiry
//               </h2>

//               <p style="margin:0; opacity:0.9;">
//                 Submitted from Hospital Website
//               </p>
//             </div>

//             <!-- CONTENT -->
//             <div style="padding:25px;">

//               <table
//                 width="100%"
//                 cellpadding="10"
//                 cellspacing="0"
//                 style="border-collapse:collapse;"
//               >

//                 <tr>
//                   <td
//                     style="
//                       width:160px;
//                       font-weight:bold;
//                       color:#475569;
//                       border-bottom:1px solid #e5e7eb;
//                     "
//                   >
//                     Name
//                   </td>

//                   <td
//                     style="
//                       color:#111827;
//                       border-bottom:1px solid #e5e7eb;
//                     "
//                   >
//                     ${safeName}
//                   </td>
//                 </tr>

//                 <tr>
//                   <td
//                     style="
//                       font-weight:bold;
//                       color:#475569;
//                       border-bottom:1px solid #e5e7eb;
//                     "
//                   >
//                     Phone
//                   </td>

//                   <td
//                     style="
//                       color:#111827;
//                       border-bottom:1px solid #e5e7eb;
//                     "
//                   >
//                     ${safePhone}
//                   </td>
//                 </tr>

//                 <tr>
//                   <td
//                     style="
//                       font-weight:bold;
//                       color:#475569;
//                       border-bottom:1px solid #e5e7eb;
//                     "
//                   >
//                     Email
//                   </td>

//                   <td
//                     style="
//                       color:#111827;
//                       border-bottom:1px solid #e5e7eb;
//                     "
//                   >
//                     ${safeEmail}
//                   </td>
//                 </tr>

//                 <tr>
//                   <td
//                     style="
//                       font-weight:bold;
//                       color:#475569;
//                       border-bottom:1px solid #e5e7eb;
//                     "
//                   >
//                     Department ID
//                   </td>

//                   <td
//                     style="
//                       color:#111827;
//                       border-bottom:1px solid #e5e7eb;
//                     "
//                   >
//                     ${safeDepartment}
//                   </td>
//                 </tr>

//                 <tr>
//                   <td
//                     style="
//                       font-weight:bold;
//                       color:#475569;
//                       border-bottom:1px solid #e5e7eb;
//                     "
//                   >
//                     Inquiry Type
//                   </td>

//                   <td
//                     style="
//                       color:#111827;
//                       border-bottom:1px solid #e5e7eb;
//                     "
//                   >
//                     ${safeInquiryType}
//                   </td>
//                 </tr>

//               </table>

//               <!-- MESSAGE -->

//               <div style="margin-top:25px;">

//                 <h3
//                   style="
//                     margin:0 0 10px 0;
//                     color:#075579;
//                   "
//                 >
//                   Message
//                 </h3>

//                 <div
//                   style="
//                     background:#f8fafc;
//                     border:1px solid #e2e8f0;
//                     border-radius:10px;
//                     padding:15px;
//                     color:#334155;
//                     line-height:1.6;
//                   "
//                 >
//                   ${safeMessage}
//                 </div>

//               </div>

//             </div>

//             <!-- FOOTER -->

//             <div
//               style="
//                 padding:15px 25px;
//                 background:#f8fafc;
//                 border-top:1px solid #e5e7eb;
//                 color:#64748b;
//                 font-size:12px;
//               "
//             >
//               This inquiry was submitted through the hospital website.
//             </div>

//           </div>

//         </body>
//         </html>
//       `,
//     });

//     // =====================================================
//     // SUCCESS
//     // =====================================================

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Your inquiry has been submitted successfully.",
//         contact_id: result.insertId,
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Contact API Error:", error);

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to process contact request.",
//         error: error.message,
//       },
//       { status: 500 }
//     );
//   }
// }





import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import db from "../../../lib/db";

// =====================================================
// SMTP TRANSPORTER
// =====================================================

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,

  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// =====================================================
// HTML ESCAPE
// =====================================================

const escapeHtml = (value = "") => {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

// =====================================================
// POST API
// =====================================================

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      name,
      phone,
      email,
      department,
      inquiry_type,
      message,
    } = body;

    // =====================================================
    // VALIDATION
    // =====================================================

    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        { status: 400 }
      );
    }

    // =====================================================
    // ENV VALIDATION
    // =====================================================

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS ||
      !process.env.MAIL_FROM ||
      !process.env.MAIL_TO
    ) {
      console.error("Missing SMTP environment variables");

      return NextResponse.json(
        {
          success: false,
          message: "Email configuration is incomplete.",
        },
        { status: 500 }
      );
    }

    // =====================================================
    // SAVE TO DATABASE
    // =====================================================

    const [result] = await db.query(
      `
        INSERT INTO contacts
        (
          name,
          phone,
          email,
          department_id,
          inquiry_type,
          message
        )
        VALUES (?, ?, ?, ?, ?, ?)
      `,
      [
        name,
        phone,
        email,
        department || null,
        inquiry_type || null,
        message,
      ]
    );

    // =====================================================
    // SAFE DATA
    // =====================================================

    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);

    const safeDepartment = escapeHtml(
      department || "Not specified"
    );

    const safeInquiryType = escapeHtml(
      inquiry_type || "General Inquiry"
    );

    const safeMessage = escapeHtml(message);

    // =====================================================
    // 1. ADMIN EMAIL
    // =====================================================

    await transporter.sendMail({
      from: `"Hospital Website" <${process.env.MAIL_FROM}>`,

      // Hospital/admin email
      to: process.env.MAIL_TO,

      // Admin agar reply kare to user ko reply jayega
      replyTo: email,

      subject: `New Contact Inquiry - ${
        inquiry_type || "General Inquiry"
      }`,

      html: `
        <!DOCTYPE html>
        <html>

        <head>
          <meta charset="UTF-8" />
          <title>New Contact Inquiry</title>
        </head>

        <body
          style="
            margin:0;
            padding:0;
            background:#f4f7fb;
            font-family:Arial,Helvetica,sans-serif;
          "
        >

          <div
            style="
              max-width:650px;
              margin:30px auto;
              background:#ffffff;
              border-radius:14px;
              overflow:hidden;
              border:1px solid #e5e7eb;
            "
          >

            <!-- HEADER -->

            <div
              style="
                background:#075579;
                padding:25px;
                color:#ffffff;
              "
            >

              <h2 style="margin:0 0 6px 0;">
                New Contact Inquiry
              </h2>

              <p style="margin:0; opacity:0.9;">
                Submitted from Hospital Website
              </p>

            </div>

            <!-- CONTENT -->

            <div style="padding:25px;">

              <table
                width="100%"
                cellpadding="10"
                cellspacing="0"
                style="border-collapse:collapse;"
              >

                <tr>

                  <td
                    style="
                      width:160px;
                      font-weight:bold;
                      color:#475569;
                      border-bottom:1px solid #e5e7eb;
                    "
                  >
                    Name
                  </td>

                  <td
                    style="
                      color:#111827;
                      border-bottom:1px solid #e5e7eb;
                    "
                  >
                    ${safeName}
                  </td>

                </tr>

                <tr>

                  <td
                    style="
                      font-weight:bold;
                      color:#475569;
                      border-bottom:1px solid #e5e7eb;
                    "
                  >
                    Phone
                  </td>

                  <td
                    style="
                      color:#111827;
                      border-bottom:1px solid #e5e7eb;
                    "
                  >
                    ${safePhone}
                  </td>

                </tr>

                <tr>

                  <td
                    style="
                      font-weight:bold;
                      color:#475569;
                      border-bottom:1px solid #e5e7eb;
                    "
                  >
                    Email
                  </td>

                  <td
                    style="
                      color:#111827;
                      border-bottom:1px solid #e5e7eb;
                    "
                  >
                    ${safeEmail}
                  </td>

                </tr>

                <tr>

                  <td
                    style="
                      font-weight:bold;
                      color:#475569;
                      border-bottom:1px solid #e5e7eb;
                    "
                  >
                    Department ID
                  </td>

                  <td
                    style="
                      color:#111827;
                      border-bottom:1px solid #e5e7eb;
                    "
                  >
                    ${safeDepartment}
                  </td>

                </tr>

                <tr>

                  <td
                    style="
                      font-weight:bold;
                      color:#475569;
                      border-bottom:1px solid #e5e7eb;
                    "
                  >
                    Inquiry Type
                  </td>

                  <td
                    style="
                      color:#111827;
                      border-bottom:1px solid #e5e7eb;
                    "
                  >
                    ${safeInquiryType}
                  </td>

                </tr>

              </table>

              <!-- MESSAGE -->

              <div style="margin-top:25px;">

                <h3
                  style="
                    margin:0 0 10px 0;
                    color:#075579;
                  "
                >
                  Message
                </h3>

                <div
                  style="
                    background:#f8fafc;
                    border:1px solid #e2e8f0;
                    border-radius:10px;
                    padding:15px;
                    color:#334155;
                    line-height:1.6;
                  "
                >
                  ${safeMessage}
                </div>

              </div>

            </div>

            <!-- FOOTER -->

            <div
              style="
                padding:15px 25px;
                background:#f8fafc;
                border-top:1px solid #e5e7eb;
                color:#64748b;
                font-size:12px;
              "
            >
              This inquiry was submitted through the hospital website.
            </div>

          </div>

        </body>
        </html>
      `,
    });

    // =====================================================
    // 2. USER CONFIRMATION EMAIL
    // =====================================================

    await transporter.sendMail({
      from: `"Hospital Website" <${process.env.MAIL_FROM}>`,

      // User ke form mein jo email dala hai
      to: email,

      subject: "Thank You for Contacting Our Hospital",

      html: `
        <!DOCTYPE html>
        <html>

        <head>
          <meta charset="UTF-8" />
          <title>Thank You for Contacting Us</title>
        </head>

        <body
          style="
            margin:0;
            padding:0;
            background:#f4f7fb;
            font-family:Arial,Helvetica,sans-serif;
          "
        >

          <div
            style="
              max-width:650px;
              margin:30px auto;
              background:#ffffff;
              border-radius:14px;
              overflow:hidden;
              border:1px solid #e5e7eb;
            "
          >

            <!-- HEADER -->

            <div
              style="
                background:#075579;
                padding:30px 25px;
                color:#ffffff;
              "
            >

              <h2 style="margin:0 0 8px 0;">
                Thank You for Contacting Us
              </h2>

              <p style="margin:0; opacity:0.9;">
                We have received your inquiry
              </p>

            </div>

            <!-- CONTENT -->

            <div style="padding:30px 25px;">

              <p
                style="
                  margin:0 0 15px 0;
                  color:#334155;
                  font-size:16px;
                  line-height:1.6;
                "
              >
                Dear <strong>${safeName}</strong>,
              </p>

              <p
                style="
                  margin:0 0 15px 0;
                  color:#475569;
                  font-size:15px;
                  line-height:1.7;
                "
              >
                Thank you for contacting our hospital. 
                We have successfully received your inquiry.
              </p>

              <p
                style="
                  margin:0 0 25px 0;
                  color:#475569;
                  font-size:15px;
                  line-height:1.7;
                "
              >
                Our team will review your request and get back
                to you as soon as possible.
              </p>

              <!-- INQUIRY DETAILS -->

              <div
                style="
                  background:#f8fafc;
                  border:1px solid #e2e8f0;
                  border-radius:10px;
                  padding:20px;
                "
              >

                <h3
                  style="
                    margin:0 0 15px 0;
                    color:#075579;
                    font-size:18px;
                  "
                >
                  Your Inquiry Details
                </h3>

                <p
                  style="
                    margin:8px 0;
                    color:#475569;
                  "
                >
                  <strong>Inquiry Type:</strong>
                  ${safeInquiryType}
                </p>

                <p
                  style="
                    margin:8px 0;
                    color:#475569;
                  "
                >
                  <strong>Phone:</strong>
                  ${safePhone}
                </p>

                <p
                  style="
                    margin:8px 0;
                    color:#475569;
                  "
                >
                  <strong>Message:</strong>
                </p>

                <div
                  style="
                    background:#ffffff;
                    border:1px solid #e2e8f0;
                    border-radius:8px;
                    padding:12px;
                    color:#334155;
                    line-height:1.6;
                  "
                >
                  ${safeMessage}
                </div>

              </div>

              <p
                style="
                  margin:25px 0 0 0;
                  color:#64748b;
                  font-size:14px;
                  line-height:1.6;
                "
              >
                If you did not submit this inquiry, please ignore
                this email.
              </p>

            </div>

            <!-- FOOTER -->

            <div
              style="
                padding:18px 25px;
                background:#f8fafc;
                border-top:1px solid #e5e7eb;
                color:#64748b;
                font-size:12px;
                text-align:center;
              "
            >
              Thank you for choosing our hospital.
            </div>

          </div>

        </body>
        </html>
      `,
    });

    // =====================================================
    // SUCCESS
    // =====================================================

    return NextResponse.json(
      {
        success: true,
        message:
          "Your inquiry has been submitted successfully. A confirmation email has been sent to your email address.",
        contact_id: result.insertId,
      },
      { status: 201 }
    );

  } catch (error) {

    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to process contact request.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}


