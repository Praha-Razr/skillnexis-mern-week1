import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import PostCard from './components/PostCard';
import PostModal from './components/PostModal';
import Footer from './components/Footer';
import postsData from './data/posts.json';
import './App.css';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalPost, setActiveModalPost] = useState(null);

  const categories = ['All', 'React', 'CSS', 'Hackathons'];

  // Calculate article counts per category dynamically
  const categoryCounts = useMemo(() => {
    const counts = { All: postsData.length };
    categories.forEach((cat) => {
      if (cat !== 'All') {
        counts[cat] = postsData.filter(
          (post) => post.category.toLowerCase() === cat.toLowerCase()
        ).length;
      }
    });
    return counts;
  }, []);

  // Filter posts based on search query (by title) AND selected category
  const filteredPosts = useMemo(() => {
    return postsData.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        post.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchesSearch =
        searchTerm.trim() === '' ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase().trim());

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="blog-app-root">
      {/* Top Navbar */}
      <Navbar totalPosts={postsData.length} />

      {/* Hero Intro */}
      <section className="blog-hero">
        <div className="container">
          <span className="hero-pill">SkillNexis Mini-Project</span>
          <h1 className="hero-title">
            Frontend Insights &amp; Engineering <span className="hero-gradient">Chronicles</span>
          </h1>
          <p className="hero-subtitle">
            Curated articles on modern React patterns, CSS architecture, and battle-tested hackathon playbooks.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="container main-content-wrapper">
        {/* Live Search Bar */}
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onClear={() => setSearchTerm('')}
          totalResults={filteredPosts.length}
        />

        {/* Category Filter Pills */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          categoryCounts={categoryCounts}
        />

        {/* Results Info & Active Filters Bar */}
        <div className="results-meta-bar">
          <span className="results-count">
            Showing <strong>{filteredPosts.length}</strong> of {postsData.length} articles
          </span>
          {(searchTerm || selectedCategory !== 'All') && (
            <button
              type="button"
              className="reset-filters-btn"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
            >
              Reset all filters &times;
            </button>
          )}
        </div>

        {/* Posts Cards Grid */}
        {filteredPosts.length > 0 ? (
          <div className="posts-grid" role="feed" aria-label="Blog articles list">
            {filteredPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onOpenModal={setActiveModalPost}
              />
            ))}
          </div>
        ) : (
          <div className="no-posts-found">
            <div className="no-posts-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
            <h3>No Articles Found</h3>
            <p>
              No articles matched your search query &ldquo;<strong>{searchTerm}</strong>&rdquo;
              {selectedCategory !== 'All' && <> under the category &ldquo;<strong>{selectedCategory}</strong>&rdquo;</>}.
            </p>
            <button
              type="button"
              className="clear-all-filters-cta"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
            >
              Clear Search &amp; Show All
            </button>
          </div>
        )}
      </main>

      {/* Article Reader Modal */}
      <PostModal
        post={activeModalPost}
        onClose={() => setActiveModalPost(null)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
