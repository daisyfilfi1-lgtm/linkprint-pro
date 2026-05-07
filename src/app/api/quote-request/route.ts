import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { scene, product_type, specs, file_url, name, email, company, country } = body;

    // Validate required fields
    if (!scene || !product_type || !name || !email || !company || !country) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Mock save — log to console
    console.log("[Quote Request]", {
      scene,
      product_type,
      specs,
      file_url,
      name,
      email,
      company,
      country,
      created_at: new Date().toISOString(),
    });

    // In production, save to Supabase:
    // const supabase = createClient();
    // await supabase.from('quote_requests').insert({ ... });

    return NextResponse.json(
      {
        success: true,
        message: "Quote request submitted successfully. We'll respond within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Quote Request Error]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
