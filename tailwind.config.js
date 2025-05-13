/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const typography = require("@tailwindcss/typography");

module.exports = {
    plugins: [
        plugin(function ({ addBase }) {
            addBase({
                html: { fontSize: "0.93vw" }
            });
        }),
        typography
    ],

    safelist: [
        "sample-class",
        {
            pattern: /^(text-|bg-|w-|max-w-|order-)/
        }
    ],

    theme: {
        extend: {
            lineHeight: {},
            colors: {
                black: "#000000",
                white: "#FFFBF6",
                transparentWhite: "rgba(255, 255, 255, 0.44)",
                green: "#A5F982",
                paleGreen: "#C0F1A0",
                lightGreen: "rgba(84, 252, 24, 0.51)",
                oyster: "#E2DAD0",
                deepTeal: "#35524C",
                gray: "#8E8E8E",
                lightGray: "#D9D9D9",
                darkTeal: "#1F3530",
                ivory: "#F5EEE6"
            },
            fontFamily: {
                helveticaMedium: ["HelveticaNeue-Medium"],
                helveticaLight: ["HelveticaNeue-light"],
                helveticaRoman: ["HelveticaNeue-Roman"],
                groteskBold: ["FoundersGrotesk-Bold"]
            },
            fontSize: {
                base: ["clamp(16px, 1rem, 22px)", { lineHeight: "1.2" }],
                240: ["clamp(120px, 13.333rem, 350px)", { lineHeight: "0.9", fontWeight: "400" }],
                200: ["clamp(120px, 11.11rem, 250px)", { lineHeight: "1.1", fontWeight: "400" }],
                170: ["clamp(120px, 9.444rem, 250px)", { lineHeight: ".825", fontWeight: "400" }],
                140: ["clamp(50px, 7.777rem, 216px)", { lineHeight: ".825", fontWeight: "400" }],
                133: ["clamp(100px, 7.388rem, 220px)", { lineHeight: "1", fontWeight: "400" }],
                127: ["clamp(100px, 7.056rem, 200px)", { lineHeight: ".8", fontWeight: "400" }],
                120: ["clamp(100px, 6.6666rem, 200px)", { lineHeight: "1.15", fontWeight: "400", letterSpacing: "-0.02em" }],
                100: ["clamp(90px, 5.555rem, 120px)", { lineHeight: "1", fontWeight: "400", letterSpacing: "-0.02em" }],
                90: ["clamp(50px, 5rem, 150px)", { lineHeight: ".8", fontWeight: "400" }],
                82: ["clamp(60px, 4.666rem, 95px)", { lineHeight: "1", fontWeight: "400" }],
                76: ["clamp(60px, 4.222rem, 90px)", { lineHeight: "1", fontWeight: "400" }],
                75: ["clamp(55px, 4.166rem, 90px)", { lineHeight: "1", fontWeight: "400" }],
                70: ["clamp(60px, 3.888rem, 950px)", { lineHeight: ".9", fontWeight: "400" }],
                60: ["clamp(50px, 3.23rem, 75px)", { lineHeight: ".9", fontWeight: "400" }],
                54: ["clamp(44px, 3rem, 70px)", { lineHeight: "1.25", fontWeight: "400" }],
                50: ["clamp(40px, 2.7777rem, 65px)", { lineHeight: ".9", fontWeight: "400" }],
                48: ["clamp(45px, 2.66rem, 55px)", { lineHeight: "1.1", fontWeight: "400" }],
                46: ["clamp(40px, 2.55rem, 51px)", { lineHeight: "1.1", fontWeight: "400" }],
                40: ["clamp(35px, 2.22rem, 45px)", { lineHeight: "1.1", fontWeight: "400" }],
                36: ["clamp(30px, 2rem, 36px)", { lineHeight: "1.3", fontWeight: "400", letterSpacing: "-0.02em" }],
                32: ["clamp(28px, 1.777rem, 34px)", { lineHeight: "1", fontWeight: "400" }],
                30: ["clamp(10px, 1.6666rem, 32px)", { lineHeight: "1.25", fontWeight: "400" }],
                28: ["clamp(24px, 1.5555rem, 30px)", { lineHeight: "1.25", fontWeight: "400" }],
                26: ["clamp(17px, 1.4444rem, 30px)", { lineHeight: "1.1", fontWeight: "400" }],
                24: ["clamp(16px, 1.3333rem, 24px)", { lineHeight: "1.25", fontWeight: "400" }],
                22: ["clamp(12px, 1.2222rem, 24px)", { lineHeight: "1.25", fontWeight: "400" }],
                20: ["clamp(12px, 1.1111rem, 22px)", { lineHeight: "1.25", fontWeight: "400" }],
                18: ["clamp(10px, 1rem, 20px)", { lineHeight: "1.25", fontWeight: "400" }],
                16: ["clamp(10px, .888rem, 22px)", { lineHeight: "1.25", fontWeight: "400" }],
                14: ["clamp(10px, .77rem, 20px)", { lineHeight: "1.25", fontWeight: "400" }],
                12: ["clamp(10px, .66rem, 18px)", { lineHeight: "1.25", fontWeight: "400" }],
                10: ["clamp(10px, .55rem, 16px)", { lineHeight: "1.25", fontWeight: "400" }],
                8: ["clamp(8px, .44rem, 14px)", { lineHeight: "1.25", fontWeight: "400" }]
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
    }
};
