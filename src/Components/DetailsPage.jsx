import React from "react";
import { useParams } from "react-router-dom";

// This is your data, now with more detailed content for each item, including paragraphs with image/GIF placeholders.
const allItemsData = [
  {
    id: 1,
    title: "The Timeless Art of Moroccan Pottery",
    bigTopic: "Moroccan pottery is more than just a craft; it's a vibrant expression of culture, history, and the skilled hands that bring clay to life. From the bustling souks of Fes to the quiet workshops in Safi, each piece tells a story of ancient traditions and unique artistic heritage.",
    contentSections: [
      {
        heading: "A Glimpse into History",
        paragraphs: [
          {
            text: "Moroccan pottery dates back centuries, influenced by various civilizations including Berber, Roman, and Islamic cultures. The earliest forms were simple and functional, evolving over time into the sophisticated and decorative pieces we see today.",
            image: "https://via.placeholder.com/600x400.png?text=Ancient+Pottery+Exhibit",
            imageAlt: "Ancient Moroccan Pottery Exhibit",
          },
          {
            text: "Fes, often considered the heart of Moroccan ceramics, is renowned for its iconic blue and white Fassi pottery. This distinct style is characterized by intricate geometric patterns, floral motifs, and calligraphic details, reflecting a rich artistic legacy passed down through generations.",
            image: "https://media.giphy.com/media/l4pTcUfVdGz7bW9wQ/giphy.gif", // Placeholder for a GIF
            imageAlt: "Pottery wheel in action",
            isAnimated: true,
          },
        ],
      },
      {
        heading: "Craftsmanship and Techniques",
        paragraphs: [
          {
            text: "The creation of Moroccan pottery is a meticulous process. It begins with local clay, often sourced from riverbeds, which is then hand-shaped on a traditional foot-powered wheel. Potters, or 'maalems,' display incredible dexterity and precision.",
            image: "https://via.placeholder.com/600x400.png?text=Potter+at+Work",
            imageAlt: "Moroccan Potter Shaping Clay",
          },
          {
            text: "After shaping, the pieces are left to dry and then fired in traditional kilns. The intricate decoration is often applied by hand, with artisans using fine brushes to paint patterns before a final glazing and firing process, resulting in the brilliant, glossy finish.",
            image: "https://via.placeholder.com/600x400.png?text=Decorating+Ceramics",
            imageAlt: "Artisan Decorating Moroccan Ceramics",
          },
        ],
      },
      {
        heading: "Modern Interpretations and Cultural Impact",
        paragraphs: [
          {
            text: "While traditions are upheld, modern Moroccan potters also experiment with contemporary designs, colors, and forms, blending the old with the new. This ensures the craft remains relevant and continues to captivate global audiences.",
            image: "https://media.giphy.com/media/l4pTcUk8h6cT4WjN6/giphy.gif", // Another GIF placeholder
            imageAlt: "Modern Moroccan Pottery",
            isAnimated: true,
          },
          {
            text: "Moroccan pottery serves not only as beautiful decor but also plays a vital role in everyday life, from serving tagines to holding water. It's a testament to the enduring beauty and utility of handmade art.",
            image: "https://via.placeholder.com/600x400.png?text=Pottery+in+Moroccan+Home",
            imageAlt: "Moroccan Pottery in a Home Setting",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Berber Carpets: Woven Stories of the Atlas",
    bigTopic: "Berber carpets, originating from the indigenous Berber tribes of Morocco, are far more than floor coverings. They are intricate works of art, rich in symbolism, history, and the soul of the women who painstakingly weave them.",
    contentSections: [
      {
        heading: "Ancient Roots and Tribal Heritage",
        paragraphs: [
          {
            text: "The tradition of Berber carpet weaving is ancient, predating the Arab conquests of North Africa. Each rug is a unique narrative, reflecting the weaver's personal experiences, tribal identity, and beliefs through abstract patterns and vibrant colors.",
            image: "https://via.placeholder.com/600x400.png?text=Berber+Woman+Weaving",
            imageAlt: "Berber Woman Weaving Carpet",
          },
          {
            text: "These carpets were originally crafted for practical purposes: warmth, sleeping mats, and even saddles. Their dense pile and natural wool made them perfect for the harsh conditions of the Atlas Mountains.",
            image: "https://media.giphy.com/media/l4pTcXmJt7F7Qn6rQ/giphy.gif", // GIF Placeholder
            imageAlt: "Sheep wool preparation",
            isAnimated: true,
          },
        ],
      },
      {
        heading: "Symbolism in Every Knot",
        paragraphs: [
          {
            text: "Every motif in a Berber carpet carries meaning. Diamonds often represent femininity and fertility, zigzags symbolize water or serpents, and crosses offer protection. They are a visual language passed down through generations.",
            image: "https://via.placeholder.com/600x400.png?text=Carpet+Motifs+Detail",
            imageAlt: "Detailed Berber Carpet Motifs",
          },
          {
            text: "The wool itself is typically hand-spun and dyed with natural pigments derived from plants, insects, and minerals, resulting in a stunning palette of earthy tones and bold accents that evolve beautifully with age.",
            image: "https://via.placeholder.com/600x400.png?text=Natural+Dyes+for+Wool",
            imageAlt: "Natural Dyes for Carpet Wool",
          },
        ],
      },
      {
        heading: "Types of Berber Carpets",
        paragraphs: [
          {
            text: "There are various types, each named after the tribe or region of origin. Beni Ourain carpets are famous for their minimalist design with black geometric patterns on a cream background, while Azilal rugs are known for their vibrant colors and abstract designs.",
            image: "https://via.placeholder.com/600x400.png?text=Beni+Ourain+Carpet+Example",
            imageAlt: "Example of a Beni Ourain Carpet",
          },
          {
            text: "Boucherouite rugs are distinct, made from recycled fabrics and scraps, creating colorful, bohemian pieces that are a testament to resourcefulness and artistic freedom. They are truly one-of-a-kind expressions.",
            image: "https://media.giphy.com/media/l4pTcV8d8iN7Q6wQ/giphy.gif", // Another GIF placeholder
            imageAlt: "Close-up of a Boucherouite Rug",
            isAnimated: true,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Argan Oil: Morocco's Liquid Gold",
    bigTopic: "Argan oil, often dubbed 'liquid gold,' is a precious commodity derived from the kernels of the argan tree, native only to Morocco. Renowned for its culinary and cosmetic benefits, it's a staple of Moroccan culture and a global beauty secret.",
    contentSections: [
      {
        heading: "The Legendary Argan Tree",
        paragraphs: [
          {
            text: "The argan tree (Argania spinosa) is incredibly resilient, thriving in the arid and semi-arid regions of southwestern Morocco. It plays a crucial ecological role, preventing desertification and providing shade for livestock.",
            image: "https://via.placeholder.com/600x400.png?text=Argan+Tree+Landscape",
            imageAlt: "Argan Trees in Moroccan Landscape",
          },
          {
            text: "Traditionally, goats climb the trees to eat the argan fruit, and their waste contains the valuable nuts. However, modern, more hygienic methods involve harvesting the fruit directly.",
            image: "https://media.giphy.com/media/l4pTcW3R7d7j5iQ/giphy.gif", // GIF Placeholder
            imageAlt: "Goats climbing Argan trees",
            isAnimated: true,
          },
        ],
      },
      {
        heading: "The Extraction Process",
        paragraphs: [
          {
            text: "Extracting argan oil is a labor-intensive process, traditionally performed by Berber women. The fruit is collected, dried, and its fleshy pulp removed to reveal a hard nut. This nut is then cracked by hand to extract the tiny kernels.",
            image: "https://via.placeholder.com/600x400.png?text=Berber+Women+Cracking+Argan",
            imageAlt: "Berber Women Cracking Argan Nuts",
          },
          {
            text: "For culinary oil, the kernels are lightly roasted before being ground and pressed to release the golden oil. Cosmetic oil is made from unroasted kernels to preserve its delicate properties.",
            image: "https://via.placeholder.com/600x400.png?text=Argan+Oil+Pressing",
            imageAlt: "Traditional Argan Oil Pressing",
          },
        ],
      },
      {
        heading: "Benefits and Uses",
        paragraphs: [
          {
            text: "Culinary argan oil, with its nutty flavor, is used as a dipping oil or drizzled over salads and couscous. It's rich in vitamin E and essential fatty acids, offering various health benefits.",
            image: "https://via.placeholder.com/600x400.png?text=Argan+Oil+Culinary+Use",
            imageAlt: "Culinary Argan Oil Drizzled on Food",
          },
          {
            text: "Cosmetic argan oil is highly prized for its moisturizing, anti-aging, and healing properties. It's used on skin, hair, and nails, providing nourishment and a natural glow, making it a staple in beauty routines worldwide.",
            image: "https://media.giphy.com/media/l4pTcZzQ8p68gW6wQ/giphy.gif", // Another GIF placeholder
            imageAlt: "Applying Argan Oil for Beauty",
            isAnimated: true,
          },
        ],
      },
    ],
  },
   {
    id: 4,
    title: "The Timeless Art of Moroccan Pottery",
    bigTopic: "Moroccan pottery is more than just a craft; it's a vibrant expression of culture, history, and the skilled hands that bring clay to life. From the bustling souks of Fes to the quiet workshops in Safi, each piece tells a story of ancient traditions and unique artistic heritage.",
    contentSections: [
      {
        heading: "A Glimpse into History",
        paragraphs: [
          {
            text: "Moroccan pottery dates back centuries, influenced by various civilizations including Berber, Roman, and Islamic cultures. The earliest forms were simple and functional, evolving over time into the sophisticated and decorative pieces we see today.",
            image: "https://via.placeholder.com/600x400.png?text=Ancient+Pottery+Exhibit",
            imageAlt: "Ancient Moroccan Pottery Exhibit",
          },
          {
            text: "Fes, often considered the heart of Moroccan ceramics, is renowned for its iconic blue and white Fassi pottery. This distinct style is characterized by intricate geometric patterns, floral motifs, and calligraphic details, reflecting a rich artistic legacy passed down through generations.",
            image: "https://media.giphy.com/media/l4pTcUfVdGz7bW9wQ/giphy.gif", // Placeholder for a GIF
            imageAlt: "Pottery wheel in action",
            isAnimated: true,
          },
        ],
      },
      {
        heading: "Craftsmanship and Techniques",
        paragraphs: [
          {
            text: "The creation of Moroccan pottery is a meticulous process. It begins with local clay, often sourced from riverbeds, which is then hand-shaped on a traditional foot-powered wheel. Potters, or 'maalems,' display incredible dexterity and precision.",
            image: "https://via.placeholder.com/600x400.png?text=Potter+at+Work",
            imageAlt: "Moroccan Potter Shaping Clay",
          },
          {
            text: "After shaping, the pieces are left to dry and then fired in traditional kilns. The intricate decoration is often applied by hand, with artisans using fine brushes to paint patterns before a final glazing and firing process, resulting in the brilliant, glossy finish.",
            image: "https://via.placeholder.com/600x400.png?text=Decorating+Ceramics",
            imageAlt: "Artisan Decorating Moroccan Ceramics",
          },
        ],
      },
      {
        heading: "Modern Interpretations and Cultural Impact",
        paragraphs: [
          {
            text: "While traditions are upheld, modern Moroccan potters also experiment with contemporary designs, colors, and forms, blending the old with the new. This ensures the craft remains relevant and continues to captivate global audiences.",
            image: "https://media.giphy.com/media/l4pTcUk8h6cT4WjN6/giphy.gif", // Another GIF placeholder
            imageAlt: "Modern Moroccan Pottery",
            isAnimated: true,
          },
          {
            text: "Moroccan pottery serves not only as beautiful decor but also plays a vital role in everyday life, from serving tagines to holding water. It's a testament to the enduring beauty and utility of handmade art.",
            image: "https://via.placeholder.com/600x400.png?text=Pottery+in+Moroccan+Home",
            imageAlt: "Moroccan Pottery in a Home Setting",
          },
        ],
      },
    ],
  },
];

export default function DetailsPage() {
  const { id } = useParams();
  const item = allItemsData.find((item) => item.id === parseInt(id));

  if (!item) {
    return (
      <div style={{ padding: "40px", textAlign: "center", maxWidth: "800px", margin: "auto" }}>
        <h1>Item Not Found</h1>
        <p>The requested item could not be found. Please go back.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px 20px", maxWidth: "900px", margin: "auto", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      <h1 style={{ textAlign: "center", fontSize: "2.8rem", marginBottom: "30px", color: "#333" }}>
        {item.title}
      </h1>
      <p style={{ fontSize: "1.2rem", textAlign: "center", marginBottom: "40px", color: "#555" }}>
        {item.bigTopic}
      </p>

      {item.contentSections.map((section, sectionIndex) => (
        <div key={sectionIndex} style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "25px", color: "#444", borderBottom: "2px solid #ffeb3b", paddingBottom: "10px" }}>
            {section.heading}
          </h2>
          {section.paragraphs.map((para, paraIndex) => (
            <div
              key={paraIndex}
              style={{
                display: "flex",
                flexDirection: paraIndex % 2 === 0 ? "row" : "row-reverse", // Alternating image position
                alignItems: "center",
                gap: "30px",
                marginBottom: "40px",
                flexWrap: "wrap", // Allow wrapping on small screens
              }}
            >
              <div style={{ flex: 1, minWidth: "300px" }}>
                <p style={{ fontSize: "1.1rem", color: "#666" }}>{para.text}</p>
              </div>
              <div style={{ flex: 1, minWidth: "300px", textAlign: "center" }}>
                <img
                  src={para.image}
                  alt={para.imageAlt}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "10px",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                    border: para.isAnimated ? "3px solid #ffeb3b" : "none", // Highlight GIFs
                  }}
                />
                {para.isAnimated && (
                  <p style={{ fontSize: "0.9rem", color: "#888", marginTop: "10px" }}>
                    (Animated content)
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}