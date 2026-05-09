# Niraj Trivedi CS - Company Portfolio Website

A modern, responsive, and high-performance company portfolio website built for **Niraj Trivedi CS**, a professional services firm. This project is a pixel-perfect clone designed to showcase the firm's services, team, infrastructure, and expertise with a premium aesthetic.

## 🚀 Technologies Used

- **Frontend Core**: [React 19](https://react.dev/) - Modern component-based UI library.
- **Build Tool**: [Vite 8](https://vitejs.dev/) - Ultra-fast frontend build tool and development server.
- **Routing**: [React Router DOM 7](https://reactrouter.com/) - Declarative routing for React applications.
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) - Comprehensive icon library (FontAwesome, Material Icons, etc.).
- **Styling**: [Vanilla CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Custom CSS with modern variables (design tokens) and responsive layouts.
- **Typography**: [Google Fonts](https://fonts.google.com/) - Integration of Rajdhani, Roboto, Open Sans, Lato, and Poppins.

## 🏗️ Architecture & Structure

The project follows a clean, modular architecture to ensure maintainability and scalability.

```text
Nirajtrivedi_proj/
├── public/                 # Static assets (favicons, robots.txt, sitemap)
├── src/
│   ├── assets/             # Project images, logos, and global static files
│   ├── components/         # Reusable UI components
│   │   ├── Header/         # Navigation & Brand identity
│   │   ├── Footer/         # Site map & Contact info
│   │   ├── BackToTop/      # Scroll enhancement utility
│   │   └── ScrollToTop/    # Router utility for page transitions
│   ├── pages/              # Main page-level components
│   │   ├── Home/           # Dynamic landing page
│   │   ├── About/          # Firm history and values
│   │   ├── Teams/          # Professional staff profiles
│   │   ├── Services/       # Detailed service offerings
│   │   ├── Infrastructure/ # Facilities and technology showcase
│   │   └── Contact/        # Communication gateway & Maps
│   ├── hooks/              # Custom React hooks for business logic
│   ├── App.jsx             # Main application component & Routing config
│   ├── main.jsx            # Application entry point
│   ├── index.css           # Global styles & CSS variables (Design System)
│   └── App.css             # Layout-specific global styles
├── index.html              # HTML template
├── package.json            # Project dependencies & scripts
└── vite.config.js          # Vite configuration
```

### Key Architectural Decisions:
- **Component-Level Styling**: Each component and page has its own dedicated `.css` file for better encapsulation.
- **Design Tokens**: Global CSS variables are defined in `index.css` for consistent colors, fonts, and spacing.
- **Lazy Load Ready**: The structure is optimized for future implementation of code-splitting and lazy loading.

## 🔄 Application Flow

1. **Initialization**: The application starts at `main.jsx`, which renders the `App` component into the DOM.
2. **Routing Setup**: `App.jsx` uses `BrowserRouter` from `react-router-dom` to manage the single-page application (SPA) flow.
3. **Persistent Layout**: The `Header` and `Footer` components are rendered outside the `<Routes>` block, ensuring they remain visible across all pages.
4. **Navigation**: When a user clicks a link in the `Header`, the URL changes, and `React Router` dynamically swaps the content in the `<main>` section with the corresponding page component.
5. **Enhanced UX**: 
   - `ScrollToTop`: Ensures that whenever a route changes, the window scrolls back to the top.
   - `BackToTop`: Provides a smooth floating button for easy navigation on long pages.
   - `Animate-on-Scroll`: Custom CSS animations are triggered as users scroll through the sections.

## ✨ Key Features

- **Pixel-Perfect Design**: Mirroring the professional firm's original aesthetic with precision.
- **Fully Responsive**: Optimized for desktops, tablets, and mobile devices.
- **Modern Animations**: Subtle fade-in and slide-up animations for a premium feel.
- **SEO Optimized**: Semantic HTML5 structure and optimized meta tags.
- **Interactive Elements**: Hover effects, smooth transitions, and functional contact forms.

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Run the development server:
```bash
npm run dev
```

### Build
Generate a production-ready bundle:
```bash
npm run build
```

---
*Created with ❤️ for Niraj Trivedi CS*
# Niraj
