export default function ModelTable({ models, setEditData, setModels }) {
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Supprimer ce modèle ?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:3001/artworks/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Erreur lors de la suppression");

      setModels((prev) => prev.filter((m) => m.id !== id));
    } catch (error) {
      console.error("Suppression échouée :", error);
      alert("Une erreur est survenue lors de la suppression.");
    }
  };

  return (
    <div className="overflow-x-auto rounded-xl shadow">
      <table className="min-w-full bg-white text-left">
        <thead className="bg-[#2781AB] text-white">
          <tr>
            <th className="px-6 py-3">Titre</th>
            <th className="px-6 py-3">Région</th>
            <th className="px-6 py-3">Catégorie</th>
            <th className="px-6 py-3">Favori</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {models.length > 0 ? (
            models.map((m) => (
              <tr key={m.id} className="border-b">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 border">
                      {m.image && (
                        <img
                          src={m.image}
                          alt={m.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = "";
                            e.target.alt = "Image failed to load";
                            e.target.style.display = "none";
                          }}
                        />
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-[#2781AB]">{m.title}</div>
                      <div className="text-sm text-gray-500">
                        {m.createdAt
                          ? new Date(m.createdAt).toLocaleDateString()
                          : "Date inconnue"}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">{m.region}</td>
                <td className="px-6 py-4">{m.category}</td>
                <td className="px-6 py-4">{m.favorite ? "Oui" : "Non"}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button
                      className="px-3 py-1 rounded-full bg-[#2781AB] text-white hover:opacity-90"
                      onClick={() => setEditData(m)}
                    >
                      Modifier
                    </button>
                    <button
                      className="px-3 py-1 rounded-full bg-[#E5C4C4] text-[#2781AB] hover:opacity-90"
                      onClick={() => handleDelete(m.id)}
                    >
                      Supprimer
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                Aucun modèle enregistré
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}