import { useState, useEffect } from "react";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import mainBg from "../assets/arr.jpg";
import morocco1 from "../assets/ses.jpg";
import morocco2 from "../assets/ers.jpg";
import morocco3 from "../assets/zellige.jpg";

const images = [
  { src: morocco1, title: "Zellij of Fes" },
  { src: morocco2, title: "Medina of Marrakech" },
  { src: morocco3, title: "Atlas Mountains" },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(timer);
  }, []);

  const styles = {
    banner: {
      position: "relative",
      width: "1100px",
      height: "350px",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "'Abril Fatface', serif",
      margin: "60px 90px 30px 0px",
      borderRadius:"30px",
    },
    mainBg: {
      position: "absolute",
      inset: 0,
      backgroundImage: `url(${mainBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.7,
      zIndex: 0,
    },
    content: {
      position: "relative",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "90%",
      zIndex: 1,
    },
    text: {
       maxWidth: "600px", // narrower than before
    color: "black",
    position: "relative",
    top: "-30px",
    }, 
    h1: { fontSize: "2rem",marginBottom: "5rem" },
    p: {
      fontFamily: "'Meddon', cursive",
      fontSize: "1.2rem",
      color: "#060606ff",
      marginBottom: "0rem",
    },
    buttons: { display: "flex", gap: "1rem" },
    btnPrimary: {
      background: "#ffd60a",
      color: "black",
      padding: "0.7rem 1.5rem",
      border: "none",
      borderRadius: "12px",
      cursor: "pointer",
      fontFamily: "'Abril Fatface', serif",
    },
    btnSecondary: {
      background: "rgba(255, 214, 10, 0.54)",
      color: "black",
      padding: "0.7rem 1.5rem",
      border: "none",
      borderRadius: "12px",
      cursor: "pointer",
      fontFamily: "'Abril Fatface', serif",
    },
    
    carousel: {
    position: "relative",
    width: "400px", // slightly smaller
    height: "250px", // slightly smaller
    perspective: "1000px",
  },
  carouselItem: (index) => {
    const offset = index - current;
    const isPrev = offset === -1 || offset === images.length - 1;
    const isNext = offset === 1 || offset === -(images.length - 1);

    return {
      position: "absolute",
      top: 0,
      left: isPrev ? "-40px" : isNext ? "40px" : "0px", // slightly adjusted
      width: "350px", // smaller image
      height: "220px", // smaller image
      backgroundImage: `url(${images[index].src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: "16px",
      transform: offset === 0 ? "scale(1)" : "scale(0.85)", // slightly smaller
      opacity: offset === 0 ? 1 : 0.5,
      transition: "all 0.7s ease-in-out",
      zIndex: offset === 0 ? 2 : 1,
      overflow: "hidden",
    };
  },

    carouselCaption: {
      position: "absolute",
      bottom: "30px",
      left: 25,
      right: 25,
      height:"20px",
      background: "rgba(208, 196, 196, 0.56)",
      color: "black",
      padding: "0.5rem 1rem",
      borderRadius: "30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    topMiniCard: {
      position: "absolute",
      top: "10px",
      left: "10px",
      background: "rgba(208, 196, 196, 0.56)",
      padding: "4px 8px",
      borderRadius: "8px",
      color: "black",
      fontSize: "0.9rem",
      cursor: "pointer",
    },
    carouselControlsBtn: {
      background: "rgba(38, 36, 36, 0.45)",
      border: "none",
      padding: "5px",
      borderRadius: "50%",
      cursor: "pointer",
    },
  };

  return (
    <section style={styles.banner}>
      <div style={styles.mainBg}></div>
      <div style={styles.content}>
        {/* LEFT TEXT */}
        <div style={styles.text}>
             <p style={styles.p}>Where tradition meets the digital world</p>
          <h1 style={styles.h1}>
            Discover Morocco’s <br /> Soul Through Art
          </h1>
         
          <div style={styles.buttons}>
            <button style={styles.btnPrimary}>Publish Your Artwork</button>
            <button style={styles.btnSecondary}>Explore by region</button>
          </div>
        </div>

        {/* RIGHT CAROUSEL */}
        <div style={styles.carousel}>
          {images.map((img, index) => (
            <div key={index} style={styles.carouselItem(index)}>
              {/* Top mini card */}
              <div style={styles.topMiniCard}>⬆ Expand</div>

              {/* Bottom caption with title and controls */}
              {index === current && (
                <div style={styles.carouselCaption}>
                  <span>{img.title}</span>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button
                      style={styles.carouselControlsBtn}
                      onClick={prevSlide}
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      style={styles.carouselControlsBtn}
                      onClick={nextSlide}
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}