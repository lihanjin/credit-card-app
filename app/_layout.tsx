import { Stack } from 'expo-router';
import '../assets/css/global.css';
import '../i18n/config'; // 初始化 i18n
import { QueryProvider } from '@/providers/query-provider';
import { PaperProviderWrapper } from '@/providers/paper-provider';

export default function RootLayout() {
  return (
    <PaperProviderWrapper>
      <QueryProvider>
        <Stack />
      </QueryProvider>
    </PaperProviderWrapper>
  );
}
