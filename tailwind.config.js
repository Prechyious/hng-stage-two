/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                bg: "#F4F5F7",
            },
            backgroundImage: {
                bgImg: "url('./src/assets/bg.jpeg')",
            },
        },
    },
    plugins: [],
};
