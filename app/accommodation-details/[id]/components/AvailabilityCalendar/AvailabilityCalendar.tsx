'use client';

import React, { useState, useEffect } from 'react';
import {
  PiCalendarDuotone,
  PiHouseLine,
  PiTrash,
  PiCreditCard,
} from 'react-icons/pi';
import { PiCurrencyEur } from 'react-icons/pi';
import styles from './AvailabilityCalendar.module.css';

const generateDayNames = () => {
  const days = [];
  for (let i = 0; i < 7; i++) {
    days.push(
      new Date(2025, 0, i + 4).toLocaleString('default', { weekday: 'short' })
    );
  }
  return days;
};

const generateDates = (year: number, month: number) => {
  const dates = [];
  const firstDay = new Date(year, month, 1).getDay();
  const prevMonth = month === 0 ? 11 : month - 1;
  const prevMonthYear = month === 0 ? year - 1 : year;
  const prevMonthDays = new Date(prevMonthYear, prevMonth + 1, 0).getDate();

  for (let i = firstDay - 1; i >= 0; i--) {
    dates.push(new Date(prevMonthYear, prevMonth, prevMonthDays - i));
  }

  const date = new Date(year, month, 1);
  while (date.getMonth() === month) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return dates;
};

const getMonthName = (month: number) => {
  return new Date(2025, month).toLocaleString('default', { month: 'long' });
};

const reservations = [
  { startDate: new Date('2025-02-01'), endDate: new Date('2025-02-10') },
  { startDate: new Date('2025-02-15'), endDate: new Date('2025-02-20') },
  { startDate: new Date('2025-02-25'), endDate: new Date('2025-02-28') },
];

const normalizeDate = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

const isReserved = (date: Date) => {
  const normalizedDate = normalizeDate(date);
  return reservations.some(
    (reservation) =>
      normalizedDate >= normalizeDate(reservation.startDate) &&
      normalizedDate <= normalizeDate(reservation.endDate)
  );
};

const isRangeReserved = (start: Date, end: Date) => {
  return reservations.some(
    (reservation) =>
      start <= reservation.endDate && end >= reservation.startDate
  );
};

export const AvailabilityCalendar = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [hoverDate, setHoverDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [dayNames, setDayNames] = useState<string[]>([]);
  const [monthNames, setMonthNames] = useState<string[]>([]);

  useEffect(() => {
    setDayNames(generateDayNames());
    const months = [];
    for (let i = 0; i < 12; i++) {
      months.push(getMonthName(i));
    }
    setMonthNames(months);
  }, []);

  const handleDateClick = (date: Date) => {
    if (isReserved(date)) return;
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
      setErrorMessage(null);
    } else if (startDate && !endDate && date > startDate) {
      if (isRangeReserved(startDate, date)) {
        setErrorMessage('Selecciona un rango de fechas disponible');
        return;
      }
      setEndDate(date);
      setErrorMessage(null);
    }
  };

  const isInRange = (date: Date) => {
    if (startDate && endDate) {
      return date >= startDate && date <= endDate;
    } else if (startDate && hoverDate) {
      return date >= startDate && date <= hoverDate;
    }
    return false;
  };

  const isFirstInRange = (date: Date) => {
    return startDate && date.getTime() === startDate.getTime();
  };

  const isLastInRange = (date: Date) => {
    return endDate && date.getTime() === endDate.getTime();
  };

  const isFirstReserved = (date: Date) => {
    const normalizedDate = normalizeDate(date);
    return reservations.some(
      (reservation) =>
        normalizeDate(reservation.startDate).getTime() ===
        normalizedDate.getTime()
    );
  };

  const isLastReserved = (date: Date) => {
    const normalizedDate = normalizeDate(date);
    return reservations.some(
      (reservation) =>
        normalizeDate(reservation.endDate).getTime() ===
        normalizedDate.getTime()
    );
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleCurrentMonth = () => {
    const today = new Date();
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
  };

  const handleClearDates = () => {
    setStartDate(null);
    setEndDate(null);
    setHoverDate(null);
    setErrorMessage(null);
  };

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
                ).map((date, index) => (
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
                    }`}
                    onClick={() => date && handleDateClick(date)}
                    onMouseEnter={() => date && setHoverDate(date)}
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
