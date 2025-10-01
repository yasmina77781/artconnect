import { useState, useEffect } from "react";
import AddMenu from "../components/admin/AddMenu";
import ModelTable from "../components/admin/ModelTable";
import ArtisanCards from "../components/admin/ArtisanCards";
import EditModal from "../components/admin/EditModal";
import FilterSelector from "../components/admin/FilterSelector";

export default function AdminDashboard() {
  const [models, setModels] = useState([]);
  const [artisans, setArtisans] = useState([]);
  const [editData, setEditData] = useState(null);
  const [selectedView, setSelectedView] = useState("oeuvres");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:3001/artworks").then(res => res.json()),
      fetch("http://localhost:3001/artisans").then(res => res.json())
    ]).then(([artworks, artisansData]) => {
      setModels(artworks);
      setArtisans(artisansData);
      setLoading(false);
    });
  }, []);

  const total = models.length;
  const favorites = models.filter(m => m.favorite).length;
  const categories = new Set(models.map(m => m.category)).size;

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500 text-xl">
        Chargement du tableau de bord...
      </div>
    );
  }

  return (
    <section className="p-8 space-y-12">
      <h1 className="text-4xl font-bold text-[#2781AB]">Admin Dashboard</h1>

      {/* Ajout d’œuvres ou d’artisans */}
      <AddMenu setModels={setModels} setArtisans={setArtisans} />

      {/* Résumé */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-[#E5C4C4] p-4 rounded-xl shadow">Total œuvres : {total}</div>
        <div className="bg-[#E5C4C4] p-4 rounded-xl shadow">Favoris : {favorites}</div>
        <div className="bg-[#E5C4C4] p-4 rounded-xl shadow">Catégories : {categories}</div>
      </div>

      {/* Sélecteur de vue */}
      <FilterSelector selected={selectedView} setSelected={setSelectedView} />

      {/* Vue dynamique */}
      {selectedView === "oeuvres" && (
        <ModelTable models={models} setEditData={setEditData} setModels={setModels} />
      )}

      {selectedView === "artisans" && (
        <ArtisanCards artisans={artisans} setArtisans={setArtisans} />
      )}

      {/* Modal d’édition */}
      {editData && (
        <EditModal
          initialData={editData}
          onClose={() => setEditData(null)}
          setModels={setModels}
        />
      )}
    </section>
  );
}