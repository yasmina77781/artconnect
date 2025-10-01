import React, { useEffect, useState, useContext } from "react";
import fetchData from "../api";
import FilterContext from "../contexte/FilterContext";
import LikesContext from "../contexte/LikesContext";
import { Heart } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Artworks = () => {
  const { selectedRegion, selectedCategory } = useContext(FilterContext);
  const { likedItems, toggleLike } = useContext(LikesContext);
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetchData("artworks").then((data) => {
      const filtered = data.filter(
        (art) =>
          (selectedRegion === "All Morocco" || art.region.includes(selectedRegion)) &&
          (selectedCategory === "All Categories" || art.title.includes(selectedCategory))
      );
      setArtworks(filtered);
    });
  }, [selectedRegion, selectedCategory]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="px-8 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">🎨 Artworks Gallery</h2>

      {artworks.length > 0 ? (
        <Slider {...settings}>
          {artworks.map((art) => (
            <div key={art.id} className="px-3">
              <div className="relative bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={`/${art.image}`}
                  alt={art.title}
                  className="w-full h-64 object-cover"
                />

                {/* Bouton Like */}
                <button
                  className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white bg-opacity-70 border border-gray-300 flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(art.id);
                  }}
                  aria-label={likedItems.has(art.id) ? "Retirer des favoris" : "Ajouter aux favoris"}
                >
                  <Heart
                    size={20}
                    color={likedItems.has(art.id) ? "#ef4444" : "#374151"}
                    fill={likedItems.has(art.id) ? "#ef4444" : "none"}
                  />
                </button>

                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">{art.title}</h3>
                  <p className="text-gray-600 mt-2 italic">"{art.quote}"</p>
                  <span className="inline-block mt-4 text-sm bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
                    {art.region}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center text-gray-500">No artworks found.</p>
      )}
    </div>
  );
};

export default Artworks;