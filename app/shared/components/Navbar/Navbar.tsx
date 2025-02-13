import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={styles.navigationContainer}>
      <figure>
        <Image
          src='https://res.cloudinary.com/dc69f3e0o/image/upload/v1732543341/dygav-proyect/rpndofyybjaxzrlswtls.png'
          alt='Logo de Dygav'
          fill
        />
      </figure>

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
    </nav>
  );
};
