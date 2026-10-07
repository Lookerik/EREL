"use client";
import { useEffect, useRef, useState } from "react";
// Frame-based 360° viewer. Hover (active) autoplays; pointer-drag/swipe scrubs; leaving eases back to frame 0.
// 3D-READY: to switch to GLB, render a <model-viewer src={product.model3d}> or three.js canvas here with the same props.
export default function Product360({ frames, active = false, interactive = true, zoom = false, start = 0, className = "" }: { frames: string[]; active?: boolean; interactive?: boolean; zoom?: boolean; start?: number; className?: string }) {
  const [idx, setIdx] = useState(start); const pos = useRef(start); const drag = useRef<{ x: number; p: number } | null>(null); const [z, setZ] = useState<{ x: number; y: number } | null>(null);
  const n = frames.length, raf = useRef(0);
  useEffect(() => { frames.forEach((s) => { const i = new Image(); i.src = s; }); }, [frames]);
  useEffect(() => {
    cancelAnimationFrame(raf.current);
    const step = () => { if (drag.current) return;
      if (active) pos.current = (pos.current + 0.22) % n;
      else { let d = (start - pos.current + n) % n; if (d > n / 2) d -= n; if (Math.abs(d) < 0.15) { pos.current = start; setIdx(start); return; } pos.current = (pos.current + d * 0.12 + n) % n; }
      setIdx(Math.round(pos.current) % n); raf.current = requestAnimationFrame(step); };
    raf.current = requestAnimationFrame(step); return () => cancelAnimationFrame(raf.current);
  }, [active, n, start]);
  const down = (e: React.PointerEvent) => { if (!interactive) return; drag.current = { x: e.clientX, p: pos.current }; (e.target as Element).setPointerCapture(e.pointerId); };
  const move = (e: React.PointerEvent) => {
    if (drag.current) { pos.current = (((drag.current.p - (e.clientX - drag.current.x) / 9) % n) + n) % n; setIdx(Math.round(pos.current) % n); }
    else if (zoom) { const r = e.currentTarget.getBoundingClientRect(); setZ({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 }); } };
  const up = () => { drag.current = null; };
  return (<div className={`relative aspect-square select-none overflow-hidden ${className}`} style={{ touchAction: "pan-y" }} onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up} onPointerLeave={() => setZ(null)}>
    <img src={frames[idx]} alt="" draggable={false} className="h-full w-full object-contain transition-transform duration-500 ease-out" style={z ? { transform: "scale(1.9)", transformOrigin: `${z.x}% ${z.y}%` } : undefined} /></div>);
}
