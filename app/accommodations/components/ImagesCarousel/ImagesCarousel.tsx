'use client';

import Image from 'next/image';
import { FC, useState } from 'react';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import styles from './ImagesCarousel.module.css';

export const ImagesCarousel: FC<{ images: string[]; alt: string }> = ({
  images,
  alt,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault(); // Prevent the default link behavior
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault(); // Prevent the default link behavior
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
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

      <Image src={images[currentIndex]} alt={alt} fill priority />

      <MdOutlineKeyboardArrowRight
        className={styles.carouselArrow}
        onClick={handleNext}
        role='button'
        aria-label='next'
      />

      <div className={styles.indicator}>
        {images.map((_, index) => (
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
