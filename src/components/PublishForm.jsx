import React, { useState } from "react";

export default function PublishForm() {
  const [title, setTitle] = useState("");
  const [region, setRegion] = useState("");
  const [category, setCategory] = useState("Art");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  // Charger l’image et afficher preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  // Soumettre le formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    const newArtwork = {
      title,
      region,
      category,
      description,
      image: preview, // on enregistre le base64 localement
    };
    console.log("Artwork submitted:", newArtwork);

    // si tu veux sauvegarder dans JSON server :
    fetch("http://localhost:3000/artworks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newArtwork),
    }).then(response => {
        if (response.ok) {
            console.log("Artwork submitted:", newArtwork);
            alert("Artwork published successfully! 🎉");
            handleClear();
        } else {
            alert("Error during submission.");
        }
    })
    .catch(error => {
        console.error("Network error:", error);
        alert("Could not connect to the server.");
    });
  }

  const handleClear = () => {
    setTitle("");
    setRegion("");
    setCategory("Art");
    setDescription("");
    setImage(null);
    setPreview(null);
  };

  
   return (
    
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      
      
      <div className="relative bg-[url('/mosaic.jpg')] bg-cover bg-center p-8 rounded-2xl shadow-xl max-w-5xl w-full">
        
       
        <div className="absolute inset-0 bg-white/70 rounded-2xl z-0"></div>

        
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-red-900 mb-2">Publish Artwork</h2>
          <p className="text-sm text-gray-700 mb-6">
            Share a piece of Moroccan heritage. Your submission appears instantly on
            Home and Admin. This is a local demo—no external upload.
          </p>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
           
            <div className="space-y-4">
             
              <div>
                <label className="block font-semibold text-red-900 mb-1">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-2 rounded-lg border border-gray-300 bg-white/70 focus:outline-none focus:ring-2 focus:ring-red-800"
                  placeholder="Enter title..."
                />
              </div>

             
              <div className="grid grid-cols-2 gap-4">
                 <div>
                    <label className="block font-semibold text-red-900 mb-1">Region</label>
                    <select
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                      className="w-full p-2 rounded-lg border border-gray-300 bg-white/70 focus:outline-none focus:ring-2 focus:ring-red-800"
                    >
                      <option value="">Choose a region</option>
                      <option value="Marrakech">Marrakech</option>
                      <option value="Fes">Fes</option>
                      <option value="Casablanca">Casablanca</option>
                      <option value="Rabat">Rabat</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-semibold text-red-900 mb-1">Category</label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full p-2 rounded-lg border border-gray-300 bg-white/70 focus:outline-none focus:ring-2 focus:ring-red-800"
                    >
                      <option value="Art">Art</option>
                      <option value="Craft">Craft</option>
                      <option value="Music">Music</option>
                      <option value="Food">Food</option>
                    </select>
                  </div>
              </div>

              
              <div>
                <label className="block font-semibold text-red-900 mb-1">
                  Short Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2 rounded-lg border border-gray-300 bg-white/70 focus:outline-none focus:ring-2 focus:ring-red-800"
                  rows="6"
                  placeholder="Tell the story behind it..."
                />
              </div>
            </div>

           
            <div className="flex flex-col space-y-4">
             
              <div>
                <label className="block font-semibold text-red-900 mb-1">Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-red-100 file:text-red-900 hover:file:bg-red-200"
                />
              </div>

              {/* Preview */}
              <div className="flex-1 flex items-center justify-center border-2 border-dashed border-gray-400 rounded-lg bg-white/70 p-2">
                {preview ? (
                  <img
                    src={preview}
                    alt="preview"
                    className="max-h-60 w-auto object-contain rounded-md"
                  />
                ) : (
                  <p className="text-gray-600 text-center">Preview will appear here</p>
                )}
              </div>

              {/* Boutons */}
              <div className="flex gap-4 justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-red-900 text-white font-semibold hover:bg-red-800 transition-colors"
                >
                  Publish
                </button>
                <button
                  type="button"
                  onClick={handleClear}
                  className="px-6 py-2 rounded-lg bg-[#9A3B3B] text-white font-semibold hover:bg-[#7d2f2f] transition-colors"
                >
                  Clear
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
