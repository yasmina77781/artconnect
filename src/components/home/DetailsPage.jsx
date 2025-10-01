import React, { useEffect, useState } from "react";
import { useParams } from "react-router"; // ✅ Corriger l'import
import fetchData from "../api";

const DetailsPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetchData("artworks").then((data) => {
      const found = data.find((el) => el.id === parseInt(id));
      setItem(found);
    });
  }, [id]);

  if (!item) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Loading artwork details...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center font-serif">{item.title}</h1>

      <div className="rounded-xl overflow-hidden shadow-lg mb-8">
        <img
          src={`/${item.image}`}
          alt={item.title}
          className="w-full h-[500px] object-cover"
        />
      </div>

      <div className="text-center">
        <p className="text-xl italic text-gray-700 mb-4">"{item.quote}"</p>
        <span className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">
          Region: {item.region}
        </span>
      </div>
    </div>
  );
};

export default DetailsPage;