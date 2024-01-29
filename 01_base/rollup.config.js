// rollup.config.js
import json from '@rollup/plugin-json';
export default {
    input: 'src/main.js',
    output: {
      file: 'build/bundle.js',
      format: 'iife',
	  name:'rollup_test' // iife需要配置name
    },
    plugins: [json()]
  };


/* 

// rollup.config.js

// can be an array (for multiple inputs)
export default {
	// core input options
	external,  // 保持外链  当format类型为iife或者umd格式的时候需要配置output.globals选项参数以提供全局变量名来替换外部导入
	input, // conditionally required
	plugins,

	// advanced input options
	cache,
	logLevel,
	makeAbsoluteExternalsRelative,
	maxParallelFileOps,
	onLog,
	onwarn,
	preserveEntrySignatures,
	strictDeprecations,

	// danger zone
	context,
	moduleContext,
	preserveSymlinks,
	shimMissingExports,
	treeshake,

	// experimental
	experimentalCacheExpiry,
	experimentalLogSideEffects,
	experimentalMinChunkSize,
	perf,

	// required (can be an array, for multiple outputs)
	output: {
		// core output options
		dir,
		file,
		format,
		globals,
		name,
		plugins,

		// advanced output options
		assetFileNames,
		banner,
		chunkFileNames,
		compact,
		dynamicImportInCjs,
		entryFileNames,
		extend,
		externalImportAttributes,
		footer,
		generatedCode,
		hoistTransitiveImports,
		inlineDynamicImports,
		interop,
		intro,
		manualChunks,
		minifyInternalExports,
		outro,
		paths,
		preserveModules,
		preserveModulesRoot,
		sourcemap,
		sourcemapBaseUrl,
		sourcemapExcludeSources,
		sourcemapFile,
		sourcemapFileNames,
		sourcemapIgnoreList,
		sourcemapPathTransform,
		validate,

		// danger zone
		amd,
		esModule,
		exports,
		externalLiveBindings,
		freeze,
		indent,
		noConflict,
		sanitizeFileName,
		strict,
		systemNullSetters,

		// experimental
		experimentalMinChunkSize
	},

	watch: {
		buildDelay,
		chokidar,
		clearScreen,
		exclude,
		include,
		skipWrite
	}
};

*/