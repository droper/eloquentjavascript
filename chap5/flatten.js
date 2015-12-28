var arrays = [[1, 2, 3], [4, 9], [6]];

function flatten(flat, to_flat){
    return flat.concat(to_flat);
}

console.log(arrays.reduce(flatten));
