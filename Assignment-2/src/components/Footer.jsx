import React from 'react';
import './Footer.css';

/**
 * Reusable Footer Component
 * Props:
 * - author: string
 * - year: number
 * - role: string
 */
export default function Footer({
  author = 'Prahadeesh K',
  year = new Date().getFullYear(),
  role = 'Full-Stack Developer Intern',
}) {
  return (
    <footer className="app-footer">
      <div className="footer-inner">
        <div className="footer-info">
          <p className="footer-author">
            Designed &amp; Engineered by <strong>{author}</strong>
          </p>
          <p className="footer-role">{role} &bull; SKCET</p>
        </div>

        <div className="footer-tags">
          <span className="footer-chip">React 18</span>
          <span className="footer-chip">Vite</span>
          <span className="footer-chip">Dynamic State</span>
          <span className="footer-chip">Reusable Components</span>
        </div>

        <p className="footer-copy">
          &copy; {year} SkillNexis Intern Week 1. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
