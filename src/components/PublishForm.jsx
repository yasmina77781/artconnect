import React, { useState } from "react";

export default function PublishForm() {
  const [title, setTitle] = useState("");
  const [region, setRegion] = useState("");
  const [category, setCategory] = useState("Art");
  const [description, setDescription] = useState("");
  const [imageBase64, setImageBase64] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageBase64(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !region || !description || !imageBase64) {
      alert("Veuillez remplir tous les champs et ajouter une image.");
      return;
    }

    setIsSubmitting(true);

    const newArtwork = {
      id: crypto.randomUUID(),
      createdAt: Date.now(),
      title,
      region,
      category,
      description,
      image: imageBase64,
    };

    try {
      const res = await fetch("http://localhost:3001/artworks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newArtwork),
      });

      if (res.ok) {
        alert("Œuvre publiée avec succès 🎉");
        handleClear();
      } else {
        alert("Erreur lors de l'envoi.");
      }
    } catch (error) {
      console.error("Erreur serveur :", error);
      alert("Impossible de se connecter au serveur.");
    }

    setIsSubmitting(false);
  };

  const handleClear = () => {
    setTitle("");
    setRegion("");
    setCategory("Art");
    setDescription("");
    setImageBase64(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="relative bg-[url('/mosaic.jpg')] bg-cover bg-center p-8 rounded-2xl shadow-xl max-w-5xl w-full">
        <div className="absolute inset-0 bg-white/70 rounded-2xl z-0"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-red-900 mb-2">Publier une œuvre</h2>
          <p className="text-sm text-gray-700 mb-6">
            Partagez un fragment du patrimoine marocain. L'œuvre apparaît instantanément sur Home et Admin.
          </p>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <label className="block font-semibold text-red-900 mb-1">Titre</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-2 rounded-lg border border-gray-300 bg-white/70 focus:outline-none focus:ring-2 focus:ring-red-800"
                  placeholder="Nom de l'œuvre"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-red-900 mb-1">Région</label>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full p-2 rounded-lg border border-gray-300 bg-white/70 focus:outline-none focus:ring-2 focus:ring-red-800"
                  >
                    <option value="">Choisir une région</option>
                    <option value="Marrakech">Marrakech</option>
                    <option value="Fès">Fès</option>
                    <option value="Casablanca">Casablanca</option>
                    <option value="Rabat">Rabat</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-red-900 mb-1">Catégorie</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-2 rounded-lg border border-gray-300 bg-white/70 focus:outline-none focus:ring-2 focus:ring-red-800"
                  >
                    <option value="Art">Art</option>
                    <option value="Craft">Artisanat</option>
                    <option value="Music">Musique</option>
                    <option value="Food">Cuisine</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-red-900 mb-1">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2 rounded-lg border border-gray-300 bg-white/70 focus:outline-none focus:ring-2 focus:ring-red-800"
                  rows="6"
                  placeholder="Racontez l'histoire derrière cette œuvre..."
                />
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <div>
                <label className="block font-semibold text-red-900 mb-1">Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-red-100 file:text-red-900 hover:file:bg-red-200"
                />
              </div>

              <div className="flex-1 flex items-center justify-center border-2 border-dashed border-gray-400 rounded-lg bg-white/70 p-2">
                {imageBase64 ? (
                  <img
                    src={imageBase64}
                    alt="preview"
                    className="max-h-60 w-auto object-contain rounded-md"
                  />
                ) : (
                  <p className="text-gray-600 text-center">L’aperçu apparaîtra ici</p>
                )}
              </div>

              <div className="flex gap-4 justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 rounded-lg bg-red-900 text-white font-semibold hover:bg-red-800 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "Publication..." : "Publier"}
                </button>
                <button
                  type="button"
                  onClick={handleClear}
                  className="px-6 py-2 rounded-lg bg-[#9A3B3B] text-white font-semibold hover:bg-[#7d2f2f] transition-colors"
                >
                  Réinitialiser
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}