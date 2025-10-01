import { useState } from "react";
import PublishForm from "../PublishForm";
import FormArtisan from "./FormArtisan";

export default function AddMenu({ setModels, setArtisans }) {
  const [selectedType, setSelectedType] = useState(null);

  const handleCancel = () => setSelectedType(null);

  const handleSubmit = async (type, data) => {
    const enriched = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: Date.now(),
    };

    const endpoint = type === "modele" ? "artworks" : "artisans";
    const setter = type === "modele" ? setModels : setArtisans;

    try {
      const res = await fetch(`http://localhost:3001/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enriched),
      });

      if (!res.ok) throw new Error("Erreur lors de l'envoi");

      const saved = await res.json();
      setter((prev) => [saved, ...prev]);
      handleCancel();
    } catch (err) {
      console.error("Échec de l'ajout :", err);
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };

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
              onSubmit={(data) => handleSubmit("modele", data)}
            />
          )}

          {selectedType === "artisan" && (
            <FormArtisan
              onCancel={handleCancel}
              onSubmit={(data) => handleSubmit("artisan", data)}
            />
          )}
        </div>
      )}
    </div>
  );
}