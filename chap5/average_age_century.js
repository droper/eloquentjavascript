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

/////////////////////BONUS POINT////////////////////

// Function that generalizes the grouping by acepting an array and
// a group function and brouping the values by the name.
function groupBy(array, group_function){
  var person_ages = {}
  for (item in array){
    var result = group_function(item);
    if (result.name in person_ages){
      person_ages[result.name].push(result.value);
    }
    else{
      person_ages[result.name] = [result.value];
    }
  }
  return person_ages;
}

// Group function that returns an object with two attributes
// The name that is the grouping key and the value
function century_died2(person){
  return {name: Math.ceil(person.died/100),
          value: person.died - person.born};
}


person_centuries = groupBy(ancestry, century_died2);

for (var century in person_centuries){
  person_centuries[century] = average(person_centuries[century]);
  console.log(century + ": " + person_centuries[century]);
}
