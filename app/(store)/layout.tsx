import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { SanityLive } from "@/sanity/lib/live";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vinceville",
  description: "Connecting hearts to art",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
    <html lang="en">
    <meta
  name="format-detection"
  content="telephone=no, date=no, email=no, address=no"/>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main>
          <Header />
        {children}
          </main>
          <SanityLive/>
          <Footer />
      </body>
    </html>
    </ClerkProvider>
  );
}
