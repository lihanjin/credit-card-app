/**
 * 应用设置使用示例
 */

import { View, Text, TouchableOpacity } from 'react-native';
import { useAppStore } from '@/store/use-app-store';

export function AppSettings() {
  const { theme, language, setTheme, setLanguage, toggleNotifications, notificationsEnabled } =
    useAppStore();

  return (
    <View className="gap-4 p-4">
      <Text className="text-xl font-bold">应用设置</Text>

      <View className="gap-2">
        <Text className="text-base font-medium">主题: {theme}</Text>
        <View className="flex-row gap-2">
          <TouchableOpacity
            onPress={() => setTheme('light')}
            className={`px-4 py-2 rounded-lg ${
              theme === 'light' ? 'bg-primary' : 'bg-grey-200'
            }`}
          >
            <Text
              className={`font-medium ${
                theme === 'light' ? 'text-white' : 'text-grey-700'
              }`}
            >
              浅色
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTheme('dark')}
            className={`px-4 py-2 rounded-lg ${
              theme === 'dark' ? 'bg-primary' : 'bg-grey-200'
            }`}
          >
            <Text
              className={`font-medium ${
                theme === 'dark' ? 'text-white' : 'text-grey-700'
              }`}
            >
              深色
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTheme('auto')}
            className={`px-4 py-2 rounded-lg ${
              theme === 'auto' ? 'bg-primary' : 'bg-grey-200'
            }`}
          >
            <Text
              className={`font-medium ${
                theme === 'auto' ? 'text-white' : 'text-grey-700'
              }`}
            >
              自动
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="gap-2">
        <Text className="text-base font-medium">语言: {language}</Text>
        <View className="flex-row gap-2">
          <TouchableOpacity
            onPress={() => setLanguage('en-US')}
            className={`px-4 py-2 rounded-lg ${
              language === 'en-US' ? 'bg-primary' : 'bg-grey-200'
            }`}
          >
            <Text
              className={`font-medium ${
                language === 'en-US' ? 'text-white' : 'text-grey-700'
              }`}
            >
              English
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setLanguage('zh-CN')}
            className={`px-4 py-2 rounded-lg ${
              language === 'zh-CN' ? 'bg-primary' : 'bg-grey-200'
            }`}
          >
            <Text
              className={`font-medium ${
                language === 'zh-CN' ? 'text-white' : 'text-grey-700'
              }`}
            >
              简体中文
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="gap-2">
        <Text className="text-base font-medium">
          通知: {notificationsEnabled ? '开启' : '关闭'}
        </Text>
        <TouchableOpacity
          onPress={toggleNotifications}
          className={`px-4 py-2 rounded-lg ${
            notificationsEnabled ? 'bg-success' : 'bg-grey-300'
          }`}
        >
          <Text className="text-white text-center font-medium">
            {notificationsEnabled ? '关闭通知' : '开启通知'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}






