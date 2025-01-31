import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Import Montserrat
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["400", "700"], // Add weights as needed
  variable: "--font-montserrat" // Define a CSS variable for global use
});

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
    <html lang="en" className={montserrat.variable}>
      <body>
        <Navbar />
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
