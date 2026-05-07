import type { Metadata } from "next";
import { Geist, Geist_Mono, Great_Vibes } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

const siteUrl = "https://alfred-weds-aneeta.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "Alfred weds Aneeta",
  description: "Join us as we celebrate our love and commitment!",

  icons: {
    icon: "/icon.ico",
    shortcut: "/icon.ico",
    apple: "/icon.png",
  },

  openGraph: {
    title: "Alfred weds Aneeta",
    description: "Join us as we celebrate our love and commitment!",
    url: siteUrl,
    siteName: "Alfred weds Aneeta",
    images: [
      {
        url: "/couple.png", 
        width: 1200,
        height: 630,
        alt: "Alfred and Aneeta Wedding Invitation",
      }
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Alfred weds Aneeta",
    description: "Join us as we celebrate our love and commitment!",
    images: [`${siteUrl}/couple.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable} h-full antialiased`}    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}