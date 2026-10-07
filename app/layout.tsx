import type { Metadata } from "next"; import { Inter } from "next/font/google"; import "./globals.css";
import Header from "@/components/Header"; import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const metadata: Metadata = { title: "Wear your symbol", description: "Objects created for those who refuse the ordinary." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={inter.variable}><body className="font-sans"><Header />{children}<Footer /></body></html>);
}
