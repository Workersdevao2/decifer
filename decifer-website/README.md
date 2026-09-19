# Decifer Sport Resort — Website

Pure HTML / CSS / JS website ready for **Cloudflare Pages** + **GitHub**.

No frameworks. Static files only.

## Structure

```
decifer-website/
├── index.html              → Home (full image hero)
├── desporto.html           → Aulas/Escolinhas + Aluguer (campos, padel, piscina)
├── alojamento.html         → 32 Suítes (Suite Casal & Quarto Duplo)
├── eventos.html            → Casamentos, corporativos, toldos, esplanada, sala
├── espacos.html            → Aluguer de espaços (sala, esplanada, suítes, campos)
├── contacto.html           → Contacto, formulário, redes sociais
├── css/
│   └── styles.css          → Design system (thin lines, Inter, accent)
├── js/
│   └── main.js             → Menu hamburger + form
├── images/
│   ├── logo.jpg            → Brand logo (header, footer, favicon source)
│   ├── favicon-16.png
│   ├── favicon-32.png
│   └── apple-touch-icon.png
└── README.md
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

## Conteúdo por página

### Desporto
Separado em duas zonas:
1. **Aulas / Escolinhas** — Futebol, Natação, Padel, Jiu-Jitsu, Sócio Natação (preços, horários, documentação, regras de pagamento)
2. **Aluguer** — Campo de relva sintética (completo / meio, com/sem balneário), Padel (1h / 1h30), Piscina (por idade e fins de semana)

### Alojamento
- Suite Casal: 80.000 Kz / noite  
- Quarto Duplo: 90.000 Kz / noite  
- Cama extra: 40.000 Kz  
- Inclui: estacionamento, pequeno-almoço, internet  
- Check-in 14:00 · Check-out 12:00  

### Eventos
- Toldos: 100.000 Kz (máx. 40 convidados)  
- Esplanada e Sala de Conferências: valor sob consulta  
- Ideal para: casamentos, noivados, aniversários, batizados, corporativos, team building  

Preços alinhados com o brochure oficial Decifer Sport Resort.

## Deploy on Cloudflare Pages

1. Create a new GitHub repository  
2. Push this folder (contents of `decifer-website/`) to the repo root  
3. Cloudflare Dashboard → Pages → Create project → Connect to Git  
4. Build settings:
   - Framework preset: **None**
   - Build command: *(leave empty)*
   - Build output directory: `/` *(or leave as root)*
5. Deploy  

Custom domain can be added afterwards in Cloudflare Pages settings.

## Notes

- Content images (rooms, courts, pools) are Unsplash hotlinks. For production, download and host under `images/` or via Cloudflare Images.
- Logo and favicons are local (`images/logo.jpg` + generated PNGs).
- Contact form currently uses a simple JS alert. Connect Formspree, Getform, or a Cloudflare Worker for real submissions.
- No sticky bottom CTA bar (removed by design preference).
- Mobile: thin-line hamburger menu with X animation; fully responsive.

## Style principles

- Very thin borders (1px / 1.5px)
- Light typography (Inter 300–500), subtle letter-spacing
- Nearly square corners
- Accent color aligned with brand (lime/teal)
- Premium, calm, contemporary look
- Logo in header and footer on every page
- Home feature cards: text overlaid on images (gradient)
