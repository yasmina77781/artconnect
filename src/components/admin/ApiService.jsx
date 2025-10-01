const API_BASE_URL = "http://localhost:3001";

// Helper générique pour les requêtes API
const apiRequest = async (endpoint, method = "GET", body = null) => {
  try {
    const options = {
      method,
      headers: { "Content-Type": "application/json" },
    };
    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Erreur ${response.status}: ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`API error on ${method} ${endpoint}:`, error);
    throw error;
  }
};

//
// --- Artworks API ---
//
export const getArtworks = () => apiRequest("/artworks");
export const createArtwork = (artwork) => apiRequest("/artworks", "POST", artwork);
export const updateArtwork = (id, artwork) => apiRequest(`/artworks/${id}`, "PUT", artwork);
export const deleteArtwork = (id) => apiRequest(`/artworks/${id}`, "DELETE");

//
// --- Artisans API ---
//
export const getArtisans = () => apiRequest("/artisans");
export const createArtisan = (artisan) => apiRequest("/artisans", "POST", artisan);
export const updateArtisan = (id, artisan) => apiRequest(`/artisans/${id}`, "PUT", artisan);
export const deleteArtisan = (id) => apiRequest(`/artisans/${id}`, "DELETE");

//
// --- Events API (optionnel) ---
//
export const getEvents = () => apiRequest("/events");
export const createEvent = (event) => apiRequest("/events", "POST", event);
export const updateEvent = (id, event) => apiRequest(`/events/${id}`, "PUT", event);
export const deleteEvent = (id) => apiRequest(`/events/${id}`, "DELETE");

//
// --- Spotlight API (optionnel) ---
//
export const getSpotlight = () => apiRequest("/spotlight");