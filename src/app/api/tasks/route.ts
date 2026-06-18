import { NextResponse } from "next/server";
import { getDashboard } from "@/lib/store";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(getDashboard());
}
