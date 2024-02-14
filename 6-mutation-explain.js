/**
 * 首先让我们了解一些既定事实
 *
 * click 和 setTimeout => task
 * promise 和 mutation observe => microtask
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