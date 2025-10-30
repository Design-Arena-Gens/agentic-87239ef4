const links = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#work", label: "Work" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" }
];

export function Navbar() {
  return (
    <nav>
      <a href="#top" style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontWeight: 600 }}>
        <span
          style={{
            width: "40px",
            height: "40px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "12px",
            background: "linear-gradient(135deg, rgba(59,130,246,0.65), rgba(236,72,153,0.45))",
            boxShadow: "0 10px 30px rgba(99,102,241,0.35)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          NW
        </span>
        Nimbus Web Studio
      </a>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
