// verify if at any given time n sized tic tac toe board is a winner
// at least a 2x2 board
//  0 = O, 1 = x, 2 = X
var test0 = [
    [1, 0],
    [2, 1],
]
// mid win
var test1 = [
    [1, 0, 2],
    [1, 1, 1],
    [0, 1, 2]
]
// diagonal win
var test2 = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
]
// column win
var test3 = [
    [0, 1, 1],
    [1, 1, 0],
    [0, 1, 0]
]
// no win
var test4 = [
    [1, 1, 0],
    [0, 0, 1],
    [1, 1, 0]
]
// row 0 win
var test5 = [
    [1, 0, 1],
    [0, 1, 0],
    [0, 0, 0]
]
var test6 = [
    [1, 0, 2],
    [0, 1, 2],
    [0, 0, 2]
]

// Win conditions:
//      1. if all the values in arr[index] is the same
//      2. If all values in arr[arr[index]] is the same
//      3. If index starting at 0 to n-1 for arr[arr[index]] are sequential order

// Plan: 
// start at arr[0], save value and loop going down the 2d array to see if value is the same
// If hits end then return true. if hits difference then stop and loop diagonally if
// index is [0][0] or [0][n-1]. if difference iterate to next value. Repeat
// if 2 returns false

checkWinner = arr => {

    // iterates through diagonally and checks each value. if finishes then return true,
    if (checkDiagonalWin(arr, 0 , 0, arr[0][0])) {
        return true
    }
    if (checkDiagonalWin(arr, 0 , arr.length-1, arr[0][arr.length-1])) {
        return true
    }

    let i = 0

    while (i < arr.length) {

        let j = 0

        // if first row only, check col win
        if (i === 0) {
            if (checkColWin(arr, 0, 0)) {
                return true
            }
        }

        if (checkRowWin(arr[i], j, arr[i][j])) {
            return true
        }
        // iterates through length of input array and checks for column win.

        i++
    }
    return false
}
// passes in single arr, not entire input arr
checkRowWin = (singleArr, j, val) => {
    if (singleArr[j] === 2) {
        return false
    }
    // if loop finishes, then column win and returns true
    // if difference then breaks loop and iterates j
    while (j < singleArr.length) {
        if (val === singleArr[j]) {
            j++
        } else {
            return false
        }
    }

    return true
}

checkColWin = (arr, i, j) => {
    if (arr[i][j] === 2) {
        return false
    }
    // if loop finishes, then column win and returns true
    // if difference then breaks loop and iterates j
    while (j < arr[0].length) {
        // iterates through input array vertically to test for column win
        if (checkIndivCol(arr, i , j)) {
            return true
        }
        j++
    }
    return false
}

// checks colwin by iterating vertically and maintaining same j value. if loop finishes, then
// returns true. else returns false
checkIndivCol = (arr, i, j) => {
    if (arr[i][j] === 2) {
        return false
    }
    
    let val = arr[i][j]
    while (i < arr.length) {
        // sets initial test value
        if (val === arr[i][j]) {
            i++
        } else {
            return false
        }
    }
    return true
}


checkDiagonalWin = (arr, i, j, val) => {
    if (arr[i][j] === 2) {
        return false
    }
    const length = arr[i].length
    while (i < length) {
        if (val === arr[i][j]) {
            i++
            j++
        } else {
            return false
        }

    }

    return true   
}

// test0, 1, 2, 3, 5 = true, test4 = false

console.log(checkWinner(test4))

// // refactor
// yeah it seemed to me like it should just have "checkHorizontal(arr)" checkVertical(arr) and checkDiagonal(arr) 
// and an optimization I would add
// is possibly something like a "dontCheck" list
// because you know that
// like you start horizontally
// and say you check each one
// in a 5x5 square
// in the first row
// let's say you find that only 1 of those has an X or whatever in it
// that means that you dont' have to check any of those other ones veritcally
// because if they don't have an X in them, there's no way to have a full column filled
// and i think by the same logic you can't have a diagonal 
// but the logic is a little weirder
// bc a diagonal has to be
// 0,0 1,1 2,2 or whatever
// so in your dontCheck array you'd have to keep both values if you want to be able to eliminate diagonal checking
// yeah so to summarize i would probably try to write those functions so that they only take two arguments, the array of the board and an array of the dontCheck values
// and then each funciton would have some logic to use the dontCheck array to skip values
// and also add dontCheck values when they find something that doesn't have an X in it