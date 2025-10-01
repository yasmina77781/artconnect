import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { Heart, Calendar, MapPin } from "lucide-react";
import fetchData from "../api";
import FilterContext from "../contexte/FilterContext";
import LikesContext from "../contexte/LikesContext";

export default function InTheSpotlight() {
  const { selectedRegion, selectedCategory } = useContext(FilterContext);
  const { likedItems, toggleLike } = useContext(LikesContext);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData("spotlight").then((data) => {
      if (Array.isArray(data)) setItems(data);
    });
  }, []);

  const filtered = items.filter((item) =>
    (selectedRegion === "All Morocco" || item.city.includes(selectedRegion)) &&
    (selectedCategory === "All Categories" || item.title.includes(selectedCategory))
  );

  const handleCardClick = (id) => navigate(`/details/${id}`);

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
        {filtered.map((item) => (
          <div
            key={item.id}
            style={{
              position: "relative",
              borderRadius: "1rem",
              overflow: "hidden",
              width: "250px",
              height: "300px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onClick={() => handleCardClick(item.id)}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(/${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.1))",
              }}
            ></div>

            <div
              style={{
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
              }}
            >
              <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "0.3rem" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.8rem", lineHeight: "1.1rem", marginBottom: "0.5rem" }}>
                {item.description}
              </p>
              <div style={{ display: "flex", gap: "10px", fontSize: "0.75rem", alignItems: "center" }}>
                <Calendar size={14} />
                <span>{item.date}</span>
                <MapPin size={14} />
                <span>{item.city}</span>
              </div>
            </div>

            <div
              style={{
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
              }}
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
