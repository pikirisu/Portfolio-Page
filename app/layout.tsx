import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akshat Chaurasia | Software Engineering Student | Backend & DSA",
  description:
    "Final-year CSE student at IIIT Nagpur focused on backend development, problem solving, and computer science fundamentals.",
  keywords: [
    "Akshat Chaurasia",
    "Software Engineering Student",
    "Backend Developer",
    "DSA",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Akshat Chaurasia" }],
  openGraph: {
    title: "Akshat Chaurasia | Software Engineering Student | Backend & DSA",
    description:
      "Final-year CSE student at IIIT Nagpur focused on backend development, problem solving, and computer science fundamentals.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
