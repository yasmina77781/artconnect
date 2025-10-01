import { useState } from "react";

export default function FormArtisan({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    region: "",
    description: "",
    image: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setFormData((prev) => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const newArtisan = {
        ...formData,
        id: crypto.randomUUID(),
        createdAt: Date.now(),
      };
      await onSubmit(newArtisan);
    } catch (error) {
      console.error("Erreur lors de l'ajout :", error);
      alert("Une erreur est survenue.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow space-y-4">
      <h3 className="text-2xl font-bold text-[#2781AB]">Ajouter un artisan</h3>

      <input
        type="text"
        name="name"
        placeholder="Nom de l'artisan"
        value={formData.name}
        onChange={handleChange}
        className="w-full border px-4 py-2 rounded"
        required
      />

      <input
        type="text"
        name="region"
        placeholder="Région"
        value={formData.region}
        onChange={handleChange}
        className="w-full border px-4 py-2 rounded"
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full border px-4 py-2 rounded"
        rows={4}
        required
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="w-full"
      />

      {formData.image && (
        <img
          src={formData.image}
          alt="Preview"
          className="w-full h-48 object-cover rounded-xl"
        />
      )}

      <div className="flex gap-4 mt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#2781AB] text-white px-6 py-2 rounded-full hover:opacity-90 disabled:opacity-50"
        >
          {isSubmitting ? "Ajout en cours..." : "Ajouter"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-300"
        >
          Annuler
        </button>
      </div>
    </form>
  );
}