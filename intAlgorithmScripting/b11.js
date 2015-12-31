function convert(str) {
  var conv = {"&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&apos;",
             };
  for (var i in Object.keys(conv)) {
    str = str.replace(RegExp(Object.keys(conv)[i],'g'),conv[Object.keys(conv)[i]]);
  }

  return str;
}
console.log(convert("Dolce & Gabbana"));
