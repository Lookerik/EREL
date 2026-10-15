import Link from "next/link"; import ProductCard from "./ProductCard"; import type { Product } from "@/data/products";
export default function ProductGrid({ items, title, more = false }: { items: Product[]; title?: string; more?: boolean }) {
  return (<section id="collection" className="px-5 py-16 md:px-10">
    {title && <div className="mb-12 flex items-end justify-between gap-4"><h2 className="display text-4xl md:text-7xl">{title}</h2>{more && <Link href="/collection" className="link shrink-0">View all</Link>}</div>}
    {items.length ? <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:grid-cols-4">{items.map((p) => <ProductCard key={p.slug} p={p} />)}</div> : <p className="text-ash">New pieces coming soon.</p>}</section>);
}
