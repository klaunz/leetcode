/**
 * @param {number} value The number to clamp.
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
export default function clamp(value, lower, upper) {
  if (isNaN(value)) return undefined
  const numValue = Number(value)
  if (numValue >= lower && numValue <= upper) return numValue
  else if (numValue < lower) return lower
  else return upper
}
