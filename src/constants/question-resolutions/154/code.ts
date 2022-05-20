/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function(nums) {
  let l = 0; let r = nums.length - 1

  // 左右两边相等的时候，去掉右边的
  while (l < r && nums[0] === nums[r])
    r -= 1

  // 按照二分模板进行
  l = -1
  r = r + 1
  while (l + 1 !== r) {
    const m = Math.floor((l + r) / 2)
    // 左右两个区间，blue区间满足大于等于nums[0]
    if (nums[m] >= nums[0])
      l = m

    else
      r = m
  }
  return nums[r] === undefined ? nums[0] : nums[r]
}
