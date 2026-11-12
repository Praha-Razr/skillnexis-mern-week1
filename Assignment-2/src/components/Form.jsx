import React, { useState } from 'react';
import Button from './Button';
import './Form.css';

/**
 * Reusable Form Component
 * Props:
 * - onAddCard: (cardData) => void
 */
export default function Form({ onAddCard }) {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Frontend',
    priority: 'medium',
    description: '',
  });

  const [errors, setErrors] = useState({});
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  const categories = ['Frontend', 'Backend', 'Full-Stack', 'DSA', 'DevOps', 'Hackathons'];
  const priorities = [
    { label: 'Low', value: 'low' },
    { label: 'Medium', value: 'medium' },
    { label: 'High', value: 'high' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const validationErrors = {};
    if (!formData.title.trim()) {
      validationErrors.title = 'Title is required';
    } else if (formData.title.trim().length < 3) {
      validationErrors.title = 'Title must be at least 3 characters';
    }

    if (!formData.description.trim()) {
      validationErrors.description = 'Description is required';
    } else if (formData.description.trim().length < 8) {
      validationErrors.description = 'Description must be at least 8 characters';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Format new card
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

    const newCard = {
      id: Date.now(),
      title: formData.title.trim(),
      category: formData.category,
      priority: formData.priority,
      description: formData.description.trim(),
      createdAt: formattedDate,
      completed: false,
    };

    onAddCard(newCard);

    // Reset Form
    setFormData({
      title: '',
      category: 'Frontend',
      priority: 'medium',
      description: '',
    });
    setErrors({});
    setSubmittedFeedback(true);
    setTimeout(() => setSubmittedFeedback(false), 3000);
  };

  return (
    <div className="form-card-container">
      <div className="form-header">
        <h2 className="form-title">Create New Dynamic Card</h2>
        <p className="form-subtitle">
          Submit the form below to push a newly created component into state.
        </p>
      </div>

      <form className="interactive-form" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="input-group">
            <label htmlFor="cardTitle" className="input-label">
              Card Title <span className="req">*</span>
            </label>
            <input
              type="text"
              id="cardTitle"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Implement React Router v6"
              className={`text-input ${errors.title ? 'input-error' : ''}`}
            />
            {errors.title && <span className="error-text">{errors.title}</span>}
          </div>

          <div className="input-group">
            <label htmlFor="cardCategory" className="input-label">
              Category
            </label>
            <select
              id="cardCategory"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="select-input"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="cardPriority" className="input-label">
              Priority Level
            </label>
            <select
              id="cardPriority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="select-input"
            >
              {priorities.map((p) => (
                <option key={p.value} value={p.value}>
                  {p.label} Priority
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="cardDescription" className="input-label">
            Description / Overview <span className="req">*</span>
          </label>
          <textarea
            id="cardDescription"
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            placeholder="Detail the task, project milestone, or component specification..."
            className={`text-area ${errors.description ? 'input-error' : ''}`}
          />
          {errors.description && (
            <span className="error-text">{errors.description}</span>
          )}
        </div>

        <div className="form-actions-row">
          <Button type="submit" variant="primary" size="md">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Add Card to State
          </Button>

          <Button
            type="button"
            variant="outline"
            size="md"
            onClick={() => {
              setFormData({
                title: '',
                category: 'Frontend',
                priority: 'medium',
                description: '',
              });
              setErrors({});
            }}
          >
            Reset Form
          </Button>

          {submittedFeedback && (
            <span className="success-banner">
              Card successfully added to UI!
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
