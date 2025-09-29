'use client';

import { useEffect } from 'react';

interface YandexMetrikaProps {
  yandexId: string;
}

export function YandexMetrika({ yandexId }: YandexMetrikaProps) {
  useEffect(() => {
    if (!yandexId) return;

    // Загружаем скрипт Яндекс.Метрики
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
      })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${yandexId}', 'ym');

      ym(${yandexId}, 'init', {
        ssr:true, 
        webvisor:true, 
        clickmap:true, 
        ecommerce:"dataLayer", 
        accurateTrackBounce:true, 
        trackLinks:true
      });
    `;
    document.head.appendChild(script);

    // Создаем noscript для случаев без JavaScript
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<div><img src="https://mc.yandex.ru/watch/${yandexId}" style="position:absolute; left:-9999px;" alt="" /></div>`;
    document.body.appendChild(noscript);

    return () => {
      // Очистка при размонтировании
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      if (noscript.parentNode) {
        noscript.parentNode.removeChild(noscript);
      }
    };
  }, [yandexId]);

  return null;
}
