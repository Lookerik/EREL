import Logo from "./Logo";
export default function AboutSection() {
  return (<section className="relative overflow-hidden px-5 py-48 md:px-10">
    <div className="pointer-events-none absolute -right-[12vw] top-0 h-[130%] text-coal [perspective:1200px]"><Logo className="spin-slow h-full" /></div>
    <div className="relative max-w-5xl"><h2 className="display text-5xl md:text-[8vw]">WE DON’T FOLLOW SYMBOLS.<br />WE CREATE THEM.</h2>
      <p className="mt-16 max-w-md text-ash">Identity, individuality and personal expression. Every piece is a mark you choose to carry — made in small runs, never repeated.</p></div>
    <div className="relative mt-32 grid gap-6 md:grid-cols-3">{["Studio", "Process", "Worn"].map((t) => (
      <div key={t} className="flex aspect-[3/4] items-end bg-coal p-4 text-ash">{/* REPLACE: editorial photo ({t}) */}{t} — replace with photo</div>))}</div></section>);
}
