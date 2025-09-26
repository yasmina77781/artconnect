import React from "react";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const footerStyle = {
    background: "linear-gradient(to right, #1e3a8a, #3b82f6)", // navy → blue
    color: "white",
    padding: "3rem 1.5rem 2rem",
    fontFamily: "Arial, sans-serif",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "2rem",
  };

  const sectionStyle = {
    flex: "1 1 250px",
    minWidth: "200px",
  };

  const brandStyle = {
    fontSize: "1.8rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  };

  const taglineStyle = {
    fontSize: "1rem",
    fontStyle: "italic",
    opacity: 0.85,
    marginBottom: "1rem",
  };

  const sectionTitleStyle = {
    fontSize: "1.25rem",
    fontWeight: "600",
    marginBottom: "0.75rem",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    marginBottom: "0.5rem",
    transition: "all 0.3s ease",
  };

  const linkHover = (e) => {
    e.target.style.color = "#dbeafe";
  };

  const linkLeave = (e) => {
    e.target.style.color = "white";
  };

  const copyrightStyle = {
    textAlign: "center",
    marginTop: "2rem",
    paddingTop: "1rem",
    borderTop: "1px solid rgba(255,255,255,0.2)",
    opacity: 0.7,
    fontSize: "0.85rem",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* Brand + Tagline */}
        <div style={sectionStyle}>
          <h2 style={brandStyle}>ArtConnect Maroc</h2>
          <p style={taglineStyle}>Where traditions meet the digital world</p>
        </div>

        {/* Contact */}
        <div style={sectionStyle}>
          <h3 style={sectionTitleStyle}>Contact us</h3>
          <a
            href="tel:0678987655"
            style={linkStyle}
            onMouseEnter={linkHover}
            onMouseLeave={linkLeave}
          >
            <Phone size={18} /> 0678987655
          </a>
          <a
            href="mailto:artconnectmaroc@gmail.com"
            style={linkStyle}
            onMouseEnter={linkHover}
            onMouseLeave={linkLeave}
          >
            <Mail size={18} /> artconnectmaroc@gmail.com
          </a>
        </div>

        {/* Social Media */}
        <div style={sectionStyle}>
          <h3 style={sectionTitleStyle}>Follow us</h3>
          <a
            href="#"
            style={linkStyle}
            onMouseEnter={linkHover}
            onMouseLeave={linkLeave}
          >
            <Facebook size={18} /> Facebook
          </a>
          <a
            href="#"
            style={linkStyle}
            onMouseEnter={linkHover}
            onMouseLeave={linkLeave}
          >
            <Instagram size={18} /> Instagram
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div style={copyrightStyle}>
        <p>&copy; 2025 ArtConnect Maroc. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
