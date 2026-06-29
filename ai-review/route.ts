import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    approved: true,
    qualityScore: 96,
    category: "Street Photography"
  });
}
