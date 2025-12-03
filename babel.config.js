module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      // react-native-reanimated 插件必须在所有插件之后
      // 注意：expo-router 已经包含在 babel-preset-expo 中，不需要单独添加
      require.resolve("react-native-reanimated/plugin"),
    ],
  };
};