import { getLocales } from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import zhTW from './locales/zh-TW.json';
import zh from './locales/zh.json';

// 获取设备语言
const deviceLocales = getLocales();
const firstLocale = deviceLocales[0];
const deviceLanguage = firstLocale?.languageCode || 'en';
const deviceRegion = firstLocale?.regionCode || '';

// 根据设备语言和地区确定默认语言
let defaultLanguage = deviceLanguage;
if (deviceLanguage === 'zh') {
  // 如果是中文，根据地区判断是简体还是繁体
  // TW: 台湾, HK: 香港, MO: 澳门
  if (deviceRegion === 'TW' || deviceRegion === 'HK' || deviceRegion === 'MO') {
    defaultLanguage = 'zh-TW';
  } else {
    defaultLanguage = 'zh';
  }
}

// 支持的语言列表
export const supportedLanguages = ['en', 'zh', 'zh-TW'] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

// 语言资源
const resources = {
  en: {
    translation: en,
  },
  zh: {
    translation: zh,
  },
  'zh-TW': {
    translation: zhTW,
  },
};

// 初始化 i18n
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4', // 兼容 React Native
  resources,
  lng: defaultLanguage, // 默认语言
  fallbackLng: 'en', // 回退语言
  interpolation: {
    escapeValue: false, // React 已经转义了
  },
  react: {
    useSuspense: false, // React Native 不需要 Suspense
  },
});

export default i18n;
