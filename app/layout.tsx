import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "Anis Khalfaoui | Software Craftsman",
  description:
    "Software Engineer with 6+ years building scalable web applications using Java/Spring, React/Next.js, and modern DevOps tooling. Based in Tunis, available remotely.",
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Java",
    "Spring Boot",
    "Tunisia",
  ],
  authors: [{ name: "Anis Khalfaoui" }],
  openGraph: {
    title: "Anis Khalfaoui | Software Engineer",
    description: "Full-Stack Software Engineer — Java · Spring · React · Next.js",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
