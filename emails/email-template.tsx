import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Heading,
  Section,
  Img,
} from "@react-email/components";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

type EmailTemplateProps = {
  fullName: string;
  companyName: string;
  email: string;
  phone?: string;
  helpTopic: string;
  message: string;
};

export default function EmailTemplate({
  fullName,
  companyName,
  email,
  phone,
  helpTopic,
  message,
}: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Body style={body}>
        <Container style={wrapper}>
          <Section style={header}>
            <Text style={logoText}>Workstat</Text>
          </Section>

          <Container style={card}>
            <Section style={{ textAlign: "center", marginBottom: "20px" }}>
              <Img
                src={`${BASE_URL}/images/email-template.png`}
                alt="Customer Support"
                style={{ width: "100%", maxWidth: "300px", margin: "0 auto" }}
              />
            </Section>

            {/* Title */}
            <Heading style={title}>Customer Enquiry</Heading>

            {/* Customer Info */}
            <Section style={infoSection}>
              <Text style={text}>
                <strong>Customer name:</strong> {fullName}
              </Text>

              <Text style={text}>
                <strong>Company Name:</strong> {companyName}
              </Text>

              <Text style={text}>
                <strong>Email Address:</strong> {email}
              </Text>

              {phone && (
                <Text style={text}>
                  <strong>Phone Number:</strong> {phone}
                </Text>
              )}
            </Section>

            {/* Help Topic */}
            <Section style={{ marginTop: "20px" }}>
              <Text style={subHeading}>What would you like help with?</Text>

              <Text style={text}>
                <strong>Selection:</strong> {helpTopic}
              </Text>
            </Section>

            {/* Message */}
            <Section style={{ marginTop: "10px" }}>
              <Text style={messageText}>{message}</Text>
            </Section>

            {/* Closing */}
            <Section style={{ marginTop: "20px" }}>
              <Text style={text}>
                We&apos;re looking forward to working with you!
              </Text>

              <Text style={{ ...text, marginTop: "16px" }}>
                <strong>Best Regards,</strong>
              </Text>

              <Text style={text}>Workstat Team</Text>
            </Section>
          </Container>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              This email was sent from Workstat website support channel.
            </Text>

            <Text style={copyright}>
              © {new Date().getFullYear()} Workstat. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const body = {
  backgroundColor: "#f3f4f6",
  fontFamily: "Arial, sans-serif",
  margin: 0,
  padding: 0,
};

const wrapper = {
  width: "100%",
  maxWidth: "600px",
  margin: "0 auto",
  padding: "20px",
};

const header = {
  textAlign: "center" as const,
  marginBottom: "20px",
};

const logoText = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#1f3b4d",
};

const card = {
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  padding: "24px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
};

const title = {
  fontSize: "24px",
  textAlign: "center" as const,
  color: "#1f3b4d",
  marginBottom: "20px",
};

const infoSection = {
  marginBottom: "10px",
};

const subHeading = {
  fontSize: "16px",
  fontWeight: "600",
  marginBottom: "5px",
  color: "#374151",
};

const text = {
  fontSize: "14px",
  color: "#4b5563",
  margin: "4px 0",
};

const messageText = {
  fontSize: "14px",
  color: "#4b5563",
  lineHeight: "1.6",
  marginTop: "8px",
};

const footer = {
  textAlign: "center" as const,
  marginTop: "20px",
};

const footerText = {
  fontSize: "12px",
  color: "#6b7280",
};

const copyright = {
  fontSize: "12px",
  color: "#9ca3af",
  marginTop: "8px",
};
