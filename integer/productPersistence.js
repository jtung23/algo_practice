// if given a number, return the amount of products to go through to get a single digit.
// ex. 36: 3 * 6 = 18, 1 * 8 = 8 returns 2

const persistence = num => {
    let count = 0
    // break down num to digital roots
    // reduces and becomes number, not string
    while (Math.floor(num/10) > 0) {
        num = findProduct(num)
        count++
    }
    return count
}

const findProduct = n => {
    return n.toString().split('').reduce((a,b) => a*b)
}

persistence(999)