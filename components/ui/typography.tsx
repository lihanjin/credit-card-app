import { themeConfig } from '@/constants/theme';
import { typography, type TypographyVariant } from '@/constants/typography';
import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';

export interface TypographyProps extends Omit<TextProps, 'style'> {
  /**
   * 排版变体
   */
  variant?: TypographyVariant;
  /**
   * 自定义字体大小
   */
  fontSize?: number;
  /**
   * 自定义字体粗细
   */
  fontWeight?: '300' | '400' | '500' | '600' | '700' | '800';
  /**
   * 文本颜色
   */
  color?: string;
  /**
   * 是否使用次要字体
   */
  useSecondaryFont?: boolean;
  /**
   * 自定义样式
   */
  style?: TextProps['style'];
  /**
   * 子元素
   */
  children: React.ReactNode;
}

/**
 * 通用文本组件
 * 基于 MUI Typography 系统
 */
export function Typography({
  variant = 'body1',
  fontSize,
  fontWeight: customFontWeight,
  color,
  useSecondaryFont = false,
  style,
  children,
  ...props
}: TypographyProps) {
  const variantConfig = typography[variant];

  // 确定字体族
  const fontFamily = useSecondaryFont
    ? (variantConfig.fontFamily ?? typography.fontSecondaryFamily)
    : (variantConfig.fontFamily ?? typography.fontFamily);

  // React Native 不支持 textTransform，需要手动处理
  const displayText =
    variantConfig.textTransform === 'uppercase' && typeof children === 'string'
      ? children.toUpperCase()
      : children;

  // 确定字体粗细 - 转换为 React Native 支持的类型
  const finalFontWeight = (customFontWeight ??
    variantConfig.fontWeight ??
    typography.fontWeightRegular) as TextStyle['fontWeight'];

  const textStyle: TextStyle = {
    fontFamily,
    fontSize: fontSize ?? variantConfig.fontSize,
    fontWeight: finalFontWeight,
    lineHeight: variantConfig.lineHeight
      ? (fontSize ?? variantConfig.fontSize) * variantConfig.lineHeight
      : undefined,
    color: color ?? themeConfig.palette.grey[800],
  };

  return (
    <Text style={[textStyle, style]} {...props}>
      {displayText}
    </Text>
  );
}

// 便捷导出常用变体
export const H1 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="h1" {...props} />
);

export const H2 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="h2" {...props} />
);

export const H3 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="h3" {...props} />
);

export const H4 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="h4" {...props} />
);

export const H5 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="h5" {...props} />
);

export const H6 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="h6" {...props} />
);

export const Subtitle1 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="subtitle1" {...props} />
);

export const Subtitle2 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="subtitle2" {...props} />
);

export const Body1 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="body1" {...props} />
);

export const Body2 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="body2" {...props} />
);

export const Caption = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="caption" {...props} />
);

export const Overline = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="overline" {...props} />
);

export const ButtonText = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="button" {...props} />
);
