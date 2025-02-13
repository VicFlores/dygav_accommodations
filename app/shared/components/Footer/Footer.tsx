import React from 'react';
import Image from 'next/image';
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from 'react-icons/io5';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer>
      <div className={styles.platforms}>
        <h3 className={styles.title}>
          Descubre tu refugio perfecto a solo un clic de distancia.
        </h3>

        <div className={styles.platforms_icons}>
          <figure className={styles.image_container}>
            <Image
              src='https://multimedia.dygav.es/wp-content/uploads/2024/04/Booking-Logo_osnjdx.png'
              alt='Booking.com'
              fill
            />
          </figure>
          <figure className={styles.image_container}>
            <Image
              src='https://multimedia.dygav.es/wp-content/uploads/2024/04/ABNB_ugauy3.png'
              alt='Airbnb'
              fill
            />
          </figure>
          <figure className={styles.image_container}>
            <Image
              src='https://multimedia.dygav.es/wp-content/uploads/2024/04/0x0_j8hysr.png'
              alt='Rentalia'
              fill
            />
          </figure>
          <figure className={styles.image_container}>
            <Image
              src='https://multimedia.dygav.es/wp-content/uploads/2024/04/Comment-contacter-Vrbo_jkhslp.png'
              alt='Vrbo'
              fill
            />
          </figure>
          <figure className={styles.image_container}>
            <Image
              src='https://multimedia.dygav.es/wp-content/uploads/2024/04/Google_2015_logo.svg_sojqzx-1.png'
              alt='Google'
              fill
            />
          </figure>
          <figure className={styles.image_container}>
            <Image
              src='https://multimedia.dygav.es/wp-content/uploads/2024/04/EXPEDIA-LOGO-1_ko2beq-1.png'
              alt='Expedia'
              fill
            />
          </figure>
        </div>
      </div>

      <div className={styles.information_container}>
        <div>
          <figure className={styles.dygav_icon}>
            <Image
              src='https://res.cloudinary.com/dc69f3e0o/image/upload/v1732543341/dygav-proyect/rpndofyybjaxzrlswtls.png'
              alt='Logo de Dygav'
              fill
            />
          </figure>

          <div className={styles.social_media}>
            <IoLogoInstagram />

            <IoLogoLinkedin />

            <IoLogoWhatsapp />
          </div>

          <p className={styles.infoLegend}>
            Somos una empresa con amplia experiencia <br /> en el sector
            inmobiliario y gestión de patrimonio.
          </p>

          <p className={styles.infoLegend}>
            © 2025 Dygav. Todos los derechos reservados.
          </p>
        </div>

        <div className={styles.quickLinks}>
          <div>
            <h5>Enlaces de utiles</h5>

            <ul>
              <li>Inciar sesión</li>
              <li>Registrarse</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h5>Políticas</h5>

            <ul>
              <li>Privacidad</li>
              <li>Cookies</li>
              <li>Formularios</li>
              <li>Aviso Legal</li>
            </ul>
          </div>

          <div>
            <h5>Contacto</h5>

            <p>
              Avenida Gregorio <br /> Marañón 7, 7 29
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
