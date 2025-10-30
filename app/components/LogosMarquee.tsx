const logos = ["Linear", "Figma", "Zapier", "Webflow", "Slack", "Amplitude"];

export function LogosMarquee() {
  return (
    <section className="section" aria-label="Client logos">
      <div className="section-narrow" style={{ textAlign: "center", display: "grid", gap: "2rem" }}>
        <span className="pill" style={{ margin: "0 auto" }}>
          Trusted by fast-moving teams
        </span>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
            color: "rgba(148, 163, 184, 0.8)",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {logos.map((logo) => (
            <span key={logo} style={{ fontSize: "0.9rem" }}>
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
