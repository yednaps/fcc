function fearNotLetter(str) {
    for (var i = 0; i < str.length; i++) {
        if (i + 1 == str.length) 
            return undefined
        if (str[i+1].charCodeAt() - str[i].charCodeAt() > 1)
            return String.fromCharCode(str[i].charCodeAt() + 1)
    }
}

console.log(fearNotLetter("abce"));

