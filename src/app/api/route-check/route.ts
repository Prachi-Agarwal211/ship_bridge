import { NextRequest, NextResponse } from "next/server";
import { checkRoute } from "@/lib/distance";

export async function GET(request: NextRequest) {
  try {
    const from = request.nextUrl.searchParams.get("from")?.trim();
    const to = request.nextUrl.searchParams.get("to")?.trim();

    if (!from || !to) {
      return NextResponse.json(
        { success: false, error: "Please provide both 'from' and 'to' pincodes." },
        { status: 400 }
      );
    }

    if (!/^\d{6}$/.test(from)) {
      return NextResponse.json(
        { success: false, error: `"From" pincode must be a valid 6-digit number.` },
        { status: 400 }
      );
    }

    if (!/^\d{6}$/.test(to)) {
      return NextResponse.json(
        { success: false, error: `"To" pincode must be a valid 6-digit number.` },
        { status: 400 }
      );
    }

    if (from === to) {
      return NextResponse.json(
        { success: false, error: "Origin and destination pincodes cannot be the same." },
        { status: 400 }
      );
    }

    const result = checkRoute(from, to);

    if (!result.success) {
      return NextResponse.json(result, { status: 200 });
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error: unknown) {
    console.error("Error checking route:", error);
    const message = error instanceof Error ? error.message : "Failed to check route";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
