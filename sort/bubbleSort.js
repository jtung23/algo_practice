const unsortedArr = [12, 11, 13, 5, 6]
const unsortedArr2 = [5, 1, 4, 2, 8]

// const bubble = (arr) => {
//     let i = 0;
//     let pass = false;
//     let check = true;
//     let holder;
//     while (pass === false) {
//         i=0;
//         while (i < arr.length - 1) {
//             if (arr[i+1] < arr[i]) {
//                 let holder = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = holder
                
//                 check = false
//             }
//             i++
//             console.log(arr)
//         }
//         if (check) {
//             pass = true
//         } else {
//             check = true
//         }
        
//     }

        
//     return arr
// }

// clean version from:
// http://blog.benoitvallon.com/sorting-algorithms-in-javascript/the-bubble-sort-algorithm/
const bubble = (arr) => {
    let i = 0;
    let holder;
    while (i < arr.length) {
        let j = 1
        while (j < arr.length) {
            if (arr[j-1] > arr[j]) {
                holder = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = holder
            }
            j++
            console.log(arr)
        }
        i++
        
    }
    return arr
}

console.log(bubble(unsortedArr))