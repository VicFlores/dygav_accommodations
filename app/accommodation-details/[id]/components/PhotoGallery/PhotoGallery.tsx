'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import styles from './PhotoGallery.module.css';
import { useRef } from 'react';

export const PhotoGallery = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const mockResponse = {
    accommodationId: '1',
    title: 'Apartamento con Terraza a Pasos de la Playa',
    subtitle: 'Villa en Torrevieja',
    images: [
      'https://www.avaibook.com/uploads/fotos_alojs/alojamiento_w1280/9/368989_da9bfa7d52_8.png',
      'https://www.avaibook.com/uploads/fotos_alojs/alojamiento_w1280/9/368989_773fd05c58_9.png',
      'https://www.avaibook.com/uploads/fotos_alojs/alojamiento_w1280/9/368989_635d79c4bf_10.png',
      'https://www.avaibook.com/uploads/fotos_alojs/alojamiento_w1280/9/368989_ba34685992_12.png',
      'https://www.avaibook.com/uploads/fotos_alojs/alojamiento_w1280/9/368989_076d28240e_21.png',
      'https://www.avaibook.com/uploads/fotos_alojs/alojamiento_w1280/9/368989_df9ca56832_20.png',
      'https://www.avaibook.com/uploads/fotos_alojs/alojamiento_w1280/9/368989_1def8c4dbc_19.png',
      'https://www.avaibook.com/uploads/fotos_alojs/alojamiento_w1280/9/368989_b399092120_18.png',
    ],
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const isFirstImage = currentIndex === 0;

    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mockResponse.images.length - 1 : prevIndex - 1
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
    const isLastImage = currentIndex === mockResponse.images.length - 1;

    setCurrentIndex((prevIndex) =>
      prevIndex === mockResponse.images.length - 1 ? 0 : prevIndex + 1
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
      <h1 className={styles.title}>{mockResponse.title}</h1>
      <p className={styles.subtitle}>{mockResponse.subtitle}</p>

      <div className={styles.galleryContainer}>
        <figure className={styles.imageContainer}>
          <Image
            src={mockResponse.images[currentIndex]}
            alt={`Foto ${currentIndex + 1}`}
            fill
          />
        </figure>

        <div className={styles.commingImageContainer}>
          <MdOutlineKeyboardArrowLeft onClick={handlePrevClick} />

          <div className={styles.imagesContainer} ref={scrollContainerRef}>
            {mockResponse.images.map((image, index) => (
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

      <p className={styles.paragraph}>
        Bienvenidos a nuestro acogedor loft en Lo Pagán, un refugio encantador y
        acogedor con todo lo que necesitas para una escapada inolvidable.
        Ubicado a pocos pasos del puerto y la playa de Villananitos, nuestro
        loft es ideal para parejas y pequeñas familias que buscan descansar,
        relajarse y explorar todo lo que esta hermosa región costera tiene para
        ofrecer. La ubicación no podría ser mejor. Situado a tan sólo 50 metros
        del puerto de Lo Pagán, te encontrarás rodeado de una vibrante vida
        marina y gastronómica. Si lo que buscas es arena y mar, la hermosa playa
        de Villananitos te espera a sólo 150 metros de distancia. Además, los
        famosos baños de lodo, una experiencia rejuvenecedora que ha colocado a
        esta región en el mapa, están a tan solo 10 minutos a pie, al final de
        la playa. Después de un día explorando, relájate y disfruta de la brisa
        marina en nuestra terraza comunitaria. Es el lugar perfecto para leer un
        libro, disfrutar de una bebida o simplemente contemplar el mar. Y si
        buscas una vista aún más panorámica, dirígete a la terraza superior,
        donde los paisajes de Lo Pagán se desplegarán ante tus ojos en una vista
        inolvidable. Estamos encantados de recibir a tus compañeros peludos en
        nuestro loft. Sin embargo, te pedimos comprensión si encuentras algún
        pelito; hacemos nuestro mejor esfuerzo por limpiar, pero a veces es
        difícil asegurar que todos queden fuera. Nuestro loft es más que un
        lugar para dormir; es tu puerta de entrada a todo lo que Lo Pagán tiene
        para ofrecer.
      </p>
    </section>
  );
};
