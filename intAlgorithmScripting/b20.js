function every(collection, pre) {
  // Is everyone being true?
  var outv = true;
  for (var i in collection) {
      var tmpv = true;
      if (!collection[i][pre]) tmpv = false;
      outv = outv && tmpv;
  }
  return outv;
}

console.log(every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
