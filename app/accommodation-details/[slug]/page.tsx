import React from 'react';
import { Metadata } from 'next';
import { Footer, Hero, Navbar } from '@/app/shared';
import { getAccommodation, getAccommodations } from '@/app/services';
import {
  AmenitiesUbicacion,
  AvailabilityCalendar,
  PhotoGallery,
  Recommendations,
} from './components';

export const metadata: Metadata = {
  title: 'Accommodation Details',
  description: 'Accommodation Details Page',
  keywords: 'Accommodation, Details',
};

export default async function AccommodationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const accommodations = await getAccommodations();
  const accommodationDetails = await getAccommodation(slug);

  if (!accommodationDetails) {
    return null;
  }

  const {
    aviabookid,
    public_cleaning_price,
    accommodation,
    images,
    descriptions,
    location,
    features,
    categories,
  } = accommodationDetails;

  return (
    <>
      <Navbar />

      <Hero
        title='Detalles de tu alojamiento'
        subtitle='Conoce los detalles de tu alojamiento, para que puedas hacer una mejor eleccion segun tus necesidades.'
      />

      <PhotoGallery
        title={accommodation}
        subtitle={location.city}
        images={images}
        introductions={descriptions.es}
      />

      <AvailabilityCalendar
        avaibookId={aviabookid}
        cleaningPrice={public_cleaning_price}
      />

      <AmenitiesUbicacion amenities={features} location={location} />

      <Recommendations
        accommodations={accommodations}
        categoryId={categories[0].category_id}
      />

      <Footer />
    </>
  );
}
