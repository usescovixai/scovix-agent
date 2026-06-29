import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    success: true,
    assetId: "asset_001",
    status: "uploaded"
  });
}
