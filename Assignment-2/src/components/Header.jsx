import React from 'react';
import './Header.css';

/**
 * Reusable Header Component
 * Props:
 * - title: string
 * - subtitle: string
 * - cardCount: number
 */
export default function Header({
  title = 'React Components Practice',
  subtitle = 'Dynamic Component Composition & State Architecture',
  cardCount = 0,
}) {
  return (
    <header className="app-header">
      <div className="header-inner">
        <div className="brand-group">
          <div className="brand-badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>
          <div>
            <h1 className="header-title">{title}</h1>
            <p className="header-subtitle">{subtitle}</p>
          </div>
        </div>

        <div className="header-metrics">
          <div className="metric-pill">
            <span className="metric-dot"></span>
            <span className="metric-count">{cardCount}</span>
            <span className="metric-label">{cardCount === 1 ? 'Card' : 'Cards'} Active</span>
          </div>
        </div>
      </div>
    </header>
  );
}
