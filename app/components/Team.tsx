import LinkedInIcon from "./LinkedInIcon";

const team = [
  {
    name: "Ajay Kumar",
    title: "Cloud Architect",
    skills: ["AWS", "GCP", "Azure", "Kubernetes", "Helm", "Terraform", "Flux CD", "ArgoCD", "GitOps"],
    linkedin: "https://www.linkedin.com/in/ajay-kumar-mandapati-8218b6b0/",
    initials: "AK",
  },
  {
    name: "Bharath Shetty",
    title: "Software Engineer",
    skills: ["Golang", "Microservices", "gRPC", "REST APIs", "MongoDB", "PostgreSQL", "AWS", "Docker", "Kubernetes"],
    linkedin: "https://www.linkedin.com/in/bharathshetty4/",
    initials: "BS",
  },
  {
    name: "Balaji Jayakumar",
    title: "Salesforce Administrator",
    skills: ["Salesforce CRM", "Lightning Components", "Flow Builder", "Sales Cloud", "Service Cloud", "Process Automation", "Business Analysis"],
    linkedin: "https://www.linkedin.com/in/balaji-jayakumar/",
    initials: "BJ",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-200"
      style={{ background: "var(--sp-bg-alt)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase transition-colors duration-200" style={{ color: "var(--sp-fg-muted)" }}>
            The Crew
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold transition-colors duration-200" style={{ color: "var(--sp-fg)" }}>
            Meet the Team
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg transition-colors duration-200" style={{ color: "var(--sp-fg-muted)" }}>
            Three specialists. One mission. Delivering enterprise-quality outcomes with the
            agility of a focused team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="sp-card group flex flex-col items-center p-8 rounded-2xl border transition-all duration-300 text-center"
              style={{ background: "var(--sp-card)" }}
            >
              <div
                className="relative w-48 h-48 rounded-full flex items-center justify-center mb-6 shadow-xl transition-all duration-300"
                style={{
                  background: "var(--sp-avatar-bg)",
                  outline: "4px solid var(--sp-avatar-ring)",
                }}
              >
                <span className="text-4xl font-bold" style={{ color: "var(--sp-fg)" }}>
                  {member.initials}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-1 transition-colors duration-200" style={{ color: "var(--sp-fg)" }}>
                {member.name.split(" ")[0]}
              </h3>
              <p className="text-sm font-semibold mb-5 transition-colors duration-200" style={{ color: "var(--sp-fg-muted)" }}>
                {member.title}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-medium border transition-colors duration-200"
                    style={{ background: "var(--sp-badge-bg)", color: "var(--sp-badge-fg)", borderColor: "var(--sp-badge-border)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200"
                style={{ background: "var(--sp-badge-bg)", borderColor: "var(--sp-border)", color: "var(--sp-fg-muted)" }}
                aria-label={`${member.name} on LinkedIn`}
              >
                <LinkedInIcon className="w-4 h-4" style={{ color: "var(--sp-fg-muted)" }} />
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
