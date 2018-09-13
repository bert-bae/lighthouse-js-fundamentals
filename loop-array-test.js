function range (start, end, step) {
  var someArray = [];
  if (start > end || step < 0) {
    return someArray;
  }
  else {
    for (var i = start; i <= end; i = i + step) {
      someArray.push(i);
    }
    return someArray;
  }
}