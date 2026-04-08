import { env } from "../../config/env";
import nodemailer, { SentMessageInfo } from "nodemailer";
import { MailProvider, SendEmailOptions } from "../types";

export class MailtrapProvider implements MailProvider<SentMessageInfo> {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: env.MAILTRAP_HOST,
      port: Number(env.MAILTRAP_PORT),
      from: env.MAIL_FROM,
      auth: {
        user: env.MAILTRAP_USER,
        pass: env.MAILTRAP_PASS,
      },
    });
  }

  async sendEmail(options: SendEmailOptions): Promise<SentMessageInfo> {
    return this.transporter.sendMail({
      from: options.from || "test@mailtrap.io",
      to: options.to,
      subject: options.subject,
      html: options.html,
    });
  }
}
