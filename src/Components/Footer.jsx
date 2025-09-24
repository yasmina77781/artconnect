import React from 'react';

const Footer = () => {
  const footerStyle = {
    background: 'linear-gradient(to right, #93c5fd, #3b82f6)',
    color: 'white',
    paddingTop: '2rem',
    paddingBottom: '2rem',
    fontFamily: 'Arial, sans-serif'
  };

  const containerStyle = {
    maxWidth: '72rem',
    margin: '0 auto',
    padding: '0 1.5rem'
  };

  const taglineContainerStyle = {
    textAlign: 'center',
    marginBottom: '1.5rem'
  };

  const taglineStyle = {
    fontSize: '1rem',
    fontStyle: 'italic',
    fontWeight: '300',
    marginBottom: '0.25rem'
  };

  const brandStyle = {
    fontSize: '1.75rem',
    fontWeight: 'bold'
  };

  const sectionsContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  };

  const sectionStyle = {
    flex: '1 1 200px',
    marginBottom: '1rem'
  };

  const sectionTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.5rem'
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0.5rem'
  };

  const labelStyle = {
    fontWeight: '500'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    transition: 'all 0.3s ease'
  };

  const handleMouseEnter = (e) => {
    e.target.style.textDecoration = 'underline';
    e.target.style.color = '#dbeafe';
  };

  const handleMouseLeave = (e) => {
    e.target.style.textDecoration = 'none';
    e.target.style.color = 'white';
  };

  const copyrightContainerStyle = {
    textAlign: 'center',
    marginTop: '2rem',
    paddingTop: '1rem',
    borderTop: '1px solid rgba(147, 197, 253, 0.5)',
    opacity: 0.75,
    fontSize: '0.85rem'
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* Tagline */}
        <div style={taglineContainerStyle}>
          <p style={taglineStyle}>Where traditions meet the digital world</p>
          <h2 style={brandStyle}>ArtConnect Maroc</h2>
        </div>

        {/* Sections */}
        <div style={sectionsContainerStyle}>
          {/* Contact Left */}
          <div style={{ ...sectionStyle, textAlign: 'left' }}>
            <h3 style={sectionTitleStyle}>Contact us</h3>
            <div>
              <p style={contactItemStyle}>
                <span style={labelStyle}>Number:</span>
                <a
                  href="tel:0678987655"
                  style={linkStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  0678987655
                </a>
              </p>
              <p style={contactItemStyle}>
                <span style={labelStyle}>Email:</span>
                <a
                  href="mailto:artconnectmaroc@gmail.com"
                  style={linkStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  artconnectmaroc@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Follow Us Right */}
          <div style={{ ...sectionStyle, textAlign: 'right' }}>
            <h3 style={sectionTitleStyle}>Follow us</h3>
            <div>
              <a
                href="#"
                style={linkStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Facebook
              </a>
              <br />
              <a
                href="#"
                style={linkStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={copyrightContainerStyle}>
          <p>&copy; 2025 ArtConnect Maroc. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
