# Johan Lakshmanan – Portfolio Website

A modern, interactive portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Purpose

Showcase the professional experience, projects, skills, and contact information of Johan Lakshmanan, a Software Engineer at Dell Technologies. The site is designed to be visually engaging, responsive, and easy to navigate.

## Features

- Animated, section-based navigation (Home, Internships, Projects, Skills, Resume (PDF), Contact)
- Custom animated cursor for desktop
- Responsive design with mobile menu
- Smooth scrolling and animated transitions (Framer Motion)
- Contact form with email integration (Formspree)
- Modern UI with Tailwind CSS and dark mode support
- Lazy loading for performance
- **NEW**: Social media links (LinkedIn, GitHub, Email)
- **NEW**: Scroll progress indicator
- **NEW**: Back-to-top button with smooth scroll
- **NEW**: Enhanced 3D hover effects on project cards
- **NEW**: Interactive skill animations
- **NEW**: Automatic GitHub Actions deployment

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

## Deployment

### Automatic Deployment (Recommended)

This project uses **GitHub Actions** for automatic deployment to GitHub Pages. No manual deployment steps required:

1. Push changes to the `main` branch
2. GitHub Actions automatically builds and deploys the site
3. Site is live at https://johanium.com/

The deployment workflow is defined in `.github/workflows/deploy.yml` and handles:
- Installing dependencies
- Building the project
- Deploying to GitHub Pages
- Preserving the custom domain (johanium.com)

### Manual Deployment (Local)

If you need to deploy manually (not recommended):

```bash
npm run build
# The built files will be in the dist/ directory
# You would need to manually upload these to your hosting provider
```

**Note**: The old `npm run deploy` script using `gh-pages` has been removed in favor of the automatic GitHub Actions workflow.

## Project Structure

- `src/components/` – Main sections (Home, Internships, Projects, Skills, ResumeEmbed, Contact)
- `src/App.tsx` – Main app layout and navigation
- `src/data/profile.ts` – Centralized profile data (experience, projects, skills, awards)
- `src/assets/` – Static assets
- `.github/workflows/deploy.yml` – GitHub Actions deployment workflow

### Resume PDF

Place an up-to-date `resume.pdf` in the `public/` directory (path: `public/resume.pdf`). The Resume section provides:

- Inline embedded preview (iframe)
- Download button
- Open in new tab
- Optional print shortcut

If the file is missing a warning box is shown instead of a broken embed.

## Updating Content

The website content is centralized in `src/data/profile.ts`. To update your experience, projects, skills, or awards:

1. Edit `src/data/profile.ts` with your new information
2. Push to the `main` branch
3. GitHub Actions will automatically deploy the changes

**Key sections in profile.ts:**
- `experience` - Work experience entries
- `projects` - Project showcase
- `skillCategories` - Technical skills organized by category
- `awards` - Awards and achievements
- `education` - Educational background

This centralized approach ensures consistency across all sections and makes updates easy.

## Author

**Johan Lakshmanan**  
Software Engineer at Dell Technologies  
[linkedin.com/in/JLakshmanan](https://linkedin.com/in/JLakshmanan)  
[github.com/JTRON780](https://github.com/JTRON780)

---

This project is open source and available for learning and inspiration.
