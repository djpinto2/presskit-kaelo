import type { Metadata } from 'next';
import { Anton, Barlow, Oswald, Space_Mono } from 'next/font/google';
import './globals.css';

// next/font sirve las fuentes desde el mismo dominio, las precarga y ajusta la
// fuente de respaldo para que el texto no salte cuando terminan de cargar.
const anton = Anton({ weight: '400', subsets: ['latin'], variable: '--font-anton' });
const barlow = Barlow({ weight: ['300', '400', '500', '600'], subsets: ['latin'], variable: '--font-barlow' });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' });
const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-space-mono' });

export const metadata: Metadata = {
  title: 'KAELO — Press Kit',
  description: 'KAELO · Argentine DJ — House, Tech House, Afro Tech. Official press kit.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${anton.variable} ${barlow.variable} ${oswald.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
