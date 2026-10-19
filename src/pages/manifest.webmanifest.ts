import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  const base = import.meta.env.BASE_URL;
  const manifest = {
    $schema: "https://json.schemastore.org/web-manifest-combined.json",
    name: "Elemento — Citas y Reflexiones Atemporales",
    short_name: "Elemento",
    description: "Citas célebres, filosofía y reflexiones de Séneca, Marco Aurelio, Cervantes, Borges y más.",
    start_url: base,
    scope: base,
    display: "standalone",
    display_override: ["window-controls-overlay", "standalone", "minimal-ui"],
    orientation: "any",
    background_color: "#0a0a0f",
    theme_color: "#0a0a0f",
    categories: ["lifestyle", "education", "books"],
    lang: "es-ES",
    dir: "ltr",
    icons: [
      {
        src: `${base}icons/icon-192.png`,
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: `${base}icons/icon-512.png`,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: `${base}icons/icon-maskable-192.png`,
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: `${base}icons/icon-maskable-512.png`,
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: `${base}icons/apple-touch-icon.png`,
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcuts: [
      {
        name: "Reflexión del día",
        short_name: "Diaria",
        description: "Cita y aprendizaje del día",
        url: base,
        icons: [{ src: `${base}icons/icon-192.png`, sizes: "192x192" }],
      },
      {
        name: "Explorar sabiduría",
        short_name: "Explorar",
        description: "Descubre autores, categorías y estados de ánimo",
        url: `${base}#explore`,
        icons: [{ src: `${base}icons/icon-192.png`, sizes: "192x192" }],
      },
    ],
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: { "Content-Type": "application/manifest+json; charset=utf-8" },
  });
};
