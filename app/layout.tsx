import React from 'react';
import type { Metadata } from 'next';
import { altform } from './fonts';
import './globals.css';
export const metadata: Metadata = {
  title: "Integrality AI | An Intelligence Partner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${altform.variable} antialiased`}>
      <head>
        {/* Favicon link removed: handled automatically by app/icon.ico */}
      </head>
      <body className={`${altform.className} antialiased`}>{children}</body>
    </html>
  );
} 