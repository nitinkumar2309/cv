'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function HtmlLangSync() {
  const pathname = usePathname();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  useEffect(() => {
    const localizedPathname = basePath && pathname.startsWith(basePath) ? pathname.slice(basePath.length) || '/' : pathname;

    document.documentElement.lang = localizedPathname.startsWith('/de') ? 'de' : 'en';
  }, [basePath, pathname]);

  return null;
}
