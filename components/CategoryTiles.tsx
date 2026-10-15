import Link from "next/link"; import { categories } from "@/data/categories"; import { products } from "@/data/products";
export default function CategoryTiles() {
  return (<section className="px-5 py-16 md:px-10"><h2 className="display mb-12 text-4xl md:text-7xl">SHOP BY CATEGORY</h2>
    <div className="grid grid-cols-2 gap-px bg-white/10 md:grid-cols-5">{categories.map((c) => (
      <Link key={c.slug} href={`/collection/${c.slug}`} className="group flex aspect-[4/5] flex-col justify-between bg-black p-5 transition-colors duration-700 hover:bg-white hover:text-black last:col-span-2 md:last:col-span-1">
        <span className="text-ash group-hover:text-black">{String(products.filter((p) => p.category === c.slug).length).padStart(2, "0")}</span><span className="display text-2xl md:text-3xl">{c.name}</span></Link>))}</div></section>);
}
