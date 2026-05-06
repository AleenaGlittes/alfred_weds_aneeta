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
  title: "Alfred weds Aneeta",
  description: "Join us as we celebrate our love and commitment!",

  openGraph: {
    title: "Alfred weds Aneeta",
    description: "Join us as we celebrate our love and commitment!",
    url: "https://alfred-weds-aneeta.vercel.app/",
    siteName: "Alfred weds Aneeta",
    images: [
      {
        url: "/wedd.jpg",
        width: 1200,
        height: 630,
        alt: "Alfred and Aneeta Wedding Invitation",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Alfred weds Aneeta",
    description: "Join us as we celebrate our love and commitment!",
    images: ["/wedd.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}