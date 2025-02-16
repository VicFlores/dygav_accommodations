import { useState, useEffect } from 'react';

const generateDayNames = () => {
  const days = [];
  const baseDate = new Date(2025, 0, 5); // Start from Sunday
  for (let i = 0; i < 7; i++) {
    days.push(
      new Date(baseDate.getTime() + i * 24 * 60 * 60 * 1000).toLocaleString(
        'default',
        { weekday: 'short' }
      )
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
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize today's date to remove time part

  for (let i = firstDay - 1; i >= 0; i--) {
    dates.push(new Date(prevMonthYear, prevMonth, prevMonthDays - i));
  }

  const date = new Date(year, month, 1);
  while (date.getMonth() === month) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return dates.map((date) => ({
    date,
    isDisabled: date < today,
  }));
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

export const useAvailabilityCalendar = () => {
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
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today's date to remove time part

    if (date < today) {
      setErrorMessage('No puedes seleccionar una fecha anterior a la actual');
      return;
    }

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

  return {
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
  };
};
