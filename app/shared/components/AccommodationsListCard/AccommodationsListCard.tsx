'use client';

import React, { FC, useRef, useEffect } from 'react';
import { PiBedLight, PiToiletLight, PiPencilRuler } from 'react-icons/pi';
import { GoPeople } from 'react-icons/go';
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';
import { AiOutlineHeart } from 'react-icons/ai';
import { ImagesCarousel } from '@/app/accommodations/components';
import styles from './AccommodationsListCard.module.css';

interface AccommodationsListCardProps {
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

export const AccommodationsListCard: FC<{
  accommodations: AccommodationsListCardProps[];
}> = ({ accommodations }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  let startX: number;
  let scrollLeft: number;

  const scrollLeftHandler = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRightHandler = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          } else {
            entry.target.classList.remove(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(`.${styles.card}`);
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (containerRef.current) {
      startX = e.touches[0].pageX - containerRef.current.offsetLeft;
      scrollLeft = containerRef.current.scrollLeft;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (containerRef.current) {
      const x = e.touches[0].pageX - containerRef.current.offsetLeft;
      const walk = (x - startX) * 1; // scroll-fast
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
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
          <div key={accommodation.id} className={styles.card}>
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
        ))}
      </div>

      <CiCircleChevRight
        className={styles.rightArrow}
        onClick={scrollRightHandler}
      />
    </div>
  );
};
