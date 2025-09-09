/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // screens: {
    //   xs: "480px",
    //   sm: "640px",
    //   md: "885px",
    //   lg: "1024px",
    //   xl: "1280px",
    //   "2xl": "1536px",
    // },
    extend: {
      inset: { 13: "26px" },

      animation: {
        "fade-in-up": "fadeInUp 0.5s ease-out forwards",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      // Custom radial gradient definition
      backgroundImage: {
        "loader-dot-gradient":
          "radial-gradient(farthest-side, transparent calc(95% - 3px), #fff calc(100% - 3px) 98%, transparent 101%)",
      },
      // Custom animation keyframes
      keyframes: {
        l9: {
          "0%": { backgroundPosition: "0 50%, 50% 50%, 100% 50%" },
          "20%": { backgroundPosition: "0 0, 50% 50%, 100% 50%" },
          "40%": { backgroundPosition: "0 100%, 50% 0, 100% 50%" },
          "60%": { backgroundPosition: "0 50%, 50% 100%, 100% 0" },
          "80%": { backgroundPosition: "0 50%, 50% 50%, 100% 100%" },
          "100%": { backgroundPosition: "0 50%, 50% 50%, 100% 50%" },
        },
      },
      // Apply the custom animation
      animation: {
        "l9-animation": "l9 1s infinite alternate",
      },
    },
    extend: {
      keyframes: {
        animloader: {
          "0%": {
            left: "0",
            transform: "translateX(-100%)",
          },
          "100%": {
            left: "100%",
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        animloader: "animloader 2s linear infinite",
      },

      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) linear infinite var(--animation-direction, forwards)",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true, // Should be true by default, but verify
  },
};
