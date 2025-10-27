type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    const hashMap = new Map()
    return function(...args): number {
        if (typeof fn !== 'function' || !args.length) return undefined
        const key = args.toString()
        if (!hashMap.has(key)) {
            const result = fn.call(this, ...args)
            hashMap.set(key, result)
        }
        return hashMap.get(key)
    }
}
