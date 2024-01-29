import json from "@rollup/plugin-json";

export default {
  input: "src/main.js",
  // external:[] ,  // 保持外链  当format类型为iife或者umd格式的时候需要配置output.globals选项参数以提供全局变量名来替换外部导入
  output: { 
    // globals: {
    //   _: "loadsh-es",
    // },
    file: "build/bundle.js",
    format: "iife",
    name: "rollup_test", // iife需要配置name
  },
  plugins: [json()],
};
