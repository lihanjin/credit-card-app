/**
 * 登录页面
 * 手机号验证码登录
 */

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Alert,
  Linking,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Button,
  Checkbox,
  Divider,
  IconButton,
  Text,
  useTheme,
} from 'react-native-paper';
import { PhoneInput } from './phone-input';

interface LoginScreenProps {
  onClose?: () => void;
  onGetVerificationCode?: (phoneNumber: string, countryCode: string) => void;
  onGoogleLogin?: () => void;
  onOtherEmailLogin?: () => void;
}

export function LoginScreen({
  onClose,
  onGetVerificationCode,
  onGoogleLogin,
  onOtherEmailLogin,
}: LoginScreenProps) {
  const theme = useTheme();
  const { t } = useTranslation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+852');
  const [agreed, setAgreed] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [loading, setLoading] = useState(false);

  // 验证手机号格式（简单验证）
  const validatePhoneNumber = (phone: string): boolean => {
    // 移除所有非数字字符
    const digitsOnly = phone.replace(/\D/g, '');
    // 至少需要 6 位数字
    return digitsOnly.length >= 6 && digitsOnly.length <= 15;
  };

  const handleGetVerificationCode = async () => {
    // 验证手机号
    if (!phoneNumber.trim()) {
      setPhoneError(true);
      Alert.alert('', t('auth.phoneNumberRequired'));
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      setPhoneError(true);
      Alert.alert('', t('auth.invalidPhoneNumber'));
      return;
    }

    if (!agreed) {
      Alert.alert('', '请先同意服务协议和隐私政策');
      return;
    }

    setPhoneError(false);
    setLoading(true);

    try {
      const fullPhoneNumber = `${countryCode}${phoneNumber.replace(/\D/g, '')}`;
      await onGetVerificationCode?.(fullPhoneNumber, countryCode);
    } catch (error) {
      console.error('获取验证码失败:', error);
      Alert.alert('', '获取验证码失败，请稍后重试');
    } finally {
      setLoading(false);
    }
  };

  const handleServiceAgreement = () => {
    // 打开服务协议链接
    Linking.openURL('https://example.com/service-agreement').catch((err) =>
      console.error('打开链接失败:', err)
    );
  };

  const handlePrivacyPolicy = () => {
    // 打开隐私政策链接
    Linking.openURL('https://example.com/privacy-policy').catch((err) =>
      console.error('打开链接失败:', err)
    );
  };

  const isButtonDisabled = !phoneNumber.trim() || !agreed || loading;

  return (
    <ScrollView
      className="flex-1 bg-white"
      contentContainerClassName="px-4 pt-[60px] pb-10"
    >
      {/* 关闭按钮 */}
      {onClose && (
        <View className="mb-4">
          <IconButton
            icon="close"
            size={24}
            iconColor={theme.colors.onSurface}
            onPress={onClose}
            className="m-0"
          />
        </View>
      )}

      {/* 标题区域 */}
      <View className="mb-10 gap-1.5">
        <Text
          variant="headlineSmall"
          className="text-2xl font-semibold text-grey-900 tracking-tight leading-[34.8px]"
        >
          {t('auth.phoneLoginTitle')}
        </Text>
        <Text
          variant="bodyMedium"
          className="text-[15px] text-black/40 leading-[22.5px]"
        >
          {t('auth.phoneLoginSubtitle')}
        </Text>
      </View>

      {/* 表单区域 */}
      <View className="gap-6 mb-10">
        {/* 手机号输入 */}
        <View>
          <PhoneInput
            value={phoneNumber}
            onChangeText={(text) => {
              setPhoneNumber(text);
              setPhoneError(false);
            }}
            onCountryCodeChange={setCountryCode}
            error={phoneError}
            disabled={loading}
          />
        </View>

        {/* 获取验证码按钮 */}
        <Button
          mode="contained"
          onPress={handleGetVerificationCode}
          disabled={isButtonDisabled}
          loading={loading}
          className={`h-14 rounded-lg ${isButtonDisabled ? 'opacity-50' : ''}`}
          contentStyle={{ height: '100%' }}
          labelStyle={{ fontSize: 20, fontWeight: '600', lineHeight: 28 }}
        >
          {t('auth.getVerificationCode')}
        </Button>

        {/* 服务协议和隐私政策 */}
        <View className="flex-row items-start gap-2">
          <Checkbox
            status={agreed ? 'checked' : 'unchecked'}
            onPress={() => setAgreed(!agreed)}
            color={theme.colors.primary}
          />
          <View className="flex-1 flex-row flex-wrap items-center">
            <Text
              variant="bodySmall"
              className="text-sm text-grey-500 leading-[19.6px]"
            >
              {t('auth.agreeTerms')}{' '}
            </Text>
            <Text
              variant="bodySmall"
              className="text-sm text-primary leading-[19.6px]"
              onPress={handleServiceAgreement}
            >
              {t('auth.serviceAgreement')}
            </Text>
            <Text
              variant="bodySmall"
              className="text-sm text-grey-500 leading-[19.6px]"
            >
              {' '}
              {t('auth.and')}{' '}
            </Text>
            <Text
              variant="bodySmall"
              className="text-sm text-primary leading-[19.6px]"
              onPress={handlePrivacyPolicy}
            >
              {t('auth.privacyPolicy')}
            </Text>
          </View>
        </View>
      </View>

      {/* 其他登录方式 */}
      <View className="items-center gap-10">
        {/* 分隔线 */}
        <View className="flex-row items-center w-[250px] gap-4">
          <Divider className="flex-1 h-px" />
          <Text
            variant="bodyMedium"
            className="text-[15px] text-grey-500 leading-[21px]"
          >
            {t('auth.otherLoginMethods')}
          </Text>
          <Divider className="flex-1 h-px" />
        </View>

        {/* 登录方式按钮 */}
        <View className="flex-row gap-10">
          <TouchableOpacity
            className="items-center gap-2.5"
            onPress={onGoogleLogin}
            disabled={loading}
          >
            <View className="w-14 h-14 rounded-full bg-white border border-grey-200 justify-center items-center">
              <Text className="text-2xl font-semibold text-info">G</Text>
            </View>
            <Text
              variant="bodyMedium"
              className="text-[15px] text-grey-500 leading-[21px]"
            >
              {t('auth.googleEmail')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="items-center gap-2.5"
            onPress={onOtherEmailLogin}
            disabled={loading}
          >
            <View className="w-14 h-14 rounded-full bg-primary border border-grey-200 justify-center items-center">
              <IconButton
                icon="email"
                size={24}
                iconColor={theme.colors.onPrimary}
                className="m-0"
              />
            </View>
            <Text
              variant="bodyMedium"
              className="text-[15px] text-grey-500 leading-[21px]"
            >
              {t('auth.otherEmail')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
