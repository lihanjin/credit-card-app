/**
 * 请求封装
 * 基于 Axios，适配 React Native/Expo
 */

import type { AxiosError, AxiosResponse, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';
import * as Localization from 'expo-localization';
import { useAuthStore } from '@/store/use-auth-store';
import { encryptParams } from './requestEncrypt';

/** 需要忽略版本号的服务 */
const skipVersionService = ['AppJcStrategyDubboService'];

interface CustomerAxiosRequestConfig extends AxiosRequestConfig {
  /** 传字符串修改请求头version版本，传null直接删除请求头version字段 */
  version?: string | null;
  /** 接口跳过报错提示code */
  skipErrorCode?: string[];
  /** 跳过报错提示 */
  skipCatchSpecialErrors?: boolean;
  /** 请求参数是否需要加密 */
  doNotEncrypt?: boolean;
  /** 人机校验验证码 */
  captcha?: string;
  /** 手动拦截错误处理,在useRequest 和 try catch里面捕获 */
  manualInterceptionError?: boolean;
}

// 获取时区偏移
const getTimezoneOffset = () => {
  const offsetInMinutes = new Date().getTimezoneOffset();
  const offsetInHours = -offsetInMinutes / 60;
  return `GMT${offsetInHours >= 0 ? `+${offsetInHours}` : offsetInHours}`;
};

const isEncrypt = process.env.EXPO_PUBLIC_ENCRYPT === 'true';

// 创建 Axios 实例
const service = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL || '/shopApi',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    companyId: process.env.EXPO_PUBLIC_COMPANY_ID || '',
    version: '0.0.1',
    tz: getTimezoneOffset(),
  },
  timeout: 20000,
});

// 生成唯一 ID（简化版）
function guid(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/* 请求拦截器 */
service.interceptors.request.use(
  async (config: CustomerAxiosRequestConfig & InternalAxiosRequestConfig) => {
    const timestamp = Date.now();

    if (config?.headers) {
      config.headers.trace = (isEncrypt ? 'x-' : '') + guid();

      if (config.url?.includes('tradeapi.')) {
        config.headers.group = 'tradeApi';
      }

      if (config.version) {
        config.headers.version = config.version;
      }

      if (
        config.version === null ||
        skipVersionService.find((item) => config?.url?.indexOf(item) !== -1)
      ) {
        delete config.headers.version;
      }

      if (config.captcha) {
        config.headers.captcha = config.captcha;
      }

      config.headers.timestamp = timestamp.toString();

      // 从 Zustand store 获取 token
      const token = useAuthStore.getState().token;
      if (token) {
        config.headers.accessToken = token;
      }

      // 获取当前语言
      const locales = Localization.getLocales();
      const lang = locales[0]?.languageCode || 'en';
      if (lang) {
        config.headers.lang = lang;
      }
    }

    // 加密请求参数
    if (config.doNotEncrypt !== true && config.data) {
      try {
        const encryptedBody = await encryptParams(config.data, timestamp);
        config.data = {
          body: encryptedBody,
          // 开发环境下同时发送原始参数用于调试
          ...(isEncrypt && __DEV__ ? { params: config.data } : {}),
        };
      } catch (error) {
        console.error('加密参数失败:', error);
      }
    }

    return config;
  },
  (error: AxiosError) => {
    console.error('请求错误:', error.message);
    return Promise.reject(error);
  }
);

/* 响应拦截器 */
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { code, msg, data } = response.data;
    const config: CustomerAxiosRequestConfig & InternalAxiosRequestConfig = response.config;

    // 登录态过期
    if (['10001'].includes(String(code))) {
      useAuthStore.getState().logout();
      // React Native 中需要导航到登录页
      // 这里可以触发导航事件或使用全局状态
      return Promise.reject(response.data);
    }

    if (code === '0' || code === 0) {
      return data;
    } else {
      // 判断是否需要跳过报错提示
      if (config.skipErrorCode?.includes(String(code)) || config.skipCatchSpecialErrors) {
        // 静默处理错误
      } else {
        // React Native 中可以使用 toast 或 Alert
        console.error('请求失败:', msg);
        // 可以在这里集成 toast 库，如 react-native-toast-message
      }

      return Promise.reject(response.data);
    }
  },
  (error: AxiosError) => {
    console.error('响应错误:', error.message);
    
    // 网络错误处理
    if (!error.response) {
      console.error('网络错误，请检查网络连接');
    }
    
    return Promise.reject(error);
  }
);

/* 导出封装的请求方法 */
export const request = {
  get<T = any>(
    url: string,
    config?: AxiosRequestConfig & CustomerAxiosRequestConfig
  ): Promise<T> {
    return service.get(url, config);
  },
  post<T = any>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig & CustomerAxiosRequestConfig
  ): Promise<T> {
    return service.post(url, data, config);
  },
  put<T = any>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig & CustomerAxiosRequestConfig
  ): Promise<T> {
    return service.put(url, data, config);
  },
  delete<T = any>(
    url: string,
    config?: AxiosRequestConfig & CustomerAxiosRequestConfig
  ): Promise<T> {
    return service.delete(url, config);
  },
  patch<T = any>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig & CustomerAxiosRequestConfig
  ): Promise<T> {
    return service.patch(url, data, config);
  },
};

export default service;

