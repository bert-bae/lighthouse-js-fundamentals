function whichSchool(age) {
  if (age < 13) {
    console.log('Elementary School');
  }
  else if (13 <= age && age <=18) {
    console.log('Secondary School');
  }
  else {
    console.log('Lighthouse Labs');
  }
}

whichSchool(35);