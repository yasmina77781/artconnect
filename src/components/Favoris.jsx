import React, { useContext, useEffect, useState } from "react";
import LikesContext from "../components/contexte/LikesContext";
import fetchData from "../components/api";

export default function Favorites() {
  const { likedItems, toggleLike } = useContext(LikesContext);
  const [allItems, setAllItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAll = async () => {
      try {
        const [artworks, spotlight, events, categories] = await Promise.all([
          fetchData("artworks"),
          fetchData("spotlight"),
          fetchData("events"),
          fetchData("categories"),
        ]);
        const merged = [...artworks, ...spotlight, ...events, ...categories];
        setAllItems(merged);
      } catch (err) {
        console.error("Erreur lors du chargement des favoris :", err);
        setAllItems([]);
      } finally {
        setLoading(false);
      }
    };
    loadAll();
  }, []);

  const favorites = allItems.filter((item) => likedItems.has(item.id));

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-[#2781AB] mb-6">💖 Mes favoris</h2>

      {loading ? (
        <p className="text-center text-gray-500">Chargement...</p>
      ) : favorites.length === 0 ? (
        <p className="text-center text-gray-500">Aucun favori enregistré.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              {item.image && (
                <img
                  src={item.image.startsWith("/") ? item.image : `/${item.image}`}
                  alt={item.title || item.name}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.src = "";
                    e.target.alt = "Image non disponible";
                    e.target.style.display = "none";
                  }}
                />
              )}
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold text-[#2781AB]">
                  {item.title || item.name}
                </h3>
                <p className="text-sm text-gray-600 italic">
                  {item.region || item.city || item.location || "Maroc"}
                </p>
                <p className="text-gray-800 text-sm">
                  {item.description || item.quote || "—"}
                </p>
                {item.date && (
                  <p className="text-xs text-gray-500">
                    📅 {new Date(item.date).toLocaleDateString("fr-FR")}
                  </p>
                )}

                {/* Bouton Retirer des favoris */}
                <button
                  onClick={() => toggleLike(item.id)}
                  className="mt-4 px-4 py-2 bg-[#E5C4C4] text-[#2781AB] rounded-full hover:opacity-90"
                >
                  Retirer des favoris
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}