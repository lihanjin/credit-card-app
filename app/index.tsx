import { ThemeExample } from '@/components/examples/theme-example';
import { LanguageSwitcher } from '@/components/features/language-switcher';
import { themeConfig } from '@/constants/theme';
import { useI18n } from '@/hooks/use-i18n';
import { View } from 'react-native';

export default function Index() {
  const { t } = useI18n();

  return (
    <View className="flex-1 justify-center items-center gap-4 px-4">
      <ThemeExample />
      <LanguageSwitcher />
      <H1>{t('home.title')}</H1>
      <Body1 color={themeConfig.palette.grey[600]}>{t('home.edit')}</Body1>
    </View>
  );
}
