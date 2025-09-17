import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.liva.com.br'),
  title: {
    default: 'Liva Empreendimentos – Realizamos Sonhos',
    template: '%s | Liva Empreendimentos',
  },
  description:
    'Construímos confiança e realizamos sonhos através de empreendimentos imobiliários de qualidade.',
  alternates: {
    canonical: '/',
  },
  keywords: [
    'Liva',
    'empreendimentos',
    'imobiliária',
    'apartamentos',
    'lançamentos',
  ],
  openGraph: {
    type: 'website',
    url: 'https://www.liva.com.br/',
    title: 'Liva Empreendimentos – Realizamos Sonhos',
    description:
      'Construímos confiança e realizamos sonhos através de empreendimentos imobiliários de qualidade.',
    locale: 'pt_BR',
    siteName: 'Liva Empreendimentos',
    images: [
      {
        url: '/images/og/cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Liva Empreendimentos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Liva Empreendimentos – Realizamos Sonhos',
    description:
      'Construímos confiança e realizamos sonhos através de empreendimentos imobiliários de qualidade.',
    images: ['/images/og/cover.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  themeColor: '#000000',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
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
