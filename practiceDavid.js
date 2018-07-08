//You are given an array of n+3 elements. All elements of the array are in range 1 to n. And all elements occur once except two numbers which occurs twice. Find the repeating number.
// const testarr = [1, 2,3, 4, 2]
// n^2 + 
//   1/2
// actualSum - expectedSum = x + y 
// actualProduct / expectedProduct = x*y 
// x +y = 20 ;; x = 20 - y 
// xy = 48 ;; (20-y)(y) = 48

// 1 2 3 4 5 6 7 8
// (8 + 1) + (2+7) 
// (n+1)(n/2)
// // 1, 2, 3, 4, 2, 4
// // 1 ,2, 3 ,4 

// // expected sum 
// // current sum
// // has to be either 1 ... n

// traverse the arr and create the key and count++ if exists return the value that has >1 for count

// const repeating = arr => {
// 	const obj = {}

//   let i = 0
//   // while (i < arr.length) {
// //     if in hash then prop++
// 		// if (obj[arr[i]]) {
// 		// obj[arr[i]]++
// 		// newArr.pusharr[i]
// 		// //			else put into hash
// 		// } else {
// 		// obj[arr[i]] = 1
// 		// }
    
//   }
//   return newArr
  
	
  
// }

// repeating(testArr)

// //////////////////////////////////////////////////////////////////////////////////////////////// //
// *****************************************/////////////////////*********************************  //

// Given an input string, reverse all the words. To clarify, input: “Interviews are awesome!” output: . “awesome! are Interviews”
// Consider all consecutive non-whitespace characters as individual words.

// let input1 = “Interviews are awesome!” // “awesome! are Interviews”
// let input2 = “bob is cool” // cool~ is bob
// let input3 = “Cookies & Rocky Road”
// let input4 = “ A” // B-C A
// let input6 = "A "
// let input5 = "A" // A

// doesnt reverse the letters, reverses seperated by white spaces.
// one pointer to save where i started
// one pointer and loop through string until sees a whitespace. Then take up to whitespace and push into array
// if whitespace is seen iterate start
// start pointer moves to one index after whitespace
// repeat til end of str

// concat a string from the array starting at end and seperated by whitespaces
// let newStr = ''
// start = 0
// p = 1
// p = 10 // 1st whitespace
// I in int inte inter inerv intervi intervie  interview interviews 11-whitespace
// start 10
// let input2 = “bob  is cool” // cool~ is bob

const reverse = str => {
  let newStr = ''
  let p = 0
  let arr = []
  
  while (p < str.length) {
//     if str[p] is not a whitespace concat to newStr
    if (str[p] !== ' ' ) {
      newStr += str[p]
//     str[p] is a whitespace AND newStr is not empty
    } else {
//     if newStr is not empty push to arr
      if (newStr !== '') {
      	arr.push(newStr)
      	newStr = ''
      } 
    }
    p++
  }
  
//   with arr, concat string starting from the end
  p = arr.length - 1
  newStr = ''
  while (p >= 0 ) {
    newStr += arr[p] + ' '
    p--
  }
  return newStr  
}

createStr = 'bob'
newStr = 'is'
createStr = newStr + ' ' + createStr

reverse(input)









