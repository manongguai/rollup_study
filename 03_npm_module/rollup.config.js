import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
export default {
    input: 'src/main.js',
    output: {
      file: 'build/bundle.js',
      format: 'iife',
	  name:'rollup_test' // iife需要配置name
    },
    plugins: [json(),nodeResolve(),commonjs()]
  };


  