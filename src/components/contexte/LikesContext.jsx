import { createContext, useState, useEffect } from "react";

const LikesContext = createContext();

export function LikesProvider({ children }) {
  const [likedItems, setLikedItems] = useState([]);

  const toggleLike = (id) => {
    setLikedItems((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id]
    );
  };

  const likedSet = new Set(likedItems); // pour les .has(id)

  return (
    <LikesContext.Provider value={{ likedItems: likedSet, toggleLike }}>
      {children}
    </LikesContext.Provider>
  );
}

export default LikesContext;