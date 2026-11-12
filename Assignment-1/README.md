# Assignment 1: Personal Portfolio Website

A responsive, high-performance personal portfolio built exclusively with **pure semantic HTML5** and **modern CSS3 (Flexbox & CSS Grid)** without relying on external frameworks, CDN libraries, or React.

## 👤 Developer Profile
- **Name & Role:** Prahadeesh K — Information Technology Student & Software Developer
- **Institution:** Sri Krishna College of Engineering and Technology (SKCET), Coimbatore
- **Academic Tenure:** 2025–Present
- **CGPA:** 8.95 / 10.0
- **Phone:** +91 8778197031
- **Email:** prahadeeshkalimuthu@gmail.com
- **Handles:**
  - GitHub: [Praha-Razr](https://github.com/Praha-Razr)
  - LinkedIn: [prahadeesh-kalimuthu](https://www.linkedin.com/in/prahadeesh-kalimuthu-9b3b6a353/)
  - LeetCode: [Praha-Razr](https://leetcode.com/u/Praha-Razr)
  - HackerRank: [Praha_Razr](https://hackerrank.com/profile/Praha_Razr)
  - Instagram (Photography): [@itz_razr_clicks](https://instagram.com/itz_razr_clicks)

---

## 🚀 Features & Architecture

### 1. Semantic HTML5 Structure
- Structured hierarchy utilizing `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, and `<footer>`.
- Complete ARIA attributes (`aria-label`, `aria-expanded`, `role="alert"`, `aria-live="polite"`).
- Inline scalable vector graphics (SVG) for lightning-fast loads and zero CDN dependencies.

### 2. Modern CSS3 Layouts
- **CSS Grid:**
  - Featured Projects Showcase (`grid-template-columns: repeat(2, 1fr)`).
  - Technical Skills categorizations.
  - Hackathons track record cards.
  - Contact details and interactive form columns.
- **CSS Flexbox:**
  - Sticky blurred header with brand logo and navigation menu.
  - Hero section layout and statistics counter badges.
  - Timeline items and action buttons.
- **Design Tokens & Theme:**
  - CSS Custom Properties (`:root` variables) for deep dark theme, accents, and spacing.
  - Glassmorphic navigation bar with `backdrop-filter`.
  - Fully responsive breakpoints for Desktop, Tablet, and Mobile devices.

### 3. Featured Projects
1. **Civic-Connect:** Citizen grievance logging and redressal platform with live GPS geotagging and administrative workflows.
2. **Sahaaya Grid:** Decentralized emergency dispatch network matching affected citizens with volunteer resources during crisis.
3. **Waste Guard AI:** Computer-vision-powered smart waste classification and community recycling rewards.
4. **UniServ:** Peer-to-peer campus and hyperlocal workforce app for verified student micro-task gigs.

### 4. Interactive Contact Form
- Client-side validation for Name, valid Email syntax, and Message length.
- Simulated delivery lifecycle with loading indicator and temporary success banner.

---

## 📂 File Structure
```
Assignment-1/
├── index.html      # Semantic HTML5 document
├── style.css       # Pure modern CSS3 (Variables, Flexbox, Grid)
├── script.js       # Lightweight vanilla JS for mobile menu & form
└── README.md       # Project documentation
```

## 🌐 How to View
Open `index.html` in any modern web browser or run a simple local HTTP server:
```bash
npx serve .
# or
python -m http.server 3000
```
