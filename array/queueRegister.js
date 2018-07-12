// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// The function has two input variables:

//     customers: an array (list in python) of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
//     n: a positive integer, the number of checkout tills.

// The function should return an integer, the total time required.

// EDIT: A lot of people have been confused in the comments. To try to prevent any more confusion:

//     There is only ONE queue, and
//     The order of the queue NEVER changes, and
//     Assume that the front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
//     The diagram on the wiki page I linked to at the bottom of the description may be useful.


const queueTime = (arr, n) => {
    let i = 0;
    let valuesArr = []
    // creates empty array to compare values in
    while (i < n) {
        valuesArr[i] = 0
        i++
    }
    // resets i to 0 so can use with input array, arr
    i = 0

    while (i < arr.length) {
        // finds the lowest value in the array to add the next value in the array to
        let low = valuesArr.indexOf(Math.min(...valuesArr))
        valuesArr[low] += arr[i]
        // console.log(valuesArr)
        i++
    }
    // returns greatest value in array
    return Math.max(...valuesArr)
}

const takesArr = arr => {
    takesArr2(arr)
    console.log(arr)
}
const takesArr2 = arr => {
    arr[0] = 2
}
console.log(takesArr([0,1,2]))
console.log(queueTime([10,2,3,3], 2))
console.log(queueTime([5,3,4], 1))
console.log(queueTime([2,3,10], 2))