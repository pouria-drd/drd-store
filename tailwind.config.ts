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
                background: "var(--background)",
                foreground: "var(--foreground)",

                drd: {
                    primary: "#3D63DD",

                    light: {
                        primary: {
                            1: "#FDFDFE",
                            2: "#F7F9FF",
                            3: "#EDF2FE",
                            4: "#DFEAFF",
                            5: "#D0DFFF",
                            6: "#BDD1FF",
                            7: "#A6BFF9",
                            8: "#87A5EF",
                            9: "#3D63DD",
                            10: "#3657C3",
                            11: "#395BC7",
                            12: "#1D2E5C",
                        },

                        secondary: {
                            1: "#FCFCFD",
                            2: "#F9F9FB",
                            3: "#EFF0F3",
                            4: "#E7E8EC",
                            5: "#E0E1E6",
                            6: "#D8D9E0",
                            7: "#CDCED7",
                            8: "#B9BBC6",
                            9: "#8B8D98",
                            10: "#80828D",
                            11: "#62636C",
                            12: "#1E1F24",
                        },
                    },

                    dark: {
                        primary: {
                            1: "#0C111C",
                            2: "#111725",
                            3: "#172448",
                            4: "#1D2E61",
                            5: "#243974",
                            6: "#2D4484",
                            7: "#375098",
                            8: "#405EB2",
                            9: "#3D63DD",
                            10: "#3F5CB0",
                            11: "#93B4FF",
                            12: "#D5E2FF",
                        },

                        secondary: {
                            1: "#111113",
                            2: "#19191B",
                            3: "#222325",
                            4: "#292A2E",
                            5: "#303136",
                            6: "#393A40",
                            7: "#46484F",
                            8: "#5F606A",
                            9: "#6C6E79",
                            10: "#797B86",
                            11: "#B2B3BD",
                            12: "#EEEEF0",
                        },
                    },
                },
            },
        },
    },
    plugins: [],
};
export default config;
