import { NextRequest, NextResponse } from "next/server";
import pincodes from "@/data/pincodes.json";

export async function GET(request: NextRequest) {
  try {
    const pin = request.nextUrl.searchParams.get("pin")?.trim();

    if (!pin) {
      return NextResponse.json(
        { success: false, error: "Please provide a pincode" },
        { status: 400 }
      );
    }

    // Validate pincode format (6-digit Indian pincode)
    if (!/^\d{6}$/.test(pin)) {
      return NextResponse.json(
        { success: false, error: "Invalid pincode format. Please enter a valid 6-digit pincode." },
        { status: 400 }
      );
    }

    const record = (pincodes as Record<string, { oda: boolean; city: string; state: string }>)[pin];

    if (!record) {
      return NextResponse.json(
        {
          success: true,
          found: false,
          message: "This pincode is not currently serviceable. Please contact us for more information.",
        },
        { status: 200 }
      );
    }

    // ODA = TRUE means extra charges, FALSE means direct service
    if (record.oda) {
      return NextResponse.json(
        {
          success: true,
          found: true,
          directService: false,
          city: record.city,
          state: record.state,
          message: `Service available at ${record.city}, ${record.state}. Additional charges may apply as this is an extended delivery area.`,
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        found: true,
        directService: true,
        city: record.city,
        state: record.state,
        message: `Direct service available at ${record.city}, ${record.state}! No additional charges.`,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error checking pincode:", error);
    const message = error instanceof Error ? error.message : "Failed to check pincode";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
