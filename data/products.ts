import { placeholder } from "@/lib/placeholder";
export type Product = { id: string; slug: string; name: string; price: number; category: string; description: string; materials: string; sizes: string[]; images: string[]; model3d?: string /* optional GLB path: /models/obsidian.glb */ };
const d = "Hand-finished in small batches. Engraved with the symbol on the inner side.";
const photos: Record<string, string[]> = {
  obsidian: ["/obsidian.jpg"],
};
export const products: Product[] = [
  ["OBSIDIAN", 85, "Ring", "Black-oxidised sterling silver", ["50","52","54","56","58","60"]],
  ["VOID", 95, "Pendant", "Matte black steel, 55 cm chain", ["ONE SIZE"]],
  ["NOIR", 110, "Bracelet", "Blackened brass, leather core", ["S","M","L"]],
  ["FANG", 75, "Earring", "Polished sterling silver (sold single)", ["ONE SIZE"]],
  ["RELIC", 125, "Cuff", "Oxidised silver, hammered finish", ["S/M","M/L"]],
  ["SIGIL", 90, "Ring", "Matte black steel, engraved symbol", ["50","52","54","56","58","60"]],
].map(([name, price, category, materials, sizes], i) => ({
  id: `p${i + 1}`, slug: (name as string).toLowerCase(), name: name as string, price: price as number, category: category as string,
  description: d, materials: materials as string, sizes: sizes as string[],
  images: photos[(name as string).toLowerCase()] ?? placeholder(name as string),
}));
export const bySlug = (s: string) => products.find((p) => p.slug === s);
