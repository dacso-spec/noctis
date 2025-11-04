module.exports = {
    content: [
        "./*.html",
        "./js/**/*.js"
    ],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ["Montserrat", "sans-serif"],
                inter: ["Inter", "sans-serif"]
            },
            colors: {
                "luxe-amber": "#92400e",
                "luxe-stone": "#292524",
                sage: {
                    50: "#f0f9f0",
                    100: "#dcf2dc",
                    200: "#bce5bc",
                    300: "#8dd18d",
                    400: "#5bb85b",
                    500: "#3a9d3a",
                    600: "#2d7d2d",
                    700: "#256325",
                    800: "#225022",
                    900: "#1f421f"
                },
                blush: {
                    50: "#fef7f7",
                    100: "#fdeaea",
                    200: "#fbd5d5",
                    300: "#f7b3b3",
                    400: "#f08888",
                    500: "#e85d5d",
                    600: "#d63f3f",
                    700: "#b32e2e",
                    800: "#942828",
                    900: "#7a2525"
                },
                warm: {
                    50: "#fafaf9",
                    100: "#f5f5f4",
                    200: "#e7e5e4",
                    300: "#d6d3d1",
                    400: "#a8a29e",
                    500: "#78716c",
                    600: "#57534e",
                    700: "#44403c",
                    800: "#292524",
                    900: "#1c1917"
                }
            },
            animation: {
                "fade-in": "fadeIn 0.6s ease-in-out",
                "slide-up": "slideUp 0.8s ease-out",
                float: "float 3s ease-in-out infinite"
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" }
                },
                slideUp: {
                    "0%": { opacity: "0", transform: "translateY(40px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" }
                },
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-10px)" }
                }
            }
        }
    },
    plugins: []
};
