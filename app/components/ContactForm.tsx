"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit message");
      }

      setStatus("success");
      setMessage("Thanks! We'll follow up within one business day.");
      event.currentTarget.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("Something went wrong. Email hello@nimbusweb.studio and we'll help right away.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1.1rem" }}>
      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
        <label style={{ display: "grid", gap: "0.4rem" }}>
          <span style={{ fontWeight: 500 }}>Name</span>
          <input name="name" placeholder="Your name" required />
        </label>
        <label style={{ display: "grid", gap: "0.4rem" }}>
          <span style={{ fontWeight: 500 }}>Email</span>
          <input name="email" type="email" placeholder="you@company.com" required />
        </label>
      </div>
      <label style={{ display: "grid", gap: "0.4rem" }}>
        <span style={{ fontWeight: 500 }}>Project type</span>
        <input name="projectType" placeholder="e.g. Marketing site redesign" />
      </label>
      <label style={{ display: "grid", gap: "0.4rem" }}>
        <span style={{ fontWeight: 500 }}>Message</span>
        <textarea name="message" placeholder="Tell us about your goals" required />
      </label>
      <button className="button" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Book a strategy call"}
      </button>
      {status !== "idle" && (
        <p className="form-status" style={{ color: status === "success" ? "#4ade80" : "#f87171" }}>
          {message}
        </p>
      )}
    </form>
  );
}
