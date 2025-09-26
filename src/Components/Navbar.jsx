import React from "react";
import bgImage from "../assets/Zellige.jpg";

const Navbar = () => {
  const styles = {
    navbar: {
      width: "100%",
      background: "linear-gradient(to right, #2781AB, #ffffff)",
      fontFamily: "'Scheherazade New', serif",
      padding: "5px 20px",
      display: "flex",
      alignItems: "center",
      gap: "20px",
      borderRadius: "15px",
      boxSizing: "border-box",
    },
    logoSection: {
      position: "relative", // allow overlay
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "5px 15px",
      borderRadius: "8px",
      display: "flex",
      flexDirection: "column",
      gap: "2px",
      minWidth: "180px",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.3)", // 30% opacity overlay
      borderRadius: "8px",
      zIndex: 1,
    },
    logoText: {
      position: "relative",
      zIndex: 2,
      margin: 0,
      fontSize: "20px",
      color: "#fff",
    },
    description: {
      position: "relative",
      zIndex: 2,
      margin: 0,
      fontSize: "10px",
      color: "#f0f0f0",
    },
    navLinks: {
      display: "flex",
      alignItems: "center",
      gap: "65px",
      flexWrap: "wrap",
      marginLeft: "450px",
    },
    navItem: {
      color: "black",
      cursor: "pointer",
      fontSize: "18px",
    },
    homeButton: {
      backgroundColor: "#D9D9D9",
      color: "black",
      border: "none",
      padding: "5px 10px",
      borderRadius: "20px",
      cursor: "pointer",
      fontSize: "14px",
    },
    adminButton: {
      backgroundColor: "black",
      color: "white",
      border: "none",
      padding: "5px 10px",
      borderRadius: "20px",
      cursor: "pointer",
      fontSize: "14px",
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logoSection}>
        <div style={styles.overlay}></div>
        <h1 style={styles.logoText}>ARTCONNECT MAROC</h1>
        <p style={styles.description}>HERITAGE CRAFT SOUND SPACE</p>
      </div>
      <div style={styles.navLinks}>
        <button style={styles.homeButton}>HOME</button>
        <span style={styles.navItem}>Publish</span>
        <span style={styles.navItem}>Favorites</span>
        <span style={styles.navItem}>About</span>
        <button style={styles.adminButton}>Admin</button>
      </div>
    </nav>
  );
};

export default Navbar;