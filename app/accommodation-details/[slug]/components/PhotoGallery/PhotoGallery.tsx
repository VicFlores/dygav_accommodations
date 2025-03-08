'use client';

import React, { FC, useState } from 'react';
import Image from 'next/image';
import {
  FaImages,
  FaTimes,
  FaArrowLeft,
  FaArrowRight,
  FaExpand,
} from 'react-icons/fa';

import styles from './PhotoGallery.module.css';

interface PhotoGalleryProps {
  title: string;
  subtitle: string;
  images: { url: string; orientation: 'portrait' | 'landscape' | 'square' }[];
  introductions: string;
}

interface ModalProps {
  images: { url: string; orientation: 'portrait' | 'landscape' | 'square' }[];
  onClose: () => void;
}

interface SlideshowProps {
  images: { url: string; orientation: 'portrait' | 'landscape' | 'square' }[];
  startIndex: number;
  onClose: () => void;
}

export const PhotoGallery: FC<PhotoGalleryProps> = ({
  title,
  subtitle,
  images,
  introductions,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Filter to include only horizontal images
  const horizontalImages = images.filter(
    (image) =>
      image.orientation === 'landscape' || image.orientation === 'square'
  );

  const displayedImages = horizontalImages.slice(0, 5);

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{title}</h1>

      <p className={styles.subtitle}>{subtitle}</p>

      <div className={styles.galleryContainer}>
        <div className={styles.gallery}>
          {displayedImages.map((image, index) => (
            <figure
              key={index}
              className={styles.imageContainer}
              onClick={openModal}
            >
              <Image
                src={image.url}
                alt='Image'
                fill
                className={styles.image}
                priority
              />
            </figure>
          ))}
        </div>
        <button className={styles.showAllButton} onClick={openModal}>
          <FaImages /> Mostrar todas las fotos
        </button>
        <button className={styles.counterButton} onClick={openModal}>
          <FaExpand className={styles.expandIcon} />
          {images.length} fotos
        </button>
      </div>

      <h1 className={styles.title}>Detalles de tu futuro alojamiento</h1>

      <p className={styles.paragraph}>{introductions}</p>

      {isModalOpen && <Modal images={images} onClose={closeModal} />}
    </section>
  );
};

const Modal: FC<ModalProps> = ({ images, onClose }) => {
  const [slideshowIndex, setSlideshowIndex] = useState<number | null>(null);

  const openSlideshow = (index: number) => {
    setSlideshowIndex(index);
  };

  const closeSlideshow = () => {
    setSlideshowIndex(null);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>

        <div className={styles.modalGallery}>
          {images.map((image, index) => (
            <figure
              key={index}
              className={`${styles.modalImageContainer} ${
                image.orientation === 'portrait'
                  ? styles.portrait
                  : styles.landscape
              }`}
              onClick={() => openSlideshow(index)}
            >
              <Image
                src={image.url}
                alt={`Image ${index + 1}`}
                layout='fill'
                objectFit='cover'
                className={styles.modalImage}
              />
            </figure>
          ))}
        </div>
      </div>

      {slideshowIndex !== null && (
        <Slideshow
          images={images}
          startIndex={slideshowIndex}
          onClose={closeSlideshow}
        />
      )}
    </div>
  );
};

const Slideshow: FC<SlideshowProps> = ({ images, startIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.slideshowOverlay} onClick={onClose}>
      <div
        className={styles.slideshowContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.slideshowClose} onClick={onClose}>
          <FaTimes />
        </button>

        <button className={styles.slideshowPrev} onClick={goToPrevious}>
          <FaArrowLeft />
        </button>

        <div className={styles.slideshowImageContainer}>
          <Image
            src={images[currentIndex].url}
            alt={`Slide ${currentIndex + 1}`}
            fill
            className={styles.slideshowImage}
            sizes='100vw'
            priority
          />
        </div>

        <button className={styles.slideshowNext} onClick={goToNext}>
          <FaArrowRight />
        </button>

        <div className={styles.slideshowCounter}>
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default Modal;
