function translate(str) {
    var fv = str.search(/[aeiou]/);
    if (fv <= 0)
        return str + 'way';
    else
        return str.substr(fv) + str.substr(0,fv) + 'ay';
}

console.log(translate('california'));
console.log(translate('glove'));
console.log(translate('eight'));
