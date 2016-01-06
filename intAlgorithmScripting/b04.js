function where(collection, source) {
    var arr = [];
    var match;

    for (var i = 0; i < collection.length; i++) {
        match = true;
        for (var k in source) {
            if (collection[i][k] != source[k])
                match = false;
        }
        if (match)
            arr.push(collection[i]);
    }
    return arr;
}

console.log(where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
