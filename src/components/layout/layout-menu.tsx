"use client";

import { LayoutCard } from "./layout-card";

const layouts = [
  {
    title: "New Layout",
    description: "Add widgets and customize your way.",
    href: "/layout/new",
    isNew: true,
  },
  {
    title: "Multi-orderbook",
    description: "Display 10 different stock orderbook.",
    href: "/layout/multi-orderbook",
  },
  {
    title: "Multi-chart",
    description: "Observe multiple stock charts.",
    href: "/layout/multi-chart",
  },
  {
    title: "Classic",
    description: "Basic stock trading layout.",
    href: "/layout/classic",
  },
  {
    title: "Multi-stock",
    description: "Monitor multiple stocks at the same time.",
    href: "/layout/multi-stock",
  },
  {
    title: "Single-stock",
    description: "Focused stock trading dashboard.",
    href: "/layout/single-stock",
  },
  {
    title: "Fast Order",
    description: "Experience quick trades execution.",
    href: "/layout/fast-order",
  },
];

export default function LayoutMenu() {
  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold text-white mb-4">Layouts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {layouts.map((layout) => (
          <LayoutCard key={layout.title} {...layout} />
        ))}
      </div>
    </div>
  );
}
