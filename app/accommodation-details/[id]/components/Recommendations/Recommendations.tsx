'use client';

import React, { FC, useRef } from 'react';
import Image from 'next/image';
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';
import { AccommodationsListCard } from '@/app/shared';
import styles from './Recommendations.module.css';
import { getAccommodationsByCategory } from '@/app/shared/utils';
import { Accommodation } from '@/app/accommodations/interfaces';

interface ReccomendationProps {
  accommodations: Accommodation[];
  categoryId: number;
}

export const Recommendations: FC<ReccomendationProps> = ({
  accommodations,
  categoryId,
}) => {
  const articlesContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (articlesContainerRef.current) {
      articlesContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (articlesContainerRef.current) {
      articlesContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const accommodationsByCategories = getAccommodationsByCategory(
    accommodations,
    categoryId
  );

  console.log(accommodationsByCategories);

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Te recomendamos visitar tambien</h1>

      <AccommodationsListCard accommodations={accommodationsByCategories} />

      <h1 className={styles.title}>Conoce mas sobre torrevieja</h1>

      <div className={styles.articlesContainerWrapper}>
        <CiCircleChevLeft
          className={styles.scrollButton}
          onClick={scrollLeft}
        />

        <div className={styles.articlesContainer} ref={articlesContainerRef}>
          <figure className={styles.article_image}>
            <div className={styles.article_text}>
              <p className={styles.article_category}>Ocio y entretenimiento</p>
              <p className={styles.article_title}>
                Conoce la tirolina más larga de España en Pirineos Aragoneses
              </p>
            </div>
            <Image
              src='https://multimedia.dygav.es/wp-content/uploads/2024/04/13_qih5tu.png'
              alt='Torrevieja'
              fill
            />
          </figure>

          <figure className={styles.article_image}>
            <div className={styles.article_text}>
              <p className={styles.article_category}>Ocio y entretenimiento</p>
              <p className={styles.article_title}>
                Conoce la tirolina más larga de España en Pirineos Aragoneses
              </p>
            </div>
            <Image
              src='https://multimedia.dygav.es/wp-content/uploads/2024/04/13_qih5tu.png'
              alt='Torrevieja'
              fill
            />
          </figure>

          <figure className={styles.article_image}>
            <div className={styles.article_text}>
              <p className={styles.article_category}>Ocio y entretenimiento</p>
              <p className={styles.article_title}>
                Conoce la tirolina más larga de España en Pirineos Aragoneses
              </p>
            </div>
            <Image
              src='https://multimedia.dygav.es/wp-content/uploads/2024/04/13_qih5tu.png'
              alt='Torrevieja'
              fill
            />
          </figure>

          <figure className={styles.article_image}>
            <div className={styles.article_text}>
              <p className={styles.article_category}>Ocio y entretenimiento</p>
              <p className={styles.article_title}>
                Conoce la tirolina más larga de España en Pirineos Aragoneses
              </p>
            </div>
            <Image
              src='https://multimedia.dygav.es/wp-content/uploads/2024/04/13_qih5tu.png'
              alt='Torrevieja'
              fill
            />
          </figure>

          <figure className={styles.article_image}>
            <div className={styles.article_text}>
              <p className={styles.article_category}>Ocio y entretenimiento</p>
              <p className={styles.article_title}>
                Conoce la tirolina más larga de España en Pirineos Aragoneses
              </p>
            </div>
            <Image
              src='https://multimedia.dygav.es/wp-content/uploads/2024/04/13_qih5tu.png'
              alt='Torrevieja'
              fill
            />
          </figure>
        </div>

        <CiCircleChevRight
          className={styles.scrollButton}
          onClick={scrollRight}
        />
      </div>
    </section>
  );
};
