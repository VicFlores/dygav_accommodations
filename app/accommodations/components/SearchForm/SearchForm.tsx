import React from 'react';
import { PiCity } from 'react-icons/pi';
import { PiCalendarDuotone } from 'react-icons/pi';
import { PiUsersThree } from 'react-icons/pi';
import { CiSearch } from 'react-icons/ci';
import styles from './SearchForm.module.css';

export const SearchForm = () => {
  return (
    <form className={styles.search_form}>
      <div className={styles.input_group}>
        <PiCity className={styles.input_group_icon} />

        <div className={styles.input_container}>
          <select id='city' defaultValue=''>
            <option value='' disabled>
              Cuidad
            </option>
            <option value='ciudad1'>Ciudad 1</option>
            <option value='ciudad2'>Ciudad 2</option>
            <option value='ciudad3'>Ciudad 3</option>
          </select>
          <label htmlFor='city'>Escoge tu cuidad</label>
        </div>
      </div>

      <div className={styles.input_group}>
        <PiCalendarDuotone className={styles.input_group_icon} />

        <div className={styles.input_container}>
          <input id='date' type='date' />
          <label htmlFor='date'>Fecha de reserva</label>
        </div>
      </div>

      <div className={styles.input_group}>
        <PiUsersThree className={styles.input_group_icon} />

        <div className={styles.input_container}>
          <input
            id='travelers'
            type='number'
            placeholder='Número de viajeros'
          />
          <label htmlFor='travelers'>Huespedes</label>
        </div>
      </div>

      <button className={styles.search_button}>
        <CiSearch className={styles.search_button_icon} />
        Buscar
      </button>
    </form>
  );
};
