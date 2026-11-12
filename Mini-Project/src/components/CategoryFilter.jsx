import React from 'react';
import './CategoryFilter.css';

/**
 * Category Filter Pills Component
 * Props:
 * - categories: Array<string>
 * - selectedCategory: string
 * - onSelectCategory: (category) => void
 * - categoryCounts: Record<string, number>
 */
export default function CategoryFilter({
  categories = ['All', 'React', 'CSS', 'Hackathons'],
  selectedCategory = 'All',
  onSelectCategory,
  categoryCounts = {},
}) {
  return (
    <div className="category-filter-container">
      <div className="filter-pill-row" role="tablist" aria-label="Article categories">
        {categories.map((category) => {
          const isSelected = selectedCategory.toLowerCase() === category.toLowerCase();
          const count = categoryCounts[category] ?? 0;

          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isSelected}
              className={`cat-pill-btn ${isSelected ? 'pill-active' : ''}`}
              onClick={() => onSelectCategory(category)}
            >
              <span className="pill-title">{category}</span>
              <span className="pill-count-badge">{count}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
