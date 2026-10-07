// Generates elegant monochrome placeholder frames (a turning ring) so the 360° system works with no photos.
// REPLACE: once you have photos, use frames() in data/products.ts instead of placeholder().
export function placeholder(name: string, count = 24): string[] {
  return Array.from({ length: count }, (_, i) => {
    const a = (i / count) * Math.PI * 2, rx = 40 + 190 * Math.abs(Math.cos(a));
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'><rect width='600' height='600' fill='#000'/><ellipse cx='300' cy='290' rx='${rx.toFixed(1)}' ry='200' fill='none' stroke='#d9d9d9' stroke-width='${(18 + 10 * Math.abs(Math.sin(a))).toFixed(1)}'/><text x='300' y='560' fill='#777' font-family='Helvetica,Arial' font-size='14' letter-spacing='6' text-anchor='middle'>${name} · ${String(i + 1).padStart(2, "0")}</text></svg>`;
    return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
  });
}
// REPLACE: real photos → /public/products/obsidian/product-01-01.webp … product-01-24.webp
export const frames = (dir: string, prefix: string, count = 24, ext = "webp") =>
  Array.from({ length: count }, (_, i) => `/products/${dir}/${prefix}-${String(i + 1).padStart(2, "0")}.${ext}`);
