function getEnvVariable(key: string): string {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }

  return value;
}

export const env = {
  MAIL_FROM: getEnvVariable("MAIL_FROM"),
  MAIL_PROVIDER: process.env.MAIL_PROVIDER || "resend",
  RESEND_API_KEY: process.env.RESEND_API_KEY || "",
};
