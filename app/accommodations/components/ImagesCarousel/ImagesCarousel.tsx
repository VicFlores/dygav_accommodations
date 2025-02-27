'use client';

import Image from 'next/image';
import { FC, useState } from 'react';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import styles from './ImagesCarousel.module.css';

export const ImagesCarousel: FC<{ images: { url: string }[]; alt: string }> = ({
  images,
  alt,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Limit the images array to 10 items
  const limitedImages = images.slice(0, 18);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault(); // Prevent the default link behavior
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? limitedImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault(); // Prevent the default link behavior
    setCurrentIndex((prevIndex) =>
      prevIndex === limitedImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.carousel}>
      <MdOutlineKeyboardArrowLeft
        className={styles.carouselArrow}
        onClick={handlePrev}
        role='button'
        aria-label='previous'
      />

      <Image
        src={limitedImages[currentIndex].url}
        alt={alt}
        fill
        priority
        sizes='(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw'
      />

      <MdOutlineKeyboardArrowRight
        className={styles.carouselArrow}
        onClick={handleNext}
        role='button'
        aria-label='next'
      />

      <div className={styles.indicator}>
        {limitedImages.map((_, index) => (
          <div
            key={index}
            className={`${styles.indicatorDot} ${
              index === currentIndex ? styles.active : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
};
