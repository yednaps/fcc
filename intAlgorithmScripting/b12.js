function spinalCase(str) {
  return str.match(/[A-Z]?[^A-Z _-]+/g).map(function(a) { return a.toLowerCase();}).join('-');
}
console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase('thisIsSpinalTap'));
console.log(spinalCase("Teletubbies say Eh-oh"));
