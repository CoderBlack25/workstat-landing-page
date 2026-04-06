import { NextResponse } from "next/server";
import EmailTemplate from "@/emails/email-template";
import { contactFormSchema } from "@/lib/schemas/contact";
import { render } from "@react-email/render";
import { getMailProvider } from "@/lib/mail";

function getEnvVariable(key: string): string {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }

  return value;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }

    const data = parsed.data;

    const html = await render(EmailTemplate({ ...data }));

    const mailProvider = getMailProvider();

    const MAIL_FROM = getEnvVariable("MAIL_FROM");

    const response = await mailProvider.sendEmail({
      to: "koderblac@gmail.com",
      subject: `New message from ${data.fullName}`,
      html,
      from: MAIL_FROM,
    });

    return NextResponse.json({
      success: true,

      response: process.env.NODE_ENV === "development" ? response : undefined,
    });
  } catch (error) {
    console.error("EMAIL ERROR:", error);

    return NextResponse.json(
      {
        error: "Failed to send message",
      },
      { status: 500 },
    );
  }
}
