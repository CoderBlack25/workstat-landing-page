import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Heading,
  Section,
} from "@react-email/components";

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
      <Body style={{ fontFamily: "Arial, sans-serif", background: "#f4f4f4" }}>
        <Container
          style={{
            background: "#ffffff",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <Heading>New Contact Form Submission</Heading>

          <Section>
            <Text>
              <strong>Name:</strong> {fullName}
            </Text>
            <Text>
              <strong>Company:</strong> {companyName}
            </Text>
            <Text>
              <strong>Email:</strong> {email}
            </Text>
            <Text>
              <strong>Phone:</strong> {phone}
            </Text>
            <Text>
              <strong>Topic:</strong> {helpTopic}
            </Text>
          </Section>

          <Section>
            <Heading as="h3">Message</Heading>
            <Text>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
