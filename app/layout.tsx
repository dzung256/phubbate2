import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Phubbate2 - Learn & Practice Debate',
  description: 'Master debate skills with AI-powered feedback and practice',
  icons: {
    icon: '🎤',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}