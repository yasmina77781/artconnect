import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import DetailsPage from "./Components/DetailsPage";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;