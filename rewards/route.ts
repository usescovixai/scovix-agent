import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    totalEarned: 42.67,
    currency: "SOL"
  });
}
