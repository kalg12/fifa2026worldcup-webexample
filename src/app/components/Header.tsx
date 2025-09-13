"use client";
import React from "react";
import { cn } from "../lib/helpers";

/**
 * Top navigation bar
 * - Sticky, high contrast against brand purple background
 * - Primary nav mimics your screenshot
 */
export default function Header() {
  const nav = [
    "Productos",
    "Soluciones",
    "Comunidad",
    "Recursos",
    "Precios",
    "Contacto",
    "Facebook",
  ];

  return (
    <header
      className="sticky top-0 z-40 border-b border-white/20"
      style={{ backgroundColor: "var(--brand-purple)" }}
    >
      <div className="container flex h-14 items-center justify-between text-white">
        {/* Logo stub - replace with your SVG/brand later */}
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-white/90 text-ink-900 grid place-items-center text-xs font-bold">
            g
          </div>
          <span className="text-sm font-semibold">FIFA 2026 Store</span>
        </div>

        <nav className="hidden md:flex items-center gap-3">
          {nav.map((item, i) => (
            <a
              key={item}
              href="#"
              className={cn(
                "rounded-md px-3 py-1.5 text-sm hover:bg-white/10 focus-visible:bg-white/15",
                i === 0 && "bg-white/20"
              )}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button className="rounded-md px-3 py-1.5 text-sm hover:bg-white/10">
            Iniciar
          </button>
          <button className="rounded-md bg-white px-3 py-1.5 text-sm text-ink-900 hover:bg-white/90">
            Registrar
          </button>
        </div>
      </div>
    </header>
  );
}
