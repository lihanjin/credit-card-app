import { Stack } from 'expo-router';
import '../assets/css/global.css';
import '../i18n/config'; // 初始化 i18n
import { QueryProvider } from '@/providers/query-provider';

export default function RootLayout() {
  return (
    <QueryProvider>
      <Stack />
    </QueryProvider>
  );
}
