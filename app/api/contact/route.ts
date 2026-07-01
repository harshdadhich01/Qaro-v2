import { NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";

const attempts = new Map<string, { count: number; resetAt: number }>();
const RATE_WINDOW = 10 * 60 * 1000;
const RATE_LIMIT = 5;

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  const now = Date.now();
  const previous = attempts.get(ip);
  const current = !previous || previous.resetAt < now ? { count: 1, resetAt: now + RATE_WINDOW } : { ...previous, count: previous.count + 1 };
  attempts.set(ip, current);
  if (current.count > RATE_LIMIT) return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  const body = await request.json();
  if (body.website) return NextResponse.json({ ok: true });
  const { name, email, phone, company = "", message } = body;
  if (![name, email, phone, message].every((value) => typeof value === "string" && value.trim().length > 1)) return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  if (!/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  const inquiry = { name: name.trim(), email: email.trim().toLowerCase(), phone: phone.trim(), company: String(company).trim(), message: message.trim(), createdAt: new Date(), source: "website" };
  const db = await getDatabase();
  if (db) await db.collection("inquiries").insertOne(inquiry);
  return NextResponse.json({ ok: true, stored: Boolean(db) }, { status: 202 });
}
