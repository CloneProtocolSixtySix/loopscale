import React from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const altform = localFont({
  src: [
    {
      path: './fonts/altform-light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/altform-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/altform-semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/altform-lightitalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/altform-regularitalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/altform-semibolditalic.woff2',
      weight: '600',
      style: 'italic',
    }
  ],
  variable: '--font-altform',
});

export const metadata: Metadata = {
  title: "Loopscale | We're refining frontier AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${altform.variable}`}>
      <body className="font-altform font-normal">{children}</body>
    </html>
  );
} 