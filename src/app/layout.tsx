import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Liva Empreendimentos - Realizamos Sonhos',
  description:
    'Construímos confiança e realizamos sonhos através de empreendimentos imobiliários de qualidade.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-urbane antialiased">{children}</body>
    </html>
  );
}
