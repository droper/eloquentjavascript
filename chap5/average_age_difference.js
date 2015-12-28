// Returns the average value of a numeric array
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// All the person in an object where the key is the person name
var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// If a person mother is in the persons object then return true
function hasKnownMother(person){
  if (byName[person.mother]){
    return true;
  }
  return false
}

// Returns age of a mother
function mother_age(person){
  return person.born - byName[person.mother].born;
}

console.log(average(ancestry.filter(hasKnownMother).map(mother_age)));
