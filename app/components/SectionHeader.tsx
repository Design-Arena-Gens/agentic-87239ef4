"use client";

import { createElement } from "react";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  text: string;
  align?: "left" | "center";
  tag?: keyof JSX.IntrinsicElements;
};

export function SectionHeader({ eyebrow, title, text, align = "left", tag = "h2" }: SectionHeaderProps) {
  return (
    <header className="section-narrow" style={{ textAlign: align }}>
      <span className="pill" style={{ marginInline: align === "center" ? "auto" : undefined }}>
        {eyebrow}
      </span>
      {createElement(tag, { style: { marginTop: "1rem", marginBottom: "1rem" } }, title)}
      <p style={{ fontSize: "1.1rem", maxWidth: align === "center" ? "640px" : "540px", margin: align === "center" ? "0 auto" : "0" }}>
        {text}
      </p>
    </header>
  );
}
