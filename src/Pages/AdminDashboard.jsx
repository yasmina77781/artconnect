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

  useEffect(() => {
    const loadData = async () => {
      try {
        const [artworksRes, artisansRes] = await Promise.all([
          fetch("http://localhost:3001/artworks"),
          fetch("http://localhost:3001/artisans"),
        ]);

        const artworks = await artworksRes.json();
        const artisans = await artisansRes.json();

        setModels(Array.isArray(artworks) ? artworks : []);
        setArtisans(Array.isArray(artisans) ? artisans : []);
      } catch (err) {
        console.error("Erreur de chargement :", err);
      }
    };

    loadData();
  }, []);

  return (
    <section className="p-8 space-y-12">
      <h1 className="text-4xl font-bold text-[#2781AB]">Admin Dashboard</h1>

      <AddMenu setModels={setModels} setArtisans={setArtisans} />

      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-[#E5C4C4] p-4 rounded-xl shadow">Total: {models.length}</div>
        <div className="bg-[#E5C4C4] p-4 rounded-xl shadow">Favorites: {models.filter(m => m.favorite).length}</div>
        <div className="bg-[#E5C4C4] p-4 rounded-xl shadow">Categories: {new Set(models.map(m => m.category)).size}</div>
      </div>

      <FilterSelector selected={selectedView} setSelected={setSelectedView} />

      {selectedView === "oeuvres" && (
        <ModelTable models={models} setEditData={setEditData} setModels={setModels} />
      )}

      {selectedView === "artisans" && (
        <ArtisanCards artisans={artisans} setArtisans={setArtisans} />
      )}

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