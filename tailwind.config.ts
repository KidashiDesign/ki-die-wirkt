import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        "bg-raised": "#111111",
        fg: "#f0ece2",
        "fg-muted": "#8a8a86",
        accent: "#e5493a",
        "accent-dim": "#7a2b23",
        border: "#2a2a2a",
      },
      fontFamily: {
        display: ["Bebas Neue", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      keyframes: {
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
        "hero-zoom": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.12)" },
        },
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        "hero-zoom": "hero-zoom 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
