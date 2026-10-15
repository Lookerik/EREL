import { notFound } from "next/navigation"; import ProductGrid from "@/components/ProductGrid"; import CategoryNav from "@/components/CategoryNav"; import { categories, catBySlug } from "@/data/categories"; import { products } from "@/data/products";
export const generateStaticParams = () => categories.map((c) => ({ category: c.slug }));
export default function Category({ params }: { params: { category: string } }) {
  const c = catBySlug(params.category); if (!c) notFound();
  return (<div className="pt-28"><div className="px-5 md:px-10"><h1 className="display text-5xl md:text-8xl">{c.name.toUpperCase()}</h1><CategoryNav active={c.slug} /></div><ProductGrid items={products.filter((p) => p.category === c.slug)} /></div>);
}
