// Write a function that takes two strings as arguments
// and returns a string containing only the characters found
// in both strings

const string1 = 'Matthew Gillis'
const string2 = 'Lilly Fang'

const lettersInBoth = (string1, string2) => {
  const array1 = string1.split('')
  const array2 = string2.split('')
  const both = array1.filter(letter => {
    return array2.includes(letter)
  })
  // console.log('both before new Set', both)
  const deduped = [...new Set(both)]
  // console.log('new set', new Set(both))
  newString = deduped.join('')
  return newString
}

console.log(lettersInBoth(string1, string2))

// ...new Set() -> removes all duplicates
// const string3 = 'apples to oranges'
// console.log([new Set(string3)])