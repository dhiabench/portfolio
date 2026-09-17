import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dhia Ben Cheikh | Data Engineer & BI Analyst",
  description:
    "Portfolio of Dhia Ben Cheikh, a data engineer and BI analyst focused on ETL, BI reporting, analytics, and GenAI-powered workflows.",
  keywords: [
    "Dhia Ben Cheikh",
    "Data Engineer",
    "BI Analyst",
    "ETL",
    "Power BI",
    "Python",
    "GenAI",
    "Tunisia",
  ],
  openGraph: {
    title: "Dhia Ben Cheikh | Data Engineer & BI Analyst",
    description:
      "Portfolio of Dhia Ben Cheikh, a data engineer and BI analyst focused on ETL, BI reporting, analytics, and GenAI-powered workflows.",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-950 text-slate-100">{children}</body>
    </html>
  );
}
