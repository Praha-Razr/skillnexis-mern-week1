import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="blog-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand-title">DevPulse Blog</span>
            <p className="brand-desc">
              Curated articles exploring React, modern CSS architectures, and real-world hackathon engineering.
            </p>
          </div>
          <div className="footer-author-box">
            <span className="box-title">Authored by</span>
            <span className="box-name">Prahadeesh K</span>
            <span className="box-sub">B.Tech IT &bull; SKCET</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 DevPulse Blog. Built with React &amp; Vite for SkillNexis Intern Week 1.</p>
        </div>
      </div>
    </footer>
  );
}
