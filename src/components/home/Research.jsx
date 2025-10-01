import React, { useContext } from "react";
import FilterContext from "../contexte/FilterContext";

// Liste des villes marocaines
const allCities = [
  "Tangier", "Tetouan", "Chefchaouen", "Casablanca", "Rabat",
  "Kenitra", "Agadir", "Laayoune", "Dakhla", "Oujda", "Nador",
  "Berkane", "Marrakech", "Fes", "Meknes"
];

// Liste des catégories artisanales
const categories = ["Pottery", "Carpets", "Jewelry", "Woodwork", "Mosaic"];

const FilterButton = ({ text, onClick, isSelected, isReset = false }) => {
  const buttonStyle = {
    padding: "8px 15px",
    borderRadius: isReset ? "8px" : "20px",
    border: "none",
    background: isSelected || isReset ? "black" : "#ffd60a",
    color: isSelected || isReset ? "white" : "black",
    cursor: "pointer",
    fontFamily: "'Abril Fatface', serif",
    transition: "background 0.3s ease",
  };
  return (
    <button onClick={onClick} style={buttonStyle}>
      {text}
    </button>
  );
};

export default function Research() {
  const {
    selectedRegion,
    setSelectedRegion,
    selectedCategory,
    setSelectedCategory
  } = useContext(FilterContext);

  const handleReset = () => {
    setSelectedRegion("All Morocco");
    setSelectedCategory("All Categories");
  };

  const styles = {
    section: {
      width: "90%",
      fontFamily: "'Abril Fatface', serif",
      margin: "90px auto",
    },
    headerContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      marginBottom: "20px",
    },
    title: {
      fontSize: "2rem",
      flexShrink: 0,
      color: "black",
    },
    selectContainer: {
      display: "flex",
      gap: "10px",
      flexShrink: 0,
    },
    select: {
      padding: "8px 18px",
      borderRadius: "8px",
      border: "none",
      background: "black",
      color: "white",
      cursor: "pointer",
      fontFamily: "'Abril Fatface', serif",
    },
    cityButtonsContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      marginTop: "10px",
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.headerContainer}>
        <h2 style={styles.title}>Explore by region</h2>
        <div style={styles.selectContainer}>
          <FilterButton text="RESET" onClick={handleReset} isReset={true} />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={styles.select}
          >
            <option value="All Categories">ALL CATEGORIES</option>
            {categories.map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div style={styles.cityButtonsContainer}>
        <FilterButton
          text="ALL MOROCCO"
          onClick={() => setSelectedRegion("All Morocco")}
          isSelected={selectedRegion === "All Morocco"}
        />
        {allCities.map((city, i) => (
          <FilterButton
            key={i}
            text={city}
            onClick={() => setSelectedRegion(city)}
            isSelected={selectedRegion === city}
          />
        ))}
      </div>
    </section>
  );
}