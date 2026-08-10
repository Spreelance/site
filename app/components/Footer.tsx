import { Zap } from "lucide-react";
import LinkedInIcon from "./LinkedInIcon";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const team = [
  { name: "Ajay Kumar", href: "https://www.linkedin.com/in/ajay-kumar-mandapati-8218b6b0/" },
  { name: "Bharath Shetty", href: "https://www.linkedin.com/in/bharathshetty4/" },
  { name: "Balaji Jayakumar", href: "https://www.linkedin.com/in/balaji-jayakumar/" },
];

export default function Footer() {
  return (
    <footer
      className="border-t py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200"
      style={{ background: "var(--sp-bg-alt)", borderColor: "var(--sp-nav-border)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--sp-icon-bg)" }}>
                <Zap className="w-4 h-4" style={{ color: "var(--sp-icon-fg)" }} />
              </div>
              <span className="font-bold text-lg tracking-tight transition-colors duration-200" style={{ color: "var(--sp-fg)" }}>
                spreelance.
              </span>
            </a>
            <p className="text-sm leading-relaxed max-w-xs transition-colors duration-200" style={{ color: "var(--sp-fg-subtle)" }}>
              Enterprise-Grade Tech, Freelance Flexibility. Salesforce, Cloud, and Golang
              specialists for hire.
            </p>
          </div>

          <div>
            <p className="font-semibold text-sm mb-4 transition-colors duration-200" style={{ color: "var(--sp-fg)" }}>
              Navigation
            </p>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "var(--sp-fg-subtle)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-sm mb-4 transition-colors duration-200" style={{ color: "var(--sp-fg)" }}>
              Connect With Us
            </p>
            <ul className="flex flex-col gap-3">
              {team.map((member) => (
                <li key={member.name}>
                  <a
                    href={member.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm transition-colors duration-200"
                    style={{ color: "var(--sp-fg-subtle)" }}
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <LinkedInIcon className="w-4 h-4" style={{ color: "var(--sp-fg-muted)" }} />
                    {member.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors duration-200"
          style={{ borderColor: "var(--sp-nav-border)" }}
        >
          <p className="text-xs transition-colors duration-200" style={{ color: "var(--sp-fg-faint)" }}>
            © {new Date().getFullYear()} spreelance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
