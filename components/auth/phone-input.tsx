/**
 * 手机号输入组件
 * 带国家代码选择器
 */

import {
  DEFAULT_COUNTRY,
  useCountryList,
  type CountryCode,
} from '@/hooks/use-country-list';
import { useI18n } from '@/hooks/use-i18n';
import React, { useState } from 'react';
import { FlatList, Modal, TouchableOpacity, View } from 'react-native';
import { IconButton, Text, TextInput, useTheme } from 'react-native-paper';

interface PhoneInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onCountryCodeChange?: (countryCode: string) => void;
  error?: boolean;
  disabled?: boolean;
}

const DEFAULT_COUNTRY_CODE = '+852';

export function PhoneInput({
  value,
  onChangeText,
  onCountryCodeChange,
  error = false,
  disabled = false,
}: PhoneInputProps) {
  const theme = useTheme();
  const { t } = useI18n();

  // 使用国家列表 Hook，自动处理缓存和加载状态
  const {
    data: countries = [DEFAULT_COUNTRY], // 默认使用香港
    isLoading: loading,
    error: countryListError,
  } = useCountryList();

  const [selectedCountry, setSelectedCountry] =
    useState<CountryCode>(DEFAULT_COUNTRY);
  const [countryCode, setCountryCode] = useState(DEFAULT_COUNTRY_CODE);
  const [showCountryPicker, setShowCountryPicker] = useState(false);

  // 如果加载失败，记录错误（Hook 已处理，这里只是记录）
  React.useEffect(() => {
    if (countryListError) {
      console.error('加载国家列表失败:', countryListError);
    }
  }, [countryListError]);

  const handleCountrySelect = (country: CountryCode) => {
    setSelectedCountry(country);
    setCountryCode(country.countryCode);
    setShowCountryPicker(false);
    onCountryCodeChange?.(country.countryCode);
  };

  const handleClear = () => {
    onChangeText('');
  };

  return (
    <>
      <View
        className={`flex-row items-center border rounded-lg h-[60px] bg-white ${
          error ? 'border-error' : 'border-grey-200'
        }`}
      >
        {/* 国家代码选择器 */}
        <TouchableOpacity
          className="px-4 h-full justify-center"
          onPress={() => setShowCountryPicker(true)}
          disabled={disabled}
        >
          <View className="flex-row items-center">
            <Text className="text-[15px] font-semibold text-grey-900">
              {countryCode}
            </Text>
            <IconButton
              icon="chevron-down"
              size={20}
              iconColor={theme.colors.onSurface}
              className="m-0 w-6 h-6"
            />
          </View>
        </TouchableOpacity>

        {/* 分隔线 */}
        <View className="w-px h-6 mx-2 bg-grey-300" />

        {/* 手机号输入框 */}
        <View className="flex-1 h-full">
          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={t('auth.enterPhoneNumber')}
            mode="flat"
            keyboardType="phone-pad"
            className="bg-transparent h-full"
            contentStyle={{ paddingHorizontal: 0 }}
            disabled={disabled}
            error={error}
            right={
              value ? (
                <TextInput.Icon
                  icon="close-circle"
                  onPress={handleClear}
                  forceTextInputFocus={false}
                />
              ) : undefined
            }
          />
        </View>
      </View>

      {/* 国家选择器模态框 */}
      <Modal
        visible={showCountryPicker}
        transparent
        animationType="slide"
        onRequestClose={() => setShowCountryPicker(false)}
      >
        <View className="flex-1 bg-black/50 justify-end">
          <View
            className="bg-white rounded-t-2xl max-h-[80%]"
            style={{ backgroundColor: theme.colors.surface }}
          >
            <View className="flex-row justify-between items-center px-4 py-2 border-b border-grey-200">
              <Text variant="titleLarge" className="font-semibold">
                选择国家/地区
              </Text>
              <IconButton
                icon="close"
                onPress={() => setShowCountryPicker(false)}
                iconColor={theme.colors.onSurface}
              />
            </View>
            <FlatList
              data={countries}
              keyExtractor={(item) => item.code}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className="flex-row justify-between items-center px-4 py-4 border-b border-grey-100"
                  style={
                    selectedCountry.code === item.code
                      ? { backgroundColor: theme.colors.primaryContainer }
                      : undefined
                  }
                  onPress={() => handleCountrySelect(item)}
                >
                  <Text className="text-base text-grey-900">
                    {item.displayName}
                  </Text>
                  <Text className="text-base text-grey-500">
                    {item.countryCode}
                  </Text>
                </TouchableOpacity>
              )}
              ListEmptyComponent={
                <View className="p-8 items-center">
                  <Text>{loading ? '加载中...' : '暂无数据'}</Text>
                </View>
              }
            />
          </View>
        </View>
      </Modal>
    </>
  );
}
