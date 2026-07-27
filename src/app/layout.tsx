import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { business, seo } from "@/data/business";
import { createPageMetadata, metadataConfig } from "@/data/metadata";
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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "DryCleaningOrLaundry",
  name: business.name,
  slogan: business.slogan,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address,
    addressLocality: business.city,
    addressCountry: business.country
  },
  telephone: [business.primaryPhone, business.secondaryPhone],
  url: business.websiteUrl,
  logo: metadataConfig.logoImageUrl,
  image: metadataConfig.logoImageUrl,
  areaServed: business.city
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="font-sans antialiased">
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
