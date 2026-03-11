import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
        <div className="bg-glow" style={{ top: '-10%', left: '-10%' }}></div>
        <div className="bg-glow secondary" style={{ top: '40%', right: '-10%' }}></div>
        <div className="bg-glow accent" style={{ bottom: '-10%', left: '20%' }}></div>
        
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
