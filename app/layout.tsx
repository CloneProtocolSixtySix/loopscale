import React from 'react';
import type { Metadata } from 'next';
import { altform } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: "Loopscale",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className={`${altform.className} antialiased`}>{children}</body>
    </html>
  );
} 