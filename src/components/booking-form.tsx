"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("Enter a valid email address"),
  topic: z.string().min(1, "Please choose a consultation topic"),
  notes: z.string().optional(),
});

type Data = z.infer<typeof schema>;

const topicOptions = [
  "Master's Guidance",
  "PhD Guidance",
  "Postdoctoral Guidance",
  "Scholarship & Funding Guidance",
  "Life Sciences & Research Pathway Mentorship",
  "General Study Abroad Consultation",
];

// Read the active form key from .env.local so changing the Web3Forms account
// does not leave the browser submitting through an outdated hard-coded key.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

interface SubmitResponse {
  data: Data;
  mailtoUrl?: string;
  emailSent?: boolean;
}

export function BookingForm() {
  const [submittedResult, setSubmittedResult] = useState<SubmitResponse | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Data>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: Data) {
    setErrorMessage(null);
    let emailSent = false;

    // Direct Browser Client-side Email Submission via Web3Forms (bypasses Cloudflare Node limits)
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Study Abroad Consultation Inquiry from ${data.name}`,
          from_name: `${data.name} (Singh Sisters Website)`,
          replyto: data.email,
          name: data.name,
          email: data.email,
          topic: data.topic,
          message: data.notes || "No additional notes provided.",
        }),
      });

      const resJson = await res.json();
      if (resJson.success) {
        emailSent = true;
      }
    } catch (err) {
      console.warn("Web3Forms client fetch error:", err);
    }

    // Fallback or secondary log via internal route
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (e) {
      console.warn("API route log fallback:", e);
    }

    const mailtoSubject = encodeURIComponent(`New Consultation Request from ${data.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nTopic: ${data.topic}\nNotes: ${data.notes || "None"}`
    );
    const mailtoUrl = `mailto:singhsisters2112@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    setSubmittedResult({
      data,
      mailtoUrl,
      emailSent,
    });

    reset();
  }

  if (submittedResult) {
    const { data, mailtoUrl, emailSent } = submittedResult;
    return (
      <div className="form-success-box">
        <div className="success-icon-badge">
          <CheckCircle2 size={32} />
        </div>
        <h3>Thanks for visiting!</h3>
        <p>
          We have received your details, <strong>{data.name}</strong>. Singh Sisters will get in touch with you soon at <strong>{data.email}</strong>.
        </p>

        {emailSent ? (
          <p style={{ color: "#0b3933", fontWeight: 600, fontSize: "0.92rem", marginTop: 12 }}>
            ✓ An email notification has been dispatched to <strong>singhsisters2112@gmail.com</strong>!
          </p>
        ) : mailtoUrl ? (
          <div className="owner-email-trigger-box">
            <p className="owner-notify-text">
              Click below to send an instant email notification directly to <strong>singhsisters2112@gmail.com</strong>:
            </p>
            <a
              href={mailtoUrl}
              className="btn btn-primary btn-direct-email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={18} /> Send Email to singhsisters2112@gmail.com
            </a>
          </div>
        ) : null}

        <button
          type="button"
          className="btn btn-secondary btn-reset-form"
          onClick={() => setSubmittedResult(null)}
          style={{ marginTop: 20 }}
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="simplified-booking-form">
      {errorMessage && <p className="error-banner">{errorMessage}</p>}

      <div className="form-grid">
        <Field label="Full name *" error={errors.name?.message}>
          <input
            {...register("name")}
            placeholder="e.g. Ananya Sharma"
          />
        </Field>

        <Field label="Email address *" error={errors.email?.message}>
          <input
            type="email"
            {...register("email")}
            placeholder="e.g. ananya@example.com"
          />
        </Field>

        <Field label="Consultation topic *" error={errors.topic?.message} full>
          <select {...register("topic")}>
            <option value="">Choose a topic</option>
            {topicOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Additional notes / Message" error={errors.notes?.message} full>
          <textarea
            {...register("notes")}
            placeholder="Tell us about your target degree, preferred universities, or specific questions..."
          />
        </Field>

        <div className="field full">
          <button
            type="submit"
            className="btn btn-primary booking-submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending details…" : "Request consultation"}
          </button>
        </div>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  full,
  children,
}: {
  label: string;
  error?: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={`field ${full ? "full" : ""}`}>
      <label>{label}</label>
      {children}
      {error && <span className="error">{error}</span>}
    </div>
  );
}
