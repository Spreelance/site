import { Trophy, Users, Layers } from "lucide-react";

const stats = [
  {
    icon: Trophy,
    value: "15+",
    label: "Years Combined Experience",
    description: "Decades of hands-on expertise across enterprise platforms, cloud infrastructure, and product engineering.",
  },
  {
    icon: Users,
    value: "50+",
    label: "Enterprise Clients Served",
    description: "We've partnered with startups and Fortune-500 companies alike, delivering solutions that actually ship.",
  },
  {
    icon: Layers,
    value: "100%",
    label: "End-to-End Delivery",
    description: "From architecture design to production deployment and monitoring, we own the full lifecycle.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-200"
      style={{ background: "var(--ts-bg)" }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase transition-colors duration-200" style={{ color: "var(--ts-fg-muted)" }}>
            Why Spreelance
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold transition-colors duration-200" style={{ color: "var(--ts-fg)" }}>
            Why Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="ts-card relative p-8 rounded-2xl border text-center transition-all duration-300"
                style={{ background: "var(--ts-card)" }}
              >
                <div className="inline-flex p-4 rounded-2xl mb-5 shadow-lg" style={{ background: "var(--ts-icon-bg)" }}>
                  <Icon className="w-7 h-7" style={{ color: "var(--ts-icon-fg)" }} />
                </div>
                <div className="text-5xl font-extrabold mb-2 transition-colors duration-200" style={{ color: "var(--ts-fg)" }}>
                  {stat.value}
                </div>
                <div className="font-semibold text-lg mb-3 transition-colors duration-200" style={{ color: "var(--ts-fg)" }}>
                  {stat.label}
                </div>
                <p className="text-sm leading-relaxed transition-colors duration-200" style={{ color: "var(--ts-fg-muted)" }}>
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        <div
          className="max-w-4xl mx-auto rounded-2xl border p-8 sm:p-12 transition-colors duration-200"
          style={{ background: "var(--ts-card)", borderColor: "var(--ts-border)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 leading-snug transition-colors duration-200" style={{ color: "var(--ts-fg)" }}>
                Our approach is{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(to right, var(--ts-grad-from), var(--ts-grad-to))" }}
                >
                  simple and effective
                </span>
              </h3>
              <p className="leading-relaxed mb-4 transition-colors duration-200" style={{ color: "var(--ts-fg-muted)" }}>
                We work closely with clients to understand their technical and business goals, then
                design and build solutions that are maintainable, scalable, and production-ready from
                day one.
              </p>
              <p className="leading-relaxed transition-colors duration-200" style={{ color: "var(--ts-fg-muted)" }}>
                No bloat, no hand-offs between strangers. You get direct access to the people
                building your product, with a team that cares about long-term outcomes, not just
                billable hours.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                "Direct communication, no middlemen",
                "Async-friendly, timezone-flexible",
                "Weekly delivery milestones",
                "Code ownership transferred to you",
                "Post-delivery support included",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                    style={{ background: "var(--ts-check-bg)" }}
                  >
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" style={{ color: "var(--ts-check-fg)" }}>
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm transition-colors duration-200" style={{ color: "var(--ts-fg-muted)" }}>
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
