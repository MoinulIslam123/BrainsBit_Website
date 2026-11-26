/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,scss}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0b1220", 2: "#141c30" },
        brand: {
          DEFAULT: "#0072ce",
          dark: "#005aa8",
          deep: "#003d80",
          bright: "#2b94f2",
          sky: "#bfe0ff",
          soft: "#eef5fd",
        },
        paper: "#f7f9fc",
        line: "#e3e9f2",
        muted: "#55637c",
        mint: "#22c58b",
        amber: "#ffb020",
      },
      fontFamily: {
        display: ['"Funnel Display Variable"', "system-ui", "sans-serif"],
        sans: ['"Geist Variable"', "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        mono: ['"Geist Mono Variable"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11,18,32,0.04), 0 14px 32px -16px rgba(11,18,32,0.14)",
        lift: "0 2px 4px rgba(11,18,32,0.05), 0 28px 56px -20px rgba(11,18,32,0.28)",
        stage: "0 50px 90px -40px rgba(0,66,140,0.65)",
      },
      keyframes: {
        marquee: { to: { transform: "translateX(-33.3333%)" } },
        rise: {
          from: { opacity: "0", transform: "translateY(26px)" },
          to: { opacity: "1", transform: "none" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-9px)" },
        },
        drift: {
          from: { transform: "translate3d(0,0,0) scale(1)" },
          to: { transform: "translate3d(-40px,30px,0) scale(1.12)" },
        },
        slideDown: {
          from: { opacity: "0", transform: "translateY(-100%)" },
          to: { opacity: "1", transform: "none" },
        },
        pulseRing: {
          "0%": { transform: "scale(1)", opacity: "0.55" },
          "100%": { transform: "scale(1.85)", opacity: "0" },
        },
        lineIn: {
          from: { opacity: "0", transform: "translateX(-10px)" },
          to: { opacity: "1", transform: "none" },
        },
        blink: { "0%, 49%": { opacity: "1" }, "50%, 100%": { opacity: "0" } },
        popIn: {
          "0%": { opacity: "0", transform: "scale(0.4)" },
          "60%": { transform: "scale(1.15)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          from: { backgroundPosition: "-200% 0" },
          to: { backgroundPosition: "200% 0" },
        },
        spinRev: { to: { transform: "rotate(-360deg)" } },
        spinFwd: { to: { transform: "rotate(360deg)" } },
        dotBounce: {
          "0%, 80%, 100%": { transform: "translateY(0)", opacity: "0.4" },
          "40%": { transform: "translateY(-4px)", opacity: "1" },
        },
        fillBar: { from: { transform: "scaleX(0)" }, to: { transform: "scaleX(1)" } },
      },
      animation: {
        marquee: "marquee 45s linear infinite",
        rise: "rise 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both",
        float: "float 6s ease-in-out infinite",
        drift: "drift 18s ease-in-out infinite alternate",
        "slide-down": "slideDown 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) both",
        "pulse-ring": "pulseRing 2.2s ease-out infinite",
        "line-in": "lineIn 0.5s cubic-bezier(0.2, 0.7, 0.2, 1) both",
        blink: "blink 1s steps(1) infinite",
        "pop-in": "popIn 0.55s cubic-bezier(0.2, 0.9, 0.3, 1.2) both",
        shimmer: "shimmer 2.6s linear infinite",
        orbit: "spinFwd 40s linear infinite",
        "orbit-rev": "spinRev 40s linear infinite",
        dot: "dotBounce 1.2s ease-in-out infinite",
        "fill-bar": "fillBar 1.8s cubic-bezier(0.4, 0, 0.2, 1) both",
      },
    },
  },
  daisyui: { themes: ["light"] },
  plugins: [require("daisyui")],
};
