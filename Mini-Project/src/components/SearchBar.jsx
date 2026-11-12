import React from 'react';
import './SearchBar.css';

/**
 * Live Search Bar Component
 * Props:
 * - searchTerm: string
 * - onSearchChange: (value) => void
 * - onClear: () => void
 * - totalResults: number
 */
export default function SearchBar({
  searchTerm,
  onSearchChange,
  onClear,
  totalResults,
}) {
  return (
    <div className="search-bar-wrapper">
      <div className="search-input-container">
        <span className="search-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>

        <input
          type="text"
          className="search-input"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search articles by title (e.g. React 19, CSS Grid, SIH, Hooks)..."
          aria-label="Search articles by title"
        />

        {searchTerm && (
          <button
            type="button"
            className="clear-search-btn"
            onClick={onClear}
            aria-label="Clear search query"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>

      <div className="search-status-bar">
        {searchTerm ? (
          <p className="search-status-text">
            Found <strong>{totalResults}</strong> {totalResults === 1 ? 'article' : 'articles'} matching &ldquo;<span className="query-highlight">{searchTerm}</span>&rdquo;
          </p>
        ) : (
          <p className="search-status-text">
            Type above to filter articles by title in real-time.
          </p>
        )}
      </div>
    </div>
  );
}
