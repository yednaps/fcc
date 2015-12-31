function sortAsc(a,b) {
    return a - b;
}

function diff(arr1, arr2) {
    var newArr = [];
    arr1.sort(sortAsc);
    arr2.sort(sortAsc);
    for (var i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) == -1)
            newArr.push(arr1[i]); 
    }

    for (var i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1)
            newArr.push(arr2[i]); 
    }
  return newArr;
}

console.log(diff([1, 2, 3, 5], [1, 2, 3, 4, 5]));
