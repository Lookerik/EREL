import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: { ink: "#000", coal: "#111", ash: "#777" }, fontFamily: { sans: ["var(--font-inter)", "Helvetica Neue", "Arial", "sans-serif"] },
    transitionTimingFunction: { silk: "cubic-bezier(.22,.61,.36,1)" } } }, plugins: [] } satisfies Config;
