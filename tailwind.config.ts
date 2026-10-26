import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors from Outprix Digital Logo
        brand: {
          bg: "#060E1A",
          surface: "#0F1E33",
          navy: "#0D1929",
          blue: "#1565C0",
          accent: "#2196F3",
          electric: "#42A5F5",
          muted: "#94A3B8",
          border: "rgba(33, 150, 243, 0.2)",
        },
      },
      fontFamily: {
        heading: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #1565C0 0%, #2196F3 100%)",
        "gradient-dark": "linear-gradient(180deg, #060E1A 0%, #0D1929 100%)",
        "gradient-hero": "linear-gradient(135deg, #060E1A 0%, #0D1929 60%, #0F1E33 100%)",
        "gradient-card": "linear-gradient(135deg, #0F1E33 0%, #0D1929 100%)",
        "gradient-glow": "radial-gradient(ellipse at center, rgba(33, 150, 243, 0.15) 0%, transparent 70%)",
      },
      boxShadow: {
        "brand": "0 0 30px rgba(33, 150, 243, 0.3)",
        "card": "0 4px 24px rgba(0, 0, 0, 0.4)",
        "glow": "0 0 60px rgba(33, 150, 243, 0.2)",
        "button": "0 4px 20px rgba(33, 150, 243, 0.4)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient": "gradient 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
