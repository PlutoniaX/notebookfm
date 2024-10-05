import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NotebookFM",
  description: "Your personal YouTube notebook",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <SignedIn>
            <header className="p-4 flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold">NotebookFM</Link>
            </header>
          </SignedIn>
          <SignedOut>
            <header className="p-4"></header>
          </SignedOut>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
