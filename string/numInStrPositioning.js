// Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.

// For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"
function your_order(words){
    words.trim()
    if (words.length < 1) {
        return words
    }
    // for concating string
    let str = ''
    // to track what number is encountered
    let num
    // to count how many words are encountered
    let count = 0
    // for pushing into obj
    let obj = {}
    let i = 0
    while (i < words.length) {
        // if between 1 and 9
        if (words[i].charCodeAt(0) >= 49 && words[i].charCodeAt(0) <= 57) {
            num = words[i]
            count++
        }
        // if end of word, then set into object as reset string
        if (words[i] === ' ') {
            obj[num] = str
            str = ''
        } else {
        // concat str, once hit number save number
        str += words[i]
        }
        i++
    }
    obj[num] = str
    str = ''
    while (num < count) {
        str = obj[num] + ' ' + str
        num++
    }
    return str    
}
  

your_order("is2 Thi1s T4est 3a")