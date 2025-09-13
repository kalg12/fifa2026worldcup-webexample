"use client";
import React, { useState } from "react";
import Chip from "./ui/Chip";
import Checkbox from "./ui/Checkbox";
import Range from "./ui/Range";

/**
 * Left filter panel. Purely illustrative:
 * - "keywords" chips that can be removed
 * - grouped checkboxes with headings matching the wireframe
 * - a price range slider
 */
export default function FilterSidebar() {
  const [keywords, setKeywords] = useState(["Spring", "Smart"]);
  const [modern, setModern] = useState(true);
  const [price, setPrice] = useState(50);

  const remove = (k: string) =>
    setKeywords((arr) => arr.filter((x) => x !== k));

  return (
    <aside className="w-full max-w-[260px] rounded-xl border border-ink-100 bg-white p-4 shadow-card">
      <h3 className="mb-2 text-sm font-semibold text-ink-700">
        Palabras clave
      </h3>

      <div className="mb-3 flex flex-wrap gap-2">
        {keywords.map((k) => (
          <Chip key={k} onRemove={() => remove(k)}>
            {k}
          </Chip>
        ))}
        <Chip>Modern</Chip>
      </div>

      <div className="space-y-4">
        {/* Multi "Label" groups just to mirror the screenshot */}
        {[1, 2, 3].map((g) => (
          <div key={g} className="border-t border-ink-100 pt-3">
            <Checkbox label="Label" checked />
            <div className="pl-6 text-xs text-ink-500">Description</div>
          </div>
        ))}

        <div className="border-t border-ink-100 pt-3">
          <div className="flex items-center justify-between text-sm text-ink-700">
            <span>Label</span>
            <span className="text-xs text-ink-500">$0–100</span>
          </div>
          <Range value={price} onChange={(v) => setPrice(v)} />
        </div>

        <div className="border-t border-ink-100 pt-3">
          <div className="mb-2 text-sm font-semibold text-ink-700">Color</div>
          {["Label", "Label", "Label"].map((l, i) => (
            <div key={i} className="mb-2">
              <Checkbox label={l} checked={i === 0} />
            </div>
          ))}
        </div>

        <div className="border-t border-ink-100 pt-3">
          <div className="mb-2 text-sm font-semibold text-ink-700">Size</div>
          {["Label", "Label", "Label"].map((l, i) => (
            <div key={i} className="mb-2">
              <Checkbox label={l} checked={i !== 2} />
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
