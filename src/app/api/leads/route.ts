import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("New Lead Submitted to Google Sheets (/api/leads):", body);

    // Simulated saving to Google Sheets/DB
    return NextResponse.json(
      { success: true, message: "Lead saved successfully!" },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error saving lead:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to process lead" },
      { status: 400 }
    );
  }
}
