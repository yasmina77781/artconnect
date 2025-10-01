import { createContext, useState } from "react";

const LikesContext = createContext();

export function LikesProvider({ children }) {
  const [likedItems, setLikedItems] = useState(new Set());

  const toggleLike = (id) => {
    setLikedItems((prev) => {
      const newSet = new Set(prev);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  };

  return (
    <LikesContext.Provider value={{ likedItems, toggleLike }}>
      {children}
    </LikesContext.Provider>
  );
}

export default LikesContext;