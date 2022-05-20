/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
  if (x === 0)
    return 0
  if (x === 1)
    return 1
  let i = 1; let j = x; let res = 0
  while (i <= j) {
    const mid = i + ((j - i) >> 1)
    if (mid === x / mid) {
      return mid
    }
    else if (mid > x / mid) {
      j = mid - 1
    }
    else if (mid < x / mid) {
      // 此时的mid有可能会是答案，所以先存着
      res = mid
      i = mid + 1
    }
  }
  return res
}
