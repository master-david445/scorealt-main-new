import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ScrollAnimationProvider } from "@/components/scroll-animation-provider";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ScoreAlt - AI-Powered Credit Scoring for SMEs",
  description:
    "ScoreAlt uses advanced AI to assess creditworthiness for SMEs and informal businesses in Nigeria who lack traditional credit history. Enable faster, data-driven lending decisions.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`font-sans antialiased animate-reflect`}>
        <ScrollAnimationProvider>
          {children}
        </ScrollAnimationProvider>
        <Analytics />
      </body>
    </html>
  );
}
