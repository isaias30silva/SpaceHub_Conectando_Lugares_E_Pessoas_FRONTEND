"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Container from "@/components/ui/Container";

import CalendarHeader from "@/components/calendar/CalendarHeader";
import AvailabilityCalendar from "@/components/calendar/AvailabilityCalendar";
import CalendarLegend from "@/components/calendar/CalendarLegend";

import { getAvailability } from "@/services/availabilityService";

export default function CalendarPage() {
  const [blockedDays, setBlockedDays] = useState<number[]>([]);

  useEffect(() => {
    getAvailability("space-001").then((data) => {
      setBlockedDays(data.blockedDates);
    });
  }, []);

  return (
    <>
      <Navbar />

      <main className="py-10">
        <Container>
          <CalendarHeader />

          <AvailabilityCalendar blockedDays={blockedDays} />

          <CalendarLegend />
        </Container>
      </main>

      <Footer />
    </>
  );
}
