# Johan Lakshmanan – Portfolio Website

A modern, interactive portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Purpose

Showcase the professional experience, projects, skills, and contact information of Johan Lakshmanan, a Computer Science student at UMass Amherst. The site is designed to be visually engaging, responsive, and easy to navigate.

## Features

- Animated, section-based navigation (Home, Internships, Projects, Skills, Resume (PDF), Contact)
- Custom animated cursor for desktop
- Responsive design with mobile menu
- Smooth scrolling and animated transitions (Framer Motion)
- Contact form with email integration (Formspree)
- Modern UI with Tailwind CSS and dark mode support
- Lazy loading for performance

## Technologies Used

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for fast development
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Formspree](https://formspree.io/) for contact form handling

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
npm install
```

### Running Locally

```bash
npm run dev
```

The site will be available at [http://localhost:5173](http://localhost:5173) by default.

### Building for Production

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## Project Structure

- `src/components/` – Main sections (Home, Internships, Projects, Skills, ResumeEmbed, Contact)
- `src/App.tsx` – Main app layout and navigation
- `src/assets/` – Static assets

### Resume PDF

Place an up-to-date `resume.pdf` in the `public/` directory (path: `public/resume.pdf`). The Resume section provides:

- Inline embedded preview (iframe)
- Download button
- Open in new tab
- Optional print shortcut

If the file is missing a warning box is shown instead of a broken embed.

## Author

**Johan Lakshmanan**  
[jlakshmanan@umass.edu](mailto:jlakshmanan@umass.edu)  
[linkedin.com/in/JLakshmanan](https://linkedin.com/in/JLakshmanan)

---

This project is open source and available for learning and inspiration.
