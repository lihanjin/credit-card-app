# React Native Paper UI 库集成

已成功集成 `react-native-paper` UI 组件库，提供 Material Design 3 风格的组件。

## 安装的依赖

- `react-native-paper@5.14.5` - Paper UI 组件库
- `react-native-vector-icons` - 图标库（Paper 依赖）

## 配置说明

### 1. Provider 配置

在 `app/_layout.tsx` 中已添加 `PaperProviderWrapper`，包裹整个应用：

```tsx
<PaperProviderWrapper>
  <QueryProvider>
    <Stack />
  </QueryProvider>
</PaperProviderWrapper>
```

### 2. 主题配置

主题配置位于 `constants/paper-theme.ts`，基于现有的主题配置转换为 Paper 的 MD3 主题格式。

- **浅色主题** (`lightTheme`): 默认主题
- **深色主题** (`darkTheme`): 深色模式支持

主题已集成：
- 主色调、次要色调、错误色等
- 自定义字体配置
- 成功、警告、信息色扩展

### 3. 使用示例

查看 `components/examples/paper-example.tsx` 了解常用组件的使用方法。

## 常用组件

### 按钮

```tsx
import { Button } from 'react-native-paper';

<Button mode="contained" onPress={() => {}}>
  主要按钮
</Button>
<Button mode="outlined" onPress={() => {}}>
  轮廓按钮
</Button>
<Button mode="text" onPress={() => {}}>
  文本按钮
</Button>
```

### 输入框

```tsx
import { TextInput } from 'react-native-paper';

<TextInput
  label="用户名"
  value={text}
  onChangeText={setText}
  mode="outlined"
  left={<TextInput.Icon icon="account" />}
/>
```

### 卡片

```tsx
import { Card, Text } from 'react-native-paper';

<Card>
  <Card.Content>
    <Text variant="headlineSmall">标题</Text>
    <Text variant="bodyMedium">内容</Text>
  </Card.Content>
</Card>
```

### 使用主题

```tsx
import { useTheme } from 'react-native-paper';

function MyComponent() {
  const theme = useTheme();
  
  return (
    <View style={{ backgroundColor: theme.colors.primary }}>
      <Text style={{ color: theme.colors.onPrimary }}>
        使用主题颜色
      </Text>
    </View>
  );
}
```

## 与 NativeWind 的兼容性

Paper 组件可以与 NativeWind/Tailwind CSS 一起使用：

```tsx
import { Button } from 'react-native-paper';
import { View } from 'react-native';

<View className="p-4">
  <Button mode="contained">Paper 按钮</Button>
</View>
```

## 图标使用

Paper 使用 `react-native-vector-icons`，支持 Material Community Icons：

```tsx
import { IconButton } from 'react-native-paper';

<IconButton icon="heart" iconColor="red" onPress={() => {}} />
```

## 更多信息

- [React Native Paper 文档](https://callstack.github.io/react-native-paper/)
- [Material Design 3 指南](https://m3.material.io/)





