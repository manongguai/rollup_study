import { name, version } from "../package.json";
import _ from 'lodash'

function main() {
  console.log(name + ":" + version);

  console.log(_.camelCase('hello world'));
}
main();
