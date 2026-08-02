import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { business, seo } from "@/data/business";
import { createPageMetadata, metadataConfig } from "@/data/metadata";
import { siteSchema } from "@/data/schema";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  ...createPageMetadata({
    description: seo.description
  }),
  metadataBase: new URL(metadataConfig.websiteUrl),
  title: {
    default: seo.title,
    template: "%s | Innov-Pressing"
  },
  keywords: [...seo.keywords],
  applicationName: business.name,
  icons: {
    icon: "/icon"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="font-sans antialiased">
        <JsonLd id="site-schema" data={siteSchema} />
        <a href="#contenu" className="skip-link">
          Aller au contenu principal
        </a>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
