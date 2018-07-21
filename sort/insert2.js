const arr = [2, 4, 1]

function insert(arr) {
    let temp
    for (i=0; i <arr.length; i++) {
        temp = arr[i+1]
        for (j = i+1; j >= 0; j--) {
            if (arr[j-1] > arr[j]) {
                arr[j] = arr[j-1]
            } else { // temp belongs in arr j
                arr[j] = temp
                continue
            }
        }
        console.log(arr)
    }
    return arr
}

console.log(insert(arr))