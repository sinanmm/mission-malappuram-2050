# Mission Malappuram 2050

Premium investor-grade website for Mission Malappuram 2050 — building the world's first district prepared for the Artificial Super Intelligence era.

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide Icons**
- **next/image** optimization

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project Structure

```
app/
  layout.js          # Root layout, fonts, SEO metadata
  page.jsx           # Main page assembling all sections
  globals.css        # Tailwind + premium design tokens

components/
  layout/            # Header, Footer
  ui/                # Reusable UI (Button, Section, GlassCard, etc.)
  sections/          # 22 cinematic page sections
```

## Customization

- Replace Unsplash placeholder images with your own 8K Malappuram assets in `public/` or update `src` URLs in section components.
- Update team photos and copy in `CoreTeam.jsx` and `FoundingNetwork.jsx`.
- Configure contact email in `Footer.jsx` and `FinalCTA.jsx`.

## License

Private — Mission Malappuram 2050.
