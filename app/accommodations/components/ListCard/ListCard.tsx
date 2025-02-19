import React from 'react';
import { AccommodationsListCard } from '@/app/shared';
import styles from './ListCard.module.css';
import { crmApi } from '@/app/config';

interface Accommodation {
  accommodationid: number;
  accommodation: string;
  introductions: {
    en: string;
    es: string;
  };
  images: string[];
  main_features: {
    VALUE: number;
    DYGAV_SPANISH: string;
  }[];
  capacity: number;
  categories: {
    category_id: number;
  }[];
}

interface Category {
  category_id: number;
  category_name: string;
}

export const ListCard = async () => {
  const { data: accommodations } = await crmApi.get<Accommodation[]>(
    '/accommodations'
  );
  const { data: categories } = await crmApi.get<Category[]>('/categories');

  // Function to get accommodations by category
  const getAccommodationsByCategory = (categoryId: number) => {
    return accommodations
      .filter((accommodation) =>
        accommodation.categories.some((cat) => cat.category_id === categoryId)
      )
      .map((acc) => ({
        id: acc.accommodationid,
        images: acc.images,
        alt: acc.accommodation,
        title: acc.accommodation,
        description: acc.introductions.es || acc.introductions.en,
        pricePerNight: 'Consultar precio',
        bedrooms:
          acc.main_features.find((f) => f.DYGAV_SPANISH === 'Habitaciones')
            ?.VALUE || 0,
        bathrooms:
          acc.main_features.find((f) => f.DYGAV_SPANISH === 'Baños')?.VALUE ||
          0,
        size: `${
          acc.main_features.find((f) => f.DYGAV_SPANISH === 'Superficie')
            ?.VALUE || 0
        }m`,
        maxGuests: acc.capacity,
      }));
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Descubre nuestros alojamientos turísticos
      </h1>

      {categories.map((category) => {
        const categoryAccommodations = getAccommodationsByCategory(
          category.category_id
        );

        // Only render if the category has accommodations
        return categoryAccommodations.length > 0 ? (
          <div key={category.category_id}>
            <h2 className={styles.subtitle}>{category.category_name}</h2>
            <AccommodationsListCard accommodations={categoryAccommodations} />
          </div>
        ) : null;
      })}
    </section>
  );
};
