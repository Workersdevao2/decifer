# Decifer Sport Resort – Website

Pure HTML / CSS / JS website. Ready for GitHub + Cloudflare Pages.

## Structure

```
decifer-sport-resort/
├── index.html          → Homepage
├── aulas.html          → Aulas & Escolinhas
├── aluguer.html        → Aluguer de Campos & Quadras
├── alojamento.html     → Suites & Quartos
├── eventos.html        → Eventos
├── contactos.html      → Contactos
├── css/
│   └── styles.css      → Global styles (Minimalist Luxury)
├── js/
│   └── main.js         → Mobile menu
├── images/             → Photos
└── videos/             → Promotional videos
```

## How to update content

- **Events**: Edit `eventos.html` and the events carousel on `index.html`
- **Prices**: Edit the price lists inside `aulas.html`, `aluguer.html` and `alojamento.html`
- **Text / contact info**: Search and replace in the relevant HTML files

## Deploy

1. Push this folder to a GitHub repository
2. In Cloudflare Pages → Create project → Connect the repo
3. Build settings: leave empty (no build command needed)
4. Deploy

## Design

- Mobile-first
- Minimalist Luxury style
- Accent color: Deep Sport Green (`#1F4D3A`)
- Font: Inter
