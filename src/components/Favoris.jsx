import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import LikesContext from "../components/contexte/LikesContext";
import fetchData from "../components/api";

export default function Favoris() {
  const { likedItems } = useContext(LikesContext);
  const [spotlight, setSpotlight] = useState([]);
  const [artworks, setArtworks] = useState([]);
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData("spotlight").then(setSpotlight);
    fetchData("artworks").then(setArtworks);
    fetchData("events").then(setEvents);
  }, []);

  const favorisSpotlight = spotlight.filter(item => likedItems.has(item.id));
  const favorisArtworks = artworks.filter(item => likedItems.has(item.id));
  const favorisEvents = events.filter(item => likedItems.has(item.id));

  const sectionStyle = {
    marginBottom: "60px",
  };

  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "1rem",
    padding: "1rem",
    cursor: "pointer",
    background: "white",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
  };

  return (
    <section style={{ padding: "2rem", fontFamily: "'Open Sans', sans-serif" }}>
      <h2 style={{ fontSize: "2.5rem", marginBottom: "40px", fontFamily: "'Abril Fatface', serif" }}>
        Mes Favoris ❤️
      </h2>

      {/* Spotlight */}
      {favorisSpotlight.length > 0 && (
        <div style={sectionStyle}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>🎯 In The Spotlight</h3>
          <div style={gridStyle}>
            {favorisSpotlight.map((item) => (
              <div key={item.id} style={cardStyle} onClick={() => navigate(`/details/${item.id}`)}>
                <img src={`/${item.image}`} alt={item.title} style={{ width: "100%", borderRadius: "1rem", height: "200px", objectFit: "cover" }} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div style={{ display: "flex", gap: "10px", fontSize: "0.75rem", alignItems: "center" }}>
                  <Calendar size={14} />
                  <span>{item.date}</span>
                  <MapPin size={14} />
                  <span>{item.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Artworks */}
      {favorisArtworks.length > 0 && (
        <div style={sectionStyle}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>🖼️ Artworks</h3>
          <div style={gridStyle}>
            {favorisArtworks.map((art) => (
              <div key={art.id} style={cardStyle} onClick={() => navigate(`/details/${art.id}`)}>
                <img src={`/${art.image}`} alt={art.title} style={{ width: "100%", borderRadius: "1rem", height: "200px", objectFit: "cover" }} />
                <h3>{art.title}</h3>
                <p style={{ fontStyle: "italic" }}>{art.quote}</p>
                <span style={{ fontSize: "0.85rem", color: "#555" }}>{art.region}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Events */}
      {favorisEvents.length > 0 && (
        <div style={sectionStyle}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>📅 Upcoming Events</h3>
          <div style={gridStyle}>
            {favorisEvents.map((event) => (
              <div key={event.id} style={cardStyle}>
                <img src={`/${event.image}`} alt={event.title} style={{ width: "100%", borderRadius: "1rem", height: "200px", objectFit: "cover" }} />
                <h3>{event.title}</h3>
                <div style={{ display: "flex", gap: "10px", fontSize: "0.75rem", marginBottom: "0.5rem", alignItems: "center" }}>
                  <Calendar size={14} />
                  <span>{event.date}</span>
                  <Clock size={14} />
                  <span>{event.time}</span>
                </div>
                <div style={{ display: "flex", gap: "10px", fontSize: "0.75rem", alignItems: "center" }}>
                  <MapPin size={14} />
                  <span>{event.location}</span>
                  <Users size={14} />
                  <span>{event.participants ?? 0} participants</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Aucun favori */}
      {favorisSpotlight.length === 0 && favorisArtworks.length === 0 && favorisEvents.length === 0 && (
        <p style={{ textAlign: "center", fontSize: "1rem", color: "#666" }}>
          Aucun favori pour le moment. Explore et like des contenus pour les retrouver ici !
        </p>
      )}
    </section>
  );
}