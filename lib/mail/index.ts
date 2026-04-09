import { env } from "../config/env";
import { MailProvider } from "./types";
import { ResendProvider } from "./providers/resend";
import { MailtrapProvider } from "./providers/mailtrap";
import { Resend } from "resend";

type ResendResponse = Awaited<ReturnType<Resend["emails"]["send"]>>;
type MailtrapResponse = boolean;

type MailProviderUnion =
  | MailProvider<ResendResponse>
  | MailProvider<MailtrapResponse>;

export function getMailProvider(): MailProviderUnion {
  const provider = process.env.MAIL_PROVIDER;

  switch (provider) {
    case "mailtrap":
      return new MailtrapProvider();

    case "resend":
    default:
      return new ResendProvider(env.RESEND_API_KEY!);
  }
}
