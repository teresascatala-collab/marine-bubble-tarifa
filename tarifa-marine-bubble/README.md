# Tarifa Marine Bubble — Landing (Vite + React + Tailwind)

Landing page lista para desplegar en **Netlify** con formularios Netlify Forms.

## 🚀 Desarrollo local
```bash
npm install
npm run dev
```

## 🏗️ Build de producción
```bash
npm run build
npm run preview
```

## 🌐 Despliegue en Netlify (con GitHub)
1. Crea un repositorio en GitHub y sube estos archivos a la raíz.
2. Entra en Netlify → **Add new site** → **Import from Git** → conecta tu GitHub.
3. Elige el repo y usa:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. (Opcional) Activa **Forms** en Netlify para ver los envíos del formulario “reserva”.

## 🔧 Personalización rápida
- Edita textos e imágenes en `src/App.jsx` (objeto `CONFIG`).
- Sube tus fotos a `public/images/` y apunta las rutas en `CONFIG.gallery`.
- Sustituye `airbnbUrl`, `bookingUrl`, y el `mapsEmbed` por los reales.
