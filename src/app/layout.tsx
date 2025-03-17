"use client";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavbarComponent from "@/components/NavbarComponent";
import { useState } from "react";
import LoginModal from "@/components/LoginModal";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
    console.log("Clicked Login");
  };
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="relative">
        <div className="navbar-wrapper">
          {showModal && <LoginModal handleShowModal={handleShowModal} />}
          <NavbarComponent />
        </div>
        <div className="content-wrapper">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}