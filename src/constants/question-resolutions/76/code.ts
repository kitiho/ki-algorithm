/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function(s, t) {
  // 维护一个map，用来记录t中的字符还需要的个数
  const charNeedCountMap = {}
  for (let i = 0; i < t.length; i++) {
    const c = t[i]
    charNeedCountMap[c] = (charNeedCountMap[c] || 0) + 1
  }
  // 维护一个needType，用来判断是否都不需要了
  let needType = Object.keys(charNeedCountMap).length
  // 双指针
  let i = 0; let j = 0
  let res = ''
  while (j < s.length) {
    // 拿到右滑当前这个字符
    const rc = s[j]
    // 如果这个字符在t中，则其需要的count就减去1，这里用是否在map中是undefined来判断
    if (charNeedCountMap[rc] !== undefined) {
      charNeedCountMap[rc] -= 1
      // 如果这个type的count为0，则needType减1
      if (charNeedCountMap[rc] === 0)
        needType -= 1
    }
    // 上面的操作完成后，如果needType为0，则说明找到了一个符合条件的窗口
    while (needType === 0) {
      // 准备左指针右滑，缩小窗口
      const lc = s[i]
      if (!res || res.length > j - i + 1)
        res = s.slice(i, j + 1)
      // 判断这个字符是否在t中，如果在，则需要的count加1
      if (charNeedCountMap[lc] !== undefined) {
        charNeedCountMap[lc] += 1
        // 如果这个字符的count是从0到1，说明type需要加1
        if (charNeedCountMap[lc] === 1)
          needType += 1
      }
      i += 1
    }
    j += 1
  }
  return res
}
