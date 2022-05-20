/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
const findLongestWord = function(s, dictionary) {
  dictionary = dictionary.sort((a, b) => {
    if (a.length === b.length)
      return a.localeCompare(b)
    return b.length - a.length
  })
  for (const string of dictionary) {
    let i = 0; let j = 0
    while (i <= s.length) {
      if (j === string.length)
        return string
      if (s[i] === string[j]) {
        i++
        j++
      }
      else {
        i++
      }
    }
  }
  return ''
}
