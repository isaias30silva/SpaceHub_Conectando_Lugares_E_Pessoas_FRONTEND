"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="
      w-full
      border-b
      bg-white
    "
    >
      <nav
        className="
        max-w-7xl
        mx-auto

        flex
        items-center
        justify-between

        px-4
        sm:px-6
        lg:px-8

        py-4
      "
      >
        {/* Logo */}

        <div
          className="
          flex
          items-center
          gap-2
        "
        >
          <div
            className="
            flex
            items-center
            justify-center

            h-10
            w-10

            rounded-full

            bg-slate-900
            text-white

            font-bold
          "
          >
            S
          </div>

          <span
            className="
            text-xl
            font-bold
            text-slate-900
          "
          >
            SpaceHub
          </span>
        </div>

        {/* Links Desktop */}

        <div
          className="
          hidden
          lg:flex

          items-center
          gap-8
        "
        >
          <a
            href="/spaces"
            className="
              text-slate-700
              hover:text-emerald-600
              transition
            "
          >
            Buscar espaços
          </a>
        </div>

        {/* Ações Desktop */}

        <div
          className="
          hidden
          lg:flex

          items-center
          gap-4
        "
        >
          <button
            className="
              text-slate-700
              hover:text-emerald-600
            "
          >
            Entrar
          </button>

          <button
            className="
              rounded-lg

              bg-emerald-600

              px-5
              py-2

              text-white

              hover:bg-emerald-700

              transition
            "
          >
            Criar conta
          </button>
        </div>

        {/* Botão Mobile */}

        <button
          className="
            lg:hidden

            text-slate-900
          "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Menu Mobile */}

      {menuOpen && (
        <div
          className="
              lg:hidden

              border-t

              px-4
              sm:px-6

              py-6

              space-y-4

              bg-white
            "
        >
          <a
            href="/spaces"
            className="
                block
                text-slate-700
              "
          >
            Buscar espaços
          </a>

          <button
            className="
                block
                text-slate-700
              "
          >
            Entrar
          </button>

          <button
            className="
                w-full

                rounded-lg

                bg-emerald-600

                py-3

                text-white
              "
          >
            Criar conta
          </button>
        </div>
      )}
    </header>
  );
}
