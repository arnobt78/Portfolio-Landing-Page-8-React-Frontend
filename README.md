# Portfolio Landing Page 8 - React, Vite, JavaScript, TailwindCSS, Three.js Frontend Project

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4.1-green)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.10-blueviolet)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-R3F-black)](https://threejs.org/)
[![EmailJS](https://img.shields.io/badge/EmailJS-Contact%20Form-orange)](https://www.emailjs.com/)

A modern, single-page developer portfolio built with React, Vite, and Tailwind CSS. It features a 3D hero scene (React Three Fiber), animated project showcase, work experience timeline, client testimonials, and a contact form powered by EmailJS—ideal for learning full-stack frontend patterns and reusing sections in your own projects.

- **Live Demo:** [https://portfolio-ui-8.vercel.app/](https://portfolio-ui-8.vercel.app/)

![Screenshot 2026-03-07 at 11 56 52](https://github.com/user-attachments/assets/3aa9cc89-20d2-43d9-b6cc-dbc8f0288bfe)
![Screenshot 2026-03-07 at 11 57 06](https://github.com/user-attachments/assets/0323a20c-780a-4ac0-9abc-2d2a83492d68)
![Screenshot 2026-03-07 at 11 57 19](https://github.com/user-attachments/assets/951c8439-222f-473f-88bd-02a2bff142c3)
![Screenshot 2026-03-07 at 11 57 30](https://github.com/user-attachments/assets/5ef3e28c-6b15-4286-a3c6-d9abbc54aaf9)
![Screenshot 2026-03-07 at 11 57 39](https://github.com/user-attachments/assets/524aeb07-1e22-4411-8802-2d283a03afc2)
![Screenshot 2026-03-07 at 11 57 52](https://github.com/user-attachments/assets/c9b6a94a-55b9-4dd0-8d12-8c70944d354d)

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack & Dependencies](#tech-stack--dependencies)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [How to Run & Use](#how-to-run--use)
- [Features & Functionalities](#features--functionalities)
- [Sections & Components Walkthrough](#sections--components-walkthrough)
- [Reusing Components in Other Projects](#reusing-components-in-other-projects)
- [API & Backend](#api--backend)
- [Routes & Navigation](#routes--navigation)
- [Styling & Theming](#styling--theming)
- [Scripts & Tooling](#scripts--tooling)
- [Keywords](#keywords)
- [Conclusion](#conclusion)
- [License](#license)
- [Happy Coding!](#happy-coding-)

---

## Project Overview

Portfolio Landing Page 8 is a **frontend-only** single-page application (SPA) that showcases a developer portfolio with:

- A **3D hero** (desk scene, cube, rings, React logo) using React Three Fiber and Three.js
- **About** section with copy-to-clipboard email and an interactive globe (react-globe.gl)
- **Projects** carousel with 3D computer model and video textures
- **Client reviews** with star ratings
- **Work experience** timeline with 3D character animations (FBX)
- **Contact form** that sends emails via EmailJS (no custom backend required)

There are **no API routes or server** in this repo; the only external integration is **EmailJS** for the contact form. All content is driven by in-app constants and assets.

---

## Tech Stack & Dependencies

| Category     | Technology                                                    |
| ------------ | ------------------------------------------------------------- |
| Framework    | React 18                                                      |
| Build tool   | Vite 5                                                        |
| Styling      | Tailwind CSS 3, custom CSS                                    |
| 3D / Canvas  | Three.js, @react-three/fiber, @react-three/drei, three-stdlib |
| Animation    | GSAP, @gsap/react, Leva (dev)                                 |
| Globe        | react-globe.gl                                                |
| Contact form | @emailjs/browser                                              |
| Utilities    | react-responsive, maath (easing)                              |

---

## Project Structure

```bash
portfolio-ui-8/
├── index.html                 # Entry HTML, SEO meta tags
├── package.json               # Scripts & dependencies
├── vite.config.js             # Vite config, manual chunks, rollup options
├── tailwind.config.js         # Tailwind theme (colors, fonts)
├── postcss.config.js          # PostCSS (Tailwind, Autoprefixer)
├── eslint.config.js           # ESLint (React, React Hooks, React Three)
├── .prettierrc                # Prettier config
├── public/                    # Static assets (no processing)
│   ├── vite.svg               # Favicon & default og:image
│   └── assets/                # Icons, images, project assets
├── src/
│   ├── main.jsx               # React root, StrictMode
│   ├── App.jsx                # Layout: Navbar + sections in order
│   ├── index.css              # Global styles, Tailwind, custom utilities
│   ├── constants/
│   │   └── index.js           # navLinks, clientReviews, myProjects, workExperiences, calculateSizes
│   ├── hooks/
│   │   └── useAlert.js        # Alert state (show/hide, text, type)
│   ├── sections/              # Page sections (one per file)
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Clients.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   └── components/            # Reusable UI & 3D components
│       ├── Alert.jsx
│       ├── Button.jsx
│       ├── Loading.jsx        # CanvasLoader for R3F
│       ├── HeroCamera.jsx
│       ├── HackerRoom.jsx     # 3D desk scene
│       ├── Cube.jsx
│       ├── Rings.jsx
│       ├── ReactLogo.jsx
│       ├── Target.jsx
│       ├── Developer.jsx      # 3D character with FBX animations
│       └── DemoComputer.jsx   # 3D computer with video texture
└── dist/                      # Production build (gitignored)
```

---

## Getting Started

### Prerequisites

- **Node.js** (v18+ recommended)
- **npm** or **yarn**

### Install

```bash
git clone <your-repo-url>
cd portfolio-ui-8
npm install
```

### Optional: Contact form (EmailJS)

To enable the contact form, create a `.env` file in the project root (see [Environment Variables](#environment-variables)). Without it, the form will throw when submitting; you can still run and explore the rest of the app.

---

## Environment Variables

This project uses **Vite**'s env system. Only the **Contact** section needs env vars; all are optional for local dev if you don’t submit the form.

### Required for contact form

Create a file named **`.env`** in the **project root** (same level as `package.json`):

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

- Names **must** start with `VITE_` so Vite exposes them to the client.
- In code they are read as `import.meta.env.VITE_APP_EMAILJS_*`.

### How to get these values (EmailJS)

1. Sign up at [https://www.emailjs.com/](https://www.emailjs.com/).
2. **Email Services:** Add an email service (e.g. Gmail) and copy the **Service ID** → `VITE_APP_EMAILJS_SERVICE_ID`.
3. **Email Templates:** Create a template (e.g. with `{{from_name}}`, `{{from_email}}`, `{{message}}`) and copy the **Template ID** → `VITE_APP_EMAILJS_TEMPLATE_ID`.
4. **Account → API Keys:** Copy the **Public Key** → `VITE_APP_EMAILJS_PUBLIC_KEY`.

### Example `.env` (do not commit real keys)

```env
VITE_APP_EMAILJS_SERVICE_ID=service_xxxxx
VITE_APP_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_APP_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxx
```

Add `.env` to `.gitignore` so secrets are not committed.

---

## How to Run & Use

| Command           | Description                                          |
| ----------------- | ---------------------------------------------------- |
| `npm run dev`     | Start Vite dev server (e.g. <http://localhost:5173>) |
| `npm run build`   | Production build → `dist/`                           |
| `npm run preview` | Serve `dist/` locally to test production build       |
| `npm run lint`    | Run ESLint on the project                            |

**Typical workflow:**

1. `npm install` → `npm run dev` → open the URL in the browser.
2. Edit `src/constants/index.js` to change nav links, projects, reviews, work experience.
3. Replace copy (name, tagline, email) in sections (Hero, About, Contact, Footer).
4. Add `.env` with EmailJS keys to test the contact form.

---

## Features & Functionalities

- **Responsive layout:** Mobile-first; navbar collapses to a sidebar on small screens.
- **Smooth scroll:** In-page navigation via `#home`, `#about`, `#work`, `#contact`.
- **3D hero:** R3F scene with responsive scaling (`calculateSizes`), pointer-based camera (HeroCamera), and optional beam-style CTA button.
- **About:** Grid layout, globe with custom label, copy-email with visual feedback (tick/copy icon).
- **Projects:** Carousel of projects; each has title, description, tech tags, spotlight image, logo, and a 3D computer with video texture; previous/next controls.
- **Clients:** Testimonials from `clientReviews` with avatar, name, position, stars.
- **Work experience:** List of jobs with icons; hovering/clicking switches the 3D character animation (idle, salute, clapping, victory).
- **Contact:** Form (name, email, message) sent via EmailJS; success/error alerts via `useAlert` + `Alert` component.
- **Footer:** Terms/Privacy placeholders, social icons, copyright.

---

## Sections & Components Walkthrough

### App layout

The app is one scrollable page. `App.jsx` composes the layout:

```jsx
<main className="max-w-7xl mx-auto relative">
  <Navbar />
  <Hero />
  <About />
  <Projects />
  <Clients />
  <WorkExperience />
  <Contact />
  <Footer />
</main>
```

---

### Navbar

- **File:** `src/sections/Navbar.jsx`
- **Data:** `navLinks` from `src/constants/index.js` (id, name, href).
- **Behavior:** Fixed header; desktop = horizontal links; mobile = hamburger that toggles a full-width sidebar. Clicking a nav link closes the menu (e.g. `onClick={closeMenu}` on `NavItems`).

**Reuse:** Import `navLinks` and `NavItems` (or the same structure) in any layout; ensure `href` values match your section ids (`#about`, `#work`, `#contact`).

---

### Hero

- **File:** `src/sections/Hero.jsx`
- **Behavior:** Headline + tagline; full-viewport R3F `Canvas` with `HeroCamera`, `HackerRoom`, `Cube`, `Rings`, `ReactLogo`, `Target`; CTA button linking to `#about`.
- **Responsiveness:** `useMediaQuery` (react-responsive) and `calculateSizes(isSmall, isMobile, isTablet)` adjust positions and scales for different breakpoints.

**Reuse:** Drop in another R3F scene or replace the group of 3D components; keep or remove Leva/Camera as needed.

---

### About

- **File:** `src/sections/About.jsx`
- **Behavior:** Grid of cards (image + text). One card uses `react-globe.gl` (Globe) with a custom label; another has a copy-to-clipboard email and a `Button` linking to `#contact`.
- **State:** `hasCopied` toggles icon (tick vs copy) for 2 seconds after copy.

**Reuse:** Swap images and copy; change Globe `labelsData` for location; reuse `Button` with `isBeam` and `containerClass`.

---

### Projects

- **File:** `src/sections/Projects.jsx`
- **Data:** `myProjects` from constants (title, desc, subdesc, href, texture, logo, logoStyle, spotlight, tags).
- **Behavior:** Single “current” project index; left/right buttons cycle; GSAP animates text on index change; R3F canvas shows `DemoComputer` with `currentProject.texture` as video texture.

**Reuse:** Replace `myProjects` with your own array; keep or simplify the 3D computer (e.g. static image) in another project.

---

### Clients

- **File:** `src/sections/Clients.jsx`
- **Data:** `clientReviews` (id, name, position, img, review).
- **Behavior:** Maps over reviews and renders a card with quote, avatar, name, position, and 5 star icons.

**Reuse:** Use the same structure with your own review array and assets.

---

### Work Experience

- **File:** `src/sections/Experience.jsx`
- **Data:** `workExperiences` (id, name, pos, duration, title, icon, animation).
- **Behavior:** R3F canvas with `Developer` (FBX character); list of jobs; hover/click sets `animationName` (e.g. idle, salute, clapping, victory) so the character plays the matching animation.

**Reuse:** Swap `workExperiences` and icons; reuse `Developer` in another R3F scene if you have the same FBX files and model.

---

### Contact

- **File:** `src/sections/Contact.jsx`
- **Behavior:** Form with name, email, message; onSubmit calls `emailjs.send()` with env vars; `useAlert` shows success or error; form resets on success.
- **Env:** `VITE_APP_EMAILJS_SERVICE_ID`, `VITE_APP_EMAILJS_TEMPLATE_ID`, `VITE_APP_EMAILJS_PUBLIC_KEY`.

**Reuse:** Use the same form and `useAlert` + `Alert` in any React app; replace EmailJS template variables if you change the payload.

---

### Footer

- **File:** `src/sections/Footer.jsx`
- **Behavior:** Terms/Privacy text, social icon links (GitHub, Twitter, Instagram), dynamic year and “John Doe.”

**Reuse:** Replace links and copy; keep or change social icons.

---

### Reusable components (short)

| Component                                      | Role                                                                         |
| ---------------------------------------------- | ---------------------------------------------------------------------------- |
| **Button**                                     | CTA with optional beam animation; props: `name`, `isBeam`, `containerClass`. |
| **Alert**                                      | Fixed toast; props: `type` ('danger' / 'success'), `text`.                   |
| **useAlert**                                   | Returns `{ alert, showAlert, hideAlert }` for toggling Alert.                |
| **Loading**                                    | R3F loading state using `useProgress` from drei (Html + progress %).         |
| **HeroCamera**                                 | Damped camera and optional group rotation from pointer; wraps children.      |
| **HackerRoom, Cube, Rings, ReactLogo, Target** | 3D objects for the hero scene.                                               |
| **Developer**                                  | 3D character with FBX animations; prop `animationName`.                      |
| **DemoComputer**                               | 3D computer with video texture; prop `texture` (video URL).                  |

---

## Reusing Components in Other Projects

### Button

Copy `src/components/Button.jsx` and the `.btn`, `.btn-ping`, `.btn-ping_dot` rules from `src/index.css`. Use as:

```jsx
<Button name="Let's work together" isBeam containerClass="sm:w-fit w-full" />
```

---

### Alert + useAlert

Copy `Alert.jsx`, `useAlert.js`, and the Alert-related markup/styles. In any component:

```jsx
const { alert, showAlert, hideAlert } = useAlert();
// ...
showAlert({ text: 'Saved!', type: 'success' });
// ...
{
  alert.show && <Alert {...alert} />;
}
```

---

### Constants-driven sections

Copy `src/constants/index.js` (or a subset) and the section component. Point the section to your own `navLinks`, `myProjects`, `clientReviews`, or `workExperiences` so content is data-driven and easy to edit.

---

### 3D (R3F) in another Vite/React app

Install:

```bash
npm install three @react-three/fiber @react-three/drei three-stdlib
```

Copy the needed component (e.g. `Cube.jsx`, `Loading.jsx`) and any assets (models, textures). Wrap in `<Canvas>` and ensure `Suspense` and a loader are used where needed.

---

## API & Backend

- **No backend in this repo.** The app is a static frontend.
- **EmailJS** is the only “backend” for the contact form: the browser sends a request from the client to EmailJS, which then sends an email using your configured service and template. No custom server or API routes are required.
- **Contact form payload** (in `Contact.jsx`) includes `from_name`, `to_name`, `from_email`, `to_email`, `message`. Adjust the template in EmailJS to match these variable names.

---

## Routes & Navigation

- **No React Router.** The app is a single page.
- **Navigation:** Hash links in the navbar (`#home`, `#about`, `#work`, `#contact`) scroll to the corresponding section. Smooth scrolling is enabled in `src/index.css` with `scroll-behavior: smooth` on `*`.
- **Section ids:** `Hero` → `id="home"`, `About` → `id="about"`, `WorkExperience` → `id="work"`, `Contact` → `id="contact"`.

---

## Styling & Theming

- **Tailwind:** Used for layout, spacing, typography, and responsive classes. Config in `tailwind.config.js` (custom colors like `black-200`, `white-600`, font `generalsans`).
- **Global CSS:** `src/index.css` imports Tailwind layers and defines custom utility classes (e.g. `.c-space`, `.head-text`, `.nav-ul`, `.btn`, `.grid-container`, `.field-input`, `.contact-container`). Font: General Sans (CDN).
- **Body background:** `#010103` for a dark theme.

To restyle: adjust `tailwind.config.js` and the custom classes in `index.css`; replace or add Tailwind classes in JSX.

---

## Scripts & Tooling

| Script  | Command           | Purpose                     |
| ------- | ----------------- | --------------------------- |
| dev     | `npm run dev`     | Start Vite dev server       |
| build   | `npm run build`   | Production build to `dist/` |
| preview | `npm run preview` | Serve `dist/`               |
| lint    | `npm run lint`    | Run ESLint                  |

Linting uses `eslint.config.js` (flat config) with React, React Hooks, React Refresh, and React Three plugins. Prettier is configured in `.prettierrc`.

---

## Keywords

portfolio, React, Vite, Tailwind CSS, single-page application, SPA, 3D, Three.js, React Three Fiber, R3F, developer portfolio, frontend, EmailJS, contact form, GSAP, animation, responsive, open source, learning project, Arnob Mahmud

---

## Conclusion

Portfolio Landing Page 8 is a full-featured frontend portfolio template: 3D hero, project carousel, work experience with 3D character, testimonials, and EmailJS contact form. Use it as a learning reference or as a base for your own portfolio by editing constants, sections, and styles. The only external dependency for “backend” behavior is EmailJS; set the three env variables to enable the contact form.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

---

## Happy Coding! 🎉

This is an **open-source project** - feel free to use, enhance, and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://www.arnobmahmud.com](https://www.arnobmahmud.com).

**Enjoy building and learning!** 🚀

Thank you! 😊
