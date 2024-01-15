import type { Metadata } from "next";
import { Providers } from "@/redux/provider";
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
      </body>
    </html>
  );
}
