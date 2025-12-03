/**
 * 国家列表 Hook
 * 封装国家列表接口，提供缓存机制，避免重复请求
 */

import { useQuery } from '@tanstack/react-query';
import { getCountryList } from '@/services/base';
import type { GetCountryListRes } from '@/services/base/types';

/**
 * 格式化后的国家代码信息
 */
export interface CountryCode {
  /** 国家代码（如：HK, CN, US） */
  code: string;
  /** 国家区号（如：+852, +86, +1） */
  countryCode: string;
  /** 显示名称（本地化名称） */
  displayName: string;
  /** 英文名称 */
  name: string;
}

/**
 * 默认国家（香港）
 */
export const DEFAULT_COUNTRY: CountryCode = {
  code: 'HK',
  countryCode: '+852',
  displayName: '香港',
  name: 'Hong Kong',
};

/**
 * 格式化国家列表数据
 * 将 API 返回的数据转换为组件使用的格式
 * @param countryList API 返回的国家列表
 * @returns 格式化后的国家列表
 */
function formatCountryList(
  countryList: GetCountryListRes[]
): CountryCode[] {
  return countryList.map((item) => ({
    code: item.code,
    countryCode: item.countryCode,
    displayName: item.displayName,
    name: item.nameEn || item.name,
  }));
}

/**
 * 获取国家列表 Hook
 * 
 * 特性：
 * - 使用 React Query 进行数据缓存
 * - 多个组件使用时只请求一次
 * - 自动处理加载状态和错误
 * - 缓存时间：30分钟（数据变化频率低）
 * 
 * @param parentCode 父级编码，默认 -1（获取所有国家）
 * @returns 国家列表查询结果
 * 
 * @example
 * ```tsx
 * const { data: countries, isLoading, error } = useCountryList();
 * 
 * if (isLoading) return <Text>加载中...</Text>;
 * if (error) return <Text>加载失败</Text>;
 * 
 * return countries?.map(country => (
 *   <Text key={country.code}>{country.displayName}</Text>
 * ));
 * ```
 */
export function useCountryList(parentCode = -1) {
  return useQuery({
    // 查询键：包含 parentCode，不同 parentCode 会有不同的缓存
    queryKey: ['countryList', parentCode],
    
    // 查询函数：调用 API 获取国家列表
    queryFn: async () => {
      const countryList = await getCountryList(parentCode);
      return formatCountryList(countryList);
    },
    
    // 缓存配置
    staleTime: 30 * 60 * 1000, // 30分钟内数据视为新鲜，不会重新请求
    gcTime: 60 * 60 * 1000, // 1小时后从缓存中清除（原 cacheTime）
    
    // 错误处理：返回默认国家列表
    retry: 1, // 失败后重试1次
    retryDelay: 1000, // 重试延迟1秒
    
    // 初始数据：使用默认国家，避免首次加载时显示空列表
    placeholderData: [DEFAULT_COUNTRY],
  });
}


