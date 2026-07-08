import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const awb = request.nextUrl.searchParams.get("awb")?.trim();

    if (!awb) {
      return NextResponse.json(
        { success: false, error: "Please provide a tracking number." },
        { status: 400 }
      );
    }

    const secureKey = process.env.LOGIXPLATFORM_SECURE_KEY;
    if (!secureKey) {
      return NextResponse.json(
        { success: false, error: "Tracking service not configured." },
        { status: 500 }
      );
    }
    const url = `https://api.logixplatform.com/webservice/v2/MultipleWaybillTracking?secureKey=${secureKey}&waybillNumber=${encodeURIComponent(awb)}`;

    const res = await fetch(url, { headers: { Accept: "application/json" } });

    if (!res.ok) {
      return NextResponse.json(
        { success: false, error: `Tracking service error (${res.status}). Please try again later.` },
        { status: 200 }
      );
    }

    const data = await res.json();

    if (!data.waybillTrackDetailList?.length) {
      return NextResponse.json(
        { success: false, error: "No tracking information found for this number." },
        { status: 200 }
      );
    }

    return NextResponse.json({ success: true, data: data.waybillTrackDetailList[0] }, { status: 200 });
  } catch (error: unknown) {
    console.error("Tracking API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch tracking information." },
      { status: 500 }
    );
  }
}
