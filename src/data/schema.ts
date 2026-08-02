import { services } from "@/data/services";
import { business } from "@/data/business";
import { canonicalUrl, metadataConfig } from "@/data/metadata";
import type { BlogPost } from "@/data/seo-content";

type BreadcrumbItem = {
  name: string;
  path: string;
};

const localBusinessId = `${business.websiteUrl}/#localbusiness`;
const organizationId = `${business.websiteUrl}/#organization`;
const websiteId = `${business.websiteUrl}/#website`;

export const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "DryCleaningOrLaundry"],
      "@id": localBusinessId,
      name: business.name,
      legalName: business.name,
      slogan: business.slogan,
      description:
        "Pressing à Douala spécialisé dans le lavage à la pièce, le lavage au poids, le repassage, le service express, la collecte et la livraison de linge.",
      url: business.websiteUrl,
      logo: metadataConfig.logoImageUrl,
      image: metadataConfig.openGraphImage.url,
      sameAs: [],
      telephone: [business.primaryPhone, business.secondaryPhone],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: business.primaryPhone,
          contactType: "customer service",
          areaServed: "CM",
          availableLanguage: ["fr"]
        },
        {
          "@type": "ContactPoint",
          telephone: business.secondaryPhone,
          contactType: "customer service",
          areaServed: "CM",
          availableLanguage: ["fr"]
        }
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: business.address,
        addressLocality: business.city,
        addressCountry: business.country
      },
      areaServed: [
        "Douala",
        "Akwa",
        "Akwa Nord",
        "Bonapriso",
        "Deido",
        "Bali",
        "Bonamoussadi",
        "Logpom",
        "Makepe"
      ],
      makesOffer: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          areaServed: business.city,
          provider: {
            "@id": localBusinessId
          }
        }
      })),
      openingHoursSpecification: [],
      geo: {
        "@type": "GeoCoordinates"
      }
    },
    {
      "@type": "Organization",
      "@id": organizationId,
      name: business.name,
      url: business.websiteUrl,
      logo: metadataConfig.logoImageUrl,
      sameAs: [],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: business.primaryPhone,
        contactType: "customer service",
        areaServed: "CM",
        availableLanguage: ["fr"]
      }
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: business.name,
      url: business.websiteUrl,
      inLanguage: "fr-CM",
      publisher: {
        "@id": organizationId
      }
    }
  ]
} as const;

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path)
    }))
  };
}

export function webPageSchema({
  path,
  title,
  description,
  breadcrumbs
}: {
  path: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
}) {
  return {
    "@type": "WebPage",
    "@id": `${canonicalUrl(path)}#webpage`,
    url: canonicalUrl(path),
    name: title,
    description,
    inLanguage: "fr-CM",
    isPartOf: {
      "@id": websiteId
    },
    about: {
      "@id": localBusinessId
    },
    breadcrumb: breadcrumbSchema(breadcrumbs)
  };
}

export function faqPageSchema(items: readonly { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function articleSchema(post: BlogPost) {
  const path = `/blog/${post.slug}`;

  return {
    "@type": "BlogPosting",
    "@id": `${canonicalUrl(path)}#article`,
    headline: post.title,
    description: post.description,
    image: canonicalUrl(post.image),
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    inLanguage: "fr-CM",
    author: {
      "@id": organizationId
    },
    publisher: {
      "@id": organizationId
    },
    mainEntityOfPage: {
      "@id": `${canonicalUrl(path)}#webpage`
    },
    keywords: post.keywords.join(", ")
  };
}

export function pageGraph(
  page: ReturnType<typeof webPageSchema>,
  breadcrumbs: ReturnType<typeof breadcrumbSchema>,
  ...extra: Array<Record<string, unknown>>
) {
  return {
    "@context": "https://schema.org",
    "@graph": [page, breadcrumbs, ...extra]
  };
}
