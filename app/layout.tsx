import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
