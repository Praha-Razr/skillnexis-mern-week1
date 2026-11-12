import React from 'react';
import './Navbar.css';

export default function Navbar({ totalPosts = 0 }) {
  return (
    <header className="blog-nav-header">
      <div className="nav-container">
        <div className="nav-brand">
          <div className="brand-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          </div>
          <div className="brand-meta">
            <span className="brand-name">DevPulse <span className="highlight">Blog</span></span>
            <span className="brand-tagline">Frontend Architecture &bull; Hackathons &bull; CSS</span>
          </div>
        </div>

        <div className="nav-right">
          <span className="posts-counter-pill">
            <span className="live-dot"></span>
            {totalPosts} Articles Published
          </span>
          <a
            href="https://github.com/Praha-Razr"
            target="_blank"
            rel="noopener noreferrer"
            className="author-link"
          >
            <span>Prahadeesh K</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
