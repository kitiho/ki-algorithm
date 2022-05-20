// 判断是否是回文字符串
const isPalindrome = (s, i, j) => {
  while (i < j) {
    if (s[i] !== s[j])
      return false
    i++
    j--
  }
  return true
}

/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = function(s) {
  // 定义双指针
  let i = 0; let j = s.length - 1
  while (i < j) {
    // 当第一次出现不同时，就去判断子串是否是回文
    if (s[i] !== s[j]) {
      // 这里有两种情况，是去掉左边的还是右边的，所以都去判断一下
      if (isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1))
        return true
      else
        return false
    }
    i++
    j--
  }
  return true
}
