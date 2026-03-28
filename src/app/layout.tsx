import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sevas Foundation Trust | Registered NGO',
  description: 'Sevas Foundation is a premier rehabilitation NGO focused on empowering differently-abled lives with Prosthetic & Orthotic services.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: -1, pointerEvents: 'none' }}>
          <div className="bg-glow" style={{ top: '-10%', left: '-10%' }}></div>
          <div className="bg-glow secondary" style={{ top: '40%', right: '-10%' }}></div>
          <div className="bg-glow accent" style={{ bottom: '-10%', left: '20%' }}></div>
        </div>
        
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
