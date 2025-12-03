import { useI18n } from '@/hooks/use-i18n';
import { Text, TouchableOpacity, View } from 'react-native';

// 语言显示名称映射
const languageNames: Record<string, string> = {
  en: 'English',
  zh: '简体中文',
  'zh-TW': '繁體中文',
};

/**
 * 语言切换组件
 */
export function LanguageSwitcher() {
  const {
    currentLanguage,
    changeLanguage,
    supportedLanguages,
    isCurrentLanguage,
  } = useI18n();

  return (
    <View className="flex-row gap-2">
      {supportedLanguages.map((lang) => (
        <TouchableOpacity
          key={lang}
          onPress={() => changeLanguage(lang)}
          className={`px-4 py-2 rounded-lg ${
            isCurrentLanguage(lang) ? 'bg-blue-500' : 'bg-gray-200'
          }`}
        >
          <Text
            className={`font-medium ${
              isCurrentLanguage(lang) ? 'text-white' : 'text-gray-700'
            }`}
          >
            {languageNames[lang] || lang.toUpperCase()}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
