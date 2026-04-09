export interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
  from?: {
    name: string;
    email: string;
  };
  cc?: { email: string }[];
  bcc?: { email: string }[];
}

export interface MailProvider<TResponse = unknown> {
  sendEmail(options: SendEmailOptions): Promise<TResponse>;
}
