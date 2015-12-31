function myReplace(str, before, after) {
    after = (before[0] == before[0].toUpperCase()) ? after[0].toUpperCase() + after.substr(1) : after
    str = str.replace(before,after);
    return str;
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
