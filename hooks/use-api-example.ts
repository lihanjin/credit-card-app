/**
 * API Hooks 使用示例
 * 展示如何将服务 API 与 React Query 和 Zustand 结合使用
 */

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { queryStoreDetail, getDomain } from '@/services/base';
import { shopLogin, queryShopUserinfo } from '@/services/user';
import { getRateList } from '@/services/rate';
import { useAuthStore } from '@/store/use-auth-store';

/**
 * 获取店铺详情
 */
export function useStoreDetail() {
  return useQuery({
    queryKey: ['storeDetail'],
    queryFn: queryStoreDetail,
  });
}

/**
 * 获取域名信息
 */
export function useDomain() {
  return useQuery({
    queryKey: ['domain'],
    queryFn: getDomain,
  });
}

/**
 * 获取用户信息
 */
export function useShopUserinfo() {
  const { isAuthenticated } = useAuthStore();

  return useQuery({
    queryKey: ['shopUserinfo'],
    queryFn: queryShopUserinfo,
    enabled: isAuthenticated, // 只有登录后才查询
  });
}

/**
 * 登录 Mutation
 */
export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: shopLogin,
    onSuccess: (token) => {
      // 登录成功后，保存 token 到 store
      // 注意：这里需要根据实际登录接口返回的数据结构来调整
      useAuthStore.getState().login(
        {
          id: '1',
          name: '',
          email: '',
        },
        token
      );

      // 使相关查询失效，触发重新获取
      queryClient.invalidateQueries({ queryKey: ['shopUserinfo'] });
    },
  });
}

/**
 * 获取汇率列表
 */
export function useRateList(payType: string) {
  return useQuery({
    queryKey: ['rateList', payType],
    queryFn: () => getRateList({ payType: payType as any }),
    enabled: !!payType,
  });
}




