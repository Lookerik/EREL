# Sigil store

## Publicar sin programar
1. Sube TODO el contenido de esta carpeta a un repositorio nuevo de GitHub (arrastrar y soltar en github.com → "uploading an existing file").
2. Entra en https://vercel.com, inicia sesión con GitHub → "Add New Project" → elige el repositorio → "Deploy".
3. En ~1 minuto tendrás tu web online con una URL pública. Cada cambio que subas a GitHub se publica solo.

## Cambiar productos y fotos
- Productos, precios y descripciones: `data/products.ts`.
- Fotos reales (24 por producto): súbelas a `public/products/<nombre>/product-01-01.webp … -24.webp` y en `data/products.ts` cambia `placeholder(name)` por `frames("obsidian", "product-01")`.
- Logo: `public/brand/logo.png`.
- **Tus datos de contacto (WhatsApp, email, Instagram, TikTok): edita `lib/site.ts`.** Es lo primero que debes cambiar.
- No hay pagos en la web: cada producto tiene botones para pedir por WhatsApp, email o Instagram con el mensaje ya escrito.

## Local (opcional)
`npm install && npm run dev`
