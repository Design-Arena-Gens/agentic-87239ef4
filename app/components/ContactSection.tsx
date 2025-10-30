import { ContactForm } from "./ContactForm";
import { SectionHeader } from "./SectionHeader";

const highlights = [
  { title: "Avg. 28%", subtitle: "Conversion uplift" },
  { title: "12 days", subtitle: "Median launch cycle" },
  { title: "+60 NPS", subtitle: "Client satisfaction" },
];

export function ContactSection() {
  return (
    <section className="section" id="contact">
      <div className="section-narrow" style={{ display: "grid", gap: "3rem" }}>
        <SectionHeader
          eyebrow="Let’s build"
          title="Tell us about your next big chapter"
          text="Share your goals, timeline, and the challenges you're tackling. We'll reply within one business day with a tailored game plan."
          align="left"
          tag="h2"
        />
        <div style={{ display: "grid", gap: "2.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          <div className="card" style={{ display: "grid", gap: "1.5rem" }}>
            <h3 style={{ fontSize: "1.6rem" }}>Why teams choose Nimbus</h3>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: "1rem" }}>
              {[
                "Hybrid team of strategists, designers, and senior engineers",
                "Outcome-driven roadmaps with weekly visibility",
                "Edge-ready architectures designed for speed and conversion",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#34d399" }}>●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              {highlights.map((highlight) => (
                <div key={highlight.title} style={{ display: "grid", gap: "0.25rem" }}>
                  <strong style={{ fontSize: "1.75rem" }}>{highlight.title}</strong>
                  <span style={{ color: "rgba(226,232,240,0.7)" }}>{highlight.subtitle}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "0.95rem", color: "rgba(226,232,240,0.6)" }}>
              Prefer email? Reach out at <a href="mailto:hello@nimbusweb.studio">hello@nimbusweb.studio</a>
            </p>
          </div>
          <div className="card">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
