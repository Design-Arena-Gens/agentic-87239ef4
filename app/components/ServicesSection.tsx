import { InlineIcon } from "./InlineIcon";
import { SectionHeader } from "./SectionHeader";

const services = [
  {
    icon: "spark" as const,
    title: "Product Strategy",
    description:
      "Full-stack discovery with research sprints, competitive audits, and experience mapping to shape the right roadmap before we write a line of code.",
    deliverables: ["Vision workshops", "Insight reports", "Growth roadmaps"],
  },
  {
    icon: "code" as const,
    title: "Design & Engineering",
    description:
      "Design systems, accessible UI, and production-ready code using TypeScript, Next.js, and edge-ready architectures optimized for performance.",
    deliverables: ["Design systems", "Frontend engineering", "Headless CMS"],
  },
  {
    icon: "rocket" as const,
    title: "Launch & Optimization",
    description:
      "Rigorous QA, instrumentation, and experimentation post-launch so your experience keeps improving based on real customer data.",
    deliverables: ["Performance audits", "Conversion experiments", "Growth enablement"],
  },
];

export function ServicesSection() {
  return (
    <section className="section" id="services">
      <SectionHeader
        eyebrow="Services"
        title="End-to-end partnerships for modern teams"
        text="Whether you need a new marketing site, a robust web app, or a launch partner for your next product milestone, we operate as an integrated extension of your team."
        align="center"
      />
      <div className="section-narrow" style={{ marginTop: "3rem" }}>
        <div className="grid-3">
          {services.map((service) => (
            <article key={service.title} className="card" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <InlineIcon name={service.icon} />
              <div>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: "0.5rem" }}>
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable} style={{ display: "flex", gap: "0.65rem", alignItems: "center" }}>
                    <span style={{ color: "#38bdf8" }}>▹</span>
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
