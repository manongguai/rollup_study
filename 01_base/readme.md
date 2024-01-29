Rollup 是一个用于 JavaScript 的模块打包器，它将小段代码编译成更大、更复杂的代码，比如库或应用程序。它使用 JavaScript ES6 修订版中包含的新的标准化代码模块格式，而不是以前的特殊解决方案，如 CommonJS 和 AMD。ES 模块让您可以自由、无缝地组合您喜爱的库中最有用的单个函数。这最终将在任何地方都可以本地实现，但 Rollup 现在就允许您这样做


* 自动提取公用文件，自动tree shaking


rollup 并不是像webpack一样的整套打包解决方案，而只是一个esmodule 的打包器 ，像vite就使用了rollup作为生产环境的打包器

Installation 安装

```shell
npm install --global rollup

```
This will make Rollup available as a global command line tool. You can also install it locally, see Installing Rollup locally.
这将使 Rollup 成为一个全局命令行工具。也可以在本地安装，请参阅在本地安装 Rollup。



这些命令假设应用程序的入口点名为 main.js ，并且您希望将所有导入编译为一个名为 bundle.js 的文件。

For browsers: 浏览器:  iife 自调用函数

```shell 
# compile to a <script> containing a self-executing function ('iife')
# 如果你想使用 require 和 module.exports 编写 CommonJS 模块的配置文件，你应该将文件扩展名更改为 .cjs。
rollup main.js --file bundle.js --format iife

```
For Node.js: node . js: commonjs

For :node
```shell 
# compile to a CommonJS module ('cjs')
rollup main.js --file bundle.js --format cjs

```

For both browsers and Node.js:
对于浏览器和Node.js: umd

```shell 
# UMD format requires a bundle name
rollup main.js --file bundle.js --format umd --name "myBundle"

```


amd – 异步模块加载，适用于 RequireJS 等模块加载器 浏览器中的js模块化解决方案

es – 将 bundle 保留为 ES 模块文件，适用于其他打包工具，以及支持 <script type=module> 标签的浏览器。（别名：esm，module）

system – SystemJS 模块加载器的原生格式（别名：systemjs）


* 优点：
    1. 输出结果更扁平
    2. 自动移除不需要的代码
    3. 打包结果具有高可读性

* 缺点：

    1. 加载非esm模块比较复杂
    2. 模块最终都被打包到一个函数中，无法HMR
    3. 浏览器环境中，代码拆分依赖于amd库，只能用requrie第三方包加载

选型：   rollup： 适合开发类库和框架
        webpack： 适合大型应用