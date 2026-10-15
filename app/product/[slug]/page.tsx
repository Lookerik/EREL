import type { Metadata } from "next"; import { notFound } from "next/navigation"; import { bySlug, products } from "@/data/products"; import ProductPage from "@/components/ProductPage";
export const generateStaticParams = () => products.map((p) => ({ slug: p.slug }));
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = bySlug(params.slug); if (!p) return {};
  const base = new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL ?? "localhost:3000"}`);
  return { metadataBase: base, title: p.name, description: `${p.name} · ${p.materials}`, openGraph: { title: p.name, description: p.materials, images: p.photos.length ? [p.photos[0]] : undefined } };
}
export default function Page({ params }: { params: { slug: string } }) { const p = bySlug(params.slug); if (!p) notFound(); return <ProductPage p={p} />; }
