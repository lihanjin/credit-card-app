import { LanguageSwitcher } from '@/components/features/language-switcher';
import { PaperExample } from '@/components/examples/paper-example';
import { View, ScrollView } from 'react-native';

export default function Index() {
  return (
    <View className="flex-1">
      <ScrollView className="flex-1">
        <View className="p-4">
          <LanguageSwitcher />
        </View>
        <PaperExample />
      </ScrollView>
    </View>
  );
}
