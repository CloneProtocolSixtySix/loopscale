import React from 'react';
import type { Metadata } from 'next';
import { altform } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: "Loopscale | We're refining frontier AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${altform.variable} antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${altform.className} antialiased`}>{children}</body>
    </html>
  );
} 