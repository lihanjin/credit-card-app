# API 服务层

基于原项目 `1thingex-web/src/services/shop` 适配到 React Native/Expo 环境。

## 目录结构

```
services/
├── base/              # 基础服务（域名、店铺、字典等）
│   ├── index.ts      # API 方法
│   └── types.ts      # 类型定义
├── order/             # 订单相关服务
│   ├── index.ts
│   └── types.ts
├── rate/              # 汇率相关服务
│   ├── index.ts
│   └── types.ts
├── user/              # 用户相关服务
│   ├── index.ts
│   └── types.ts
├── request/           # 请求封装
│   ├── index.ts       # Axios 封装
│   └── requestEncrypt.ts  # 加密工具
├── common.types.ts    # 通用类型
└── index.ts           # 统一导出
```

## 环境变量配置

在 `.env` 或 `app.json` 中配置：

```env
EXPO_PUBLIC_API_URL=https://api.example.com
EXPO_PUBLIC_COMPANY_ID=your_company_id
EXPO_PUBLIC_PK=your_rsa_public_key
EXPO_PUBLIC_ENCRYPT=true
```

## 使用方法

### 基础使用

```tsx
import { getDomain, queryStoreDetail } from '@/services/base';
import { shopLogin } from '@/services/user';
import { getRateList } from '@/services/rate';

// 获取域名信息
const domainInfo = await getDomain();

// 查询店铺详情
const storeDetail = await queryStoreDetail();

// 登录
const token = await shopLogin({
  username: 'user',
  password: 'pass',
  type: 'shop',
  lang: 'zh',
  companyId: 1,
});
```

### 与 Zustand 集成

```tsx
import { shopLogin } from '@/services/user';
import { useAuthStore } from '@/store/use-auth-store';

async function handleLogin(username: string, password: string) {
  try {
    const token = await shopLogin({
      username,
      password,
      type: 'shop',
      lang: 'zh',
      companyId: 1,
    });

    // 保存到 Zustand store
    useAuthStore
      .getState()
      .login({ id: '1', name: username, email: '' }, token);
  } catch (error) {
    console.error('登录失败:', error);
  }
}
```

### 与 React Query 集成

```tsx
import { useQuery } from '@tanstack/react-query';
import { queryStoreDetail } from '@/services/base';

function useStoreDetail() {
  return useQuery({
    queryKey: ['storeDetail'],
    queryFn: queryStoreDetail,
  });
}
```

## 特性

- ✅ 请求/响应拦截器
- ✅ 自动 token 管理（从 Zustand store 获取）
- ✅ 自动语言设置（从 expo-localization 获取）
- ✅ 参数加密（MD5 签名 + RSA 加密）
- ✅ 统一错误处理
- ✅ TypeScript 类型支持
- ✅ 适配 React Native/Expo 环境

## 注意事项

1. **RSA 加密**：当前使用 base64 编码作为简化实现，生产环境建议使用 `react-native-rsa-native`
2. **错误处理**：登录过期会自动调用 `logout()`，需要配合导航库处理页面跳转
3. **环境变量**：所有配置通过 `EXPO_PUBLIC_` 前缀的环境变量设置
