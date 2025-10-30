export function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong style={{ fontSize: "1.15rem" }}>Nimbus Web Studio</strong>
        <p style={{ marginTop: "0.75rem" }}>
          We help ambitious product teams launch, scale, and optimize web experiences that move the needle.
        </p>
      </div>
      <div>
        <strong>Studio</strong>
        <p style={{ marginTop: "0.5rem", color: "rgba(226, 232, 240, 0.65)" }}>
          221 Innovation Drive
          <br />
          San Francisco, CA 94107
        </p>
        <p style={{ marginTop: "0.75rem" }}>
          <a href="mailto:hello@nimbusweb.studio">hello@nimbusweb.studio</a>
        </p>
      </div>
      <div>
        <strong>Subscribe</strong>
        <p style={{ marginTop: "0.5rem", color: "rgba(226, 232, 240, 0.65)" }}>
          Monthly insights on UX trends, conversion optimization, and shipping faster.
        </p>
        <form style={{ marginTop: "0.75rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <input type="email" name="email" placeholder="Email address" required style={{ flex: "1 1 220px" }} />
          <button className="button" style={{ flexShrink: 0 }} type="submit">
            Join the list
          </button>
        </form>
      </div>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <small>© {new Date().getFullYear()} Nimbus Web Studio. All rights reserved.</small>
        <small>Crafted with care in California 🌁</small>
      </div>
    </footer>
  );
}
