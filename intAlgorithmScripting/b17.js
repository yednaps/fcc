function drop(arr, func) {
    var ind = 0;
    for (;ind < arr.length; ind++)
        if (func(arr[ind])) break;
    return arr.slice(ind);
}

console.log(drop([1, 2, 3, 7, 4], function(n) {return n > 3; }));
