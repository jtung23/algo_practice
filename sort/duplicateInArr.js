const testArr = [-12, 2, 0, 0, 2]
const testArr2 = [6, -11, 13, 5, 5, 6, 7]
const testArr3 = [-1, 1]

const duplicate = arr => {
    const result = [];
    
    arr.forEach((ele, i) => {

        if (arr.filter(each => each === ele).length > 1) {
            if (!result.includes(ele)) {
                result.push(ele)
            }
        }
    })

    return result
}

console.log(duplicate(testArr))