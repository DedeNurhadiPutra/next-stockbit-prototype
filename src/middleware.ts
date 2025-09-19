// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("sb-hardcoded-token");

  if (!token) {
    // Hardcode langsung di sini biar gak perlu login manual
    const fakeUser = {
      id: "11111111-1111-1111-1111-111111111111",
      email: "demo@example.com",
    };
    const fakeToken = JSON.stringify(fakeUser);

    const res = NextResponse.next();
    res.cookies.set("sb-hardcoded-token", fakeToken, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
    });
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
