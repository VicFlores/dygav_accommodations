'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import Link from 'next/link';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navigationContainer}>
      <figure>
        <Image
          src='https://res.cloudinary.com/dc69f3e0o/image/upload/v1732543341/dygav-proyect/rpndofyybjaxzrlswtls.png'
          alt='Logo de Dygav'
          fill
        />
      </figure>

      <div
        data-testid='burger-menu'
        className={`${styles.burgerMenu} ${isMenuOpen ? styles.open : ''}`}
        onClick={toggleMenu}
      >
        <GiHamburgerMenu
          data-testid='burger-icon'
          className={styles.burgerMenu_icon}
        />
      </div>

      <div className={`${styles.sidebar} ${isMenuOpen ? styles.open : ''}`}>
        {isMenuOpen && (
          <>
            <IoMdClose
              data-testid='close-icon'
              className={styles.closeButton}
              onClick={toggleMenu}
            />
            <figure className={styles.logoMobile}>
              <Image
                src='https://dygav-storage.nyc3.cdn.digitaloceanspaces.com/dygav_official/dygav_white.svg'
                alt='Logo de Dygav'
                fill
              />
            </figure>
          </>
        )}

        <ul>
          <li>
            <Link href='#'>Viaja</Link>
          </li>
          <li>
            <Link href='#'>Alojamientos</Link>
          </li>
          <li>
            <Link href='#'>Propietarios</Link>
          </li>
          <li>
            <Link href='#'>Licencias VUT</Link>
          </li>
          <li>
            <Link href='#'>Crear cuenta</Link>
          </li>
          <li>
            <Link href='#'>Iniciar sesión</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
