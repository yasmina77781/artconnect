import { motion } from "framer-motion";
import PublishForm from "../PublishForm";

export default function EditModal({ initialData, onClose, setModels }) {
  const handleSubmit = async (updatedModel) => {
    try {
      const res = await fetch(`http://localhost:3001/artworks/${updatedModel.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedModel),
      });

      if (!res.ok) throw new Error("Erreur lors de la mise à jour");

      const saved = await res.json();
      setModels((prev) =>
        prev.map((m) => (m.id === saved.id ? saved : m))
      );
      onClose();
    } catch (error) {
      console.error("Update failed:", error);
      alert("Une erreur est survenue lors de la mise à jour.");
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-2xl p-8 w-full max-w-2xl shadow-xl relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-[#2781AB] mb-6">Modifier le modèle</h2>
        <PublishForm
          initialData={initialData}
          mode="edit"
          onSubmit={handleSubmit}
          onCancel={onClose}
        />
      </motion.div>
    </motion.div>
  );
}