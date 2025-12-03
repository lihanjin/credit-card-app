import { supportedLanguages, type SupportedLanguage } from '@/i18n/config';
import { useTranslation } from 'react-i18next';

/**
 * i18n Hook
 * 提供翻译功能和语言切换
 */
export function useI18n() {
  const { i18n } = useTranslation();

  /**
   * 切换语言
   */
  const changeLanguage = async (language: SupportedLanguage) => {
    await i18n.changeLanguage(language);
  };

  /**
   * 获取当前语言
   */
  const currentLanguage = i18n.language as SupportedLanguage;

  /**
   * 检查是否为当前语言
   */
  const isCurrentLanguage = (language: SupportedLanguage) => {
    return currentLanguage === language;
  };

  return {
    changeLanguage, // 切换语言
    currentLanguage, // 当前语言
    isCurrentLanguage, // 检查语言
    supportedLanguages, // 支持的语言列表
  };
}
