import Link from "next/link"; import Logo from "./Logo"; import { site, igLink } from "@/lib/site";
export default function Footer() {
  return (<footer className="px-5 pb-10 pt-32 md:px-10"><div className="grid gap-16 md:grid-cols-3">
    <Logo className="h-24" />
    <nav className="grid grid-cols-2 gap-3 self-start"><Link href="/collection" className="link w-fit">Shop</Link><Link href="/#collection" className="link w-fit">Collection</Link><Link href="/about" className="link w-fit">About</Link><Link href="/contact" className="link w-fit">Contact</Link>
      <a className="link w-fit" href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer">Instagram</a><a className="link w-fit" href={`https://tiktok.com/@${site.tiktok}`} target="_blank" rel="noopener noreferrer">TikTok</a></nav>
    <div><p className="display mb-6 text-3xl">JOIN THE CULT</p><a href={igLink} target="_blank" rel="noopener noreferrer" className="link">Message us on Instagram</a></div></div>
    <p className="mt-24 text-ash">© {new Date().getFullYear()} All rights reserved.</p></footer>);
}
