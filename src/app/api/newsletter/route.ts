import { NextResponse } from "next/server";

const MAILERLITE_ACTION =
  "https://assets.mailerlite.com/jsonp/521975/forms/185267044275455894/subscribe";

type MailerLiteResponse = {
  success?: boolean;
  errors?: {
    fields?: Record<string, string[]>;
  };
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      firstName?: string;
      lastName?: string;
      email?: string;
    };

    const email = body.email?.trim();
    if (!email) {
      return NextResponse.json(
        {
          success: false,
          message: "Email is required.",
        },
        { status: 400 },
      );
    }

    const params = new URLSearchParams({
      "fields[name]": body.firstName?.trim() ?? "",
      "fields[last_name]": body.lastName?.trim() ?? "",
      "fields[email]": email,
      "ml-submit": "1",
      anticsrf: "true",
    });

    const response = await fetch(`${MAILERLITE_ACTION}?${params.toString()}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    });

    const contentType = response.headers.get("content-type") ?? "";
    if (!response.ok || !contentType.includes("application/json")) {
      return NextResponse.json(
        {
          success: false,
          message: "Subscription service is temporarily unavailable.",
        },
        { status: 502 },
      );
    }

    const payload = (await response.json()) as MailerLiteResponse;

    if (payload.success) {
      return NextResponse.json({ success: true });
    }

    const firstFieldError = payload.errors?.fields
      ? Object.values(payload.errors.fields)[0]?.[0]
      : null;

    return NextResponse.json(
      {
        success: false,
        message: firstFieldError ?? "Subscription failed. Please try again.",
      },
      { status: 400 },
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Subscription failed. Please try again.",
      },
      { status: 500 },
    );
  }
}
