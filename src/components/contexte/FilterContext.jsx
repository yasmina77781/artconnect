import { createContext, useState } from "react";

const FilterContext = createContext();

export default FilterContext;
export const FilterProvider = ({ children }) => {
  const [selectedRegion, setSelectedRegion] = useState("All Morocco");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  return (
    <FilterContext.Provider value={{ selectedRegion, setSelectedRegion, selectedCategory, setSelectedCategory }}>
      {children}
    </FilterContext.Provider>
  );
};