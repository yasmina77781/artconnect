import React from "react";
import Herosection from "../components/about/Herosection"; // adapte le chemin si besoin
import Info from "../components/about/Info"; 
import Values from "../components/about/Values";
export default function About() {
  return (
    <>
      <Herosection />
      <Info />
      <Values />
    </>
  );
}