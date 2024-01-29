(function (_) {
  'use strict';

  var name = "02_plugin";
  var version = "1.0.0";

  // 在没有使用@rollup/plugin-node-resolve时，无法加载lodash
  function main() {
    console.log(name + ":" + version);

    console.log(_.camelCase('hello world'));
  }
  main();

})(_);
