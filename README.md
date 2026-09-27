# Arnav Okhade - Product Management & Strategy Portfolio

Interactive, multi-view Product Management & Strategy portfolio built with modern vanilla web standards (HTML5, CSS3, ES6+ JavaScript) with zero build steps or runtime dependencies.

## Features
- **Client-Side Hash Router**: Seamless multi-page exploration (`#home`, `#about`, `#resume`, `#case-studies`, `#experience`, `#frameworks`, `#contact`, `#case/:id`).
- **Interactive Case Deep Dives**: 8-stage interactive deep dives with problem statements, user segmentation, product specifications, telemetry/metrics, and live Streamlit agent links.
- **Featured Live AI Tool**: Direct link to the live Financial Model Impact Analyzer Streamlit app.
- **Spotlight Command Palette**: Keyboard-accessible (`Ctrl+K` / `⌘K`) search and quick navigation.
- **Theme Switcher**: Smooth dark/light mode toggle with persistent local storage.

## Structure
```
├── index.html          # Main HTML document & sticky single-line navigation
├── css/
│   ├── main.css        # Design tokens, typography, dark/light theme, components
│   └── case-study.css  # Case study layout and visual styling
├── js/
│   ├── data.js         # Portfolio content, case studies, experiences, metrics
│   ├── router.js       # Client-side hash routing engine
│   └── app.js          # View renderers, command palette, and UI controllers
└── assets/
    └── arnav-okhade.jpg # Headshot image
```

## Running Locally
Double-click `index.html` or serve via any static HTTP server:
```powershell
python -m http.server 8000
```
Then navigate to `http://localhost:8000`.

## Deployment
- **GitHub Pages**: Push `main` branch to GitHub and activate Pages under repository settings.
- **Netlify Drop**: Drag and drop the repository folder onto [Netlify Drop](https://app.netlify.com/drop).
- **Vercel**: Connect the GitHub repository for zero-config automatic deployments.
