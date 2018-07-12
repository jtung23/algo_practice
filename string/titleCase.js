function caps(str) {
    return str[0].toUpperCase() + str.slice(1)
}
function titleCase(title, minorWords) {
    // changing all to lowercase for comparison
      title.trim()
      if (title.length < 1) {
          return title
      }
      title = title.toLowerCase().split(' ')
      const obj = {}
    //   if minorWords do exist then set to object
      if (minorWords) {
        minorWords = minorWords.toLowerCase()
        let i = 0
        let str = ''
        while (i < minorWords.length) {
          if (minorWords[i] == ' ') { // if encounters whitespace then push into obj and reset str
            obj[str] = str
            str = ''
          } else {
            str += minorWords[i]
          }
          i++
        }
        // puts last value of string into obj
        obj[str] = str
      }
    //   loop through title array and check object if exists
    // if exists then do not caps, first need to caps first value in array
    title[0] = caps(title[0])
    title.forEach((val, i) => {
        if (!obj[val]) {
            title[i] = caps(val)
        }
    })
    return title.join(' ')  
}

console.log(titleCase(' '))