import React, { useState, useEffect } from 'react';

// Import artwork images
import Categzellige from '../assets/Categzellige.jpg';
import Categcarpets from '../assets/Categcarpets.jpg';
import Categjewlery from '../assets/Categjewlery.jpg';
import Categpoterry from '../assets/Categpoterry.jpg';
import Categwoodwork from '../assets/Categwoodwork.jpg';

const Artworks = () => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const artworks = [
    { image:Categpoterry , title: "Golden clay", quote: "Moroccan pottery tells stories through hand-shaped clay, blending tradition, culture, and beauty. Safi is famous for its colorful ceramics, still made by artisans using centuries-old techniques.", City: "Safi" },
    { image:Categcarpets, title: "Woven Dreams", quote: "Moroccan carpets are woven with skill and passion, creating patterns full of history. Fès is renowned for its vibrant handwoven carpets that reflect local heritage and artistry.", City: "Fés" },
    { image:Categjewlery, title: "Silver Whispers", quote: "Jewelry in Morocco is a delicate art, combining elegance, heritage, and craftsmanship. Marrakech markets sparkle with silver and gemstone pieces, made by skilled local artisans.", City: "Marrakech" },
    { image:Categzellige, title: "Mosaic Magic", quote: "Zellige tiles showcase Moroccan mastery with geometric designs and vivid colors. Fès remains the heart of this craft, adorning riads, mosques, and palaces with timeless mosaics.", City: "Fés" },
    { image:Categwoodwork, title: "Cedar Craft", quote: "Woodwork transforms cedar into functional and decorative treasures, keeping Moroccan traditions alive. Meknès is known for its intricate carvings and ornate furniture made by hand.", City: "Méknes" }
  ];

  const nextArtwork = () => setCurrentIndex(prev => (prev + 1) % artworks.length);
  const prevArtwork = () => setCurrentIndex(prev => (prev - 1 + artworks.length) % artworks.length);

  useEffect(() => {
    const interval = setInterval(nextArtwork, 5000);
    return () => clearInterval(interval);
  }, []);

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
      cardStyle.width = '300px';
      cardStyle.height = '380px';
      cardStyle.zIndex = 20;
      cardStyle.transform = 'translateX(-50%) translateY(-50%) scale(1.05)';
      cardStyle.left = '50%';
      cardStyle.top = '50%';
      cardStyle.opacity = 1;
    } else if (diff === -1 || diff === artworks.length - 1) {
      cardStyle.width = '320px';
      cardStyle.height = '400px';
      cardStyle.zIndex = 10;
      cardStyle.opacity = 0.7;
      cardStyle.transform = 'translateX(-120%) translateY(-50%) rotateY(25deg) scale(0.85)';
      cardStyle.left = '50%';
      cardStyle.top = '50%';
    } else if (diff === 1 || diff === -(artworks.length - 1)) {
      cardStyle.width = '320px';
      cardStyle.height = '400px';
      cardStyle.zIndex = 10;
      cardStyle.opacity = 0.7;
      cardStyle.transform = 'translateX(20%) translateY(-50%) rotateY(-25deg) scale(0.85)';
      cardStyle.left = '50%';
      cardStyle.top = '50%';
    } else if (diff === -2 || diff === artworks.length - 2) {
      cardStyle.width = '280px';
      cardStyle.height = '320px';
      cardStyle.zIndex = 5;
      cardStyle.opacity = 0.4;
      cardStyle.transform = 'translateX(-200%) translateY(-50%) rotateY(45deg) scale(0.7)';
      cardStyle.left = '50%';
      cardStyle.top = '50%';
    } else if (diff === 2 || diff === -(artworks.length - 2)) {
      cardStyle.width = '280px';
      cardStyle.height = '320px';
      cardStyle.zIndex = 5;
      cardStyle.opacity = 0.4;
      cardStyle.transform = 'translateX(100%) translateY(-50%) rotateY(-45deg) scale(0.7)';
      cardStyle.left = '50%';
      cardStyle.top = '50%';
    } else {
      cardStyle.width = '0px';
      cardStyle.height = '0px';
      cardStyle.opacity = 0;
    }

    cardStyle.backgroundImage = `url(${artworks[index].image})`;
    return cardStyle;
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', background: 'white' }}>
      {/* Title */}
      <div style={{ paddingTop: '32px', paddingBottom: '16px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'black', margin: 0 ,fontFamily:"'abril fatface',serif"}}>Categories</h1>
      </div>

      {/* Carousel */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '900px', height: '500px', perspective: '1200px' }}>
        {artworks.map((artwork, index) => {
          const isActive = index === currentIndex;
          return (
            <div key={index} style={getCardStyle(index)} onClick={() => setCurrentIndex(index)}>
              {isActive && (
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', color: 'white', padding: '20px' }}>
                  <h3 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>{artwork.title}</h3>
                  <p style={{ fontSize: '14px', fontStyle: 'italic', margin: '0 0 12px 0' }}>{artwork.quote}</p>
                  <p style={{ fontSize: '12px', opacity: 0.8, margin: 0 }}>{artwork.meta}</p>
                </div>
              )}
            </div>
          );
        })}

        {/* Prev & Next Buttons inside carousel */}
        <button onClick={prevArtwork} style={{ position: 'absolute', left: '5%', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%', padding: '10px 15px', cursor: 'pointer' }}>‹</button>
        <button onClick={nextArtwork} style={{ position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%', padding: '10px 15px', cursor: 'pointer' }}>›</button>
      </div>
    </div>
  );
};

export default Artworks;
