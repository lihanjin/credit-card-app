/**
 * 主题颜色工具函数
 * 提供便捷的颜色访问方法
 */

import { themeConfig, type PaletteColorKey } from './theme';

/**
 * 获取主色调
 */
export const primary = themeConfig.palette.primary;

/**
 * 获取次要色调
 */
export const secondary = themeConfig.palette.secondary;

/**
 * 获取信息色调
 */
export const info = themeConfig.palette.info;

/**
 * 获取成功色调
 */
export const success = themeConfig.palette.success;

/**
 * 获取警告色调
 */
export const warning = themeConfig.palette.warning;

/**
 * 获取错误色调
 */
export const error = themeConfig.palette.error;

/**
 * 获取灰色调
 */
export const grey = themeConfig.palette.grey;

/**
 * 获取通用颜色
 */
export const common = themeConfig.palette.common;

/**
 * 根据颜色键获取调色板
 */
export function getColor(colorKey: PaletteColorKey) {
  return themeConfig.palette[colorKey];
}

/**
 * 颜色键列表
 */
export const colorKeys = {
  palette: ['primary', 'secondary', 'info', 'success', 'warning', 'error'] as const,
  common: ['black', 'white'] as const,
};






