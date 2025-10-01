import { createContext, useState, useEffect, useContext } from "react";
import * as api from "../admin/ApiService"; // Import our new API service

const DataContext = createContext();

// Custom hook to easily consume the context
export const useData = () => useContext(DataContext);

// The provider component that will wrap our app
export const DataProvider = ({ children }) => {
  const [models, setModels] = useState([]);
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch initial data on mount
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);
        const [artworksData, artisansData] = await Promise.all([
          api.getArtworks(),
          api.getArtisans(),
        ]);
        setModels(artworksData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
        setArtisans(artisansData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
        setError(null);
      } catch (err) {
        console.error("Failed to fetch data:", err);
        setError("Could not load data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchAllData();
  }, []);

  // --- CRUD Functions ---

  const addModel = async (newModel) => {
    const savedModel = await api.createArtwork(newModel);
    setModels((prev) => [savedModel, ...prev]);
  };

  const updateModel = async (updatedModel) => {
    const savedModel = await api.updateArtwork(updatedModel.id, updatedModel);
    setModels((prev) =>
      prev.map((m) => (m.id === savedModel.id ? savedModel : m))
    );
  };

  const deleteModel = async (id) => {
    await api.deleteArtwork(id);
    setModels((prev) => prev.filter((m) => m.id !== id));
  };
  
  const addArtisan = async (newArtisan) => {
    const savedArtisan = await api.createArtisan(newArtisan);
    setArtisans((prev) => [savedArtisan, ...prev]);
  };

  const updateArtisan = async (updatedArtisan) => {
    const savedArtisan = await api.updateArtisan(updatedArtisan.id, updatedArtisan);
    setArtisans((prev) =>
      prev.map((a) => (a.id === savedArtisan.id ? savedArtisan : a))
    );
  };

  const deleteArtisan = async (id) => {
    await api.deleteArtisan(id);
    setArtisans((prev) => prev.filter((a) => a.id !== id));
  };


  const value = {
    models,
    artisans,
    loading,
    error,
    addModel,
    updateModel,
    deleteModel,
    addArtisan,
    updateArtisan,
    deleteArtisan,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};