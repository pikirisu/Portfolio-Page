import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akshat Chaurasia | Software Engineer | ML & AI Enthusiast",
  description: "Building scalable systems and intelligent ML solutions, one project at a time.",
  keywords: ["Akshat Chaurasia", "Software Engineer", "Machine Learning", "AI", "Portfolio"],
  authors: [{ name: "Akshat Chaurasia" }],
  openGraph: {
    title: "Akshat Chaurasia | Software Engineer | ML & AI Enthusiast",
    description: "Building scalable systems and intelligent ML solutions, one project at a time.",
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
