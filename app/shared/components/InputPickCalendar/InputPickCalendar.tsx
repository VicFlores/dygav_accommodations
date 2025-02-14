'use client';

import React, { FC, useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward, IoIosClose } from 'react-icons/io';
import styles from './InputPickCalendar.module.css';

interface CustomCalendarProps {
  onDateRangeSelect: (startDate: string, endDate: string) => void;
  onClose: () => void;
}

export const InputPickCalendar: FC<CustomCalendarProps> = ({
  onDateRangeSelect,
  onClose,
}) => {
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const handleDateClick = (date: string) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else {
      setEndDate(date);
      onDateRangeSelect(startDate, date);
    }
  };

  const handlePrevMonth = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const renderCalendar = () => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1).map(
      (day) => {
        const date = `${currentYear}-${(currentMonth + 1)
          .toString()
          .padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        return (
          <div
            key={date}
            className={`${styles.day} ${
              date === startDate || date === endDate ? styles.selected : ''
            }`}
            onClick={() => handleDateClick(date)}
          >
            {day}
          </div>
        );
      }
    );

    const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => (
      <div key={`empty-${i}`} className={styles.day}></div>
    ));

    return (
      <div className={styles.calendar}>
        <div className={styles.dayName}>Sun</div>
        <div className={styles.dayName}>Mon</div>
        <div className={styles.dayName}>Tue</div>
        <div className={styles.dayName}>Wed</div>
        <div className={styles.dayName}>Thu</div>
        <div className={styles.dayName}>Fri</div>
        <div className={styles.dayName}>Sat</div>
        {emptyDays}
        {days}
      </div>
    );
  };

  const monthYearString = new Date(currentYear, currentMonth).toLocaleString(
    'default',
    {
      month: 'long',
      year: 'numeric',
    }
  );

  return (
    <div className={`${styles.calendarContainer} ${show ? styles.show : ''}`}>
      <div className={styles.header}>
        <span>{monthYearString}</span>

        <div className={styles.arrowContainer}>
          <button onClick={handlePrevMonth}>
            <IoIosArrowBack />
          </button>

          <button onClick={handleNextMonth}>
            <IoIosArrowForward />
          </button>

          <button onClick={onClose} className={styles.closeButton}>
            <IoIosClose />
          </button>
        </div>
      </div>
      {renderCalendar()}
    </div>
  );
};
