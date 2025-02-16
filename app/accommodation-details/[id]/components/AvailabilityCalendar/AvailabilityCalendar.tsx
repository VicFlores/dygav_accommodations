'use client';

import React from 'react';
import {
  PiCalendarDuotone,
  PiHouseLine,
  PiTrash,
  PiCreditCard,
} from 'react-icons/pi';
import { PiCurrencyEur } from 'react-icons/pi';
import styles from './AvailabilityCalendar.module.css';
import { useAvailabilityCalendar } from '../../hooks';

export const AvailabilityCalendar = () => {
  const {
    startDate,
    endDate,
    setHoverDate,
    currentMonth,
    currentYear,
    errorMessage,
    dayNames,
    monthNames,
    generateDates,
    handleDateClick,
    isInRange,
    isFirstInRange,
    isLastInRange,
    isReserved,
    isFirstReserved,
    isLastReserved,
    handlePrevMonth,
    handleNextMonth,
    handleCurrentMonth,
    handleClearDates,
  } = useAvailabilityCalendar();

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.navigationButtons}>
        <button onClick={handlePrevMonth} className={styles.navButton}>
          Anterior
        </button>

        <button onClick={handleNextMonth} className={styles.navButton}>
          Próximo
        </button>

        <button onClick={handleCurrentMonth} className={styles.navButton}>
          Mes Atual
        </button>

        <button onClick={handleClearDates} className={styles.navButton}>
          Limpiar
        </button>
      </div>

      {errorMessage && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}

      <div className={styles.calendarWrapper}>
        {[0, 1].map((monthOffset) => {
          const monthDate = new Date(currentYear, currentMonth + monthOffset);
          return (
            <div key={monthOffset} className={styles.calendarMonth}>
              <div className={styles.monthHeader}>
                {monthNames[monthDate.getMonth()]} {monthDate.getFullYear()}
              </div>

              <div className={styles.calendarGrid}>
                {dayNames.map((day, index) => (
                  <div key={index} className={styles.dayName}>
                    {day}
                  </div>
                ))}
                {generateDates(
                  monthDate.getFullYear(),
                  monthDate.getMonth()
                ).map(({ date, isDisabled }, index) => (
                  <div
                    key={index}
                    className={`${styles.calendarCell} ${
                      date && isInRange(date) ? styles.inRange : ''
                    } ${
                      date && isFirstInRange(date) ? styles.firstInRange : ''
                    } ${
                      date && isLastInRange(date) ? styles.lastInRange : ''
                    } ${date && isReserved(date) ? styles.reserved : ''} ${
                      date && isFirstReserved(date) ? styles.firstReserved : ''
                    } ${
                      date && isLastReserved(date) ? styles.lastReserved : ''
                    } ${isDisabled ? styles.disabled : ''}`}
                    onClick={() => !isDisabled && date && handleDateClick(date)}
                    onMouseEnter={() =>
                      !isDisabled && date && setHoverDate(date)
                    }
                  >
                    {date ? date.getDate() : ''}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.rates}>
        <div className={styles.rate_item}>
          <PiCalendarDuotone />

          <div>
            <h3>Check-In</h3>

            <p>
              {startDate ? startDate.toDateString() : 'Fecha no seleccionada'}
            </p>
          </div>
        </div>

        <div className={styles.rate_item}>
          <PiCalendarDuotone />

          <div>
            <h3>Check-Out</h3>

            <p>{endDate ? endDate.toDateString() : 'Fecha no seleccionada'}</p>
          </div>
        </div>

        <div className={styles.rate_item}>
          <PiHouseLine />

          <div>
            <h3>Estancia</h3>

            <p>45.56Є</p>
          </div>
        </div>

        <div className={styles.rate_item}>
          <PiTrash />

          <div>
            <h3>Limpieza</h3>

            <p>45.56Є</p>
          </div>
        </div>

        <div className={styles.rate_item}>
          <PiCurrencyEur />

          <div>
            <h3>Total a pagar</h3>

            <p>45.56Є</p>
          </div>
        </div>

        <button>
          <PiCreditCard />
          <span>Pagar alojamiento</span>
        </button>
      </div>
    </div>
  );
};
