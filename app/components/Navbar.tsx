"use client";

import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-200"
      style={{ background: "var(--sp-nav-bg)", borderColor: "var(--sp-nav-border)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "var(--sp-icon-bg)" }}
          >
            <Zap className="w-4 h-4" style={{ color: "var(--sp-icon-fg)" }} />
          </div>
          <span className="font-bold text-lg tracking-tight" style={{ color: "var(--sp-fg)" }}>
            spreelance.
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors duration-200 hover:opacity-100"
              style={{ color: "var(--sp-fg-muted)" }}
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href="#contact"
            className="px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200"
            style={{ background: "var(--sp-btn-bg)", color: "var(--sp-btn-fg)" }}
          >
            Hire Us
          </a>
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="transition-colors"
            style={{ color: "var(--sp-fg-muted)" }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="md:hidden border-t px-4 py-4 flex flex-col gap-4 transition-colors duration-200"
          style={{ background: "var(--sp-bg)", borderColor: "var(--sp-nav-border)" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium transition-colors"
              style={{ color: "var(--sp-fg-muted)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-4 py-2 rounded-full text-sm font-semibold text-center transition-colors"
            style={{ background: "var(--sp-btn-bg)", color: "var(--sp-btn-fg)" }}
          >
            Hire Us
          </a>
        </div>
      )}
    </header>
  );
}
