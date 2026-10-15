import { placeholder, frames } from "@/lib/placeholder";
/* ============ HOW TO ADD / REMOVE PRODUCTS ============
   ADD: copy one whole line { ... }, paste it below, change the values, keep the comma at the end.
   REMOVE: delete its line.
   category: rings | necklaces | bracelets | ear-piercings | keychains
   photos (optional): ["/products/obsidian/1.jpg", "/products/obsidian/2.jpg"]  → files live in public/products/obsidian/
   spin (optional, the 360° effect): spin: { frames: 24 }  → files public/products/obsidian/spin-01.webp … spin-24.webp
   status (optional): "available" | "made-to-order" | "sold-out"
   packaging (optional): { title: "Black box", text: "…", image: "/products/obsidian/box.jpg" }
======================================================== */
type Raw = { slug: string; name: string; category: string; price: number; materials: string; sizes: string[]; description?: string; status?: "available" | "made-to-order" | "sold-out"; photos?: string[]; spin?: { frames: number; ext?: string }; packaging?: { title?: string; text?: string; image?: string } };
const raw: Raw[] = [
  { slug: "obsidian", name: "OBSIDIAN", category: "rings", price: 85, materials: "Black-oxidised sterling silver", sizes: ["50", "52", "54", "56", "58", "60"], photos: ["/brand/obsidian.jpg"] },
  { slug: "sigil", name: "SIGIL", category: "rings", price: 90, materials: "Matte black steel, engraved symbol", sizes: ["50", "52", "54", "56", "58", "60"] },
  { slug: "void", name: "VOID", category: "necklaces", price: 95, materials: "Matte black steel, 55 cm chain", sizes: ["ONE SIZE"] },
  { slug: "noir", name: "NOIR", category: "bracelets", price: 110, materials: "Blackened brass, leather core", sizes: ["S", "M", "L"] },
  { slug: "relic", name: "RELIC", category: "bracelets", price: 125, materials: "Oxidised silver, hammered finish", sizes: ["S/M", "M/L"], status: "made-to-order" },
  { slug: "fang", name: "FANG", category: "ear-piercings", price: 75, materials: "Polished sterling silver (sold single)", sizes: ["ONE SIZE"] },
  { slug: "talon", name: "TALON", category: "keychains", price: 35, materials: "Blackened steel", sizes: ["ONE SIZE"] },
];
export type Product = { slug: string; name: string; category: string; price: number; materials: string; sizes: string[]; description: string; status: "available" | "made-to-order" | "sold-out"; photos: string[]; gallery: string[]; spinFrames: string[] | null; cardFrames: string[]; packaging: { title: string; text: string; image?: string } };
export const products: Product[] = raw.map((r) => {
  const photos = r.photos ?? [];
  const spinFrames = r.spin ? frames(r.slug, "spin", r.spin.frames, r.spin.ext ?? "webp") : photos.length ? null : placeholder(r.name);
  const gallery = photos.length ? photos : [placeholder(r.name)[0]];
  return { slug: r.slug, name: r.name, category: r.category, price: r.price, materials: r.materials, sizes: r.sizes, status: r.status ?? "available",
    description: r.description ?? "Hand-finished in small batches. Engraved with the symbol on the inner side.",
    photos, gallery, spinFrames, cardFrames: spinFrames ?? [gallery[0]],
    packaging: { title: r.packaging?.title ?? "Signature box", text: r.packaging?.text ?? "Every piece arrives in our black presentation box, ready to gift.", image: r.packaging?.image } };
});
export const bySlug = (s: string) => products.find((p) => p.slug === s);
