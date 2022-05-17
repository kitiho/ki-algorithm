function partitionLabels(s: string): number[] {
  const charMaxMap: Record<string, number> = {}
  let currentIntervalFartestIndex = 0
  const res = []
  let start = 0
  for (let i = 0; i < s.length; i++)
    charMaxMap[s.split('')[i]] = i
  for (let i = 0; i < s.length; i++) {
    const charMax = charMaxMap[s.split('')[i]]
    currentIntervalFartestIndex = Math.max(charMax, currentIntervalFartestIndex)
    if (currentIntervalFartestIndex === i) {
      res.push(i - start + 1)
      start = i + 1
    }
  }
  return res
}
