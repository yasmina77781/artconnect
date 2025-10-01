import { useMemo } from "react";
import { Palette, Layers, CalendarDays, Users } from "lucide-react";

export default function FilterSelector({ selected, setSelected }) {
  const options = useMemo(() => [
    { value: "oeuvres", label: "Œuvres", icon: <Palette size={16} /> },
    { value: "categories", label: "Catégories", icon: <Layers size={16} /> },
    { value: "evenements", label: "Événements", icon: <CalendarDays size={16} /> },
    { value: "artisans", label: "Artisans", icon: <Users size={16} /> },
  ], []);

  return (
    <div className="mb-6">
      <label htmlFor="filter-select" className="block text-[#2781AB] font-semibold mb-2">
        Filtrer par :
      </label>
      <select
        id="filter-select"
        aria-label="Filtrer par type de contenu"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="border px-4 py-2 rounded w-full max-w-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2781AB]"
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}