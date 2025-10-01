import React, { useState, useEffect, useContext, useMemo, useRef } from 'react';
import {
  Calendar, MapPin, Users, Clock,
  ChevronLeft, ChevronRight, Heart
} from 'lucide-react';
import fetchData from '../api';
import FilterContext from '../contexte/FilterContext';
import LikesContext from '../contexte/LikesContext';

export default function UpcomingEvents() {
  const { selectedRegion, selectedCategory } = useContext(FilterContext);
  const { likedItems, toggleLike } = useContext(LikesContext);
  const [events, setEvents] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await fetchData('events');
        if (mounted) setEvents(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('fetch events failed', err);
        if (mounted) setEvents([]);
      }
    })();
    return () => { mounted = false; };
  }, []);

  const filteredEvents = useMemo(() => {
    return events.filter(ev =>
      (selectedRegion === 'All Morocco' || (ev.location || '').includes(selectedRegion)) &&
      (selectedCategory === 'All Categories' || (ev.category || '').includes(selectedCategory))
    );
  }, [events, selectedRegion, selectedCategory]);

  useEffect(() => {
    if (filteredEvents.length === 0) {
      setCurrentIndex(0);
      return;
    }
    setCurrentIndex(prev => prev % filteredEvents.length);
  }, [filteredEvents.length]);

  const nextSlide = () => {
    if (filteredEvents.length === 0) return;
    setCurrentIndex(prev => (prev + 1) % filteredEvents.length);
  };
  const prevSlide = () => {
    if (filteredEvents.length === 0) return;
    setCurrentIndex(prev => (prev - 1 + filteredEvents.length) % filteredEvents.length);
  };

  useEffect(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    if (filteredEvents.length > 1) {
      autoRef.current = setInterval(nextSlide, 5000);
      return () => clearInterval(autoRef.current);
    }
  }, [filteredEvents.length]);

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('fr-FR', {
      day: 'numeric', month: 'short', year: 'numeric'
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      Festival: '#8b5cf6',
      Art: '#3b82f6',
      Ceremony: '#f59e0b'
    };
    return colors[category] || '#6b7280';
  };

  const visibleEvents = useMemo(() => {
    const len = filteredEvents.length;
    if (len === 0) return [];

    const count = Math.min(3, len);
    const positions = count === 1 ? [1] : count === 2 ? [0, 2] : [0, 1, 2];

    return positions.map((pos, i) => {
      const index = (currentIndex + i) % len;
      return { ...filteredEvents[index], position: pos, visibleIndex: i };
    });
  }, [filteredEvents, currentIndex]);

  // Styles
  const containerStyle = {
    minHeight: '100vh',
    background: '#f8fafc',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    color: '#111'
  };
  const headerStyle = { textAlign: 'left', marginBottom: '2rem' };
  const titleStyle = { fontSize: '2rem', fontWeight: '700', color: '#111', marginBottom: '0.5rem' };
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
    gap: '1.5rem',
    alignItems: 'center',
    justifyContent: 'center'
  };
  const getCardStyle = (position) => ({
    position: 'relative',
    borderRadius: '1rem',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(2,6,23,0.12)',
    background: 'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.85))',
    transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
    cursor: 'pointer',
    width: position === 1 ? 380 : 300,
    height: position === 1 ? 420 : 360,
    transform: position === 1
      ? 'translateY(-8px) scale(1.05)'
      : position === 0
      ? 'translateX(-10px) rotateY(12deg) scale(0.95)'
      : 'translateX(10px) rotateY(-12deg) scale(0.95)',
    zIndex: position === 1 ? 30 : 20,
    opacity: position === 1 ? 1 : 0.9
  });
  const backgroundStyle = (image) => ({
    position: 'absolute',
    inset: 0,
    backgroundImage: `url(${image ? '/' + image : '/placeholder.jpg'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  });
  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.12))'
  };
  const likeBtnStyle = {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 44,
    height: 44,
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.85)',
    border: '1px solid rgba(0,0,0,0.06)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 40
  };
  const categoryBadgeStyle = (category) => ({
    position: 'absolute',
    top: 12,
    left: 12,
    padding: '0.45rem 0.9rem',
    borderRadius: 999,
    fontSize: '0.8rem',
    fontWeight: 700,
    color: 'white',
    backgroundColor: getCategoryColor(category)
  });
  const contentStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '1rem 1rem 1.25rem',
    color: '#fff'
  };
  const titleCardStyle = { fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.4rem' };
  const metaStyle = {
    display: 'flex',
    gap: '0.9rem',
    fontSize: '0.85rem',
    marginBottom: '0.6rem',
    alignItems: 'center'
  };
  const metaItemStyle = { display: 'flex', alignItems: 'center', gap: '0.4rem' };
  const footerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.85rem'
  };
  const navBtnStyle = (side) => ({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    [side]: '1.5rem',
    width: 48,
    height: 48,
    borderRadius: '50%',
    background: 'rgba(17,24,39,0.85)',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 60,
    color: 'white'
  });

  if (filteredEvents.length === 0) {
    return (
      <div style={containerStyle}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={headerStyle}>
            <h1 style={titleStyle}>Upcoming Events</h1>
            <p style={{ color: '#374151' }}>Aucun événement trouvé pour les filtres sélectionnés.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={headerStyle}>
          <h1 style={titleStyle}>Upcoming Events</h1>
        </div>

        <div style={carouselStyle}>
          <div style={cardsContainerStyle} aria-live="polite">
            {visibleEvents.map((event) => (
              <div
                key={`${event.id}-${event.visibleIndex}`}
                style={getCardStyle(event.position)}
                onClick={() => {
                  if (event.position === 0) prevSlide();
                  else if (event.position === 2) nextSlide();
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    if (event.position === 0) prevSlide();
                    else if (event.position === 2) nextSlide();
                  }
                }}
              >
                <div style={backgroundStyle(event.image)} />
                <div style={overlayStyle} />

                <button
                  aria-label={likedItems.has(event.id) ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                  style={likeBtnStyle}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(event.id);
                  }}
                >
                  <Heart
                    size={18}
                    color={likedItems.has(event.id) ? '#ef4444' : '#374151'}
                    fill={likedItems.has(event.id) ? '#ef4444' : 'none'}
                  />
                </button>

                <div style={categoryBadgeStyle(event.category)}>{event.category}</div>

                <div style={contentStyle}>
                  <h3 style={titleCardStyle}>{event.title}</h3>

                  <div style={metaStyle}>
                    <div style={metaItemStyle}>
                      <Calendar size={14} />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div style={metaItemStyle}>
                      <Clock size={14} />
                      <span>{event.time || '-'}</span>
                    </div>
                  </div>

                  <div style={footerStyle}>
                    <div style={metaItemStyle}>
                      <MapPin size={14} />
                      <span style={{
                        maxWidth: 180,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}>
                        {event.location}
                      </span>
                    </div>
                    <div style={metaItemStyle}>
                      <Users size={14} />
                      <span>{event.participants ?? 0} participants</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button aria-label="Précédent" style={navBtnStyle('left')} onClick={prevSlide}>
            <ChevronLeft size={20} />
          </button>
          <button aria-label="Suivant" style={navBtnStyle('right')} onClick={nextSlide}>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}