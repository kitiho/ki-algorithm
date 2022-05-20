/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function(nums, target) {
  const res = [-1, -1]
  const index1 = binarySearch1(nums, target)
  const index2 = binarySearch2(nums, target)
  if (index1 <= index2 && index2 < nums.length && nums[index1] === target && nums[index2] === target)
    return [index1, index2]

  return res
}
function binarySearch1(nums, target) {
  let i = -1; let j = nums.length
  while (i + 1 !== j) {
    const mid = i + Math.floor((j - i) / 2)
    if (nums[mid] >= target)
      j = mid

    else
      i = mid
  }
  return j
}
function binarySearch2(nums, target) {
  let i = -1; let j = nums.length
  while (i + 1 !== j) {
    const mid = i + Math.floor((j - i) / 2)
    if (nums[mid] > target)
      j = mid

    else
      i = mid
  }
  return i
}
