function pair(str) {
    var pairs = {'A' : 'T',
                 'T' : 'A',
                 'G' : 'C',
                 'C' : 'G'};

    outp = [];
    for (var i in str) {
        outp.push([str[i], pairs[str[i]]]);
    }

    return outp;
}

console.log(pair('GCG'));
console.log(pair('GATTACCA'));

