'use client';

import { useEffect } from 'react';

export function ScrollMotion() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const root = document.documentElement;
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.topnav-link'));
    const spySections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'));
    let frameId = 0;

    if (items.length === 0) {
      return;
    }

    const updateMotionState = () => {
      frameId = 0;

      const scrollTop = window.scrollY;
      const docHeight = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(scrollTop / docHeight, 1);
      const eased = Math.min(progress * 1.15, 1);

      root.style.setProperty('--scroll-progress', progress.toFixed(4));
      root.style.setProperty('--scroll-lift', `${Math.round(eased * 22)}px`);
      root.style.setProperty('--scroll-glow', `${Math.round(eased * 30)}px`);
      root.style.setProperty('--scroll-shadow', `${Math.round(eased * 18)}px`);
    };

    const updateActiveSection = () => {
      if (spySections.length === 0 || navLinks.length === 0) {
        return;
      }

      const marker = Math.max(window.innerHeight * 0.28, 180);
      let activeId = spySections[0].id;

      for (const section of spySections) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= marker && rect.bottom > marker) {
          activeId = section.id;
          break;
        }

        if (rect.top < marker) {
          activeId = section.id;
        }
      }

      navLinks.forEach((link) => {
        const targetId = link.getAttribute('href')?.replace('#', '');
        const isActive = targetId === activeId;

        link.classList.toggle('active', isActive);

        if (isActive) {
          link.setAttribute('aria-current', 'page');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    };

    const onScroll = () => {
      if (frameId !== 0) {
        return;
      }

      frameId = window.requestAnimationFrame(updateMotionState);
      window.requestAnimationFrame(updateActiveSection);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.18
      }
    );

    items.forEach((item) => observer.observe(item));
    updateMotionState();
    updateActiveSection();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return null;
}
