"use client";
import Link from "next/link"; import { useState } from "react"; import Product360 from "./Product360"; import type { Product } from "@/data/products";
export default function ProductCard({ p }: { p: Product }) {
  const [h, setH] = useState(false);
  return (<Link href={`/product/${p.slug}`} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} className="group block">
    <Product360 frames={p.cardFrames} active={h} interactive={false} className="bg-coal/40 transition-transform duration-[800ms] ease-silk group-hover:scale-[1.03]" />
    <h3 className="mt-4 text-center text-[11px] font-semibold uppercase tracking-[.16em]">{p.name}</h3>
    <p className="text-center text-ash">{p.status === "sold-out" ? "Sold out" : "View"}</p></Link>);
}
