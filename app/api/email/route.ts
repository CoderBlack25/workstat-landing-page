import { NextResponse } from "next/server";
import { Resend } from "resend";
import EmailTemplate from "@/emails/email-template";
import { contactFormSchema } from "@/lib/schemas/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

//console.log("API KEY:", process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    //console.log("BODY:", body);

    // ✅ Validate again on server (never trust frontend)
    const parsed = contactFormSchema.safeParse(body);
    //console.log("PARSED:", parsed);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }

    const data = parsed.data;

    // ✅ Send email
    const response = await resend.emails.send({
      from: "onboarding@resend.dev", // change later
      to: "judechukwuma629@gmail.com", // where you want to receive messages
      subject: `New message from ${data.fullName}`,
      react: EmailTemplate({
        ...data,
      }),
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
