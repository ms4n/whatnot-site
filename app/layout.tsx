import type { Metadata } from "next";
import { Providers } from "@/redux/provider";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

export const metadata: Metadata = {
  title: "WhatNot",
  description: "Sync your Whatsapp with Google Suite Easily!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-inter">
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
