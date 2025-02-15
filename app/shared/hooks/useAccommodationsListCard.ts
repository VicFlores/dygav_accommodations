import { useRef, useEffect } from 'react';

export const useAccommodationsListCard = (styles: Record<string, string>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  let startX: number;
  let scrollLeft: number;

  const scrollLeftHandler = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRightHandler = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          } else {
            entry.target.classList.remove(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(`.${styles.card}`);
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, [styles]);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (containerRef.current) {
      startX = e.touches[0].pageX - containerRef.current.offsetLeft;
      scrollLeft = containerRef.current.scrollLeft;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (containerRef.current) {
      const x = e.touches[0].pageX - containerRef.current.offsetLeft;
      const walk = (x - startX) * 1; // scroll-fast
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return {
    containerRef,
    scrollLeftHandler,
    scrollRightHandler,
    handleTouchStart,
    handleTouchMove,
  };
};
