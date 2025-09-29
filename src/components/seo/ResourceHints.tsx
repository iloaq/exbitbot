export function ResourceHints() {
  return (
    <>
      {/* Предзагрузка критических ресурсов */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://api.telegram.org" />
      
      {/* DNS prefetch для внешних ресурсов */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//api.telegram.org" />
      
      {/* Предзагрузка критических шрифтов */}
      <link
        rel="preload"
        href="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      
      {/* Предзагрузка критических изображений */}
      <link rel="preload" href="/images/hero-bg.jpg" as="image" />
      
      {/* Prefetch для важных страниц */}
      <link rel="prefetch" href="/aml-kyc" />
      <link rel="prefetch" href="/terms-of-service" />
      
      {/* Мета-теги для производительности */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Viewport оптимизация */}
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    </>
  );
}
