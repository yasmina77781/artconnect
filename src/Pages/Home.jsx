import React, { useState } from "react";
import Banner from "../Components/home/Banner";
import Research from "../Components/home/Research";
import InTheSpotlight from "../Components/home/InTheSpotlightCards";
import Categories from "../Components/home/Categories";
import Artworks from "../Components/home/Artworks";
import UpcomingEvents from "../Components/home/UpcomingEvents";
import ArtisanOfTheMonth from "../Components/home/ArtisantOfthemonth";

const Home = () => {
  // État des filtres
  const [selectedRegion, setSelectedRegion] = useState("All Morocco");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  return (
    <div className="container mx-auto px-4">
      {/* Bannière d’accueil */}
      <Banner />

      {/* Filtres de recherche */}
      <Research
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Composants filtrés */}
      <InTheSpotlight
        selectedRegion={selectedRegion}
        selectedCategory={selectedCategory}
      />

      <Categories
        selectedRegion={selectedRegion}
        selectedCategory={selectedCategory}
      />

      <Artworks
        selectedRegion={selectedRegion}
        selectedCategory={selectedCategory}
      />

      <UpcomingEvents
        selectedRegion={selectedRegion}
        selectedCategory={selectedCategory}
      />

      <ArtisanOfTheMonth
        selectedRegion={selectedRegion}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default Home;