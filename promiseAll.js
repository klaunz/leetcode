/**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
export default function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    let unresolved = iterable.length
    const result = [...iterable]

    if (!iterable.length) return resolve([])

    iterable.forEach(async (p, idx) => {
      try {
        const val = await p
        result[idx] = val
        unresolved--
        if (unresolved === 0) resolve(result)
      } catch(e) {
        reject(e)
      }

    })
  })
}
