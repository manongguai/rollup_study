import { name, version } from "../package.json";
import _ from 'lodash-es'
// 在没有使用@rollup/plugin-node-resolve时，无法加载lodash
function main() {
  console.log(name + ":" + version);

  console.log(_.camelCase('hello world'));
}
main();
