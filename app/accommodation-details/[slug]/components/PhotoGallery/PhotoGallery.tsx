'use client';

import React, { FC } from 'react';
import Image from 'next/image';

import styles from './PhotoGallery.module.css';

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
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{title}</h1>

      <p className={styles.subtitle}>{subtitle}</p>

      <div className={styles.gallery}>
        {images.slice(0, 5).map((image, index) => (
          <figure key={index} className={styles.imageContainer}>
            <Image src={image} alt='Image' fill className={styles.image} />
          </figure>
        ))}
      </div>

      <h1 className={styles.title}>Detalles de tu futuro alojamiento</h1>

      <p className={styles.paragraph}>{introductions}</p>
    </section>
  );
};
