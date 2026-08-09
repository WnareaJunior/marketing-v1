import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://lumen.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lumen — Operational clarity for teams that ship",
    template: "%s · Lumen",
  },
  description:
    "Lumen turns scattered product and infrastructure signals into one live picture, so your team catches what matters before customers do.",
  keywords: ["observability", "analytics", "operations", "monitoring", "dashboards"],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Lumen — Operational clarity for teams that ship",
    description:
      "Turn scattered product and infrastructure signals into one live picture your whole team can read.",
    siteName: "Lumen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumen — Operational clarity for teams that ship",
    description:
      "Turn scattered product and infrastructure signals into one live picture your whole team can read.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${manrope.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">{children}</body>
    </html>
  );
}
