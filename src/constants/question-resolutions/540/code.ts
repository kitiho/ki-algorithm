/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = function(nums) {
  if (nums.length === 1)
    return nums[0]
  let l = -1; let r = nums.length
  while (l + 1 !== r) {
    const m = (l + r) >> 1
    if (m % 2 !== 0) {
      if (nums[m] === nums[m - 1])
        l = m

      else
        r = m
    }
    else {
      if (nums[m] === nums[m + 1])
        l = m

      else
        r = m
    }
  }
  return nums[r]
}
