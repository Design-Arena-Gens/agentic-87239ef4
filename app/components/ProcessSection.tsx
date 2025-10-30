import { SectionHeader } from "./SectionHeader";

const steps = [
  {
    step: "01",
    title: "Discover & Align",
    description:
      "We unpack your goals, measure success metrics, and analyze product-market fit so every decision ties back to outcomes that matter.",
    details: ["Stakeholder interviews", "Analytics & SEO audit", "Experience blueprint"],
  },
  {
    step: "02",
    title: "Design & Prototype",
    description:
      "Rapid cycles of UX, motion, and visual exploration to translate strategy into clickable prototypes and high-fidelity experiences.",
    details: ["Component libraries", "Interactive prototypes", "Design QA"],
  },
  {
    step: "03",
    title: "Build & Launch",
    description:
      "Modern, maintainable codebases powered by Next.js, edge functions, and a headless architecture engineered for speed and scalability.",
    details: ["TypeScript implementations", "CMS integration", "Observability setup"],
  },
  {
    step: "04",
    title: "Measure & Evolve",
    description:
      "Continuous optimization through experimentation, A/B testing, and performance enhancements to keep growth compounding.",
    details: ["Experiment backlogs", "Performance reports", "Team enablement"]
  },
];

export function ProcessSection() {
  return (
    <section className="section" id="process">
      <SectionHeader
        eyebrow="Process"
        title="A battle-tested framework to launch faster"
        text="Our sprint-based model keeps work transparent and momentum high. Weekly demos, shared dashboards, and async collaboration ensure everyone stays aligned."
        align="center"
      />
      <div className="section-narrow" style={{ marginTop: "3rem" }}>
        <div style={{ display: "grid", gap: "1.5rem" }}>
          {steps.map((step) => (
            <article
              key={step.step}
              className="card"
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(100px, 120px) 1fr",
                alignItems: "flex-start",
                gap: "1.5rem",
              }}
            >
              <div>
                <span style={{ fontSize: "3rem", fontWeight: 700, letterSpacing: "-0.05em", color: "rgba(148,163,184,0.3)" }}>
                  {step.step}
                </span>
              </div>
              <div>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{step.title}</h3>
                <p>{step.description}</p>
                <ul style={{ display: "flex", gap: "0.75rem", listStyle: "none", padding: 0, margin: "1rem 0 0", flexWrap: "wrap" }}>
                  {step.details.map((detail) => (
                    <li
                      key={detail}
                      style={{
                        padding: "0.35rem 0.9rem",
                        borderRadius: "999px",
                        background: "rgba(59,130,246,0.12)",
                        border: "1px solid rgba(59, 130, 246, 0.35)",
                        color: "rgba(191, 219, 254, 0.9)",
                        fontSize: "0.9rem",
                      }}
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
