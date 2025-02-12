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

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.carousel}>
      <MdOutlineKeyboardArrowLeft
        className={styles.carouselArrow}
        onClick={handlePrev}
      />

      <Image src={images[currentIndex]} alt={alt} layout='fill' />

      <MdOutlineKeyboardArrowRight
        className={styles.carouselArrow}
        onClick={handleNext}
      />
    </div>
  );
};
