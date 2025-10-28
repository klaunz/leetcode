/**
 * https://leetcode.com/problems/debounce/
*/

type F = (...args: number[]) => void

function debounce(fn: F, t: number): F {
    let timeoutId: NodeJS.Timeout | undefined, lastArgs: any[]

    function debounceFn(...args: any[]) {
        lastArgs = args
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
        timeoutId = undefined
        fn(...args)
        }, t)
    }

    debounceFn.cancel = () => {
        clearTimeout(timeoutId)
        timeoutId = undefined
    }

    debounceFn.flush = () => {
        clearTimeout(timeoutId)
        if (lastArgs) fn(...lastArgs)
    }
    return debounceFn
};
