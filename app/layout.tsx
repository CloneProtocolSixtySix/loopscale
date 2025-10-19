import React from 'react';
import type { Metadata } from 'next';
import { IBM_Plex_Mono, IBM_Plex_Serif } from 'next/font/google';
import './globals.css';

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-plex-mono',
});

const plexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-plex-serif',
});

export const metadata: Metadata = {
  title: "Applied Reasoning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plexMono.variable} ${plexSerif.variable} antialiased`}>
      <head>
        {/* Favicon link removed: handled automatically by app/icon.ico */}
      </head>
      <body className={`${plexMono.className} antialiased`}>{children}</body>
    </html>
  );
} 