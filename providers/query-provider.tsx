/**
 * React Query Provider
 * 为应用提供 QueryClient 上下文
 */

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

// 创建 QueryClient 实例
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 失败后重试次数
      retry: 1,
      // 缓存时间（5分钟）
      gcTime: 5 * 60 * 1000,
      // 数据过期时间（0表示数据总是被认为是过期的，需要重新获取）
      staleTime: 0,
      // 在窗口重新获得焦点时重新获取数据
      refetchOnWindowFocus: false,
    },
    mutations: {
      // Mutation 失败后重试次数
      retry: 0,
    },
  },
});

interface QueryProviderProps {
  children: ReactNode;
}

/**
 * QueryProvider 组件
 * 包裹应用根组件，提供 React Query 功能
 */
export function QueryProvider({ children }: QueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
