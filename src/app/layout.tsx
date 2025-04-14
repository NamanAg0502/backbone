import type { Metadata } from 'next';
import './globals.css';
import { MainLayout } from '@/components/layout';
import { metaData } from '@/data/website';

export const metadata: Metadata = {
  title: metaData.title,
  description: metaData.description,
  keywords: metaData.keywords,
  authors: metaData.authors,
  creator: metaData.creator,
  themeColor: metaData.themeColor,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
