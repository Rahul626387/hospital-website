

import { NextResponse } from "next/server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, x-api-key",
};

export function proxy(request) {
  // CORS Preflight
  if (request.method === "OPTIONS") {
    return new NextResponse(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  // API Key
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

  // Continue request
  const response = NextResponse.next();

  // Add CORS headers
  Object.entries(corsHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

export const config = {
  matcher: "/api/:path*",
};