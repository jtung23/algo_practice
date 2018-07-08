// Removing duplicates of an array and returning an array of only unique elements

const arr1 = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
const arr2 = [1];
const arr3 = [5, 1, 5, 5, 1, 2, 8];

uniqueOnly = arr => {
    let i = 0;
    let obj = {}
    while (i < arr.length) {
        obj[arr[i]] = arr[i]
        i++
    }
    // using object.values to keep number type. obj.keys returns arr of strings
    return Object.values(obj)
}

console.log(uniqueOnly(arr1))