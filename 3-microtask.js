/**
 * 微任务 microtask 被指认为当前执行的脚本之后立刻执行的任务
 * 例如对某个操作作出反应, 或是使某些事情异步
 *
 * 只要没有其他 js 在运行, microtask 队列就会在回调之后以及每个任务结束时处理
 * 排队期间其他 microtask 都会添加到队列末尾并进行处理
 * 例如 mutation observer 和 promise callbacks
 */

const log = console.log

log('start')

// 一旦 promise resolve 了就会加入一个 microtask 进入队列
// 并等待其反作用回调, 这保证了即使 promise 已经 resolve, 回调仍然是异步的
Promise.resolve().then(function () {
    console.log('promise 1')
})
log('end')