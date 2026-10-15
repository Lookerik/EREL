import ProductGrid from "@/components/ProductGrid"; import CategoryNav from "@/components/CategoryNav"; import { products } from "@/data/products";
export default function Collection() { return (<div className="pt-28"><div className="px-5 md:px-10"><h1 className="display text-5xl md:text-8xl">ALL PIECES</h1><CategoryNav /></div><ProductGrid items={products} /></div>); }
