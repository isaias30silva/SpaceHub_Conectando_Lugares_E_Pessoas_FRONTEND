"use client";

import { useState } from "react";

import { hasBlockedDateBetween } from "@/utils/calendar";

const days = Array.from({ length: 31 }, (_, index) => index + 1);

interface AvailabilityCalendarProps {
  blockedDays: number[];
}

export default function AvailabilityCalendar({
  blockedDays,
}: AvailabilityCalendarProps) {
  const [startDate, setStartDate] = useState<number | null>(null);

  const [endDate, setEndDate] = useState<number | null>(null);

  function selectDay(day: number) {
    if (blockedDays.includes(day)) {
      return;
    }

    if (!startDate) {
      setStartDate(day);

      return;
    }

    if (!endDate) {
      const firstDate = Math.min(startDate, day);

      const lastDate = Math.max(startDate, day);

      const invalidPeriod = hasBlockedDateBetween(
        firstDate,
        lastDate,
        blockedDays,
      );

      if (invalidPeriod) {
        alert("Este período possui datas indisponíveis.");

        return;
      }

      setStartDate(firstDate);

      setEndDate(lastDate);

      return;
    }

    setStartDate(day);

    setEndDate(null);
  }

  function isInRange(day: number) {
    if (!startDate || !endDate) {
      return false;
    }

    return day > startDate && day < endDate;
  }

  function getDayClass(day: number) {
    const blocked = blockedDays.includes(day);

    if (blocked) {
      return `
bg-slate-300
text-slate-500
cursor-not-allowed
`;
    }

    if (day === startDate || day === endDate) {
      return `
bg-emerald-600
text-white
font-semibold
`;
    }

    if (isInRange(day)) {
      return `
bg-emerald-100
text-emerald-700
`;
    }

    return `
hover:bg-emerald-50
`;
  }

  return (
    <div
      className="
border
rounded-xl
p-6
"
    >
      <h2
        className="
font-semibold
mb-4
"
      >
        Julho 2026
      </h2>

      <div
        className="
grid
grid-cols-7
gap-2
"
      >
        {days.map((day) => {
          const blocked = blockedDays.includes(day);

          return (
            <button
              key={day}
              disabled={blocked}
              aria-label={`Dia ${day}`}
              onClick={() => selectDay(day)}
              className={`
    h-10
    rounded-lg
    border
    transition
    ${getDayClass(day)}
  `}
            >
              {day}
            </button>
          );
        })}
      </div>

      <div
        className="
mt-5
text-sm
"
      >
        <p>Entrada: {startDate ?? "-"}</p>

        <p>Saída: {endDate ?? "-"}</p>
      </div>
    </div>
  );
}
