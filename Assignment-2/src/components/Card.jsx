import React from 'react';
import Button from './Button';
import './Card.css';

/**
 * Reusable Card Component
 * Props:
 * - id: string | number
 * - title: string
 * - category: string
 * - description: string
 * - priority: 'low' | 'medium' | 'high'
 * - createdAt: string
 * - onDelete: (id) => void
 * - onToggleComplete: (id) => void
 * - completed: boolean
 */
export default function Card({
  id,
  title,
  category = 'General',
  description,
  priority = 'medium',
  createdAt,
  onDelete,
  onToggleComplete,
  completed = false,
}) {
  const priorityColors = {
    low: 'badge-low',
    medium: 'badge-medium',
    high: 'badge-high',
  };

  const priorityClass = priorityColors[priority] || 'badge-medium';

  return (
    <article className={`interactive-card ${completed ? 'card-completed' : ''}`}>
      <div className="card-top-bar">
        <span className="card-category-tag">{category}</span>
        <span className={`priority-badge ${priorityClass}`}>
          {priority.toUpperCase()}
        </span>
      </div>

      <h3 className="card-heading">{title}</h3>
      <p className="card-body-text">{description}</p>

      <div className="card-meta">
        <span className="card-date">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          {createdAt || 'Just now'}
        </span>
        {completed && <span className="status-completed-text">Completed</span>}
      </div>

      <div className="card-actions">
        <Button
          variant={completed ? 'secondary' : 'success'}
          size="sm"
          onClick={() => onToggleComplete && onToggleComplete(id)}
        >
          {completed ? 'Mark Active' : 'Mark Done'}
        </Button>

        <Button
          variant="danger"
          size="sm"
          onClick={() => onDelete && onDelete(id)}
          aria-label={`Delete card titled ${title}`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
          Delete
        </Button>
      </div>
    </article>
  );
}
