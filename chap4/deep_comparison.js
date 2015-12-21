function deepEqual(objectA, objectB){
  if (typeof(objectA) != "object" ||
      typeof(objectB) != "object"){
    return objectA === objectB;
  }
  else if ((typeof(objectA) == "object" && objectA != null) &&
           (typeof(objectB) == "object" && objectB != null)){
    if (objectA.length != objectB.length){
      return false;}
    else{
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
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
