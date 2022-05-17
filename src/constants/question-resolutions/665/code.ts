function checkPossibility(nums: number[]): boolean {
  let flag = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      if (i === 1) {
        nums[0] = nums[i]
        flag += 1
      }
      else {
        if (nums[i] < nums[i - 2])
          nums[i] = nums[i - 1]
        else
          nums[i - 1] = nums[i - 2]
        flag += 1
      }
    }
  }
  return flag <= 1
}
