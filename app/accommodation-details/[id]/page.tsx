import React from 'react';
import { Metadata } from 'next';
import {
  AmenitiesUbicacion,
  AvailabilityCalendar,
  PhotoGallery,
  Recommendations,
} from './components';
import { Footer, Hero, Navbar } from '@/app/shared';

export const metadata: Metadata = {
  title: 'Accommodation Details',
  description: 'Accommodation Details Page',
  keywords: 'Accommodation, Details',
};

const AccommodationDDetailPage = () => {
  return (
    <>
      <Navbar />

      <Hero
        title='Detalles de tu alojamiento'
        subtitle='Conoce los detalles de tu alojamiento, para que puedas hacer una mejor eleccion segun tus necesidades.'
      />

      <PhotoGallery />

      <AvailabilityCalendar />

      <AmenitiesUbicacion />

      <Recommendations />

      <Footer />
    </>
  );
};

export default AccommodationDDetailPage;
