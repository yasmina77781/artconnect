import React from 'react';
import { useNavigate } from 'react-router-dom';
import ARTISTTITRIT from "../assets/ARTISTTITRIT.jpg";

const ArtisanOfTheMonth = () => {
  const navigate = useNavigate();
  
  const artisan = {
    id: 41,
    name: "Titrit Amghar",
    title: "Designer of Modern Amazigh Attire",
    description: "Titrit Amghar, a young artisan passionate about preserving Amazigh heritage. She reimagines traditional Amazigh clothing with a modern touch, blending ancestral motifs with contemporary cuts to create unique fashion pieces. Her work celebrates identity while making it accessible to new generations.",
    image: ARTISTTITRIT,
    city: "Atlas Mountains",
    category: "Art",
    component: "ArtisanOfTheMonth"
  };

  const handleClick = () => {
    navigate(`/details/${artisan.id}`, { state: { component: artisan.component } });
  };

  const containerStyle = {
    maxWidth: '64rem',
    margin: '0 auto',
    padding: '1.5rem'
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: 'Abril Fatface, serif',
    marginBottom: '2rem',
    color: 'black'
  };

  const cardStyle = {
    background: 'linear-gradient(to right, #93c5fd, #3b82f6)',
    borderRadius: '1.5rem',
    padding: '1.5rem',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  };

  const contentStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem'
  };

  const imageContainerStyle = {
    flexShrink: 0
  };

  const imageStyle = {
    width: '8rem',
    height: '8rem',
    borderRadius: '1rem',
    objectFit: 'cover',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
  };

  const textContainerStyle = {
    flex: 1,
    color: 'white'
  };

  const nameStyle = {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem'
  };

  const titleArtisanStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '1rem',
    opacity: 0.9
  };

  const descriptionStyle = {
    fontSize: '1.125rem',
    lineHeight: '1.75',
    opacity: 0.9
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>
        Artisans of the Month
      </h1>
      
      <div 
        style={cardStyle} 
        onClick={handleClick}
        onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      >
        <div style={contentStyle}>
          <div style={imageContainerStyle}>
            <img 
              src={ARTISTTITRIT} 
              alt="Titrit Amghar"
              style={imageStyle}
            />
          </div>
          
          <div style={textContainerStyle}>
            <h2 style={nameStyle}>
              {artisan.name}
            </h2>
            <h3 style={titleArtisanStyle}>
              {artisan.title}
            </h3>
            <p style={descriptionStyle}>
              {artisan.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanOfTheMonth;