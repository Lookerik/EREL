// To add a category: copy one line. "slug" is the web address, "name" the menu title, "single" the singular word.
export const categories = [
  { slug: "rings", name: "Rings", single: "Ring" },
  { slug: "necklaces", name: "Necklaces", single: "Necklace" },
  { slug: "bracelets", name: "Bracelets", single: "Bracelet" },
  { slug: "ear-piercings", name: "Ear piercings", single: "Ear piercing" },
  { slug: "keychains", name: "Keychains", single: "Keychain" },
];
export const catBySlug = (s: string) => categories.find((c) => c.slug === s);
