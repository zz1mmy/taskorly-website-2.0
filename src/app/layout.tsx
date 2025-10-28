import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Taskorly - AI Assistant for Restaurants & Retail",
  description: "Your personalised AI assistant that connects to your business systems—answering questions, solving problems, and helping your team succeed in real-time.",
  keywords: "AI assistant, restaurant technology, retail automation, POS integration, staff training, business intelligence, business assistant",
  authors: [{ name: "Taskorly Team" }],
  creator: "Taskorly",
  publisher: "Taskorly",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://taskorly.com',
    siteName: 'Taskorly',
    title: 'Taskorly - AI Assistant for Restaurants & Retail',
    description: 'Your personalised AI assistant that connects to your business systems—answering questions, solving problems, and helping your team succeed in real-time.',
    images: [
      {
        url: '/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Taskorly Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taskorly - AI Assistant for Restaurants & Retail',
    description: 'Your personalised AI assistant that connects to your business systems—answering questions, solving problems, and helping your team succeed in real-time.',
    images: ['/android-chrome-512x512.png'],
    creator: '@taskorly',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  // DNS verification is handled via CNAME record in DNS provider
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
