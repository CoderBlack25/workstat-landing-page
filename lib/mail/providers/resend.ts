import { Resend } from "resend";
import { MailProvider, SendEmailOptions } from "../types";

type ResendResponse = Awaited<ReturnType<Resend["emails"]["send"]>>;

export class ResendProvider implements MailProvider<ResendResponse> {
  private resend: Resend;

  constructor(apiKey: string) {
    this.resend = new Resend(apiKey);
  }

  async sendEmail(options: SendEmailOptions): Promise<ResendResponse> {
    const from = options.from
      ? `${options.from.name} <${options.from.email}>`
      : "onboarding@resend.dev";

    return this.resend.emails.send({
      from,
      to: options.to,
      subject: options.subject,
      html: options.html,
    });
  }
}
