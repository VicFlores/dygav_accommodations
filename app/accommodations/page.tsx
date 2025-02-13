import { Metadata } from 'next';
import React from 'react';
import { Footer, Hero, Navbar } from '../shared';
import { ListCard } from './components';
import { SearchForm } from './components/SearchForm/SearchForm';

export const metadata: Metadata = {
  title: 'Accomodations',
  description: 'Accomodations for the wedding',
  keywords: 'accomodations, wedding',
};

const AccommodationsPage = () => {
  return (
    <>
      <Navbar />

      <Hero
        title='¿A Donde Te Apetece Ir?'
        subtitle='Estás a unos clics de tu nuevo lugar favorito'
      >
        <SearchForm />
      </Hero>

      <ListCard />

      <Footer />
    </>
  );
};

export default AccommodationsPage;
