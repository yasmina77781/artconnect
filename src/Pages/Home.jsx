import React, { useState } from "react";
import Banner from "../Components/Banner";
import Research from "../Components/Research";
import InTheSpotlight from "../Components/InTheSpotlightCards";
import Categories from "../Components/Categories";
import Artworks from "../Components/Artworks";
import UpcomingEvents from "../Components/UpcomingEvents";
import ArtisanOfTheMonth from "../Components/ArtisantOfthemonth";

const Home = () => {
  // Filters state
  const [selectedRegion, setSelectedRegion] = useState("All Morocco");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  return (
    <div className="container">
      <Banner />

      {/* Research Filters */}
      <Research
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Cards / Components receiving filters */}
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