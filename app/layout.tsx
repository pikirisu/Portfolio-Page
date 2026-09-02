import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://portfolio-page-pikirisu.vercel.app";
const title = "Akshat Chaurasia | Full-Stack Developer | AI Integration & Backend";
const description =
  "Computer Science student at IIIT Nagpur building full-stack AI-powered platforms with React, Node.js, and LLM integrations, backed by strong backend engineering and CS fundamentals.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Akshat Chaurasia",
    "Full-Stack Developer",
    "Backend Developer",
    "AI Integration",
    "OpenAI",
    "React",
    "TypeScript",
    "DSA",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Akshat Chaurasia", url: siteUrl }],
  creator: "Akshat Chaurasia",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: siteUrl,
    siteName: "Akshat Chaurasia",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Akshat Chaurasia",
  url: siteUrl,
  email: "mailto:akshatchaurasia212005@gmail.com",
  jobTitle: "Full-Stack Developer",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Indian Institute of Information Technology Nagpur",
  },
  knowsAbout: [
    "Full-Stack Development",
    "Backend Engineering",
    "Data Structures and Algorithms",
    "AI and LLM Integration",
  ],
  sameAs: [
    "https://github.com/pikirisu",
    "https://www.linkedin.com/in/akshat-chaurasia-1289252a9/",
    "https://leetcode.com/u/pikirisu/",
    "https://www.youtube.com/@pikirisu-dsa",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
