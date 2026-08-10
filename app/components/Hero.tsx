import { ArrowDown, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-200"
      style={{ background: "var(--ts-bg)" }}
    >
      {/* Subtle blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-30" style={{ background: "var(--ts-avatar-bg)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: "var(--ts-avatar-bg)" }} />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(var(--ts-grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--ts-grid-line) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium mb-8 transition-colors duration-200"
          style={{ background: "var(--ts-step-bg)", borderColor: "var(--ts-btn2-border)", color: "var(--ts-fg)" }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--ts-fg)" }} />
          Available for new projects
        </div>

        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 transition-colors duration-200"
          style={{ color: "var(--ts-fg)" }}
        >
          Enterprise-Grade Tech,{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(to right, var(--ts-grad-from), var(--ts-grad-to))" }}
          >
            Freelance Flexibility
          </span>
        </h1>

        <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-12 transition-colors duration-200" style={{ color: "var(--ts-fg-muted)" }}>
          We are <span className="font-semibold" style={{ color: "var(--ts-fg)" }}>Spreelance</span>, a team of 3
          specialists in Salesforce, Cloud Architecture, and Golang Microservices helping businesses
          build better systems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-colors duration-200"
            style={{ background: "var(--ts-btn-bg)", color: "var(--ts-btn-fg)" }}
          >
            Hire Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border transition-colors duration-200"
            style={{ borderColor: "var(--ts-btn2-border)", color: "var(--ts-btn2-fg)" }}
          >
            See Our Services
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-6 max-w-md mx-auto">
          {[
            { value: "3", label: "Specialists" },
            { value: "15+", label: "Years Experience" },
            { value: "100%", label: "Dedicated" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold transition-colors duration-200" style={{ color: "var(--ts-fg)" }}>{stat.value}</div>
              <div className="text-xs mt-1 transition-colors duration-200" style={{ color: "var(--ts-fg-subtle)" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce transition-colors duration-200"
        style={{ color: "var(--ts-fg-faint)" }}
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
}
