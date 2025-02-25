import type { Metadata } from "next";
import '@/app/globals.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Learning Next js",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>  
      
    </html>
  );
}
