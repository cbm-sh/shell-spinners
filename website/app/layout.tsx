import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Toaster} from 'sonner';
import { METADATA } from '@/lib/config';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { TopBar } from "@/components/TopBar";

export const metadata: Metadata = {
  title: {
    default: METADATA.name,
    template: `%s - ${METADATA.name}`,
  },
  metadataBase: new URL(METADATA.url),
  description: METADATA.description,
  keywords: [
    "Next.js v15 ui snippets",
    "Next.js 15 snippets",
    "Tailwind CSS v4 snippets",
    "Tailwind v4 snippets",
  ],
  authors: [
    {
      name: METADATA.name,
      url: METADATA.url,
    },
  ],
  creator: METADATA.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: METADATA.url,
    title: METADATA.name,
    description: METADATA.description,
    siteName: METADATA.name,
    images: [
      {
        url: METADATA.ogImage,
        width: 1200,
        height: 630,
        alt: METADATA.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: METADATA.name,
    description: METADATA.description,
    images: [METADATA.ogImage],
    creator: METADATA.handles.twitter,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => (
    <html lang="en" suppressHydrationWarning>
      <body
      className={`${geistSans.variable} ${geistMono.variable} bg-black font-sans text-sm text-neutral-50 antialiased max-w-5xl mx-auto border border-x-neutral-800 border-y-0 overflow-x-hidden`}>
      <Header />
      <TopBar />
      <main>
        {children}
      </main>
      <Footer />
      <Toaster
        toastOptions={{
        style: {
          borderRadius: 0,
        },
        className: 'border border-neutral-800 bg-black text-neutral-50',
        }} />
      <SpeedInsights />
      <Analytics />
      </body>
    </html>
  );

export default RootLayout;
