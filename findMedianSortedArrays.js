/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const newArray = nums1.concat(nums2).sort((a,b) => a - b)
  let median = newArray.length / 2
  if (!newArray.length) return 0
  if (newArray.length % 2 === 0) {
    const prev = newArray[median - 1]
    const index = newArray[median]
    return Number((prev + index) / 2)
  } else median = Math.floor(median)
  return newArray[median]
};
