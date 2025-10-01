import { useMemo } from "react";

export default function FilterSelector({ selected, setSelected }) {
  const options = useMemo(() => [
    { value: "oeuvres", label: "Œuvres" },
    { value: "categories", label: "Catégories" },
    { value: "evenements", label: "Événements" },
    { value: "artisans", label: "Artisans" },
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