import { waLink } from "@/lib/site";
export default function WhatsAppFloat() {
  return <a href={waLink("Hi! I have a question about your pieces.")} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="link fixed bottom-4 right-4 z-30 bg-white px-4 py-3 text-black transition-opacity hover:opacity-80">WhatsApp</a>;
}
