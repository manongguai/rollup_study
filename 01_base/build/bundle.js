var rollup_test = (function () {
  'use strict';

  // src/foo.js
  var foo = 'hello world!';

  var version = "1.0.0";

  // src/main.js
  // import foo from './foo.js';
  // export default function () {
  //   console.log(foo);
  // }

  function main () {
    console.log('version ' + version);
    console.log(foo);
  }

  return main;

})();
