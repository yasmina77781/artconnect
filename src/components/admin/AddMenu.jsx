import { useState } from "react";
import PublishForm from "../PublishForm"; // pour les modèles
import FormArtisan from "./FormArtisan"; // à créer

export default function AddMenu({ setModels, setArtisans }) {
  const [selectedType, setSelectedType] = useState(null);

  const handleCancel = () => setSelectedType(null);

  return (
    <div className="space-y-8">
      {/* Boutons d’ajout */}
      <div className="flex gap-4 flex-wrap">
        <button
          className="bg-[#2781AB] text-white px-6 py-2 rounded-full shadow hover:bg-[#1f6b90] transition"
          onClick={() => setSelectedType("modele")}
        >
          ➕ Ajouter un modèle
        </button>
        <button
          className="bg-[#E5C4C4] text-[#2781AB] px-6 py-2 rounded-full shadow hover:bg-[#d8b3b3] transition"
          onClick={() => setSelectedType("artisan")}
        >
          🧵 Ajouter un artisan
        </button>
      </div>

      {/* Formulaire dynamique */}
      {selectedType && (
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md animate-fade-in">
          <h3 className="text-xl font-semibold mb-4 text-[#2781AB]">
            {selectedType === "modele" ? "Nouveau modèle" : "Nouvel artisan"}
          </h3>

          {selectedType === "modele" && (
            <PublishForm
              mode="create"
              onCancel={handleCancel}
              onSubmit={async (newModel) => {
                const res = await fetch("http://localhost:3001/artworks", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(newModel),
                });
                const saved = await res.json();
                setModels((prev) => [saved, ...prev]);
                handleCancel();
              }}
            />
          )}

          {selectedType === "artisan" && (
            <FormArtisan
              onCancel={handleCancel}
              onSubmit={async (newArtisan) => {
                const res = await fetch("http://localhost:3001/artisans", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(newArtisan),
                });
                const saved = await res.json();
                setArtisans((prev) => [saved, ...prev]);
                handleCancel();
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}