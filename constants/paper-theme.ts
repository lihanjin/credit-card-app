/**
 * React Native Paper 主题配置
 * 基于现有主题配置转换为 Paper 主题格式
 */

import {
  MD3DarkTheme,
  MD3LightTheme,
  configureFonts,
} from 'react-native-paper';
import { themeConfig } from './theme';

// 配置字体
const fontConfig = {
  displayLarge: {
    fontFamily: themeConfig.fontFamily.secondary,
    fontSize: 57,
    fontWeight: '800' as const,
    letterSpacing: 0,
    lineHeight: 64,
  },
  displayMedium: {
    fontFamily: themeConfig.fontFamily.secondary,
    fontSize: 45,
    fontWeight: '800' as const,
    letterSpacing: 0,
    lineHeight: 52,
  },
  displaySmall: {
    fontFamily: themeConfig.fontFamily.secondary,
    fontSize: 36,
    fontWeight: '700' as const,
    letterSpacing: 0,
    lineHeight: 44,
  },
  headlineLarge: {
    fontFamily: themeConfig.fontFamily.secondary,
    fontSize: 32,
    fontWeight: '700' as const,
    letterSpacing: 0,
    lineHeight: 40,
  },
  headlineMedium: {
    fontFamily: themeConfig.fontFamily.secondary,
    fontSize: 28,
    fontWeight: '700' as const,
    letterSpacing: 0,
    lineHeight: 36,
  },
  headlineSmall: {
    fontFamily: themeConfig.fontFamily.secondary,
    fontSize: 24,
    fontWeight: '700' as const,
    letterSpacing: 0,
    lineHeight: 32,
  },
  titleLarge: {
    fontFamily: themeConfig.fontFamily.primary,
    fontSize: 22,
    fontWeight: '700' as const,
    letterSpacing: 0,
    lineHeight: 28,
  },
  titleMedium: {
    fontFamily: themeConfig.fontFamily.primary,
    fontSize: 16,
    fontWeight: '600' as const,
    letterSpacing: 0.15,
    lineHeight: 24,
  },
  titleSmall: {
    fontFamily: themeConfig.fontFamily.primary,
    fontSize: 14,
    fontWeight: '600' as const,
    letterSpacing: 0.1,
    lineHeight: 20,
  },
  labelLarge: {
    fontFamily: themeConfig.fontFamily.primary,
    fontSize: 14,
    fontWeight: '700' as const,
    letterSpacing: 0.1,
    lineHeight: 20,
  },
  labelMedium: {
    fontFamily: themeConfig.fontFamily.primary,
    fontSize: 12,
    fontWeight: '700' as const,
    letterSpacing: 0.5,
    lineHeight: 16,
  },
  labelSmall: {
    fontFamily: themeConfig.fontFamily.primary,
    fontSize: 11,
    fontWeight: '700' as const,
    letterSpacing: 0.5,
    lineHeight: 16,
  },
  bodyLarge: {
    fontFamily: themeConfig.fontFamily.primary,
    fontSize: 16,
    fontWeight: '400' as const,
    letterSpacing: 0.15,
    lineHeight: 24,
  },
  bodyMedium: {
    fontFamily: themeConfig.fontFamily.primary,
    fontSize: 14,
    fontWeight: '400' as const,
    letterSpacing: 0.25,
    lineHeight: 20,
  },
  bodySmall: {
    fontFamily: themeConfig.fontFamily.primary,
    fontSize: 12,
    fontWeight: '400' as const,
    letterSpacing: 0.4,
    lineHeight: 16,
  },
};

// 浅色主题
// 使用 MD3LightTheme 作为基础，符合 Material Design 3 规范
export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    // 主色调
    primary: themeConfig.palette.primary.main,
    onPrimary: themeConfig.palette.primary.contrastText,
    primaryContainer: themeConfig.palette.primary.light,
    onPrimaryContainer: themeConfig.palette.primary.dark,
    // 次要色调
    secondary: themeConfig.palette.secondary.main,
    onSecondary: themeConfig.palette.secondary.contrastText,
    secondaryContainer: themeConfig.palette.secondary.light,
    onSecondaryContainer: themeConfig.palette.secondary.dark,
    // 错误色
    error: themeConfig.palette.error.main,
    onError: themeConfig.palette.error.contrastText,
    errorContainer: themeConfig.palette.error.light,
    onErrorContainer: themeConfig.palette.error.dark,
    // 背景色
    background: themeConfig.palette.common.white,
    onBackground: themeConfig.palette.grey[900],
    // 表面色
    surface: themeConfig.palette.common.white,
    onSurface: themeConfig.palette.grey[900],
    surfaceVariant: themeConfig.palette.grey[100],
    onSurfaceVariant: themeConfig.palette.grey[700],
    // 轮廓色
    outline: themeConfig.palette.grey[300],
    outlineVariant: themeConfig.palette.grey[200],
    // 阴影色
    shadow: themeConfig.palette.common.black,
    // 其他
    inverseSurface: themeConfig.palette.grey[900],
    inverseOnSurface: themeConfig.palette.common.white,
    inversePrimary: themeConfig.palette.primary.light,
    // 成功和警告色（通过自定义属性扩展）
    success: themeConfig.palette.success.main,
    onSuccess: themeConfig.palette.success.contrastText,
    warning: themeConfig.palette.warning.main,
    onWarning: themeConfig.palette.warning.contrastText,
    info: themeConfig.palette.info.main,
    onInfo: themeConfig.palette.info.contrastText,
  },
  fonts: configureFonts({ config: fontConfig }),
};

// 深色主题
// 使用 MD3DarkTheme 作为基础，符合 Material Design 3 规范
export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    // 主色调
    primary: themeConfig.palette.primary.light,
    onPrimary: themeConfig.palette.primary.dark,
    primaryContainer: themeConfig.palette.primary.dark,
    onPrimaryContainer: themeConfig.palette.primary.light,
    // 次要色调
    secondary: themeConfig.palette.secondary.light,
    onSecondary: themeConfig.palette.secondary.dark,
    secondaryContainer: themeConfig.palette.secondary.dark,
    onSecondaryContainer: themeConfig.palette.secondary.light,
    // 错误色
    error: themeConfig.palette.error.light,
    onError: themeConfig.palette.error.dark,
    errorContainer: themeConfig.palette.error.dark,
    onErrorContainer: themeConfig.palette.error.light,
    // 背景色
    background: themeConfig.palette.grey[900],
    onBackground: themeConfig.palette.common.white,
    // 表面色
    surface: themeConfig.palette.grey[800],
    onSurface: themeConfig.palette.common.white,
    surfaceVariant: themeConfig.palette.grey[700],
    onSurfaceVariant: themeConfig.palette.grey[300],
    // 轮廓色
    outline: themeConfig.palette.grey[600],
    outlineVariant: themeConfig.palette.grey[700],
    // 阴影色
    shadow: themeConfig.palette.common.black,
    // 其他
    inverseSurface: themeConfig.palette.common.white,
    inverseOnSurface: themeConfig.palette.grey[900],
    inversePrimary: themeConfig.palette.primary.dark,
    // 成功和警告色（通过自定义属性扩展）
    success: themeConfig.palette.success.main,
    onSuccess: themeConfig.palette.success.contrastText,
    warning: themeConfig.palette.warning.main,
    onWarning: themeConfig.palette.warning.contrastText,
    info: themeConfig.palette.info.main,
    onInfo: themeConfig.palette.info.contrastText,
  },
  fonts: configureFonts({ config: fontConfig }),
};

// 导出默认主题（浅色）- 用于向后兼容
export const paperTheme = lightTheme;
