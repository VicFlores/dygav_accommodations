'use client';

import React, { FC, useEffect, useState } from 'react';
import {
  PiCalendarDuotone,
  PiHouseLine,
  PiTrash,
  PiCreditCard,
} from 'react-icons/pi';
import { PiCurrencyEur } from 'react-icons/pi';
import styles from './AvailabilityCalendar.module.css';
import { useAvailabilityCalendar } from '../../hooks';
import { avaibookApi } from '@/app/config';
import { formatDate } from '@/app/shared/utils';
import { Reservation } from '../../interfaces';

interface AvailabilityCalendarProps {
  avaibookId: string;
  cleaningPrice: number;
}

interface StayPriceData {
  total: number;
}

export const AvailabilityCalendar: FC<AvailabilityCalendarProps> = ({
  avaibookId,
  cleaningPrice,
}) => {
  const [calendarByAccommodation, setCalendarByAccommodation] = useState<
    Reservation[]
  >([]);
  const [stayPrice, setStayPrice] = useState<StayPriceData[]>([]);
  const {
    startDate,
    endDate,
    setHoverDate,
    currentMonth,
    currentYear,
    errorMessage,
    setErrorMessage,
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
  } = useAvailabilityCalendar(calendarByAccommodation);

  useEffect(() => {
    const getCalendarByAccommodation = async () => {
      const res = await avaibookApi.get(
        `/accommodations/${avaibookId}/calendar/`
      );

      setCalendarByAccommodation(res.data);
    };

    getCalendarByAccommodation();
  }, [avaibookId]);

  useEffect(() => {
    if (startDate && endDate) {
      const getStayPrice = async () => {
        const startDateFormatted = formatDate(startDate);
        const endDateFormatted = formatDate(endDate);

        const res = await avaibookApi.get(
          `/accommodations/${avaibookId}/booking-price/?checkinDate=${startDateFormatted}&checkoutDate=${endDateFormatted}`
        );

        const stayPriceData = res.data;

        if (stayPriceData[0].status === 'AVAILABLE') {
          setStayPrice(stayPriceData);
        } else if (stayPriceData[0].status === 'RESTRICTED') {
          const restriction = stayPriceData[0].restrictions.minNights;
          const restrictionStartDate = new Date(restriction.f_ini);
          const restrictionEndDate = new Date(restriction.f_fin);
          const selectedNights =
            (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);

          if (
            startDate >= restrictionStartDate &&
            endDate <= restrictionEndDate &&
            selectedNights >= restriction.min_nights
          ) {
            setStayPrice(stayPriceData);
          } else {
            setStayPrice([]);
            setErrorMessage(
              `Estancia mínima de ${restriction.min_noches} noches`
            );
          }
        } else {
          setStayPrice([]);
        }
      };

      getStayPrice();
    }
  }, [startDate, endDate, avaibookId, setErrorMessage]);

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

            <p>{startDate ? startDate.toDateString() : 'Fecha de entrada'}</p>
          </div>
        </div>

        <div className={styles.rate_item}>
          <PiCalendarDuotone />

          <div>
            <h3>Check-Out</h3>

            <p>{endDate ? endDate.toDateString() : 'Fecha de salida'}</p>
          </div>
        </div>

        <div className={styles.rate_item}>
          <PiHouseLine />

          <div>
            <h3>Estancia</h3>

            {stayPrice.length > 0 ? <p>{stayPrice[0].total}Є</p> : <p>0Є</p>}
          </div>
        </div>

        <div className={styles.rate_item}>
          <PiTrash />

          <div>
            <h3>Limpieza</h3>

            <p>{cleaningPrice}Є</p>
          </div>
        </div>

        <div className={styles.rate_item}>
          <PiCurrencyEur />
          <div>
            <h3>Total a pagar</h3>

            {stayPrice.length > 0 ? (
              <p>{stayPrice[0].total + cleaningPrice}Є</p>
            ) : (
              <p>0Є</p>
            )}
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
