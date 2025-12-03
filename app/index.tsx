import { LanguageSwitcher } from '@/components/language-switcher';
import { useI18n } from '@/hooks/use-i18n';
import { Text, View } from 'react-native';

export default function Index() {
  const { t } = useI18n();

  return (
    <View className="flex-1 justify-center items-center gap-4 px-4">
      <LanguageSwitcher />
      <Text className="text-2xl font-bold">{t('home.title')}</Text>
      <Text className="text-lg text-gray-600">{t('home.edit')}</Text>
      <Text className="text-base">{t('common.welcome')}</Text>
    </View>
  );
}
