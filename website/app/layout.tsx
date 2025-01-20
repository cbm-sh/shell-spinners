import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Toaster } from 'sonner';
import { TopBar } from "@/components/TopBar";
import dynamic from "next/dynamic";

const Analytics = dynamic(() => import("@vercel/analytics/react").then((mod) => mod.Analytics));
const SpeedInsights = dynamic(() => import("@vercel/speed-insights/next").then((mod) => mod.SpeedInsights));
const Footer = dynamic(() => import("@/components/Footer").then((mod) => mod.Footer));

export const metadata: Metadata = {
  title: {
    default: 'cli-loaders',
    template: '%s - cli-loaders',
  },
  metadataBase: new URL('https://cliloaders.com/'),
  description: 'A collection of copy and paste CLI loaders',
  keywords: [
    "cli",
    "loaders",
    "cli-loaders",
    "cli-spinners",
    "cli-progress-bars",
    "cli-animations",
    "cli-loading-indicators",
    "cli-spinner",
    "cli-progress-bar",
    "cli-loading-indicator",
    "spinners",
    "progress-bars",
    "animations",
    "loading-indicators",
    "spinner",
    "progress-bar",
    "loading-indicator",
    "page-loaders",
    "nextjs loaders"
  ],
  authors: [
    {
      name: 'Christian B. Martinez',
      url: 'https://christianbmartinez.com',
    },
  ],
  creator: 'Christian B. Martinez',
  openGraph: {
    type: "website",
    locale: "en_US",
    url: 'https://cliloaders.com/',
    title: 'cli-loaders',
    description: 'A collection of copy and paste CLI loaders',
    siteName: 'cli-loaders',
    images: [
      {
        url: 'https://cliloaders.com/og.jpg',
        width: 1200,
        height: 630,
        alt: 'cli-loaders | A collection of copy and paste CLI loaders',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'cli-loaders',
    description: 'A collection of copy and paste CLI loaders',
    images: ['https://cliloaders.com/og.jpg'
    ],
    creator: 'https://x.com/cbmonx',
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
};

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
      className={`${geistSans.variable} ${geistMono.variable} bg-black font-sans text-sm text-neutral-50 antialiased max-w-5xl mx-auto border scroll-smooth border-x-neutral-800 border-y-0 overflow-x-hidden min-h-screen`}>
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
