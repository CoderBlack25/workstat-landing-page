function getEnvVariable(key: string): string {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }

  return value;
}

export const env = {
  MAIL_FROM: getEnvVariable("MAIL_FROM"),

  MAILTRAP_TOKEN: getEnvVariable("MAILTRAP_TOKEN"),
  MAILTRAP_SENDER_DOMAIN: getEnvVariable("MAILTRAP_SENDER_DOMAIN"),
  MAILTRAP_USE_SANDBOX: process.env.MAILTRAP_USE_SANDBOX || "true",
  MAILTRAP_INBOX_ID: process.env.MAILTRAP_INBOX_ID || "",
  MAILTRAP_TEST_EMAIL: process.env.MAILTRAP_TEST_EMAIL || "",

  MAIL_PROVIDER: process.env.MAIL_PROVIDER || "resend",

  RESEND_API_KEY: process.env.RESEND_API_KEY || "",
};
