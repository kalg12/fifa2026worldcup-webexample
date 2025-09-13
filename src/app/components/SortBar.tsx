"use client";
import React, { useState } from "react";
import Button from "./ui/Button";

/**
 * Row of "chips" to simulate sorting and the "New" toggle.
 * We'll only style the active one for feedback.
 */
export default function SortBar() {
  const [active, setActive] = useState<string>("New");

  const items = ["New", "Price ascending", "Price descending", "Rating"];

  return (
    <div className="flex items-center gap-2">
      {items.map((item) => (
        <Button
          key={item}
          variant={item === "New" ? "solid" : "ghost"}
          active={active === item}
          onClick={() => setActive(item)}
          aria-pressed={active === item}
        >
          {item}
        </Button>
      ))}
    </div>
  );
}
