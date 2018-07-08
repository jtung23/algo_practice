// Given an array of integers, find the largest product yielded from three of the integers

var unsortedArray = [-10, 7, 29, 30, 5, -10, -70];

const largestProduct = arr => {
    // largest product after sort will either be 3 largest or 2 of the smallest and one of the largest
    // find both then compare
    arr.sort((a,b) => a-b)
    var product1 = 1,
        product2 = 1
    // find 3 largest
    // either min1 * min2 * max3 || max1 * max2 * max3
    for (let i=arr.length-1; i>arr.length-4; i--) {
        product1 *= arr[i];
    }
    product2 = arr[0] * arr[1] * arr[arr.length-1]
    if (product1 > product2) {
        return product1
    }
    return product2
}

console.log(largestProduct(unsortedArray))
