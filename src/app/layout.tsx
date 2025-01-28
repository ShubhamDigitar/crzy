import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CrazyOffers",
  description: "The best deals on the internet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
    
        <Footer />
      </body>
    </html>
  );
}
