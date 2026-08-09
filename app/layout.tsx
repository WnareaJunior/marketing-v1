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

const siteUrl = "https://marketing-v1.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jordan Vale — Freelance marketer. This page is the sample.",
    template: "%s · Jordan Vale",
  },
  description:
    "I'm a freelance marketer who writes and builds landing pages that turn visitors into customers. You're looking at one right now.",
  keywords: [
    "freelance marketer",
    "landing pages",
    "conversion copywriting",
    "messaging",
    "positioning",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Jordan Vale — Freelance marketer. This page is the sample.",
    description:
      "Landing pages that earn their scroll. The one you're reading is the portfolio piece.",
    siteName: "Jordan Vale",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jordan Vale — Freelance marketer. This page is the sample.",
    description:
      "Landing pages that earn their scroll. The one you're reading is the portfolio piece.",
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
