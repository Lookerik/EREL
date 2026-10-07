"use client";
import { useState } from "react"; import Product360 from "./Product360"; import ContactButtons from "./ContactButtons"; import type { Product } from "@/data/products";
export default function ProductPage({ p }: { p: Product }) {
  const [view, setView] = useState(0), [spin, setSpin] = useState(false), [size, setSize] = useState(p.sizes[0]);
  const views = [["Front", 0], ["Side", Math.floor(p.images.length / 4)], ["Back", Math.floor(p.images.length / 2)], ["Detail", Math.floor((p.images.length * 3) / 4)]] as const;
  const msg = `Hi! I’d like to order: ${p.name} (€${p.price}), size ${size}.`;
  return (<section className="grid gap-10 px-5 pb-32 pt-28 md:grid-cols-[1.5fr_1fr] md:px-10 md:pt-36">
    <div><Product360 key={view} frames={p.images} start={views[view][1]} active={spin} zoom className="md:!aspect-[5/6]" />
      <div className="mt-4 flex items-center gap-6">{views.map(([t], i) => <button key={t} onClick={() => setView(i)} className={`link ${view === i ? "" : "text-ash"}`}>{t}</button>)}
        <button onClick={() => setSpin(!spin)} className="link ml-auto">{spin ? "Stop" : "Rotate 360°"}</button></div></div>
    <div className="md:sticky md:top-32 md:self-start"><p className="text-ash">{p.category}</p><h1 className="display mt-2 text-6xl">{p.name}</h1><p className="mt-4 text-xl">€{p.price}</p>
      <p className="mt-8 max-w-sm text-ash">{p.description}</p><p className="mt-6"><span className="text-ash">Material </span>{p.materials}</p>
      <div className="mt-10 flex flex-wrap gap-2">{p.sizes.map((s) => <button key={s} onClick={() => setSize(s)} className={`px-4 py-2 transition-colors duration-500 ${size === s ? "bg-white text-black" : "text-ash hover:text-white"}`}>{s}</button>)}</div>
      <div className="mt-10"><ContactButtons message={msg} subject={`Order: ${p.name}`} /></div>
      <p className="mt-4 text-ash">Payment and shipping are arranged directly with us.</p></div></section>);
}
