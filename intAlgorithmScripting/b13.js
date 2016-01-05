function sumFibs(num) {
    var i = 1;
    var sum = 0;
    var f = [1,1];

    while (sum <= num) {
        sum = f[i-1] + f[i];
        f.push(sum);
        i++;
    }
    sum = 0;
    for (var i in f) {
        if (f[i] % 2 && f[i] <= num) sum+=f[i]
    }
    return sum; 
}

function sumFibs2(num) {
    // refactored to ditch list and only loop once
    var c = 2;
    var p = 1;
    var outsum = 2;

    while (c <= num) {
        var ctmp = c + p;
        p = c;
        c = ctmp;
        if (c % 2 && c <= num) outsum += c;
    }
    return outsum; 
}

console.log(sumFibs(4));
console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(1));
console.log(sumFibs2(4));
console.log(sumFibs2(1000));
console.log(sumFibs2(4000000));
console.log(sumFibs2(1));
