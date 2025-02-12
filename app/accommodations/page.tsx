import { Metadata } from 'next';
import React from 'react';
import { Navbar } from '../shared';

export const metadata: Metadata = {
  title: 'Accomodations',
  description: 'Accomodations for the wedding',
  keywords: 'accomodations, wedding',
};

const AccommodationsPage = () => {
  return (
    <div>
      <Navbar />

      <h1>AccommodationsPage</h1>
    </div>
  );
};

export default AccommodationsPage;
