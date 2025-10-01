import { Routes, Route } from "react-router"; // ✅ Corriger l'import
import Home from "./Pages/Home";
import Publish from "./Pages/Publish";
import Favorites from "./Pages/Favorite";
import About from "./Pages/About";
import Admin from "./Pages/AdminDashboard";
import DetailsPage from "./components/home/DetailsPage";
import { FilterProvider } from "./components/contexte/FilterContext";
import { LikesProvider } from "./components/contexte/LikesContext"; // ✅ Corriger ici
import Navbar from "./components/footnav/Navbar";
import Footer from "./components/footnav/Footer";

function App() {
  return (
    <FilterProvider>
      <LikesProvider> {/* ✅ Fournit le contexte avec value */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
        <Footer />
      </LikesProvider>
    </FilterProvider>
  );
}

export default App;