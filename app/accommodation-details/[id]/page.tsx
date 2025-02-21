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

export default async function AccommodationDDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const accommodations = await getAccommodations();
  const accommodationDetails = await getAccommodation(id);

  if (!accommodationDetails) {
    return null;
  }

  const { accommodation, images, introductions, location, features } =
    accommodationDetails;

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
        introductions={introductions.es}
      />

      <AvailabilityCalendar />

      <AmenitiesUbicacion amenities={features} location={location} />

      <Recommendations accommodations={accommodations} categoryId={3} />

      <Footer />
    </>
  );
}
