import { Metadata } from 'next';
import React from 'react';
import { Navbar } from '../shared';
import { Hero, ListCard } from './components';

export const metadata: Metadata = {
  title: 'Accomodations',
  description: 'Accomodations for the wedding',
  keywords: 'accomodations, wedding',
};

const AccommodationsPage = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <ListCard />
    </>
  );
};

export default AccommodationsPage;
