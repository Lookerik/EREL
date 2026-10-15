"use client";
import { useEffect, useState } from "react"; import Product360 from "./Product360"; import ContactButtons from "./ContactButtons"; import { catBySlug } from "@/data/categories"; import type { Product } from "@/data/products";
const STATUS = { available: "Available", "made-to-order": "Made to order", "sold-out": "Sold out" } as const;
function Zoom({ src }: { src: string }) {
  const [z, setZ] = useState<{ x: number; y: number } | null>(null);
  return (<div className="aspect-square cursor-zoom-in overflow-hidden bg-coal/40" onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); setZ({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 }); }} onMouseLeave={() => setZ(null)}>
    <img src={src} alt="" className="h-full w-full object-contain transition-transform duration-500" style={z ? { transform: "scale(2)", transformOrigin: `${z.x}% ${z.y}%` } : undefined} /></div>);
}
export default function ProductPage({ p }: { p: Product }) {
  const [mode, setMode] = useState(p.photos.length || !p.spinFrames ? 0 : -1); // -1 = 360° view
  const [spin, setSpin] = useState(false), [size, setSize] = useState(p.sizes[0]), [origin, setOrigin] = useState("");
  useEffect(() => setOrigin(location.origin), []);
  const cat = catBySlug(p.category)?.single ?? "Piece";
  const msg = `Hi! I'm interested in this piece:\n${p.name} · ${cat}\nSize: ${size}\nPrice: €${p.price}\n${origin}/product/${p.slug}\nCould you tell me how to order?`;
  const thumb = (on: boolean) => `h-16 w-16 shrink-0 bg-coal transition-opacity ${on ? "outline outline-1 outline-white" : "opacity-50 hover:opacity-100"}`;
  return (<section className="px-5 pb-32 pt-28 md:px-10 md:pt-36">
    <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
      <div>{mode === -1 && p.spinFrames ? <Product360 frames={p.spinFrames} active={spin} /> : <Zoom src={p.gallery[mode]} />}
        <div className="mt-4 flex items-center gap-3 overflow-x-auto">
          {p.gallery.map((s, i) => <button key={i} onClick={() => setMode(i)} className={thumb(mode === i)} aria-label={`Photo ${i + 1}`}><img src={s} alt="" className="h-full w-full object-cover" /></button>)}
          {p.spinFrames && <button onClick={() => setMode(-1)} className={`link ${thumb(mode === -1)}`}>360°</button>}</div>
        {mode === -1 && <button onClick={() => setSpin(!spin)} className="link mt-4">{spin ? "Stop" : "Auto-rotate"} <span className="text-ash">· or drag to turn</span></button>}</div>
      <div className="md:sticky md:top-32 md:self-start"><p className="text-ash">{cat} · {STATUS[p.status]}</p><h1 className="display mt-2 text-5xl md:text-6xl">{p.name}</h1><p className="mt-4 text-xl">€{p.price}</p>
        <p className="mt-8 max-w-sm text-ash">{p.description}</p><p className="mt-6"><span className="text-ash">Material </span>{p.materials}</p>
        <p className="mb-3 mt-10 text-ash">Size</p><div className="flex flex-wrap gap-2">{p.sizes.map((s) => <button key={s} onClick={() => setSize(s)} className={`px-4 py-2 transition-colors duration-500 ${size === s ? "bg-white text-black" : "text-ash outline outline-1 outline-white/20 hover:text-white"}`}>{s}</button>)}</div>
        <div className="mt-10"><ContactButtons message={msg} subject={`Order: ${p.name} (${size})`} /></div>
        <p className="mt-4 text-ash">Price and payment are arranged directly with us. Your message includes the piece, size and a link to this page.</p></div></div>
    <div className="mt-24 grid items-center gap-8 border-t border-white/10 pt-12 md:grid-cols-2">
      <div className="aspect-[4/3] bg-coal">{p.packaging.image ? <img src={p.packaging.image} alt="" className="h-full w-full object-cover" /> : <div className="flex h-full items-center justify-center text-ash">Packaging photo · coming soon</div>}</div>
      <div><p className="text-ash">Packaging</p><h2 className="display mt-2 text-4xl">{p.packaging.title}</h2><p className="mt-4 max-w-md text-ash">{p.packaging.text}</p></div></div></section>);
}
