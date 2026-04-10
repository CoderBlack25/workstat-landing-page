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
            <Img
              src={`${BASE_URL}images/workstat-logo.png`}
              alt="Workstat Logo"
              width="120"
              style={{ display: "block", margin: "0 auto" }}
            />
          </Section>

          <Container style={card}>
            <Section
              style={{ ...imageBg, textAlign: "center", marginBottom: "20px" }}
            >
              <Img
                src={`${BASE_URL}images/email-template.png`}
                alt="Customer Support"
                style={{ width: "50%", maxWidth: "300px", margin: "0 auto" }}
              />
            </Section>

            {/* Title */}
            <Heading style={title}>Customer Enquiry</Heading>

            {/* Customer Info */}
            <Section style={infoSection}>
              <Text style={text}>
                Customer name: <span style={textDetail}>{fullName}</span>
              </Text>

              <Text style={text}>
                Company Name: <span style={textDetail}>{companyName}</span>
              </Text>

              <Text style={text}>
                Email Address: <span style={textDetail}>{email}</span>
              </Text>

              {phone && (
                <Text style={text}>
                  Phone Number: <span style={textDetail}>{phone}</span>
                </Text>
              )}
            </Section>

            {/* Help Topic */}
            <Section style={{ marginTop: "20px" }}>
              <Text style={subHeading}>What would you like help with?</Text>

              <Text style={text}>
                Selection: <span style={helpText}>{helpTopic}</span>
              </Text>
            </Section>

            {/* Message */}
            <Section style={{ marginTop: "5px" }}>
              <Text style={messageText}>{message}</Text>
            </Section>

            {/* Closing */}
            <Section style={{ marginTop: "" }}>
              <Text style={complimentText}>
                We&apos;re looking forward to working with you!
              </Text>

              <Text style={{ ...textGreeting, marginTop: "16px" }}>
                Best Regards,
              </Text>

              <Text style={complimentText}>Workstat Team</Text>
            </Section>
          </Container>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              This email was sent from Workstat website support channel.
            </Text>

            <Text style={copyright}>
              {/* <span>
                <Img
                  src={`${BASE_URL}/images/paystat-logo.png`}
                  alt="paystat-logo"
                  style={{ width: "100%", maxWidth: "36px", margin: "0 auto" }}
                />
              </span>{" "} */}
              © Copyright {new Date().getFullYear()}, All Rights reserved. A
              product of <span style={spanText}>Workstat.</span>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const body = {
  backgroundColor: "#F2F5F8",
  fontFamily: "inter",
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
  //textAlign: "center" as const,
  marginBottom: "20px",
};

// const logoText = {
//   fontSize: "24px",
//   fontWeight: "700",
//   color: "#1f3b4d",
// };

const card = {
  backgroundColor: "#ffffff",
  //borderRadius: "8px",
  padding: "24px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
};

const imageBg = {
  backgroundColor: "#F7F6FF",
  paddingTop: "10px",
  paddingBottom: "10px",
};

const title = {
  fontSize: "24px",
  textAlign: "center" as const,
  color: "#1B5773",
  fontWeight: "600",
  marginBottom: "20px",
};

const infoSection = {
  marginBottom: "10px",
};

const subHeading = {
  fontSize: "12px",
  fontWeight: "600",
  marginBottom: "5px",
  color: "#3E4451",
};

const text = {
  fontSize: "12px",
  fontWeight: "500",
  color: "#3E4451",
  margin: "4px 0",
};

const textDetail = {
  fontWeight: "700",
};

const helpText = {
  fontWeight: "600",
  color: "#103546",
};

const messageText = {
  fontSize: "12px",
  color: "#667085",
  lineHeight: "1.6",
  marginTop: "8px",
};

const complimentText = {
  fontSize: "12px",
  color: "#667085",
};

const textGreeting = {
  fontSize: "12px",
  fontWeight: "600",
  color: "#3E4451",
  margin: "4px 0",
};

const footer = {
  //textAlign: "center" as const,
  //marginTop: "10px",
};

const footerText = {
  fontSize: "12px",
  color: "#667085",
  fontWeight: "500",
};

const copyright = {
  fontSize: "10px",
  color: "#667085",
  marginTop: "8px",
};

const spanText = {
  fontSize: "10px",
  color: "#D41370",
  fontWeight: "500",
};
