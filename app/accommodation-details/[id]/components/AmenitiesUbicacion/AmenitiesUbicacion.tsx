'use client';

import React, { FC, useState } from 'react';
import { MdOutlineCheckCircleOutline } from 'react-icons/md';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import styles from './AmenitiesUbicacion.module.css';

interface Amenities {
  CATEGORY_EN: string;
  CATEGORY_ES: string;
  DYGAV_ENGLISH: string;
  DYGAV_SPANISH: string;
}

interface AmenitiesUbicacionProps {
  amenities: Amenities[];
  location: {
    latitude: number;
    longitude: number;
  };
}

export const AmenitiesUbicacion: FC<AmenitiesUbicacionProps> = ({
  amenities,
  location,
}) => {
  // Add capitalize utility function
  const capitalize = (str: string) => {
    return str
      .replace(/_/g, ' ') // Replace underscores with spaces
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  // Get unique categories
  const uniqueCategories = Array.from(
    new Set(amenities.map((item) => item.CATEGORY_ES))
  );

  const [selectedCategory, setSelectedCategory] = useState<string>(
    uniqueCategories[0]
  );

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Comodidades</h1>

      <ul className={styles.amenties}>
        {uniqueCategories.map((category) => (
          <li
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={
              category === selectedCategory ? styles.selectedCategory : ''
            }
          >
            {capitalize(category)}
          </li>
        ))}
      </ul>

      {selectedCategory && (
        <ul className={styles.amenities_service}>
          {amenities
            .filter((item) => item.CATEGORY_ES === selectedCategory)
            .map((item, index) => (
              <li key={index} className={styles.amenity_item}>
                <MdOutlineCheckCircleOutline className={styles.icon} />{' '}
                {item.DYGAV_SPANISH}
              </li>
            ))}
        </ul>
      )}

      <h1 className={styles.title}>Ubicacion del alojamiento</h1>

      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
        <Map
          className={styles.map}
          defaultCenter={{
            lat: location.latitude,
            lng: location.longitude,
          }}
          defaultZoom={19}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        >
          <Marker
            position={{
              lat: location.latitude,
              lng: location.longitude,
            }}
          />
        </Map>
      </APIProvider>
    </section>
  );
};
