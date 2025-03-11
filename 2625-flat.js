/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  const newArr = []
  let depth = 0
  const flattenArray = (arr, d) => {
    for (const val of arr) {
      if (Array.isArray(val)) {
        depth++
        if (depth <= n) flattenArray(val, depth)
        else {
          depth--
          newArr.push(val)
        }
      } else  {
        newArr.push(val)
      }
    }
    depth--
    
  }
  flattenArray(arr)
  return newArr
};
