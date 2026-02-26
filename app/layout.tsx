import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shaheen Umar — Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer with 8+ years of experience building exceptional digital experiences. Based in Dubai, UAE.",
  keywords: [
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Dubai",
    "UAE",
  ],
  openGraph: {
    title: "Shaheen Umar — Senior Frontend Engineer",
    description:
      "8+ years crafting interfaces. Turning complex workflows into seamless digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
