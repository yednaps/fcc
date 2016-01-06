function convert(num) {
    var valArr = [1000, 900, 500,  400, 100,   90,  50,   40,  10,    9,   5,    4,   1];
    var numArr = ["M" ,"CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    //var resArr = new Array(valArr.length);
    outstr = '';
    for (var i = 0; i < valArr.length; i++) {
        //resArr[i] = Math.floor(num/valArr[i]);
        outstr += Array(1 + Math.floor(num/valArr[i])).join(numArr[i]);
        num = num % valArr[i];
    }
    return outstr;
}

console.log([1000,900,500,400,100,90,50,40,10,9,5,4,1]);
console.log(convert(5));
console.log(convert(9));
console.log(convert(12));
console.log(convert(16));
console.log(convert(29));
console.log(convert(44));
