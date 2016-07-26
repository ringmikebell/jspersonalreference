// array delete operator & .splice method

var roygbiv = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];



// delete only deletes the element - not both the index and element associated with it.
// leaves value undefined

delete roygbiv[5];

console.log(roygbiv);
console.log(roygbiv[5]);
console.log(roygbiv.length);

// [ 'red', 'orange', 'yellow', 'green', 'blue', , 'violet' ]
// undefined
// 7 



// let's add indigo back in, even through its a dumb color...

roygbiv = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
console.log(roygbiv);

// [ 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet' ]



// most of the time, you want to decrement, or to delete both the index and its associated element.
// .splice takes two arguments. the first is the first index/element you want to delete, and the 
// second arugment is how many indecies/elements you want to delete.

// so...screw it, let's make rainbows only have four colors...

roygbiv.splice(1, 3);
console.log(roygbiv);
console.log(roygbiv.length);
console.log(roygbiv[1]);

// [ 'red', 'blue', 'indigo', 'violet' ]
// 4
// blue - the second color of our freak rainbow is now blue...

// a BIG BUTT though...since every element after the deleted index/elements must be assigned to an
// updated index, this is slow operation on large arrays.















