module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      // react-native-reanimated 插件必须在所有插件之后
      require.resolve("react-native-reanimated/plugin"),
    ],
  };
};