//  Given an array of integers, find the largest difference between
//  two elements such that the element of lesser value must come before the greater element

var array = [7, 8, 4, 9, 9, 15, 3, 1, 10];
var array1 = [7, 8, 4, 9, 9, 15, -3, 1, 10];
// [7, 8, 4, 9, 9, 15, 3, 1, 10] would return `11` based on the difference between `4` and `15`
// Notice: It is not `14` from the difference between `15` and `1` because 15 comes before 1.

// naive way
// go through and calculate largest difference for each value
// using two while looops
// return largest diference
// O(n^2)

// Track min value and max difference. 
// loop and if difference is greater than replace, if min is lower then replace
const findLargestDifference = arr => {
    if (arr.length === 1) {
        return arr, 'no difference'
    }
    let min = arr[0]
    let maxDiff = 0
    let i = 1
    while (i < arr.length) {

        // if new maxDiff is > existing, then replace
        if (arr[i] - min > maxDiff) {
            maxDiff = arr[i] - min
        }
        // if arr[i] is less than min, replace min
        if (arr[i] < min) {
            min = arr[i]
        }
        console.log(maxDiff)
        i++
    }

    return maxDiff
}


console.log(findLargestDifference(array))