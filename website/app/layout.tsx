import { Header } from "@/components/Header";
import { TopBar } from "@/components/TopBar";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Geist } from "next/font/google";
import "./globals.css";

const DynamicAnalytics = dynamic(() => import("@vercel/analytics/react").then((mod) => mod.Analytics));
const DynamicSpeedInsights = dynamic(() => import("@vercel/speed-insights/next").then((mod) => mod.SpeedInsights));
const DynamicFooter = dynamic(() => import("@/components/Footer").then((mod) => mod.Footer));
const DynamicToaster = dynamic(() => import("sonner").then((mod) => mod.Toaster));

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
  weight: ["300", "400", "600", "700", "900"],
});

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => (
    <html lang="en" suppressHydrationWarning>
      <body
      className={`${geistSans.variable} bg-black font-sans text-sm text-neutral-50 antialiased max-w-5xl mx-auto border scroll-smooth border-x-neutral-800 border-y-0 min-h-screen`}>
      <Header />
      <TopBar />
      <main>
        {children}
      </main>
      <DynamicFooter />
      <DynamicToaster
        toastOptions={{
        style: {
          borderRadius: 0,
        },
        className: 'border border-neutral-800 bg-black text-neutral-50',
        }} />
      <DynamicSpeedInsights />
      <DynamicAnalytics />
      </body>
    </html>
  );

export default RootLayout;
