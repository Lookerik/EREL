"use client";
import Link from "next/link"; import { useEffect, useState } from "react";
import Logo from "./Logo"; import MobileMenu from "./MobileMenu"; import { categories } from "@/data/categories";
export default function Header() {
  const [small, setSmall] = useState(false); const [menu, setMenu] = useState(false);
  useEffect(() => { const f = () => setSmall(scrollY > 40); f(); addEventListener("scroll", f, { passive: true }); return () => removeEventListener("scroll", f); }, []);
  return (<>
    <header className={`fixed inset-x-0 top-0 z-40 grid grid-cols-3 items-center px-5 transition-all duration-700 ease-silk md:px-10 ${small ? "h-14 bg-black/80 backdrop-blur" : "h-24"}`}>
      <nav className="hidden gap-8 md:flex">
        <div className="group relative"><Link className="link" href="/collection">Shop</Link>
          <div className="invisible absolute left-0 top-full pt-5 opacity-0 transition-all duration-500 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
            <div className="flex min-w-52 flex-col gap-4 bg-black/95 p-6"><Link className="link" href="/collection">All pieces</Link>{categories.map((c) => <Link key={c.slug} className="link text-ash hover:text-white" href={`/collection/${c.slug}`}>{c.name}</Link>)}</div></div></div>
        <Link className="link" href="/about">About</Link></nav>
      <button className="link justify-self-start md:hidden" onClick={() => setMenu(true)} aria-label="Open menu">Menu</button>
      <Link href="/" aria-label="Home" className="justify-self-center"><Logo className={`transition-all duration-700 ease-silk ${small ? "h-7" : "h-10"}`} /></Link>
      <div className="flex justify-end"><Link className="link" href="/contact">Contact</Link></div>
    </header><MobileMenu open={menu} onClose={() => setMenu(false)} /></>);
}
