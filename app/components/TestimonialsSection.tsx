import { SectionHeader } from "./SectionHeader";

const testimonials = [
  {
    quote:
      "Nimbus unlocked a velocity we didn't think possible. They handled everything from strategy to QA and launched our new site in under a month without compromising on quality.",
    name: "Sarah Malik",
    title: "VP Growth, PulseShift",
  },
  {
    quote:
      "Their team feels like an embedded squad. The systems they've built for us continue to scale across product lines and the conversion gains have held steady quarter over quarter.",
    name: "Jordan Estévez",
    title: "Head of Digital, Atlas Commerce",
  },
  {
    quote:
      "Top-tier craftsmanship paired with data literacy. Nimbus helped us rethink onboarding entirely and our time-to-value dropped by 40% for new users.",
    name: "Priya Sharma",
    title: "Product Lead, Stratus Bank",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section" id="testimonials">
      <SectionHeader
        eyebrow="Testimonials"
        title="Trusted by product-led teams across industries"
        text="We build long-term partnerships with founders, CMOs, and product leaders shipping ambitious roadmaps."
        align="center"
      />
      <div className="section-narrow" style={{ marginTop: "3rem" }}>
        <div className="grid-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="card" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <p style={{ fontSize: "1.05rem", color: "#e2e8f0" }}>“{testimonial.quote}”</p>
              <div>
                <strong>{testimonial.name}</strong>
                <p style={{ marginTop: "0.4rem", fontSize: "0.95rem" }}>{testimonial.title}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
