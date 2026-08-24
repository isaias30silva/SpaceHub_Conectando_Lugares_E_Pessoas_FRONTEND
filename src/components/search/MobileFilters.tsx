"use client";

import { useState } from "react";

import Filters from "./Filters";

export default function MobileFilters() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          w-full
          border
          rounded-lg
          py-3
          font-medium
        "
      >
        {isOpen ? "Fechar filtros" : "Abrir filtros"}
      </button>

      {isOpen && (
        <div className="mt-4">
          <Filters />
        </div>
      )}
    </div>
  );
}
