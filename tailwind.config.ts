import type {Config} from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],

    theme: {
        extend: {
            textShadow: {
                sm: 'rgba(255, 255, 255, 0.9) 2px 2px 2px',
            },
            colors: {
                "green-primary": "#008A73"
            },

            backgroundImage: {
                "main" : "url('/background-primary.jpg')",
                "after-opacity": "linear-gradient(360deg,rgba(255,255,255,0.9809173669467787) 0%, rgba(255,255,255,0) 100%)",
                "before-opacity": "linear-gradient(180deg, rgba(255,255,255,0.9809173669467787) 0%, rgba(255,255,255,0) 100%)",
                'asset-image': "url('/blue-wavy.png')",
                "ball": "radial-gradient(175.43% 133.8% at 38.01% 19.11%, #B7F4EF 9.28%, #9FF0EA 16.82%, #6FE9DF 31.93%, #3FE2D5 100%)",
                "pacman": "radial-gradient(52.23% 50% at 52.23% 50%, #DFF300 26.1%, #EDF86E 77.5%, #F6FBBC 100%)",
                "primary": " radial-gradient(50% 50% at 50% 50%, #213A70 0%, #000000 100%);",
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [
        plugin(function ({matchUtilities, theme}) {
            matchUtilities(
                {
                    'text-shadow': (value) => ({
                        textShadow: value,
                    }),
                },
                {values: theme('textShadow')}
            )
        }),
    ]
};
export default config;
