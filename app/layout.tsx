import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nimbus Web Studio | Modern Web Development Services",
  description:
    "Nimbus Web Studio crafts high-converting websites, web apps, and digital products for ambitious brands."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-950 text-slate-100">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
