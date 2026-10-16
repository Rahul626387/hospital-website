// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   allowedDevOrigins: ["10.10.34.67"],
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//       },
//     ],
//   },
// };

// module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   allowedDevOrigins: ["10.10.34.67"],
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//       },
//       {
//         protocol: "https",           // 👈 Ye add karo
//         hostname: "images.pexels.com",
//         port: "",
//         pathname: "/**",
//       },
//     ],
//   },
// };

// module.exports = nextConfig;


/** @type {import('next').NextConfig} */

// 1. सभी ज़रूरी सुरक्षा हेडर की लिस्ट (A+ ग्रेड के लिए)
const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { 
    key: 'Content-Security-Policy', 
    value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https://images.unsplash.com https://images.pexels.com https://*.public.blob.vercel-storage.com; font-src 'self' data:; connect-src 'self' https://*.public.blob.vercel-storage.com;" 
  },
];

const nextConfig = {
  allowedDevOrigins: ["10.10.34.67"],
  poweredByHeader: false, // Vercel पर ज़रूरी नहीं, लेकिन फिर भी सेट कर सकते हैं [citation:11][citation:15]
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
      // 2. यहाँ Vercel Blob डोमेन जोड़ें
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  // 3. सभी रूट्स पर सुरक्षा हेडर लगाएँ
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;

// /** @type {import('next').NextConfig} */

// // 1. पहले सुरक्षा हेडर की लिस्ट बनाएं
// const securityHeaders = [
//   { key: 'X-DNS-Prefetch-Control', value: 'on' },
//   { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
//   { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
//   { key: 'X-Content-Type-Options', value: 'nosniff' },
//   { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
//   { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
//   // CSP को शुरुआत में ढीला रखें, बाद में सख्त करें
//   { 
//     key: 'Content-Security-Policy', 
//     value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://images.unsplash.com https://images.pexels.com; font-src 'self' data:;" 
//   },
// ];

// const nextConfig = {
//   allowedDevOrigins: ["10.10.34.67"],
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//       },
//       {
//         protocol: "https",
//         hostname: "images.pexels.com",
//         port: "",
//         pathname: "/**",
//       },
//     ],
//   },

//   // 2. यहाँ headers() फंक्शन जोड़ें
//   async headers() {
//     return [
//       {
//         // सभी रूट्स पर लागू करें
//         source: '/(.*)',
//         headers: securityHeaders,
//       },
//     ];
//   },
// };

// module.exports = nextConfig;
