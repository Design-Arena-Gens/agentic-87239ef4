import { Navbar } from "./Navbar";

export function Hero() {
  return (
    <section className="section" id="top" style={{ paddingTop: "5.5rem" }}>
      <Navbar />
      <div className="section-narrow" style={{ marginTop: "5rem", textAlign: "center" }}>
        <span className="pill" style={{ margin: "0 auto" }}>
          Web Development Experts
        </span>
        <h1 style={{ marginTop: "1.5rem", marginBottom: "1.25rem" }}>
          Ship lightning-fast web experiences that turn visitors into customers.
        </h1>
        <p className="tagline" style={{ maxWidth: "650px", margin: "0 auto" }}>
          Nimbus Web Studio partners with visionary brands to design, develop, and optimize high-performing websites,
          SaaS platforms, and digital products. From concept to launch, we blend strategy, UX, and modern engineering to
          deliver measurable outcomes.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
          <a className="button" href="#contact">
            Start a project
          </a>
          <a
            className="pill"
            href="#work"
            style={{ padding: "0.85rem 1.5rem", fontWeight: 600, background: "rgba(148,163,184,0.15)" }}
          >
            View recent work →
          </a>
        </div>
        <div
          style={{
            marginTop: "5rem",
            display: "grid",
            gap: "1.5rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          {["B2B SaaS", "Ecommerce", "Fintech", "Climate Tech", "Developer Tools", "HealthTech"].map((item) => (
            <div
              key={item}
              className="card"
              style={{
                padding: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                fontSize: "0.9rem",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
