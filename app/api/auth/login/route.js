// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
// import db from "../../../../lib/db";


// export async function POST(request) {
//   try {
//     const { email, password } = await request.json();

//     // Validation
//     if (!email || !password) {
//       return NextResponse.json(
//         {
//           status: false,
//           message: "Email and password are required",
//         },
//         { status: 400 }
//       );
//     }

//     // Find user
//     const [users] = await db.query(
//       `SELECT id, name, email, password, role, status
//        FROM users
//        WHERE email = ?
//        LIMIT 1`,
//       [email]
//     );

//     // User not found
//     if (users.length === 0) {
//       return NextResponse.json(
//         {
//           status: false,
//           message: "Invalid email or password",
//         },
//         { status: 401 }
//       );
//     }

//     const user = users[0];

//     // Account inactive
//     if (!user.status) {
//       return NextResponse.json(
//         {
//           status: false,
//           message: "Your account is inactive",
//         },
//         { status: 403 }
//       );
//     }

//     // Compare plain password with bcrypt hash
//     const isPasswordValid = await bcrypt.compare(
//       password,
//       user.password
//     );

//     if (!isPasswordValid) {
//       return NextResponse.json(
//         {
//           status: false,
//           message: "Invalid email or password",
//         },
//         { status: 401 }
//       );
//     }

//     // Remove password before sending response
//     const { password: _, ...userData } = user;

//     return NextResponse.json({
//       status: true,
//       message: "Login successful",
//       user: userData,
//     });

//   } catch (error) {
//     console.error("Login Error:", error);

//     return NextResponse.json(
//       {
//         status: false,
//         message: "Server error",
//       },
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import db from "../../../../lib/db";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

// OPTIONS request - CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Validation
    if (!email || !password) {
      return NextResponse.json(
        {
          status: false,
          message: "Email and password are required",
        },
        {
          status: 400,
          headers: corsHeaders,
        }
      );
    }

    // Find user
    const [users] = await db.query(
      `SELECT id, name, email, password, role, status
       FROM users
       WHERE email = ?
       LIMIT 1`,
      [email]
    );

    // User not found
    if (users.length === 0) {
      return NextResponse.json(
        {
          status: false,
          message: "Invalid email or password",
        },
        {
          status: 401,
          headers: corsHeaders,
        }
      );
    }

    const user = users[0];

    // Account inactive
    if (!user.status) {
      return NextResponse.json(
        {
          status: false,
          message: "Your account is inactive",
        },
        {
          status: 403,
          headers: corsHeaders,
        }
      );
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordValid) {
      return NextResponse.json(
        {
          status: false,
          message: "Invalid email or password",
        },
        {
          status: 401,
          headers: corsHeaders,
        }
      );
    }

    // Remove password
    const { password: _, ...userData } = user;

    return NextResponse.json(
      {
        status: true,
        message: "Login successful",
        user: userData,
      },
      {
        status: 200,
        headers: corsHeaders,
      }
    );

  } catch (error) {
    console.error("Login Error:", error);

    return NextResponse.json(
      {
        status: false,
        message: "Server error",
      },
      {
        status: 500,
        headers: corsHeaders,
      }
    );
  }
}