'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import { PiBedLight, PiToiletLight, PiPencilRuler } from 'react-icons/pi';
import { GoPeople } from 'react-icons/go';
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';
import { AiOutlineHeart } from 'react-icons/ai';
import { ImagesCarousel } from '@/app/accommodations/components';
import styles from './AccommodationsListCard.module.css';
import { useAccommodationsListCard } from '../../hooks';
import { AccommodationsList } from '../../interfaces';

export const AccommodationsListCard: FC<{
  accommodations: AccommodationsList[];
}> = ({ accommodations }) => {
  const {
    containerRef,
    scrollLeftHandler,
    scrollRightHandler,
    handleTouchStart,
    handleTouchMove,
  } = useAccommodationsListCard(styles);

  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  };

  return (
    <div className={styles.wrapper}>
      <CiCircleChevLeft
        className={styles.leftArrow}
        onClick={scrollLeftHandler}
      />

      <div
        className={styles.container}
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {accommodations.map((accommodation) => (
          <Link
            key={accommodation.id}
            href={`/accommodation-details/${accommodation.slug}`}
            className={styles.cardLink}
            prefetch={true} // Ensure prefetching
          >
            <div className={styles.card}>
              <figure className={styles.imageContainer}>
                <AiOutlineHeart className={styles.heartIcon} />

                <ImagesCarousel
                  images={accommodation.images}
                  alt={accommodation.alt}
                />
              </figure>

              <h3 className={styles.cardTitle}>{accommodation.title}</h3>

              <p className={styles.cardDescription}>
                {truncateDescription(accommodation.description, 100)}
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
          </Link>
        ))}
      </div>

      <CiCircleChevRight
        className={styles.rightArrow}
        onClick={scrollRightHandler}
      />
    </div>
  );
};
