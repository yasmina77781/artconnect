import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react'; // ADDED: Import the Heart icon

// Import artwork images
import ARTJEWLERY from '../assets/ARTJEWLERY.jpg';
import ARTCARPET from '../assets/ARTCARPET.jpg';
import ARTWOOD from '../assets/ARTWOOD.jpg';
import ARTPOTTERY from '../assets/ARTPOTTERY.jpg';
import ARTMOSAIC from '../assets/ARTMOSAIC.jpg';

// Import artist avatar images
import FATIMA from '../assets/FATIMA.jpg';
import AMINA from '../assets/AMINA.jpg';
import MOHAMMED from '../assets/MOHAMMED.jpg';
import HASSAN from '../assets/HASSAN.jpg';
import moulayyoussef from '../assets/moulayyoussef.jpg';

const Artworks = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  // CHANGED: This state now correctly tracks multiple liked items
  const [likedItems, setLikedItems] = useState(new Set()); 

  const artworks = [
    { image: ARTJEWLERY, title: "Jewelry & Silverwork", quote: "Traditional Amazigh (Berber) jewelry made of silver, enamel, and gemstones.",FamousRegions:" Atlas Mountains, Marrakech souks"},
    { image: ARTCARPET, title: "Moroccan Carpets", quote: "Handwoven wool rugs with traditional Berber patterns.", FamousRegions: "Beni Ourain (Atlas Mountains), Azilal, Marrakech" },
    { image: ARTWOOD, title: "Woodwork & Carving", quote: "Carved cedar wood and Thuya wood furniture, doors, and boxes.", FamousRegions: "Marrakech, Fès, Essaouira"},
    { image: ARTPOTTERY, title: "Pottery & Ceramics", quote: "Handmade pottery in bright colors, including tajines, plates, and bowls.", FamousRegions: "Safi, Fès, Meknes" },
    { image: ARTMOSAIC, title: "Zellige :Mosaic Tiles", quote: "Hand-cut, colorful geometric tiles used in mosques, riads, and fountains.", FamousRegions: "Fès, Marrakech, Meknes" }
  ];

  const artists = [
    { name: 'Fatima Zahra', dates: '1988 (alive)', location: 'Marrakech, Maroc', avatar: FATIMA},
    { name: 'Amina Agouzni', dates: '1990 (alive)', location: 'Fès, Maroc', avatar: AMINA },
    { name: 'Mohamed Bouziane', dates: '1980 (alive)', location: 'Marrakech, Maroc', avatar: MOHAMMED },
    { name: 'Hassan Kabbani', dates: '1982 (alive)', location: 'Safi, Maroc', avatar: HASSAN},
    { name: 'Moulay Youssef Lamrani', dates: '1978 (alive)', location: 'Fès, Maroc', avatar:moulayyoussef }
  ];

  const nextArtwork = () => setCurrentIndex(prev => (prev + 1) % artworks.length);
  const prevArtwork = () => setCurrentIndex(prev => (prev - 1 + artworks.length) % artworks.length);

  useEffect(() => {
    const interval = setInterval(nextArtwork, 5000);
    return () => clearInterval(interval);
  }, []);
  
  // ADDED: Function to handle liking an item
  const toggleLike = (itemIndex, e) => {
    e.stopPropagation();
    setLikedItems(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(itemIndex)) {
        newLiked.delete(itemIndex);
      } else {
        newLiked.add(itemIndex);
      }
      return newLiked;
    });
  };

  const getCardStyle = (index) => {
    // UNCHANGED: Your original styling logic
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
    } else if (diff === -1 || diff === artworks.length - 1) {
      cardStyle.width = '320px'; cardStyle.height = '400px'; cardStyle.zIndex = 10;
      cardStyle.opacity = 0.7; cardStyle.transform = 'translateX(-120%) translateY(-50%) rotateY(25deg) scale(0.85)';
      cardStyle.left = '50%'; cardStyle.top = '50%';
    } else if (diff === 1 || diff === -(artworks.length - 1)) {
      cardStyle.width = '320px'; cardStyle.height = '400px'; cardStyle.zIndex = 10;
      cardStyle.opacity = 0.7; cardStyle.transform = 'translateX(20%) translateY(-50%) rotateY(-25deg) scale(0.85)';
      cardStyle.left = '50%'; cardStyle.top = '50%';
    } else if (diff === -2 || diff === artworks.length - 2) {
      cardStyle.width = '280px'; cardStyle.height = '320px'; cardStyle.zIndex = 5;
      cardStyle.opacity = 0.4; cardStyle.transform = 'translateX(-200%) translateY(-50%) rotateY(45deg) scale(0.7)';
      cardStyle.left = '50%'; cardStyle.top = '50%';
    } else if (diff === 2 || diff === -(artworks.length - 2)) {
      cardStyle.width = '280px'; cardStyle.height = '320px'; cardStyle.zIndex = 5;
      cardStyle.opacity = 0.4; cardStyle.transform = 'translateX(100%) translateY(-50%) rotateY(-45deg) scale(0.7)';
      cardStyle.left = '50%'; cardStyle.top = '50%';
    } else {
      cardStyle.width = '0px'; cardStyle.height = '0px'; cardStyle.opacity = 0;
    }
    cardStyle.backgroundImage = `url(${artworks[index].image})`;
    return cardStyle;
  };
  
  // ADDED: Style for the heart button, same as InTheSpotlight
  const heartStyle = {
    position: "absolute", top: "10px", right: "10px", width: "45px", height: "45px",
    borderRadius: "50%", background: "rgba(255,255,255,0.25)", display: "flex",
    alignItems: "center", justifyContent: "center", cursor: "pointer",
    border: "1px solid rgba(255,255,255,0.3)", zIndex: 5,
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', background: 'white' }}>
      <div style={{ paddingTop: '32px', paddingBottom: '16px' }}>
        <h1 style={{ fontSize: '2rem', fontFamily: "'Abril Fatface', serif", color: 'black', margin: 0, textAlign: 'Left' }}>Artworks</h1>
      </div>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '900px', height: '500px', perspective: '1200px' }}>
        {artworks.map((artwork, index) => {
          const isActive = index === currentIndex;
          const isLiked = likedItems.has(index); // ADDED: Check if current card is liked

          return (
            <div key={index} style={getCardStyle(index)} onClick={() => setCurrentIndex(index)}>
              {isActive && (
                <>
                  {/* --- ADDED THIS BLOCK --- */}
                  <div style={heartStyle} onClick={(e) => toggleLike(index, e)}>
                    <Heart
                      size={22}
                      color={isLiked ? "#ef4444" : "white"}
                      fill={isLiked ? "#ef4444" : "none"}
                    />
                  </div>
                  {/* --- END OF ADDED BLOCK --- */}

                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', color: 'white', padding: '20px' }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>{artwork.title}</h3>
                    <p style={{ fontSize: '14px', fontStyle: 'italic', margin: '0 0 12px 0' }}>{artwork.quote}</p>
                    <p style={{ fontSize: '12px', opacity: 0.8, margin: 0 }}>{artwork.meta}</p>
                  </div>
                </>
              )}
            </div>
          );
        })}
        <button onClick={prevArtwork} style={{ position: 'absolute', left: '5%', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%', padding: '10px 15px', cursor: 'pointer' }}>‹</button>
        <button onClick={nextArtwork} style={{ position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%', padding: '10px 15px', cursor: 'pointer' }}>›</button>
      </div>
      <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', background: 'rgba(140, 127, 127, 0.82)', backdropFilter: 'blur(10px)', borderRadius: '25px', padding: '12px 20px', display: 'flex', alignItems: 'center', gap: '12px', color: 'white', zIndex: 20 }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundImage: `url(${artists[currentIndex].avatar})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div>
          <div style={{ fontSize: '14px', fontWeight: 600 }}>{artists[currentIndex].name}</div>
          <div style={{ fontSize: '12px', opacity: 0.8 }}>{artists[currentIndex].dates}</div>
          <div style={{ fontSize: '11px', opacity: 0.6 }}>{artists[currentIndex].location}</div>
        </div>
        <div style={{ display: 'flex', gap: '8px', marginLeft: '15px' }}>
          <button onClick={prevArtwork} style={{ background: 'rgba(0, 0, 0, 0.15)', color: 'white', border: 'none', borderRadius: '50%', padding: '6px 10px', cursor: 'pointer' }}>‹</button>
          <button onClick={nextArtwork} style={{ background: 'rgba(0,0,0,0.15)', color: 'white', border: 'none', borderRadius: '50%', padding: '6px 10px', cursor: 'pointer' }}>›</button>
        </div>
      </div>

      {/* REMOVED: The old right-side icon bar is no longer needed. */}
    </div>
  );
};

export default Artworks;