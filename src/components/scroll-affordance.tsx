'use client';

import { useEffect, useState } from 'react';

export function ScrollAffordance() {
  const [progress, setProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;

      setProgress(nextProgress);
      setShowButton(scrollTop > 420);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>
      <a
        className={`scroll-top ${showButton ? 'is-visible' : ''}`}
        href="#home"
        aria-label="Back to top"
      >
        ↑
      </a>
    </>
  );
}
