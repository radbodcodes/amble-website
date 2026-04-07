import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactEmail {
  name: string;
  company: string;
  email: string;
  message: string;
}

export async function sendContactEmail(data: ContactEmail) {
  const { error } = await resend.emails.send({
    from: "Amble Website <noreply@ambleandco.com>",
    to: "letswalk@ambleandco.com",
    replyTo: data.email,
    subject: `New inquiry from ${data.name}${data.company ? ` (${data.company})` : ""}`,
    text: `Name: ${data.name}\nCompany: ${data.company || "Not provided"}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
  });

  if (error) {
    throw new Error(error.message);
  }
}
