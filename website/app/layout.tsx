import { TopBar } from "@/components/TopBar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "./globals.css";

const Footer = dynamic(() => import("@/components/Footer").then(mod => mod.Footer));
const Header = dynamic(() => import("@/components/Header").then(mod => mod.Header));
const Toaster = dynamic(() => import("sonner").then(mod => mod.Toaster));

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

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => (
    <html lang="en" suppressHydrationWarning>
      <body
      className='mx-auto bg-black font-sans text-sm text-neutral-50 antialiased max-w-5xl overflow-x-hidden border scroll-smooth border-x-neutral-800 border-y-0 min-h-screen'>
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