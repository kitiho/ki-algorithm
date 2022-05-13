function candy(ratings: number[]): number {
  const res = Array.from({ length: ratings.length }, () => 1)
  const res2 = res.map((v, i) => {
    if (i === ratings.length - 1)
      return v

    if (ratings[i] <= ratings[i + 1]) {
      v++
    }
    return v
  })
  const res3 = res2.map((v, i) => {
    if (i === ratings.length - 1)
      return v

    if (ratings[i + 1] <= ratings[i + 1]) {
      v++
    }
    return v
  })

  return res3.length
}
