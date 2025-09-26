import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Calendar, MapPin } from "lucide-react";
import Categcarpets from "../assets/Categcarpets.jpg";
import Categwoodwork from '../assets/Categwoodwork.jpg';
import ARTJEWLERY from '../assets/ARTJEWLERY.jpg';
import EVENT3AYTA from '../assets/EVENT3AYTA.jpg';


const spotlightItems = [
  {
    id: 1,
    title: "Woven Dreams",
    description: "Moroccan carpets are woven with skill and passion, creating patterns full of history. Fès is renowned for its vibrant handwoven carpets that reflect local heritage and artistry.",
    image:Categcarpets ,
    date: "2025-10-10",
    city: "Fés",
  },
  {
    id: 2,
    title: "Cedar Craft",
    description: "Woodwork transforms cedar into functional and decorative treasures, keeping Moroccan traditions alive. Meknès is known for its intricate carvings and ornate furniture made by hand.",
    image: Categwoodwork,
    date: "2025-10-15",
    city: "Méknes",
  },
  {
    id: 3,
    title: "Jewelry & Silverwork",
    description: "Traditional Amazigh (Berber) jewelry made of silver, enamel, and gemstones.",
    image:ARTJEWLERY,
    date: "2025-10-20",
    city: "Atlas Mountains, Marrakech souks",
  },
  {
    id: 4,
    title: "Aayta Festival",
    description: "Intricate silver and gold jewelry, showcasing the rich heritage of craftsmanship.",
    image: EVENT3AYTA,
    date: "2025-10-25",
    city: "Casablanca",
  },
];

export default function InTheSpotlight() {
  const [likedItems, setLikedItems] = useState(new Set());
  const navigate = useNavigate();

  const handleCardClick = (id) => navigate(`/details/${id}`);
  const toggleLike = (id) => {
    setLikedItems((prev) => {
      const newSet = new Set(prev);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  };

  const cardStyle = {
    position: "relative",
    borderRadius: "1rem",
    overflow: "hidden",
    width: "250px",
    height: "300px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    cursor: "pointer",
    transition: "transform 0.3s ease",
  };

  const backgroundStyle = (image) => ({
    position: "absolute",
    inset: 0,
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  });

  const overlayStyle = {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.1))",
  };

  const contentStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "1rem",
    color: "white",
    backdropFilter: "blur(3px)",
    backgroundColor: "rgba(0,0,0,0.25)",
    borderTopLeftRadius: "1rem",
    borderTopRightRadius: "1rem",
  };

  const titleStyle = {
    fontSize: "1.1rem",
    fontWeight: "bold",
    marginBottom: "0.3rem",
  };

  const descStyle = {
    fontSize: "0.8rem",
    lineHeight: "1.1rem",
    marginBottom: "0.5rem",
  };

  const metaStyle = {
    display: "flex",
    gap: "10px",
    fontSize: "0.75rem",
    alignItems: "center",
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
  };

  return (
    <section style={{ width: "95%", margin: "90px 0px", fontFamily: "'Open Sans', sans-serif" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "25px", fontFamily: "'Abril Fatface', serif" }}>
        In The Spotlight
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          justifyItems: "center",
        }}
      >
        {spotlightItems.map((item) => (
          <div key={item.id} style={cardStyle} onClick={() => handleCardClick(item.id)}>
            <div style={backgroundStyle(item.image)}></div>
            <div style={overlayStyle}></div>

            <div style={contentStyle}>
              <h3 style={titleStyle}>{item.title}</h3>
              <p style={descStyle}>{item.description}</p>
              <div style={metaStyle}>
                <Calendar size={14} />
                <span>{item.date}</span>
                <MapPin size={14} />
                <span>{item.city}</span>
              </div>
            </div>

            <div
              style={heartStyle}
              onClick={(e) => {
                e.stopPropagation();
                toggleLike(item.id);
              }}
            >
              <Heart
                size={22}
                color={likedItems.has(item.id) ? "#ef4444" : "white"}
                fill={likedItems.has(item.id) ? "#ef4444" : "none"}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}