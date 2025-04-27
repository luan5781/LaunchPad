import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MarketingLaunchpad - Do Zero ao Primeiro Cliente em 7 Dias',
  description: 'A única plataforma que transforma iniciantes em marketing digital em profissionais com resultados reais, sem conhecimento técnico e com ferramentas prontas para usar.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
