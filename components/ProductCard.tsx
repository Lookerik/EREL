"use client";
import Link from "next/link"; import { useState } from "react"; import Product360 from "./Product360"; import type { Product } from "@/data/products";
export default function ProductCard({ p }: { p: Product }) {
  const [h, setH] = useState(false);
  return (<Link href={`/product/${p.slug}`} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} className="group block">
    <div className={`relative transition-transform duration-[800ms] ease-silk ${h ? "scale-[1.03]" : ""}`}>
      <Product360 frames={p.images} active={h} interactive className="!aspect-[4/5]" />
      <span className={`link absolute bottom-6 left-1/2 -translate-x-1/2 transition-all duration-700 ${h ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}>View product</span></div>
    <div className="mt-6 flex items-baseline justify-between"><div><h3 className="display text-2xl">{p.name}</h3><p className="mt-1 text-ash">{p.category}</p></div><p>€{p.price}<span className="ml-4 text-ash">View</span></p></div></Link>);
}
