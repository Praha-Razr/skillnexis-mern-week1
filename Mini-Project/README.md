# Mini-Project: React Blog UI

A responsive, feature-rich React Blog application built with **Vite** and **React 18** that renders articles from a structured JSON dataset and delivers real-time live search and multi-category filtering.

## 🚀 Features & Implementation

### 1. Structured JSON Dataset (`src/data/posts.json`)
- Contains 8 articles covering high-impact topics:
  - **React:** React 19 Actions & useOptimistic, Component Lifecycle & Custom Hooks, Modern State Management.
  - **CSS:** CSS Grid & Subgrid, CSS Container Queries (`@container`), Fluid Typography with `clamp()`.
  - **Hackathons:** Smart India Hackathon (SIH) 36-Hour MVP Playbook, Flipkart GRID 8.0 E-Commerce Concurrency.
- Schema per post:
  - `id`: Unique numeric identifier
  - `title`: Article headline
  - `category`: Topic taxonomy (`React` | `CSS` | `Hackathons`)
  - `date`: Publication date
  - `readTime`: Estimated reading time (e.g. `5 min read`)
  - `excerpt`: Concise summary lead
  - `author`: Article author (`Prahadeesh K`)
  - `tags`: Specific technical topics
  - `content`: Extended full-text content for the reader modal

### 2. Live Search Bar (`SearchBar.jsx`)
- Case-insensitive real-time query matching against post titles.
- Instant feedback counter showing matching article count.
- One-click clear search button.

### 3. Category Filter Pills (`CategoryFilter.jsx`)
- Interactive pills for `All`, `React`, `CSS`, and `Hackathons`.
- Dynamic counter badges automatically tallying post count per category.
- Active pill styling with glowing gradient indicator.

### 4. Article Reader Modal (`PostModal.jsx`)
- Interactive reading dialog triggered by clicking "Read Article" or the article title.
- Supports keyboard navigation (ESC key to dismiss) and backdrop click to close.

### 5. Responsive Grid & Empty State
- CSS Grid layout adapting automatically from single-column mobile views to multi-column desktop arrangements.
- Graceful empty state when queries yield no matches, complete with a "Clear Search & Show All" recovery button.

---

## 🛠️ Scripts & Running
Inside the `Mini-Project` directory:
```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Compile production bundle
npm run build
```
