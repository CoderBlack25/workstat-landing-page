import { MailtrapClient, Address } from "mailtrap";
import { MailProvider, SendEmailOptions } from "../types";
import { env } from "../../config/env";

export class MailtrapProvider implements MailProvider<boolean> {
  private client: MailtrapClient;

  constructor() {
    this.client = new MailtrapClient({
      token: env.MAILTRAP_TOKEN,
    });
  }

  async sendEmail(options: SendEmailOptions): Promise<boolean> {
    try {
      const response = await this.client.send({
        from: {
          name: options.from?.name || "Workstat",
          email: options.from?.email || `noreply@${env.MAILTRAP_SENDER_DOMAIN}`,
        },

        to: [
          {
            email: options.to,
          },
        ],

        subject: options.subject,

        text: options.text || "",

        html: options.html,

        cc: options.cc as Address[] | undefined,

        bcc: options.bcc as Address[] | undefined,
      });

      console.log("Mailtrap response:", response);

      return true;
    } catch (error) {
      console.error("Mailtrap send error:", error);
      return false;
    }
  }
}
