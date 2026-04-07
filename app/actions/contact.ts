"use server";

import { sendContactEmail } from "@/lib/email";

interface ContactState {
  success: boolean;
  error: string | null;
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get("name") as string;
  const company = formData.get("company") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  try {
    await sendContactEmail({ name, company, email, message });
    return { success: true, error: null };
  } catch {
    return {
      success: false,
      error: "Something went wrong. Please email us directly at letswalk@ambleandco.com.",
    };
  }
}
