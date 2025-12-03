/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // 主色调
        primary: {
          lighter: '#D6E4FF',
          light: '#7C9DF7',
          DEFAULT: '#2752e7',
          dark: '#132DA6',
          darker: '#07156E',
          contrast: '#FFFFFF',
        },
        // 次要色调
        secondary: {
          lighter: '#F5F5F7',
          light: '#D1D3D8',
          DEFAULT: '#A4A7B0',
          dark: '#787B84',
          darker: '#4C4F58',
          contrast: '#FFFFFF',
        },
        // 信息色调
        info: {
          lighter: '#CAFDF5',
          light: '#61F3F3',
          DEFAULT: '#00B8D9',
          dark: '#006C9C',
          darker: '#003768',
          contrast: '#FFFFFF',
        },
        // 成功色调
        success: {
          lighter: '#D3FCD2',
          light: '#77ED8B',
          DEFAULT: '#22C55E',
          dark: '#118D57',
          darker: '#065E49',
          contrast: '#ffffff',
        },
        // 警告色调
        warning: {
          lighter: '#FFF5CC',
          light: '#FFD666',
          DEFAULT: '#FFAB00',
          dark: '#B76E00',
          darker: '#7A4100',
          contrast: '#1C252E',
        },
        // 错误色调
        error: {
          lighter: '#FFEFEF',
          light: '#FFAC82',
          DEFAULT: '#F34242',
          dark: '#B71D18',
          darker: '#7A0916',
          contrast: '#FFFFFF',
        },
        // 灰色调
        grey: {
          50: '#FCFDFD',
          100: '#F9FAFB',
          200: '#F4F6F8',
          300: '#DFE3E8',
          400: '#C4CDD5',
          500: '#919EAB',
          600: '#637381',
          700: '#454F5B',
          800: '#1C252E',
          900: '#141A21',
        },
        // 通用颜色
        black: '#000000',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}