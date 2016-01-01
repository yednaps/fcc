function isPrime(n) {
    if (n != Math.floor(n)) return false;
    else if (n <= 1) return false;
    else if (n <= 3) return true;
    else if (n%2 == 0 || n%3 ==0) return false;
    var i = 5;
    while (i * i <= n) {
        if (n % i == 0 || n % (i+2) == 0) return false;
        i += 6
    }
    return true;
}

function sumPrimes(num) {
    var sum = 0;
    for (var i = 0; i <= num; i++)
        if (isPrime(i))
            sum+=i
    return sum;
}


console.log(sumPrimes(10));
console.log(sumPrimes(977));
