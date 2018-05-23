function analyse(toAnalyse) {
  const lowercase = toAnalyse.toLowerCase().trim()
  const contains = analyseWords(lowercase)
  const whole = isPalindrome(lowercase)
  const noPalindromes = !contains && !whole
  return {
    text: toAnalyse,
    containsPalindromesWords: contains,
    wholeTextPalindromes: whole,
    noPalindromes,
  }
}

function analyseWords(toAnalyse) {
  const allWords = toAnalyse.split(' ')
  for (word of allWords) {
    if (isPalindrome(word)) {
      return true
    }
  }
  return false
}

function isPalindrome(word) {
  return word === reverse(word)
}

function reverse(word) {
  return word
    .split('')
    .reverse()
    .join('')
}

module.exports = {
  analyse,
}
