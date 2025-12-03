/**
 * i18n 配置文件
 * 支持按模块拆分翻译文件，便于维护和协作
 */

import { getLocales } from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 导入各模块的翻译文件
import authEn from './locales/en-US/auth.json';
import businessEn from './locales/en-US/business.json';
import commonEn from './locales/en-US/common.json';

import authZh from './locales/zh-CN/auth.json';
import businessZh from './locales/zh-CN/business.json';
import commonZh from './locales/zh-CN/common.json';

import authZhTW from './locales/zh-TW/auth.json';
import businessZhTW from './locales/zh-TW/business.json';
import commonZhTW from './locales/zh-TW/common.json';

// 获取设备语言
const deviceLocales = getLocales();
const firstLocale = deviceLocales[0];
const deviceLanguage = firstLocale?.languageCode || 'en-US';
const deviceRegion = firstLocale?.regionCode || '';

// 根据设备语言和地区确定默认语言
let defaultLanguage = deviceLanguage;
if (deviceLanguage === 'zh') {
  // 如果是中文，根据地区判断是简体还是繁体
  // TW: 台湾, HK: 香港, MO: 澳门
  if (deviceRegion === 'TW' || deviceRegion === 'HK' || deviceRegion === 'MO') {
    defaultLanguage = 'zh-TW';
  } else {
    defaultLanguage = 'zh-CN';
  }
}

// 支持的语言列表
export const supportedLanguages = ['en-US', 'zh-CN', 'zh-TW'] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

// 语言资源 - 按命名空间组织
// 使用命名空间可以更好地组织翻译，同时保持向后兼容
const resources = {
  'en-US': {
    // 默认命名空间 translation，保持向后兼容
    translation: {
      common: commonEn,
      auth: authEn,
      business: businessEn,
    },
    // 也可以直接使用命名空间访问（可选）
    common: commonEn,
    auth: authEn,
    business: businessEn,
  },
  'zh-CN': {
    translation: {
      common: commonZh,
      auth: authZh,
      business: businessZh,
    },
    common: commonZh,
    auth: authZh,
    business: businessZh,
  },
  'zh-TW': {
    translation: {
      common: commonZhTW,
      auth: authZhTW,
      business: businessZhTW,
    },
    common: commonZhTW,
    auth: authZhTW,
    business: businessZhTW,
  },
};

// 初始化 i18n
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4', // 兼容 React Native
  resources,
  lng: defaultLanguage, // 默认语言
  fallbackLng: 'en-US', // 回退语言
  interpolation: {
    escapeValue: false, // React 已经转义了
  },
  react: {
    useSuspense: false, // React Native 不需要 Suspense
  },
});

export default i18n;
