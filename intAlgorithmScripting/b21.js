function add() {
  var args = Array.prototype.slice.call(arguments);
  if (args.length == 2 && typeof(args[0]) == 'number' && typeof(args[1]) == 'number')
      return args[0] + args[1];
  else if (args.length ==1 && typeof(args[0]) == 'number')
      return function(a) { if (typeof(a) == 'number') return a + args[0]; };
  else
      return undefined;
}

console.log(add(2,3));
