/**
 * 主题配置
 * 基于 MUI 主题系统适配到 React Native
 */

// 调色板颜色键
export type PaletteColorKey =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

// 调色板颜色配置
export type PaletteColor = {
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
  contrastText: string;
};

// 灰色调色板
export type GreyPalette = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

// 字体配置
export type FontFamily = {
  primary: string;
  secondary: string;
};

// 字体粗细
export type FontWeight = 300 | 400 | 500 | 600 | 700 | 800;

// 主题配置
export type ThemeConfig = {
  fontFamily: FontFamily;
  palette: {
    primary: PaletteColor;
    secondary: PaletteColor;
    info: PaletteColor;
    success: PaletteColor;
    warning: PaletteColor;
    error: PaletteColor;
    grey: GreyPalette;
    common: {
      black: string;
      white: string;
    };
  };
};

/**
 * 主题配置
 */
export const themeConfig: ThemeConfig = {
  fontFamily: {
    primary: 'Public Sans Variable',
    secondary: 'Barlow',
  },
  palette: {
    primary: {
      lighter: '#D6E4FF',
      light: '#7C9DF7',
      main: '#2752e7',
      dark: '#132DA6',
      darker: '#07156E',
      contrastText: '#FFFFFF',
    },
    secondary: {
      lighter: '#F5F5F7',
      light: '#D1D3D8',
      main: '#A4A7B0',
      dark: '#787B84',
      darker: '#4C4F58',
      contrastText: '#FFFFFF',
    },
    info: {
      lighter: '#CAFDF5',
      light: '#61F3F3',
      main: '#00B8D9',
      dark: '#006C9C',
      darker: '#003768',
      contrastText: '#FFFFFF',
    },
    success: {
      lighter: '#D3FCD2',
      light: '#77ED8B',
      main: '#22C55E',
      dark: '#118D57',
      darker: '#065E49',
      contrastText: '#ffffff',
    },
    warning: {
      lighter: '#FFF5CC',
      light: '#FFD666',
      main: '#FFAB00',
      dark: '#B76E00',
      darker: '#7A4100',
      contrastText: '#1C252E',
    },
    error: {
      lighter: '#FFEFEF',
      light: '#FFAC82',
      main: '#F34242',
      dark: '#B71D18',
      darker: '#7A0916',
      contrastText: '#FFFFFF',
    },
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
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
  },
};

/**
 * 获取调色板颜色
 */
export function getPaletteColor(colorKey: PaletteColorKey): PaletteColor {
  return themeConfig.palette[colorKey];
}

/**
 * 获取灰色值
 */
export function getGrey(level: keyof GreyPalette): string {
  return themeConfig.palette.grey[level];
}
