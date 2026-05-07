import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase";

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

    const supabase = createClient();
    if (supabase) {
      const { error } = await supabase.from("sample_requests").insert({
        name,
        email,
        company,
        country,
        address,
        scene: scene || [],
        volume,
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
      console.log("[Sample Request - Mock]", {
        name,
        email,
        company,
        country,
        address,
        scene,
        volume,
        created_at: new Date().toISOString(),
      });
    }

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
