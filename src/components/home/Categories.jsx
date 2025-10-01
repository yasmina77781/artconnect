import React, { useState, useEffect, useContext } from 'react';
import { Heart } from 'lucide-react';
import fetchData from '../api';
import FilterContext from '../contexte/FilterContext';
import LikesContext from '../contexte/LikesContext';

const Categories = () => {
  const { selectedRegion, selectedCategory } = useContext(FilterContext);
  const { likedItems, toggleLike } = useContext(LikesContext); // ✅ centralisation des likes
  const [categories, setCategories] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(2);

  useEffect(() => {
    fetchData("categories").then((data) => {
      if (Array.isArray(data)) setCategories(data);
    });
  }, []);

  const filtered = categories.filter(item =>
    (selectedRegion === "All Morocco" || item.city.includes(selectedRegion)) &&
    (selectedCategory === "All Categories" || item.title.includes(selectedCategory))
  );

  const nextArtwork = () => setCurrentIndex(prev => (prev + 1) % filtered.length);
  const prevArtwork = () => setCurrentIndex(prev => (prev - 1 + filtered.length) % filtered.length);

  useEffect(() => {
    if (filtered.length === 0) return;
    const interval = setInterval(nextArtwork, 5000);
    return () => clearInterval(interval);
  }, [filtered]);

  const getCardStyle = (index) => {
    let cardStyle = {
      position: 'absolute',
      borderRadius: '20px',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'all 0.7s ease',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
    const diff = index - currentIndex;
    if (diff === 0) {
      cardStyle.width = '300px'; cardStyle.height = '380px'; cardStyle.zIndex = 20;
      cardStyle.transform = 'translateX(-50%) translateY(-50%) scale(1.05)';
      cardStyle.left = '50%'; cardStyle.top = '50%'; cardStyle.opacity = 1;
    } else if (diff === -1 || diff === filtered.length - 1) {
      cardStyle.width = '320px'; cardStyle.height = '400px'; cardStyle.zIndex = 10;
      cardStyle.opacity = 0.7; cardStyle.transform = 'translateX(-120%) translateY(-50%) rotateY(25deg) scale(0.85)';
      cardStyle.left = '50%'; cardStyle.top = '50%';
    } else if (diff === 1 || diff === -(filtered.length - 1)) {
      cardStyle.width = '320px'; cardStyle.height = '400px'; cardStyle.zIndex = 10;
      cardStyle.opacity = 0.7; cardStyle.transform = 'translateX(20%) translateY(-50%) rotateY(-25deg) scale(0.85)';
      cardStyle.left = '50%'; cardStyle.top = '50%';
    } else if (diff === -2 || diff === filtered.length - 2) {
      cardStyle.width = '280px'; cardStyle.height = '320px'; cardStyle.zIndex = 5;
      cardStyle.opacity = 0.4; cardStyle.transform = 'translateX(-200%) translateY(-50%) rotateY(45deg) scale(0.7)';
      cardStyle.left = '50%'; cardStyle.top = '50%';
    } else if (diff === 2 || diff === -(filtered.length - 2)) {
      cardStyle.width = '280px'; cardStyle.height = '320px'; cardStyle.zIndex = 5;
      cardStyle.opacity = 0.4; cardStyle.transform = 'translateX(100%) translateY(-50%) rotateY(-45deg) scale(0.7)';
      cardStyle.left = '50%'; cardStyle.top = '50%';
    } else {
      cardStyle.width = '0px'; cardStyle.height = '0px'; cardStyle.opacity = 0;
    }
    cardStyle.backgroundImage = `url(/${filtered[index]?.image})`;
    return cardStyle;
  };

  const heartStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    border: "1px solid rgba(255,255,255,0.3)",
    zIndex: 5,
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', background: 'white' }}>
      <div style={{ paddingTop: '32px', paddingBottom: '16px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'black', margin: 0, fontFamily: "'Abril Fatface', serif" }}>
          Categories
        </h1>
      </div>

      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '900px', height: '500px', perspective: '1200px' }}>
        {filtered.map((artwork, index) => {
          const isActive = index === currentIndex;
          const isLiked = likedItems.has(artwork.id); // ✅ on utilise l'id réel

          return (
            <div key={artwork.id} style={getCardStyle(index)} onClick={() => setCurrentIndex(index)}>
              {isActive && (
                <>
                  <div style={heartStyle} onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(artwork.id); // ✅ on passe l'id réel
                  }}>
                    <Heart
                      size={22}
                      color={isLiked ? "#ef4444" : "white"}
                      fill={isLiked ? "#ef4444" : "none"}
                    />
                  </div>

                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                    color: 'white',
                    padding: '20px'
                  }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>{artwork.title}</h3>
                    <p style={{ fontSize: '14px', fontStyle: 'italic', margin: '0 0 12px 0' }}>{artwork.quote}</p>
                    <p style={{ fontSize: '12px', opacity: 0.8, margin: 0 }}>{artwork.city}</p>
                  </div>
                </>
              )}
            </div>
          );
        })}
        <button onClick={prevArtwork} style={{ position: 'absolute', left: '5%', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%', padding: '10px 15px', cursor: 'pointer' }}>‹</button>
        <button onClick={nextArtwork} style={{ position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%', padding: '10px 15px', cursor: 'pointer' }}>›</button>
      </div>
    </div>
  );
};

export default Categories;