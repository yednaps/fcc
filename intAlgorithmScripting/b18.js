function steamroller(arr) {
  return flatten(arr,[]);
}

function flatten(a,oa) {
  if (a.length === 0) {
    return oa;
  }
  else if (!Array.isArray(a[0])) {
    if (a[0]) oa.push(a[0]);
    return flatten(a.slice(1),oa);
  }
  else {
    var head = a[0][0];
    var tail = a[0].slice(1);
    var aRest = (tail.length > 0) ? tail.concat(a.slice(1)) : a.slice(1);
    return flatten([head].concat(aRest),oa);
  }
}
