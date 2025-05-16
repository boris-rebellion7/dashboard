/** @type {import('tailwindcss').Config} */

export const content = ["./src/**/*.{js,ts,jsx,tsx}"];
export const safelist = [
    "sample-class",
    {
        pattern: /^(text-|bg-|w-|max-w-|order-)/
    }
];
export const theme = {
    extend: {
        lineHeight: {},
        colors: {
            black: "#29343D",
            white: "#FFFFFF",
            blue: "#2555E7",
            lightBlue: "#DBF3FF",
            gray: "#98A4AE",
            blueGray: "#526B7A",
            lightGray: "#F4F7FB",
            softGray: "#E0E6EB",
            green: "#36C76C",
            yellow: "#FFD648",
            red: "#FF6692",
            pink: "#FFE5ED"
        },
        fontFamily: {
            lexend: ["Lexend"],
            lexendBold: ["Lexend-Bold"],
            manrope: ["Manrope"],
            manropeBold: ["Manrope-Bold"],
        },
        fontSize: {
            base: ["clamp(16px, 1rem, 22px)", { lineHeight: "1.2" }],
            240: ["clamp(120px, 21.875rem, 350px)", { lineHeight: "0.9", fontWeight: "400" }],
            200: ["clamp(120px, 15.625rem, 250px)", { lineHeight: "1.1", fontWeight: "400" }],
            170: ["clamp(120px, 10.625rem, 250px)", { lineHeight: ".825", fontWeight: "400" }],
            140: ["clamp(50px, 8.5rem, 216px)", { lineHeight: ".825", fontWeight: "400" }],
            133: ["clamp(100px, 8.3125rem, 220px)", { lineHeight: "1", fontWeight: "400" }],
            127: ["clamp(100px, 7.9375rem, 200px)", { lineHeight: ".8", fontWeight: "400" }],
            120: ["clamp(100px, 7.5rem, 200px)", { lineHeight: "1.15", fontWeight: "400", letterSpacing: "-0.02em" }],
            100: ["clamp(90px, 6.25rem, 120px)", { lineHeight: "1", fontWeight: "400", letterSpacing: "-0.02em" }],
            90: ["clamp(50px, 5.625rem, 150px)", { lineHeight: ".8", fontWeight: "400" }],
            82: ["clamp(60px, 5.1875rem, 95px)", { lineHeight: "1", fontWeight: "400" }],
            76: ["clamp(60px, 4.75rem, 90px)", { lineHeight: "1", fontWeight: "400" }],
            75: ["clamp(55px, 4.6875rem, 90px)", { lineHeight: "1", fontWeight: "400" }],
            70: ["clamp(60px, 4.375rem, 950px)", { lineHeight: ".9", fontWeight: "400" }],
            60: ["clamp(50px, 3.75rem, 75px)", { lineHeight: ".9", fontWeight: "400" }],
            54: ["clamp(44px, 3.4375rem, 70px)", { lineHeight: "1.25", fontWeight: "400" }],
            50: ["clamp(40px, 3.125rem, 65px)", { lineHeight: ".9", fontWeight: "400" }],
            48: ["clamp(45px, 3rem, 55px)", { lineHeight: "1.1", fontWeight: "400" }],
            46: ["clamp(40px, 2.875rem, 51px)", { lineHeight: "1.1", fontWeight: "400" }],
            40: ["clamp(35px, 2.5rem, 45px)", { lineHeight: "1.1", fontWeight: "400" }],
            36: ["clamp(30px, 2.25rem, 36px)", { lineHeight: "1.3", fontWeight: "400", letterSpacing: "-0.02em" }],
            32: ["clamp(28px, 2rem, 34px)", { lineHeight: "1", fontWeight: "400" }],
            30: ["clamp(10px, 1.875rem, 32px)", { lineHeight: "1.25", fontWeight: "400" }],
            28: ["clamp(24px, 1.75rem, 30px)", { lineHeight: "1.25", fontWeight: "400" }],
            26: ["clamp(17px, 1.625rem, 30px)", { lineHeight: "1.1", fontWeight: "400" }],
            24: ["clamp(16px, 1.5rem, 24px)", { lineHeight: "1.25", fontWeight: "400" }],
            22: ["clamp(12px, 1.375rem, 24px)", { lineHeight: "1.25", fontWeight: "400" }],
            20: ["clamp(12px, 1.25rem, 22px)", { lineHeight: "1.25", fontWeight: "400" }],
            18: ["clamp(10px, 1.125rem, 20px)", { lineHeight: "1.25", fontWeight: "400" }],
            16: ["clamp(10px, 1rem, 22px)", { lineHeight: "1.25", fontWeight: "400" }],
            15: ["clamp(10px, .9375rem, 22px)", { lineHeight: "1", fontWeight: "400" }],
            14: ["clamp(10px, 0.875rem, 20px)", { lineHeight: "1.25", fontWeight: "400" }],
            12: ["clamp(10px, 0.75rem, 18px)", { lineHeight: "1.25", fontWeight: "400" }],
            10: ["clamp(10px, 0.625rem, 16px)", { lineHeight: "1.25", fontWeight: "400" }],
            8: ["clamp(8px, 0.5rem, 14px)", { lineHeight: "1.25", fontWeight: "400" }],
        },

        letterSpacing: {
            tight: "-.02em",
            tighter: "-.03em"
        },
        spacing: {
            18: "4.5rem",
            25: "6.25rem",
            26: "6.5rem",
            28: "7rem",
            30: "7.5rem",
            92: "23rem"
        },
        screens: {
            "max-sm": { min: "0px", max: "639px" },
            "max-lg": { min: "375px", max: "1023px" },
            xxl: "1600px"
        }
    }
};
