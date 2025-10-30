import { NextResponse } from "next/server";

const requiredFields = ["name", "email", "message"] as const;

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  projectType?: string;
};

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const missing = requiredFields.filter((field) => !payload[field]?.trim());

    if (missing.length > 0) {
      return NextResponse.json({ error: "Missing required fields", missing }, { status: 400 });
    }

    console.info("New contact inquiry", {
      name: payload.name,
      email: payload.email,
      projectType: payload.projectType,
      messagePreview: payload.message?.slice(0, 140),
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
