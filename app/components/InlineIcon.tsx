import type { SVGProps } from "react";

type IconName =
  | "spark"
  | "shield"
  | "rocket"
  | "layers"
  | "support"
  | "analytics"
  | "code";

const paths: Record<IconName, JSX.Element> = {
  spark: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M12 3v3m0 12v3m-7.5-7.5H3m18 0h-1.5M6.34 6.34 4.93 4.93m14.14 14.14-1.41-1.41M6.34 17.66l-1.41 1.41m14.14-14.14-1.41 1.41M9.75 9.75 12 12m0 0 2.25 2.25"
    />
  ),
  shield: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M12 21c6-2.25 9-6 9-11.25V6l-9-3-9 3v3.75C3 15 6 18.75 12 21Zm0-9.75 3 3-3-3-3 3 3-3Z"
    />
  ),
  rocket: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M14.5 9.5c.552 0 1-.672 1-1.5s-.448-1.5-1-1.5-1 .672-1 1.5.448 1.5 1 1.5Zm-2.84 5.61.03.03M8.5 21c-1.5 0-3-1.5-3-3 0-1.32.78-2.46 1.89-2.85l4.11-1.15 5.25-5.25c.9-.9 1.5-1.5 1.5-2.7V4.5c-.53-.53-1.5-1.5-4.5-1.5-1.2 0-1.8.6-2.7 1.5L5.75 9.75l-1.14 4.09c-.39 1.11-1.53 1.91-2.85 1.91-1.5 0-3 1.5-3 3"
    />
  ),
  layers: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="m12 3 9 5-9 5-9-5 4.8-2.66M3 13l9 5 9-5"
    />
  ),
  support: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M4.5 12A7.5 7.5 0 0 1 12 4.5v0a7.5 7.5 0 0 1 7.5 7.5v4.5l-2.25-.75-1.5 3.75-3-1.5-1.5 3h-1.5l-1.5-3-3 1.5-1.5-3.75L4.5 16.5V12Zm5.25-1.5 1.5 1.5 3-3"
    />
  ),
  analytics: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M5.25 17.25V12m4.5 5.25V6.75m4.5 10.5V9m4.5 8.25V12M3 21h18"
    />
  ),
  code: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="m8.25 15.75-4.5-4.5 4.5-4.5m7.5 9 4.5-4.5-4.5-4.5"
    />
  ),
};

export function InlineIcon({ name, className, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "999px",
        background: "rgba(59,130,246,0.16)",
        color: "#60a5fa",
        width: "2.75rem",
        height: "2.75rem",
      }}
    >
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
        {paths[name]}
      </svg>
    </span>
  );
}
