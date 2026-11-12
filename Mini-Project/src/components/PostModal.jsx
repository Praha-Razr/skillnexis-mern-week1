import React, { useEffect } from 'react';
import './PostModal.css';

export default function PostModal({ post, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!post) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="modal-header">
          <div className="modal-category-row">
            <span className="modal-tag">{post.category}</span>
            <span className="modal-read-time">{post.readTime}</span>
          </div>
          <h2 className="modal-title">{post.title}</h2>
          <div className="modal-byline">
            <span>By <strong>{post.author || 'Prahadeesh K'}</strong></span>
            <span>&bull;</span>
            <span>{post.date}</span>
          </div>
        </div>

        <div className="modal-body">
          <p className="modal-lead">{post.excerpt}</p>
          <div className="modal-content-text">
            <p>{post.content}</p>
          </div>
        </div>

        {post.tags && (
          <div className="modal-footer-tags">
            {post.tags.map((t) => (
              <span key={t} className="modal-tag-pill">
                #{t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
