import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'StreamHub - Discover & Track Your Streaming Services',
  description: 'Find content across streaming services and track your subscriptions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <main className="min-h-screen bg-bg-primary">
          {children}
        </main>
      </body>
    </html>
  );
}
