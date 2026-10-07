import { notFound } from "next/navigation"; import { bySlug, products } from "@/data/products"; import ProductPage from "@/components/ProductPage";
export const generateStaticParams = () => products.map((p) => ({ slug: p.slug }));
export default function Page({ params }: { params: { slug: string } }) { const p = bySlug(params.slug); if (!p) notFound(); return <ProductPage p={p} />; }
