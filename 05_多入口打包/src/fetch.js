import { log, warn, error } from "./logger.js";

function fetch() {
    console.log('fetch');
    // 异步导入会自动分包
    log('log')
    log('warn')
    log('error')
}
fetch();
