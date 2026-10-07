import ContactButtons from "@/components/ContactButtons";
export default function Contact() {
  return (<section className="px-5 pb-32 pt-40 md:px-10"><h1 className="display text-6xl md:text-[10vw]">CONTACT</h1>
    <p className="mt-10 max-w-md text-ash">Tell us the piece, size and where you are. We reply personally and arrange payment and shipping directly with you.</p>
    <div className="mt-12 max-w-sm"><ContactButtons message="Hi! I’d like to ask about your pieces." subject="Inquiry" /></div></section>);
}
