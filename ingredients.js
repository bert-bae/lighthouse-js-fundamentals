var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

var start = 0;
while (start < ingredients.length) {
  console.log(ingredients[start]);
  start++;
}

// Write a for loop that prints out the contents of ingredients:

for (i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (i = ingredients.length - 1; i >= 0; i = i - 1) {
  console.log(ingredients[i]);
}