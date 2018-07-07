const unsortedArr = [64, 25, 12, 22, 11]

const selection = (arr) => {
    let lowest
    let found
    let i = 0
    while (i < arr.length - 2) {
        lowest = arr[i]
        let j = i+1
        while (j < arr.length) {

            if (arr[j] < lowest) {
                lowest = arr[j]
                pointer = j
            }
            
            j++
        }
        arr[pointer] = arr[i]
        arr[i] = lowest
        i++
    }
    return arr
}

console.log(selection(unsortedArr))