function candy(ratings: number[]): number {
  const raw = Array.from({ length: ratings.length }, () => 1)
  for (let i = 0; i < raw.length - 1; i++) {
    if (ratings[i] < ratings[i + 1])
      raw[i + 1] = raw[i] + 1
  }
  for (let i = raw.length - 1; i > 0; i--) {
    if (ratings[i - 1] > ratings[i])
      raw[i - 1] = Math.max(raw[i - 1], raw[i] + 1)
  }
  return raw.reduce((a, b) => a + b, 0)
}
