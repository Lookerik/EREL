import ProductCard from "./ProductCard"; import { products } from "@/data/products";
export default function ProductGrid({ title = true }: { title?: boolean }) {
  return (<section id="collection" className="px-5 py-32 md:px-10">
    {title && <h2 className="display mb-24 text-6xl md:text-[10vw]">THE COLLECTION</h2>}
    <div className="grid gap-x-10 gap-y-28 md:grid-cols-2">{products.map((p, i) => <div key={p.id} className={i % 2 ? "md:mt-40" : ""}><ProductCard p={p} /></div>)}</div></section>);
}
