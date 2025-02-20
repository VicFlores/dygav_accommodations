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
        {isMenuOpen ? (
          <IoMdClose
            data-testid='close-icon'
            className={styles.burgerMenu_icon}
          />
        ) : (
          <GiHamburgerMenu
            data-testid='burger-icon'
            className={styles.burgerMenu_icon}
          />
        )}
      </div>

      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ''}`}>
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
    </nav>
  );
};
