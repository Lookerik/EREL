import { site, waLink, mailLink, igLink } from "@/lib/site";
export default function ContactButtons({ message, subject = "Inquiry" }: { message: string; subject?: string }) {
  return (<div className="flex flex-col gap-3">
    <a className="btn text-center" href={waLink(message)} target="_blank" rel="noopener noreferrer">Order via WhatsApp</a>
    <a className="btn bg-transparent text-center text-white outline outline-1 outline-white/40" href={mailLink(subject, message)}>Order via email</a>
    <a className="btn bg-transparent text-center text-white outline outline-1 outline-white/40" href={igLink} target="_blank" rel="noopener noreferrer">Message on Instagram</a>
  </div>);
}
