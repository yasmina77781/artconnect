import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Send, User } from "lucide-react";
import { allItems } from '../data/allData.jsx'; // Using the central data file

const DetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = allItems.find((data) => data.id === parseInt(id));

  // State for the interactive opinion form
  const [opinions, setOpinions] = useState(item?.opinions || []);
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(5);

  const handleSubmitOpinion = (e) => {
    e.preventDefault();
    if (newComment.trim() === "") return; // Don't submit empty comments

    const newOpinion = {
      user: "GuestUser", // In a real app, this would come from a login
      rating: newRating,
      comment: newComment,
    };

    setOpinions([newOpinion, ...opinions]); // Add new opinion to the top
    setNewComment(""); // Reset form
    setNewRating(5); // Reset rating
  };

  if (!item) {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Item not found!</h1>
        <button style={styles.backButton} onClick={() => navigate("/")}>
          <ArrowLeft size={20} /> Back to Gallery
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* --- Back Button --- */}
      <button style={styles.backButton} onClick={() => navigate(-1)}>
        <ArrowLeft size={20} /> Back to Gallery
      </button>

      {/* --- Header Section --- */}
      <header style={styles.header}>
        <h1 style={styles.title}>{item.title}</h1>
        <p style={styles.bigTopic}>{item.bigTopic || item.description}</p>
        <div style={styles.tags}>
          <span style={styles.tag}>{item.city || item.location}</span>
          <span style={styles.tag}>{item.category}</span>
        </div>
      </header>

      {/* --- Main Content Section --- */}
      <main>
        {item.contentSections && item.contentSections.map((section, index) => (
          <div key={index} style={styles.contentSection}>
            <h2 style={styles.sectionHeading}>{section.heading}</h2>
            {section.paragraphs.map((p, pIndex) => (
              <div key={pIndex} style={{ ...styles.paragraphContainer, flexDirection: pIndex % 2 === 0 ? 'row' : 'row-reverse' }}>
                <img src={p.image} alt={p.imageAlt} style={styles.paragraphImage} />
                <p style={styles.paragraphText}>{p.text}</p>
              </div>
            ))}
          </div>
        ))}
      </main>

      {/* --- Opinions Section --- */}
      <section style={styles.opinionsSection}>
        <h2 style={styles.sectionHeading}>Community Feedback</h2>

        {/* Form to add a new opinion */}
        <form style={styles.opinionForm} onSubmit={handleSubmitOpinion}>
          <div style={styles.starRatingInput}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={28}
                onClick={() => setNewRating(star)}
                style={{
                  cursor: 'pointer',
                  color: star <= newRating ? '#ffd60a' : '#ccc',
                }}
                fill={star <= newRating ? '#ffd60a' : 'none'}
              />
            ))}
          </div>
          <textarea
            style={styles.textArea}
            placeholder="Share your opinion..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button type="submit" style={styles.submitButton}>
            Submit Opinion <Send size={16} />
          </button>
        </form>

        {/* List of existing opinions */}
        <div style={styles.opinionsList}>
          {opinions.length > 0 ? (
            opinions.map((opinion, index) => (
              <div key={index} style={styles.opinionCard}>
                <div style={styles.opinionHeader}>
                  <div style={styles.userIcon}><User size={18} /></div>
                  <span style={styles.opinionUser}>{opinion.user}</span>
                </div>
                <div style={styles.starRatingDisplay}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < opinion.rating ? '#ffc107' : '#e0e0e0'} color={i < opinion.rating ? '#ffc107' : '#e0e0e0'}/>
                  ))}
                </div>
                <p style={styles.opinionComment}>{opinion.comment}</p>
              </div>
            ))
          ) : (
            <p style={styles.noOpinions}>Be the first to share an opinion!</p>
          )}
        </div>
      </section>
    </div>
  );
};

// --- STYLES OBJECT ---
const styles = {
  container: {
    maxWidth: '900px',
    margin: '40px auto',
    padding: '2rem',
    fontFamily: "'Open Sans', sans-serif",
    backgroundColor: '#fff',
    color: '#333',
  },
  backButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: '#f1f1f1',
    border: 'none',
    borderRadius: '20px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontWeight: '600',
    marginBottom: '2rem',
    transition: 'background 0.3s ease',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
    borderBottom: '1px solid #eee',
    paddingBottom: '2rem',
  },
  title: {
    fontFamily: "'Abril Fatface', serif",
    fontSize: '3rem',
    color: '#222',
    margin: '0 0 1rem 0',
  },
  bigTopic: {
    fontSize: '1.2rem',
    color: '#666',
    lineHeight: '1.6',
    maxWidth: '700px',
    margin: '0 auto 1.5rem auto',
  },
  tags: { display: 'flex', gap: '10px', justifyContent: 'center' },
  tag: { background: '#ffd60a', color: 'black', padding: '5px 15px', borderRadius: '15px', fontSize: '0.9rem', fontWeight: 'bold' },
  contentSection: { marginBottom: '3rem' },
  sectionHeading: {
    fontFamily: "'Abril Fatface', serif",
    fontSize: '2rem',
    color: '#333',
    marginBottom: '2rem',
    borderBottom: '2px solid #ffd60a',
    paddingBottom: '10px',
    display: 'inline-block',
  },
  paragraphContainer: { display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2.5rem' },
  paragraphImage: { width: '40%', height: '250px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' },
  paragraphText: { flex: 1, fontSize: '1rem', lineHeight: '1.8', color: '#555' },
  opinionsSection: { backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '12px' },
  opinionForm: { marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' },
  starRatingInput: { display: 'flex', gap: '5px' },
  textArea: {
    width: '100%',
    minHeight: '100px',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    fontFamily: 'inherit',
    resize: 'vertical',
  },
  submitButton: {
    alignSelf: 'flex-start',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '12px 24px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background 0.3s ease',
  },
  opinionsList: { display: 'flex', flexDirection: 'column', gap: '1.5rem' },
  opinionCard: { background: '#fff', border: '1px solid #eee', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' },
  opinionHeader: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' },
  userIcon: { width: '30px', height: '30px', borderRadius: '50%', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' },
  opinionUser: { fontWeight: 'bold', color: '#333' },
  starRatingDisplay: { marginBottom: '1rem' },
  opinionComment: { margin: 0, lineHeight: '1.6', color: '#555' },
  noOpinions: { color: '#888', fontStyle: 'italic' }
};

export default DetailsPage;