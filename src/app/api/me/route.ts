// src/app/api/me/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const cookieHeader = req.headers.get("cookie");
  const match = cookieHeader?.match(/sb-hardcoded-token=([^;]+)/);

  if (!match) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const user = JSON.parse(decodeURIComponent(match[1]));

  return NextResponse.json({ user, note: "Hardcoded login active" });
}
