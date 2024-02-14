const log = console.log

/**
 * 尝试运行下面的代码
 * 这符合你对输出内容的预期吗?
 * 如果不, 你可以解释为什么吗?
 *
 * 要理解这些, 你需要了解 eventLoop 如何工作
 * 如何处理 task 和 microtask
 */
log('start')

setTimeout(function () {
    log('setTimeout')
}, 0)

Promise.resolve().then(function () {
    log('promise 1')
}).then(function () {
    log('promise 2')
})

log('end')