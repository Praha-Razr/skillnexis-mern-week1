# SkillNexis Internship — Week 1: MERN Frontend Fundamentals

Welcome to the **Week 1: Frontend Fundamentals** repository for the SkillNexis Full-Stack Web Development (MERN) Internship. This repository encompasses foundational HTML5, modern CSS3 (Flexbox & CSS Grid), component-driven React.js, props & state management, and an interactive blog application.

---

## 👨‍💻 Student & Developer Profile

| Field | Details |
| :--- | :--- |
| **Name** | **Prahadeesh K** |
| **Role** | Information Technology Student &amp; Software Developer |
| **Institution** | Sri Krishna College of Engineering and Technology (SKCET), Coimbatore |
| **Degree &amp; Batch** | B.Tech in Information Technology (2025 – Present) |
| **Academic Standing** | **8.95 CGPA** / 10.0 |
| **Phone** | [+91 8778197031](tel:+918778197031) |
| **Email** | [prahadeeshkalimuthu@gmail.com](mailto:prahadeeshkalimuthu@gmail.com) |
| **GitHub** | [@Praha-Razr](https://github.com/Praha-Razr) |
| **LinkedIn** | [linkedin.com/in/prahadeesh-kalimuthu](https://www.linkedin.com/in/prahadeesh-kalimuthu-9b3b6a353/) |
| **LeetCode** | [leetcode.com/u/Praha-Razr](https://leetcode.com/u/Praha-Razr) |
| **HackerRank** | [hackerrank.com/profile/Praha_Razr](https://hackerrank.com/profile/Praha_Razr) |
| **Photography** | [@itz_razr_clicks](https://instagram.com/itz_razr_clicks) |

### 💡 About Me
I am a dedicated B.Tech IT student at SKCET with an 8.95 CGPA, deeply interested in building web and mobile applications that tackle real-world community issues. Active competitor in premier national hackathons including **Smart India Hackathon (SIH)**, **TECHAVANAM**, **CODEHEIST**, and **Flipkart GRID 8.0**. Proficient in Data Structures &amp; Algorithms across **C, C++, Python, Java, JavaScript, and SQL**. In my free time, I capture visual narratives through photography on Instagram ([@itz_razr_clicks](https://instagram.com/itz_razr_clicks)).

---

## 📁 Repository Structure

```
week 1/
├── .gitignore               # Ignores node_modules/, dist/, .DS_Store, .env
├── README.md                # Comprehensive documentation
├── Assignment-1/            # Personal Portfolio (Pure HTML5 & Modern CSS3)
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
├── Assignment-2/            # React Reusable Components & Dynamic State (Vite + React)
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   ├── src/
│   │   ├── main.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── components/
│   │       ├── Header.jsx / Header.css
│   │       ├── Footer.jsx / Footer.css
│   │       ├── Card.jsx / Card.css
│   │       ├── Button.jsx / Button.css
│   │       └── Form.jsx / Form.css
│   └── README.md
└── Mini-Project/            # React Blog UI with Live Search & Category Filtering
    ├── index.html
    ├── vite.config.js
    ├── package.json
    ├── src/
    │   ├── main.jsx
    │   ├── App.jsx
    │   ├── App.css
    │   ├── index.css
    │   ├── data/
    │   │   └── posts.json
    │   └── components/
    │       ├── Navbar.jsx / Navbar.css
    │       ├── SearchBar.jsx / SearchBar.css
    │       ├── CategoryFilter.jsx / CategoryFilter.css
    │       ├── PostCard.jsx / PostCard.css
    │       ├── PostModal.jsx / PostModal.css
    │       └── Footer.jsx / Footer.css
    └── README.md
```

---

## 🌟 Projects Breakdown

### 1. Assignment 1: Personal Portfolio Website (`Assignment-1/`)
- **Tech Stack:** Pure Semantic HTML5, Modern CSS3 (CSS Variables, Flexbox, CSS Grid), Vanilla JavaScript.
- **Highlights:**
  - **Zero external frameworks or CDNs** — lightweight, fast, accessible, and self-contained.
  - **CSS Grid Layout** showcases 4 community-centric projects:
    1. *Civic-Connect:* Citizen grievance logging and administrative triage platform.
    2. *Sahaaya Grid:* Decentralized emergency response &amp; volunteer SOS dispatch network.
    3. *Waste Guard AI:* Computer-vision powered waste categorization and recycling rewards.
    4. *UniServ:* Hyperlocal peer-to-peer campus and community freelance workforce app.
  - **Dedicated Sections:** About Me, Education Timeline at SKCET (8.95 CGPA), Technical Skills (C, C++, Python, Java, JS, SQL, React), Hackathon Honours (SIH, TECHAVANAM, CODEHEIST, Flipkart GRID 8.0), and Contact Channels.
  - **Functional UI Form:** Interactive client-side validation with real-time feedback and direct contact links for Phone, Email, GitHub, LinkedIn, LeetCode, HackerRank, and Instagram.

### 2. Assignment 2: React Components Practice (`Assignment-2/`)
- **Tech Stack:** React 18, Vite, ES6+, Modern CSS.
- **5 Reusable Modular Components (`src/components/`):**
  - `Header`: Dynamic app bar with active card metrics.
  - `Footer`: Clean metadata footer with student details and copyright.
  - `Card`: Multi-attribute card with priority badges (`low`, `medium`, `high`), category tags, and action buttons.
  - `Button`: Multi-variant (`primary`, `secondary`, `danger`, `outline`, `success`) and multi-size (`sm`, `md`, `lg`) design token button.
  - `Form`: Controlled input form collecting title, category, priority, and description to dynamically emit newly constructed card components into React state.
- **Dynamic State in `App.jsx`:**
  - State array managed via `useState`.
  - Adding cards dynamically via the `Form`.
  - Deleting cards immutably.
  - Toggling completion status.
  - Category and priority pill filters.

### 3. Mini-Project: React Blog UI (`Mini-Project/`)
- **Tech Stack:** React 18, Vite, CSS Grid, JSON Data.
- **Data Source (`src/data/posts.json`):** 8 detailed articles covering **React** (React 19, Hooks, State Management), **CSS** (Subgrid, Container Queries, `clamp()`), and **Hackathons** (SIH 36-hr MVP playbook, Flipkart GRID 8.0 systems).
- **Core Functionality:**
  - **Live Search Bar (`SearchBar.jsx`):** Instant, case-insensitive title filtering with clear button and real-time query match counter.
  - **Category Filter Pills (`CategoryFilter.jsx`):** Filter pills for `All`, `React`, `CSS`, and `Hackathons` with dynamic count badges and glowing active states.
  - **Responsive Post Grid (`PostCard.jsx`):** Displays category badges, read times, publication dates, and excerpts.
  - **Article Reader Modal (`PostModal.jsx`):** Modal dialog to read the full article without page reloads.

---

## 🚀 Quickstart Guide

### Running Assignment 1 (Personal Portfolio)
No compilation or package installation is needed:
```bash
cd Assignment-1
# Simply double-click index.html or run:
npx serve .
# or
python -m http.server 3000
```

### Running Assignment 2 (React Components Practice)
```bash
cd Assignment-2
npm install
npm run dev
```

### Running Mini-Project (React Blog UI)
```bash
cd Mini-Project
npm install
npm run dev
```

### Building for Production
Both React projects have verified, zero-error production builds:
```bash
# Assignment 2
cd Assignment-2 && npm run build

# Mini-Project
cd ../Mini-Project && npm run build
```

---

## 🧹 Git Hygiene & Submodule Safety
Both `Assignment-2/` and `Mini-Project/` have been verified to contain **no hidden `.git` folders**, ensuring that pushing this root repository to GitHub will smoothly track all files without creating detached or broken submodules.
