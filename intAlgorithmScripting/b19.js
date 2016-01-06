function binaryAgent(str) {
  var os = '';
  var strArr = str.split(' ');
  for (var i in strArr) {
    os+=String.fromCharCode(b2d(strArr[i]));
  }
  return os;
}

function b2d(v) {
    var d = 0;
    var vl = v.length;
    for (var i = 0; i < vl; i++) {
        if (v[i] == '1') d += Math.pow(2,vl-1-i);
    }
    return d;
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

