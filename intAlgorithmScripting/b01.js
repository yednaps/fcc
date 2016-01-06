function sumAll (arr) {
    if (arr.length != 2)
        return NaN;
    else {
        newArr = [];
        for (var i = Math.min(arr[0],arr[1]); i <= Math.max(arr[0],arr[1]); i++) {
            newArr.push(i)
        }
        return newArr.reduce(function(p,c) {return p + c;} );
    }
}

console.log(sumAll([1, 4]));
