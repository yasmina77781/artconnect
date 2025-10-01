import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import mainBg from "/arr.jpg?url";
import fetchData from "../api";

export default function Banner() {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetchData("bannerImages").then((data) => {
      if (Array.isArray(data)) setImages(data);
    });
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    if (images.length === 0) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [images]);

  const styles = {
    banner: {
      position: "relative",
      width: "100%",
      height: "100vh",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "'Abril Fatface', serif",
      borderRadius: "30px",
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
      maxWidth: "600px",
      color: "black",
      position: "relative",
      top: "-30px",
    },
    h1: { fontSize: "2rem", marginBottom: "5rem" },
    p: {
      fontFamily: "'Meddon', cursive",
      fontSize: "1.2rem",
      color: "#060606",
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
      width: "400px",
      height: "250px",
      perspective: "1000px",
    },
    carouselItem: (index) => {
      const offset = index - current;
      const isPrev = offset === -1 || offset === images.length - 1;
      const isNext = offset === 1 || offset === -(images.length - 1);

      return {
        position: "absolute",
        top: 0,
        left: isPrev ? "-40px" : isNext ? "40px" : "0px",
        width: "350px",
        height: "220px",
        backgroundImage: `url(/${images[index]?.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "16px",
        transform: offset === 0 ? "scale(1)" : "scale(0.85)",
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
              <div style={styles.topMiniCard}>⬆ Expand</div>
              {index === current && (
                <div style={styles.carouselCaption}>
                  <span>{img.title}</span>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button style={styles.carouselControlsBtn} onClick={prevSlide}>
                      <ChevronLeft size={18} />
                    </button>
                    <button style={styles.carouselControlsBtn} onClick={nextSlide}>
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