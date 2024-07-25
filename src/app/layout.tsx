"use client";
import { Monda } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { MobileNav } from "@/components/mobile-nav";
import Footer from "@/components/footer";

const inter = Monda({ weight: "400", subsets: ["vietnamese"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-7xl mx-auto">
          <MobileNav />
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
