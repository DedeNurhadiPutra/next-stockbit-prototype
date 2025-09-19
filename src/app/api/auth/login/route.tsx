// src/app/api/login/route.ts
import { NextResponse } from "next/server";

export async function POST() {
  // Hardcoded user (udah lo insert manual ke DB)
  const fakeUser = {
    id: "11111111-1111-1111-1111-111111111111",
    email: "demo@example.com",
  };

  // Simulasi "token" auth
  const fakeToken = JSON.stringify(fakeUser);

  const res = NextResponse.json({ message: "Logged in (hardcoded)", user: fakeUser });

  // Set cookie biar kebaca sama supabase/route lain
  res.cookies.set("sb-hardcoded-token", fakeToken, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });

  return res;
}
