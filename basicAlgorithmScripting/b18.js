function rot13(encodedStr) {
  var codeArr = encodedStr.split("");  // String to Array
  var decodedArr = []; // Your Result goes here
  // Only change code below this line
  var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (var i = 0; i < codeArr.length; i++) {
    if (codeArr[i].match(/[A-Z]/)) {
      var bfr = codeArr[i].charCodeAt() - 65;
      var nxt = (bfr + 13)%26;
      decodedArr.push(alpha[nxt]);
    }
    else decodedArr.push(codeArr[i]);
  }


  // Only change code above this line
  return decodedArr.join(""); // Array to String
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC!"));
