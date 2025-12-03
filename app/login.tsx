/**
 * 登录页面路由
 */

import { LoginScreen } from '@/components/auth';
import { useRouter } from 'expo-router';
import { Alert, StyleSheet, View } from 'react-native';

export default function LoginPage() {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  const handleGetVerificationCode = async (
    phoneNumber: string,
    countryCode: string
  ) => {
    console.log('获取验证码:', phoneNumber, countryCode);
    // TODO: 调用实际的 API
    Alert.alert('提示', `验证码已发送至 ${phoneNumber}`);
    // 可以导航到验证码输入页面
    // router.push('/verify-code');
  };

  const handleGoogleLogin = () => {
    console.log('Google 登录');
    // TODO: 实现 Google 登录
    Alert.alert('提示', 'Google 登录功能开发中');
  };

  const handleOtherEmailLogin = () => {
    console.log('其他邮箱登录');
    // TODO: 实现其他邮箱登录
    Alert.alert('提示', '邮箱登录功能开发中');
  };

  return (
    <View style={styles.container}>
      <LoginScreen
        onClose={handleClose}
        onGetVerificationCode={handleGetVerificationCode}
        onGoogleLogin={handleGoogleLogin}
        onOtherEmailLogin={handleOtherEmailLogin}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
