// Given an array A[] that contains both positive and negative integers,
// find the maximum product subarray.
// Input: A[] = { 6, -3, -10, 0, 2 }
// Output: 180  // The subarray is {6, -3, -10}

const testArr = [-12, 2, 2, 0, 6]
const testArr2 = [12, -11, 13, -5, 6]
// solution: 10
const testArr3 = [-1, 5, 2]

var maxProduct = function(A) {
    if (A == null || A.length == 0) {
        return 0;
    }
        
    var max = A[0], min = A[0], result = A[0];
    for (var i = 1; i < A.length; i++) {
        console.log('ITER')
        var temp = max;
        max = Math.max(Math.max(max * A[i], min * A[i]), A[i]);
        console.log('max', max)

        min = Math.min(Math.min(temp * A[i], min * A[i]), A[i]);
        console.log('min', min)

        if (max > result) {
            result = max;
        }
        console.log('result', result)
    }
    return result;

};

console.log(maxProduct(testArr))