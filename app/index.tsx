import { PaperExample } from '@/components/examples/paper-example';
import { LanguageSwitcher } from '@/components/features/language-switcher';
import { useRouter } from 'expo-router';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function Index() {
  const router = useRouter();

  const handleGetVerificationCode = async (
    phoneNumber: string,
    countryCode: string
  ) => {
    console.log('获取验证码:', phoneNumber, countryCode);
    Alert.alert('提示', `验证码已发送至 ${phoneNumber}`);
  };

  const handleGoogleLogin = () => {
    Alert.alert('提示', 'Google 登录功能开发中');
  };

  const handleOtherEmailLogin = () => {
    Alert.alert('提示', '邮箱登录功能开发中');
  };

  return (
    <View className="flex-1">
      <ScrollView className="flex-1">
        <View className="p-4 gap-4">
          <LanguageSwitcher />
          <Button
            mode="contained"
            onPress={() => router.push('/login')}
            style={styles.loginButton}
          >
            打开登录页面
          </Button>
        </View>
        <PaperExample />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    marginBottom: 16,
  },
});
