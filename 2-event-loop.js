/**
 * 每个 Thread 都有自己的事件循环, 因此每个 Web Worker 都有自己的事件循环
 * 同一源上的所有窗口共享一个 event loop, event loop 持续运行, 执行排队的任何任务
 *
 * 但浏览器可以在循环的每一轮选择从哪个源获取任务
 * 这允许浏览器优先处理例如 input 等性能敏感的任务
 */

// 在 task 之间, 浏览器可能会呈现更新, 因为 @click 到事件回调需要调度一个 task
// 解析 html 也是如此
// 这就是为什么 setTimeout 在 end 之后执行, setTimeout 只是 schedule 一个 task
console.log('start')
setTimeout(function () {
    console.log('timeout')
}, 0)
console.log('end')