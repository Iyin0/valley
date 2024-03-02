import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = localFont({
  variable: "--font-sans",
  src: [
    {
      path: '../assets/fonts/PPNeueMontreal/ppneuemontreal-bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/PPNeueMontreal/ppneuemontreal-book.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/PPNeueMontreal/ppneuemontreal-italic.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/PPNeueMontreal/ppneuemontreal-medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/PPNeueMontreal/ppneuemontreal-semibolditalic.otf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../assets/fonts/PPNeueMontreal/ppneuemontreal-thin.otf',
      weight: '100',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: "Valley",
  description: " ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>{children}</body>
    </html>
  );
}
