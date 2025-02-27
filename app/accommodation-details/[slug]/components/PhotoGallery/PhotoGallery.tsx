'use client';

import React, { FC, useState } from 'react';
import Image from 'next/image';
import { FaImages, FaTimes } from 'react-icons/fa'; // Import the icon

import styles from './PhotoGallery.module.css';

interface PhotoGalleryProps {
  title: string;
  subtitle: string;
  images: { url: string }[];
  introductions: string;
}

interface ModalProps {
  images: { url: string }[];
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

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{title}</h1>

      <p className={styles.subtitle}>{subtitle}</p>

      <div className={styles.galleryContainer}>
        <div className={styles.gallery}>
          {images.slice(0, 5).map((image, index) => (
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
              />
            </figure>
          ))}
        </div>
        <button className={styles.showAllButton} onClick={openModal}>
          <FaImages /> Mostrar todas las fotos
        </button>
      </div>

      <h1 className={styles.title}>Detalles de tu futuro alojamiento</h1>

      <p className={styles.paragraph}>{introductions}</p>

      {isModalOpen && <Modal images={images} onClose={closeModal} />}
    </section>
  );
};

const Modal: FC<ModalProps> = ({ images, onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>

        <div className={styles.modalGallery}>
          {images.map((image, index) => (
            <figure key={index} className={styles.modalImageContainer}>
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
    </div>
  );
};

export default Modal;
