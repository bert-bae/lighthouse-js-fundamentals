function lastIndexOf (someArray, index) {
  var match = false;
  var output;
  for (var i = someArray.length - 1; i >= 0; i--) {
    if (someArray[i] === index) {
      match = true;
      output = i;
      break;
    }
  }
  if (match) {
    return output;
  }
  else {
    return -1;
  }
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);