import React from 'react';
import { useNavigate } from 'react-router-dom';
// THIS PATH IS CORRECT IF YOUR FOLDER STRUCTURE IS CORRECT
import { allItems } from '../data/allData.jsx';

const FilteredResults = ({ selectedRegion, selectedCategory }) => {
  const navigate = useNavigate();

  if (selectedRegion === "All Morocco" && selectedCategory === "All Categories") {
    return null;
  }

  const filteredItems = allItems.filter(item => {
    const regionMatch = selectedRegion === "All Morocco" ||
      (item.city && item.city.toLowerCase().includes(selectedRegion.toLowerCase())) ||
      (item.location && item.location.toLowerCase().includes(selectedRegion.toLowerCase())) ||
      (item.famousRegions && item.famousRegions.toLowerCase().includes(selectedRegion.toLowerCase()));

    const categoryMatch = selectedCategory === "All Categories" ||
      (item.category && item.category.toLowerCase() === selectedCategory.toLowerCase());

    return regionMatch && categoryMatch;
  });

  const handleCardClick = (id) => navigate(`/details/${id}`);

  // --- Styles ---
  const sectionStyle = { width: "95%", margin: "40px auto", padding: "2rem", backgroundColor: "#f9f9f9", borderRadius: "20px", fontFamily: "'Open Sans', sans-serif" };
  const titleStyle = { fontSize: "2rem", marginBottom: "25px", fontFamily: "'Abril Fatface', serif", color: 'black', borderBottom: '2px solid #ffd60a', paddingBottom: '10px' };
  const gridStyle = { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "25px" };
  const cardStyle = { backgroundColor: "white", borderRadius: "1rem", overflow: "hidden", boxShadow: "0 10px 20px rgba(0,0,0,0.1)", cursor: "pointer", transition: "transform 0.3s ease, box-shadow 0.3s ease" };
  const cardImageStyle = (image) => ({ height: "180px", backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" });
  const cardContentStyle = { padding: "1rem" };
  const cardTitleStyle = { fontSize: "1.1rem", fontWeight: "bold", marginBottom: "0.5rem", color: "#333" };
  const cardDescStyle = { fontSize: "0.9rem", color: "#666" };

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>Filtered Results ({filteredItems.length})</h2>
      {filteredItems.length > 0 ? (
        <div style={gridStyle}>
          {filteredItems.map((item) => (
            <div 
                key={item.id} 
                style={cardStyle} 
                onClick={() => handleCardClick(item.id)}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)'; }}
            >
              <div style={cardImageStyle(item.image)}></div>
              <div style={cardContentStyle}>
                <h3 style={cardTitleStyle}>{item.title}</h3>
                <p style={cardDescStyle}>{item.city || item.location} | {item.category}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ color: '#666', textAlign: 'center', fontSize: '1.1rem' }}>No items found matching your filter criteria.</p>
      )}
    </section>
  );
};

export default FilteredResults;