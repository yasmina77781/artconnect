import React from 'react';
import ARTISTTITRIT from "../assets/ARTISTTITRIT.jpg";

const ArtisanOfTheMonth = () => {
  const containerStyle = {
    maxWidth: '64rem',
    margin: '0 auto',
    padding: '1.5rem'
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'left', // changed from center to left
    fontFamily:'Abril Fatface, serif',
    marginBottom: '2rem',
    color: 'black'
  };

  const cardStyle = {
    background: 'linear-gradient(to right, #93c5fd, #3b82f6)',
    borderRadius: '1.5rem',
    padding: '1.5rem',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
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
      
      <div style={cardStyle}>
        <div style={contentStyle}>
          {/* Image de l'artisan */}
          <div style={imageContainerStyle}>
            <img 
              src={ARTISTTITRIT} 
              alt="Titrit Amghar"
              style={imageStyle}
            />
          </div>
          
          {/* Contenu texte */}
          <div style={textContainerStyle}>
            <h2 style={nameStyle}>
              Titrit Amghar
            </h2>
            <h3 style={titleArtisanStyle}>
              Designer of Modern Amazigh Attire
            </h3>
            <p style={descriptionStyle}>
               Titrit Amghar, a young artisan passionate about preserving Amazigh heritage. 
  She reimagines traditional Amazigh clothing with a modern touch, blending ancestral motifs 
  with contemporary cuts to create unique fashion pieces. 
  Her work celebrates identity while making it accessible to new generations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanOfTheMonth;