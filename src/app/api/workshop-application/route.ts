import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type WorkshopApplicationPayload = {
  name?: string;
  email?: string;
  q1?: string;
  q2?: string;
  q3?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as WorkshopApplicationPayload;

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const q1 = body.q1?.trim() ?? "";
    const q2 = body.q2?.trim() ?? "";
    const q3 = body.q3?.trim() ?? "";

    if (!name || !email || !q1 || !q2 || !q3) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 },
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT ?? "465");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM ?? smtpUser;

    if (!smtpHost || !smtpUser || !smtpPass || !smtpFrom) {
      return NextResponse.json(
        {
          success: false,
          message: "Server email configuration is incomplete.",
        },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const recipient = process.env.WORKSHOP_APPLICATION_TO ?? "contact@jamesdaime.com";

    const subject = "New Pelvic Engine Reset application";

    const text = [
      "New Pelvic Engine Reset application",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Q1: What's the biggest frustration about living with lower back pain right now? What has it stopped you from doing?",
      q1,
      "",
      "Q2: What's your biggest concern about the Pelvic Engine Reset working for you? What would need to be true for you to believe this could actually help?",
      q2,
      "",
      "Q3: Are you willing to practice 20 minutes, 3x per week for the next 7 days? What would make this realistic for you?",
      q3,
    ].join("\n");

    const html = `
      <h2>New Pelvic Engine Reset application</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <hr />
      <p><strong>Q1:</strong> What's the biggest frustration about living with lower back pain right now? What has it stopped you from doing?</p>
      <p>${escapeHtml(q1).replace(/\n/g, "<br />")}</p>
      <p><strong>Q2:</strong> What's your biggest concern about the Pelvic Engine Reset working for you? What would need to be true for you to believe this could actually help?</p>
      <p>${escapeHtml(q2).replace(/\n/g, "<br />")}</p>
      <p><strong>Q3:</strong> Are you willing to practice 20 minutes, 3x per week for the next 7 days? What would make this realistic for you?</p>
      <p>${escapeHtml(q3).replace(/\n/g, "<br />")}</p>
    `;

    await transporter.sendMail({
      from: smtpFrom,
      to: recipient,
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to send application right now. Please try again.",
      },
      { status: 500 },
    );
  }
}
