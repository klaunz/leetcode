/**
 * @template T
 * @param {...(T | Array<T>)} items
 * @return {Array<T>}
 */
Array.prototype.myConcat = function (...items) {
  if (!Array.isArray(items)) return this
  const newArr = [...this]
  for (const item of items) {
    if (Array.isArray(item)) {
      newArr.push(...item)
    } else {
      newArr.push(item)
    }
  }
  return newArr
};
