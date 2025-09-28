import React, { useState } from "react";
import Banner from "../Components/Banner";
import Research from "../Components/Research";
import FilteredResults from "../Components/FilteredResults.jsx";
import InTheSpotlight from "../Components/InTheSpotlightCards";
import Categories from "../Components/Categories";
import Artworks from "../Components/Artworks";
import UpcomingEvents from "../Components/UpcomingEvents";
import ArtisanOfTheMonth from "../Components/ArtisantOfthemonth";

const Home = () => {
  const [selectedRegion, setSelectedRegion] = useState("All Morocco");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  // A simple boolean to check if any filter is active
  const isFiltered = selectedRegion !== "All Morocco" || selectedCategory !== "All Categories";

  return (
    <div className="container">
      <Banner />
      <Research
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* If a filter is active, show the results grid */}
      {isFiltered && (
        <FilteredResults
          selectedRegion={selectedRegion}
          selectedCategory={selectedCategory}
        />
      )}

      {/* If NO filter is active, show the original carousels */}
      {!isFiltered && (
        <>
          <InTheSpotlight />
          <Categories selectedRegion="All Morocco" selectedCategory="All Categories" />
          <Artworks selectedRegion="All Morocco" selectedCategory="All Categories" />
          <UpcomingEvents selectedRegion="All Morocco" selectedCategory="All Categories" />
          <ArtisanOfTheMonth />
        </>
      )}
    </div>
  );
};

export default Home;