function twoSum(numbers: number[], target: number): number[] {
  let i = 0
  let j = numbers.length - 1
  const sum = (i, j) => numbers[i] + numbers[j]
  while (sum(i, j) !== target) {
    if (sum(i, j) < target) {
      i++
    }
    else {
      j--
    }
  }
  return [i + 1, j + 1]
}
