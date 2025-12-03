/**
 * React Native Paper 组件示例
 * 展示常用的 Paper UI 组件使用方法
 */

import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import {
  Button,
  Card,
  Text,
  TextInput,
  Switch,
  Chip,
  FAB,
  IconButton,
  SegmentedButtons,
  ProgressBar,
  Snackbar,
  Divider,
  List,
  Avatar,
  Badge,
} from 'react-native-paper';
import { useTheme } from 'react-native-paper';

export function PaperExample() {
  const theme = useTheme();
  const [text, setText] = useState('');
  const [switchValue, setSwitchValue] = useState(false);
  const [selectedChip, setSelectedChip] = useState<string | null>(null);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [segmentedValue, setSegmentedValue] = useState('');

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.content}
    >
      {/* 文本组件 */}
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="headlineSmall" style={{ marginBottom: 8 }}>
            文本组件
          </Text>
          <Text variant="bodyLarge">大号文本 (bodyLarge)</Text>
          <Text variant="bodyMedium">中号文本 (bodyMedium)</Text>
          <Text variant="bodySmall">小号文本 (bodySmall)</Text>
          <Text variant="titleLarge" style={{ marginTop: 8 }}>
            标题文本 (titleLarge)
          </Text>
        </Card.Content>
      </Card>

      {/* 按钮组件 */}
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="headlineSmall" style={{ marginBottom: 16 }}>
            按钮组件
          </Text>
          <View style={styles.buttonRow}>
            <Button mode="contained" onPress={() => {}}>
              主要按钮
            </Button>
            <Button mode="outlined" onPress={() => {}}>
              轮廓按钮
            </Button>
          </View>
          <View style={styles.buttonRow}>
            <Button mode="text" onPress={() => {}}>
              文本按钮
            </Button>
            <Button
              mode="contained"
              icon="camera"
              onPress={() => {}}
              disabled
            >
              禁用按钮
            </Button>
          </View>
          <View style={styles.buttonRow}>
            <Button
              mode="contained-tonal"
              onPress={() => setSnackbarVisible(true)}
            >
              显示提示
            </Button>
          </View>
        </Card.Content>
      </Card>

      {/* 输入框组件 */}
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="headlineSmall" style={{ marginBottom: 16 }}>
            输入框组件
          </Text>
          <TextInput
            label="用户名"
            value={text}
            onChangeText={setText}
            mode="outlined"
            style={styles.input}
            left={<TextInput.Icon icon="account" />}
          />
          <TextInput
            label="密码"
            value={text}
            onChangeText={setText}
            mode="outlined"
            secureTextEntry
            style={styles.input}
            left={<TextInput.Icon icon="lock" />}
            right={<TextInput.Icon icon="eye" />}
          />
          <TextInput
            label="多行文本"
            value={text}
            onChangeText={setText}
            mode="outlined"
            multiline
            numberOfLines={4}
            style={styles.input}
          />
        </Card.Content>
      </Card>

      {/* Switch 和 Chip */}
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="headlineSmall" style={{ marginBottom: 16 }}>
            开关和标签
          </Text>
          <View style={styles.switchRow}>
            <Text>启用通知</Text>
            <Switch
              value={switchValue}
              onValueChange={setSwitchValue}
            />
          </View>
          <View style={styles.chipContainer}>
            <Chip
              selected={selectedChip === 'chip1'}
              onPress={() => setSelectedChip('chip1')}
              style={styles.chip}
            >
              标签 1
            </Chip>
            <Chip
              selected={selectedChip === 'chip2'}
              onPress={() => setSelectedChip('chip2')}
              style={styles.chip}
            >
              标签 2
            </Chip>
            <Chip
              selected={selectedChip === 'chip3'}
              onPress={() => setSelectedChip('chip3')}
              style={styles.chip}
            >
              标签 3
            </Chip>
          </View>
        </Card.Content>
      </Card>

      {/* 分段按钮 */}
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="headlineSmall" style={{ marginBottom: 16 }}>
            分段按钮
          </Text>
          <SegmentedButtons
            value={segmentedValue}
            onValueChange={setSegmentedValue}
            buttons={[
              { value: 'walk', label: '步行', icon: 'walk' },
              { value: 'train', label: '火车', icon: 'train' },
              { value: 'car', label: '汽车', icon: 'car' },
            ]}
          />
        </Card.Content>
      </Card>

      {/* 进度条 */}
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="headlineSmall" style={{ marginBottom: 16 }}>
            进度条
          </Text>
          <ProgressBar progress={0.3} color={theme.colors.primary} />
          <Text variant="bodySmall" style={{ marginTop: 8 }}>
            30% 完成
          </Text>
        </Card.Content>
      </Card>

      {/* 列表 */}
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="headlineSmall" style={{ marginBottom: 16 }}>
            列表组件
          </Text>
          <List.Item
            title="列表项 1"
            description="这是列表项的描述"
            left={(props) => <List.Icon {...props} icon="folder" />}
            right={(props) => <IconButton {...props} icon="chevron-right" />}
          />
          <Divider />
          <List.Item
            title="列表项 2"
            description="带头像的列表项"
            left={(props) => (
              <Avatar.Text {...props} size={40} label="AB" />
            )}
            right={(props) => <Badge {...props}>3</Badge>}
          />
        </Card.Content>
      </Card>

      {/* 图标按钮 */}
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="headlineSmall" style={{ marginBottom: 16 }}>
            图标按钮
          </Text>
          <View style={styles.iconButtonRow}>
            <IconButton
              icon="heart"
              iconColor={theme.colors.error}
              size={24}
              onPress={() => {}}
            />
            <IconButton
              icon="star"
              iconColor={theme.colors.warning}
              size={24}
              onPress={() => {}}
            />
            <IconButton
              icon="share"
              iconColor={theme.colors.primary}
              size={24}
              onPress={() => {}}
            />
            <IconButton
              icon="delete"
              iconColor={theme.colors.error}
              size={24}
              onPress={() => {}}
            />
          </View>
        </Card.Content>
      </Card>

      {/* 浮动操作按钮 */}
      <FAB
        icon="plus"
        style={[styles.fab, { backgroundColor: theme.colors.primary }]}
        onPress={() => {}}
      />

      {/* 提示消息 */}
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
        action={{
          label: '确定',
          onPress: () => setSnackbarVisible(false),
        }}
      >
        这是一条提示消息
      </Snackbar>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 100,
  },
  card: {
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
    flexWrap: 'wrap',
  },
  input: {
    marginBottom: 12,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    marginRight: 4,
  },
  iconButtonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});


