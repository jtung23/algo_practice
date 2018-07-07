// merge sort

const unsortedArr = [12, 11, 13, 5, 6]
const unsortedArr2 = [5, 1, 4, 2, 8]
const unsortedArr3 = [5, 1, 4, 2, 8]

var merge = (arr) => {
    // check if arr.length is 1
    // create newArr to push values into during merge portion
    let newArr = [];
    // checks if array size is 1 to return for merge or to return at start
    if (arr.length === 1) {
        return arr
    } else {
        // finds middle
        let m = Math.floor(arr.length/2)

        // recursively returns both halves
        let pt1 = merge(arr.slice(0, m))
        let pt2 = merge(arr.slice(m))

        // iterates through both arrays and pushes the lesser value by comparing
        // values in both halves.
        let i = 0
        let j = 0
        while (pt1[i] || pt2[j]) {
            if (!pt1[i]) {
                // if value in first half is undefined meaning as looped through entiriety of
                // first half array
                newArr.push(pt2[j])
                j++
            } else if (!pt2[j]) {
                // if value in second half is undefined meaning as looped through entiriety of
                // second half array
                newArr.push(pt1[i])
                i++
            } else if (pt1[i] < pt2[j]) {
                // if neither undefined then compares and pushes smaller value
                newArr.push(pt1[i])
                i++
            } else if (pt2[j] < pt1[i]) {
                // if neither undefined then compares and pushes smaller value
                newArr.push(pt2[j])
                j++
            }
        }
    }

    return newArr
}

console.log(merge(unsortedArr3))