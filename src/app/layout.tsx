import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Import Montserrat
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavbarComponent from "@/components/NavbarComponent";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], // Add weights as needed
  variable: "--font-montserrat", // Define a CSS variable for global use
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
     <body className="relative">
        {/* Navbar: Higher Z-Index */}
        <div className="navbar-wrapper">
          <NavbarComponent />
        </div>

        {/* Main Content: Lower Z-Index & Top Padding */}
        <div className="content-wrapper">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
