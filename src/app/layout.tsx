import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PostHogProvider } from "../components/PostHogProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.puang.in"),
  title: {
    default: "Karan Kumar",
    template: "%s | Karan Kumar",
  },
  description: "Programmer, filmmaker and uku player",
  openGraph: {
    title: "Karan Kumar",
    description: "Programmer, filmmaker and uku player",
    url: "https://www.puang.in",
    siteName: "Karan Kumar",
    locale: "en_US",
    type: "website",
    images: ["https://www.puang.in/og/home"],
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  twitter: {
    title: "Karan Kumar",
    card: "summary_large_image",
    creator: "@puangg59",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground font-mono`}>
        <PostHogProvider>
          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="mt-10">{children}</div>
          </div>
        </PostHogProvider>
      </body>
    </html>
  );
}
