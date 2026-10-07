"use client";
import Link from "next/link";
export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const items: [string, string][] = [["Shop", "/collection"], ["Collection", "/#collection"], ["About", "/about"], ["Contact", "/contact"]];
  return (<div className={`fixed inset-0 z-50 bg-black transition-transform duration-700 ease-silk md:hidden ${open ? "translate-y-0" : "-translate-y-full"}`}>
    <button className="link absolute left-5 top-8" onClick={onClose}>Close</button>
    <nav className="flex h-full flex-col justify-center gap-4 px-8">{items.map(([t, h], i) => (
      <Link key={t} href={h} onClick={onClose} style={{ transitionDelay: open ? `${200 + i * 80}ms` : "0ms" }} className={`display text-6xl transition-all duration-700 ${open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>{t}</Link>))}</nav></div>);
}
