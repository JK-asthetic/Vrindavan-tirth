/**
 * SEOSchema — injects per-page JSON-LD structured data for rich results.
 * Supports: TouristAttraction, FAQPage, BreadcrumbList, Review aggregate.
 */

interface FAQItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface TourSchemaProps {
  name: string;
  description: string;
  price: string;
  duration: string;
  url: string;
  image?: string;
  faqs?: FAQItem[];
  breadcrumbs?: BreadcrumbItem[];
  reviewCount?: number;
  ratingValue?: number;
}

interface HomeSchemaProps {
  faqs: FAQItem[];
}

// ── Tour detail page schema ───────────────────────────────────────────────────
export function TourPageSchema({
  name,
  description,
  price,
  duration,
  url,
  image = "https://vrindavantirth.com/og-image.jpg",
  faqs = [],
  breadcrumbs = [],
  reviewCount = 47,
  ratingValue = 5.0,
}: TourSchemaProps) {
  const tourSchema = {
    "@context": "https://schema.org",
    "@graph": [
      // TouristAttraction / Product for the tour
      {
        "@type": ["Product", "TouristAttraction"],
        "@id": `${url}#product`,
        name,
        description,
        image,
        url,
        provider: {
          "@type": "LocalBusiness",
          name: "Vrindavan Tirth",
          telephone: "+91-6395809345",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Vrindavan",
            addressRegion: "Uttar Pradesh",
            postalCode: "281121",
            addressCountry: "IN",
          },
        },
        offers: {
          "@type": "Offer",
          price,
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url,
          priceValidUntil: "2026-12-31",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue,
          reviewCount,
          bestRating: 5,
          worstRating: 1,
        },
      },

      // BreadcrumbList
      ...(breadcrumbs.length > 0
        ? [
            {
              "@type": "BreadcrumbList",
              "@id": `${url}#breadcrumb`,
              itemListElement: breadcrumbs.map((crumb, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: crumb.name,
                item: crumb.url,
              })),
            },
          ]
        : []),

      // FAQPage
      ...(faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `${url}#faq`,
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema, null, 2) }}
    />
  );
}

// ── Home page FAQ schema ──────────────────────────────────────────────────────
export function HomeFAQSchema({ faqs }: HomeSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}
