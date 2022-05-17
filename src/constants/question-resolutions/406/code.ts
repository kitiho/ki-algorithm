function reconstructQueue(people: number[][]): number[][] {
  people = people.sort((a, b) => {
    if (a[0] !== b[0])
      return b[0] - a[0]
    return a[1] - b[1]
  })
  const res = [people[0]]
  for (let i = 1; i < people.length; i++)
    res.splice(people[i][1], 0, people[i])
  return res
}
