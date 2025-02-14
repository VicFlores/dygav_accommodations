'use client';

import React, { FC, useState } from 'react';
import styles from './InputPickCalendar.module.css';

interface CustomCalendarProps {
  onDateRangeSelect: (startDate: string, endDate: string) => void;
}

export const InputPickCalendar: FC<CustomCalendarProps> = ({
  onDateRangeSelect,
}) => {
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

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
    <div className={styles.calendarContainer}>
      <div className={styles.header}>
        <button onClick={handlePrevMonth}>&lt;</button>
        <span>{monthYearString}</span>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      {renderCalendar()}
    </div>
  );
};
