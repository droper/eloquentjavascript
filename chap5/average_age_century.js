// Average the values of a numeric array
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var person_centuries = {};

// Obtain the century in which a person died.
// If the century is in the object then add to the list
// if not then add a list to the new key.
function century_died(person){
  var century = Math.ceil(person.died/100);
  if (century in person_centuries){
    person_centuries[century].push(person.died-person.born);
  }
  else{
    person_centuries[century] = [person.died-person.born];
  }
}

ancestry.forEach(century_died);

// Calculates the average for each century and print it.
for (var century in person_centuries){
  person_centuries[century] = average(person_centuries[century]);
  console.log(century + ": " + person_centuries[century]);
}
