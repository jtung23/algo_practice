function tickets(peopleInLine){
    // creates obj to check in O(1) if exact change exists
    let obj = {
        25: 0,
        50: 0,
        100: 0
    }
    let i = 0
    while (i < peopleInLine.length) {
        // runs currentlocation in arr and checks against object
        // to see if there are enough change, if functions, 
        // check50 and check100 return false, then return 'NO'
        // else increment corresponding value in obj and iterate
        switch (peopleInLine[i]) {  
            case 25:
                break;
            case 50:
                if (!check50(obj)) {
                    return 'NO'
                }
                break;
            case 100:
                if (!check100(obj)) {
                    return 'NO'
                }
                break;
        }
        obj[peopleInLine[i]]++
        i++
    }
    return 'YES'
}

function check50(obj) {
    // if 50, then only if there is at least 1 25 bill can
    // be true
    if (obj[25] < 1) {
        return false
    } else {
        obj[25]--
        return true
    }
}

function check100(obj) {
    // if 100, two conditions for true:
    //  1. if >1 $25 bill and >1 $50 bill
    //  2. if >=3 $25 bill
    if (obj[25] >= 1 &&  obj[50] >= 1) {
        obj[25]--
        obj[50]--
        return true
    } else if (obj[25] >= 3) { 
        obj[25] = obj[25]-3
        return true
    } else {
        return false
    }
}

console.log(tickets([25,50,25,100,25,25,25,100,25,25,25,100])) // => YES 
// console.log(tickets([25, 100])) // => NO. Vasya will not have enough money to give change to 100 dollars
// console.log(tickets([25, 25, 50, 50, 100])) // NO