import { log, warn, error } from "./logger.js";
function main() {
  // 异步导入会自动分包
  log("log");
  log("warn");
  log("error");
}
main();
