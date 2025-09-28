import React from "react";

// Flatten the regions data into a single array of all cities
const allCities = [
  "Tangier", "Tetouan", "Chefchaouen", "Casablanca", "Rabat",
  "Kenitra", "Agadir", "Laayoune", "Dakhla", "Oujda", "Nador",
  "Berkane", "Marrakech", "Fes", "Meknes", "Safi", "Essaouira"
];

const categories = ["Pottery", "Carpets", "Jewelry", "Woodwork", "Zellige", "Festival", "Art", "Ceremony"];

// Reusable FilterButton component for cleaner JSX
const FilterButton = ({ text, onClick, isSelected, isReset = false }) => {
  const buttonStyle = {
    padding: "8px 15px",
    borderRadius: isReset ? "8px" : "20px",
    border: "none",
    background: isSelected || isReset ? "black" : "#ffd60a",
    color: isSelected || isReset ? "white" : "black",
    cursor: "pointer",
    fontFamily: "'Abril Fatface', serif",
  };
  return (
    <button onClick={onClick} style={buttonStyle}>
      {text}
    </button>
  );
};

export default function Research({ 
  selectedRegion, 
  setSelectedRegion, 
  selectedCategory, 
  setSelectedCategory 
}) {
  const handleReset = () => {
    setSelectedRegion("All Morocco");
    setSelectedCategory("All Categories");
  };

  // Centralized style object for all components
  const styles = {
    section: {
      width: "90%",
      fontFamily: "'Abril Fatface', serif",
      margin: "90px 0px",
    },
    headerContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      marginBottom: "10px",
      margin: "10px 0px",
    },
    title: {
      fontSize: "2rem",
      flexShrink: 0,
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
                {cat.toUpperCase()}
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