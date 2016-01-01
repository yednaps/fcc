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

console.log(sumFibs(4));
console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(1));
