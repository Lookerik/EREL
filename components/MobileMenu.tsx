"use client";
import Link from "next/link"; import { categories } from "@/data/categories";
export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const items: [string, string][] = [["All pieces", "/collection"], ...categories.map((c) => [c.name, `/collection/${c.slug}`] as [string, string]), ["About", "/about"], ["Contact", "/contact"]];
  return (<div className={`fixed inset-0 z-50 overflow-y-auto bg-black transition-transform duration-700 ease-silk md:hidden ${open ? "translate-y-0" : "-translate-y-full"}`}>
    <button className="link absolute left-5 top-8" onClick={onClose}>Close</button>
    <nav className="flex min-h-full flex-col justify-center gap-3 px-8 py-24">{items.map(([t, h], i) => (
      <Link key={t} href={h} onClick={onClose} style={{ transitionDelay: open ? `${150 + i * 60}ms` : "0ms" }} className={`display text-4xl transition-all duration-700 ${open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>{t}</Link>))}</nav></div>);
}
