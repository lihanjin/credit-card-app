/**
 * 字体排版配置
 * 基于 MUI Typography 系统适配到 React Native
 */

import { themeConfig } from './theme';

// 字体粗细配置
export const fontWeight = {
  light: '300' as const,
  regular: '400' as const,
  medium: '500' as const,
  semiBold: '600' as const,
  bold: '700' as const,
  extraBold: '800' as const,
};

// 字体族
const primaryFont = themeConfig.fontFamily.primary;
const secondaryFont = themeConfig.fontFamily.secondary;

// 基础排版配置
const baseTypography = {
  fontFamily: primaryFont,
  fontSecondaryFamily: secondaryFont,
  fontWeightLight: fontWeight.light,
  fontWeightRegular: fontWeight.regular,
  fontWeightMedium: fontWeight.medium,
  fontWeightSemiBold: fontWeight.semiBold,
  fontWeightBold: fontWeight.bold,
  fontWeightExtraBold: fontWeight.extraBold,
};

// px 转 rem (React Native 中直接使用数字)
function pxToRem(size: number): number {
  return size;
}

// 排版变体类型
export type TypographyVariantConfig = {
  fontFamily?: string;
  fontWeight?: string;
  lineHeight: number;
  fontSize: number;
  textTransform?: 'uppercase' | 'none';
};

// 排版变体配置
export const typography = {
  ...baseTypography,
  h1: {
    fontFamily: secondaryFont,
    fontWeight: fontWeight.extraBold,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
  } as TypographyVariantConfig,
  h2: {
    fontFamily: secondaryFont,
    fontWeight: fontWeight.extraBold,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
  } as TypographyVariantConfig,
  h3: {
    fontFamily: secondaryFont,
    fontWeight: fontWeight.bold,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
  } as TypographyVariantConfig,
  h4: {
    fontFamily: primaryFont,
    fontWeight: fontWeight.bold,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
  } as TypographyVariantConfig,
  h5: {
    fontFamily: primaryFont,
    fontWeight: fontWeight.bold,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
  } as TypographyVariantConfig,
  h6: {
    fontFamily: primaryFont,
    fontWeight: fontWeight.semiBold,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
  } as TypographyVariantConfig,
  subtitle1: {
    fontFamily: primaryFont,
    fontWeight: fontWeight.semiBold,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  } as TypographyVariantConfig,
  subtitle2: {
    fontFamily: primaryFont,
    fontWeight: fontWeight.semiBold,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  } as TypographyVariantConfig,
  body1: {
    fontFamily: primaryFont,
    fontWeight: fontWeight.regular,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  } as TypographyVariantConfig,
  body2: {
    fontFamily: primaryFont,
    fontWeight: fontWeight.regular,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  } as TypographyVariantConfig,
  caption: {
    fontFamily: primaryFont,
    fontWeight: fontWeight.regular,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  } as TypographyVariantConfig,
  overline: {
    fontFamily: primaryFont,
    fontWeight: fontWeight.bold,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: 'uppercase' as const,
  } as TypographyVariantConfig,
  button: {
    fontFamily: primaryFont,
    fontWeight: fontWeight.bold,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'none' as const,
  } as TypographyVariantConfig,
};

// 排版变体类型
export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'overline'
  | 'button';
