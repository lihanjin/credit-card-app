module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
    ],
    plugins: [
      // react-native-reanimated 插件必须在所有插件之后
      require.resolve('react-native-reanimated/plugin'),
    ],
    env: {
      production: {
        plugins: [
          // React Native Paper 打包大小优化插件
          // 自动重写 import 语句，只导入使用的模块
          'react-native-paper/babel',
        ],
      },
    },
  };
};
