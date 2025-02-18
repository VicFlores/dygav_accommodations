'use client';

import React, { useState } from 'react';
import { MdOutlineCheckCircleOutline } from 'react-icons/md';
import styles from './AmenitiesUbicacion.module.css';

export const AmenitiesUbicacion = () => {
  const mockAmenities = [
    {
      id: 1,
      name: 'Accesibilidad',
      items: [
        { id: 1, name: 'Ascensor' },
        { id: 2, name: 'Estacionamiento' },
        { id: 3, name: 'Rampa' },
        { id: 4, name: 'Acceso a la playa' },
        { id: 5, name: 'Acceso a la piscina' },
        { id: 6, name: 'Acceso a la montaña' },
        { id: 7, name: 'Acceso a la estación de tren o metro' },
      ],
    },
    {
      id: 2,
      name: 'Exterior',
      items: [
        { id: 1, name: 'Balcón' },
        { id: 2, name: 'Patio' },
        { id: 3, name: 'Terraza' },
      ],
    },
    {
      id: 3,
      name: 'Baño',
      items: [
        { id: 1, name: 'Secador de pelo' },
        { id: 2, name: 'Toallas' },
        { id: 3, name: 'Jabón' },
      ],
    },
    {
      id: 4,
      name: 'Cocina',
      items: [
        { id: 1, name: 'Cocina' },
        { id: 2, name: 'Microondas' },
        { id: 3, name: 'Horno' },
      ],
    },
    {
      id: 5,
      name: 'Dormitorio',
      items: [
        { id: 1, name: 'Cama' },
        { id: 2, name: 'Ropa de cama' },
        { id: 3, name: 'Armario' },
      ],
    },
    {
      id: 6,
      name: 'General',
      items: [
        { id: 1, name: 'Aire acondicionado' },
        { id: 2, name: 'Calefacción' },
        { id: 3, name: 'Internet' },
      ],
    },
    {
      id: 7,
      name: 'Dormitorio',
      items: [
        { id: 1, name: 'Cama' },
        { id: 2, name: 'Ropa de cama' },
        { id: 3, name: 'Armario' },
      ],
    },
    {
      id: 8,
      name: 'Alojamiento',
      items: [
        { id: 1, name: 'TV' },
        { id: 2, name: 'Cable' },
        { id: 3, name: 'Wifi' },
      ],
    },
    {
      id: 9,
      name: 'Entretenimiento',
      items: [
        { id: 1, name: 'Juegos de mesa' },
        { id: 2, name: 'Libros' },
        { id: 3, name: 'TV' },
      ],
    },
    {
      id: 10,
      name: 'Seguridad',
      items: [
        { id: 1, name: 'Botiquín' },
        { id: 2, name: 'Detector de humo' },
        { id: 3, name: 'Extintor' },
      ],
    },
    {
      id: 11,
      name: 'Servicios',
      items: [
        { id: 1, name: 'Lavadora' },
        { id: 2, name: 'Secadora' },
        { id: 3, name: 'Plancha' },
      ],
    },
    {
      id: 12,
      name: 'Vistas',
      items: [
        { id: 1, name: 'Vistas al mar' },
        { id: 2, name: 'Vistas a la montaña' },
        { id: 3, name: 'Vistas a la ciudad' },
      ],
    },
    {
      id: 13,
      name: 'Otros',
      items: [
        { id: 1, name: 'Admite mascotas' },
        { id: 2, name: 'Prohibido fumar' },
        { id: 3, name: 'Fiestas o eventos permitidos' },
      ],
    },
    {
      id: 14,
      name: 'Niños',
      items: [
        { id: 1, name: 'Cuna' },
        { id: 2, name: 'Trona' },
        { id: 3, name: 'Juguetes' },
      ],
    },
    {
      id: 15,
      name: 'Accesorios',
      items: [
        { id: 1, name: 'Toallas' },
        { id: 2, name: 'Sábanas' },
        { id: 3, name: 'Almohadas' },
      ],
    },
    {
      id: 16,
      name: 'Calefacción',
      items: [
        { id: 1, name: 'Calefacción' },
        { id: 2, name: 'Estufa' },
        { id: 3, name: 'Chimenea' },
      ],
    },
  ];

  const [selectedSection, setSelectedSection] = useState<number>(
    mockAmenities[0].id
  );

  const handleSectionClick = (id: number) => {
    setSelectedSection(id);
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Comodidades</h1>

      <ul className={styles.amenties}>
        {mockAmenities.map((section) => (
          <li key={section.id} onClick={() => handleSectionClick(section.id)}>
            {section.name}
          </li>
        ))}
      </ul>

      {selectedSection !== null && (
        <ul className={styles.amenities_service} key={selectedSection}>
          {mockAmenities
            .find((section) => section.id === selectedSection)
            ?.items.map((item) => (
              <li key={item.id} className={styles.amenity_item}>
                <MdOutlineCheckCircleOutline className={styles.icon} />{' '}
                {item.name}
              </li>
            ))}
        </ul>
      )}

      <h1 className={styles.title}>Ubicacion del alojamiento</h1>
    </section>
  );
};
