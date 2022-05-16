function eraseOverlapIntervals(intervals: number[][]): number {
  intervals = intervals.sort((a, b) => a[a.length - 1] - b[b.length - 1])
  let res = 0
  let index = 0
  intervals.forEach((v, i) => {
    if (i === 0)
      return
    const currentStart = v[0]
    const prevEnd = intervals[index][1]
    if (prevEnd > currentStart)
      res += 1
    else
      index = i
  })
  return res
}
