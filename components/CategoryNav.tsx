import Link from "next/link"; import { categories } from "@/data/categories";
export default function CategoryNav({ active }: { active?: string }) {
  const items = [{ slug: "", name: "All", href: "/collection" }, ...categories.map((c) => ({ slug: c.slug, name: c.name, href: `/collection/${c.slug}` }))];
  return <nav className="mt-10 flex gap-6 overflow-x-auto whitespace-nowrap pb-2">{items.map((i) => <Link key={i.href} href={i.href} className={`link ${(active ?? "") === i.slug ? "" : "text-ash"}`}>{i.name}</Link>)}</nav>;
}
