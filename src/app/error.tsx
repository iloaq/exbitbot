'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Логирование ошибки в консоль или сервис мониторинга
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h2 className="text-2xl font-semibold text-white">Что-то пошло не так</h2>
      <p className="text-gray-400">Произошла ошибка при загрузке страницы</p>
      <Button variant="primary" onClick={reset}>
        Попробовать снова
      </Button>
    </div>
  );
}

