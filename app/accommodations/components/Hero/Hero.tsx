import React from 'react';
import { PiCity } from 'react-icons/pi';
import { PiCalendarDuotone } from 'react-icons/pi';
import { PiUsersThree } from 'react-icons/pi';
import { CiSearch } from 'react-icons/ci';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>¿A Donde Te Apetece Ir?</h1>

      <p className={styles.subtitle}>
        Estás a unos clics de tu nuevo lugar favorito
      </p>

      <form className={styles.search_form}>
        <div className={styles.input_group}>
          <PiCity className={styles.input_group_icon} />

          <div className={styles.input_container}>
            <select defaultValue=''>
              <option value='' disabled>
                Escoge tu cuidad
              </option>
              <option value='ciudad1'>Ciudad 1</option>
              <option value='ciudad2'>Ciudad 2</option>
              <option value='ciudad3'>Ciudad 3</option>
            </select>
            <label>Escoge tu cuidad</label>
          </div>
        </div>

        <div className={styles.input_group}>
          <PiCalendarDuotone className={styles.input_group_icon} />

          <div className={styles.input_container}>
            <input type='date' />
            <label>Fecha de reserva</label>
          </div>
        </div>

        <div className={styles.input_group}>
          <PiUsersThree className={styles.input_group_icon} />

          <div className={styles.input_container}>
            <input type='number' placeholder='Número de viajeros' />
            <label>Huespedes</label>
          </div>
        </div>

        <button className={styles.search_button}>
          <CiSearch className={styles.search_button_icon} />
          Buscar
        </button>
      </form>
    </section>
  );
};
