/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
const search = function(nums, target) {
  // 定义两个指针区间
  let l = 0; let r = nums.length - 1
  while (l <= r) {
    // 拿中点
    const m = Math.floor((l + r) / 2)
    // 如果中点就是target返回true
    if (nums[m] === target) {
      return true
    }
    // 如果mid值和左右两边相同，分不清左右区间哪个是递增的，那么左右两边都缩小
    else if (nums[m] === nums[l] && nums[m] === nums[r]) {
      l += 1
      r -= 1
    }
    // 如果中间值小于最左边的值，说明右边为递增区间
    else if (nums[m] < nums[l]) {
      // 如果target大于mid值，且小于等于最右边的值，说明target就在右边区间，l右移到m+1
      if (target > nums[m] && target <= nums[r])
        l = m + 1

      else
        r = m - 1
    }
    else {
      // 同上 反
      if (target >= nums[l] && target < nums[m])
        r = m - 1

      else
        l = m + 1
    }
  }
  return false
}
