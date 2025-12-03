/**
 * 认证状态使用示例
 */

import { View, Text, TouchableOpacity } from 'react-native';
import { useAuthStore } from '@/store/use-auth-store';

export function AuthExample() {
  const { user, isAuthenticated, login, logout } = useAuthStore();

  const handleLogin = () => {
    login(
      {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
      },
      'fake-token-123'
    );
  };

  return (
    <View className="gap-4 p-4">
      {isAuthenticated ? (
        <>
          <Text className="text-lg font-bold">欢迎, {user?.name}</Text>
          <Text className="text-gray-600">{user?.email}</Text>
          <TouchableOpacity
            onPress={logout}
            className="bg-error px-4 py-2 rounded-lg"
          >
            <Text className="text-white text-center font-medium">登出</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text className="text-lg">未登录</Text>
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-primary px-4 py-2 rounded-lg"
          >
            <Text className="text-white text-center font-medium">登录</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}


