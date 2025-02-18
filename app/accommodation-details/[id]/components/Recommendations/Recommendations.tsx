import React from 'react';
import { AccommodationsListCard } from '@/app/shared';
import styles from './Recommendations.module.css';
import Image from 'next/image';

export const Recommendations = () => {
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
      <h1 className={styles.title}>Te recomendamos visitar tambien</h1>

      <AccommodationsListCard accommodations={mockAccommodations} />

      <h1 className={styles.title}>Conoce mas sobre torrevieja</h1>

      <div className={styles.articlesContainer}>
        <figure className={styles.article_image}>
          <div className={styles.article_text}>
            <p className={styles.article_category}>Ocio y entretenimiento</p>

            <p className={styles.article_title}>
              Conoce la tirolina más larga de España en Pirineos Aragoneses
            </p>
          </div>
          <Image
            src='https://multimedia.dygav.es/wp-content/uploads/2024/04/13_qih5tu.png'
            alt='Torrevieja'
            fill
          />
        </figure>

        <figure className={styles.article_image}>
          <div className={styles.article_text}>
            <p className={styles.article_category}>Ocio y entretenimiento</p>

            <p className={styles.article_title}>
              Conoce la tirolina más larga de España en Pirineos Aragoneses
            </p>
          </div>
          <Image
            src='https://multimedia.dygav.es/wp-content/uploads/2024/04/13_qih5tu.png'
            alt='Torrevieja'
            fill
          />
        </figure>

        <figure className={styles.article_image}>
          <div className={styles.article_text}>
            <p className={styles.article_category}>Ocio y entretenimiento</p>

            <p className={styles.article_title}>
              Conoce la tirolina más larga de España en Pirineos Aragoneses
            </p>
          </div>
          <Image
            src='https://multimedia.dygav.es/wp-content/uploads/2024/04/13_qih5tu.png'
            alt='Torrevieja'
            fill
          />
        </figure>

        <figure className={styles.article_image}>
          <div className={styles.article_text}>
            <p className={styles.article_category}>Ocio y entretenimiento</p>

            <p className={styles.article_title}>
              Conoce la tirolina más larga de España en Pirineos Aragoneses
            </p>
          </div>
          <Image
            src='https://multimedia.dygav.es/wp-content/uploads/2024/04/13_qih5tu.png'
            alt='Torrevieja'
            fill
          />
        </figure>

        <figure className={styles.article_image}>
          <div className={styles.article_text}>
            <p className={styles.article_category}>Ocio y entretenimiento</p>

            <p className={styles.article_title}>
              Conoce la tirolina más larga de España en Pirineos Aragoneses
            </p>
          </div>
          <Image
            src='https://multimedia.dygav.es/wp-content/uploads/2024/04/13_qih5tu.png'
            alt='Torrevieja'
            fill
          />
        </figure>
      </div>
    </section>
  );
};
