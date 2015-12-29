// Function that returns true if all items pass the test
// false if at less one not.
function every(array, test){
  for (i=0; i<array.length; i++){
    if (!(test(array[i]))){
      return false;
    }
  }
  return true;
}

// Function that returns true if at less one pass the test
// false if no one pass it.
function some(array, test){
  for (i=0; i<array.length; i++){
    if (test(array[i])){
      return true;
    }
  }
  return false;
}


console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
