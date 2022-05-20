/**
 * @param {number} c
 * @return {boolean}
 */
const judgeSquareSum = function(c) {
  // 定义双指针，指向范围内最左和最右
  let i = 0; let j = Math.ceil(Math.sqrt(c))
  const sum = (i, j) => i * i + j * j
  while (i <= j) {
    // 循环判断平方和的大小，移动指针
    if (sum(i, j) > c)
      j--
    else if (sum(i, j) < c)
      i++
    else if (sum(i, j) === c)
      return true
  }
  return false
}
