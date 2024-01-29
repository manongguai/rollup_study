function main() {
    // 异步导入会自动分包
    import('./logger-BNXz8tST.js').then(({log, warn, error})=>{
      log('log');
      log('warn');
      log('error');
    });
}
main();
