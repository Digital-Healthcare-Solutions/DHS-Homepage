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
                maxMd: { max: "768px" }
            }
        }
    },
    plugins: []
}
