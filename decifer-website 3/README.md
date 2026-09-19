# Decifer Sport Resort — Website

Pure HTML / CSS / JS website ready for **Cloudflare Pages** + **GitHub**.

No frameworks. Static files only. Forms open WhatsApp with a structured message (no backend required).

## Structure

```
decifer-website/
├── index.html              → Home (image hero + overlay cards)
├── desporto.html           → Aulas / Escolinhas only
├── aluguer.html            → Campo, Padel, Piscina + formulário de aluguer
├── alojamento.html         → 32 Suítes + formulário de reserva
├── eventos.html            → Eventos + pedido de proposta
├── espacos.html            → Sala, esplanada, overview de espaços
├── inscricao.html          → Inscrição atletas (aulas / escolinhas)
├── contacto.html           → Contacto geral
├── css/styles.css
├── js/main.js              → Menu + formulários → WhatsApp
├── images/                 → logo + favicons
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

Primary CTAs (Inscrever, Reservar, etc.) link to the relevant form first. WhatsApp opens only after submit.

| Formulário | Página | Destino WhatsApp |
|------------|--------|------------------|
| Inscrição (aulas / escolinhas) | `inscricao.html` | 936… (Padel aulas → 929…) |
| Aluguer campo / padel / piscina | `aluguer.html` | 936… (Padel → 929…) |
| Reserva de alojamento | `alojamento.html` | 936… |
| Proposta de evento | `eventos.html` | 936… |
| Contacto geral | `contacto.html` | 936… |

## Separação Desporto vs Aluguer

- **Desporto** — formação contínua (escolinhas, aulas, sócio). CTA → `inscricao.html`
- **Aluguer** — reservas avulsas de campo, padel e piscina. CTA → formulário em `aluguer.html`

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
