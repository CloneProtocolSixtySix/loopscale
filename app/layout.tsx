import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { altform } from './fonts';

export const metadata: Metadata = {
  title: "Subcurrent | Predictive Intelligence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`antialiased ${altform.variable}`}>
      <head>
        {/* Favicon link removed: handled automatically by app/icon.ico */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Inter:wght@100..900&family=IBM+Plex+Mono:wght@400;500;600;700&family=IBM+Plex+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased" style={{ fontFamily: '"Inter", sans-serif', fontOpticalSizing: 'auto' }}>{children}</body>
    </html>
  );
} 