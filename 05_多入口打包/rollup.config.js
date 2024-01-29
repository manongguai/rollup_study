import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
export default {
  // 多入口打包会自动公用文件，自动进行代码拆分
  input: ["src/main.js", "src/fetch.js"],
  output: [
    {
      // file: 'build/bundle.js',
      dir: "build",
      format: "esm", // umd,iife是不支持代码拆分，可以用amd,cjs,esm等
      name: "rollup_test", // iife需要配置name
    },
  ],
  plugins: [json(), nodeResolve(), commonjs()],
};
