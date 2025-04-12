import type { Metadata } from "next";
import { Gabarito, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const gabarito = Gabarito({
  variable: "--font-gabarito-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gabarito.variable} antialiased`}>{children}</body>
    </html>
  );
}
