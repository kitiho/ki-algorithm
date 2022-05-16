function findMinArrowShots(points: number[][]): number {
  points = points.sort((a, b) => a[1] - b[1])
  let res = 1
  let pointer = 0
  points.forEach((v, i) => {
    if (v[0] > points[pointer][1]) {
      pointer = i
      res++
    }
  })
  return res
}
