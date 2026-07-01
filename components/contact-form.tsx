"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!response.ok) throw new Error("Request failed");
      setState("sent");
      event.currentTarget.reset();
    } catch {
      setState("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-grid">
        <label>Name<input required name="name" autoComplete="name" /></label>
        <label>Work email<input required type="email" name="email" autoComplete="email" /></label>
        <label>Phone<input required name="phone" autoComplete="tel" /></label>
        <label>Company<input name="company" autoComplete="organization" /></label>
      </div>
      <label>What should we help you grow?<textarea required name="message" rows={5} /></label>
      <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <button className="button" disabled={state === "sending"}>{state === "sending" ? "Sending..." : "Send enquiry"} <ArrowUpRight size={18} /></button>
      <p className="form-status" aria-live="polite">
        {state === "sent" && "Thanks - your enquiry has been received."}
        {state === "error" && "Something went wrong. Please email hello@qaro.in."}
      </p>
    </form>
  );
}
