"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { MobileNav } from "@/components/mobile-nav";
import Footer from "@/components/footer";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="max-w-7xl mx-auto px-6">
          <MobileNav />
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
