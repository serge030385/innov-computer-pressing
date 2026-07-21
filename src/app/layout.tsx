import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { business, seo } from "@/data/business";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: seo.title,
    template: "%s | Innov Computer Pressing"
  },
  description: seo.description,
  keywords: [...seo.keywords],
  applicationName: business.name,
  icons: {
    icon: "/icon"
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: business.siteUrl,
    siteName: business.name,
    locale: "fr_CM",
    type: "website",
    images: [
      {
        url: "/images/pressing/pressing-hero.png",
        width: 1680,
        height: 900,
        alt: "Linge propre et vêtements préparés dans un pressing moderne"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/images/pressing/pressing-hero.png"]
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
  url: business.siteUrl,
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
