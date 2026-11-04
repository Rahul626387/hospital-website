

// import { NextResponse } from "next/server";

// const corsHeaders = {
//   "Access-Control-Allow-Origin": "*",
//   "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
//   "Access-Control-Allow-Headers": "Content-Type, Authorization, x-api-key",
// };

// export function proxy(request) {
//   // CORS Preflight
//   if (request.method === "OPTIONS") {
//     return new NextResponse(null, {
//       status: 204,
//       headers: corsHeaders,
//     });
//   }

//   // API Key
//   const apiKey = request.headers.get("x-api-key");

//   if (!apiKey) {
//     return NextResponse.json(
//       {
//         success: false,
//         message: "API key is required",
//       },
//       {
//         status: 401,
//         headers: corsHeaders,
//       }
//     );
//   }

//   if (apiKey !== process.env.NEXT_PUBLIC_API_KEY) {
//     return NextResponse.json(
//       {
//         success: false,
//         message: "Invalid API key",
//       },
//       {
//         status: 403,
//         headers: corsHeaders,
//       }
//     );
//   }

//   // Continue request
//   const response = NextResponse.next();

//   // Add CORS headers
//   Object.entries(corsHeaders).forEach(([key, value]) => {
//     response.headers.set(key, value);
//   });

//   return response;
// }

// export const config = {
//   matcher: "/api/:path*",
// };



import { NextResponse } from "next/server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, x-api-key",
};

export function proxy(request) {
  const isApiRequest = request.nextUrl.pathname.startsWith("/api/");

  // API CORS Preflight
  if (isApiRequest && request.method === "OPTIONS") {
    return new NextResponse(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  // API Key Validation
  if (isApiRequest) {
    const apiKey = request.headers.get("x-api-key");

    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          message: "API key is required",
        },
        {
          status: 401,
          headers: corsHeaders,
        }
      );
    }

    // Keep existing API key variable
    if (apiKey !== process.env.NEXT_PUBLIC_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid API key",
        },
        {
          status: 403,
          headers: corsHeaders,
        }
      );
    }
  }

  // Generate CSP Nonce
  const nonce = btoa(crypto.randomUUID());
  const isDev = process.env.NODE_ENV === "development";

  // Content Security Policy
  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https: ${
      isDev ? "'unsafe-eval'" : ""
    }`,
    "style-src 'self' 'unsafe-inline' https:",
    "img-src 'self' data: blob: https:",
    "font-src 'self' data: https:",
    "connect-src 'self' https://www.baderiametroprime.com https: wss:",
    "media-src 'self' https:",
    "frame-src https:",
    "worker-src 'self' blob:",
    "manifest-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    ...(!isDev ? ["upgrade-insecure-requests"] : []),
  ].join("; ");

  // Forward CSP and nonce to Next.js
  const requestHeaders = new Headers(request.headers);

  requestHeaders.set("Content-Security-Policy", csp);
  requestHeaders.set("x-nonce", nonce);

  // Continue request
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Add CSP response header
  response.headers.set("Content-Security-Policy", csp);

  // Add CORS headers to API responses
  if (isApiRequest) {
    Object.entries(corsHeaders).forEach(([key, value]) => {
      response.headers.set(key, value);
    });
  }

  return response;
}

export const config = {
  matcher: [
    "/api/:path*",
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
