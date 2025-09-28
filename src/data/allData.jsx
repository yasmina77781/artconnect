// src/data/allData.js

// --- Import Images ---
import Categzellige from '../assets/Categzellige.jpg';
import Categcarpets from '../assets/Categcarpets.jpg';
import Categjewlery from '../assets/Categjewlery.jpg';
import Categpoterry from '../assets/Categpoterry.jpg';
import Categwoodwork from '../assets/Categwoodwork.jpg';
import ARTJEWLERY from '../assets/ARTJEWLERY.jpg';
import ARTCARPET from '../assets/ARTCARPET.jpg';
import ARTWOOD from '../assets/ARTWOOD.jpg';
import ARTPOTTERY from '../assets/ARTPOTTERY.jpg';
import ARTMOSAIC from '../assets/ARTMOSAIC.jpg';
import EVENTATLASEMELSHIL from '../assets/EVENTATLASEMELSHIL.jpg';
import EVENTGNAWA from '../assets/EVENTGNAWA.jpg';
import EVENTPAINTING from '../assets/EVENTPAINTING.jpg';
import EVENTTARAB from '../assets/EVENTTARAB.jpg';
import EVENT3AYTA from '../assets/EVENT3AYTA.jpg';

// --- Placeholder Images for Details Page ---
const placeholder1 = "https://images.unsplash.com/photo-1599229849844-143e3323c035?q=80&w=1932&auto=format&fit=crop";
const placeholder2 = "https://images.unsplash.com/photo-1555427183-59d185f3dd2c?q=80&w=1964&auto=format&fit=crop";
const placeholder3 = "https://images.unsplash.com/photo-1623250613296-a83a82681531?q=80&w=1887&auto=format&fit=crop";
const placeholder4 = "https://images.unsplash.com/photo-1528233355217-151315d1991d?q=80&w=1935&auto=format&fit=crop";


export const allItems = [
    // ==========================================================
    // --- NEW: Items from InTheSpotlightCards.jsx (IDs 1-4) ---
    // ==========================================================
    {
      id: 1,
      image: Categcarpets,
      title: "Woven Dreams - The Art of Carpets",
      bigTopic: "Moroccan carpets are more than just floor coverings; they are a vibrant expression of cultural identity, woven with stories, symbols, and generations of artistic heritage.",
      city: "Fès",
      category: "Carpets",
      component: "InTheSpotlight",
      contentSections: [
        {
          heading: "A Tapestry of History",
          paragraphs: [
            {
              text: "In the bustling medina of Fès, the tradition of carpet weaving is a living art form. Artisans use high-quality wool from the Atlas Mountains and natural dyes made from local plants and minerals. Each knot is tied by hand, a meticulous process that can take months to complete, resulting in a piece that is both incredibly durable and deeply personal.",
              image: placeholder3,
              imageAlt: "A woman weaving a colorful carpet on a traditional loom.",
            },
            {
              text: "The geometric patterns found in Berber carpets are a symbolic language passed down through generations. Diamonds, zigzags, and chevron motifs can represent femininity, protection against the evil eye, or major life events. A single carpet can tell the story of a family's history, beliefs, and hopes for the future.",
              image: placeholder2,
              imageAlt: "A close-up of intricate geometric patterns on a Moroccan rug.",
            }
          ]
        }
      ],
      opinions: [
        { user: "Wanderlust_Anna", rating: 5, comment: "The soul of Morocco is in these carpets. The colors are so rich and the quality is amazing." },
        { user: "David R.", rating: 5, comment: "I learned so much about the symbolism from a weaver in Fès. It's not just a rug, it's a story." },
      ]
    },
    {
      id: 2,
      image: Categwoodwork,
      title: "Cedar Craft - The Scent of Meknès",
      bigTopic: "The aromatic scent of carved cedar and Thuya wood fills the workshops of Meknès, where master craftsmen transform raw timber into intricate works of functional art.",
      city: "Meknès",
      category: "Woodwork",
      component: "InTheSpotlight",
      contentSections: [
        {
          heading: "Carved from Tradition",
          paragraphs: [
            {
              text: "Meknès is a historic center for Moroccan woodwork, a craft prized for its beauty and complexity. Artisans use hand tools to meticulously carve elaborate geometric and floral patterns into doors, ceilings, furniture, and decorative boxes. The fragrant Thuya wood, with its unique burl patterns, is especially sought after and is native to the nearby Essaouira region.",
              image: placeholder4,
              imageAlt: "A craftsman carving an intricate design into a piece of cedar wood.",
            },
          ]
        }
      ],
      opinions: [
        { user: "DesignFan", rating: 5, comment: "I bought a small Thuya wood box and the smell is incredible. The craftsmanship is flawless." },
      ]
    },
    {
      id: 3,
      image: ARTJEWLERY,
      title: "Amazigh Legacy - Jewelry & Silverwork",
      bigTopic: "Traditional Amazigh (Berber) jewelry is a powerful statement of identity and heritage, crafted from silver and adorned with symbols of protection, spirituality, and status.",
      city: "Atlas Mountains",
      category: "Jewelry",
      component: "InTheSpotlight",
      contentSections: [],
      opinions: []
    },
    {
      id: 4,
      image: EVENT3AYTA,
      title: "The Aayta Festival - Soul of the Plains",
      bigTopic: "The Aayta is a powerful and poetic form of Moroccan folk music, a raw 'cry' or 'call' that tells stories of love, nature, and social history from the heart of the Atlantic plains.",
      city: "Casablanca",
      category: "Festival",
      component: "InTheSpotlight",
      contentSections: [],
      opinions: []
    },
    
    // ==========================================================
    // --- Existing Items (Categories, Artworks, Events) ---
    // ==========================================================
    { 
      id: 11, 
      image: Categpoterry, 
      title: "Golden Clay of Safi", 
      bigTopic: "Moroccan pottery tells stories through hand-shaped clay, blending tradition, culture, and beauty. Safi is famous for its colorful ceramics, still made by artisans using centuries-old techniques.", 
      city: "Safi",
      category: "Pottery",
      contentSections: [
        {
          heading: "The Heart of Moroccan Ceramics",
          paragraphs: [
            { text: "Safi is not just a city; it is the beating heart of Morocco's ceramic artistry. For centuries, artisans have passed down the intricate techniques of shaping, painting, and glazing. The local clay, rich in iron and other minerals, gives Safi pottery its characteristic strength and reddish hue.", image: placeholder1, imageAlt: "A potter shaping clay on a wheel in Safi." },
            { text: "The vibrant, intricate patterns found on Safi ceramics are more than just decoration; they are a language of symbols. Geometric designs, floral motifs, and calligraphic strokes often carry influences from Berber, Arab, and Andalusian cultures.", image: placeholder2, imageAlt: "A collection of colorful, hand-painted Safi plates." },
          ]
        }
      ],
      opinions: [
        { user: "ArtLover22", rating: 5, comment: "Absolutely stunning craftsmanship. The details are incredible!" },
        { user: "Hassan M.", rating: 4, comment: "Bought a tagine from Safi, it cooks beautifully and looks amazing." },
      ]
    },
    { 
      id: 12, 
      image: Categcarpets, 
      title: "Woven Dreams of Fes", 
      bigTopic: "Moroccan carpets are woven with skill and passion, creating patterns full of history. Fès is renowned for its vibrant handwoven carpets that reflect local heritage and artistry.", 
      city: "Fes",
      category: "Carpets",
      contentSections: [
         {
          heading: "A Tapestry of History",
          paragraphs: [
            { text: "The weavers of Fes create more than just floor coverings; they weave stories into every knot. Using high-quality wool from the Atlas Mountains, these artisans employ ancient techniques to produce carpets known for their durability and softness.", image: placeholder3, imageAlt: "A woman weaving a colorful carpet on a traditional loom." },
          ]
        }
      ],
      opinions: [ { user: "Sara K.", rating: 5, comment: "The quality of the wool is unmatched. A true piece of art for my home." } ]
    },
    { id: 13, image: Categjewlery, title: "Silver Whispers", bigTopic: "Jewelry in Morocco is a delicate art...", city: "Marrakech", category: "Jewelry", contentSections: [], opinions: [] },
    { id: 14, image: Categzellige, title: "Mosaic Magic", bigTopic: "Zellige tiles showcase Moroccan mastery...", city: "Fes", category: "Zellige", contentSections: [], opinions: [] },
    { id: 15, image: Categwoodwork, title: "Cedar Craft", bigTopic: "Woodwork transforms cedar into treasures...", city: "Meknes", category: "Woodwork", contentSections: [], opinions: [] },
    { id: 21, image: ARTJEWLERY, title: "Jewelry & Silverwork", bigTopic: "Traditional Amazigh (Berber) jewelry is a profound expression of identity, crafted from silver, enamel, and semi-precious stones.", famousRegions: "Atlas Mountains, Marrakech souks", city: "Marrakech", category: "Jewelry", contentSections: [], opinions: [] },
    { id: 22, image: ARTCARPET, title: "Moroccan Carpets", bigTopic: "Handwoven wool rugs with traditional Berber patterns, each telling a unique story through intricate designs and vibrant colors.", famousRegions: "Beni Ourain (Atlas Mountains), Azilal, Marrakech", city: "Marrakech", category: "Carpets", contentSections: [], opinions: [] },
    { id: 23, image: ARTWOOD, title: "Woodwork & Carving", bigTopic: "Carved cedar and Thuya wood furniture, doors, and boxes showcase the exceptional skill of Moroccan woodworkers.", famousRegions: "Marrakech, Fès, Essaouira", city: "Essaouira", category: "Woodwork", contentSections: [], opinions: [] },
    { id: 32, title: "Festival Gnawa", bigTopic: "Experience the magical sunset vibes of Essaouira with entrancing live music and delicious local food at the world-renowned Gnawa Festival.", location: "Essaouira", city: "Essaouira", category: "Festival", image: EVENTGNAWA, contentSections: [], opinions: [] },
    { id: 24, image: ARTPOTTERY, title: "Pottery & Ceramics", bigTopic: "Handmade pottery in bright colors.", city: "Safi", category: "Pottery", contentSections: [], opinions: [] },
    { id: 25, image: ARTMOSAIC, title: "Zellige: Mosaic Tiles", bigTopic: "Hand-cut, colorful geometric tiles.", city: "Fes", category: "Zellige", contentSections: [], opinions: [] },
    { id: 31, title: "Emelshil Marriages", bigTopic: "An epic mountain hiking experience...", city: "Atlas Mountains", category: "Festival", image: EVENTATLASEMELSHIL, contentSections: [], opinions: [] },
    { id: 33, title: "Painting Museum", bigTopic: "Capture the essence of city life...", city: "Rabat", category: "Art", image: EVENTPAINTING, contentSections: [], opinions: [] },
    { id: 34, title: "Tarab Alandalousi", bigTopic: "Disconnect from the world...", city: "Fes", category: "Ceremony", image: EVENTTARAB, contentSections: [], opinions: [] },
    { id: 35, title: "Aayta Night", bigTopic: "Marvel at the cosmos...", city: "Casablanca", category: "Festival", image: EVENT3AYTA, contentSections: [], opinions: [] }
];