// Find digital root
// given integer, add each value of integer, if sum is greater than 10, repeat. If less than 10, return

let num = 2 // 2
let num2 = 875 // 8 + 7 + 5 = 20 // 2
// %

function digitalroot(n) {
    let sum = 0 
    n = Math.abs(n)
    
    while (n > 0) {
        let mod = n % 10
        n = Math.floor(n/10)
        
        sum += mod
    }
    
    if (sum >= 10) {
        sum = digitalroot(sum);
    }
    
    return sum
}

console.log(digitalroot(num))