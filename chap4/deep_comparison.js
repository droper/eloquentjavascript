function deepEqual(objectA, objectB){
  // Deep equal comparison

  // First the base case, if one of the objects is not an
  // object or is null then use the vaue and type comparison.
  if ((typeof(objectA) != "object" && objectA != null) ||
      typeof(objectB) != "object" && objectB != null){
    return objectA === objectB;
  }
  // if both objects have different number of properties.then
  // they are different.
  else if (Object.keys(objectA).length != Object.keys(objectB).length){
    return false;
  }
  // If both objects are objects and non null then iterate over one of them and
  // try if the properties of one object are in the other. If not return false.
  else if ((typeof(objectA) == "object" && objectA != null) &&
           (typeof(objectB) == "object" && objectB != null)){
    for (nodeA in objectA){
      if (nodeA in objectB){
        return deepEqual(objectA[nodeA], objectB[nodeA]);
      }
      else {
        return false;
      }
    }
  }
}


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(obj, {here: {is: "an"}, object: 2, tree: 3}))
