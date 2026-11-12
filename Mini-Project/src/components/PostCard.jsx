import React from 'react';
import './PostCard.css';

/**
 * Blog Post Card Component
 * Props:
 * - post: { id, title, category, date, readTime, excerpt, author, tags }
 * - onOpenModal: (post) => void
 */
export default function PostCard({ post, onOpenModal }) {
  const { id, title, category, date, readTime, excerpt, author, tags } = post;

  const categoryThemes = {
    React: 'cat-react',
    CSS: 'cat-css',
    Hackathons: 'cat-hackathons',
  };

  const categoryClass = categoryThemes[category] || 'cat-default';

  return (
    <article className="blog-post-card" id={`post-${id}`}>
      <div className="card-top-meta">
        <span className={`post-category-tag ${categoryClass}`}>{category}</span>
        <span className="post-read-time">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          {readTime}
        </span>
      </div>

      <h3 className="post-title" onClick={() => onOpenModal && onOpenModal(post)}>
        {title}
      </h3>

      <p className="post-excerpt">{excerpt}</p>

      {tags && tags.length > 0 && (
        <div className="post-tags-list">
          {tags.map((t) => (
            <span key={t} className="post-tag-item">
              #{t}
            </span>
          ))}
        </div>
      )}

      <div className="card-bottom-bar">
        <div className="author-info">
          <div className="author-avatar">{author ? author[0] : 'P'}</div>
          <div className="author-details">
            <span className="author-name">{author || 'Prahadeesh K'}</span>
            <span className="post-date">{date}</span>
          </div>
        </div>

        <button
          type="button"
          className="read-more-btn"
          onClick={() => onOpenModal && onOpenModal(post)}
          aria-label={`Read full article: ${title}`}
        >
          <span>Read Article</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </article>
  );
}
