import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import Button from './components/Button';
import Form from './components/Form';
import './App.css';

const INITIAL_CARDS = [
  {
    id: 1,
    title: 'Civic-Connect Grievance Module',
    category: 'Full-Stack',
    priority: 'high',
    description: 'Build responsive citizen grievance reporting portal with location coordinates and department triage.',
    createdAt: 'Nov 10, 2026',
    completed: false,
  },
  {
    id: 2,
    title: 'Sahaaya Grid SOS Dispatch',
    category: 'Backend',
    priority: 'high',
    description: 'Implement real-time low-latency WebSocket broadcaster for field relief coordination and SOS requests.',
    createdAt: 'Nov 11, 2026',
    completed: true,
  },
  {
    id: 3,
    title: 'Waste Guard AI Classification UI',
    category: 'Frontend',
    priority: 'medium',
    description: 'Create interactive webcam preview stream and classification results panel with confidence gauges.',
    createdAt: 'Nov 12, 2026',
    completed: false,
  },
  {
    id: 4,
    title: 'UniServ Micro-Gig Matching Algorithm',
    category: 'DSA',
    priority: 'low',
    description: 'Optimize bipartite matching between student skill tags and campus work requests using graph algorithms.',
    createdAt: 'Nov 12, 2026',
    completed: false,
  },
];

export default function App() {
  const [cards, setCards] = useState(INITIAL_CARDS);
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterPriority, setFilterPriority] = useState('All');

  // Add new card handler
  const handleAddCard = (newCard) => {
    setCards((prevCards) => [newCard, ...prevCards]);
  };

  // Delete card handler
  const handleDeleteCard = (id) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  // Toggle card completion handler
  const handleToggleComplete = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, completed: !card.completed } : card
      )
    );
  };

  // Reset to default sample cards
  const handleResetCards = () => {
    setCards(INITIAL_CARDS);
    setFilterCategory('All');
    setFilterPriority('All');
  };

  // Clear all cards
  const handleClearAll = () => {
    setCards([]);
  };

  // Filtered Cards
  const filteredCards = cards.filter((card) => {
    const matchesCategory = filterCategory === 'All' || card.category === filterCategory;
    const matchesPriority = filterPriority === 'All' || card.priority === filterPriority;
    return matchesCategory && matchesPriority;
  });

  const categories = ['All', 'Frontend', 'Backend', 'Full-Stack', 'DSA', 'DevOps', 'Hackathons'];
  const priorities = ['All', 'low', 'medium', 'high'];

  return (
    <div className="app-root">
      {/* 1. Header Component */}
      <Header
        title="React Components & Dynamic State"
        subtitle="SkillNexis Week 1 — Assignment 2 by Prahadeesh K"
        cardCount={cards.length}
      />

      <main className="main-content">
        <div className="container">
          {/* Section 1: Dynamic Form Component to create cards */}
          <Form onAddCard={handleAddCard} />

          {/* Section 2: Controls & Filters Bar */}
          <section className="controls-bar">
            <div className="filter-group">
              <span className="control-label">Category:</span>
              <div className="pill-scroll">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`filter-pill ${filterCategory === cat ? 'active' : ''}`}
                    onClick={() => setFilterCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <span className="control-label">Priority:</span>
              <div className="pill-scroll">
                {priorities.map((p) => (
                  <button
                    key={p}
                    type="button"
                    className={`filter-pill ${filterPriority === p ? 'active' : ''}`}
                    onClick={() => setFilterPriority(p)}
                  >
                    {p.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="bulk-actions">
              <Button variant="secondary" size="sm" onClick={handleResetCards}>
                Reset Sample Data
              </Button>
              {cards.length > 0 && (
                <Button variant="danger" size="sm" onClick={handleClearAll}>
                  Clear All ({cards.length})
                </Button>
              )}
            </div>
          </section>

          {/* Section 3: Dynamic Card Grid */}
          <section className="cards-display-section" aria-label="Dynamically Rendered Cards">
            <div className="section-title-row">
              <h2 className="section-heading">
                Rendered Component Cards
                <span className="badge-inline">{filteredCards.length} displayed</span>
              </h2>
            </div>

            {filteredCards.length > 0 ? (
              <div className="cards-grid">
                {filteredCards.map((card) => (
                  <Card
                    key={card.id}
                    id={card.id}
                    title={card.title}
                    category={card.category}
                    description={card.description}
                    priority={card.priority}
                    createdAt={card.createdAt}
                    completed={card.completed}
                    onDelete={handleDeleteCard}
                    onToggleComplete={handleToggleComplete}
                  />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <div className="empty-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <h3>No Cards Match Current Filters</h3>
                <p>Try resetting the category / priority filters or add a new card using the form above.</p>
                <Button variant="primary" size="md" onClick={handleResetCards}>
                  Restore Sample Cards
                </Button>
              </div>
            )}
          </section>
        </div>
      </main>

      {/* 2. Footer Component */}
      <Footer
        author="Prahadeesh K"
        year={2026}
        role="Information Technology Student & Software Developer"
      />
    </div>
  );
}
