function myset(arr1, arr2, arr3) {
    var outarr = [];
    var args = Array.prototype.slice.call(arguments);
    for (var i in args) {
        for (var j in args[i]) {
            var tfArr = new Array(args.length);
            for (var k in args) {
                tfArr[k] = args[k].indexOf(args[i][j]) > -1 ? true : false;
            }
            if (tfArr.reduce(function(a,b) { return a && b;}) && outarr.indexOf(args[i][j]) == -1)
                outarr.push(args[i][j]);
        }
    }

    return outarr;
}

function unite(arr1, arr2, arr3) {
    var outarr = [];
    var args = Array.prototype.slice.call(arguments);
    for (var i in args) {
        for (var j in args[i]) {
            if (outarr.indexOf(args[i][j]) == -1)
                outarr.push(args[i][j]);
        }
    }

    return outarr;
}

console.log(unite([1, 3, 2], [5, 2, 1, 4], [2, 1]));
