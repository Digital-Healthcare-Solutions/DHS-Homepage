const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")
const {
    default: flattenColorPalette
} = require("tailwindcss/lib/util/flattenColorPalette")

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    darkMode: "class",
    theme: {
        extend: {
            screens: {
                xxs: "320px",
                xs: "375px",
                sm: "425px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px",
                maxMd: { max: "768px" },
                minRandom: "1120px",
                maxRandom: { max: "1120px" }
            },

            animation: {
                shimmer: "shimmer 2s linear infinite",
                scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite"
            },
            keyframes: {
                shimmer: {
                    from: {
                        backgroundPosition: "0 0"
                    },
                    to: {
                        backgroundPosition: "-200% 0"
                    }
                },
                scroll: {
                    to: {
                        transform: "translate(calc(-50% - 0.5rem))"
                    }
                }
            }
        }
    },
    plugins: [require("@tailwindcss/aspect-ratio"), addVariablesForColors]
}

function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme("colors"))
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    )

    addBase({
        ":root": newVars
    })
}
