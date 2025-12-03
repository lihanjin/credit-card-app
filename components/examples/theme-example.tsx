import { View, Text } from 'react-native';

/**
 * 主题颜色使用示例组件
 */
export function ThemeExample() {
  return (
    <View className="p-4 gap-4">
      {/* 主色调示例 */}
      <View className="gap-2">
        <Text className="text-lg font-bold">主色调 (Primary)</Text>
        <View className="flex-row gap-2">
          <View className="bg-primary-lighter p-3 rounded">
            <Text className="text-primary-darker">Lighter</Text>
          </View>
          <View className="bg-primary-light p-3 rounded">
            <Text className="text-white">Light</Text>
          </View>
          <View className="bg-primary p-3 rounded">
            <Text className="text-white">Main</Text>
          </View>
          <View className="bg-primary-dark p-3 rounded">
            <Text className="text-white">Dark</Text>
          </View>
        </View>
      </View>

      {/* 成功色调示例 */}
      <View className="gap-2">
        <Text className="text-lg font-bold">成功色调 (Success)</Text>
        <View className="flex-row gap-2">
          <View className="bg-success-lighter p-3 rounded">
            <Text className="text-success-darker">Lighter</Text>
          </View>
          <View className="bg-success p-3 rounded">
            <Text className="text-white">Main</Text>
          </View>
          <View className="bg-success-dark p-3 rounded">
            <Text className="text-white">Dark</Text>
          </View>
        </View>
      </View>

      {/* 错误色调示例 */}
      <View className="gap-2">
        <Text className="text-lg font-bold">错误色调 (Error)</Text>
        <View className="flex-row gap-2">
          <View className="bg-error-lighter p-3 rounded">
            <Text className="text-error-darker">Lighter</Text>
          </View>
          <View className="bg-error p-3 rounded">
            <Text className="text-white">Main</Text>
          </View>
          <View className="bg-error-dark p-3 rounded">
            <Text className="text-white">Dark</Text>
          </View>
        </View>
      </View>

      {/* 灰色调示例 */}
      <View className="gap-2">
        <Text className="text-lg font-bold">灰色调 (Grey)</Text>
        <View className="flex-row gap-2 flex-wrap">
          <View className="bg-grey-100 p-2 rounded">
            <Text className="text-grey-900">100</Text>
          </View>
          <View className="bg-grey-300 p-2 rounded">
            <Text className="text-grey-900">300</Text>
          </View>
          <View className="bg-grey-500 p-2 rounded">
            <Text className="text-white">500</Text>
          </View>
          <View className="bg-grey-700 p-2 rounded">
            <Text className="text-white">700</Text>
          </View>
          <View className="bg-grey-900 p-2 rounded">
            <Text className="text-white">900</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

