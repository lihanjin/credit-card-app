import { PaperProviderWrapper } from '@/providers/paper-provider';
import { QueryProvider } from '@/providers/query-provider';
import { Stack } from 'expo-router';
import '../assets/css/global.css';
import '../i18n/config'; // 初始化 i18n

export default function RootLayout() {
  return (
    <PaperProviderWrapper>
      <QueryProvider>
        <Stack />
      </QueryProvider>
    </PaperProviderWrapper>
  );
}
