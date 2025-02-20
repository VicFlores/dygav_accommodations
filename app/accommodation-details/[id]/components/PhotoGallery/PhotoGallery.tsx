'use client';

import React, { FC, useState } from 'react';
import Image from 'next/image';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import styles from './PhotoGallery.module.css';
import { useRef } from 'react';

interface PhotoGalleryProps {
  title: string;
  subtitle: string;
  images: string[];
  introductions: string;
}

export const PhotoGallery: FC<PhotoGalleryProps> = ({
  title,
  subtitle,
  images,
  introductions,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const isFirstImage = currentIndex === 0;

    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );

    if (scrollContainerRef.current) {
      if (isFirstImage) {
        // Scroll to the end
        scrollContainerRef.current.scrollLeft =
          scrollContainerRef.current.scrollWidth;
      } else {
        // Normal scroll to previous image
        scrollContainerRef.current.scrollLeft -= 280 + 16; // image width + gap
      }
    }
  };

  const handleNextClick = () => {
    const isLastImage = currentIndex === images.length - 1;

    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );

    if (scrollContainerRef.current) {
      if (isLastImage) {
        // Reset scroll position to the beginning
        scrollContainerRef.current.scrollLeft = 0;
      } else {
        // Normal scroll to next image
        scrollContainerRef.current.scrollLeft += 280 + 16; // image width + gap
      }
    }
  };

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>

      <div className={styles.galleryContainer}>
        <figure className={styles.imageContainer}>
          <Image
            src={images[currentIndex]}
            alt={`Foto ${currentIndex + 1}`}
            fill
          />
        </figure>

        <div className={styles.commingImageContainer}>
          <MdOutlineKeyboardArrowLeft onClick={handlePrevClick} />

          <div className={styles.imagesContainer} ref={scrollContainerRef}>
            {images.map((image, index) => (
              <figure
                key={index}
                className={`${styles.commingImage} ${
                  index === currentIndex ? styles.active : ''
                }`}
                onClick={() => handleImageClick(index)}
              >
                <Image src={image} alt={`Foto ${index + 1}`} fill />
              </figure>
            ))}
          </div>

          <MdOutlineKeyboardArrowRight onClick={handleNextClick} />
        </div>
      </div>

      <h1 className={styles.title}>Detalles de tu futuro alojamiento</h1>

      <p className={styles.paragraph}>{introductions}</p>
    </section>
  );
};
