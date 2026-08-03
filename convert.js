const fs = require('fs');

const config = {
    "colors": {
        "on-surface-variant": "#5e3f3b",
        "primary-fixed-dim": "#ffb4ab",
        "primary": "#bb0010",
        "on-primary-fixed-variant": "#93000a",
        "red-tint": "rgba(255, 42, 42, 0.05)",
        "surface-container-lowest": "#ffffff",
        "on-primary-fixed": "#410002",
        "secondary": "#855300",
        "outline-variant": "#e8bcb7",
        "inverse-on-surface": "#eaf1ff",
        "secondary-container": "#fea619",
        "surface-card": "#F4F4F5",
        "on-background": "#0b1c30",
        "error-container": "#ffdad6",
        "background": "#f8f9ff",
        "on-secondary": "#ffffff",
        "surface-pearl": "#F8F9FA",
        "outline": "#936e6a",
        "surface-container": "#e5eeff",
        "on-tertiary-fixed": "#131b2e",
        "surface-dim": "#cbdbf5",
        "secondary-fixed": "#ffddb8",
        "surface-variant": "#d3e4fe",
        "on-tertiary": "#ffffff",
        "on-secondary-fixed": "#2a1700",
        "on-primary": "#ffffff",
        "tertiary-container": "#6c748b",
        "surface-container-highest": "#d3e4fe",
        "inverse-primary": "#ffb4ab",
        "on-secondary-fixed-variant": "#653e00",
        "on-secondary-container": "#684000",
        "surface-container-high": "#dce9ff",
        "surface": "#f8f9ff",
        "surface-tint": "#c00011",
        "primary-container": "#e8121c",
        "tertiary-fixed": "#dae2fd",
        "inverse-surface": "#213145",
        "border-subtle": "#E4E4E7",
        "surface-container-low": "#eff4ff",
        "on-tertiary-container": "#fefcff",
        "on-tertiary-fixed-variant": "#3f465c",
        "on-error": "#ffffff",
        "surface-bright": "#f8f9ff",
        "primary-fixed": "#ffdad6",
        "tertiary": "#545c72",
        "on-primary-container": "#fffbff",
        "on-error-container": "#93000a",
        "error": "#ba1a1a",
        "on-surface": "#0b1c30",
        "secondary-fixed-dim": "#ffb95f",
        "tertiary-fixed-dim": "#bec6e0"
    },
    "borderRadius": {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
    },
    "spacing": {
        "stack-sm": "12px",
        "container-max": "1280px",
        "stack-md": "24px",
        "section-padding": "120px",
        "gutter": "32px",
        "stack-lg": "48px",
        "section-padding-mobile": "64px"
    },
    "fontFamily": {
        "headline-lg-mobile": ["Hanken Grotesk", "sans-serif"],
        "display-xl": ["Hanken Grotesk", "sans-serif"],
        "label-caps": ["JetBrains Mono", "monospace"],
        "headline-sm": ["Hanken Grotesk", "sans-serif"],
        "headline-md": ["Hanken Grotesk", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "headline-lg": ["Hanken Grotesk", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "button": ["Inter", "sans-serif"]
    }
};

let css = `@import "tailwindcss";\n\n@theme {\n`;
for (const [k, v] of Object.entries(config.colors)) {
    css += `  --color-${k}: ${v};\n`;
}
for (const [k, v] of Object.entries(config.borderRadius)) {
    if (k === 'DEFAULT') {
        css += `  --radius: ${v};\n`;
    } else {
        css += `  --radius-${k}: ${v};\n`;
    }
}
for (const [k, v] of Object.entries(config.spacing)) {
    css += `  --spacing-${k}: ${v};\n`;
}
for (const [k, v] of Object.entries(config.fontFamily)) {
    css += `  --font-${k}: ${v.map(f => '"' + f + '"').join(', ')};\n`;
}
css += `}\n\n`;
css += `
.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}
.glass {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}
.glass-dark {
    background: rgba(11, 28, 48, 0.03);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}
.bento-grid-pro {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(2, 300px);
    gap: 1.5rem;
}
.bento-1 { grid-column: span 7; grid-row: span 2; }
.bento-2 { grid-column: span 5; grid-row: span 1; }
.bento-3 { grid-column: span 2; grid-row: span 1; }
.bento-4 { grid-column: span 3; grid-row: span 1; }

@media (max-width: 768px) {
    .bento-grid-pro { display: flex; flex-direction: column; height: auto; }
    .bento-grid-pro > div { aspect-ratio: 16/9; }
}

.text-glow {
    text-shadow: 0 0 30px rgba(187, 0, 16, 0.15);
}

.premium-gradient {
    background: radial-gradient(circle at top right, rgba(232, 18, 28, 0.05), transparent 40%),
                radial-gradient(circle at bottom left, rgba(187, 0, 16, 0.03), transparent 40%);
}

body {
    background-color: var(--color-surface);
    color: var(--color-on-surface);
    font-family: var(--font-body-md);
}
`;

fs.writeFileSync('src/app/globals.css', css);
console.log('globals.css written successfully');
