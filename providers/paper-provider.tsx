/**
 * React Native Paper Provider
 * 为应用提供 Paper UI 组件库的上下文
 * 支持动态主题切换（浅色/深色/自动）
 */

import { darkTheme, lightTheme } from '@/constants/paper-theme';
import { useAppStore } from '@/store/use-app-store';
import { ReactNode, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';

interface PaperProviderWrapperProps {
  children: ReactNode;
}

/**
 * PaperProvider 包装组件
 * 包裹应用根组件，提供 React Native Paper 功能
 * 根据应用设置自动切换主题
 */
export function PaperProviderWrapper({ children }: PaperProviderWrapperProps) {
  const { theme: appTheme } = useAppStore();
  const systemColorScheme = useColorScheme();

  // 根据应用主题设置和系统设置确定当前主题
  const currentTheme = useMemo(() => {
    if (appTheme === 'dark') {
      return darkTheme;
    }
    if (appTheme === 'light') {
      return lightTheme;
    }
    // auto 模式：跟随系统设置
    return systemColorScheme === 'dark' ? darkTheme : lightTheme;
  }, [appTheme, systemColorScheme]);

  return <PaperProvider theme={currentTheme}>{children}</PaperProvider>;
}
