import { useState } from "react";
import EditArtisanModal from "./EditArtisanModal";

export default function ArtisanCards({ artisans, setArtisans }) {
  const [editArtisan, setEditArtisan] = useState(null);

  const handleDelete = async (id) => {
    if (!window.confirm("Supprimer cet artisan ?")) return;

    try {
      const res = await fetch(`http://localhost:3001/artisans/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Erreur lors de la suppression");

      setArtisans((prev) => prev.filter((a) => a.id !== id));
    } catch (error) {
      console.error("Suppression échouée :", error);
      alert("Une erreur est survenue lors de la suppression.");
    }
  };

  if (!artisans || artisans.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        Aucun artisan enregistré pour le moment.
      </div>
    );
  }

  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold text-[#2781AB] mb-6">Artisans</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {artisans.map((a) => (
          <div
            key={a.id}
            className="bg-[#E5C4C4] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
          >
            {a.image && (
              <img
                src={a.image}
                alt={a.name || "Artisan"}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.src = "/placeholder.jpg";
                }}
              />
            )}

            <div className="p-4 space-y-2">
              <h3 className="text-xl font-semibold text-[#2781AB]">
                {a.name || "Nom inconnu"}
              </h3>
              <p className="text-sm text-gray-700 italic">
                {a.region || "Région inconnue"}
              </p>
              <p className="text-gray-800">
                {a.description || "Aucune description disponible."}
              </p>

              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => setEditArtisan(a)}
                  className="px-4 py-1 bg-[#2781AB] text-white rounded-full hover:opacity-90"
                >
                  Modifier
                </button>
                <button
                  onClick={() => handleDelete(a.id)}
                  className="px-4 py-1 bg-white border border-[#2781AB] text-[#2781AB] rounded-full hover:bg-[#f3f3f3]"
                >
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {editArtisan && (
        <EditArtisanModal
          initialData={editArtisan}
          onClose={() => setEditArtisan(null)}
          setArtisans={setArtisans}
        />
      )}
    </div>
  );
}