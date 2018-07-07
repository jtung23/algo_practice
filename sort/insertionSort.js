// insertion sort

const unsortedArr = [12, 11, 13, 5, 6]

const insertion = (arr) => {
    let i = 1
    
    while (i < arr.length) {
        let j = i-1;
        let k = i
        let valueToSort = arr[i]
        // loop continues until the first value of the array
        // console.log(valueToSort)
        while (j >= 0 && arr[j] > valueToSort) {
            // if value below i is greater than swap and continue down
                arr[k] = arr[j]
                arr[j] = valueToSort
                k--
                j--
        }
        i++
    }


    return arr
}




console.log(insertion(unsortedArr))