import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant" 
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat" 
});

export const metadata: Metadata = {
  title: "DMD Gold | Enterprise Jewelry Management Software",
  description: "Exquisite enterprise software for jewelry inventory, billing, and management. Streamline your gold, diamond, and gemstone business operations.",
  
  // Icons/Favicons
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  
  // Open Graph (for social media sharing)
  openGraph: {
    title: 'DMD Gold | Enterprise Jewelry Management Software',
    description: 'Streamline your jewelry business with our comprehensive management platform.',
    images: ['/og-image.png'], // Create a 1200x630px image
    type: 'website',
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'DMD Gold | Enterprise Jewelry Management Software',
    description: 'Streamline your jewelry business operations.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
