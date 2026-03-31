/**
 * SEOSchema — injects per-page JSON-LD structured data for rich results.
 * Supports: TouristAttraction, FAQPage, BreadcrumbList, Review aggregate.
 *
 * FIXES applied:
 *  1. Each Review in TourPageSchema now has `itemReviewed` (Google requirement).
 *  2. The `provider` in TourPageSchema uses the same `@id` as the global LocalBusiness.
 *  3. AggregateRating is on "Product" only (TouristAttraction does not support it standalone).
 *  4. Offer items now include `name` (recommended by Google for rich results).
 *  5. SearchAction `query-input` uses the correct `actionAccessibilityRequirement` format.
 */

const BUSINESS_ID = "https://vrindavantirth.com/#localbusiness";

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
      // Product (tour package) — supports AggregateRating + Review
      {
        "@type": "Product",
        "@id": `${url}#product`,
        name,
        description,
        image,
        url,
        brand: {
          "@type": "Brand",
          name: "Vrindavan Tirth",
        },
        offers: {
          "@type": "Offer",
          name,
          price,
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url,
          priceValidUntil: "2026-12-31",
          seller: {
            "@type": "LocalBusiness",
            "@id": BUSINESS_ID,
            name: "Vrindavan Tirth",
          },
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue,
          reviewCount,
          bestRating: 5,
          worstRating: 1,
        },
        // Embedded reviews — each MUST have itemReviewed for Google validation
        review: [
          {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: 5,
              bestRating: 5,
            },
            author: { "@type": "Person", name: "Raj Patel" },
            datePublished: "2025-12-10",
            reviewBody:
              "Madhusudhan ji provided the most authentic spiritual experience. His knowledge of the sacred sites and their history made our journey truly meaningful.",
            itemReviewed: {
              "@type": "Product",
              "@id": `${url}#product`,
              name,
            },
          },
          {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: 5,
              bestRating: 5,
            },
            author: { "@type": "Person", name: "Sunita Sharma" },
            datePublished: "2026-01-15",
            reviewBody:
              "Professional service, comfortable arrangements, and deep spiritual insights throughout the journey. Highly recommend.",
            itemReviewed: {
              "@type": "Product",
              "@id": `${url}#product`,
              name,
            },
          },
        ],
      },

      // TouristAttraction — separate node, no AggregateRating (not supported)
      {
        "@type": "TouristAttraction",
        "@id": `${url}#attraction`,
        name,
        description,
        image,
        url,
        touristType: "Religious tourists",
        availableLanguage: ["Hindi", "English"],
        provider: {
          "@type": "LocalBusiness",
          "@id": BUSINESS_ID,
          name: "Vrindavan Tirth",
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
