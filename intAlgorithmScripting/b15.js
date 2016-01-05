function smallestCommons(arr) {
    var min = Math.min(arr[0],arr[1]);
    var max = Math.max(arr[0],arr[1]);
    var arr = [];
    for (var i = min; i <= max; i++) {
        arr.push(i);
    }
    return arr.reduce(function(a,b) { return lcm(a,b)});
}

function gcd(a,b) {
    if (b === 0) return a;
    else return gcd(b,a%b);
}

function lcm(a,b) {
    return (a*b)/gcd(a,b)
}

console.log(smallestCommons([13,1]));
console.log(smallestCommons([5,1]));
console.log(smallestCommons([1,5]));
