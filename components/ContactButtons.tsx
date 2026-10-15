"use client";
import { useState } from "react"; import { waLink, mailLink, igLink } from "@/lib/site";
export default function ContactButtons({ message, subject }: { message: string; subject: string }) {
  const [copied, setCopied] = useState(false);
  const ig = () => { navigator.clipboard?.writeText(message).catch(() => {}); setCopied(true); window.open(igLink, "_blank", "noopener"); };
  const ghost = "btn bg-transparent text-center text-white outline outline-1 outline-white/40";
  return (<div className="flex flex-col gap-3">
    <a className="btn text-center" href={waLink(message)} target="_blank" rel="noopener noreferrer">Order via WhatsApp</a>
    <a className={ghost} href={mailLink(subject, message)}>Order via email</a>
    <button className={ghost} onClick={ig}>Message on Instagram</button>
    {copied && <p className="text-ash">Message copied. Paste it in our Instagram chat.</p>}</div>);
}
