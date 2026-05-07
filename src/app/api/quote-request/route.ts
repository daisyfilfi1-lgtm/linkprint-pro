import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase";

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

    const supabase = createClient();
    if (supabase) {
      const { error } = await supabase.from("quote_requests").insert({
        scene,
        product_type,
        specs: specs ? JSON.parse(specs) : {},
        file_url: file_url || "",
        name,
        email,
        company,
        country,
      });

      if (error) {
        console.error("[Supabase] Insert error:", error);
        return NextResponse.json(
          { error: "Failed to save request" },
          { status: 500 }
        );
      }
    } else {
      // Fallback: log to console
      console.log("[Quote Request - Mock]", {
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
    }

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
