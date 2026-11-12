# Assignment 2: React Components Practice

A modular, component-driven React application built with **Vite** and **React 18** that demonstrates component architecture, unidirectional data flow via `props`, and dynamic user interface state management with React hooks (`useState`).

## 🧱 5 Reusable Components

All reusable components are located in `src/components/`:

1. **`Header.jsx`**
   - Configurable application bar displaying brand badge, title, subtitle, and dynamic active card counter metric.
   - Props: `title`, `subtitle`, `cardCount`.
2. **`Footer.jsx`**
   - Professional footer rendering author details, role, technology tags, and dynamic copyright year.
   - Props: `author`, `year`, `role`.
3. **`Card.jsx`**
   - Interactive content card featuring priority badges (Low / Medium / High), category tags, timestamp, title, description, and action buttons.
   - Embeds the reusable `Button` component for dynamic deletion and completion status toggling.
   - Props: `id`, `title`, `category`, `description`, `priority`, `createdAt`, `completed`, `onDelete`, `onToggleComplete`.
4. **`Button.jsx`**
   - Highly flexible design system button supporting variants (`primary`, `secondary`, `danger`, `outline`, `success`), sizes (`sm`, `md`, `lg`), disabled state, accessible ARIA attributes, and click event handlers.
   - Props: `children`, `variant`, `size`, `type`, `onClick`, `disabled`, `className`.
5. **`Form.jsx`**
   - Controlled React form component managing its own input state (`title`, `category`, `priority`, `description`).
   - Validates user input with inline error feedback and emits structured card objects to the parent `App` component via callback.
   - Props: `onAddCard`.

---

## ⚡ Dynamic State in `App.jsx`
- **State Management:** Uses React's `useState` hook to manage the collection of dynamic cards, selected category filters, and priority filters.
- **Dynamic Insertion:** Submitting the `Form` component instantiates and prepends a new `Card` component in real-time.
- **Immutability & Actions:**
  - Card deletion with immutable state filtering.
  - Active / Completed status toggling.
  - Category and priority pill filters.
  - Reset to initial sample cards and bulk clear.

---

## 🛠️ Scripts & Running
Inside the `Assignment-2` directory:
```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Compile production bundle
npm run build
```
