import { NextResponse } from "next/server";
import { Resend } from "resend";
import EmailTemplate from "@/emails/email-template";
import { contactFormSchema } from "@/lib/schemas/contact";
import { render } from "@react-email/render";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }

    const data = parsed.data;

    const html = await render(EmailTemplate({ ...data }));

    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "koderblac@gmail.com",
      subject: `New message from ${data.fullName}`,
      html,
    });

    return NextResponse.json({ success: true, response });
  } catch (error) {
    console.error("EMAIL ERROR:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
