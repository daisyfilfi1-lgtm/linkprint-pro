import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, country, address, scene, volume } = body;

    // Validate required fields
    if (!name || !email || !company || !country || !address || !volume) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Mock save — log to console
    console.log("[Sample Request]", {
      name,
      email,
      company,
      country,
      address,
      scene,
      volume,
      created_at: new Date().toISOString(),
    });

    // In production, save to Supabase:
    // const supabase = createClient();
    // await supabase.from('sample_requests').insert({ ... });

    return NextResponse.json(
      { success: true, message: "Sample kit request submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Sample Request Error]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
