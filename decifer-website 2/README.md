# Decifer Sport Resort — Website

Pure HTML / CSS / JS website ready for **Cloudflare Pages** + **GitHub**.

No frameworks. Static files only. Forms open WhatsApp with a structured message (no backend required).

## Structure

```
decifer-website/
├── index.html              → Home (full image hero + overlay cards)
├── desporto.html           → Aulas/Escolinhas + Aluguer (com formulário)
├── alojamento.html         → 32 Suítes + formulário de reserva
├── eventos.html            → Eventos + pedido de proposta
├── espacos.html            → Aluguer de espaços
├── inscricao.html          → Inscrição atletas (aulas / escolinhas)
├── contacto.html           → Contacto geral
├── css/
│   └── styles.css
├── js/
│   └── main.js             → Menu + formulários → WhatsApp
├── images/
│   ├── logo.jpg
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

## Formulários (WhatsApp)

All forms use class `form-whatsapp`. On submit, WhatsApp opens with a structured message built from the fields.

| Formulário | Página | Destino WhatsApp |
|------------|--------|------------------|
| Inscrição (aulas / escolinhas) | `inscricao.html` | 936 724 676 (Padel aulas → 929 797 204) |
| Reserva de alojamento | `alojamento.html` | 936 724 676 |
| Aluguer campo / padel / piscina | `desporto.html` | 936 724 676 (Padel → 929 797 204) |
| Proposta de evento | `eventos.html` | 936 724 676 |
| Contacto geral | `contacto.html` | 936 724 676 |

Minimal fields only. No backend.

## Conteúdo por página

### Desporto
1. **Aulas / Escolinhas** — Futebol, Natação, Padel, Jiu-Jitsu, Sócio Natação
2. **Aluguer** — Campo sintético, Padel, Piscina + formulário

### Alojamento
- Suite Casal: 80.000 Kz · Quarto Duplo: 90.000 Kz · Cama extra: 40.000 Kz
- Check-in 14:00 · Check-out 12:00

### Eventos
- Toldos: 100.000 Kz (máx. 40) · Esplanada / Sala: sob consulta

## Deploy on Cloudflare Pages

1. Create a GitHub repository
2. Push the contents of `decifer-website/` to the repo root
3. Cloudflare Dashboard → Pages → Create project → Connect to Git
4. Build settings: Framework **None**, output directory `/`
5. Deploy

## Notes

- Content photos: Unsplash hotlinks. For production, host under `images/` or Cloudflare Images.
- Logo and favicons are local.
- No sticky bottom CTA bar.
- Mobile: thin-line hamburger with X animation.

## Style principles

- Thin borders (1px / 1.5px), light typography (Inter 300–500)
- Nearly square corners, accent aligned with brand
- Home feature cards: text overlaid on images
- Logo in header and footer on every page
