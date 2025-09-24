import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Clock, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import EVENTATLASEMELSHIL from '../assets/EVENTATLASEMELSHIL.jpg';
import EVENTGNAWA from '../assets/EVENTGNAWA.jpg';
import EVENTPAINTING from '../assets/EVENTPAINTING.jpg';
import EVENTTARAB from '../assets/EVENTTARAB.jpg';
import EVENT3AYTA from '../assets/EVENT3AYTA.jpg';
const UpcomingEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedEvents, setLikedEvents] = useState(new Set());

  const events = [
    {
      id: 1,
      title: "Emelshil Marriages ",
      date: "2025-10-15",
      time: "08:00",
      location: "Atlas Mountains",
      attendees: 24,
      category: "Festival",
      image:EVENTATLASEMELSHIL,
      description: "Join us for an epic mountain hiking experience with breathtaking views"
    },
    {
      id: 2,
      title: " Festival Gnawa",
      date: "2025-10-20",
      time: "18:00",
      location: "Essaouira",
      attendees: 156,
      category: "Festival",
      image: EVENTGNAWA,
      description: "Experience magical sunset vibes with live music and local food"
    },
    {
      id: 3,
      title: "Painting Meusum",
      date: "2025-10-25",
      time: "14:00",
      location: "Rabat",
      attendees: 18,
      category: "Art",
      image: EVENTPAINTING,
      description: "Capture the essence of city life with fellow photography enthusiasts"
    },
    {
      id: 4,
      title: " Tarab Alandalousi",
      date: "2025-11-02",
      time: "16:00",
      location: "Fés",
      attendees: 12,
      category: "Cerimony",
      image: EVENTTARAB,
      description: "Disconnect from the world in a peaceful mountain cabin setting"
    },
    {
      id: 5,
      title: "Aayta Night",
      date: "2025-11-08",
      time: "20:00",
      location: "Casablanca",
      attendees: 35,
      category: "Festival",
      image:EVENT3AYTA,
      description: "Marvel at the cosmos under the clearest desert skies"
    }
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % events.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);

  const toggleLike = (eventId) => {
    setLikedEvents(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(eventId)) {
        newLiked.delete(eventId);
      } else {
        newLiked.add(eventId);
      }
      return newLiked;
    });
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR', { 
      day: 'numeric', 
      month: 'short',
      year: 'numeric'
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Adventure': '#10b981',
      'Festival': '#8b5cf6',
      'Photography': '#3b82f6',
      'Retreat': '#f59e0b',
      'Astronomy': '#6366f1'
    };
    return colors[category] || '#6b7280';
  };

  const getVisibleEvents = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % events.length;
      visible.push({
        ...events[index],
        position: i
      });
    }
    return visible;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const containerStyle = {
    minHeight: '100vh',
    background: 'white',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    color: 'white'
  };

  const headerStyle = {
    textAlign: 'left',
    marginBottom: '4rem',
    fontFamily: 'Abril fatface, serif'
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'black',
    marginBottom: '1rem'
  };

  const carouselStyle = {
    position: 'relative',
    height: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '2rem',
    perspective: '1000px'
  };

  const cardsContainerStyle = {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const getCardStyle = (position) => {
    const baseStyle = {
      position: 'relative',
      borderRadius: '1.5rem',
      overflow: 'hidden',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      transition: 'all 0.7s cubic-bezier(0.4, 0.0, 0.2, 1)',
      cursor: 'pointer'
    };

    if (position === 1) {
      return {
        ...baseStyle,
        width: '350px',
        height: '400px',
        transform: 'scale(1.1)',
        zIndex: 30,
        opacity: 1
      };
    } else {
      return {
        ...baseStyle,
        width: '300px',
        height: '350px',
        transform: position === 0 ? 'scale(0.9) rotateY(15deg)' : 'scale(0.9) rotateY(-15deg)',
        zIndex: 20,
        opacity: 0.7
      };
    }
  };

  const backgroundStyle = (image) => ({
    position: 'absolute',
    inset: 0,
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  });

  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)'
  };

  const likeBtnStyle = {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    zIndex: 10
  };

  const categoryBadgeStyle = (category) => ({
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    padding: '0.5rem 1rem',
    borderRadius: '1rem',
    fontSize: '0.8rem',
    fontWeight: '600',
    color: 'white',
    backgroundColor: getCategoryColor(category)
  });

  const contentStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '1.5rem',
    color: 'white'
  };

  const titleCardStyle = {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem'
  };

  const metaStyle = {
    display: 'flex',
    gap: '1rem',
    fontSize: '0.8rem',
    marginBottom: '0.8rem'
  };

  const metaItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem'
  };

  const footerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.8rem'
  };

  const navBtnStyle = (position) => ({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    [position]: '2rem',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: 'rgba(0,0,0,0.5)',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 40,
    color: 'white'
  });

  return (
    <div style={containerStyle}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={headerStyle}>
          <h1 style={titleStyle}>Upcoming Events</h1>
        </div>

        {/* Carousel */}
        <div style={carouselStyle}>
          <div style={cardsContainerStyle}>
            {getVisibleEvents().map((event, index) => (
              <div
                key={`${event.id}-${currentIndex}`}
                style={getCardStyle(event.position)}
                onClick={() => {
                  if (event.position === 0) prevSlide();
                  else if (event.position === 2) nextSlide();
                }}
              >
                <div style={backgroundStyle(event.image)}></div>
                <div style={overlayStyle}></div>

                <button
                  style={likeBtnStyle}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(event.id);
                  }}
                >
                  <Heart
                    size={20}
                    color={likedEvents.has(event.id) ? '#ef4444' : 'white'}
                    fill={likedEvents.has(event.id) ? '#ef4444' : 'none'}
                  />
                </button>

                <div style={categoryBadgeStyle(event.category)}>{event.category}</div>

                <div style={contentStyle}>
                  <h3 style={titleCardStyle}>{event.title}</h3>

                  <div style={metaStyle}>
                    <div style={metaItemStyle}>
                      <Calendar size={16} />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div style={metaItemStyle}>
                      <Clock size={16} />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  <div style={footerStyle}>
                    <div style={metaItemStyle}>
                      <MapPin size={16} />
                      <span>{event.location}</span>
                    </div>
                    <div style={metaItemStyle}>
                      <Users size={16} />
                      <span>{event.attendees}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Prev/Next Buttons replacing dots */}
          <button style={navBtnStyle('left')} onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>
          <button style={navBtnStyle('right')} onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
