"use client";

import { useState } from "react";
import { Send, CheckCircle, Mail, Building2, User, FileText } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  company: string;
  description: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", company: "", description: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  }

  const inputClass = "w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors duration-200";
  const inputStyle = {
    background: "var(--sp-input-bg)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "var(--sp-input-border)",
    color: "var(--sp-fg)",
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-200"
      style={{ background: "var(--sp-bg-alt)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase transition-colors duration-200" style={{ color: "var(--sp-fg-muted)" }}>
            Get In Touch
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold transition-colors duration-200" style={{ color: "var(--sp-fg)" }}>
            Start a Project
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg transition-colors duration-200" style={{ color: "var(--sp-fg-muted)" }}>
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="p-6 rounded-2xl border transition-colors duration-200" style={{ background: "var(--sp-card)", borderColor: "var(--sp-border)" }}>
              <h3 className="font-semibold text-lg mb-4 transition-colors duration-200" style={{ color: "var(--sp-fg)" }}>
                What to expect
              </h3>
              <div className="flex flex-col gap-4">
                {[
                  { step: "01", text: "Fill out the form with your project details" },
                  { step: "02", text: "We review and respond within 24 hours" },
                  { step: "03", text: "Kick off call to align on scope and timeline" },
                  { step: "04", text: "Proposal & contract, then we start building" },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <span
                      className="text-xs font-bold rounded px-2 py-1 flex-shrink-0 mt-0.5 border transition-colors duration-200"
                      style={{ color: "var(--sp-fg)", background: "var(--sp-step-bg)", borderColor: "var(--sp-step-border)" }}
                    >
                      {item.step}
                    </span>
                    <p className="text-sm leading-relaxed transition-colors duration-200" style={{ color: "var(--sp-fg-muted)" }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl border transition-colors duration-200" style={{ background: "var(--sp-card)", borderColor: "var(--sp-border)" }}>
              <p className="text-sm font-medium mb-1 transition-colors duration-200" style={{ color: "var(--sp-fg-muted)" }}>
                Prefer email?
              </p>
              <a
                href="mailto:contact.spreelance@gmail.com"
                className="font-semibold text-sm break-all transition-colors duration-200"
                style={{ color: "var(--sp-fg)" }}
              >
                contact.spreelance@gmail.com
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div
                className="h-full flex flex-col items-center justify-center text-center py-12 px-6 rounded-2xl border transition-colors duration-200"
                style={{ background: "var(--sp-card)", borderColor: "var(--sp-border)" }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: "var(--sp-step-bg)" }}>
                  <CheckCircle className="w-8 h-8" style={{ color: "var(--sp-fg)" }} />
                </div>
                <h3 className="text-2xl font-bold mb-3 transition-colors duration-200" style={{ color: "var(--sp-fg)" }}>
                  Message Sent!
                </h3>
                <p className="max-w-sm transition-colors duration-200" style={{ color: "var(--sp-fg-muted)" }}>
                  Thanks for reaching out. We&apos;ll review your project and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", description: "" }); }}
                  className="mt-8 px-6 py-2 rounded-lg border text-sm font-medium transition-colors duration-200"
                  style={{ background: "var(--sp-badge-bg)", borderColor: "var(--sp-border)", color: "var(--sp-fg-muted)" }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 rounded-2xl border flex flex-col gap-5 transition-colors duration-200"
                style={{ background: "var(--sp-card)", borderColor: "var(--sp-border)" }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium flex items-center gap-1.5 transition-colors duration-200" style={{ color: "var(--sp-fg-muted)" }}>
                      <User className="w-3.5 h-3.5" style={{ color: "var(--sp-fg-subtle)" }} />
                      Name <span style={{ color: "var(--sp-fg)" }}>*</span>
                    </label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Jane Smith"
                      className={inputClass} style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "var(--sp-input-border-focus)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--sp-input-border)")}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium flex items-center gap-1.5 transition-colors duration-200" style={{ color: "var(--sp-fg-muted)" }}>
                      <Mail className="w-3.5 h-3.5" style={{ color: "var(--sp-fg-subtle)" }} />
                      Email <span style={{ color: "var(--sp-fg)" }}>*</span>
                    </label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="jane@company.com"
                      className={inputClass} style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "var(--sp-input-border-focus)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--sp-input-border)")}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium flex items-center gap-1.5 transition-colors duration-200" style={{ color: "var(--sp-fg-muted)" }}>
                    <Building2 className="w-3.5 h-3.5" style={{ color: "var(--sp-fg-subtle)" }} />
                    Company
                  </label>
                  <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Acme Corp"
                    className={inputClass} style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--sp-input-border-focus)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--sp-input-border)")}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium flex items-center gap-1.5 transition-colors duration-200" style={{ color: "var(--sp-fg-muted)" }}>
                    <FileText className="w-3.5 h-3.5" style={{ color: "var(--sp-fg-subtle)" }} />
                    Project Description <span style={{ color: "var(--sp-fg)" }}>*</span>
                  </label>
                  <textarea name="description" required rows={5} value={form.description} onChange={handleChange}
                    placeholder="Tell us about your project, goals, and any tech constraints..."
                    className={`${inputClass} resize-none`} style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--sp-input-border-focus)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--sp-input-border)")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm disabled:opacity-50 transition-colors duration-200 mt-1"
                  style={{ background: "var(--sp-btn-bg)", color: "var(--sp-btn-fg)" }}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>Send Message <Send className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
