export interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

export interface MailProvider<TResponse = unknown> {
  sendEmail(options: SendEmailOptions): Promise<TResponse>;
}
