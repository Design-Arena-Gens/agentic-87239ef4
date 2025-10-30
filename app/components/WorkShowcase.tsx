import { SectionHeader } from "./SectionHeader";

const projects = [
  {
    name: "PulseShift",
    category: "B2B SaaS",
    description:
      "Rebuilt growth analytics platform marketing site with modular CMS, driving a 3.4x increase in qualified pipeline.",
    stats: ["93 performance score", "+127% demo requests", "3-week turnaround"],
  },
  {
    name: "Atlas Commerce",
    category: "Ecommerce",
    description:
      "Headless storefront leveraging edge caching and personalized merchandising for a DTC leader, boosting conversion by 18%.",
    stats: ["<1s LCP", "+18% conversion", "Global CDN"],
  },
  {
    name: "Stratus Bank",
    category: "Fintech",
    description:
      "Secure onboarding flows and responsive app experience integrated with legacy systems for a modern digital branch launch.",
    stats: ["SOC2 ready", "99.99% uptime", "Design system delivered"],
  },
];

export function WorkShowcase() {
  return (
    <section className="section" id="work">
      <SectionHeader
        eyebrow="Selected Work"
        title="Web platforms engineered for impact"
        text="Every engagement ships with a performance-first mindset, user-tested flows, and scalable architecture."
        align="center"
      />
      <div className="section-narrow" style={{ marginTop: "3rem" }}>
        <div className="grid-3">
          {projects.map((project) => (
            <article key={project.name} className="card" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div>
                <span className="pill" style={{ marginBottom: "1rem" }}>
                  {project.category}
                </span>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{project.name}</h3>
                <p>{project.description}</p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                {project.stats.map((stat) => (
                  <span
                    key={stat}
                    style={{
                      padding: "0.4rem 0.85rem",
                      borderRadius: "12px",
                      background: "rgba(14,165,233,0.12)",
                      border: "1px solid rgba(14,165,233,0.35)",
                      color: "rgba(190,242,100,0.95)",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                    }}
                  >
                    {stat}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
