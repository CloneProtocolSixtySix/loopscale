import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: "General Intellection",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <head>
        {/* Favicon link removed: handled automatically by app/icon.ico */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Inter:wght@100..900&family=IBM+Plex+Mono:wght@400;500;600;700&family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased" style={{ fontFamily: '"Inter", sans-serif', fontOpticalSizing: 'auto' }}>{children}</body>
    </html>
  );
} 