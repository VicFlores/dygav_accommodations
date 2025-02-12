import { AccommodationsListCard } from '@/app/shared';
import React from 'react';
import styles from './ListCard.module.css';

export const ListCard = () => {
  const mockAccommodations = [
    {
      id: 1,
      images: [
        'https://multimedia.dygav.es/wp-content/uploads/2024/04/355456903_292879046549428_5070979686022284662_n_feauz6-1.jpg',
        'https://multimedia.dygav.es/wp-content/uploads/2024/04/355685221_2118361961831836_6950786842258877426_n_dixbho-1.jpg',
        'https://multimedia.dygav.es/wp-content/uploads/2024/04/355646222_114738238325104_1547719684700134939_n_gqw9gi-1.jpg',
      ],
      alt: 'Apartamento con Terraza a Pasos de la Playa',
      title: 'Apartamento con Terraza a Pasos de la Playa',
      description:
        'Descubre La Mata en este luminoso apartamento en planta baja, situado a solo 20 metros de la playa. Comienza tus días a pasos del mar y ciérralos con cenas en la terraza privada bajo las estrellas. Con dos dormitorios exteriores, cocina totalmente equipada, y una ducha exterior para refrescarte después de un día de sol, este oasis de tranquilidad te ofrece todo al alcance de tu mano. Camina a tiendas, restaurantes y parajes naturales, o simplemente relájate y disfruta del ritmo relajante de la vida junto al mar. Ideal para quienes buscan olvidarse del coche y sumergirse en la vida costera.',
      pricePerNight: '60 € noche - 119 € en total',
      bedrooms: 2,
      bathrooms: 2,
      size: '120m',
      maxGuests: 4,
    },
    {
      id: 2,
      images: [
        'https://multimedia.dygav.es/wp-content/uploads/2024/04/355456903_292879046549428_5070979686022284662_n_feauz6-1.jpg',
        'https://multimedia.dygav.es/wp-content/uploads/2024/04/355685221_2118361961831836_6950786842258877426_n_dixbho-1.jpg',
        'https://multimedia.dygav.es/wp-content/uploads/2024/04/355646222_114738238325104_1547719684700134939_n_gqw9gi-1.jpg',
      ],
      alt: 'Apartamento con Terraza a Pasos de la Playa',
      title: 'Apartamento con Terraza a Pasos de la Playa',
      description:
        'Descubre La Mata en este luminoso apartamento en planta baja, situado a solo 20 metros de la playa. Comienza tus días a pasos del mar y ciérralos con cenas en la terraza privada bajo las estrellas. Con dos dormitorios exteriores, cocina totalmente equipada, y una ducha exterior para refrescarte después de un día de sol, este oasis de tranquilidad te ofrece todo al alcance de tu mano. Camina a tiendas, restaurantes y parajes naturales, o simplemente relájate y disfruta del ritmo relajante de la vida junto al mar. Ideal para quienes buscan olvidarse del coche y sumergirse en la vida costera.',
      pricePerNight: '60 € noche - 119 € en total',
      bedrooms: 2,
      bathrooms: 2,
      size: '120m',
      maxGuests: 4,
    },
    {
      id: 3,
      images: [
        'https://multimedia.dygav.es/wp-content/uploads/2024/04/355456903_292879046549428_5070979686022284662_n_feauz6-1.jpg',
        'https://multimedia.dygav.es/wp-content/uploads/2024/04/355685221_2118361961831836_6950786842258877426_n_dixbho-1.jpg',
        'https://multimedia.dygav.es/wp-content/uploads/2024/04/355646222_114738238325104_1547719684700134939_n_gqw9gi-1.jpg',
      ],
      alt: 'Apartamento con Terraza a Pasos de la Playa',
      title: 'Apartamento con Terraza a Pasos de la Playa',
      description:
        'Descubre La Mata en este luminoso apartamento en planta baja, situado a solo 20 metros de la playa. Comienza tus días a pasos del mar y ciérralos con cenas en la terraza privada bajo las estrellas. Con dos dormitorios exteriores, cocina totalmente equipada, y una ducha exterior para refrescarte después de un día de sol, este oasis de tranquilidad te ofrece todo al alcance de tu mano. Camina a tiendas, restaurantes y parajes naturales, o simplemente relájate y disfruta del ritmo relajante de la vida junto al mar. Ideal para quienes buscan olvidarse del coche y sumergirse en la vida costera.',
      pricePerNight: '60 € noche - 119 € en total',
      bedrooms: 2,
      bathrooms: 2,
      size: '120m',
      maxGuests: 4,
    },
    {
      id: 4,
      images: [
        'https://multimedia.dygav.es/wp-content/uploads/2024/04/355456903_292879046549428_5070979686022284662_n_feauz6-1.jpg',
        'https://multimedia.dygav.es/wp-content/uploads/2024/04/355685221_2118361961831836_6950786842258877426_n_dixbho-1.jpg',
        'https://multimedia.dygav.es/wp-content/uploads/2024/04/355646222_114738238325104_1547719684700134939_n_gqw9gi-1.jpg',
      ],
      alt: 'Apartamento con Terraza a Pasos de la Playa',
      title: 'Apartamento con Terraza a Pasos de la Playa',
      description:
        'Descubre La Mata en este luminoso apartamento en planta baja, situado a solo 20 metros de la playa. Comienza tus días a pasos del mar y ciérralos con cenas en la terraza privada bajo las estrellas. Con dos dormitorios exteriores, cocina totalmente equipada, y una ducha exterior para refrescarte después de un día de sol, este oasis de tranquilidad te ofrece todo al alcance de tu mano. Camina a tiendas, restaurantes y parajes naturales, o simplemente relájate y disfruta del ritmo relajante de la vida junto al mar. Ideal para quienes buscan olvidarse del coche y sumergirse en la vida costera.',
      pricePerNight: '60 € noche - 119 € en total',
      bedrooms: 2,
      bathrooms: 2,
      size: '120m',
      maxGuests: 4,
    },
    {
      id: 5,
      images: [
        'https://multimedia.dygav.es/wp-content/uploads/2024/04/355456903_292879046549428_5070979686022284662_n_feauz6-1.jpg',
        'https://multimedia.dygav.es/wp-content/uploads/2024/04/355685221_2118361961831836_6950786842258877426_n_dixbho-1.jpg',
        'https://multimedia.dygav.es/wp-content/uploads/2024/04/355646222_114738238325104_1547719684700134939_n_gqw9gi-1.jpg',
      ],
      alt: 'Apartamento con Terraza a Pasos de la Playa',
      title: 'Apartamento con Terraza a Pasos de la Playa',
      description:
        'Descubre La Mata en este luminoso apartamento en planta baja, situado a solo 20 metros de la playa. Comienza tus días a pasos del mar y ciérralos con cenas en la terraza privada bajo las estrellas. Con dos dormitorios exteriores, cocina totalmente equipada, y una ducha exterior para refrescarte después de un día de sol, este oasis de tranquilidad te ofrece todo al alcance de tu mano. Camina a tiendas, restaurantes y parajes naturales, o simplemente relájate y disfruta del ritmo relajante de la vida junto al mar. Ideal para quienes buscan olvidarse del coche y sumergirse en la vida costera.',
      pricePerNight: '60 € noche - 119 € en total',
      bedrooms: 2,
      bathrooms: 2,
      size: '120m',
      maxGuests: 4,
    },
    {
      id: 6,
      images: [
        'https://multimedia.dygav.es/wp-content/uploads/2024/04/355456903_292879046549428_5070979686022284662_n_feauz6-1.jpg',
        'https://multimedia.dygav.es/wp-content/uploads/2024/04/355685221_2118361961831836_6950786842258877426_n_dixbho-1.jpg',
        'https://multimedia.dygav.es/wp-content/uploads/2024/04/355646222_114738238325104_1547719684700134939_n_gqw9gi-1.jpg',
      ],
      alt: 'Apartamento con Terraza a Pasos de la Playa',
      title: 'Apartamento con Terraza a Pasos de la Playa',
      description:
        'Descubre La Mata en este luminoso apartamento en planta baja, situado a solo 20 metros de la playa. Comienza tus días a pasos del mar y ciérralos con cenas en la terraza privada bajo las estrellas. Con dos dormitorios exteriores, cocina totalmente equipada, y una ducha exterior para refrescarte después de un día de sol, este oasis de tranquilidad te ofrece todo al alcance de tu mano. Camina a tiendas, restaurantes y parajes naturales, o simplemente relájate y disfruta del ritmo relajante de la vida junto al mar. Ideal para quienes buscan olvidarse del coche y sumergirse en la vida costera.',
      pricePerNight: '60 € noche - 119 € en total',
      bedrooms: 2,
      bathrooms: 2,
      size: '120m',
      maxGuests: 4,
    },
    {
      id: 7,
      images: [
        'https://multimedia.dygav.es/wp-content/uploads/2024/04/355456903_292879046549428_5070979686022284662_n_feauz6-1.jpg',
        'https://multimedia.dygav.es/wp-content/uploads/2024/04/355685221_2118361961831836_6950786842258877426_n_dixbho-1.jpg',
        'https://multimedia.dygav.es/wp-content/uploads/2024/04/355646222_114738238325104_1547719684700134939_n_gqw9gi-1.jpg',
      ],
      alt: 'Apartamento con Terraza a Pasos de la Playa',
      title: 'Apartamento con Terraza a Pasos de la Playa',
      description:
        'Descubre La Mata en este luminoso apartamento en planta baja, situado a solo 20 metros de la playa. Comienza tus días a pasos del mar y ciérralos con cenas en la terraza privada bajo las estrellas. Con dos dormitorios exteriores, cocina totalmente equipada, y una ducha exterior para refrescarte después de un día de sol, este oasis de tranquilidad te ofrece todo al alcance de tu mano. Camina a tiendas, restaurantes y parajes naturales, o simplemente relájate y disfruta del ritmo relajante de la vida junto al mar. Ideal para quienes buscan olvidarse del coche y sumergirse en la vida costera.',
      pricePerNight: '60 € noche - 119 € en total',
      bedrooms: 2,
      bathrooms: 2,
      size: '120m',
      maxGuests: 4,
    },
  ];

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Descubre nuestros alojamientos turísticas
      </h1>

      <h2 className={styles.subtitle}>Viviendas turísticas en Costa Blanca</h2>

      <AccommodationsListCard accommodations={mockAccommodations} />

      <h2 className={styles.subtitle}>Viviendas turísticas en Pirineos</h2>

      <AccommodationsListCard accommodations={mockAccommodations} />
    </section>
  );
};
