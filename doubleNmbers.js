let arrayOfNumbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

let doubledNumbers = []

const doubleNumbers = (numbersArray) => {
  numbersArray.forEach((number) => {
    doubledNumbers.push(number * 2)
  })
  return doubledNumbers
}

console.log(doubleNumbers(arrayOfNumbers))