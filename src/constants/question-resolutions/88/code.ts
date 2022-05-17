/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let pos = m-- + n-- - 1
  while (m >= 0 && n >= 0)
    nums1[pos--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--]

  while (n >= 0)
    nums1[pos--] = nums2[n--]
}
