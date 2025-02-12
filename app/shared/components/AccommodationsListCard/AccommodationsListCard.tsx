'use client';

import React, { FC, useRef } from 'react';
import { PiBedLight } from 'react-icons/pi';
import { PiToiletLight } from 'react-icons/pi';
import { PiPencilRuler } from 'react-icons/pi';
import { GoPeople } from 'react-icons/go';
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';
import { AiOutlineHeart } from 'react-icons/ai';
import styles from './AccommodationsListCard.module.css';
import { AccommodationsCarousel } from '../AccommodationsCarousel/AccommodationsCarousel';

interface Accommodation {
  id: number;
  images: string[];
  alt: string;
  title: string;
  description: string;
  pricePerNight: string;
  bedrooms: number;
  bathrooms: number;
  size: string;
  maxGuests: number;
}

interface AccommodationsListCardProps {
  accommodations: Accommodation[];
}

export const AccommodationsListCard: FC<AccommodationsListCardProps> = ({
  accommodations,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.wrapper}>
      <CiCircleChevLeft className={styles.leftArrow} onClick={scrollLeft} />

      <div className={styles.container} ref={containerRef}>
        {accommodations.map((accommodation) => (
          <div key={accommodation.id} className={styles.card}>
            <figure className={styles.imageContainer}>
              <AiOutlineHeart className={styles.heartIcon} />

              <AccommodationsCarousel
                images={accommodation.images}
                alt={accommodation.alt}
              />
            </figure>

            <h3 className={styles.cardTitle}>{accommodation.title}</h3>

            <p className={styles.cardDescription}>
              {accommodation.description}
            </p>

            <p className={styles.cardPrice}>{accommodation.pricePerNight}</p>

            <div className={styles.card_amenities}>
              <div className={styles.card_amenities_item}>
                <PiBedLight className={styles.card_amenities_icon} />
                {accommodation.bedrooms}
              </div>

              <div className={styles.card_amenities_item}>
                <PiToiletLight className={styles.card_amenities_icon} />
                {accommodation.bathrooms}
              </div>

              <div className={styles.card_amenities_item}>
                <PiPencilRuler className={styles.card_amenities_icon} />
                {accommodation.size}
              </div>

              <div className={styles.card_amenities_item}>
                <GoPeople className={styles.card_amenities_icon} />
                {accommodation.maxGuests}
              </div>
            </div>
          </div>
        ))}
      </div>

      <CiCircleChevRight className={styles.rightArrow} onClick={scrollRight} />
    </div>
  );
};
