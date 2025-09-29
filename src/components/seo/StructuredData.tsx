import { SITE_CONFIG } from '@/lib/constants'

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "ExBitBot - Массовые выплаты на карты",
    "description": "Автоматические массовые выплаты на карты за криптовалюту. Быстро, без ограничений, с уведомлениями в Telegram.",
    "url": SITE_CONFIG.url,
    "logo": "https://exbitbot.com/header.svg",
    "image": SITE_CONFIG.ogImage,
    "email": "sup@exbitbot.net",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "RU"
    },
    "serviceType": "Финансовые услуги",
    "areaServed": "RU",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Услуги массовых выплат",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Массовые выплаты на карты Сбербанка",
            "description": "Выплаты на карты Сбербанка и Т-Банка с комиссией 0.15%"
          },
          "price": "0.15",
          "priceCurrency": "PERCENT"
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Массовые выплаты на карты других банков",
            "description": "Выплаты на карты любых банков РФ с комиссией 0.3%"
          },
          "price": "0.3",
          "priceCurrency": "PERCENT"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
