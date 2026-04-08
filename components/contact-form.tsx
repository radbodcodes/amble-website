"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, {
    success: false,
    error: null,
  });

  if (state.success) {
    return (
      <div className="flex items-center justify-center h-full min-h-[300px]">
        <p className="font-serif text-2xl text-text text-center">
          Message sent. We&apos;ll be in touch.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-[13px] font-medium text-text">
            Name
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            required
            className="border-dark/[0.12] bg-card focus-visible:ring-primary"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className="text-[13px] font-medium text-text">
            Company
          </label>
          <Input
            id="company"
            name="company"
            type="text"
            placeholder="Your company"
            className="border-dark/[0.12] bg-card focus-visible:ring-primary"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-[13px] font-medium text-text">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@company.com"
          required
          className="border-dark/[0.12] bg-card focus-visible:ring-primary"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-[13px] font-medium text-text">
          What&apos;s on your mind?
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your situation..."
          required
          className="min-h-[120px] border-dark/[0.12] bg-card focus-visible:ring-primary"
        />
      </div>
      {state.error && (
        <p className="text-sm text-red-600">{state.error}</p>
      )}
      <Button
        type="submit"
        disabled={isPending}
        className="self-start bg-primary hover:bg-primary-mid text-white rounded-sm px-9 py-4 h-auto text-[15px] font-semibold tracking-wide"
      >
        {isPending ? "Sending..." : "Take the First Step"}
      </Button>
    </form>
  );
}
