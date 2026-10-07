"use client";
import Link from "next/link"; import { useEffect, useState } from "react";
import Logo from "./Logo"; import MobileMenu from "./MobileMenu";
export default function Header() {
  const [small, setSmall] = useState(false); const [menu, setMenu] = useState(false);
  useEffect(() => { const f = () => setSmall(scrollY > 40); f(); addEventListener("scroll", f, { passive: true }); return () => removeEventListener("scroll", f); }, []);
  return (<>
    <header className={`fixed inset-x-0 top-0 z-40 grid grid-cols-3 items-center px-5 transition-all duration-700 ease-silk md:px-10 ${small ? "h-14 bg-black/80 backdrop-blur" : "h-24"}`}>
      <nav className="hidden gap-8 md:flex"><Link className="link" href="/collection">Shop</Link><Link className="link" href="/#collection">Collection</Link><Link className="link" href="/about">About</Link></nav>
      <button className="link justify-self-start md:hidden" onClick={() => setMenu(true)} aria-label="Open menu">Menu</button>
      <Link href="/" aria-label="Home" className="justify-self-center"><Logo className={`transition-all duration-700 ease-silk ${small ? "h-7" : "h-10"}`} /></Link>
      <div className="flex justify-end"><Link className="link" href="/contact">Contact</Link></div>
    </header><MobileMenu open={menu} onClose={() => setMenu(false)} /></>);
}
