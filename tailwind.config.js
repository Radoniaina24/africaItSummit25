/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import flowbite from "flowbite-react/tailwind";
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      satoshi: ["Satoshi", "sans-serif"],
    },
    screens: {
      "2xsm": "375px",
      xsm: "425px",
      "3xl": "2000px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        current: "currentColor",
        transparent: "transparent",
        stroke: "#EEEEEE",
        strokedark: "#2D2F40",
        hoverdark: "#252A42",
        titlebg: "#ADFFF8",
        titlebg2: "#FFEAC2",
        titlebgdark: "#46495A",
        btndark: "#292E45",
        white: "#FFFFFF",
        black: "#181C31",
        blackho: "#2C3149",
        blacksection: "#1C2136",
        primary: "#006BFF",
        primaryho: "#0063EC",
        meta: "#20C5A8",
        waterloo: "#757693",
        manatee: "#999AA1",
        alabaster: "#FBFBFB",
        zumthor: "#EDF5FF",
        socialicon: "#D1D8E0",

        //admin
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        body: "#64748B",
        bodydark: "#AEB7C0",
        bodydark1: "#DEE4EE",
        bodydark2: "#8A99AF",
        primary: "#3C50E0",
        secondary: "#80CAEE",
        stroke: "#E2E8F0",
        graydark: "#333A48",
        whiten: "#F1F5F9",
        whiter: "#F5F7FD",
        boxdark: "#24303F",
        "boxdark-2": "#1A222C",
        strokedark: "#2E3A47",
        "form-strokedark": "#3d4d60",
        "form-input": "#1d2a39",
        meta: {
          1: "#DC3545",
          2: "#EFF2F7",
          3: "#10B981",
          4: "#313D4A",
          5: "#259AE6",
          6: "#FFBA00",
          7: "#FF6766",
          8: "#F0950C",
          9: "#E5E7EB",
          10: "#0FADCF",
        },
        success: "#219653",
        danger: "#D34053",
        warning: "#FFA70B",
      },
      fontSize: {
        metatitle: ["12px", "20px"],
        sectiontitle: ["14px", "22px"],
        regular: ["16px", "26px"],
        metatitle3: ["18px", "26px"],
        metatitle2: ["20px", "32px"],
        para2: ["22px", "35px"],
        itemtitle: ["26px", "32px"],
        itemtitle2: ["24px", "32px"],
        hero: ["44px", "58px"],
        sectiontitle3: ["44px", "55px"],
        sectiontitle2: ["40px", "52px"],
        sectiontitle4: ["34px", "48px"],
        "title-xxl": ["44px", "55px"],
        "title-xxl2": ["42px", "58px"],
        "title-xl": ["36px", "45px"],
        "title-xl2": ["33px", "45px"],
        "title-lg": ["28px", "35px"],
        "title-md": ["24px", "30px"],
        "title-md2": ["26px", "30px"],
        "title-sm": ["20px", "26px"],
        "title-sm2": ["22px", "28px"],
        "title-xsm": ["18px", "24px"],
      },
      spacing: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        6.5: "1.625rem",
        7.5: "1.875rem",
        8.5: "2.125rem",
        10.5: "2.625rem",
        11.5: "2.875rem",
        12.5: "3.125rem",
        13: "3.25rem",
        13.5: "3.375rem",
        14.5: "3.625rem",
        15: "3.75rem",
        15.5: "3.875rem",
        16: "4rem",
        17: "4.25rem",
        17.5: "4.375rem",
        18: "4.5rem",
        18.5: "4.625rem",
        19: "4.75rem",
        21: "5.25rem",
        21.5: "5.375rem",
        22: "5.5rem",
        22.5: "5.625rem",
        25: "6.25rem",
        27: "6.75rem",
        27.5: "6.875rem",
        29: "7.25rem",
        29.5: "7.375rem",
        30: "7.5rem",
        32.5: "8.125rem",
        35: "8.75rem",
        37.5: "9.375rem",
        40: "10rem",
        42.5: "10.625rem",
        45: "11.25rem",
        46: "11.5rem",
        47.5: "11.875rem",
        50: "12.5rem",
        55: "13.75rem",
        60: "15rem",
        65: "16.25rem",
        67: "16.75rem",
        67.5: "16.875rem",
        90: "22.5rem",
        94: "23.5rem",
        95: "23.75rem",
        100: "25rem",
        115: "28.75rem",
        125: "31.25rem",
        132.5: "33.125rem",
        150: "37.5rem",
        171.5: "42.875rem",
        180: "45rem",
        187.5: "46.875rem",
        203: "50.75rem",
        230: "57.5rem",
        242.5: "60.625rem",
      },
      maxWidth: {
        "c-1390": "86.875rem",
        "c-1315": "82.188rem",
        "c-1280": "80rem",
        "c-1235": "77.188rem",
        "c-1154": "72.125rem",
        "c-1016": "63.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        4: "1rem",
        7: "1.75rem",
        9: "2.25rem",
        10: "2.5rem",
        10.5: "2.625rem",
        11: "2.75rem",
        13: "3.25rem",
        14: "3.5rem",
        15: "3.75rem",
        16: "4rem",
        22.5: "5.625rem",
        25: "6.25rem",
        30: "7.5rem",
        34: "8.5rem",
        35: "8.75rem",
        40: "10rem",
        42.5: "10.625rem",
        44: "11rem",
        45: "11.25rem",
        60: "15rem",
        70: "17.5rem",
        90: "22.5rem",
        94: "23.5rem",
        125: "31.25rem",
        132.5: "33.125rem",
        142.5: "35.625rem",
        150: "37.5rem",
        180: "45rem",
        203: "50.75rem",
        230: "57.5rem",
        242.5: "60.625rem",
        270: "67.5rem",
        280: "70rem",
        292.5: "73.125rem",
      },
      minWidth: {
        22.5: "5.625rem",
        42.5: "10.625rem",
        47.5: "11.875rem",
        75: "18.75rem",
      },
      maxHeight: {
        35: "8.75rem",
        70: "17.5rem",
        90: "22.5rem",
        550: "34.375rem",
        300: "18.75rem",
      },
      zIndex: {
        999999: "999999",
        99999: "99999",
        9999: "9999",
        999: "999",
        99: "99",
        9: "9",
        1: "1",
      },
      opacity: {
        65: ".65",
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "21/9": "21 / 9",
      },
      transitionProperty: { width: "width", stroke: "stroke" },
      borderWidth: {
        6: "6px",
        10: "10px",
        12: "12px",
      },
      boxShadow: {
        "solid-l": "0px 10px 120px 0px rgba(45, 74, 170, 0.1)",
        "solid-2": "0px 2px 10px rgba(122, 135, 167, 0.05)",
        "solid-3": "0px 6px 90px rgba(8, 14, 40, 0.04)",
        "solid-4": "0px 6px 90px rgba(8, 14, 40, 0.1)",
        "solid-5": "0px 8px 24px rgba(45, 74, 170, 0.08)",
        "solid-6": "0px 8px 24px rgba(10, 16, 35, 0.08)",
        "solid-7": "0px 30px 50px rgba(45, 74, 170, 0.1)",
        "solid-8": "0px 12px 120px rgba(45, 74, 170, 0.06)",
        "solid-9": "0px 12px 30px rgba(45, 74, 170, 0.06)",
        "solid-10": "0px 8px 30px rgba(45, 74, 170, 0.06)",
        "solid-11": "0px 6px 20px rgba(45, 74, 170, 0.05)",
        "solid-12": "0px 2px 10px rgba(0, 0, 0, 0.05)",
        "solid-13": "0px 2px 19px rgba(0, 0, 0, 0.05)",
        default: "0px 8px 13px -3px rgba(0, 0, 0, 0.07)",
        card: "0px 1px 3px rgba(0, 0, 0, 0.12)",
        "card-2": "0px 1px 2px rgba(0, 0, 0, 0.05)",
        switcher:
          "0px 2px 4px rgba(0, 0, 0, 0.2), inset 0px 2px 2px #FFFFFF, inset 0px -1px 1px rgba(0, 0, 0, 0.1)",
        "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
        1: "0px 1px 3px rgba(0, 0, 0, 0.08)",
        2: "0px 1px 4px rgba(0, 0, 0, 0.12)",
        3: "0px 1px 5px rgba(0, 0, 0, 0.14)",
        4: "0px 4px 10px rgba(0, 0, 0, 0.12)",
        5: "0px 1px 1px rgba(0, 0, 0, 0.15)",
        6: "0px 3px 15px rgba(0, 0, 0, 0.1)",
        7: "-5px 0 0 #313D4A, 5px 0 0 #313D4A",
        8: "1px 0 0 #313D4A, -1px 0 0 #313D4A, 0 1px 0 #313D4A, 0 -1px 0 #313D4A, 0 3px 13px rgb(0 0 0 / 8%)",
        9: "0px 2px 3px rgba(183, 183, 183, 0.5)",
        10: "0px 1px 2px 0px rgba(0, 0, 0, 0.10)",
        11: "0px 1px 3px 0px rgba(166, 175, 195, 0.40)",
        12: "0px 0.5px 3px 0px rgba(0, 0, 0, 0.18)",
        13: "0px 1px 3px 0px rgba(0, 0, 0, 0.08)",
        14: "0px 2px 3px 0px rgba(0, 0, 0, 0.10)",
      },
      dropShadow: {
        1: "0px 1px 0px #E2E8F0",
        2: "0px 1px 4px rgba(0, 0, 0, 0.12)",
        3: "0px 0px 4px rgba(0, 0, 0, 0.15)",
        4: "0px 0px 2px rgba(0, 0, 0, 0.2)",
        5: "0px 1px 5px rgba(0, 0, 0, 0.2)",
      },
      keyframes: {
        line: {
          "0%, 100%": { transform: "translateY(100%)" },
          "50%": { transform: "translateY(0)" },
        },
        linspin: {
          "100%": { transform: "rotate(360deg)" },
        },
        easespin: {
          "12.5%": { transform: "rotate(135deg)" },
          "25%": { transform: "rotate(270deg)" },
          "37.5%": { transform: "rotate(405deg)" },
          "50%": { transform: "rotate(540deg)" },
          "62.5%": { transform: "rotate(675deg)" },
          "75%": { transform: "rotate(810deg)" },
          "87.5%": { transform: "rotate(945deg)" },
          "100%": { transform: "rotate(1080deg)" },
        },
        "left-spin": {
          "0%": { transform: "rotate(130deg)" },
          "50%": { transform: "rotate(-5deg)" },
          "100%": { transform: "rotate(130deg)" },
        },
        "right-spin": {
          "0%": { transform: "rotate(-130deg)" },
          "50%": { transform: "rotate(5deg)" },
          "100%": { transform: "rotate(-130deg)" },
        },
        rotating: {
          "0%, 100%": { transform: "rotate(360deg)" },
          "50%": { transform: "rotate(0deg)" },
        },
        topbottom: {
          "0%, 100%": { transform: "translate3d(0, -100%, 0)" },
          "50%": { transform: "translate3d(0, 0, 0)" },
        },
        bottomtop: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -100%, 0)" },
        },
        "line-revert": {
          "0%, 100%": { transform: "translateY(100%)" },
          "50%": { transform: "translateY(0)" },
        },
      },
      animation: {
        line1: "line 3s linear infinite",
        line2: "line 6s linear infinite",
        line3: "line 9s linear infinite",
        linspin: "linspin 1568.2353ms linear infinite",
        easespin: "easespin 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both",
        "left-spin":
          "left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both",
        "right-spin":
          "right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both",
        "ping-once": "ping 5s cubic-bezier(0, 0, 0.2, 1)",
        rotating: "rotating 30s linear infinite",
        topbottom: "topbottom 60s infinite alternate linear",
        bottomtop: "bottomtop 60s infinite alternate linear",
        "spin-1.5": "spin 1.5s linear infinite",
        "spin-2": "spin 2s linear infinite",
        "spin-3": "spin 3s linear infinite",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
