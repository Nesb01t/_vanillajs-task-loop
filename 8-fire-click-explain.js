/**
 * click 的代码完全一样
 * 只是执行的方式不同, 为什么会产生这样的效果呢
 *
 * task -> microtask -> js stack
 * 此时 js stack 不为空, 不能去执行 microtask
 * 因此放入 waitList 后继续执行第二个 click() 的代码
 *
 * 等 2 个 click() 的函数生命周期消亡
 * 开始处理 microtasks, 此时才开始执行 promise 和 mutation
 *
 * 当然, task 仍然是最后的
 */

const outer = document.querySelector('.outer');
const click = () => {
    /**
     * 在点击发生的时候
     *   click 作为 task 被执行
     *   setTimeout 在 click 函数中被放入了 task waitList
     *
     *   promise 作为 microtasks 被执行
     *   与此同时 mutation observe 也作为 microtasks 被执行
     */
    console.log('clicked')

    setTimeout(() => {
        console.log('timeout')
    }, 0)

    Promise.resolve().then(() => {
        console.log('promise')
    })

    outer.setAttribute('data-random', Math.random().toString())
}