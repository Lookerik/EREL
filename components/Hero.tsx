"use client";
import { useEffect, useRef } from "react"; import Link from "next/link"; import gsap from "gsap"; import Logo from "./Logo";
export default function Hero() {
  const logo = useRef<HTMLDivElement>(null), copy = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(logo.current, { opacity: 0, scale: 0.94, filter: "blur(14px)" }, { opacity: 1, scale: 1, filter: "blur(0px)", duration: 2.6, ease: "power3.out" })
      .fromTo(copy.current!.children, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: "power2.out" }, "-=1.2");
    const x = gsap.quickTo(logo.current, "x", { duration: 1.4, ease: "power3" }), y = gsap.quickTo(logo.current, "y", { duration: 1.4, ease: "power3" });
    const mv = (e: MouseEvent) => { x((e.clientX / innerWidth - 0.5) * -18); y((e.clientY / innerHeight - 0.5) * -14); };
    addEventListener("mousemove", mv); return () => { removeEventListener("mousemove", mv); tl.kill(); };
  }, []);
  return (<section className="relative flex h-[100svh] flex-col items-center justify-end px-5 pb-12 pt-28 text-center">
    <div ref={logo} className="flex min-h-0 flex-1 items-center opacity-0"><Logo className="h-full max-h-[62vh]" /></div>
    <div ref={copy} className="mt-8"><h1 className="display text-4xl md:text-6xl">WEAR YOUR SYMBOL</h1>
      <p className="mt-4 text-ash">Objects created for those who refuse the ordinary.</p>
      <Link href="/collection" className="btn mt-8 inline-block">Shop collection</Link></div></section>);
}
