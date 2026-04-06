import nodemailer, { SentMessageInfo } from "nodemailer";
import { MailProvider, SendEmailOptions } from "../types";

export class MailtrapProvider implements MailProvider<SentMessageInfo> {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: Number(process.env.MAILTRAP_PORT),
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
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
