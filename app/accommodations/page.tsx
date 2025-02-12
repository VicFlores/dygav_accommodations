import { Metadata } from 'next';
import React from 'react';
import { Navbar } from '../shared';
import { Hero } from './components';

export const metadata: Metadata = {
  title: 'Accomodations',
  description: 'Accomodations for the wedding',
  keywords: 'accomodations, wedding',
};

const AccommodationsPage = () => {
  return (
    <div>
      <Navbar />

      <Hero />
    </div>
  );
};

export default AccommodationsPage;
