'use client';

import React, { FC, useRef, useState } from 'react';
import Image from 'next/image';
import { PiBedLight } from 'react-icons/pi';
import { PiToiletLight } from 'react-icons/pi';
import { PiPencilRuler } from 'react-icons/pi';
import { GoPeople } from 'react-icons/go';
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';
import { AiOutlineHeart } from 'react-icons/ai'; // Import heart icon
import styles from './AccommodationsListCard.module.css';

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
              <ImageCarousel
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

const ImageCarousel: FC<{ images: string[]; alt: string }> = ({
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
      <CiCircleChevLeft className={styles.carouselArrow} onClick={handlePrev} />
      <Image src={images[currentIndex]} alt={alt} layout='fill' />
      <CiCircleChevRight
        className={styles.carouselArrow}
        onClick={handleNext}
      />
    </div>
  );
};
