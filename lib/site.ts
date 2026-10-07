// EDIT THIS FILE: your real contact details. Everything on the site reads from here.
export const site = {
  whatsapp: "34600000000",          // REPLACE: number with country code, digits only (e.g. 34600000000)
  email: "hello@yourbrand.com",     // REPLACE: your Gmail / email
  instagram: "yourbrand",           // REPLACE: Instagram username, no @
  tiktok: "yourbrand",              // REPLACE: TikTok username, no @
};
export const waLink = (text: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
export const mailLink = (subject: string, body: string) => `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
export const igLink = `https://ig.me/m/${site.instagram}`;
