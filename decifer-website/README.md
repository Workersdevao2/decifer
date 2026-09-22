# Decifer Sport Resort — Website

Pure HTML / CSS / JS site for **Cloudflare Pages** + **GitHub**.

No frameworks. Forms open WhatsApp with a structured message (no backend).

## Deploy path

Push the **contents of this folder** (`decifer-website/`) to the repository root — not a parent wrapper folder.

```
index.html
desporto.html
aluguer.html
alojamento.html
eventos.html
espacos.html
inscricao.html
contacto.html
css/styles.css
js/main.js
images/
README.md
```

## Contactos oficiais

| Canal | Valor |
|--------|--------|
| Telefone / WhatsApp | +244 936 724 676 |
| Padel (reservas) | +244 929 797 204 |
| Email | reservas@decifersportresort.co.ao |
| Morada | Rua do Centro de Distribuição da EPAL, Benfica II, Lar do Patriota |
| Instagram | https://www.instagram.com/decifersportresort/ |
| Facebook | https://www.facebook.com/decifersportresortcoque |

## Formulários (WhatsApp)

Primary CTAs link to the form first. WhatsApp opens only after submit.

| Formulário | Página | Destino |
|------------|--------|---------|
| Inscrição (aulas / escolinhas) | `inscricao.html` | 936… (Padel aulas → 929…) |
| Aluguer campo / padel / piscina | `aluguer.html` | 936… (Padel → 929…) |
| Reserva de alojamento | `alojamento.html` | 936… |
| Proposta de evento | `eventos.html` | 936… |
| Contacto geral | `contacto.html` | 936… |

## Conteúdo

- **Desporto** — Aulas / Escolinhas only → `inscricao.html`
- **Aluguer** — Campo, padel, piscina (avulso)
- **Alojamento** — Suite Casal 80.000 Kz · Quarto Duplo 90.000 Kz
- **Eventos** — Toldos, esplanada, sala de conferências
- **Espaços** — Overview de venues

## Deploy on Cloudflare Pages

1. Create a GitHub repository  
2. Push the **contents** of `decifer-website/` to the repo root  
3. Cloudflare Dashboard → Pages → Create project → Connect to Git  
4. Build settings: Framework **None**, output directory `/`  
5. Deploy  

## Language

- Header **PT / EN** toggle (outside the hamburger)
- Preference saved in `localStorage` (`decifer-lang`)
- Translations in `js/i18n.js`

## Notes

- All content images are local under `images/` (no Unsplash hotlinks).
- Images are JPEG-optimized for web (resized + progressive).
- Logo and favicons are local.
- No sticky bottom CTA bar.
- Home hero: dual-image slideshow with zoom.
- Mobile: thin-line hamburger (menu opens from the right).
- Lazy loading on below-the-fold images; `data-bg` + IntersectionObserver for some backgrounds.

## Style principles

- Thin borders (1px / 1.5px), light typography (Inter 300–500)
- Nearly square corners, accent aligned with brand
- Photo heroes on inner pages; overlay cards on home
- Logo in header and footer on every page
