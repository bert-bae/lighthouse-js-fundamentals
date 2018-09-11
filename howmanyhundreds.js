function howManyHundreds(num) {
  var difference = num - (num % 100);
  return difference/100;
}

console.log(howManyHundreds(520));