import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Taskorly - AI Assistant for Restaurants & Retail",
  description: "Your personalized AI assistant that connects to your business systems—answering questions, solving problems, and helping your team succeed in real-time.",
  keywords: "AI assistant, restaurant technology, retail automation, POS integration, staff training, business intelligence",
  authors: [{ name: "Taskorly Team" }],
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
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
