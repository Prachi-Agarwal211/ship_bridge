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
  } catch (error: unknown) {
    console.error("Error saving lead:", error);
    const message = error instanceof Error ? error.message : "Failed to process lead";
    return NextResponse.json(
      { success: false, error: message },
      { status: 400 }
    );
  }
}
