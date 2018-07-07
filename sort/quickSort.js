const unsortedArr = [9, -3, 5, 2, 6, 8, -6, 1, 3]
const unsortedArr2 = [5, 1, 4, 2, 8]
const unsortedArr3 = [1, 5, 10]

const quick = (arr) => {
    // if array length is 1 then return
    if (arr.length <= 1) {
        return arr
    }    
    // sets pivot as last value in array
    let pivot = arr.splice(arr.length-1, 1)

    // create lower array for all values less than pivot
    let lower = quick(arr.filter(val => val <= pivot[0]))

    // create upper array for all values greater than pivot    
    let upper = quick(arr.filter(val => val >= pivot[0]))

    if (lower.length === 0) {
        // concats pivot as lower bound to the rest of upper array
        return pivot.concat(upper)
    }
    if (upper.length === 0) {
        // concats pivot as upper bound to the rest of lower array
        return lower.concat(pivot)
    }
    // if upper and lower half is not empty, then concat, lower pivot and upper together
    return lower.concat(pivot, upper)

}

console.log(quick(unsortedArr))