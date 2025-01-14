import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "cli-loaders",
  description: "A collection of CLI loaders for your projects",
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black font-sans text-sm text-neutral-50 antialiased max-w-5xl mx-auto border border-x-neutral-900 border-y-0 overflow-scroll`}>
        <main>
        <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
