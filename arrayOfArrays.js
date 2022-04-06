// Given an array of arrays, create a function that puts all elements in a 
// single array (without using the JS Array method .flat())

arrayOfArrays = [['array1'], ['array2'], ['array3', 'array4']]

let joinedArray= []
const joinArrays = (array) => {
  for( let i = 0; i< array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      joinedArray.push(array[i][j])
    }
  }
  return joinedArray
}

console.log(joinArrays(arrayOfArrays))
